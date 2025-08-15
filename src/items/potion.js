import GData from "@/items/gdata";
import Attack from "@/chars/attack";
import { ParseTarget } from "@/values/combatVars";
import { processDot } from "@/values/combatVars";

const defaults = {
	level: 1,
	repeat: true,
	stack: true,
	consume: true,
};

/**
 * This is actually only the prototype for a potion.
 * Individual potions are instanced from this data.
 */
export default class Potion extends GData {
	get isRecipe() {
		return true;
	}

	get timer() {
		return this._timer;
	}
	set timer(v) {
		this._timer = v;
	}

	get count() {
		return this._count;
	}
	set count(v) {
		this._count = v;
	}

	constructor(vars = null) {
		super(vars, defaults);

		if (this.use.attack != null && !(this.use.attack instanceof Attack)) {
			this.use.attack = new Attack(this.use.attack);
		}
		if (this.use.action != null) {
			if (this.use.action.targets) {
				this.use.action.targetstring = this.use.action.targets;
				this.use.action.targets = ParseTarget(this.use.action.targets);
			}
		}
		if (this.use.dot != null) {
			if (!this.use.dot.id) {
				if (this.use.dot.name) this.use.dot.id = this.use.dot.name;
				else this.use.dot.id = this.use.dot.name = this.name || this.id;
			}
			if (this.use.dot.dmg || this.use.dot.damage) {
				if (!this.use.dot.damage) this.use.dot.damage = this.use.dot.dmg;
				else this.use.dot.dmg = this.use.dot.damage;
				if (this.potencies && !this.use.dot.potencies) this.use.dot.potencies = this.potencies;
			}
			if (this.use.dot.heal || this.use.dot.healing) {
				if (!this.use.dot.healing) this.use.dot.healing = this.use.dot.heal;
				else this.use.dot.heal = this.use.dot.healing;
				if (this.potencies && !this.use.dot.potencies) this.use.dot.potencies = this.potencies;
			}
			processDot(this.use.dot);
		}
		this.timer = this.timer || 0;
		this.require = this.require || this.unlockTest;
	}

	/**
	 * Potions have this, but do nothing with it.
	 * @param {Context} g
	 */
	onUse(g) {}

	/**
	 * Perform cd timer tick.
	 * @param {number} dt - elapsed time.
	 * @returns {boolean} true if timer is complete.
	 */
	tick(dt) {
		this.timer -= dt;

		if (this.timer < 0) {
			this.timer = 0;
			return true;
		}
		return false;
	}
}
