import { NpcState } from "./npcState";

/**
 * @interface Context
 * Alternate context for a data item (NPC spellcaster, etc.)
 */
export default class Context {

	get state(){return this._state;}
	set state(v) { this._state=v}

	/**
	 * @property {Char} caster - caster/user of any spell/action.
	 */
	get caster(){return this._caster;}
	set caster(v){this._caster = v}

	constructor( caster, stateObj ) {

		this.caster = caster;
		this.state = new NpcState( stateObj );

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

	filled(){
		return false;
	}

	removeMod( mod, amt ){
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

	applyMods( it, amt=1) {
	}

	applyVars( it, amt ) {
	}

}