import { $skill, get } from "libram";
import { ASC_IOTM } from "../../lib";
import { useSkill } from "kolmafia";

export default {
    execute: () => {
        !get('_aug24Cast') && useSkill($skill`Aug. 24th: Waffle Day!`);
    }
} as ASC_IOTM;