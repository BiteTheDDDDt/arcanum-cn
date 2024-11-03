<script>
import Game from '@/game';
import Upgrades from '@/ui/panes/upgrades.vue';
import Profile from 'modules/profile';
import Settings from 'modules/settings';
import ItemsBase from '@/ui/itemsBase';
import UIMixin from '@/ui/uiMixin';
import TaskGroup from "@/ui/panes/TaskGroup.vue"
import { isTypeAliasDeclaration } from 'typescript';

export default {

	mixins: [ItemsBase, UIMixin],
	components: {
		upgrades: Upgrades,
		TaskGroup: TaskGroup
	},
	data() {

		let ops = Settings.getSubVars('main');
		if (!ops.hide) ops.hide = {}

		return {
			hide: ops.hide
		}

	},

	collapseSection() {

	},
	methods: {
		groupMap(maparr) {
			let groupedMap = new Map
			let groupHolder = {}
			for (let a of maparr) {
				let b = a.group ? a.group : "other"
				if (Array.isArray(groupHolder[b]))
				 {
					groupHolder[b].push(a)
				 }
				 else groupHolder[b] = Array.of(a)
				
			}
			for (let c in groupHolder) {
				groupedMap.set(c, groupHolder[c])
			}
			
			return groupedMap
		}

	},
	computed: {

		hall() { return Profile.hall; },
		mergedtasks() { return Game.state.tasks.concat(this.hall.tasks) },

		visibleTasks() {
			return this.mergedtasks.filter(task => !this.locked(task) && !task.morality && this.show(task) && (!task.max && task.repeat));

		},
		visibleUpgrades() {
			return Game.state.upgrades.filter(upgrade => !this.locked(upgrade) && this.show(upgrade) && (!upgrade.owned || upgrade.repeat)).concat(this.mergedtasks.filter(task => !this.locked(task) && !task.morality && this.show(task) && (task.max || !task.repeat)));
		},

		groupedTasks() {
			//Compatibility change
			//let ret = Map.groupBy(this.visibleTasks, (task) => task.group ? task.group : "other");
			//return ret; 
			let oof = this.groupMap(this.visibleTasks)
			return oof
			
		},
		groupedUpgrades() {
			//Compatibility change
			//let ret = Map.groupBy(this.visibleUpgrades, (upgrade) => upgrade.group ? upgrade.group : "other");
			//return ret;
			let oof = this.groupMap(this.visibleUpgrades)
			return oof
			
		},
		classes() {
			return Game.state.classes.filter(v => !this.locked(v) && this.show(v));
		},
		morals() { return this.mergedtasks.filter(v => v.value < 1 && !v.locked && v.morality && !v.disabled && v.locked == false) },
		visMorals() { return this.morals.filter(v => this.show(v)) },


	}

}
</script>

<template>
	<div class="main-tasks" ref="hidables">
		<div class="config"><button ref="btnHides" class="btnConfig"></button></div>
		<div class="div-hs">Tasks</div>
		<TaskGroup v-for="group in Array.from(groupedTasks.keys()).sort()" :title="group">
			<upgrades class="task-list" :items="groupedTasks.get(group)" :preventClick="inConfig" />
		</TaskGroup>
		<div v-if="groupedUpgrades.length != 0" class="div-hs">Upgrades</div>
		<TaskGroup v-for="group in Array.from(groupedUpgrades.keys()).sort()" :title="group">
			<upgrades class="task-list" :items="groupedUpgrades.get(group)" :preventClick="inConfig" />
		</TaskGroup>
		<div v-if="classes.length != 0" class="div-hs">Classes</div>
		<upgrades class="upgrade-list" :items="classes" :preventClick="inConfig" />
		<div v-if="visMorals.length != 0" class="div-hs">Morality Options</div>
		<upgrades class="upgrade-list" :items="visMorals" :preventClick="inConfig" />
	</div>
</template>

<style scoped>
div.task-list,
.main-tasks>div.upgrade-list {
	margin: 0;
	padding: var(--md-gap);
	display: grid;
	grid-template-columns: repeat(auto-fit, var(--task-button-width));
}

div.upgrade-list:empty {
	padding: 0px;
}

div.task-list .runnable:hover {
	background: var(--accent-color-hover);
}

div.task-list .runnable:active {
	background: var(--accent-color-active);
}
</style>