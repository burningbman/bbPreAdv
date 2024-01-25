import { Location, haveEquipped } from "kolmafia";
import { $effect, $item, have } from "libram";
import { ASC_IOTM, ZONE_DATA } from "../../lib";

export default {
    warnings: (loc: Location) => {
        if (!ZONE_DATA.get(loc)?.dropChance && !haveEquipped($item`June cleaver`) && have($effect`Peppermint Rush`)) {
            return ['Equip June cleaver?'];
        }
        return [];
    }
} as ASC_IOTM;