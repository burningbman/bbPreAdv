import { Location, haveEffect, use } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { $effect, $item, $location, have } from "libram";

export default {
    errors: (loc: Location) => {
        const errors = [];
        if (loc === $location`The Arid, Extra-Dry Desert` && have($item`MayDay™ supply package`)) {
            errors.push('Use your supply package.');
        }
    },
    warnings: (loc: Location) => {
        const warnings: string[] = [];
        if (loc === $location`The Arid, Extra-Dry Desert` && haveEffect($effect`Ultrahydrated`) === 1 && have($item`bar of freeze-dried water`)) {
            warnings.push('Can use bar of freeze-dried water for Ultrahydrated');
        }
        return warnings;
    },
    equip: (loc: Location) => {
        return have($item`survival knife`) && loc === $location`The Arid, Extra-Dry Desert` ? [$item`survival knife`] : [];
    },
    execute: () => {
        have($item`spare battery`) && use($item`spare battery`); // might as well get MP regen use
    }
} as ASC_IOTM;