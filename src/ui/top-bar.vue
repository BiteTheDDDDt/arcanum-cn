<script>
import Profile from 'modules/profile';
import Game from '../game';

import LoginStatus from './components/loginStatus.vue';

export default {

	computed:{
		hasHall(){return Profile.hasHall() },
		VERSION(){return __VERSION; }

	},
	created(){
		this.Profile = Profile;
	},
	components:{
		login:LoginStatus
	},
	methods:{

		fileSelect(e) {

			e.stopPropagation();
			e.preventDefault();

			this.dispatch( 'load-file', e.target.files );

		},

		fileDrop(e){
			e.stopPropagation();
			e.preventDefault();

			e.target.classList.remove('hilite');

			const dt = e.dataTransfer;
			this.dispatch('load-file', dt.files);

		},
		fileDrag(e){
			e.stopPropagation();
			e.preventDefault();
			e.currentTarget.classList.add('hilite');
		},
		dragOut(e){
			e.stopPropagation();
			e.preventDefault();
			e.currentTarget.classList.remove('hilite');
		},

	}

}
</script>

<template>

	<div class="top-bar">

		<span class="load-opts" >
			<login v-if="Profile.CLOUD" />
			<button @click="dispatch('save')">Save</button>
			<button @click="dispatch('load')">Load</button>

			<div class="text-button"><a href=""
				@click.self="dispatch('save-file',$event )" type="text/json">Get Save</a></div>

			<div v-if="hasHall" class="text-button"><a href=""
				@click.self="dispatch('hall-file',$event )" type="text/json">Hall Save</a></div>

			<!--<input type="file" name="[File]" accept="text/json" @change="fileDrop">-->
			<button id="drop-file" @click="$refs.fileInput.click()" @drop="fileDrop" @dragover="fileDrag" @dragleave.capture.stop="dragOut" name="[Load Save]">[Load Save]</button>
			<input ref="fileInput" type="file" @change="fileSelect" accept="text/json text/*">

			<confirm @confirm="dispatch('reset')">Wipe Wizard</confirm>
		</span>

		<span class="items"><slot name="center"></slot></span>

		<span class="link-bar">
			<a href="https://discord.gg/bCABC96" target="_blank">Discord</a>
			<a href="http://wiki.lerpinglemur.com/dhrune" target="_blank">Wiki</a>
			<a href="https://www.reddit.com/r/wizrobe/" target="_blank">Reddit</a>
			<span class="vers">Version: {{ VERSION }}</span>
			<button class="text-button" @click="$emit('open-settings')">&#9881;</button>
		</span>

	</div>


</template>

<style scoped>

span.vers {
	font-size: 0.9em;
	align-self: center;
	margin-bottom: var(--sm-gap);
}

div.text-button a {
	text-decoration: none;
}

input[type="file"] {
	display:none;
}

#drop-file {
	border: var(--tiny-gap) dashed var(--quiet-text-color);
}

.load-opts {
	display:flex;
}

.load-opts button {
	height:100%;
}
.load-opts .text-button {
	max-height:var(--lg-gap);
}

span.load-message {
	padding: var(--md-gap) var(--md-gap) var(--tiny-gap);
}

span.items {
	text-transform: capitalize;
}
</style>