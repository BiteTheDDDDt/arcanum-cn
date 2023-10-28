<script>
import CharPane from '../panes/charpane.vue';

export default {

	props:["familiar"],
	components:{

		charpane:CharPane

	}

}
</script>


<template>
	<div class="familiars">

		<charpane char="familiar" />
		<div class="familiarUpgrades">
		</div>

	</div>
</template>