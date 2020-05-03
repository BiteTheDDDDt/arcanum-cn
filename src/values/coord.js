/**
 * Number of coordinates in a coordinate is not defined, nor the meaning of a coordinate.
 * coords 0,1,2 may be taken as roughly x,y,z. further coordinates may refer to arbitrary planes.
 */
export default class Coord {

	toJSON(){ return this._str; }

	get vals(){return this._vals;}

	constructor( c ){

		this._str = c;
		this._vals = c ? c.split(',') : [];

	}

	/**
	 * Distance to coord c.
	 * @param {*} c
	 * @returns {number}
	 */
	dist(c) {

		// min, max refers to number of defined coordinates.
		let minvals = c.vals;
		let maxvals = this.vals;

		if ( minvals.length > maxvals.length ) {
			minvals = maxvals;
			maxvals = c.vals;
		}

		let d, i;
		for( i = minvals.length-1; i >= 0; i-- ) {
			d += maxvals[i] - minvals[i];
		}

		for( i = maxvals.length-1; i >= minvals.length; i-- ) d += maxvals[i];

		return d < 0 ? -d : d;

	}

}