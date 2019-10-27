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

			btnHides.addEventListener( 'click', ()=>{

				console.log('togglign');
				if ( this.togglingHides ) this.stopHides();
				else this.beginHides();

			});

		}

	},

	methods: {

		/**
		 * Determine if element should be hidden in ui.
		 * @param {GData} it
		 */
		hide(it){ return this.hides&&this.hides[it.id] === true; },

		beginHides(){

			var hideElms = this.$refs.hidables;
			if ( !hideElms) return;

			this.togglingHides = true;

			/**
			 * @property {(Event)=>null} toggleListener - listens to click events.
			 */
			this.toggleListener = (e)=>this.hideToggle(e);

			for( let i = hideElms.length-1; i>= 0; i--) {

				var h = hideElms[i];
				h.addEventListener('click', this.toggleListener, true );

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

				h.removeEventListener('click', this.toggleListener, true );
				h.classList.remove('configHiding');

			}

			this.toggleListener = null;
			this.togglingHides = false;

		},

		/**
		 * Toggle the hidden status of a button.
		 * @param {*} it
		 */
		hideToggle( e ) {

			let targ = e.currentTarget;
			let id = targ.dataset.key;

			if ( !id) return console.warn('no key found: ' + e.target );

			let v = this.hides[id];
			if ( v === undefined ) this.$set( this.hides, id, true );
			else this.hides[id] = !v;

			if ( !v ) targ.classList.add('configHiding');
			else targ.classList.remove('configHiding');

			e.stopPropagation();

		},

		beforeDestroy() {
			this.hideElems = null;
			this.toggleListener = null;
		}

	}

}