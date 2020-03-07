<script>
export default {

	/**
	 * @property {string} group - displayed group name.
	 */
	props:[ 'items', 'group'],
	data(){

		return {
			isOpen:true
		}

	},
	methods:{

	},
	computed:{
	}

}
</script>

<template>

<div v-if="items.length>0">

<div class="groupTitle" @click="isOpen=!isOpen">{{group}}</div>
<div v-if="isOpen">

		<div class="rsrc separate hidable" v-for="it in items"
			:data-key="it.id" :key="it.id"
			@mouseenter.capture.stop="itemOver($event,it)">

			<span class="item-name">{{ it.name }}</span>
			<span class="num-align">{{ Math.floor( it.value ) + ( it.max && it.max.value>0 ? '/' + Math.floor(it.max.value) : '' )}}</span>
			<!--<td>{{ it.delta != 0 ? '&nbsp;(' + it.delta.toFixed(2) + '/t )' : ''}}</td>-->

	</div>

</div>

</div>

</template>

<style scoped>

div.groupTitle {
	cursor: pointer;
	text-transform: capitalize;
	background-color: var(--list-header-color);
}

</style>

<style scoped>
.rsrc .item-name {
	flex:1;
	color:#999;
	padding-right: var(--sm-gap);
}

</style>