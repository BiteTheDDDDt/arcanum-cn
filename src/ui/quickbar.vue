<script>
import Game from '../game';
import {abbr} from '../util/format';
import {MAX_SLOTS } from '../composites/quickbar';
import { TRY_USE } from '../events';

/**
 * Bar for quick-use items.
 */
export default {

	created(){
		this.TRY_USE = TRY_USE;

	},
	methods:{

		remove(ind){

			if ( ind >= 0) {
				this.bar.clear(ind);
			}

		},

		abbr:abbr

	},
	computed:{

		/*items() {

			let slots = this.bar.slots
			let a = [];

			for( let i = 0; i < MAX_SLOTS; i++ ) {

				var it = slots[i];


				a[i] = null;

			}

			return a;

		},*/

		bar() {
			return Game.state.quickbar;
		},

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
					@click="emit( TRY_USE, it.item||it )"
					@mouseenter.capture.stop="emit( 'itemover',$event,it)">


				<div>{{ abbr(it) }}</div>

				<div class="remove" @click="remove(i)" />
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
	font-size:20px;
	line-height: 1.4em;
	margin-left: 10%;
}

div.quickbar {

	display:flex;
	cursor:pointer;
	flex-basis: 72px;
	width:100%;
	flex-direction: row;
	justify-self: flex-end;
	z-index: 50;
	margin: 4px 0px;
}

div.quickslot {
	z-index: 100;
	min-width: 52px;
	min-height:52px;
	text-transform: capitalize;
	margin: 2px 6px 4px 4px;
	padding:2px;
	text-align: center;
	/** relative so remove button correctly placed. **/
	position: relative;
	font-size:xx-large;
	border: 1px solid #181818;
}

div.remove {
	position:absolute;
	border: 1px solid #181818;
	top:0px;
	right:0px;
	margin: 0px;
	padding: 0px;
	background:white;
	opacity:0.65;
	z-index: 10;
	min-height:12px;
	min-width: 12px;
	font-size: 0.8rem;
}

div.remove::after {
	content:"x";
}

</style>
