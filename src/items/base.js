import {changes, jsonify, cloneClass, getDescs  } from 'objecty';
import Game from '../game';
import Stat from '../values/rvals/stat';
import Mod from '../values/mods/mod';
import { TYP_MOD } from '../values/consts';
import RValue, { SubPath } from '../values/rvals/rvalue';
import { Changed } from '../techTree';
import { ParseMods } from '../modules/parsing';
import { canWriteProp } from '../util/util';

export const SetModCounts = ( m, v)=>{

	if ( m instanceof Mod ) {
		//console.log('setting mod count: ' + m.id + ' val: ' + v );
		m.count = v;
	}
	else if ( typeof m ==='object') {
		for( let p in m ){ SetModCounts(m[p], v); }
	}

}


export const mergeClass = ( destClass, src ) => {

	let proto = destClass.prototype || destClass;
	let srcDescs = Object.getOwnPropertyDescriptors( src );
	let protoDescs = getDescs(proto);

	// NOTE: valueOf not overwritten.
	for( let p in srcDescs ) {
		if ( !protoDescs.has(p) ) Object.defineProperty( proto, p, srcDescs[p]);
	}

	return destClass;

}

//NOTE if there is a circular reference within the object, this WILL infinitely loop
/**
 * Collects the first encountered mod property within each of an object's properties into one array.
 * @param {Object} obj object to be reduced
 * @returns {Array<Object>} objects array containing all mod property values found
 */
 function findMods( obj, src ) {
	//prevents delving into any instances of classes; should only be dealing with Objects
	if( !obj || !( typeof obj === "object" && obj.constructor === Object ) ) return [];

	//Collects all mods into one object
	return Object.values( obj ).reduce( ( results, val ) => [ ...results, ...findMods( val ), ...(obj.mod ? [obj.mod] : [])], [] );
}


 /**
  * @todo shorten list by implementing better base/defaults logic.
  * @const {Set.<string>} JSONIgnore - ignore these properties by default when saving.
  */
 const JSONIgnore = new Set( ['template', 'id', 'type', 'defaults', 'module', 'sname',
	 'sym', 'warn', "effect", "length", 'runmod', 'name', 'desc', 'running', 'current', 'warnMsg',
	 'once', 'context', 'enemies', 'encs', 'boss', 'spawns','targets','only',
	 'locked', 'locks', 'value', 'exp', 'delta', 'tags', 'mod', 'alter', 'progress','need', 'require','action' ]);

/**
 * Base class of all Game Objects.
 */
export default {

	toJSON() {

		if ( this.save && (this.value>0||this.owned)) return this.forceSave();

		let vars = jsonify(this, JSONIgnore );
		if ( this.template ) vars = changes( vars, this.template );

		if ( this.locked === false && this.template && this.template.locked !== false ){
			vars = vars || {};
			vars.locked = this.locked;
		}
		if ( vars && vars.name ) vars.name = this.sname;

		return vars || undefined;

	},

	forceSave(){

		let data = jsonify(this);
		if ( this.mod ) data.mod = this.mod;
		if ( this.slot ) data.slot = this.slot;
		if ( this.effect) data.effect = this.effect;
		if ( this.use ) data.use = this.use;

		if ( data.template && typeof data.template === 'object' ) data.template = data.template.id;
		if ( data.val ) data.value = undefined;
		data.name = this.sname;

		return data;

	},

	/**
	 * @property {string} id
	 */
	get id() { return this._id; },
	set id(v) { this._id = v;},

	/**
	 * @property {Object} template - original data used to create the Item.
	 * Should be raw, immutable data.
	 */
	get template() { return this._template; },
	set template(v) { this._template = v;},

	/**
	 * @property {string} type
	 */
	get type() { return this._type },
	set type(v) { this._type =v;},

	get typeName(){return this._type;},

	/**
	 * @property {string} id - internal id.
	 */
	toString(){return this.id;},

	/**
	 * @property {string} sname - Simple name without symbol.
	 */
	get sname(){ return this._name || this.id; },

	/**
	 * @property {string} name - displayed name.
	 */
	get name() { return (( this._actname && this._value < 1 ) ? this.actname
		: (this.sym||'') + (this._name||this.id));
	},
	set name(v) {

		if ( v&&this.sym ) {

			this._name = v.split(this.sym).join( '').trim();

		} else this._name = v;


	},

	/**
	 * @property {boolean} repeat - whether the item is repeatable.
	 */
	get repeat(){return this._repeat;},
	set repeat(v) { this._repeat=v},

	/**
	 * @property {string} desc
	 */
	get desc() { return ( this.actdesc && this._value < 1 ) ? this.actdesc : (this._desc || null ); },
	set desc(v) { this._desc=v;},

	/**
	 * @property {number} current - displayable value; override in subclass for auto rounding, floor, etc.
	 */
	get current() { return this.value },

	/**
	 * @property {number} ex - save/load alias for exp without triggers.
	 */
	get ex(){return this._exp; },
	set ex(v) { this._exp = v;},

	/**
	 * @property {number} val - saving/loading from json without triggers.
	 */
	get val() { return this._value },
	set val(v) { this._value = v; },

	/**
	 * @property {number} value
	 */
	get value() { return this._value; },
	set value(v) {
		this._value = v;
	},
	valueOf() { return this._value; },

	/**
	 * @property {number} delta - value change this frame.
	 * added to value at end of frame.
	 */
	get delta(){return 0;},

	/**
	 * @property {string[]} tags - tag to distinguish between
	 * item subtypes.
	 */
	get tags() { return this._tags;},
	set tags(v) {

		if ( typeof v === 'string') {
			this._tags = v.split(',');
		} else if ( Array.isArray(v) ) {

			this._tags = v;

		} else this._tags = null;

	},

	permVars( mods, targ=this ) {

		//console.log( 'PERM VARS: ' + typeof mods);
		//console.log('eNC TARG: ' + typeof targ);
		if ( typeof targ === 'number') {

			// error.

		} else if ( typeof mods === 'object') {

			for( let p in mods ) {

				var mod = mods[p];
				var sub = targ[p];

				if ( sub === undefined || sub === null ) {

					sub = targ[p] = cloneClass( mod );

				} else if ( typeof sub === 'number' ) {

					targ[p] = (sub||0) + mods[p].valueOf();

				} else if ( typeof mod === 'object' ) {

					if ( mod.constructor !== Object ) sub.perm( mod );
					else this.permVars( mod, sub );

				}
				else console.log( this.id + ' UNKNOWN PERM VAR: ' + p + ' typ: ' + (typeof sub ));


			}

			if ( targ === this && mods.mod ) {
				ParseMods( this.mod, this.id, this );
				//SetModIds( targ.mod, targ.id );
			}

		}

	},

	/**
	 *
	 * @param {Object} vars - values to change/add.
	 * @param {number} amt - factor of base amount added
	 * ( fractions of full amount due to tick time. )
	 */
	applyVars( vars, amt=1 ) {

		if ( typeof vars === 'number') {

			//deprec( this.id + ' mod: ' + mods );
			this.value.add( vars*amt );

		} else if ( vars.isRVal ) {

			this.amount( amt*vars.getApply( Game.state, this ) );
			//this.value.add( amt*vars.getApply( Game.state, this ) );


		} else if ( typeof vars === 'object' ) {

			if ( vars.mod ) this.changeMod( vars.mod, amt );

			for( let p in vars ) {

				// add any final value last.
				if (  p === 'skipLocked' || p === 'value') continue;

				let targ = this[p];
				let sub = vars[p];

				if ( targ instanceof RValue ) {

					//console.log('APPLY ' + vars[p] + ' to stat: '+ this.id + '.'+ p + ': ' + amt*vars[p] + ' : ' + (typeof vars[p]) );

					targ.apply( sub, amt );

				} else if ( typeof sub === 'object' ) {

					if ( sub.type === TYP_MOD ) {

						sub.applyTo( this, p, amt );

					} else if ( typeof targ === 'number' || sub.isRVal ) {

						//deprec( this.id + ' targ: ' + p + ': ' + targ );
						this[p] += Number(sub)*amt;
					} else {

							//console.log( this.id + ' subapply: ' + p);
						this.subeffect( targ, sub, amt );
					}

				} else if ( targ !== undefined ) {

					//console.log( this.id + ' adding vars: ' + p );
					this[p] += Number(sub)*amt;

				} else {
					console.log('NEW SUB: ' + p );
					this.newSub( this, p, sub, amt )
				}

			}
			if ( vars.value ) {
				this.amount( vars.value*amt);
				//this.value += (vars.value)*amt;
			}

		}


		Changed.add(this);

	},

	/**
	  * Apply mod(s) recursively.
	 * @param {Object} mods - Mods being applied to target
	 * @param {number} [amt=1] - mod multiplier. Used when a mod doesn't have an id.
	 * @param {Object} [targ=this] - target of mods.
	 * @param {Object} [src=this] - source of mods. Used for applyObj 
	 * @param {string} [path=targ.id] - Path used for creating ids.
	 * @param {boolean} [isMod=false] - subobject mod check.
	 * @returns {Object} mod path object used in applyObj
	 */
	applyMods( mods, amt=1, targ=this, src=this, path=this.id, isMod=false, initialCall=true ) {

		Changed.add(this);

		if ( mods instanceof Mod ) {

			return mods.applyTo( targ, 'value', amt );

		} else if ( mods.constructor === Object ) {

			let nextMods = this.applyObj( mods, amt, targ, src, path, isMod );
			if ( initialCall ) {
				this.changeMod( findMods( nextMods ) , amt );
			}

			return nextMods;

		} else if ( typeof mods === 'number') {

			console.warn( mods + ' RAW NUM MOD ON: ' + this.id );

			/*if ( targ instanceof Stat ) {

				console.error( '!!!!! ' + mods + ' number apply to: ' + this.id );
				targ.add( mods*amt );

			} else if ( typeof targ === 'object') {

				console.warn( this.id + ' TARG is RAW OBJECT: ' + mods );
				targ.value = (targ.value || 0 ) + amt*mods;

			} else {
				// nothing can be done if targ is a number. no parent object.
				console.error( this.id + ' !!invalid mod: ' + mods );
			}*/

		} else console.warn( this.id + ' unknown mod type: ' + mods );

		return null;

	},

	/**
	 * Apply a mod when the mod is recursive object.
	 * @param {Object} mods - Mods being applied to target
	 * @param {number} amt - mod multiplier. Used when a mod doesn't have an id.
	 * @param {Object} targ - target of mods.
	 * @param {Object} [src=this] - source of mods. Used for new stats/mods.
	 * @param {string} path - Path used for creating ids.
	 * @param {boolean} [isMod=false] - subobject mod check.
	 * @returns {Object} New mod objects
	 */
	applyObj( mods, amt, targ, src, path, isMod ) {

		let results = {}

		for( let p in mods ) {

			let res = null;

			let subMod = mods[p];
			let subTarg = targ[p];
			let modCheck = p === 'mod' || isMod;

			//Only needed when subTarg is null or undefined
			let newSrc = modCheck || isNaN(+subTarg) ? src : subTarg; //may need a better check for source.
			let newPath = (path ? path + '.' : '') + p;

			if ( (subTarg === undefined || subTarg === null) ) {

				if( !canWriteProp(targ, p ) ) continue;

				if ( subMod.constructor === Object ) {

					res = this.applyObj( subMod, amt, targ[p]={}, newSrc, newPath, modCheck );

				} else {

					let params = [
						0, //vars
						newPath, //id
						newSrc //source
					];

					(res = targ[p] = modCheck ? new Mod( ...params ) : new Stat( ...params )).addMod( subMod, amt );

										//@todo use more accurate subpath.
					// subTarg.id = SubPath(this.id, p );
					
					//console.log( this.id + '.' + p  + ': ' + subMod + ': targ null: ' + subTarg.valueOf() + ' mod? ' + isMod );
				}


			} else if ( subTarg.applyMods ) {

				res = subTarg.applyMods( subMod, amt, subTarg, newSrc, newPath, modCheck );

			} else if ( subMod.constructor === Object ) {

				res = this.applyObj( subMod, amt, subTarg, newSrc, newPath, modCheck );

			} else if ( subMod instanceof Mod ) {

				res = subTarg.isRVal ? subTarg.addMod( subMod, amt ) : subMod.applyTo( targ, p, amt );

			}else if ( typeof subMod === 'number' ) {
				console.warn( 'RAW NUMBER MOD on: ' + this.id + ': ' + p + ': ' + subMod );
			}
			else if ( typeof subMod === 'boolean' ) {
				if (amt>0) {
					subTarg.value = subMod;
				} else if (amt<0) {
					subTarg.value = !subMod;
				};
			}
			/*else if ( typeof subMod === 'number' ) {

				if ( typeof subTarg === 'number') {

					console.warn('MOD OF RAW NUM: ' + p + ' : ' + (m*amt ) );
					targ[p] = new Stat( targ[p] + subMod*amt, SubPath(this.id, p) );

				} else this.applyMods( subMod, amt, subTarg);

			}*/else {

				console.warn( `UNKNOWN Mod to ${this.id}.${p}: ${subMod}` + '  ' + typeof subMod);
			}

			if ( res && Object.keys(res).length ) results[p] = res;

		}

		return results;

	},

	/**
	 *
	 * @param {Mod|Object} mods
	 * @param {Object} [targ=null]
	 */
	removeMods( mods, targ=this ) {

		if ( targ === this ) Changed.add(this);
		else if ( !targ ) return;

		if ( mods instanceof Mod ) {

			if ( typeof targ === 'object') {

				if ( targ.isRVal ) targ.removeMods( mods );
				else this.removeMods(mods, targ.value );
			}

		} else if ( mods.constructor === Object ) {

			for( let p in mods ) {
				this.removeMods( mods[p], targ[p] );
			}

		} else if ( typeof mods === 'number') {

			console.warn( this.id + ' REMOVED NUMBER MOD: ' + mods );

		} else console.warn( this.id + ' unknown mod type: ' + mods );

	},

	/**
	 * Perform a subobject assignment.
	 * @param {Object} obj - base object being assigned to.
	 * @param {Object} m - object with subobjects representing assignment paths.
	 * @param {number} amt - amount multiplier for any assignments.
	 */
	subeffect( obj, m, amt ) {

		if ( typeof obj !== 'object' ) {
			//console.warn( 'invalid assign: ' + obj + ' = ' + m );
			return;
		}

		for( let p in m ) {

			//console.log('SUBEFFECT(): ' + p + '=' + m[p]);

			if ( typeof m[p] === 'object' ) {
				this.subeffect( obj[p], m[p], amt );
			} else {

				if ( typeof obj[p] === 'object') {

					obj[p].value = ( obj[p].value || 0 ) + Number(m[p])*amt;

				} else obj[p] += Number(m[p])*amt;

			}

		}

	},

	/**
	 * Add new sub-object to this object.
	 * Vue reactivity??
	 * @todo
	 * @param {Object} obj - parent object.
	 * @param {string} key - prop key to set.
	 * @param {Object} mod - modify amount.
	 * @param {number} [amt=1] - times modifier applied.
	 */
	newSub( obj, key, mod, amt=1 ) {

		console.warn( 'ADD SUB: ' + this.id + ' ' + key + ' stat: ' + (amt*mod.value) );

		let s = obj[key] = new Stat( typeof mod === 'number' ? mod*amt : 0, 'key' );
		if ( mod instanceof Mod ) s.apply( mod, amt );

	},

	/**
	 * Modify a mod applied by the Item.
	 * @param {Object|Mod|number} mod
	 * @param {number} amt - percent of change applied to modifier.
	 */
	changeMod( mod, amt ) {

		// apply change to modifier for existing item amount.
		Game.applyMods( mod, amt*this.value );

	},

	/**
	 * Add tag to object.
	 * @param {string} tag
	 */
	addTag( tag ) {
		if ( Array.isArray(tag) ) tag.forEach( t => this.addTag( t ), this );

		else if ( this._tags == null ) this._tags = [ tag ];
		else if ( !this._tags.includes(tag) ) this._tags.push(tag);
	},

	/**
	 *
	 * @param {string} t - tag to test.
	 * @returns {boolean}
	 */
	hasTag( t ) { return this.tags && this.tags.includes(t); },

	/**
	 * Test if item has every tag in list.
	 * @param {string[]} a - array of tags to test.
	 * @returns {boolean}
	*/
	hasTags( a ) {

		if ( !this._tags ) return false;
		for( let i = a.length-1; i >= 0; i-- ) if ( !this._tags.includes(a[i]) ) return false;

		return true;

	},

	canUse(){return true;},

	/**
	 * Test if tag has any tag in the list.
	 * @param {string[]} a - array of tags to test.
	 * @returns {boolean}
	 */
	/*anyTag( a ) {

		if ( !this._tags ) return false;
		for( let i = a.length-1; i >= 0; i-- ) if ( !this._tags.includes(a[i]) ) return true;

		return false;

	},*/

}