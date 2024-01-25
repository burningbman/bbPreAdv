import { Location, totalTurnsPlayed } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { $item, $location, get } from "libram";

export default {
    warnings: () => {
        const warnings = [];
        if (get('spookyVHSTapeMonsterTurn') === totalTurnsPlayed() + 1) {
            warnings.push('Spooky VHS monster next turn');
        }
        return warnings;
    },
    equip: (loc: Location) => {
        const items = [];
        loc.zone === 'Orchard' && items.push($item`Flash Liquidizer Ultra Dousing Accessory`);
        loc === $location`The Hidden Bowling Alley` && items.push($item`pro skateboard`);
        return items;
    }
} as ASC_IOTM;