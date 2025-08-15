<script>
import CmdLine from "@/debug/cmdline";
import Game from "@/game";
import Debug from "@/debug/debug";

const TOGGLE_KEY = 192;

export default {
	data() {
		return {
			open: false,
		};
	},
	created() {
		window.game = Game;

		let debug = window.debug || new Debug(Game);
		this.cmdLine = new CmdLine(debug);

		window.addEventListener("keydown", this.onkey);
	},
	updated() {
		if (this.$refs.cmdInput) {
			this.$refs.cmdInput.focus();
		}
	},
	methods: {
		toggleView() {
			this.open = !this.open;
		},

		onkey(e) {
			if (e.keyCode === TOGGLE_KEY) {
				this.toggleView();
				e.preventDefault();
			}
		},

		doCmd(line) {
			this.cmdLine.parse(line);
		},

		onpress(e) {
			if (e.keyCode === 38) {
				// UP ARROW
				this.$refs.cmdInput.value = this.cmdLine.prevLine();
			} else if (e.keyCode === 40) {
				// DOWN ARROW
				this.$refs.cmdInput.value = this.cmdLine.nextLine();
			} else if (e.keyCode === 13) {
				// ENTER
				let line = e.target.value;
				e.target.value = "";
				this.doCmd(line);
			}
		},
	},
};
</script>

<template>
	<input v-if="open" ref="cmdInput" type="text" @keydown="onpress" />
</template>
