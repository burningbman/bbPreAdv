import { ASC_IOTM } from "../../lib";
import { Location, myFamiliar } from "kolmafia";
import { $familiar, $item, $location, get, have } from "libram";

export default {
    warnings: () => {
        const warnings = [];
        const gooseWeight = Math.floor(Math.sqrt($familiar`Grey Goose`.experience));
        if (myFamiliar() === $familiar`Grey Goose` && gooseWeight > 5) {
            warnings.push(`${gooseWeight - 5} drones ready to deploy`);
        }
        if (get('gooseDronesRemaining') >= 7 && !(have($item`star`) || have($item`Richard's star key`))) {
            warnings.push('Have enough drones for camel toe');
        }
        return warnings;
    },
    familiar: (loc: Location) => {
        return loc === $location`The Hidden Bowling Alley` ? $familiar`Grey Goose` : undefined;
    }
} as ASC_IOTM;