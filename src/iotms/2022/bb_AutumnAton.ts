import { $location, AutumnAton } from "libram";
import { ASC_IOTM } from "../../lib";
import { Location, myLevel } from "kolmafia";

export default {
    errors: (loc: Location) => {
        return loc === $location`The Hidden Temple` && !AutumnAton.currentUpgrades().includes('leftarm1') ? ['Wait for fallbot to explore the temple.'] : [];
    },
    warnings: () => AutumnAton.available() && myLevel() >= 4 ? ['Fallbot ready for dispatch'] : []
} as ASC_IOTM;