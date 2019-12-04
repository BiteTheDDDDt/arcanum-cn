<script>
export default {

	props:['value', 'max', 'label', 'hideStats'],
	computed:{

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

<div class="container">
	<label v-if="label" :for="elmId('bar')">{{label}}</label>
	<div class="bar" :id="elmId('bar')">
		<div class="fill" :style="'width:'+ width">
			<span class="bar-text" v-if="!hideStats">{{ (this.value||0).toFixed(1) + '/' + max.toFixed(1) }}</span>
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
	margin-bottom: var(--md-gap);
	height:100%;
	width: 100%;
}
div.bar {

	padding:unset;
	display:inline-block;
	background: #333;
	overflow:hidden;
	margin:var(--sm-gap) var(--sm-gap) 0 var(--tiny-gap);
	padding:var(--tiny-gap);
	min-height:1.5rem;
	width:-webkit-fill-available;
	width:-moz-available;
	border-radius: var(--md-gap);
}
div.bar > div {
	background:orange;
	border-radius: var(--md-gap);
	height:100%;
	min-width:0;
	width:0;
}

</style>
