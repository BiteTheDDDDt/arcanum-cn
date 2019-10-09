<script>
import Game from '../../game';

export default {

	props:['state'],
	computed:{

		rgb() { return this.r + ', ' + this.g + ','+this.b; },

		r(){
			return ( 128*( Math.max( (this.rage.value/this.rage.max),
				(this.bf.value/this.bf.max) )) );
		},
		g(){
			return ( 128*((this.madness.value / this.madness.max )) );
		},
		b(){
			return ( 128*( Math.max( (this.weary.value/this.weary.max),
				(this.unease.value/this.unease.max) )) );
		},

		weary(){
			return this.state.getData('weary');
		},

		bf(){
			return this.state.getData('bf');
		},

		unease(){
			return this.state.getData('unease');
		},

		rage(){
			return this.state.getData('rage');
		},

		madness(){
			return this.state.getData('madness');
		}

	}
}
</script>


<template>

<div class="mood" :style="'background:rgb('+rgb+')'">
	&nbsp;
	<span>--{{r.toString(16)}}</span>
	<span>-{{g.toString(16)}}</span>
	<span>-{{b.toString(16)}}</span>
</div>

</template>


<style scoped>

.mood {
	border: 2px solid black;
	width:42px;
	height: 42px;
}
</style>