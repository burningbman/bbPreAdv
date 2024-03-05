import { Location, haveEquipped, myInebriety, myMaxmp, myMp, useSkill } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { $item, $location, $skill, get } from "libram";

const hippyOutfitLocations: Map<Location, boolean> = new Map([
    [$location`Hippy Camp`, true],
    [$location`The Battlefield (Frat Uniform)`, true],
    [$location`The Themthar Hills`, true]
]);

export default {
    errors: (loc: Location) => {
        if (!haveEquipped($item`designer sweatpants`) && !hippyOutfitLocations.get(loc)) {
            return ['Equip sweatpants'];
        }
        return undefined;
    },
    execute: () => {
        if (get('_sweatOutSomeBoozeUsed') < 3 && get('sweat') === 100 && myInebriety() > 0) {
            useSkill($skill`Sweat Out Some Booze`);
        }
        if (get('sweat') > Math.max(20, 25 * (3 - get('_sweatOutSomeBoozeUsed'))) && myMaxmp() - 50 > myMp() && myMp() < myMaxmp() / 3) {
            useSkill($skill`Sip Some Sweat`);
        }
    }
} as ASC_IOTM;