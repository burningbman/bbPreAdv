import { $item, AutumnAton, get } from "libram";
import { ASC_IOTM } from "../../lib";
import { itemAmount, myLevel } from "kolmafia";

export default {
    warnings: () => {
        const warnings = [];
        if (AutumnAton.available() && myLevel() >= 4 &&
            (itemAmount($item`rusty hedge trimmers`) < 4 && get('twinPeakProgress') !== 15) &&
            get('cyrptNookEvilness') > 13) {
            warnings.push('Fallbot ready for dispatch');
        }
        return warnings;
    }
} as ASC_IOTM;