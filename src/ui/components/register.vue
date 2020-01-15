<script>
export default {

	props:[],
	data(){
		return {
			email:null,
			pw:null
		};
	},
	methods:{

		register(){
			if ( this.email && this.pw ) {
				this.dispatch('try-register', this.email, this.pw );
				this.email = null;
			}
		}

	},
	beforeDestroy(){
	}

}
</script>

<template>
	<div class="popup">
		<input type="email" placeholder="email@email.com" v-model="email">
		<input type="password" placeholder="password" v-model="pw">
		<input type="submit" value="register" @click="register">
		<button @click="$emit('close')">cancel</button>
	</div>
</template>