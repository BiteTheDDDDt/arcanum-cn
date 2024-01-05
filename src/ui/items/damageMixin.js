import game from '../../game';
import { precise } from '../../util/format';
import { applyParams, FP, TYP_FUNC } from '../../values/consts';
import Char from '../../chars/char';
import { RollOver } from '../popups/itemPopup.vue';
import Range from '../../values/range';

export default function DamageMixin(itemProp="item") {
    return {
        methods: {
            getDamage(it) {
                let dmg = it.damage || it.dmg;
                return this.getDamageStr(dmg, it);
                
            },
            getDamageStr(dmg, it) {
                let mult = this.getDamageMult(it);
                let bonus = this.getDamageBonus(it);
                if (it.showinstanced)
                {
                    mult = 1
                    bonus = 0
                }
                if(!dmg) return null;
                else if(typeof dmg === 'number') return dmg*mult+bonus;

                if ( dmg && dmg.type === TYP_FUNC) {
                    dmg = dmg.fn;
                }
                if ( dmg instanceof Function ) {
                    let params = {
                        [FP.GAME]: game.gdata, 
                        [FP.TARGET]: game.state.player, 
                        [FP.ACTOR]: RollOver.item instanceof Char ? RollOver.item : RollOver.source instanceof Char ? RollOver.source : game.state.player,
                        [FP.CONTEXT]: game.state.player.context,
                        [FP.ITEM]: this[itemProp]
                    };
                    return precise(applyParams(dmg, params)*mult+bonus);
                }
                if ( dmg ) {
                    let dmgdisp
                    if(dmg instanceof Range)
                    {
                        dmgdisp = dmg.instantiate();
                        dmgdisp.add(bonus)
                        dmgdisp.multiply(mult)
                    }
                    else {
                        dmgdisp = dmg*mult+bonus;
                    }
                    return dmgdisp.toString()
                    //return dmgdisp.toString(this[itemProp]);
                }
                console.warn("Failed damage parse", dmg);
                return null;
            },
            displayDamage(it) {
                if(!it) return false;

                let dmg = it.damage || it.dmg;
                return dmg != null && (dmg instanceof Function || dmg?.type === TYP_FUNC || this.getDamageStr(dmg, it)); 
            },
            getDamageMult(it) {
                let PotencyMult = 1
                let Actor
                if(RollOver.item instanceof Char||RollOver.item.type == "monster")
                {
                    Actor = RollOver.item
                }
                else if(RollOver.source instanceof Char)
                {
                    Actor = RollOver.source
                }
                else Actor = game.state.player;
                if (Actor.context && it.potencies && Actor.id =="player")
                {
                    for (let p of it.potencies)
                    {	
                        let potency = Actor.context.state.getData(p)
                        if(potency){
                            PotencyMult = PotencyMult * potency.damage.fn( Actor, game.state.player, game.state.player.context, potency )
                        }
                    }
                }
                return PotencyMult
            },
            getDamageBonus(it) {
                let DamageBonus = 0
                let Actor
                if(RollOver.item instanceof Char||RollOver.item.type == "monster")
                {
                    Actor = RollOver.item
                }
                else if(RollOver.source instanceof Char)
                {
                    Actor = RollOver.source
                }
                else Actor = game.state.player;
                if ( Actor && Actor.getBonus ) DamageBonus += Actor.getBonus( it.kind );
	            if ( it.bonus ) DamageBonus += it.bonus;
                return DamageBonus
            }
        }
    }
}