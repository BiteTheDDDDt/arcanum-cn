<script>
import { LogTypes} from '../events';
import Game from '../game';

/**
 * Displays event output to user.
 */
export default {

	data() {

		var filter = 0;
		for( let p in LogTypes) {
			filter |= LogTypes[p];
		}

		return {
			log:Game.log,
			LogTypes:LogTypes,
			filter:filter,
			showOptions:false

			/**
			 * @property {string[]} exclude - types to exclude.
			 */
		}

	},
	methods:{

		changed( box ) {

			if ( box.checked ) {
				this.filter = this.filter|box.value;
			} else {
				this.filter = (~box.value)&this.filter;

			}

		},

		doOptions() {
			this.showOptions = !this.showOptions;
		},

		clearLog(){ this.log.clear(); }

	},
	computed:{

		visItems(){

			let all = this.log.items;

			let a = [];

			for( let i = all.length-1; i>=0; i-- ) {

				var it = all[i];
				if ( !it.type || (this.filter&it.type)>0 ) a.push(it);
			}
			return a;

		}

	}

}
</script>


<template>

	<div class="log-view">

			<div class="top-span">
				<button type="button" class="inline btn-sm" @click="clearLog">Clear</button>
				<!--<button class="text-button" @click="doOptions">&#9881;</button>-->
				<span class="checks">

				<span v-for="(p,k) in LogTypes" :key="k">
					<input type="checkbox" :value="p" :id="elmId(k)" :checked="filter&p" @change="changed( $event.target )" >
					<label :for="elmId(k)">{{ k }}</label>
				</span>
				</span>

				<div v-if="showOptions" class="options">
				</div>

			</div>


			<div class="outlog">
			<div class="log-item" v-for="(it,i) in visItems" :key="i">

				<span v-if="it.title" class="log-title item-name">{{ it.title }}</span>
				<span class="log-text">{{ it.text }}</span>
				<span class="num-align" v-if="it.count>1">(x{{it.count}})</span>

			</div>
			</div>

	</div>

</template>

<style scoped>

div.outlog {
	display:flex;
	flex-flow: column nowrap;
	overflow-y:auto;
	max-height: 82vh;
}

div.log-view {
	border-left:1px solid var(--very-quiet-text-color);
	display:flex;
	flex-flow: column nowrap;
	margin-left: 8px;
	flex-basis:20%;
	max-width: 250px;
	max-height: inherit;
}

div.top-span {
	max-height:64px;
	display:flex;
	flex-flow: row nowrap;
	margin: 2px 8px 5px;
	padding-bottom: 2px;
	border-bottom: 1px solid rgb(88, 87, 87);

}

span.checks {
	display:flex;
	flex-flow: row wrap;
	align-items: flex-start;
}

.checks span { flex-basis: 50%; }

/*div.log-item {
	display:flex;
	flex-direction: column;
	margin: 8px 0px;
}*/

</style>
