<script>
import Game from '../../game';

import Combat from './combat.vue';
import ProgBar from '../components/progbar.vue';

import {EXIT_LOC} from '../../events';

export default {

	props:['explore'],
	components:{
		combat:Combat,
		progbar:ProgBar
	},
	created(){
		this.EXIT_LOC = EXIT_LOC;
	},
	methods:{

		/**
		 * Enc rollover
		 */
		encOver($event){

			if ( this.enc ) this.emit( 'itemover', $event, this.enc );

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
		encVal(){
			return this.enc ? this.enc.exp : 0;
		},
		encLen(){
			return this.enc ? this.enc.length : 10;
		}

	}

}
</script>


<template>
<div class='explore'>

	<span class="active-title">
		<span>{{ explore.name }}</span><button class="raid-btn"
		@click="emit( EXIT_LOC, explore.locale, false )"
		@mouseenter.capture.stop="emit( 'itemover', $event, explore.locale )">Flee</button>
		</span>

		<span class="bar"><progbar :value="explore.exp" :max="explore.length" /></span>

		<template v-if="type==='raid'">
			<combat class="combat" :combat="explore.combat" />
		</template>
		<template v-else>

			<div @mouseenter.capture.stop="encOver($event)">
			<span>{{ encName }}</span>
			<progbar :value="encVal" :max="encLen" />
			</div>

			<div class="stressors">
			<div class="stress" v-for="s in stressors" :key="s.id" @mouseenter.capture.stop="emit( 'itemover', $event, s )">
				<span>{{s.name}}</span>
				<progbar :value="s.value" :max="s.max.value" />
			</div>
			</div>

		</template>

</div>

</template>


<style scoped>

div.explore div.stressors {
	display:flex;
	flex-flow: column wrap;
}

div.stressors .stress {
	flex-basis: 48%;
}

div.explore .active-title {
	display:flex;
	min-width: 400px;
}

div.explore .active-title > span {
	margin-right:16px;
}


.combat {
	overflow-y: auto;
}

</style>