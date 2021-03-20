<script>
import ProgBar from '../components/progbar.vue';
import ItemBase from '../itemsBase';
import DotView from './dotView.vue';

export default {

	mixins:[ItemBase],
	props:['npcs', 'label'],
	components:{
		prog:ProgBar,
		dots:DotView
	}

}
</script>

<template>

<div class="npc-group">
	<span class="title" v-if="label">{{ label }}</span>
	<div v-for="p in npcs" :key="p.id">
		<span class="name-span"><span @mouseenter.capture.stop="itemOver( $event, p )">{{p.name.toTitleCase() }}</span>
		<dots class="inline" mini=true :dots="p.dots" :char="p" /></span>
		<prog class="hp" :value="p.hp.value.valueOf()" :max="p.hp.max.value" @mouseenter.capture.stop="itemOver( $event, p )" />
	</div>

</div>

</template>

<style scoped>

.name-span {
	display:flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.npc-group > div { margin: var(--sm-gap); }

.title {
	font-weight: bold;
	border-bottom: 1px solid var(--separator-color);
}

</style>