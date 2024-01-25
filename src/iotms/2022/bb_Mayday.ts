import { Location, daycount, use } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { $item, $location, have } from "libram";

export default {
    errors: (loc: Location) => {
        const errors = [];
        if (loc === $location`The Arid, Extra-Dry Desert` && have($item`MayDay™ supply package`)) {
            errors.push('Use your supply package.');
        }
    },
    equip: (loc: Location) => {
        return have($item`survival knife`) && loc === $location`The Arid, Extra-Dry Desert` ? [$item`survival knife`] : [];
    },
    execute: () => {
        have($item`spare battery`) && use($item`spare battery`); // might as well get MP regen use
        have($item`MayDay™ supply package`) && daycount() > 1 && use($item`MayDay™ supply package`); // just crack it when desert is done
    }
} as ASC_IOTM;