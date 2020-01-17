<script>
import Profile from 'modules/profile';

export default {

	data(){
		return {
			active:Profile.active,
		};
	}

}
</script>

<template>
<span v-if="active.loggedIn">
	<button type="button" @click="dispatch('logout')">logout</button>
</span>
<span v-else><button type="button" @click="dispatch('show-login')">login</button></span>
</template>