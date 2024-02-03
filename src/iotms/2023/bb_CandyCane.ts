import { $effect, $item, $location, get, have } from "libram";
import { ASC_IOTM } from "../../lib";
import { Location, haveEquipped } from "kolmafia";

export default {
    warnings: () => {
        const warnings = [];
        !have($effect`Peppermint Rush`) && !haveEquipped($item`candy cane sword cane`) && warnings.push('Equip candy cane and use combat skill');
        return warnings;
    },
    equip: (loc: Location) => {
        if (loc === $location`The Daily Dungeon` && !get('candyCaneSwordDailyDungeon') ||
            loc === $location`The Black Forest` && $location`The Black Forest`.turnsSpent % 5 === 4 && !get('candyCaneSwordBlackForest') ||
            loc === $location`The Shore, Inc. Travel Agency` && !get('candyCaneSwordShore') ||
            loc === $location`Hippy Camp` && !(get('candyCaneSwordWarHippyBait') || get('candyCaneSwordWarHippyLine')) ||
            loc === $location`The Penultimate Fantasy Airship` && !have($item`metallic A`) ||
            loc === $location`A Mob of Zeppelin Protesters` ||
            loc === $location`The Hidden Bowling Alley` && have($item`bowling ball`) && !get('candyCaneSwordBowlingAlley')
        ) {
            return [$item`candy cane sword cane`];
        }
        return undefined;
    }
} as ASC_IOTM;