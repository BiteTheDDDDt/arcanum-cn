<script>
import ItemsBase from '../itemsBase.js';
import Progress from '../components/progbar.vue';

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
			return this.skill.exp.toFixed(0);
		},
		length(){
			return this.skill.length.toFixed(0);
		}
	}

}
</script>

<template>

	<div class="skill">

		<span class="separate" @mouseenter.capture.stop="emit( 'itemover', $event, skill )">
			<span>{{ skill.name }}</span>&nbsp;
			<span v-if="skill.owned">{{ 'lvl: ' + Math.floor(skill.value) + '/' + Math.floor(skill.max) }}<button class="train-btn"
			@click="$emit('train',skill)" :disabled="!this.usable(skill)">
				{{ active ? 'Stop' : 'Train' }}</button></span>

			<span v-else>
				<button @click="emit('buy', skill)"
					:disabled="!this.usable(skill)">Unlock</button>
			</span>
		</span>

		<div v-if="skill.owned">

		<bar :value="skill.exp" :max="skill.length" hide-stats=true />

			progress: {{ exp + ' / ' + length }}
		</div>

	</div>

</template>

<style scoped>

span.separate {
	width: 100%;
	align-items: center;
}
button {
	max-height:36px;
	margin-top:4px;
	padding:3px;
}
</style>
