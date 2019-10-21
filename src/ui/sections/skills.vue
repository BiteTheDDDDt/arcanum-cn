<script>
import Game from '../../game';
import ItemBase from '../itemsBase';
import SkillView from '../items/skill.vue';
import Settings from '../../settings';
import {lowFixed} from '../../util/format';
import {alphasort} from '../../util/util';

import FilterBox from '../components/filterbox.vue';

export default {

	props:['state'],
	mixins:[ItemBase],
	components:{
		skill:SkillView,
		filterbox:FilterBox
	},
	data() {

		let ops = Settings.getVars('skills');

		return Object.assign({
			/**
			 * @property {Item[]} filtered - filtered search results.
			 */
			filtered:null
		}, ops );

	},
	computed:{

		chkHide:{
			get(){return this.hideMaxed;},
			set(v){
				this.hideMaxed = Settings.setVar( 'skills', 'hideMaxed', v );
			}
		},
		sp() { return lowFixed( this.state.getData('sp').value ); },

		skills() { return this.state.skills.sort( alphasort ); },

		available(){
			return this.hideMaxed ? this.skills.filter( it=>!it.maxed()&&!this.reslocked(it) ) :
				this.skills.filter(it=> !this.reslocked(it) );
		}

	},
	methods:{

		train(skill){
			Game.toggleAction( skill );
		}

	}

}
</script>

<template>
	<div class="skills">

		<span class="separate title">
			<filterbox v-model="filtered" :items="available" min-items="7" />

			<span><input :id="elmId('hideMax')" type="checkbox" v-model="chkHide">
			<label :for="elmId('hideMax')">Hide Maxed</label></span>

			<span>Skill Points: {{ sp }}</span>
		</span>

		<div class="subs">
			<skill v-for="s in filtered" :key="s.id" :skill="s" :active="s.running" @train="train"></skill>
		</div>

	</div>
</template>

<style scoped>

.separate {
	width:70%;
}

div.skills .title > span {
	align-self:center
}

div.skills {
	height:100%;
	width:(100% - 40px );
	max-width:( 100% - 40px );
	padding-left:16px;
	display:flex;
	flex-flow: column nowrap;
	align-items: center;
}


div.subs {
	display:flex;
	flex-flow: row wrap;
	margin: 14px 0px;
	padding-right:16px;
	overflow-y: auto;
	width:calc( 100% - 16px );
	justify-content: space-between;
}

div.skill {
	margin-bottom: 20px;
	width:40%;
}

</style>