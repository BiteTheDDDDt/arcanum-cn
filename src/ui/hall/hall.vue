<script>

import Profile from '../../modules/profile';

import Info from './charinfo.vue';
import Upgrades from '../upgrades.vue';
import {center} from '../components/popups.js';
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
		center(this.$el);
	},
	updated() {
		center( this.$el );
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

	<div class="power" @mouseenter.capture.stop="emit( 'itemover', $event, hall.prestige )">Hall Prestige: {{ prestige }}</div>

	<div class="header"><input class="fld-name text-entry" type="text" v-model="hallName"></div>

	<div class="chars">
	<info v-for="(c,i) in availChars" :char="c" :active="i==hall.active"
		:key="i" @load="load( i)" @dismiss="dismiss(i,c.name)" />
	</div>

	<upgrades :items="hall.upgrades" />

	<div class="btn-close"><button class="btn-close" @click="$emit('close')">X</button></div>

</div>

</template>

<style scoped>

div.header {
	display:flex;
	justify-content:center;
	margin: var(--md-padding);
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
div.wizhall {
	z-index: 5000;
	 min-width: 640px;
	 max-width: 80vw;
	 max-height: 90vh;
 	padding: var( --rg-padding );

}

div.wizhall .chars {
	display:flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
}

button.btn-close {
	position: absolute;
	top: var(--md-gap);
	right: var(--md-gap);
}

</style>