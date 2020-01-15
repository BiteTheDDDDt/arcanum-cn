<script>
import Profile from 'modules/profile';

export default {

	data(){
		return {
			active:Profile.active,
			uname:'',
			pw:''
		};
	},
	methods:{
		tryLogin(){

			if (!this.uname || !this.pw ) return;
			this.dispatch('try-login', this.uname, this.pw);
			this.pw = '';

		}
	}

}
</script>

<template>
<span v-if="active.loggedIn">
	<button type="button" @click="dispatch('logout')">logout</button>
</span>
<span v-else>
	<input type="email" placeholder="email" v-model="uname">
	<input type="password" placeholder='password' v-model="pw">
	<input type="submit" value="login" @click="tryLogin">
	<button type="button" @click="dispatch('show-register')">register</button>
</span>
</template>