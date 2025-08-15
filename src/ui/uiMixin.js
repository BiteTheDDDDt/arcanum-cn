/**
 * Helpers for hiding item selections.
 */
export default {
	data() {
		return {
			inConfig: false,
			hideUIMixin: {},
		};
	},

	mounted() {
		let btnHides = this.$refs.btnHides;
		if (btnHides) {
			btnHides.addEventListener("click", e => {
				e.preventDefault();
				if (this.inConfig) {
					this.stopHides();

					this.hide = this.newHides;
					this.newHides = null;

					e.target.classList.remove("inConfig");
				} else {
					this.inConfig = true;
					e.target.classList.add("inConfig");

					this.newHides = this.hide;
					this.hide = {};

					this.$nextTick(() => this.configHides());
				}
			});
		}
	},

	methods: {
		show(it) {
			return (this.inConfig || !this.hide[it.id]) && !it.hide;
		},

		configHides() {
			// containing element.
			var sel = this.$refs.hidables || this.$el;
			var hideElms = sel.querySelectorAll(".hidable");
			if (!hideElms) return;

			/**
			 * @property {(Event)=>null} onTogHide - listens to click events.
			 */
			this.onTogHide = e => this.hideToggle(e);

			for (let i = hideElms.length - 1; i >= 0; i--) {
				var h = hideElms[i];
				if (this.newHides[h.dataset.key]) h.classList.add("inConfig", "configHiding");
				else h.classList.add("inConfig");

				h.addEventListener("pointerdown", this.onTogHide, true);
			}
		},

		/**
		 * Stop toggling hide on elements.
		 */
		stopHides() {
			// containing element.
			var sel = this.$refs.hidables || this.$el;
			var hideElms = sel.querySelectorAll(".hidable");
			if (!hideElms) return;

			// remove event listeners.
			for (let i = hideElms.length - 1; i >= 0; i--) {
				var h = hideElms[i];

				h.removeEventListener("pointerdown", this.onTogHide, true);
				h.classList.remove("configHiding", "inConfig");
			}

			this.onTogHide = null;
			this.inConfig = false;
		},

		/**
		 * Toggle the hidden status of a button.
		 * @param {*} it
		 */
		hideToggle(e) {
			e.preventDefault();
			e.stopPropagation();

			let targ = e.currentTarget;
			let id = targ.dataset.key;

			if (!id) return;

			let v = this.newHides[id];
			if (v === undefined || v === null) {
				this.newHides[id] = true;
			} else this.newHides[id] = !v;

			if (!v) targ.classList.add("configHiding");
			else targ.classList.remove("configHiding");
		},

		beforeDestroy() {
			this.onTogHide = null;
		},
	},
};
