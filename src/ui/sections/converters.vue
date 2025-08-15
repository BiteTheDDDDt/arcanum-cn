<script>
import Game from "@/game";
import { precise } from "@/util/format";
import { CheckTypes } from "@/ui/items/infoBlock.js";
import Profile from "modules/profile";
import {
	furnitureFilter,
	resourceFilter,
	upgradeFilter,
	checkConverterInputEmpty,
	checkConverterOutputsFull,
} from "@/util/converter.js";

export default {
	methods: {
		strip(conversion) {
			let stripped = {};
			for (let a in conversion) {
				if (conversion[a].value != 0) {
					stripped[a] = conversion[a];
				}
			}
			return stripped;
		},
		canAfford(key, num) {
			return Game.canPay(key, num);
		},
		cantFill(key) {
			return Game.state.getData(key).maxed();
		},
		count(it) {
			return it.value > 1 ? " (" + Math.floor(it.value) + ")" : "";
		},
		isEmpty(it) {
			return checkConverterInputEmpty(it);
		},
		isFull(it) {
			return checkConverterOutputsFull(it);
		},
		lookup(key) {
			return Game.state.getData(key).name.toTitleCase();
		},
		precise: precise,
	},
	computed: {
		allSections() {
			let list = {
				upgrades: this.upgrades,
				furniture: this.furniture,
				resources: this.resources,
			};

			return list;
		},
		upgrades() {
			return Game.state.converters.filter(upgradeFilter);
		},
		furniture() {
			return Game.state.converters.filter(furnitureFilter);
		},
		resources() {
			return Game.state.converters.filter(resourceFilter);
		},
		hall() {
			return Profile.hall;
		},
	},
	beforeCreate() {
		this.CheckTypes = CheckTypes;
	},
};
</script>

<template>
	<div class="converters" ref="conv-anchor">
		<span><strong>Converters</strong></span>
		<div>Displays all converters, their inputs, and their output effects.</div>
		<div>Does not display "mod" outputs.</div>
		<div class="conv-list">
			<table v-for="(list, title) in allSections">
				<tr>
					<th colspan="4">{{ title.toTitleCase() }}</th>
				</tr>
				<tr>
					<th>Converter</th>
					<th>Total Inputs</th>
					<th>Total Outputs</th>
					<th>Converter Status</th>
				</tr>
				<tr v-for="it in list" :key="it.id" @mouseenter.capture.stop="itemOver($event, it)">
					<td>{{ it.name.toTitleCase() + count(it) }}</td>
					<td>
						<div
							v-for="(value, key) in strip(it.convert.input)"
							:class="{ failed: !canAfford({ [key]: value }, it.convert.singular ? 1 : it.value) }">
							{{ precise(value * (it.convert.singular ? 1 : it.value), 4) }} {{ lookup(key) }}
						</div>
					</td>
					<td>
						<div v-for="(value, key) in strip(it.convert.output.effect)" :class="{ full: cantFill(key) }">
							{{ precise(value * (it.convert.singular ? 1 : it.value), 4) }} {{ lookup(key) }}
						</div>
					</td>
					<td>
						<div v-if="isFull(it)">Not running - output full</div>
						<div v-else-if="isEmpty(it)">Not running - input missing</div>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<style scoped>
div.converters {
	display: flex;
	flex-flow: column nowrap;
	overflow-y: auto;
	height: 100%;
	padding: 10px;
	padding-bottom: 30px;
}

div.conv-list {
	margin-bottom: 1rem;
	overflow-x: visible;
}

table {
	margin: 15px;
	border-collapse: collapse;
	min-width: 80%;
}

td {
	padding-left: 5px;
	padding-right: 5px;
	border-right: solid 1px #000;
	border-left: solid 1px #000;
	width: 25%;
}

table tr:first-child {
	top: 0;
	background: var(--header-background-color);
}

table tr:nth-child(2n) {
	background: var(--odd-list-color);
}

.failed {
	color: red;
}

.full {
	color: slategrey;
}

.darkmode .failed,
.darkmode .full {
	color: #505050;
}
</style>
