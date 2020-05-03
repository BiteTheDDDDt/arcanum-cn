import Slot from './slot';
import SlotGroup from './slotgroup';

export default class Equip extends SlotGroup {

	toJSON(){
		return { slots:( this.slots ) };
	}

	constructor( vars=null ) {

		super(vars );

		this.slots = this._slots || {
			"left":new Slot(),
			"right":new Slot(),
			"head":new Slot(),
			"hands":new Slot(),
			"back":new Slot(),
			"waist":new Slot(),
			"neck":new Slot({
				max:3
			}),
			"trinket":new Slot(),
			"fingers":new Slot({
				max:4
			}),
			"chest":new Slot(),
			"shins":new Slot(),
			"feet":new Slot()
		};

		for( let p in this._slots ) this._slots[p].name = p;

	}

	/**
	 *
	 * @param {Item} it
	 */
	remove( it, slot=null ) {
		return ( it.type === 'weapon') ? this.removeWeap(it) : super.remove(it,slot);
	}

	removeWeap( it ) {
		return this.slots.right.remove(it) || this.slots.left.remove(it);
	}

	/**
	 * Get a count of items returned when using item.
	 * This is to ensure there is sufficient inventory space for new items.
	 * (Equip from Dungeon drops, multihanded weaps, etc.)
	 * @todo this is somewhat incorrect as inventory doesnt currently count spaces-used.
	 * @param {Item} it
	 * @returns {number}
	 */
	replaceCount(it) {

		let space = (it.type==='weapon') ?
			this.freeSpace( 'right' ) + this.freeSpace('left') : this.freeSpace(it.slot);

		return Math.max( ( it.numslots || 1 ) - space, 0 );

	}

	/**
	 *
	 * @param {Armor|Weapon} it
	 * @param {string} slot
	 * @returns {boolean|Wearable|Wearable[]}
	 */
	equip( it, slot=null ) {

		if ( it.type === 'weapon' ) return this.equipWeap(it);

		slot = slot || it.slot;
		if( slot === null || !this.slots.hasOwnProperty(slot)) {
			console.log( it.id + ' bad equip slot: ' + it.slot );
			return false;
		}

		let cur = this.slots[slot];
		return cur.equip(it);
	}

	/**
	 * @returns {Wearable|null} equipped weapon, or null.
	 */
	getWeapon() {
		return ( this.slots.right.empty() ===false) ? this.slots.right.item :this.slots.left.item;
	}

	/**
	 *
	 * @param {*} it
	 * @returns {Item|Item[]|true}
	 */
	equipWeap( it ) {

		let right = this.slots.right;
		let left = this.slots.left;

		if ( it.hands === 2 ) {

			let rightItem = right.equip( it );
			let leftItem = left.remove();

			return (rightItem && leftItem) ? [ rightItem, leftItem ] :
				(rightItem || leftItem || true );

		} else {

			if ( right.empty() ) {

				console.log('setting right.');

				right.equip( it );
				return ( !left.empty() ) ? left.remove() : true;

			} else if ( left.empty() ) {

				console.log('setting left.');

				left.equip( it );
				return ( !right.empty() ) ? right.remove() : true;

			} else {

				console.log('NEITHER EMPTY. switch hands.');

				let res = right.equip( left.equip(it) );
				return res;

			}

		}

	}

}