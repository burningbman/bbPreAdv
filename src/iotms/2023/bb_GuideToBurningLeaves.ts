import { $effect, $item, $slot, have } from "libram";
import { ASC_IOTM } from "../../lib";
import { equip, equippedItem, itemAmount, use, visitUrl } from "kolmafia";

export default {
    warnings: () => {
        return itemAmount($item`inflammable leaf`) > 74 ? ['have enough leaves for canopy bed'] : undefined;
    },
    execute: () => {
        itemAmount($item`tiny rake`) === 0 && visitUrl('campground.php?preaction=leaves');
        equippedItem($slot`Familiar`) === $item`none` && equip($item`tiny rake`);
        !have($effect`Resined`) && itemAmount($item`inflammable leaf`) >= 50 && use($item`distilled resin`);
    }
} as ASC_IOTM;