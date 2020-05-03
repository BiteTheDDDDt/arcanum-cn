<script>
import Game from '../../game';
import ItemBase from '../itemsBase';
import SkillView from '../items/skill.vue';
import Settings from 'modules/settings';
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

		let ops = Settings.getSubVars('skills');

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
				this.hideMaxed = Settings.setSubVar( 'skills', 'hideMaxed', v );
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
			Game.toggleTask( skill );
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

div.skills .title > span {
	align-self:center
}

div.skills {
	height:100%;
	width:(100% - 40px );
	max-width:( 100% - 40px );
	padding: 0;
	display:flex;
	flex-flow: column nowrap;
	align-items: center;
}

	.skill div:last-child {
		color: var(--quiet-text-color);
		text-align: center; }
	body.compact .skill div:last-child { display: flex; }

    body.compact div.subs { justify-content: center;}
	body.compact div.subs div.skill { background: var(--list-entry-background); }
	body.compact div.subs div.skill > div > div .bar {
		max-height: var(--md-gap);
		background: var(--list-entry-background);
		border: none;
		margin: 0.5em
	}

    div.subs {
		overflow-y: auto;
        display: grid; grid-template-columns: repeat( auto-fit, minmax( 10rem, 0.5fr) );
        margin: 0; padding: var(--md-gap); overflow-x: hidden; gap: var(--sm-gap);
        width: 100%; justify-content: space-between;
    }

    div.subs div.skill {
        margin-bottom: 0; width: unset; flex-basis: 100%; box-sizing: border-box;
        padding: var(--md-gap); text-transform: capitalize; font-size: var(--compact-small-font);
         border-radius: var(--list-entry-border-radius);
    }
    div.sub div.skill button { font-size: 0.75em; }
    div.sub div.skill > div {
        font-size: 0.75em; position: relative; text-align: right; display: flex; flex: 1;  align-items: center;
    }
    div.subs div.skill > div > div { flex: 1; }
    div.subs div.skill .separate span:first-child { text-overflow: ellipsis; white-space: nowrap; overflow:hidden;}
    div.subs div.skill .separate span:nth-child(2) {
        flex-basis: 50%;
        color: var(--quiet-text-color);
	}

.separate {
	width:90%;
}

</style>