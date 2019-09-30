<script>
export default {

	props:['value', 'max', 'label', 'hideStats'],
	computed:{

		val() { return this.value ? this.value : 0; },

		width(){
			let val = Math.floor( 100*(this.value/this.max) );
			if ( val > 100 ) val = 100;
			else if ( val < 0 ) val = 0;
			return val + '%;'
		}
	}

}
</script>


<template>

<div style="container">
	<label v-if="label" :for="elmId('bar')">{{label}}</label>
	<div class="bar" :id="elmId('bar')">
		<div class="fill" :style="'width:'+width">
			<span class="bar-text" v-if="!hideStats">{{ val.toFixed(1) + '/' + max.toFixed(1) }}</span>
			<span v-else>&nbsp;</span>
		</div>
	</div>
</div>

</template>

<style>
    div.bar .fill {
	  height:100%;
	  padding:0;
	  margin:0;
    }

div.bar .bar-text {
	color: var( --progbar-dark-text );
}

div.container {
	display:inline-block;
}
div.bar {

	padding:unset;
	display:inline-block;
	background: #333;
	overflow:hidden;
	margin:4px 4px 0px 2px;
	padding:2px;
	min-height:18px;
	width:-webkit-fill-available;
	width:-moz-available;
	border-radius: 10px;
}
div.bar > div {
	background:orange;
	border-radius: 8px;
	max-height: 100%;
	min-width:0px;
	width:0px;
}

</style>
