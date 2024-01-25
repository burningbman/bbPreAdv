import { Location, haveEquipped, myMaxmp, myMp, useSkill } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { $item, $location, $skill, get } from "libram";

const hippyOutfitLocations: Map<Location, boolean> = new Map([
    [$location`Hippy Camp`, true],
    [$location`The Battlefield (Frat Uniform)`, true]
]);

export default {
    errors: (loc: Location) => {
        if (!haveEquipped($item`designer sweatpants`) && !hippyOutfitLocations.get(loc)) {
            return ['Equip sweatpants'];
        }
        return undefined;
    },
    execute: () => {
        if (get('sweat') > Math.min(18, 25 * (3 - get('_sweatOutSomeBoozeUsed'))) && myMaxmp() - 50 > myMp() && myMp() < 200) {
            useSkill($skill`Sip Some Sweat`);
        }
    }
} as ASC_IOTM;