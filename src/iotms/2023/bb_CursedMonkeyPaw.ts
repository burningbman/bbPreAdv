import { Location, getLocationMonsters } from "kolmafia";
import { ASC_IOTM, ZONE_DATA } from "../../lib";
import { $effect, $item, $location, get, have } from "libram";

const needPaw = (loc: Location): boolean => {
    const data = ZONE_DATA.get(loc);
    const banishedMonsters = get('banishedMonsters');
    const monsters = Object.keys(getLocationMonsters(loc)).filter((name) => name !== data?.targetMonster?.name);
    const isBanished = Boolean(monsters.find((monster) => banishedMonsters.includes(`cursed monkey paw:${monster}`)));
    if (loc === $location`The Hidden Temple` && have($effect`Stone-Faced`)) return false;
    return isBanished;
};

export default {
    equip: (loc: Location) => {
        if (get('_monkeyPawWishesUsed') === 0) {
            const data = ZONE_DATA.get(loc);
            if (data && data.targetMonster && needPaw(loc)) return [$item`cursed monkey's paw`];
        }
        return [];
    }
} as ASC_IOTM;