import { get } from "libram";
import { ASC_IOTM } from "../../lib";

export default {
    warnings: () => get("trainsetPosition") - get("lastTrainsetConfiguration") >= 42 ? ['Re-configure train set'] : []
} as ASC_IOTM;