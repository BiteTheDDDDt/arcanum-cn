<script>

export default {

	computed:{
		VERSION(){return __VERSION; }
	},
	methods:{

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

		<div class="text-button"><a class="text-button" id="save-file" href=""
				download @click.self="dispatch('save-file',$event)" type="text/json">get save</a></div>
			<!--<input type="file" name="[File]" accept="text/json" @change="fileDrop">-->
		<button id="drop-file" @drop="fileDrop"
			@dragover="fileDrag" @dragleave.capture.stop="dragOut">[Drop Save]</button>

			<confirm @confirm="dispatch('reset')">reset</confirm>

		</span>

		<span class="items"><slot name="center"></slot></span>

		<span class="link-bar">
			<button class="text-button" @click="dispatch('open-settings')">&#9881;</button>
			<span class="vers">build# {{ VERSION }}</span>
			<a href="https://discord.gg/4dB2ZE5" target="_blank">discord/guide</a>
			<a href="https://www.patreon.com/theoryofmagic" target="_blank">patreon</a>
			<a href="https://www.reddit.com/r/wizrobe/" target="_blank">reddit</a>
		</span>

	</div>


</template>

<style scoped>

span.vers {
	font-size: 0.9em;
	align-self: center;
	margin-bottom: 4px;
}

#save-file {
	text-decoration: none;
}
#drop-file {
	border: 1.75px dashed rgb(117, 117, 117);
}

div.top-bar {
	display:flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	justify-items: flex-start;
	align-items: center;
	align-content: center;
	min-height:52px;
	max-width:100%;
	overflow:hidden;
	padding: 0px 14px 4px;
	border-bottom: 1px solid var(--separator-color);
}


.top-bar .items {
	display:flex;
	margin-left:20px;
}

.load-opts {
	display:flex;
}

.load-opts button {
	min-height:29px;
	height:29px;
	max-height:29px;
}
.load-opts .text-button {
	max-height:21px;
}

.link-bar {
	justify-self: flex-end;
	display:flex;
	flex-grow: 1;
	flex-flow: row-reverse nowrap;
	font-size: 0.90em;
}

.link-bar a {
	margin:0px 10px 4px;
	align-self:center;
}

span.load-message {
	padding: 8px 8px 2px;
}

</style>