<script>
import ProgBar from '../components/progbar.vue';
import ItemBase from '../itemsBase';
import DotView from '../dotView.vue';

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
		<span class="name-span"><span @mouseenter.capture.stop="emit( 'itemover', $event, p )">{{p.name }}</span><dots class="inline" mini=true :dots="p.dots" /></span>
		<prog class="hp" :value="p.hp.value" :max="p.hp.max.value" @mouseenter.capture.stop="emit( 'itemover', $event, p )" />
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

.title {
	font-weight: bold;
}

</style>