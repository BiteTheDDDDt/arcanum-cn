/**
 * Default unlock test for potions.
 * @param {*} g
 * @param {*} i
 */
export const potUnlock = ( g, i) => {
	return g.potions.level >= i.level || g.herbalism.level/2 >=i.level;
}


export default {

	item:{
		level:1,
		repeat:true,
		stack:true
	},

	monster:{

		level:1,
		buy:(it)=>new Stat(200*( it.level||1) ),
		locked:false

	},

	enc:{
		level:1,
		locked:false
	},

	potion:{

		require:potUnlock

	},

	enchant:{

		level:0,
		verb:'enchanting',
		need:'enchantsource'

	}



}