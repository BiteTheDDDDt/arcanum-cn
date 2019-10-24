<script>
import Game from '../../game';
import { center, positionAt } from './popups.js';

import ItemsBase from '../itemsBase.js';

/**
 * @emits choice
 */
export default {

	data() {
		return {
			list:null,
			elm:null,
			item:null,
			open:false
		}
	},
	mixins:[ItemsBase],
	created(){

		this.cb = null;

		this.listen('game-loaded', ()=>{

			/**
			 * Special event to show choice dialog.
			*/
			this.add( 'choice', this.show, this );

		} );




	},
	updated() {

		if (this.open===false) return;

		if ( this.elm) positionAt( this.$el, this.elm );
		else center( this.$el );

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

			console.log('showing choices');
			this.cb = cb;
			this.elm = elm;

			this.choices = choices;
			this.open=true;

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
			this.open=false;
			this.cb = null;
			this.item = null;
			this.choices = null;
		}

	}

}
</script>

<template>
<div class="popup" v-if="choices!=null&&choices.length>0">
	<div class="content">

		<span class="action-btn" v-for="it in choices" :key="it.id"
			@mouseenter.capture.stop="emit( 'itemover', $event,it)">

		<button
			class="wrapped-btn"
			:disabled="!usable(it)"
			@click="emit( pEvent, it)">{{ it.name }}</button>
		</span>

		<button class="close-btn" @click="cancel">Cancel</button>

	</div>
</div>

</template>

<style scoped>

.popup {
	z-index: var(--md-depth);
}
.content {
	display:flex;
	flex-flow: column nowrap;
}

button.close-btn {
	height:100%;
	padding: 8px 4px;
	font-size:0.9em;
	min-width:118px;
}


</style>