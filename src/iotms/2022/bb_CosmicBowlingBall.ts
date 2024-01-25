import { ASC_IOTM } from "../../lib";
import { get } from "libram";

export default {
    warnings: () => {
        return get('cosmicBowlingBallReturnCombats') <= 1 ? ['Bowling ball available next combat (CLEESH + banish?)'] : [];
    }
} as ASC_IOTM;