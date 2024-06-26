import { $effect, $item, have } from "libram";
import { ASC_IOTM } from "../../lib";
import { haveEquipped } from "kolmafia";

export default {
    warnings: () => {
        const warnings = [];
        if (!have($effect`Everything Looks Yellow`)) {
            if (!haveEquipped($item`Jurassic Parka`)) {
                warnings.push('Parka not equipped if going for YR');
            }
            else {
                warnings.push('Is your parka on acid mode?');
            }
        }
        return warnings;
    }
} as ASC_IOTM;