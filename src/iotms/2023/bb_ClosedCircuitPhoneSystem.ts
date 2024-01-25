import { Location } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { have, $effect } from "libram";

export default {
    errors: (loc: Location) => loc.zone === 'Shadow Rift' && !have($effect`Shadow Affinity`) ? ['Call Rufus'] : []
} as ASC_IOTM;