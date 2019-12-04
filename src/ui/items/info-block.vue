<script>
import ItemsBase from '../itemsBase.js';

/**
 * Display for a sub-block of gdata, such as item.effect, item.result, item.run, etc.
 *
 * @property {boolean} rate - info items are 'rate' per-second items.
 */
export default {
	props:['title', 'info', 'rate'],
	mixins:[ItemsBase]
}
</script>


<template>

	<div v-if="info">

		<div v-if="title" class="note-text"><hr>{{ title }}</div>
		<div v-for="(v,k) in effectItems( info, rate)" :key="k">
			<span v-if="typeof v === 'boolean'">{{ k }}</span>
			<span v-else-if="typeof v ==='number'">{{ `${k}: ${v}` }}</span>
				<span v-else>{{ `${k}: ${v}` }}</span>
		</div>


	</div>


</template>


<style scoped>

hr {
	margin-bottom: var(--sm-gap);
}

div.item-desc {
	margin: 0.6em 0 0.9em;
	font-size: 0.96em;
}

.item-name {
	font-weight: bold;
}
.flavor {
	font-style: italic;
}

</style>