<script>
import ItemsBase from '../itemsBase.js';
import Progress from '../components/progbar.vue';
import { toLarge } from 'util/format'

export default {

	/**
	 * @property {boolean} active - true if skill is the active skill.
	 */
	props:['skill', 'active'],
	mixins:[ItemsBase],
	components:{
		bar:Progress
	},
	computed:{

		rate(){
			return this.skill.rate.value.toFixed(1);
		},
		exp(){
			return toLarge( Math.floor( this.skill.exp ) );
		},
		length(){
			return toLarge(Math.floor( this.skill.length ) );
		}
	}

}
</script>

<template>

	<div class="skill">

		<span class="separate" @mouseenter.capture.stop="itemOver( $event, skill )">
			<span>{{ skill.name }}</span>
			<span class="flex-row" v-if="skill.owned">{{ 'Level: ' + Math.floor(skill.valueOf()) + '/' + Math.floor(skill.max.valueOf()) }}
				<button class="train-btn"
			@click="$emit('train',skill)" :disabled="!skill.canUse()">
				{{ active ? 'Stop' : 'Train' }}</button></span>

			<span v-else>
				<button @click="emit('buy', skill)"
					:disabled="!skill.canUse()">🔒</button>
			</span>
		</span>

		<div v-if="skill.owned">

		<bar :value="skill.exp" :max="skill.length" hide-stats=true />

			exp: {{ exp + ' / ' + length }}
		</div>

	</div>

</template>