<script>
import Profile from 'modules/profile';
import Settings from 'modules/settings';

import { centerX } from './popups';

/**
 * @emits save-settings
 * @emits setting
 */
export default {

	data(){

		let vars = Settings.vars;

		return {
			sCompactMode:vars.compactMode,
			sDarkMode:vars.darkMode,
			saves:Object.assign( {}, Settings.getSubVars('saves') )
		};



	},
	updated() {
		centerX(this.$el);
	},
	created() {

		for( let p in Settings.vars ) {
			this.dispatch('setting', p, Settings.vars[p] );
		}

	},
	methods:{

		clear(){

		},

		close() {
			this.dispatch('save-settings');
			this.$emit('close-settings');
		}

	},
	computed:{

		compactMode: {
			get() { return this.sCompactMode; },
			set(v){
				Settings.set('compactMode', v);
				this.sCompactMode = v;
				this.dispatch('setting', 'compactMode', v);
			}

		},
		remoteFirst:{
			get(){
				return this.saves.remoteFirst;
			},
			set(v){
				this.saves.remoteFirst = Settings.setSubVar( 'saves', 'remoteFirst', v );
				this.dispatch('setting', 'remoteFirst', v );
			}
		},
		autosave:{
			get(){
				return this.saves.autosave;
			},
			set(v){
				this.saves.autoSave = Settings.setSubVar( 'saves', 'autosave', v );
				this.dispatch('setting', 'autosave', v );
			}
		},
		darkMode:{
			get(){
				return this.sDarkMode;
			},
			set(v){
				Settings.set( 'darkMode', v);
				this.sDarkMode = v;
				this.dispatch('setting', 'darkMode', v );
			}
		}

	}

}
</script>

<template>

<div :class="['settings', 'popup']">



	<div>
	<label :for="elmId('dark-mode')">Dark Mode</label>
	<input type="checkbox" :id="elmId('dark-mode')" v-model="darkMode">
	</div>

	<div>
	<label :for="elmId('compact-mode')">Compact Mode</label>
	<input type="checkbox" :id="elmId('compact-mode')" v-model="compactMode">
	</div>

	<div>
	<label :for="elmId('auto-save')" title="Periodically save current game.">Auto-Save</label>
	<input type="checkbox" :id="elmId('auto-save')" v-model="autosave">
	<h6>Periodically save game to storage. Game is saved to Browser storage by default. Only saved to Remote storage if logged in and server is available.</h6>
	</div>

	<div>
	<label :for="elmId('remote-first')" title="Attempt to load saves from Remote Storage before Local Storage.">Try Remote Load First</label>
	<input type="checkbox" :id="elmId('remote-first')" v-model="remoteFirst">
	<h6>Attempt to load game from Remote host before loading from browser Storage.</h6>
	</div>

	<!--<div><button @click="clear">Clear Settings</button></div>-->
	<!--<div class="nowarn">

		<div v-for="it in nowarns" :key="it"><span>{{it}}</span><button @click="clearWarn">Delete</button></div>

	</div>-->

	<button class="close" @click="close">Close</button>

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