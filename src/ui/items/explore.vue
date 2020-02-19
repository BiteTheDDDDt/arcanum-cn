<script>
import Game from '../../game';

import Combat from './combat.vue';
import ProgBar from '../components/progbar.vue';

import {HALT_TASK} from '../../events';

export default {

	props:['explore'],
	components:{
		combat:Combat,
		progbar:ProgBar
	},
	created(){
		this.HALT_TASK = HALT_TASK;
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
		type() { return this.explore.type; },

		/**
		 * @property {Encounter} enc - current encounter.
		 */
		enc() { return this.explore.enc; },

		encName(){
			return this.enc ? this.enc.name : '';
		},
		encProg(){
			return this.enc ? this.enc.exp.valueOf() : 0;
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
		<span>{{ explore.name }}</span><button class="raid-btn"
		@click="emit( HALT_TASK, explore.locale, false )"
		@mouseenter.capture.stop="itemOver( $event, explore.locale )">Flee</button>
		</span>

		<span class="bar"><progbar :value="explore.exp.valueOf()" :max="Number(explore.length)" /></span>

		<template v-if="type==='raid'">
			<combat :combat="explore.combat" />
		</template>
		<template v-else>

			<div @mouseenter.capture.stop="encOver($event)">
			<span>{{ encName }}</span>
			<progbar :value="encProg" :max="encLen" />
			</div>

			<div class="stressors">
			<div class="stress" v-for="s in stressors" :key="s.id" @mouseenter.capture.stop="itemOver( $event, s )">
				<span>{{s.name}}</span>
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