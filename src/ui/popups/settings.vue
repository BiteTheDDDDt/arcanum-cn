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
		localFirst:{
			get(){
				return this.saves.localFirst;
			},
			set(v){
				this.saves.localFirst = Settings.setSubVar( 'saves', 'localFirst', v );
				this.dispatch('setting', 'localFirst', v );
			}
		},
		autoSave:{
			get(){
				return this.saves.autoSave;
			},
			set(v){
				this.saves.autoSave = Settings.setSubVar( 'saves', 'autoSave', v );
				this.dispatch('setting', 'autoSave', v );
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