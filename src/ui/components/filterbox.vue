<script>
export default {

	/**
	 * @property {object[]} items - items to filter.
	 * @property {prop} [prop='name'] - target prop of filter test.
	 *
	 * @property {number} [minItems=0] - minimum number of items before box is visible.
	 */
	props:['value', 'items', 'prop', 'minItems'],
	data() {
		return {
			text:this.value||'',
			pprop:this.prop||'name'
		}
	},
	watch:{
		items(newVal,oldVal){ this.findText = this.findText; }
	},
	created(){
		this.findText = this.text;
	},
	methods:{
		clear(){ this.text = ''; }
	},
	computed:{

		findText:{

			get() { return this.text; },
			set(v){

				this.text = v;
				let p = this.pprop;

				if ( !v ) this.$emit( 'input', this.items );

				var txt = v.toLowerCase();

				if ( typeof p === 'function') {

 					this.$emit( 'input', this.items.filter(
						it=>p(it, txt )
					));

				} else this.$emit( 'input', this.items.filter(
					it=>(typeof it === 'object') &&
					( (typeof it[p]) === 'string' ) && it[p].toLowerCase().includes( txt )
				));

			}

		}

	}

}
</script>


<template>
	<div class="filter-box" v-if="!this.minItems||text||(this.items.length>=this.minItems)">
		<label :for="elmId('filter')">Find</label>
		<input :id="elmId('filter')" v-model="findText" type="text">
	</div>
</template>


<style scoped>
label {
	margin-right:8px;
}
div.filter-box {
	font-size: 105%;
	vertical-align: middle;
	line-height: 1.2em;
	margin: 8px 4px 8px 12px;
}

.filter-box input[type=text] {
	padding: 4px;
	font-size: 105%;
}
</style>