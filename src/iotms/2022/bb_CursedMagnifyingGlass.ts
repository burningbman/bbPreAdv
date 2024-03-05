import { Location, haveEquipped, myLevel } from "kolmafia";
import { ASC_IOTM, ZONE_DATA } from "../../lib";
import { $item, get } from "libram";

export default {
    warnings: (loc: Location) => {
        if (get('_voidFreeFights') < 5) {
            if (!haveEquipped($item`cursed magnifying glass`) && myLevel() >= 11) {
                const zone = ZONE_DATA.get(loc);
                if (!zone?.nc && !zone?.dropChance) {
                    return ['Should equip cursed magnifying glass'];
                }
            }

            if (haveEquipped($item`cursed magnifying glass`) && get('cursedMagnifyingGlassCount') === 13) {
                return ['Free void fight next turn'];
            }
        }

        return undefined;
    }
} as ASC_IOTM;