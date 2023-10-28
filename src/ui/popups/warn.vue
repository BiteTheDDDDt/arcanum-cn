<script>
import {centerX} from './popups.js';

const WARN_MSG = 'This action is not reversible. Continue?';

export default {

	data(){
		return {
			item:null,
			cb:null,
			nowarn:false
		}
	},
	updated() {
		if ( this.item ) {centerX( this.$el );}
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
			this.nowarn=false;
		},
		confirm(){

			let it = this.item;
			let f = this.cb;
			let nowarn = this.nowarn;

			this.item = null;
			this.cb = null;
			this.nowarn=false;

			if ( it ) this.$emit('confirmed', it, nowarn );
			if (f ) f();

		},
		cancel(){
			this.cb = null;
			this.nowarn=false;
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
		<div class="log-title">{{ item.name.toString().toTitleCase() }}</div>
		<div>{{ item.desc }}</div>
		<div>{{ msg }}</div>
		<div class="skip"><label :for="elmId('nowarn')">Skip Warning</label>
		<input type="checkbox" v-model="nowarn" :id="elmId('nowarn')"></div>
		</div>

		<div>
		<button @click="confirm">Confirm</button>
		<button @click="cancel">Cancel</button>
		</div>

	</div>
</template>

<style scoped>

div.skip {
	margin-top:1em;
	font-size: 0.9em;
}

div.popup div {
	margin:var(--sm-gap) 0;
}

</style>