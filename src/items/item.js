import Base, { mergeClass } from "./base";
import { assign, cloneClass } from "@/util/objecty";
import { ParseMods } from "modules/parsing";
import Instance from "@/items/instance";
import RValue, { InitRVals } from "../values/rvals/rvalue";
import Events, { ITEM_ACTION } from "../events";
import { Changed } from "@/changes";

const ItemDefaults = {
	stack: true,
	consume: true,
};

/** Properties to delete after cloneClass but before assigning save */
const deleteProp = ["alter", "_cost"];

/**
 * @class Item
 * Carryable or equippable instanced Item.
 * An instanced item can be created, destroyed, discarded, etc.
 */
export default class Item {
	/**
	 * @property {object} onuse - effect to apply on 'use' action.
	 * might be replaced with 'effect' since it seems to be the same.
	 */

	toJSON() {
		let data = Base.toJSON.call(this) || {};

		if (!this.template && !this.recipe) {
			//console.warn('MISSING TEMPLATE: ' + this.id );
			data.type = this.type;
		}

		if (this.alters && this.alters.length > 0) {
			this.alters = this.alters.filter(function (el) {
				return el != null;
			});
			data.alters = this.alters.map(v => v.id);
		}

		data.cnt = this.count || undefined;

		data.id = this.id;
		data.recipe = this.recipe;
		if (data.attack) delete data.attack;

		return data && Object.keys(data).length ? data : undefined;
	}

	/**
	 * @property {boolean} consume - whether to consume the item on use.
	 */
	get consume() {
		return this._consume;
	}
	set consume(v) {
		this._consume = v;
	}

	/**
	 * @property {number} count - count of item held.
	 */
	get count() {
		return this._count;
	}
	set count(v) {
		if (v instanceof RValue || !isNaN(v)) this._count = +v;
	} //Only assigned if its a number

	/**
	 * @property {boolean} stack - whether the item can stack.
	 */
	get stack() {
		return this._stack;
	}
	set stack(v) {
		this._stack = v;
	}

	get defaults() {
		return this._defaults || ItemDefaults;
	}
	set defaults(v) {
		this._defaults = v;
	}

	get sell() {
		return this._sell;
	}
	set sell(v) {
		this._sell = v;
	}

	constructor(vars = null, save = null) {
		if (vars) {
			cloneClass(vars, this);
		}

		if (this.sell == null) {
			this.sell = {};
			let cost = this._cost;
			if (typeof cost === "number") this.sell = { gold: cost };
			else if (cost instanceof Object) {
				if (cost.gold && !isNaN(+cost.gold)) this.sell = { gold: +cost.gold };
				else if (!isNaN(+cost)) this.sell = { gold: +cost };
			}
		}
		deleteProp.forEach(prop => {
			if (this[prop]) delete this[prop];
		});

		if (save) assign(this, save);

		if (!this.count) {
			if (vars) {
				if (vars.cnt) this.count = vars.cnt;
				else if (vars.val) this.count = vars.val;
			}
			if (!this.count) this.count = 1;
		}
		this.value = 0;

		if (this.consume === null || this.consume === undefined) this.consume = this.defaults.consume;
		if (this.stack === null || this.stack === undefined) this.stack = this.defaults.stack;

		InitRVals(this, undefined, undefined, true);
	}

	updated() {
		Changed.add(this);
		if (this.template && this.template instanceof Object) Changed.add(this.template);
	}

	canPay(cost) {
		return this.count >= cost;
	}

	canUse(g) {
		let sharecd = false;
		if (this.tags) {
			for (let tag of this.tags) {
				let t = g.state.getData(tag);
				if (t.sharecd) {
					sharecd = true;
					break;
				}
			}
		}
		if (sharecd || this.cd) {
			if (this.template) {
				let parentid = this.template;
				if (this.template.id) {
					parentid = this.template.id;
				}
				let parent = g.state.getData(parentid);

				return !parent.timer && (this.consume || this.use);
			}
		}

		return !(this.timer > 0) && (this.consume || this.use);
	}

	canRun(g) {
		return this.canUse(g);
	}

	onUse(g, inv) {
		if (this.cd) {
			if (this.template) {
				let parentid = this.template;
				if (this.template.id) {
					parentid = this.template.id;
				}
				let parent = g.state.getData(parentid);
				parent.timer = Number(parent.cd);
				g.addTimer(parent);

				if (this.tags) {
					for (let tag of this.tags) {
						let t = g.state.getData(tag);
						t.cdshare(g, parent.timer);
					}
				}
			} else {
				this.timer = Number(this.cd);
				g.addTimer(this);
				if (this.tags) {
					for (let tag of this.tags) {
						let t = g.state.getData(tag);
						t.cdshare(g, this.timer);
					}
				}
			}
		}

		if (this.consume === true) {
			this.count--;
			if (this.count <= 0) (inv || g.state.inventory).remove(this);
		}

		if (this.use) {
			if (this.use instanceof Object) {
				let { dot, attack, action, ...vars } = this.use;
				if (dot) {
					g.state.player.addDot(dot, this, null, this);
				}
				if (attack || action) {
					Events.emit(ITEM_ACTION, this, g);
				}
				g.applyVars(vars);
			} else {
				g.applyVars(this.use);
			}
		}
	}

	/**
	 * Non-stacking. Does not apply.
	 * @param {*} g
	 */
	amount(g) {}

	maxed() {
		return (this.stack === false && this.count > 0) || (this.max && this.count >= this.max);
	}

	revive(gs) {
		if (typeof this.template === "object") {
			if (!this.template.id || !gs.getData(this.template.id)) this.template = null;
		} else if (typeof this.template === "string") this.template = gs.getData(this.template);

		if (this.mod) this.mod = ParseMods(this.mod, this.id, this);

		//this.initAlters(gs);
	}

	begin(g) {
		//console.log('BEGIN CALLED: ' + this.id );
		if (this.template && this.template.alter)
			this.applyMods(this.template.alter, ...Array(5), !this.equippable || this.value > 0);
		this.initAlters(g, !this.equippable || this.value > 0);
	}
}

mergeClass(Item, Base);
mergeClass(Item, Instance);
