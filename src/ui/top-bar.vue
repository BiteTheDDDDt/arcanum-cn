<script>
import Profile from "modules/profile";
import LoginStatus from "@/ui/components/loginStatus.vue";

export default {
	computed: {
		hasHall() {
			return Profile.hasHall();
		},
		VERSION() {
			return __VERSION;
		},
	},
	created() {
		this.Profile = Profile;
	},
	components: {
		login: LoginStatus,
	},
	methods: {
		fileSelect(e) {
			e.stopPropagation();
			e.preventDefault();
			this.dispatch("load-file", e.target.files);
		},
		fileDrop(e) {
			e.stopPropagation();
			e.preventDefault();
			e.target.classList.remove("hilite");
			const dt = e.dataTransfer;
			this.dispatch("load-file", dt.files);
		},
		fileDrag(e) {
			e.stopPropagation();
			e.preventDefault();
			e.currentTarget.classList.add("hilite");
		},
		dragOut(e) {
			e.stopPropagation();
			e.preventDefault();
			e.currentTarget.classList.remove("hilite");
		},
	},
};
</script>

<template>
	<div class="top-bar">
		<span class="load-opts">
			<login v-if="Profile.CLOUD" />
			<button type="button" @click="dispatch('save')">保存</button>
			<button type="button" @click="dispatch('load')">加载</button>
			<button type="button" @click="emit('save-file-check', $event)">获取存档</button>
			<button type="button" v-if="hasHall" class="text-button" @click="dispatch('hall-file', $event)">
				大厅存档
			</button>
			<!--<input type="file" name="[File]" accept="text/json" @change="fileDrop">-->
			<button
				type="button"
				id="drop-file"
				@click="$refs.fileInput.click()"
				@drop="fileDrop"
				@dragover="fileDrag"
				@dragleave.capture.stop="dragOut"
				name="[加载存档]">
				[加载存档]
			</button>
			<input ref="fileInput" type="file" @change="fileSelect" accept="text/json text/*" />
		</span>
		<span class="items">
			<slot name="center"></slot>
		</span>
		<span class="link-bar">
			<a class="item" href="https://arcanumtesting.gitlab.io/arcanum/" target="_blank">Test Site</a>
			<a class="item" href="https://discord.gg/bCABC96" target="_blank">Discord</a>
			<a class="item" href="https://theoryofmagic.miraheze.org/wiki/Main_Page" target="_blank">Wiki</a>
			<a class="item" href="https://www.reddit.com/r/wizrobe/" target="_blank">Reddit</a>
			<span class="vers  item">Version: {{ VERSION }}</span>
			<button type="button" class="text-button item" @click="$emit('open-settings')">&#9881;</button>
		</span>
	</div>
</template>

<style scoped>
.top-bar {
	display: inline-flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-content: center;
	border-bottom: 1px solid var(--separator-color);
	height: 52px;
}

.top-bar .load-opts {
	display: inline-flex;
	flex-direction: row;
	width: 25%;
}

.top-bar .load-opts button {
	width: 100%;
}

.top-bar .items {
	display: flex;
	flex-flow: row nowrap;
	justify-self: flex-end;
	margin-left: var(--md-gap);
	text-transform: capitalize;
	width: 55%;
}

.top-bar .link-bar {
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	flex-grow: 1;
	align-items: center;
	overflow-x: hidden;
	overflow-y: visible;
	font-size: 0.9em;
	width: 20%;
}

.link-bar .item {
	padding-left: 0.65em;
	padding-right: 0.65em;
}

input[type="file"] {
	display: none;
}

#drop-file {
	border: var(--tiny-gap) dashed var(--quiet-text-color);
}
</style>
