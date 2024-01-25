import { get } from "libram";
import { ASC_IOTM } from "../../lib";

export default {
    errors: () => get('_sitCourseCompleted') ? [] : ['Complete the SIT course']
} as ASC_IOTM;