<script>
import Game from "@/game";
import { floor, lowFixed, precise } from "@/util/format";
import AllUpgrades from "@/ui/panes/allupgrades.vue";
import SlotPick from "@/ui/components/slotpick.vue";
import Profile from "modules/profile";
import { getDelay } from "@/values/consts";
import { defineAsyncComponent } from "vue";

export default {
	components: {
		upgrades: AllUpgrades,
		slotpick: SlotPick,
		hall: defineAsyncComponent(() => import(/* webpackChunkName: "hall-ui" */ "../hall/hall.vue")),
	},
	data() {
		return { hallOpen: false };
	},
	beforeCreate() {
		this.player = Game.state.player;
	},
	computed: {
		wizName: {
			get() {
				return this.player.name;
			},
			set(v) {
				if (v) this.player.setName(v);
			},
		},
		hallUnlocked() {
			return Profile.hasHall();
		},
		hallName() {
			return Profile.hall.name;
		},
		title() {
			return this.player.title;
		},
		speed() {
			return this.player.speed.value;
		},
			delay() {
				return "".concat("回合延迟：", getDelay(this.player.speed.value).toPrecision(2), " 秒");
			},
		bonusNames() {
			return Object.keys(this.player.bonuses);
		},
		level() {
			return this.player.level.value;
		},
		defense() {
			return this.player.defense;
		},
		dodge() {
			return Math.floor(this.player.dodge.valueOf());
		},
		thorns() {
			return Math.floor(this.player.stat_thorns.valueOf());
		},
		reflect() {
			return Math.floor(this.player.stat_reflect.valueOf());
		},
		luck() {
			return Math.floor(this.player.luck.valueOf());
		},
		damage() {
			return this.player.damage.valueOf();
		},
		tohit() {
			return this.player.tohit.value;
		},
		exp() {
			return this.floor(this.player.exp.value);
		},
		next() {
			return this.floor(this.player.next);
		},
		mount() {
			return Game.state.getSlot("mount");
		},
		chaincast() {
			return (this.player.chaincast - 1).toPrecision(3);
		},
		sp() {
			return this.player.sp;
		},
		spStr() {
			return lowFixed(this.player.sp);
		},
		resist() {
			return this.player.resist;
		},
		orderedResist() {
			let ordered = {
				slash: 0,
				pierce: 0,
				blunt: 0,
				mana: 0,
				water: 0,
				air: 0,
				fire: 0,
				earth: 0,
				nature: 0,
				spirit: 0,
				light: 0,
				shadow: 0,
			};
			let resist = this.resist;
			for (let p in resist) ordered[p] = resist[p].value;
			return ordered;
		},
		potencies() {
			return Game.state.potencies.filter(p => precise(p.value) != 100);
		},
		orderedPotencies() {
			let global = {
				physdmg: true,
				spelldmg: true,
				spellheal: true,
			};
			let ordered = {
				slashdmg: true,
				piercedmg: true,
				bluntdmg: true,
				manadmg: true,
				waterdmg: true,
				airdmg: true,
				firedmg: true,
				earthdmg: true,
				naturedmg: true,
				spiritdmg: true,
				lightdmg: true,
				shadowdmg: true,
			};
			let potencies = this.potencies;
			for (let potency of potencies) {
				if (global[potency.id]) global[potency.id] = potency;
				else ordered[potency.id] = potency;
			}
			for (let p in global) if (global[p] === true) delete global[p];

			for (let p in ordered) if (ordered[p] === true) delete ordered[p];

			return [global, ordered];
		},
		globalPotencies() {
			return this.orderedPotencies[0];
		},
		schoolPotencies() {
			return this.orderedPotencies[1];
		},
			notorietyTip() {
				return this.hallUnlocked
					? "名声值。每一点名声提供一点大厅威望。大厅威望可用于购买大厅升级。"
					: "名声值。找到巫师大厅以了解更多信息。";
			},
			defenseTip() {
				return "减少所受伤害。";
			},
			dodgeTip() {
				return "决定你的闪避几率。";
			},
			thornsTip() {
				return "被敌人击中时以固定伤害反击。受敌方防御影响。";
			},
			reflectTip() {
				return "被敌人击中时按所受伤害的百分比反击。受敌方防御影响。";
			},
			hitTip() {
				return "决定你的命中率。每100点命中会使对手的有效闪避减半。";
			},
			luckTip() {
				return "提高获得战利品的总体概率。";
			},
			chaincastTip() {
				return "每点表示每回合额外施放一次法术。小数部分表示概率（例如：0.2 表示 20%）。";
			},
	},
	methods: {
		floor: floor,
		precise: precise,
		openHall() {
			this.hallOpen = true;
		},
		closeHall() {
			this.hallOpen = false;
		},
			pickTitle($evt) {
				this.emit("choice", this.player.titles, {
					cb: p => {
						if (p) {
							this.player.setTitle(p);
						}
					},
					elm: $evt.target,
					strings: true,
					title: "称号",
				});
			},
	},
};
</script>

<template>
	<div class="player-view">
		<hall v-if="hallOpen" @close="closeHall" />
		<div>
			<div class="stat-block">
				<h3 class="text-entry">
					<input type="text" class="fld-name" v-model="wizName" />
					<span v-if="hallUnlocked">
						<button type="button" @click="openHall">{{ hallName }}</button>
					</span>
				</h3>
				<span @mouseenter.capture.stop="itemOver($event, player.titles, null, 'Titles')">
					<button
						v-if="player.titles.length > 0"
						type="button"
						class="titleConfig"
						@click="pickTitle($event)"></button>
					<strong>Title: {{ title }}</strong>
				</span>
			</div>
			<div class="stat-block">
				<div class="slotpick"><strong>休闲</strong><slotpick pick="leisure" canRemove="true" /></div>
				<div class="slotpick"><strong>坐骑</strong><slotpick pick="mount" /></div>
				<div class="slotpick"><strong>同伴</strong><slotpick pick="companion" /></div>
			</div>
			<h4 class="section-header">个人属性</h4>
			<div class="stat-block">
				<div class="stat">
					<strong>等级<br />经验</strong>
					<span>{{ level }}<br />{{ exp }} / {{ next }}</span>
				</div>
				<div class="stat">
					<strong>美德<br />邪恶</strong>
					<span>
						{{ Math.floor(player.virtue.valueOf()) }}<br />{{ Math.floor(player.evilamt.valueOf()) }}
					</span>
				</div>
				<div class="stat" @mouseenter.capture.stop="itemOver($event, null, null, null, notorietyTip)">
					<strong>名声：</strong>
					<span>{{ Math.floor(player.fame.valueOf()) }}</span>
				</div>
			</div>
			<h4 class="section-header">战斗</h4>
			<div class="stat-block">
				<div class="stat" @mouseenter.capture.stop="itemOver($event, null, null, null, defenseTip)">
					<strong>防御：</strong>
					<span>{{ defense }} ({{ (100 - 100 * player.getDefenceMultiplier()).toFixed(1) }}%)</span>
				</div>
				<div class="stat" @mouseenter.capture.stop="itemOver($event, null, null, null, dodgeTip)">
					<strong>闪避：</strong>
					<span>{{ dodge }} ({{ (100 * player.getDodgeChance()).toFixed(1) }}%)</span>
				</div>
				<div class="stat" v-if="thorns > 0" @mouseenter.capture.stop="itemOver($event, null, null, null, thornsTip)">
					<strong>荆棘：</strong>
					<span>{{ thorns }}</span>
				</div>
				<!--
				<div v-if = "player.stat_reflect>0" class="stat" @mouseenter.capture.stop="itemOver($event, null, null, null, reflectTip)">
					<strong>Reflect:</strong>
					<span>{{ reflect }}%</span>
				</div>
				-->
				<div class="stat" @mouseenter.capture.stop="itemOver($event, null, null, null, hitTip)">
					<strong>命中加值：</strong>
					<span>{{ precise(tohit) }}</span>
				</div>
				<div class="stat" @mouseenter.capture.stop="itemOver($event, null, null, null, delay)">
					<strong>速度：</strong>
					<span>{{ speed }}</span>
				</div>
				<div class="stat" @mouseenter.capture.stop="itemOver($event, null, null, null, luckTip)">
					<strong>运气：</strong>
					<span>{{ luck }}</span>
				</div>
				<div v-if="chaincast > 0">
					<div class="stat" @mouseenter.capture.stop="itemOver($event, null, null, null, chaincastTip)">
						<strong>Extra Spell Casts:</strong>
						<span>{{ chaincast }}</span>
					</div>
				</div>
			</div>
			<div>
				<h4 class="section-header">全局强效</h4>
				<div class="stat-block">
					<template v-for="(r, k) in globalPotencies" :key="k">
						<div class="stat">
							<strong>{{ r.name.replace(" damage", "").toTitleCase() }}</strong>
							<span>{{ precise(r.value) }}%</span>
						</div>
					</template>
				</div>
				<h4 class="section-header">学派强效</h4>
				<div class="stat-block">
					<template v-for="(r, k) in schoolPotencies" :key="k">
						<div class="stat">
							<strong>{{ r.name.replace(" damage", "").toTitleCase() }}</strong>
							<span>{{ precise(r.value) }}%</span>
						</div>
					</template>
				</div>
				<h4 class="section-header">状态抵抗</h4>
				<div class="stat-block">
					<template v-for="(r, k) in player.negate" :key="k">
						<div class="stat">
							<strong>{{ k.toString().toTitleCase() }}</strong>
							<span>{{ floor(r.value) }}%</span>
						</div>
					</template>
				</div>
				<h4 class="section-header">抗性</h4>
				<div class="stat-block">
					<template v-for="(r, k) in orderedResist" :key="k">
						<div class="stat">
							<strong>{{ k.toString().toTitleCase() }}</strong>
							<span>{{ floor(r) }} ({{ (100 - 100 * player.getResistMultiplier(k)).toFixed(1) }}%)</span>
						</div>
					</template>
				</div>
			</div>
		</div>
		<upgrades></upgrades>
	</div>
</template>

<style scoped>
.player-view {
	display: grid;
	grid-template-columns: 78% 22%;
	margin: var(--md-gap);
}

div.player-view input[type="text"] {
	border: none;
	background: transparent;
	cursor: text;
	font-size: 1em;
	margin: 10px;
	position: relative;
}

.player-view .section-header {
	width: 100%;
	text-align: center;
	text-decoration: underline;
	padding-top: 8px;
	margin-bottom: 4px;
}

.player-view .stat-block {
	display: grid;
	grid-template-columns: 33.3% 33.3% 33.3%;
	align-items: center;
	align-content: center;
}

.stat-block h3 {
	grid-column: 1/3;
}

button.titleConfig {
	padding: 0;
	margin: 0;
	width: 20px;
}

button.titleConfig::after {
	content: "\2699";
}

.stat-block .slotpick {
	text-align: center;
}

.stat-block .stat {
	margin: 4px;
	margin-left: 10%;
	margin-right: 10%;
}

.stat strong {
	float: left;
}

.stat span {
	float: right;
}
</style>
