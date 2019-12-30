<script>
import Game from '../../game';
import { center, positionAt } from './popups.js';

import ItemsBase from '../itemsBase.js';
import GData from '../../items/gdata';

/**
 * @emits choice
 */
export default {

	data() {
		return {
			title:null,
			list:null,
			elm:null,
			item:null,
			open:false,
			strings:false
		}
	},
	mixins:[ItemsBase],
	created(){

		this.cb = null;

		this.plisten = ()=>{

			/**
			 * Special event to show choice dialog.
			*/
			this.add( 'choice', this.show, this );

		};

		this.listen('game-loaded', this.plisten );

	},
	beforeDestroy(){
		this.removeListener( 'game-loaded', this.plisten );
		this.plisten = null;
		this.cancel();
	},
	updated() {

		if (this.open===false) return;

		if ( this.elm) positionAt( this.$el, this.elm, 0 );
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

					this.list = Game.state.getData( v );

				} else if ( Array.isArray(v ) ) {

					if ( this.strings ) this.list = v;
					else {
						var a = [];
						for( let i = v.length-1; i>= 0; i-- ) {

							var it = Game.state.findData( v[i] );
							if ( it ) a.push(it);
						}

						this.list = a;
					}

				} else this.list = null;

			}

		}

	},
	methods:{

		/**
		 * @param {boolean}strings - data are raw strings.
		 */
		show( choices, cb=null, elm=null, title=null, strings=false) {

			//console.log('showing choices');
			this.title = title;
			this.cb = cb;
			this.elm = elm;
			this.strings = strings;

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

			this.open = false;
			this.item = null;
			this.choices = null;
			this.elm = null;

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
			this.elm = null;
		}

	}

}
</script>

<template>
<div class="popup" v-if="choices!=null&&choices.length>0">
	<div class="content">

		<span class="title" v-if="title">{{title}}</span>

		<div class="items">
		<span class="action-btn" v-for="it in choices" :key="strings?it:it.id"
			@mouseenter.capture.stop="!strings ? emit( 'itemover', $event,it):''">

		<button class="wrapped-btn" :disabled="!strings&&!usable(it)"
			@click="choose( it )">{{ strings ? it : it.name }}</button>
		</span>
		</div>

		<span><button class="close-btn" @click="cancel">Cancel</button></span>

	</div>
</div>

</template>

<style scoped>

.popup {
	z-index: var(--md-depth);
	max-width: 50vw;
}
.content {
	display:flex;
	flex-flow: column nowrap;
	width: 100%;
	min-height:5rem;
}

.content .items {
	display:flex;
	flex-flow: row wrap;
	flex-grow: 1;
	width:auto;
}

.content .title {
	font-weight: bold;
	text-align: center;
	margin-bottom: var(--sm-gap);
}

.action-btn {
	width: 100%;
}
.action-btn button {

	max-height: 2em;
	width:100%;
}

button.close-btn {
	min-height: 2em;
	width: 5em;
	font-size:0.9em;
}


</style>