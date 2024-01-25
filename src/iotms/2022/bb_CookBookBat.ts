import { Location, use } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { $familiar, $item, $location, have } from "libram";

export default {
    familiar: (loc: Location) => {
        // use CBB when getting blackberries
        if (loc === $location`The Black Forest` && loc.turnsSpent === 4) {
            return $familiar`Cookbookbat`;
        }
        return undefined;
    },
    execute: () => {
        have($item`autumn years wisdom`) && use($item`autumn years wisdom`);
    }
} as ASC_IOTM;