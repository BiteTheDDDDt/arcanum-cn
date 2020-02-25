<script>
import Game from '../game';
import {abbr} from '../util/format';
import { TRY_USE } from '../events';

/**
 * Bar for quick-use items.
 */
export default {

	props:['bars'],
	methods:{

		abbr:abbr

	},
	computed:{

		bar(){return this.bars.active;},

		slots() {
			return this.bar.slots;
		},

		hasItems(){
			return this.slots.some(v=>v.item!=null);
		}

	}

}
</script>

<template>
	<div class="quickbar" v-if="hasItems">

		<div class="quickslot" v-for="(it,i) in slots" :key="i">

			<div v-if="it.item!=null" :class="it.item.school ? it.item.school :''"
					@click="emit( 'quickslot', it )"
					@mouseenter.capture.stop="itemOver($event,it.item||it)">


				<div>{{ abbr(it) }}</div>

				<div class="remove" @click="bar.clear(i)" />
				<div v-if="it.item.school" class="bgfill" >&nbsp;</div>

			</div>
			<div v-else>{{ (i != 9) ? i + 1 : 0 }}</div>

		</div>

	</div>
	<div class="quickbar" v-else>

		<p class="use-msg">
			Roll-over Item and hold {Shift} + {Number} to assign quickslot.<br>
			Press {Number} again to use quickslot Item.
		</p>

	</div>

</template>

<style scoped>

p.use-msg {
	font-size:1.2em;
	line-height: 1.4em;
	margin-left: 10%;
}


div.quickbar {

	display:flex;
	flex-basis:3em;
	width:100%;
	flex-direction: row;
	justify-self: flex-end;
	z-index: 50;
	margin: 0;
}

div.quickslot {
	min-width:2em;
	min-height:2em;
	cursor: pointer;
	text-transform: capitalize;
	margin:var(--tiny-gap) var(--sm-gap) var(--sm-gap) var(--sm-gap);
	padding:var(--tiny-gap);
	text-align: center;
	/** relative so remove button correctly placed. **/
	position: relative;
	font-size:xx-large;
	border: 1px solid var(--dark-border-color);
}

div.remove {
	position:absolute;
	border: 1px solid var(--dark-border-color);
	top:0;
	right:0;
	margin: 0;
	padding: 0;
	background:white;
	opacity:0.65;
	z-index: 10;
	min-height:0.9em;
	min-width:0.9em;
	font-size: 0.8rem;
}

div.remove::after {
	content:"x";
}

.quickslot div.remove { background: #FFF0; color: #000; border: none; font-weight: bold; }



</style>
