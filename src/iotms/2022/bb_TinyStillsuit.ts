import { familiarEquippedEquipment, myPath, myTurncount, numericModifier, toPath } from "kolmafia";
import { ASC_IOTM } from "../../lib";
import { $familiar, $item, get, questStep } from "libram";

export default {
    errors: () => {
        const errors = [];

        // Stillsuit on cubeling until Shadow Waters obtained
        // Switch to Slimeling until Protestors are killed
        if (!((familiarEquippedEquipment($familiar`Gelatinous Cubeling`) === $item`tiny stillsuit` && get('questRufus') !== 'finished') ||
            (familiarEquippedEquipment($familiar`Slimeling`) === $item`tiny stillsuit` && questStep('questL11Ron') < 2) ||
            (myPath() === toPath('WereProfessor') && myTurncount() < 65) ||
            numericModifier('familiar experience') > 3)
        ) {
            errors.push('Stillsuit not on cubeling or slimeling');
        }
        return errors;
    }
} as ASC_IOTM;