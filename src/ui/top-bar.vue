<script>
import Profile from 'modules/profile';
import Game from '../game';
export default {

	props:['hasHall'],
	computed:{

		VERSION(){return __VERSION; }
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

		<span class="load-opts">
		<button @click="dispatch('save')">save</button>
		<button @click="dispatch('load')">load</button>

		<div class="text-button"><a href="" download
			@click.self="dispatch('save-file',$event )" type="text/json">get save</a></div>

		<div v-if="hasHall" class="text-button"><a href="" download
			@click.self="dispatch('hall-file',$event )" type="text/json">hall save</a></div>

		<button id="drop-file" @click="$refs.fileInput.click()" @drop="fileDrop" @dragover="fileDrag" @dragleave.capture.stop="dragOut" name="[Drop Save]">[Drop Save]</button>
			<input ref="fileInput" type="file" @change="fileSelect" accept="text/json text/*">

			<confirm @confirm="dispatch('reset')">reset wizard</confirm>
			<confirm v-if="hasHall" @confirm="dispatch('resetHall')">reset hall</confirm>

		</span>

		<span class="items"><slot name="center"></slot></span>

		<span class="link-bar">
			<a href="https://discord.gg/bCABC96" target="_blank" rel="noopener noreferrer">discord/guide</a>
			<a href="http://wiki.lerpinglemur.com/dhrune" target="_blank" rel="noopener noreferrer">wiki</a>
			<a href="https://www.patreon.com/theoryofmagic" target="_blank" rel="noopener noreferrer">patreon</a>
			<a href="https://www.reddit.com/r/wizrobe/" target="_blank" rel="noopener noreferrer">reddit</a>
			<span class="vers">build# {{ VERSION }}</span>
			<button class="text-button" @click="dispatch('open-settings')">&#9881;</button>
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
	border: var(--tiny-gap) dashed var(--popup-border);
}

.load-opts {
	display:flex;
}

.load-opts button {
	min-height:1.5rem;
	height:1.5rem;
	max-height:1.5rem;
}
.load-opts .text-button {
	max-height:var(--lg-gap);
}

.link-bar {
	justify-self: flex-end;
	display:flex;
	flex-grow: 1;
	flex-flow: row nowrap;
	font-size: 0.90em;
}

.link-bar a {
	margin:0 var(--md-gap) var(--sm-gap);
	align-self:center;
}

span.load-message {
	padding: var(--md-gap) var(--md-gap) var(--tiny-gap);
}

</style>