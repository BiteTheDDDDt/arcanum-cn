import Game from '../game';
import {quickSplice} from '../util/array';

export default {

	/**
	 * @property {GEvent[]} randoms - unlocked random events
	 * that can proc.
	 */
	randoms:[],

	/**
	 * update for checking random events.
	 */
	update(){

		for( let i = this.randoms.length-1; i>=0; i-- ) {

			var e = this.randoms[i];
			if ( e.disabled === true ) {

				quickSplice( this.randoms, i );

			} else if ( 6000*Math.random() < e.rand ) {

				e.amount( Game, 1);

			}


		}

	},

	/**
	 *
	 * @param {GEvent} evt
	 */
	add( evt ) {

		this.randoms.push( evt );

	}

}