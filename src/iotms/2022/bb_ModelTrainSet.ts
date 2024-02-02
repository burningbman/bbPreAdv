import { get } from "libram";
import { ASC_IOTM } from "../../lib";
import { myLevel } from "kolmafia";

export default {
    warnings: () => {
        const warnings = [];
        if (get("trainsetPosition") - get("lastTrainsetConfiguration") >= 42 &&
            myLevel() < 15 && get('chasmBridgeProgress') < 30) {
            warnings.push('Re-configure train set');
        }
        return warnings;
    }
} as ASC_IOTM;