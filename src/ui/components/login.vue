<script>
export default {

	props:['loggedIn'],
	data(){
		return {

			uname:'',
			pw:''
		};
	}

}
</script>

<template>
<span v-if="loggedIn">
	<button type="button" @click="dispatch('logout')">logout</button>
</span>
<span v-else>
	<input type="text" placeholder="username" v-model="uname">
	<input type="password" placeholder='password' v-model="pw">
	<input type="submit" value="login" @click="dispatch( 'try-login', uname, pw )">
	<button type="button" @click="dispatch('show-register')">register</button>
</span>
</template>