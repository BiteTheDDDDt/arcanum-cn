<script>
export default {

	props:['value', 'max', 'label', 'hideStats', 'color'],
	computed:{

		style(){

			let s = 'width:' + this.width;
			if ( this.color ) s += ';background:' + this.color;

			return s;

		},

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
		<div class="fill" :style="style">
			<span class="bar-text" v-if="!hideStats">{{ value.toFixed(1) + '/' + max.toFixed(1) }}</span>
			<span v-else>&nbsp;</span>
		</div>
	</div>
</div>

</template>

<style>
div.container {
	display:flex;
	height:100%;
	width: 100%;
}

    div.bar .fill {
	  height:100%;
	  padding:0;
	  margin:0;
    }

div.bar .bar-text {
	color: var( --progbar-text-color );
}


div.bar {

	display:inline-block;
	background: #333;
	overflow:hidden;
	padding:0;
	min-height:1.5rem;
	width:-webkit-fill-available;
	width:-moz-available;
	border-radius: var(--lg-radius);
}


</style>
