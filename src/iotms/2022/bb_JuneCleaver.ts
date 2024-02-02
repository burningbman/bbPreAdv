import { Location, haveEquipped } from "kolmafia";
import { $effect, $item, $location, have } from "libram";
import { ASC_IOTM } from "../../lib";

const IGNORE_LOCATIONS = new Map<Location, boolean>([
    [$location`An Overgrown Shrine (Northeast)`, true],
    [$location`An Overgrown Shrine (Southeast)`, true],
    [$location`An Overgrown Shrine (Northwest)`, true],
    [$location`An Overgrown Shrine (Southwest)`, true],
]);

export default {
    warnings: (loc: Location) => {
        if (!haveEquipped($item`June cleaver`) &&
            have($effect`Peppermint Rush`) &&
            !(have($item`survival knife`) && loc === $location`The Arid, Extra-Dry Desert`) &&
            !IGNORE_LOCATIONS.get(loc)) {
            return ['Equip June cleaver?'];
        }
        return [];
    }
} as ASC_IOTM;