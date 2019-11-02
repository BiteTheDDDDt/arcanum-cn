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

	<div class="note-text sm">thanks to:<br>
		kermit tears<br>
		dbulm2<br>
		mathias<br>
		vondrey
	</div>

	<button class="close" @click="close">close</button>

</div>

</template>

<style scoped>

.settings {
	height:auto;
	min-height:200px;
	min-width:300px;
	max-width:440px;
	position: absolute;
	z-index:10000;
	top:120px;
	background:inherit;
	border: 1.5px solid rgb( 100, 100,100);
	border-radius: 0.20rem;
	padding: 12px;
}

button.close {
	position:absolute;
	bottom: 10px;
	right:10px;
}

</style>