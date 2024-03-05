import { Location } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { $familiar, $location } from "libram";

export default {
    familiar: (loc: Location) => {
        // use CBB when getting blackberries
        if (loc === $location`The Black Forest` && loc.turnsSpent === 4) {
            return $familiar`Cookbookbat`;
        }
        return undefined;
    }
} as ASC_IOTM;