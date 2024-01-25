import { Location } from "kolmafia";
import { ASC_IOTM, ZONE_DATA } from "../../lib";
import { $familiar } from "libram";

export default {
    familiar: (loc: Location) => { ZONE_DATA.get(loc)?.dropChance && $familiar`Jill-of-All-Trades`; }
} as ASC_IOTM;