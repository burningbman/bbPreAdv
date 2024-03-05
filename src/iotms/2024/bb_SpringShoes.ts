import { Location, getLocationMonsters, haveEquipped, myLevel, myPath, toItem, toMonster, toPath } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { $effect, $phylum, have } from "libram";

const SHOES = toItem('spring shoes');

export default {
    warnings: (loc: Location) => {
        const warnings: string[] = [];
        if (haveEquipped(SHOES)) {
            myLevel() < 12 && Object.keys(getLocationMonsters(loc)).find((name) => toMonster(name).phylum === $phylum`Plant`) && warnings.push('Use Growth Spurt against plants');
            myPath() !== toPath('WereProfessor') && !have($effect`Everything Looks Green`) && warnings.push('Use Spring Away');
        }
        return warnings;
    },
    equip: () => {
        return !haveEquipped(SHOES) && !have($effect`Everything Looks Green`) && myPath() !== toPath('WereProfessor') ? [SHOES] : [];
    }
} as ASC_IOTM;