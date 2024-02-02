import { Location } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { have, $effect, $item, get } from "libram";

export default {
    warnings: (loc: Location) => {
        const warnings = [];
        loc.zone !== 'Shadow Rift' && have($effect`Shadow Affinity`) && warnings.push('Don\'t spend turns outside of Shadow Rift');
        have($item`shadow brick`) && get('_shadowBricksUsed') < 11 && warnings.push('Use your shadow bricks');
        return warnings;
    },
    errors: (loc: Location) => loc.zone === 'Shadow Rift' && !have($effect`Shadow Affinity`) ? ['Call Rufus'] : []
} as ASC_IOTM;