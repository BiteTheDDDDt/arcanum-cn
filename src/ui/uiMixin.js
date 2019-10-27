/**
 * Helpers for hiding item selections.
 */
export default {

	data(){
		return {
			hides:{}
		}
	},

	mounted(){

		let btnHides = this.$refs.btnHides;
		if ( btnHides) {

			btnHides.addEventListener( 'click', (e)=>{

				e.preventDefault();
				if ( this.togglingHides ) {
					this.stopHides();
					e.target.classList.remove('inConfig');
				}
				else {
					this.beginHides();
					if ( this.togglingHides) e.target.classList.add('inConfig');
				}

			});

		}

	},

	methods: {

		hide(it){
			return !this.togglingHides&&this.hides[it.id] === true
		},

		beginHides(){

			var hideElms = this.$refs.hidables;
			if ( !hideElms) return;

			this.togglingHides = true;

			/**
			 * @property {(Event)=>null} onTogHide - listens to click events.
			 */
			this.onTogHide = (e)=>this.hideToggle(e);

			for( let i = hideElms.length-1; i>= 0; i--) {

				var h = hideElms[i];
				h.classList.add('inConfig');
				h.addEventListener('click', this.onTogHide, true );

			}


		},

		/**
		 * Stop toggling hide on elements.
		 */
		stopHides(){

			var hideElms = this.$refs.hidables;
			if (!hideElms) return;

			// remove event listeners.
			for( let i = hideElms.length-1; i>= 0; i--) {

				var h = hideElms[i];

				h.removeEventListener('click', this.onTogHide, true );
				h.classList.remove('configHiding', 'inConfig');

			}

			this.onTogHide = null;
			this.togglingHides = false;

		},

		/**
		 * Toggle the hidden status of a button.
		 * @param {*} it
		 */
		hideToggle( e ) {

			e.preventDefault();

			let targ = e.currentTarget;
			let id = targ.dataset.key;

			if ( !id) return;

			let v = this.hides[id];
			if ( v === undefined || v === null) {
				this.$set( this.hides, id, true );
			}
			else this.hides[id] = !v;

			if ( !v ) targ.classList.add('configHiding');
			else targ.classList.remove('configHiding');

			e.stopPropagation();

		},

		beforeDestroy() {
			this.onTogHide = null;
		}

	}

}