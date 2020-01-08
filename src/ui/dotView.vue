<script>
import { seconds, abbr } from '../util/format.js';
import ItemBase from 'ui/itemsBase';

export default {

	props:['dots', 'mini'],
	mixins:[ItemBase],
	beforeCreate(){
		this.seconds = seconds;
		this.abbr = abbr;
	}

}
</script>

<template>

	<div class="dot-view">

		<div :class="['dot',d.kind, d.school, mini ? 'mini':'']" v-for="d in dots" :key="d.id"
		@mouseenter.capture.stop="emit( 'itemover', $event,d)">

			<span>{{ Math.ceil( d.duration ) }}</span>
			<span v-if="!mini"><br>{{ mini ? abbr( d ) : d.name }}</span>

			<div v-if="d.kind||d.school" class="bgfill" >&nbsp;</div>

		</div>

	</div>

</template>

<style scoped>

	div.dot-view span.mini {
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	div.mini {
		height:var(--lg-gap);
		width:var(--lg-gap);
		font-size: 0.7em;
		padding:0;
	}

</style>
