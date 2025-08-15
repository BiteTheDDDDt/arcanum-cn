<script>
/**
 * Detailed Stat display for a single Character.
 */
export default {
	props: ["char"],
	computed: {
		level() {
			return this.char.level.value;
		},

		defense() {
			return this.char.defense;
		},
		dodge() {
			return Math.floor(this.char.dodge.valueOf());
		},
		luck() {
			return Math.floor(this.char.luck.valueOf());
		},
		damage() {
			return this.char.damage.valueOf();
		},
		tohit() {
			return this.char.tohit.value;
		},
		exp() {
			return this.floor(this.char.exp.value);
		},
		next() {
			return this.floor(this.char.next);
		},
	},
};
</script>

<template>
	<div class="charpane">
		<div>
			<table>
				<tr>
					<td>name</td>
					<th class="text-entry"><input class="fld-name" type="text" v-model="char.name" /></th>
				</tr>
				<tr>
					<td>level</td>
					<th>{{ level }}</th>
				</tr>
				<tr>
					<td>exp</td>
					<th>{{ exp }} / {{ next }}</th>
				</tr>
			</table>
		</div>
	</div>
</template>
