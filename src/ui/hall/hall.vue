<script>

import Profile from '../../modules/profile';

import Info from './charinfo.vue';

import {center} from '../components/popups.js';

/**
 * Hall of Wizards
 *
 * @emits set-char
 * @emits dismiss-char
 */
export default {

	components:{
		info:Info
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

			this.dispatch('set-char', slot );

		},

		dismiss(slot){
			this.dispatch('dismiss-char', slot );
		},

		warnDone( okay, slot ) {

			if ( okay ) this.dispatch('set-char', slot );
		}

	},
	computed:{

		hall(){ return Profile.hall; },

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

	<div class="power" @mouseenter.capture.stop="emit( 'itemover', $event, hall.points )">Hall Prestige: {{ Math.floor(hall.points.value.value) }}</div>

	<div class="header"><input class="fld-name text-entry" type="text" v-model="hallName"></div>

	<div class="chars">
	<info v-for="(c,i) in chars" :char="c" :active="i==hall.active"
		:key="i" @load="load( i)" @dismiss="dismiss(i)" />
	</div>

	<div class="btn-close"><button class="btn-close" @click="$emit('close')">X</button></div>

</div>

</template>

<style scoped>

div.header {
	display:flex;
	justify-content:center;
	margin: var(--md-padding);
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
	background-color: var( --background-color);
 	min-width: 640px;
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