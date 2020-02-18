import Game from '../game';
import Debug from './debug';

var cheats;

if ( !__CHEATS ) {

	cheats = {};

} else {

	const cheatKeys = {
		b:'herbs',
		g:'gold',
		s:'scrolls',
		e:'exp',
		t:'stamina',
		h:"hp",
		k:'sp',
		m:'mana',
		c:'codices',
		a:'arcana',
		r:'research',
		w:'wizardhall'
	};

 cheats = {

	created() {

		this.debug = window.debug || new Debug( Game );

		window.addEventListener('keydown', e => {
			if (e.repeat) return;
			this.cheatKey(e);
		}, false);

		this.enabled = false;
		this.code = 'bodias';
		this.input = '';
	},

	methods: {

		cheatKey(e) {

			if (!this.interval) return;

			let active = document.activeElement;
			if ( active && active.tagName.toLowerCase() === 'input') return;

			let key = e.key.toLowerCase();
			if ( !this.enabled ) {
				this.testUnlock(key);
				return;
			}

			let targ = cheatKeys[key];

			if (key === 'p') {

				this.state.getData('runner').autoProgress();
				e.stopPropagation();

			} else if ( key ==='f') {

				this.debug.fillall();
				e.stopPropagation();

			} else if ( targ ) {
				if (e.shiftKey) this.state.addMax( targ );
				else {
					this.debug.doFill(targ);
				}
				e.stopPropagation();
			}

		},
		testUnlock(key){

			this.input += key;
			if ( this.input === this.code ) {

				console.warn('CHEATS ON');
				this.enabled = true;

			} else if ( this.input.length >= this.code.length ) {
				this.input = this.input.slice( 1+ this.input.length - this.code.length );
			}

		}

	}

}

}

export default cheats;