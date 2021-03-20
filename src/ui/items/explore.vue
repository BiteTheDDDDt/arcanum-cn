<script>
import Game from '../../game';

import Combat from './combat.vue';
import ProgBar from '../components/progbar.vue';

import {HALT_TASK} from '../../events';
import { DUNGEON } from '../../values/consts';

export default {

	props:['explore'],
	components:{
		combat:Combat,
		bars:()=>import( /* webpackChunkName: "bars-ui" */  '../components/bars.vue'),
		progbar:ProgBar
	},
	created(){

		this.HALT_TASK = HALT_TASK;
		// continue to display previous encounter until new encounter ready.
		this.lastEnc = null;
		// whether last encounter was combat.
		this.lastCombat = true;

	},
	methods:{

		/**
		 * Enc rollover
		 */
		encOver($event){

			if ( this.enc ) this.itemOver( $event, this.enc );

		}

	},
	computed:{

		stressors() {
			return Game.state.stressors.filter(v=>!v.locked&&!v.disabled);
		},

		/**
		 * @property {Player} player
		 */
		player() { return Game.state.player; },

		/**
		 * @property {string} type - locale type
		 */
		type() { return this.explore.locale.type; },

		/**
		 * @property {boolean} inCombat
		 */
		inCombat(){

			return this.enc ? (this.enc === this.explore.combat) : this.type === DUNGEON;

		},

		/**
		 * @property {Encounter} enc - current encounter.
		 */
		enc() {

			if ( this.explore.enc ) this.lastEnc = this.explore.enc;
			return this.lastEnc;

		},

		encDesc(){ return this.enc ? this.enc.desc : '&nbsp;';},

		encName(){
			return this.enc ? this.enc.name.toTitleCase() : '&nbsp;';
		},
		encProg(){
			return this.enc ? this.enc.exp : 0;

		},
		encLen(){
			return this.enc ? this.enc.length.valueOf() : 0;
		}

	}

}
</script>


<template>
<div class='explore'>

	<span class="active-title">
		<span>{{ explore.name.toTitleCase() }}</span><button class="raid-btn"
		@click="emit( HALT_TASK, explore.locale, false )"
		@mouseenter.capture.stop="itemOver( $event, explore.locale )">Flee</button>
		</span>

		<span class="bar"><progbar :value="explore.exp.valueOf()" :max="Number(explore.length)" /></span>

		<bars v-if="explore.locale.bars" :bars="explore.locale.bars" />

		<template v-if="inCombat">
			<combat :combat="explore.combat" />
		</template>
		<template v-else>

			<div @mouseenter.capture.stop="encOver($event)">
			<span class="name" v-html="encName"></span>
			<div class="desc" v-html="encDesc"></div>
			<progbar :value="encProg" :max="encLen" />
			</div>

			<div class="stressors">
			<div class="stress" v-for="s in stressors" :key="s.id" @mouseenter.capture.stop="itemOver( $event, s )">
				<span>{{s.name.toTitleCase()}}</span>
				<progbar :value="s.value.valueOf()" :max="s.max.value" />
			</div>
			</div>

		</template>

</div>

</template>


<style scoped>

.explore {
	display:flex;
	flex-flow: column;
	overflow-y: hidden;
	padding: var( --md-gap);
	flex-basis:50%;
	flex-grow: 2;
}

div.explore div.stressors {
	display:flex;
	flex-flow: row wrap;
	justify-content: space-between;
}

.name {
	font-weight: bold;
}
div.stressors .stress {
	flex-basis: 48%;
}

div.explore .active-title {
	display:flex;
	min-width: 20rem;
}

div.explore .active-title > span {
	margin-right:1rem;
}

</style>