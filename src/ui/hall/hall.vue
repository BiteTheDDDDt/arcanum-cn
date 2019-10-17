<script>

import Profile from '../../modules/profile';

import Info from './charinfo.vue';

import {center} from '../components/popups.js';

/**
 * Hall of Wizards
 *
 * @emits set-char
 */
export default {

	components:{
		info:Info
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

		warnDone( okay, slot ) {

			if ( okay ) this.dispatch('set-char', slot );
		}

	},
	computed:{

		hall(){return Profile.hall;}

	}

}
</script>

<template>

<div class="popup wizhall">

	<div class="chars">
	<info v-for="(c,i) in hall.chars" :char="c" :active="i==hall.active"
		:key="i" @load="load( i)" />
	</div>

	<button class="btn-close" @click="$emit('close')">Cancel</button>

</div>

</template>

<style scoped>

div.wizhall {
	background-color: var( --background-color);
 min-width: 512px;
 min-height: 320px;
}

div.wizhall .chars {
	display:flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
}

button.btn-close {
	position: absolute;
	bottom: 12px;
	right:12px;
}

</style>