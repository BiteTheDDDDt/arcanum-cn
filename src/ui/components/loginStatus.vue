<script>
import Profile from "modules/profile";

export default {
	data() {
		return {
			active: Profile.active,
		};
	},
};
</script>

<template>
	<span v-if="active.loggedIn">
		<button type="button" @click="dispatch('logout')">Logout</button>
	</span>
	<span v-else><button type="button" @click="dispatch('show-login')">Login</button></span>
</template>
