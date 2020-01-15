<script>
export default {

	props:['loggedIn'],
	data(){
		return {

			uname:'',
			pw:''
		};
	},
	methods(){
	}

}
</script>

<template>
<span v-if="loggedIn">
	<button type="button" @click="emit('logout')">logout</button>
</span>
<span v-else>
	<input type="text" placeholder="username" v-model="uname">
	<input type="password" placeholder='password' v-model="pw">
	<input type="submit" value="login" @click="emit( 'try-login', uname, pw )">
</span>
</template>