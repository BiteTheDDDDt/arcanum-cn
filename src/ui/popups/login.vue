<script>
export default {
	emits: ["close", "close"],
	props: [],

	data() {
		return {};
	},

	beforeUnmount() {
		if (this.ui) this.ui.delete();
		this.removeListener("login", this.emitClose);
	},

	mounted() {
		this.listen("login", this.emitClose, this);

		var uiConfig = {
			signInFlow: "popup",
			callbacks: {
				signInSuccessWithAuthResult: (authResult, redirectUrl) => {
					this.$emit("close");
				},
				signInFailure: error => {
					console.log("SIGN IN ERROR: " + error);
				},
			},
			signInOptions: [
				// Leave the lines as is for the providers you want to offer your users.
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				//firebase.auth.FacebookAuthProvider.PROVIDER_ID,
				//firebase.auth.TwitterAuthProvider.PROVIDER_ID,
				firebase.auth.EmailAuthProvider.PROVIDER_ID,
				firebase.auth.PhoneAuthProvider.PROVIDER_ID,
				window.firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
			],
			// tosUrl and privacyPolicyUrl accept either url string or a callback
			// function.
			// Terms of service url/callback.
			tosUrl: "lololol",
			// Privacy policy url/callback.
			privacyPolicyUrl: "./privacy.html",
		};

		// Initialize the FirebaseUI Widget using Firebase.
		if (!this.ui) this.ui = new firebaseui.auth.AuthUI(firebase.auth());

		// The start method will wait until the DOM is loaded.
		this.ui.start("#firebaseui-auth-container", uiConfig);
	},

	methods: {
		emitClose() {
			this.$emit("close");
		},
	},
};
</script>

<template>
	<div class="popup" id="firebaseui-auth-container"></div>
</template>

<style scoped>
.popup {
	max-width: unset;
	width: unset;
}
</style>
