import { $item, $location, have } from "libram";
import { ASC_IOTM } from "../../lib";
import { canAdventure, use } from "kolmafia";

export default {
    execute: () => {
        have($item`whet stone`) && use($item`whet stone`);
        canAdventure($location`The Arid, Extra-Dry Desert`) && have($item`milestone`) && use($item`milestone`);
    }
} as ASC_IOTM;