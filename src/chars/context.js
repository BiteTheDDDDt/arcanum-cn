import { NpcState } from "./npcState";
import Events, { EVT_EVENT } from "../events";
import { P_TITLE, P_LOG, TYP_PCT, MONSTER } from "../values/consts";

/**
 * @interface Context
 * Alternate context for a data item (NPC spellcaster, etc.)
 */
export default class Context {

	get runner() { return this._runner;}
	set runner(v) { this._runner = v;}

	get state(){return this._state;}
	set state(v) { this._state=v}

	/**
	 * @property {Char} self - caster/user of any spell/action.
	 */
	get self(){ return this._state.self; }
	set self(v){ this._state.self = v }

	constructor( stateObj, caster ) {

		this.state = new NpcState( stateObj, caster );

	}

	getData(id){
		return this.state.getData(id);
	}

	tryItem( it ){
	}

	tryUseOn( it, targ ) {
	}

	tryBuy( it ) {
		return true;
	}

	/**
	 * Don't unlock items.
	 * @param {*} test
	 */
	unlockTest(test){
		return false;
	}

	craft(it){
		return true;
	}

	create( it, keep, count=1 ) {

		if ( typeof it === 'string') it = this.state.getData(it);
		else if ( Array.isArray(it) ) {
			for( let i = it.length-1; i>=0; i--) {
				this.create(it[i], false, count);
			}
			return;
		}

		if (!it ) return;

		for( let i = count; i >0; i--) {

			if ( it.type === MONSTER ) {
				if ( it.onCreate ) it.onCreate( this, this.self.team, false );
			}

		}


	}

	filled(){
		return false;
	}

	removeMods( mod, amt ){
		this.applyMods(mod,-amt);
	}

	remove(id, amt) {
	}

	disable(it){
	}

	/**
	 * Use item on target without paying running costs.
	 * Item effects/mods are applied to target.
	 * @param {*} it
	 * @param {*} targ
	 */
	useOn( it, targ ) {
	}

	/**
	 * Not implemented.
	 * @param {*} it
	 */
	addTimer(it){
	}

	/**
	 * Not implemented
	 */
	getLoot(){
	}
	/**
	 * Test if item can be paid for.
	 * @param {*} it
	 */
	canPay(it) {
		return true;
	}

	canEquip(it) {return true;}

	equip(it){
	}

	unequip( slot, it ){
	}

	onUnequip(it){
	}

	/**
	 * Needed for proper item interactions.
	 * @param {*} it
	 */
	setSlot( it ) {
	}

	/**
	 * Default will do nothing for now.
	 * @param {*} cost
	 */
	payCost(cost) {
	}

	canMod(mod){
		return true;
	}

	payInst( p, amt ) {
	}

	setTask(it){

	}

	canRun(it){
		return true;
	}

	canUse(it) {
		return true;
	}

	applyMods( mod, amt=1) {

		if ( !mod ) return;

		if ( Array.isArray(mod)  ) {
			for( let m of mod ) this.applyMods(m, amt);
		} else if ( typeof mod === 'object' ) {

			for( let p in mod ) {

				var target = this.getData( p );
				if ( target === undefined || target === null ) continue;
				if ( target.applyMods) {

						target.applyMods( mod[p], amt );

				} else console.warn( 'no applyMods(): ' + target );
			}

		} else if ( typeof mod === 'string') {

			let t = this.getData(mod);
			if ( t ) {

				console.warn('!!!!!!!!!!ADDED NUMBER MOD: ' + mod );
				t.amount( this, 1 );

			}

		}

	}

	applyVars( vars, dt ) {

		if (  Array.isArray(vars) ) {
			for( let e of vars ) { this.applyVars( e,dt); }

		} else if ( typeof vars === 'object' ) {

			let target, e = vars[TYP_PCT];
			if ( e && !e.roll() ) return;

			for( let p in vars ){

				target = this.getData(p);
				e = vars[p];

				if ( target === undefined || target === null ) {

					if ( p === P_TITLE ) this.self.addTitle( e );
					else if ( p === P_LOG ) Events.emit( EVT_EVENT, e );
					else console.warn( p + ' no effect target: ' + e );

				} else {

					if ( typeof e === 'number' ) {

						target.amount( e*dt );

					} else if ( e.isRVal ) {
						// messy code. this shouldn't be here. what's going on?!?!
						target.amount( dt*e.getApply(this.state, target ) );

					} else if ( e === true ) {

						target.doUnlock(this);
						target.onUse( this );

					} else if ( e.type === TYP_PCT ) {

						if ( e.roll() ) target.amount( 1 );

					} else target.applyVars(e,dt);

				}
			}

		} else if ( typeof vars === 'string') {

			let target = this.getData(vars);
			if ( target !== undefined ) {
				target.amount( dt );
			}

		}

	}

}