import { abort, print, userConfirm } from "kolmafia";
import Std2024 from "./paths/Std2024";

export default function (path: Std2024) {
    const messageArray: string[] = [];

    path.iotms.forEach((iotm) => { iotm.execute && iotm.execute(); });

    messageArray.push(...path.getErrors());
    messageArray.push(...path.getWarnings());
    messageArray.push(...path.getFamiliar());
    messageArray.push(...path.getEquipment());

    if (messageArray.length && !userConfirm(messageArray.join('\n') + '\n\nProceed anyway?')) {
        messageArray.forEach((msg) => { print(msg, 'red'); });
        print();
        abort();
    }
}