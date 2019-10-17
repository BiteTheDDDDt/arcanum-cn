<script>

import Profile from '../../modules/profile';

import Info from './charinfo.vue';

import {center} from './popups.js';

/**
 * Hall of Wizards
 *
 * @emits set-char
 */
export default {

	components:{
		info:Info
	},
	updated() {
		center( this.$el );
	},
	methods:{

		load( slot ) {
			this.dispatch('set-char', slot );
		}

	},
	computed:{

		hall(){return Profile.hall;}

	}

}
</script>

<template>

<div class="popup wizHall">

	<info v-for="(c,i) in hall.chars" :char="c" :key="i" @load="dispatch('set-active', i)" />

	<button @click="$emit('close')">Close</button>

</div>

</template>

<style scoped>

div.wizHall {
 min-width: 400px;
 min-height: 300px;
}

</style>