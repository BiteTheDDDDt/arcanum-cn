<script>
import Game from '../../game';
import {center} from './popups.js';

/**
 * @emits choice
 */
export default {

	data() {
		return {
			list:null,
			item:null
		}
	},
	updated() {
		if ( this.item ) {
			center( this.$el );
		}
	},
	computed:{

		choices:{

			get(){
				return this.list;
			},
			set(v){

				if ( typeof v === 'string') {

					this.list = Game.state.getTagList( v );

				} else if ( Array.isArray(v ) ) {

					var a = [];
					for( let i = v.length-1; i>= 0; i-- ) {

						var it = Game.state.findData( v[i] );
						if ( it ) a.push(it);
					}

					this.list = a;

				} else this.list = null;

			}

		}

	},
	methods:{

		/**
		 * @method
		 * @public
		 * @property {Item|Array} it
		 * @property {?Item[]|string[]|null} [choices] - choices. if not set,
		 * it.choices or it is used, whichever is defined.
		 */
		choose( it, choices ){

			if ( choices ) {

				this.item = it;
				this.choices = choices;

			} else {

				if ( it.choices ) {

					this.item = it;
					this.choices = it.choices;

				} else this.choices = it;

			}

		},
		choice( opt ){

			let it = this.item;

			this.item = null;
			this.choices = null;

			this.$emit('choice', opt, it );

		},
		cancel(){
			this.item = null;
			this.choices = null;
		}

	}

}
</script>

<template>
	<div class="popup" v-if="list!=null">

		<div v-for="opt in choices" :key="opt.id" @click="choice(opt)">
			{{opt.name}}
		</div>

		<div>
			<button @click="cancel">Cancel</button>
		</div>

	</div>
</template>

<style scoped>

</style>