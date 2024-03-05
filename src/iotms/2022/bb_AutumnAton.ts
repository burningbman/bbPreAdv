import { $item, $location, AutumnAton, get } from "libram";
import { ASC_IOTM } from "../../lib";
import { canAdventure, itemAmount, myLevel } from "kolmafia";

export default {
    warnings: () => {
        const warnings = [];
        if (AutumnAton.available() && myLevel() >= 4 &&
            !(get('_autumnatonQuests') == 2 && !canAdventure($location`The Hidden Temple`)) &&
            (itemAmount($item`rusty hedge trimmers`) < 4 && get('twinPeakProgress') !== 15) &&
            get('cyrptNookEvilness') > 13) {
            warnings.push('Fallbot ready for dispatch');
        }
        return warnings;
    }
} as ASC_IOTM;