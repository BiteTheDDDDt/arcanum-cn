import Inventory from "./inventory";
import Group from "../composites/group";
import Events, { DELETE_ITEM } from "../events";

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

		g.school = 'crafted';
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