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
			elm:null,
			item:null
		}
	},
	created(){
		this.cb = null;
	},
	updated() {
		if ( this.item ) { center( this.elm || this.$el ); }
	},
	computed:{

		/**
		 * @property {gdata[]} choices - used to convert strings or tag string into choice objects.
		 */
		choices:{

			get(){ return this.list; },
			set(v){

				if ( !v ) this.list = null;

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

		show( choices, cb=null, elm=null ) {

			this.cb = cb;
			this.elm = elm;

			this.choices = choices;

		},

		/**
		 * @method
		 * @public
		 * @property {Item|Array} it
		 * @property {?Item[]|string[]|null} [choices] - choices. if not set,
		 * either it.choices or it is used, whichever is defined.
		 */
		itemChoices( it, choices ){

			if ( choices ) {

				this.item = it;
				this.choices = choices;

			} else {

				if ( it.choices ) {

					this.item = it;
					this.choices = it.choice;

				} else this.choices = it;

			}

		},
		choose( opt ){

			this.item = null;
			this.choices = null;

			if ( this.cb ) {

				let cb = this.cb;
				this.cb = null;
				cb( opt );

			}

		},
		cancel(){
			this.cb = null;
			this.item = null;
			this.choices = null;
		}

	}

}
</script>

<template>
	<div class="popup" v-if="list!=null&&choices.length>0">

		<button v-for="opt in choices" :key="opt.id" @click="choose(opt)"
			@mouseenter.capture.stop="emit( 'itemover',$event,opt)">{{opt.name}}</button>

		<div>
			<button @click="cancel">Cancel</button>
		</div>

	</div>
</template>

<style scoped>

</style>