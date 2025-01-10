import Stat from "@/values/rvals/stat";
import Resource from "@/items/resource";
import { toStats } from "@/util/dataUtil";
import Loader from "@/util/jsonLoader";
import Events, {
	LEVEL_UP,
	NEW_TITLE,
	CHAR_TITLE,
	CHAR_NAME,
	CHAR_CLASS,
} from "../events";
import Wearable from "@/chars/wearable";
import GData from "@/items/gdata";
import Char from "@/chars/char";
import { RESOURCE, TEAM_PLAYER, getDelay, WEAPON } from "@/values/consts";

import { NO_ATTACK } from "@/chars/states";
import DataList from "@/inventories/dataList";
import { Changed } from "@/changes";
import { SAVE_IDS } from "@/inventories/inventory";

/**
 * @const {string[]} LoseConditions - player retreats from locale if any of these stats are empty.
 */
const DefeatStats = [];
new Loader("./data", ["defeatstat"]).load().then((e) => {
	e.defeatstat.forEach((i) => DefeatStats.push(i));
	Object.freeze(DefeatStats);
});

const Fists = new Wearable(null, {
	id: "baseWeapon",
	name: "fists",
	type: WEAPON,
	attack: {
		name: "fists",
		tohit: 1,
		kind: "blunt",
		damage: "0~1",
	},
});

/**
 * @constant {number} EXP_RATE
 */
const EXP_RATE = 0.125;

export default class Player extends Char {
	get level() {
		return this._level;
	}
	set level(v) {
		if (this._level && typeof v === "number") {
			this._level.value = v;
		} else this._level = v;
	}

	/**
	 * currently active title.
	 * @property {string} title
	 */
	get title() {
		return this._title;
	}
	set title(v) {
		this._title = v;
	}

	/**
	 * @property {string[]} titles
	 */
	get titles() {
		if (this._titles == null) this._titles = [];
		return this._titles;
	}
	set titles(v) {
		this._titles = v;
	}

	/**
	 * @property {} exp
	 */
	get exp() {
		return this._exp;
	}
	set exp(v) {
		if (this._exp === undefined) this._exp = v;
		else {
			this._exp.value = v;
			while (this._next > 0 && this._exp.value >= this._next) this.levelUp();
		}
	}

	/**
	 * @property {string} gclass - name of last game class attained.
	 */
	get gclass() {
		return this._gclass;
	}
	set gclass(v) {
		this._gclass = v;
	}

	/**
	 * @property {number} next - exp to level up.
	 */
	get next() {
		return this._next;
	}
	set next(v) {
		this._next = v;
	}

	/**
	 * @property {GData} hp - player hitpoints.
	 */
	get hp() {
		return this._hp;
	}
	set hp(v) {
		if (this._hp) this._hp.value = v;
		else if (v instanceof GData) this._hp = v;
		else console.error("Invalid Hp: " + v);
	}

	/**
	 * @property {Stat} damage - bonus damage per attack.
	 */
	get damage() {
		return this._damage;
	}
	set damage(v) {
		this._damage = v instanceof Stat ? v : new Stat(v);
	}

	/**
	 * @property {Resource} speed
	 * speed normalized to an average of level=speed.
	 */ /*
get speed() { return this._speed; }
set speed(v) {

if ( this._speed ) this._speed.value = v;
else if ( v instanceof GData ) this._speed = v;

}
*/
	/**
	 * @property {DataList<Wearable>} weapons - active weapons.
	 */
	get weapons() {
		return this._weapons;
	}
	set weapons(v) {
		this._weapons = new DataList(v);
		this._weapons.saveMode = SAVE_IDS;
		this._weapons.removeDupes = true;
	}

	/**
	 * Property continues to exist so spells/abilities can access 'current weapon'
	 * @property {Wearable} weapon - primary weapon.
	 */
	get weapon() {
		return this._weapons ? this._weapons.curItem() : null;
	}

	/**
	 * @property {.<string,Stat>} hits - tohit bonuses per damage kind.
	 */
	get hits() {
		return this._hits ? this._hits : (this._hits = {});
	}
	set hits(v) {
		this._hits = toStats(v);
	}

	/**
	 * NOTE: Elements that are themselves Items are not encoded,
	 * since they are encoded in the Item array.
	 * @return {object}
	 */
	toJSON() {
		let data = {};

		data.defense = this.defense;
		data.tohit = this.tohit;
		data.name = this.name;

		data.titles = this.titles;
		data.title = this.title;

		data.next = this.next;
		// attack timer.
		data.timer = this.timer;
		data.alignment = this.alignment;
		data.damage = this.damage;
		data.dots = this.dots;

		data.bonuses = this.bonuses;
		data.hits = this.hits;
		data.immunities = this.immunities;
		data.resist = this.resist;

		data.retreat = this.retreat || undefined;

		data.gclass = this.gclass;

		data.weapons = this.weapons;

		if (data.attack) delete data.attack;

		return data;
	}

	/**
	 * Get player tohit bonus for damage type.
	 * @param {*} kind
	 * @returns {number}
	 */
	getHit(kind, weapon = null) {
		let weaponhit = 0;
		if (weapon && this.weapon.tags) {
			for (let e of this.weapon.tags) {
				let interkind = e.replace("t_", "");
				if (interkind == kind) continue;
				if (this.hits[interkind]) weaponhit += this.hits[interkind];
			}
		}
		return (
			this.tohit.valueOf() + (kind ? this.hits[kind] || 0 : 0) + weaponhit || 0
		);
	}

	constructor(vars = null) {
		super(vars);

		this.id = this.type = "player";
		if (!vars || !vars.name) this.name = "Wizrobe";

		if (!this.weapons) {
			this.weapons = null;
		}

		//if ( vars ) Object.assign( this, vars );
		if (!this.level) this.level = 0;
		this._title = this._title || "Waif";

		this.titles = this._titles || [];

		this._next = this._next || 50;

		this.team = TEAM_PLAYER;
		this.chaincast = this.chaincast || 1;
		/**
		 * @property {GData[]} retreats - stats to check for empty before retreating.
		 * Initialized from RetreatStats
		 */
		this.defeators = [];
		this.retreat = this.retreat || 0;

		this.initStates();

		if (!this.tohit) this.tohit = 1;
		if (!this.defense) this.defense = 0;

		this.alignment = this.alignment || "neutral";

		if (this.damage === null || this.damage === undefined) this.damage = 1;
	}

	/**
	 *
	 * @param {string} gclass - name of class added
	 */
	setClass(gclass) {
		this.gclass = gclass;
		this.addTitle(gclass);
		Events.emit(CHAR_CLASS, this);
	}

	setName(name) {
		if (!name) return;
		this.name = name;
		Changed.add(this);
		Events.emit(CHAR_NAME, this);
	}

	setTitle(title) {
		if (!title) return;
		title = title.trim();
		this.title = title;
		this.addTitle(title);

		Events.emit(CHAR_TITLE, this);
	}

	addTitle(title) {
		title = title.trim();
		if (!this._titles.includes(title.trim().toTitleCase())) {
			this.context.applyVars("fame", 0.1);
			this._titles.push(title.toTitleCase());
			Events.emit(NEW_TITLE, title, this._titles.length);
		}
	}

	revive(gs) {
		super.revive(gs);

		this.weapons.revive(gs, (s, v) => {
			s.equip.find(v);
		});

		if (this.weapons.count === 0) {
			this.weapons.add(Fists);
		}

		for (let i = DefeatStats.length - 1; i >= 0; i--) {
			const it = gs.getData(DefeatStats[i]);
			if (it) this.defeators.push(it);
		}
		this.spells = gs.getData("spelllist");

		let exp = Object.getOwnPropertyDescriptor(this, "exp");
		Object.defineProperty(this, "exp", {
			get() {
				return exp.get();
			},
			set(v) {
				exp.set(v);
				this.checkLevelUp();
			},
		});
		this.checkLevelUp();
	}

	checkLevelUp() {
		let stat = this.exp;
		while (this.next > 0 && stat.value >= this.next) this.levelUp();
	}

	/**
	 * Add item to active weapons.
	 * @param {Wearable} it
	 */
	addWeapon(it) {
		this.weapons.add(it);
		if (this.weapons.count > 1) {
			// check for fists.
			this.weapons.remove(Fists);
		}
	}

	/**
	 * Remove item from active weapons.
	 * @param {Wearable} it
	 */
	removeWeapon(it) {
		this.weapons.remove(it);
		if (this.weapons.count === 0) {
			this.weapons.add(Fists);
		}
	}

	/**
	 * Called once game actually begins. Dot-mods can't be applied
	 * before game start because they can trigger game functions.
	 */
	begin() {
		for (let i = this.dots.length - 1; i >= 0; i--) {
			if (this.dots[i].mod) this.context.applyMods(this.dots[i].mod, 1);
		}
	}

	/**
	 * Determine if player has fully rested and can re-enter a locale.
	 * @returns {boolean}
	 */
	rested() {
		for (let i = this.defeators.length - 1; i >= 0; i--) {
			if (this.defeators[i].maxed() === false) return false;
		}
		return true;
	}

	/**
	 * @returns {boolean}
	 */
	defeated() {
		for (let i = this.defeators.length - 1; i >= 0; i--) {
			if (this.defeators[i].empty()) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Explore player action.
	 * @param {*} dt
	 */
	explore(dt) {
		this.timer -= dt;
		if (this.timer <= 0) {
			this.timer += getDelay(this.speed);

			// attempt to use cast spell first.
			for (let i = this.castAmt(this.chaincast); i > 0; i--) {
				this.tryCast();
			}
		}
	}

	/**
	 * Get combat action.
	 * @param {*} dt
	 */
	combat(dt) {
		this.timer -= dt;
		if (this.timer <= 0) {
			this.timer += getDelay(this.speed);
			// attempt to use spells first.
			for (let i = this.castAmt(this.chaincast); i > 0; i--) {
				this.tryCast();
			}
			//you can now actually use fists with spells, why was that not allowed?
			return this.nextAttack();
		}
	}
	tryCast() {
		return this.spells?.onUse(this.context) ?? null;
	}

	/**
	 * Get next weapon attack.
	 */
	nextAttack() {
		let a = this.getCause(NO_ATTACK);
		if (a) return a;

		let nxt = this.weapons.nextItem();
		if (Array.isArray(nxt.attack))
			return nxt.attack[Math.floor(Math.random() * nxt.attack.length)];
		return nxt?.attack ?? null;
	}

	/**
	 * @returns {Resource[]} - list of all resources defined by Player.
	 */
	getResources() {
		const res = [];

		for (let p in this) {
			const obj = this[p];
			if (obj !== null && typeof obj === "object" && obj.type === RESOURCE)
				res.push(obj);
		}

		return res;
	}

	removeResist(kind, amt) {
		if (this._resist[kind]) this._resist[kind].base -= amt;
	}

	addResist(kind, amt) {
		if (!this._resist[kind]) this._resist[kind] = new Stat(amt);
		else this._resist[kind].base += amt;
	}

	levelUp() {
		this.level.amount(1);

		this._exp.value -= this._next;
		this._next = Math.floor(this._next * (1 + EXP_RATE));

		Changed.add(this);

		Events.emit(LEVEL_UP, this, this._level.valueOf());
	}

	/**
	 * Init immunities, resists, etc.
	 */
	initStates() {
		this._resist = this._resist || {};
		for (let p in this._resist) {
			this._resist[p] = new Stat(this._resist[p]);
		}

		this.regen = this.regen || 0;

		if (!this.immunities)
			this.immunities = {
				fire: 0,
				water: 0,
				air: 0,
				earth: 0,
				light: 0,
				shadow: 0,
				arcane: 0,
				physical: 0,
				natural: 0,
				poison: 0,
				disease: 0,
			};

		if (!this.bonuses) this.bonuses = {};
	}
}
