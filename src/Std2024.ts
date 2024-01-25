import { Familiar, abort, canAdventure, getLocationMonsters, haveEquipped, myDaycount, myFamiliar, myLocation, numericModifier, print, toEffect, toFamiliar, toMonster, userConfirm } from "kolmafia";
import bb_AutumnAton from "./iotms/2022/bb_AutumnAton";
import bb_CosmicBowlingBall from "./iotms/2022/bb_CosmicBowlingBall";
import bb_GreyGoose from "./iotms/2022/bb_GreyGoose";
import bb_JuneCleaver from "./iotms/2022/bb_JuneCleaver";
import bb_Mayday from "./iotms/2022/bb_Mayday";
import bb_ModelTrainSet from "./iotms/2022/bb_ModelTrainSet";
import bb_TinyStillsuit from "./iotms/2022/bb_TinyStillsuit";
import bb_2002Catalog from "./iotms/2023/bb_2002Catalog";
import bb_CandyCane from "./iotms/2023/bb_CandyCane";
import bb_ClosedCircuitPhoneSystem from "./iotms/2023/bb_ClosedCircuitPhoneSystem";
import bb_CursedMonkeyPaw from "./iotms/2023/bb_CursedMonkeyPaw";
import bb_JillOfAllTrades from "./iotms/2023/bb_JillOfAllTrades";
import bb_PatrioticEagle from "./iotms/2023/bb_PatrioticEagle";
import bb_SITCourseCertificate from "./iotms/2023/bb_SITCourseCertificate";
import { ASC_IOTM } from "./lib";
import { $effect, $familiar, $item, $location, $phylum, get, have } from "libram";
import bb_BookOfFacts from "./iotms/2023/bb_BookOfFacts";
import bb_CookBookBat from "./iotms/2022/bb_CookBookBat";
import bb_CursedMagnifyingGlass from "./iotms/2022/bb_CursedMagnifyingGlass";
import bb_DesignerSweatpants from "./iotms/2022/bb_DesignerSweatpants";
import bb_RockGardenGuide from "./iotms/2023/bb_RockGardenGuide";

const iotm2022 = [bb_AutumnAton, bb_CookBookBat, bb_CosmicBowlingBall, bb_CursedMagnifyingGlass, bb_DesignerSweatpants, bb_GreyGoose, bb_JuneCleaver, bb_Mayday, bb_ModelTrainSet, bb_TinyStillsuit];
const iotm2023 = [bb_2002Catalog, bb_BookOfFacts, bb_CandyCane, bb_ClosedCircuitPhoneSystem, bb_CursedMonkeyPaw, bb_JillOfAllTrades, bb_PatrioticEagle, bb_RockGardenGuide, bb_SITCourseCertificate];

const iotms = [...iotm2022, ...iotm2023];
const location = myLocation();

function checkCookbookbat(): boolean {
    let use = false;
    if (myDaycount() === 1 &&
        // check Pete's rich ricotta for initiaitive
        (get('cyrptAlcoveEvilness') > 13) && !have($item`St. Sneaky Pete's Whey`, 2) && !have($item`Pete's rich ricotta`) && !have($effect`Rippin' Ricotta`) &&
        // check focaccia and additional veggie of Jarlsberg for drops before liana are cleared
        (!canAdventure($location`The Hidden Bowling Alley`) && (!have($item`Boris's bread`, 2) && !have($item`Vegetable of Jarlsberg`, 4)) && (!have($item`roasted vegetable focaccia`) && !have($item`roasted vegetable of Jarlsberg`)) && (!have($effect`Feeling Fancy`) && !have($effect`Wizard Sight`)))) {
        use = true;
    }
    return use;
}

function getFamiliar(): string[] {
    const ret: string[] = [];
    const fams: Familiar[] = [];
    const myFam = myFamiliar();

    if (numericModifier('familiar experience') > 10) {
        return [];
    }

    iotms.forEach((iotm: ASC_IOTM) => {
        if (iotm.familiar) {
            const fam = iotm.familiar(location);
            fam && fams.push(fam);
        }
    });

    if (fams.length) {
        if (fams.length > 1) {
            ret.push(`Multiple fams required: ${fams.join(',')}`);
        } else if (myFam !== fams[0]) {
            ret.push(`${fams[0]} required`);
        }
    } else {
        let suggestedFam: Familiar | undefined = undefined;
        if (get('cubelingProgress') < 9) {
            suggestedFam = $familiar`Gelatinous Cubeling`;
        } else if (checkCookbookbat()) {
            suggestedFam = $familiar`Cookbookbat`;
        } else if (get('_mapToACandyRichBlockDrops') === 0) {
            suggestedFam = $familiar`Jill-of-All-Trades`;
        }
        // check if the zone has dudes if we don't have an LED candle
        else if (!get('ledCandleDropped')) {
            if (Object.keys(getLocationMonsters(location)).find((name: string) => {
                return toMonster(name).phylum === $phylum`Dude`;
            })) {
                suggestedFam = $familiar`Jill-of-All-Trades`;
            }
        } else if (get('screechCombats') !== 0) {
            suggestedFam = $familiar`Patriotic Eagle`;
        } else {
            suggestedFam = toFamiliar('Chest Mimic');
        }

        if (suggestedFam) {
            if (suggestedFam !== myFam) {
                ret.push(`${suggestedFam} is the suggested familiar`);
            }
        } else {
            //TODO validate not adventuring with one-use fams
        }
    }
    return ret;
}

function getErrors(): string[] {
    const errors: string[] = [];
    [...iotms, {
        errors: (): string[] => {
            const errors: string[] = [];
            switch (location) {
                case $location`The Hidden Apartment Building`:
                    // Ensure Thrice-Cursed and NC Forced
                    if (get('hiddenApartmentProgress') < 7 && !get('noncombatForcerActive') &&
                        (!have($effect`Thrice-Cursed`) || !(have($effect`Twice-Cursed`) && haveEquipped($item`candy cane sword cane`)))) {
                        errors.push(`Force NC and get 3 curse (or 2 curse + candy cane sword cane)`);
                    }
                    break;
                case $location`The Black Forest`:
                    // Ensure blackberry galoshes if available
                    if (have($item`blackberry galoshes`) && !haveEquipped($item`blackberry galoshes`)) {
                        errors.push('Equip blackberry galoshes');
                    }
            }
            return errors;
        }
    }].forEach((iotm: ASC_IOTM) => {
        if (iotm.errors && iotm.errors(location)) {
            errors.push(...iotm.errors(location));
        }
    });
    return errors;
}

function getWarnings(): string[] {
    const warnings: string[] = [];
    [...iotms, {
        warnings: (): string[] => {
            const warnings: string[] = [];
            if (!have(toEffect(`Everything Looks Green`))) {
                if (have($item`green smoke bomb`) || have($item`tattered scrap of paper`)) {
                    warnings.push(`${(have($item`green smoke bomb`) ? 'green smoke bomb' : 'tattered scrap')} free run ready`);
                }
            }
            !have($effect`Everything Looks Yellow`) && warnings.push('YR available');

            return warnings;
        }
    }].forEach((iotm: ASC_IOTM) => {
        if (iotm.warnings && iotm.warnings(location)) {
            warnings.push(...iotm.warnings(location));
        }
    });
    return warnings;
}

function getEquipment(): string[] {
    const ret: string[] = [];

    iotms.forEach((iotm) => {
        const equip = iotm.equip && iotm.equip(location);
        equip && equip.forEach((item) => { !haveEquipped(item) && ret.push(`Equip ${item}`); });
    });

    return ret;
}

export default function main(/*args: string*/) {
    const messageArray: string[] = [];

    iotms.forEach((iotm) => { iotm.execute && iotm.execute(); });

    messageArray.push(...getErrors());
    messageArray.push(...getWarnings());
    messageArray.push(...getFamiliar());
    messageArray.push(...getEquipment());

    if (messageArray.length && !userConfirm(messageArray.join('\n') + '\n\nProceed anyway?')) {
        messageArray.forEach((msg) => { print(msg, 'red'); });
        print();
        abort();
    }
}