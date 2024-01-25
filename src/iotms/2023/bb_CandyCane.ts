import { $effect, $item, have } from "libram";
import { ASC_IOTM } from "../../lib";
import { haveEquipped } from "kolmafia";

export default {
    equip: () => {
        return !have($effect`Peppermint Rush`) && !haveEquipped($item`candy cane sword cane`) ? [$item`candy cane sword cane`] : [];
    }
} as ASC_IOTM;