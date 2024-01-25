import { get } from "libram";
import { ASC_IOTM } from "../../lib";

export default {
    warnings: () => {
        if (get('_monsterHabitatsFightsLeft') === 1) {
            return ['Last recall habitat fight upcoming'];
        }
        return undefined;
    }
} as ASC_IOTM;