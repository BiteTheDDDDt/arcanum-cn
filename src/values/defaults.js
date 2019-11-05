/**
 * Default unlock test for potions.
 * @param {GameState} g
 * @param {GameData} i
 */
export const potUnlock = ( g, i) => {
	return g.potions.level >= i.level || g.herbalism.level/2 >=i.level;
}


export default {

	"class":{
		warn:true,
		repeat:false
	},

	enc:{
		level:1,
		locked:false
	},

	enchant:{

		level:1,
		verb:'enchanting',
		need:'enchantsource'

	},

	event:{
		repeat:false
	},

	item:{
		level:1,
		repeat:true,
		stack:true
	},

	monster:{

		level:1,
		locked:false

	},

	potion:{

		level:1,
		repeat:true,
		stack:true,
		require:potUnlock

	},


	resource:{

		repeat:true
	},

	skill:{
		rate:0.5,
		buy:{
			sp:1
		},
		max:5
	},

	spell:{

		timer:0,
		repeat:true,
		level:1,
		owned:false

	}

}