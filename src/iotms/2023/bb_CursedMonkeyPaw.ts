import { Location, Monster } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { $effect, $item, $location, $monsters, get, have } from "libram";

const monstersToBanish = new Map<Location, Monster[]>([
    [$location`The Defiled Niche`, $monsters`basic lihc, senile lihc, slick lihc`]
]);

const needPaw = (loc: Location, monsters: Monster[]): boolean => {
    const banishedMonsters = get('banishedMonsters');
    const isBanished = Boolean(monsters.find((monster) => banishedMonsters.includes(`cursed monkey paw:${monster}`)));
    if (loc === $location`The Hidden Temple` && have($effect`Stone-Faced`)) return false;
    return isBanished;
};

export default {
    equip: (loc: Location) => {
        if (get('_monkeyPawWishesUsed') === 0) {
            const monsters = monstersToBanish.get(loc);
            if (monsters && needPaw(loc, monsters)) return [$item`cursed monkey's paw`];
        }
        return [];
    }
} as ASC_IOTM;