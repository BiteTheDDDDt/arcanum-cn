import Inventory from "./inventory";
import Group from "../composites/group";
import Events, { DELETE_ITEM } from "../events";

/**
 * @note Entire class can be removed by putting the relevant functions
 * inside Spellcrafting display.
 * Leaving for more flexibility.
 */
export default class UserSpells extends Inventory {

	constructor(vars=null) {

		super(vars);

		this.id = 'userSpells';
		this.name = "crafted spells";

	}

	removeAt(ind) {
		Events.emit( DELETE_ITEM, s );
		super.removeAt(ind);
	}

	/**
	 *
	 * @param {Spell[]} list
	 * @param {GameState} gs
	 * @param {string} [name=null]
	 */
	create( list, gs, name=null ) {

		let g = new Group();

		g.school = 'crafted';
		g.items = list;

		g.id = gs.nextId('spell');
		g.type = 'spell';
		g.name = name || 'new spell';
		g.computeCost();

		gs.addItem( g );

		this.add( g );

		return g;

	}

}