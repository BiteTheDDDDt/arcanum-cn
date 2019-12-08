<script>
import Profile from 'modules/profile';
import Settings from 'modules/settings';

import { center } from '../components/popups';

/**
 * @listens open-settings
 * @emits save-settings
 * @emits setting
 */
export default {

	data(){

		return {
			closed:true
		};
	},
	updated() {

		if (!this.closed) center(this.$el);
	},
	created() {

		this.listen('open-settings', this.show );

		for( let p in Settings.vars ) {
			this.dispatch('setting', p, Settings.vars[p] );
		}

	},
	methods:{

		clear(){

		},

		close() {
			this.dispatch('save-settings');
			this.closed = true;
		},

		show() {
			this.closed = false;
		}

	},
	computed:{

		compactMode: {
			get() { return Settings.vars.compactMode; },
			set(v){
				Settings.vars.compactMode=v;
				this.dispatch('setting', 'compactMode', v);
			}

		},
		autoSave:{
			get(){
				return Settings.vars.autoSave;
			},
			set(v){
				Settings.vars.autoSave = v;
				this.dispatch('setting', 'autoSave', v );
			}
		},
		darkMode:{
			get(){
				return Settings.vars.darkMode;
			},
			set(v){
				Settings.vars.darkMode = v;
				this.dispatch('setting', 'darkMode', v );
			}
		}

	}

}
</script>

<template>

<div v-if="!closed" :class="['settings', 'popup']">

	<div>
	<label :for="elmId('auto-save')">auto-save</label>
	<input type="checkbox" :id="elmId('auto-save')" v-model="autoSave">
	</div>

	<div>
	<label :for="elmId('dark-mode')">dark mode</label>
	<input type="checkbox" :id="elmId('dark-mode')" v-model="darkMode">
	</div>

	<div>
	<label :for="elmId('compact-mode')">compact mode</label>
	<input type="checkbox" :id="elmId('compact-mode')" v-model="compactMode">
	</div>

	<!--<div><button @click="clear">Clear Settings</button></div>-->
	<!--<div class="nowarn">

		<div v-for="it in nowarns" :key="it"><span>{{it}}</span><button @click="clearWarn">Delete</button></div>

	</div>-->

	<div class="note-text sm">thanks to:<br>
		dbulm2<br>
		mathias
	</div>

	<button class="close" @click="close">close</button>

</div>

</template>

<style scoped>

.settings {
	height:auto;
	min-height:5.5rem;
	min-width:30%;
	max-width:60%;
	position: absolute;
	z-index:10000;
	top:3rem;
	background:inherit;
	border: var(--popup-border);
	border-radius: 0.20rem;
	padding:var(--md-gap);
}

button.close {
	position:absolute;
	bottom:var(--md-gap);
	right:var(--md-gap);
}

</style>