<script>

export default {

	props:[],
	data(){
		return {

		}
	},
	mounted(){

      var uiConfig = {
        signInSuccessUrl: window.location.href,
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    	firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
         firebase.auth.EmailAuthProvider.PROVIDER_ID,
         firebase.auth.PhoneAuthProvider.PROVIDER_ID,
         window.firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl:'./privacy.html'

      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
	  ui.start('#firebaseui-auth-container', uiConfig);

	},
	methods:{

	}

}
</script>

<template>
	<div class="popup" id="firebaseui-auth-container">
	</div>
</template>

<style scoped>

.popup {
	max-width: unset;
	width: unset;
}

</style>