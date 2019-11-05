<script>
import {center} from './popups.js';

const WARN_MSG = 'This action is not reversible. Continue?';

export default {

	data(){
		return {
			item:null,
			cb:null
		}
	},
	updated() {
		if ( this.item ) {center( this.$el );}
	},
	computed:{
		msg(){
			if ( typeof this.item === 'string') return WARN_MSG;
			return this.item.warnMsg || WARN_MSG;
		}
	},
	methods:{
		show( it, cb=null ){
			this.item = it;
			this.cb = cb;
		},
		confirm(){

			let it = this.item;
			let f = this.cb;

			this.item = null;
			this.cb = null;

			if ( it ) this.$emit('confirmed', it );
			if (f ) f();

		},
		cancel(){
			this.cb = null;
			this.item = null;
		}

	}

}
</script>

<template>
	<div class="popup" v-if="item">

		<div v-if="typeof item ==='string'">
			<div>{{item }}</div>
			<div>{{ msg }}</div>
		</div>
		<div v-else>
		<div>{{ item.name }}</div>
		<div>{{ item.desc }}</div>
		<div>{{ msg }}</div>
		</div>

		<div>
		<button @click="confirm">Confirm</button>
		<button @click="cancel">Cancel</button>
		</div>

	</div>
</template>

<style scoped>

div.popup div {
	margin:6px 0px;
}

</style>