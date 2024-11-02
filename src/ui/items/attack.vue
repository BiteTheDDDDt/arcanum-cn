<script>
import Dot from '@/ui/items/dot-info.vue';
import InfoBlock from '@/ui/items/info-block.vue';
import DamageMixin from '@/ui/items/damageMixin.js';
import game from '@/game';
import Summon from '@/ui/items/summon.vue';
import HealingMixin from '@/ui/items/healingMixin.js';

export default {

	props: ['item', 'atk', 'target', 'ondeathflag', 'onexpireflag','onsummonflag'],
	name: 'attack',
	mixins: [DamageMixin(), HealingMixin()],
	components: {
		dot: Dot,
		info: InfoBlock,
		Summon
	},
	methods:
	{
		calcAffected(condition, strict, all, afflicted, targetstr = "", conditiontext = null) {
			// Strict Targeting
			targetstr += ", " + (strict ? "only targeting " : "prioritizing ");

			// Affected / Non-affected targeting
			targetstr += "those " + (!afflicted ? "not " : "") + "affected by ";

			if (condition.length > 1) {
				// Any / All targeting
				if (!all !== !afflicted) targetstr += "any of ";
				else if (all) targetstr += "all of ";
				else targetstr += "at least one of ";
			}

			// Targets
			if(conditiontext)
			{
				targetstr += conditiontext
			}
			else targetstr += condition.filter(target => target).map(target => (game.getData(target)?.name || target === this.attack.id && this.attack.name || target).toTitleCase()).join(", ");

			return targetstr;
		},
		tagNames(t) {
			if (Array.isArray(t)) return t.map(this.tagNames, this);
			if (typeof t === 'string' && t.substring(0, 2) === 't_') return t.slice(2).toTitleCase();
			return t.toTitleCase();
		},
	},
	computed: {

		attack() {
			if (this.ondeathflag) return this.item.onDeath;
			if (this.onexpireflag) return this.item.onExpire;
			if (this.onsummonflag) return this.item.onSummon;
			return this.atk || this.item.attack;
		},
		damage() {
			return this.getDamage(this.attack);
		},
		healing() {
			return this.getHealing(this.attack);
		},
		hitBonus() {
			return this.attack.tohit || 0;
		},
		leech() {
			return this.attack.leech*100 + "%";
		},
		bonus() {

			let bonus = this.attack.bonus;
			if (!bonus || bonus.valueOf() == 0) return 0;

			if (bonus > 0) return ' (+' + bonus + ')';
			else return ' (' + bonus + ')';

		},
		itemtype() {
			return this.item.type?.toString() || "untyped";
		},
		cureeffects() {
			let curestring = ""
			for (let o of this.attack.cure) {
				if (curestring != "") curestring = curestring.concat(", ");
				curestring = curestring.concat(game.getData(o)?.name.toTitleCase() || o.toTitleCase());
			}

			return curestring
		},
		calcTarget() {
			let targetstring = this.attack.targetstring || this.target || "enemy"
			targetstring = targetstring.toTitleCase();
			if (this.attack.targetspec) {
				let targetspec = this.attack.targetspec
				if (targetspec.affectedby) targetstring = this.calcAffected(targetspec.affectedby.condition, targetspec.affectedby.strict, targetspec.affectedby.all, true, targetstring, targetspec.affectedby.conditiontext);
				if (targetspec.notaffectedby) targetstring = this.calcAffected(targetspec.notaffectedby.condition, targetspec.notaffectedby.strict, targetspec.notaffectedby.all, false, targetstring, targetspec.notaffectedby.conditiontext);

				if (targetspec.stat) {
					let targetstat = game.getData(targetspec.stat).name.toTitleCase()
					targetstring += " with " + (targetspec.highest ? "highest " : "lowest ") + targetstat + (targetspec.usepercentage ? " percentage" : "")
				}
			}
			return targetstring
		},
		shortTarget() {
			let targetstring = this.attack.targetstring || this.target || "enemy"
			targetstring = targetstring.toTitleCase();
			return targetstring
		},	
		potency() {
			let potencystring = ""
			for (let a of this.attack.potencies) {
				if (potencystring != "") potencystring = potencystring.concat(", ");
				potencystring = potencystring.concat(game.state.getData(a).name.replace(" damage", "").toTitleCase())
			}
			return potencystring
		},
		only() {
			let onlystring = ""
			//			let onlyArr = this.attack.only.split(',');
			for (let o of this.attack.only) {
				if (onlystring != "") onlystring = onlystring.concat(", ");
				o = game.state.tagSets[o] || o
				if (o instanceof Object && o.name) {
					onlystring = onlystring.concat(o.name.toTitleCase());
				} else {
					onlystring = onlystring.concat(this.tagNames(o));
				}
				
			}
			return onlystring
		}

	}

}
</script>

<template>
	<div class="attack">

		<div v-if="Array.isArray(attack)">
			<div v-for="(attackunit, idx) in attack" :key="'atk-' + idx">
				<div v-if="idx !== 0" class="info-sect"></div>
				<attack :item="item" :atk="attackunit" />
			</div>
		</div>
		<div v-else>
			<div
				v-if="damage && itemtype !== 'armor' || attack.hits || attack.dot || attack.result || attack.acquire || attack.summon || attack.healing || attack.cure">
				<div v-if="attack.name && attack.name !== item.name"><span>Name:
					</span><span>{{ attack.name.toString().toTitleCase() }}</span></div>

				<div v-if="damage">
					<div v-if="hitBonus">Hit Bonus: {{ hitBonus }}</div>
					<div class="damage">Estimated damage: {{ damage }}<span v-if="bonus">{{ bonus }}</span></div>
					<div v-if="attack.leech">Returns {{ leech }} of damage as healing</div>
					<div v-if="attack.repeathits">Repeats: {{ attack.repeathits }} times</div>
					<div v-if="attack.potencies">Damage scaling: {{ potency }}</div>
					<div v-if="attack.kind">Kind: {{ attack.kind.toString().toTitleCase() }}</div>
					<div v-if="attack.nodefense">Ignores defense</div>
				</div>

				<div v-if="healing">
					<div class="damage">Estimated healing: {{ healing }}<span v-if="bonus">{{ bonus }}</span></div>
					<div v-if="attack.potencies">Heal scaling: {{ potency }}</div>
					<div v-if="attack.kind">Kind: {{ attack.kind.toString().toTitleCase() }}</div>
				</div>
				<div v-if="attack.noparry">Cannot be parried</div>
				<div v-if="attack.nododge">Cannot be dodged</div>
				<div v-if="attack.harmless">Cannot be dodged or parried</div>
				<div v-if="attack.cure">Cures: {{ cureeffects }}</div>
				<div v-if="attack.targets||attack.targetspec">Targets: {{ calcTarget }}</div>
				<div v-if="attack.only">Only Affects: {{ only }}</div>
				<div v-if="attack.summon">
					<div class="info-sect">Summons:</div>
					<summon :item="item" :smn="attack.summon" class="info-subsubsect" />
				</div>
				<div v-if="attack.result" class="info-sect">Results:</div>
				<info v-if="attack.result" :info="attack.result" :target="shortTarget" />
				<div v-if="attack.acquire" class="info-sect">Produces:</div>
				<info v-if="attack.acquire" :info="attack.acquire" :target="shortTarget" />
			</div>

			<div v-if="attack.hits">
				<div v-for="(hit, idx) in attack.hits" :key="'hit-' + idx">
					<div class="info-sect">Attack hit</div>
					<attack :item="item" :atk="hit" class="info-subsubsect" />
				</div>
			</div>

			<div v-if="attack.dot">
				<div class="info-sect">Applies</div>
				<dot :dot="attack.dot" :item="attack" :target="attack.targetstring || this.target || 'enemy'"
					class="info-subsubsect" />
			</div>
		</div>
	</div>
</template>
