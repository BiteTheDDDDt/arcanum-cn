<script>
/**
 * Not currenty used because Firebase has an OpenSource
 * registration dialog/component.
 * Could be used with alternative save-frameworks.
 */
export default {
	data() {
		return {
			email: null,
			pw: null,
			err: null,
			sent: false,
		};
	},
	mounted() {
		this.listen("register-sent", this.onRegister, this);
		this.listen("register-error", this.onError, this);
	},
	beforeUnmount() {
		this.removeListener("register-sent", this.onRegister, this);
		this.removeListener("register-error", this.onError, this);
	},
	methods: {
		register() {
			if (!this.email) {
				this.err = "Email required";
			} else if (!this.pw) {
				this.err = "password required";
			} else {
				this.dispatch("try-register", this.email, this.pw);
				this.email = null;
			}
		},

		onRegister() {
			this.err = "Confirmation email sent.\nCheck any junk-mail folders.";
		},

		onError(err) {
			console.dir(err);
			this.err = err.message;
		},
	},
};
</script>

<template>
	<div class="popup">
		<div v-if="err">{{ err }}</div>
		<div v-if="!sent">
			<input type="email" placeholder="email@email.com" v-model="email" />
			<input type="password" placeholder="password" v-model="pw" />
			<input type="submit" value="register" @click="register" />
			<button type="button" @click="$emit('close')">cancel</button>
		</div>
	</div>
</template>
