import Inventory from "./inventory";
import Group from "./group";
import Events, { DELETE_ITEM } from "../events";

/**
 * Return a cost object for crafting the list of spells.
 * @param {Spell[]} list
 */
export const craftCost = (list)=> {

	var res = {};

	for( let i = list.length-1; i>= 0; i--) {

		var s = list[i];
		res.gold = (res.gold||0) + 300*s.level;

		schoolCost( s.school, s.level, res );

	}

	return res;

}

/**
 * Generic cost function for crafting for a school of magic.
 * @param {string|string[]} school
 * @param {object} res
 */
export function schoolCost ( school, level=1, res={} ) {

	if ( Array.isArray(school) ) {
		for( let i = school.length-1; i>=0; i--) schoolCost(school[i],level,res);
	} else if ( school != null ) {

		res[ school + 'gem' ] = (res[ school + 'gem' ] || 0 ) + level*level;
		if ( level <= 5 ) {
			res.codices = ( res.codices || 0 ) + level;
		} else {
			res.tomes = ( res.tomes || 0 ) + ( level - 5);
		}

	}


	return res;

}

export default class UserSpells extends Inventory {

	constructor(vars=null) {

		super(vars);

		this.id = 'userSpells';
		this.name = "crafted spells";

	}

	revive(gs) {

		super.revive(gs);
		this.state = gs;

	}

	/**
	 * @todo: Cover removeAt()
	 * @param {*} s
	 */
	remove(s) {

		Events.emit( DELETE_ITEM, s );
		super.remove(s);
	}

	/**
	 *
	 * @param {Spell[]} list
	 */
	create( list, name=null ) {

		let g = new Group();

		g.items = list;
		g.id = this.state.nextId('spell');
		g.type = 'spell';
		g.name = name || 'new spell';
		g.computeCost();

		this.state.addItem( g );

		this.add( g );

		return g;

	}

}