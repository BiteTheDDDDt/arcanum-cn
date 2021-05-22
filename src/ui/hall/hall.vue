<script>

import Profile from '../../modules/profile';

import Info from './charinfo.vue';
import Upgrades from '../panes/upgrades.vue';
import {centerXY} from '../popups/popups.js';
import { EVT_STAT } from '../../events';

/**
 * Hall of Wizards
 *
 * @emits set-char
 * @emits dismiss-char
 * @emits close
 */
export default {

	components:{
		info:Info,
		upgrades:Upgrades
	},
	data(){
		return {
			chars:Profile.hall.chars,
			hName:Profile.hall.name
		}
	},
	mounted() {
		centerXY(this.$el);
	},
	updated() {
		centerXY( this.$el );
	},
	methods:{

		load( slot ) {

			this.$emit('close');
			this.dispatch('set-char', slot );

		},

		dismiss(slot, name ){

			this.emit( 'warn', `Dismiss ${name}`, ()=>{

				this.dispatch('dismiss-char', slot );

			});

		},

		warnDone( okay, slot ) {

			if ( okay ) this.dispatch('set-char', slot );
		}

	},
	computed:{

		hall(){ return Profile.hall; },

		availChars(){
			return Profile.hall.getChars();
		},

		prestige(){

			let p = this.hall.prestige.valueOf();

			this.dispatch( EVT_STAT, 'prestige', p );

			return Math.floor(p);

		},

		hallName:{
			get() { return this.hName; },
			set(v) {
				if ( v ) Profile.setHallName( v);
				this.hName =v;
			}
		}
	}

}
</script>

<template>

<div class="popup wizhall">

	<div class="power" @mouseenter.capture.stop="itemOver( $event, hall.prestige )">Hall Prestige: {{ prestige }}</div>

	<div class="header"><input class="fld-name text-entry" type="text" v-model="hallName">
			<div class="text-button"><a href=""
			@click.self.prevent="dispatch('hall-file',$event )" type="text/json">Hall Save</a></div>

			<confirm @confirm="dispatch('resetHall')">Wipe Hall Save</confirm>

			</div>


	<div class="chars">
	<info v-for="(c,i) in availChars" :char="c" :active="i==hall.curSlot"
		:key="i" @load="load( i)" @dismiss="dismiss(i,c.name)" />
	</div>

	<upgrades :items="hall.upgrades" />

	<div class="popup-close" @click="$emit('close')">X</div>

</div>

</template>

<style scoped>

div.wizhall {
	z-index: 5000;
	 min-width: 40vw;
	 max-width: 80vw;
	 max-height: 90vh;
	 padding: var( --rg-gap );
	 	overflow:auto;

}

div.header {
	display:flex;
	justify-content:center;
	margin: var(--md-gap);
}

div.wizhall .upgrades {
	display:flex;
	flex-flow: row wrap;
}

div.wizhall div.power {
	position: absolute;
	top: var(--lg-gap );
	left: var(--lg-gap);
	font-size: 0.94em;
}

div.header .fld-name {
	text-align: center;
	font-size: 1.4em;
}


div.wizhall .chars {
	display:flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
}



</style>