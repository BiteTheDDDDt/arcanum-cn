<script>
import {center} from './popups.js';

const WARN_MSG = 'This action is not reversible. Continue?';

export default {

	data() {
		return {
			item:null
		}

	},
	updated() {
		if ( this.item ) {center( this.$el );}
	},
	computed:{
		msg(){
			return this.item.warnMsg || WARN_MSG;
		}
	},
	methods:{
		warn(it){
			this.item = it;
		},
		confirm(){
			let it = this.item;
			this.item = null;
			if ( it ) this.$emit('confirmed', it );

		},
		cancel(){ this.item = null; }

	}

}
</script>

<template>
	<div class="popup" v-if="item!=null">

		<div>{{ item.name }}</div>
		<div>{{item.desc }}</div>
		<div>{{ msg }}</div>
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