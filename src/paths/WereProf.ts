import { familiarEquippedEquipment, haveEquipped, myDaycount, myFamiliar, myLevel, myTurncount, toEffect, toItem } from "kolmafia";
import bb_AutumnAton from "../iotms/2022/bb_AutumnAton";
import bb_CookBookBat from "../iotms/2022/bb_CookBookBat";
import bb_CursedMagnifyingGlass from "../iotms/2022/bb_CursedMagnifyingGlass";
import bb_DesignerSweatpants from "../iotms/2022/bb_DesignerSweatpants";
import bb_GreyGoose from "../iotms/2022/bb_GreyGoose";
import bb_JuneCleaver from "../iotms/2022/bb_JuneCleaver";
import bb_Mayday from "../iotms/2022/bb_Mayday";
import bb_TinyStillsuit from "../iotms/2022/bb_TinyStillsuit";
import bb_2002Catalog from "../iotms/2023/bb_2002Catalog";
import bb_AugustScepter from "../iotms/2023/bb_AugustScepter";
import bb_CandyCane from "../iotms/2023/bb_CandyCane";
import bb_ClosedCircuitPhoneSystem from "../iotms/2023/bb_ClosedCircuitPhoneSystem";
import bb_CursedMonkeyPaw from "../iotms/2023/bb_CursedMonkeyPaw";
import bb_JillOfAllTrades from "../iotms/2023/bb_JillOfAllTrades";
import bb_PatrioticEagle from "../iotms/2023/bb_PatrioticEagle";
import bb_SITCourseCertificate from "../iotms/2023/bb_SITCourseCertificate";
import bb_SpringShoes from "../iotms/2024/bb_SpringShoes";
import Std2024 from "./Std2024";
import { $effect, $familiar, $item, $location, get, getModifier, have } from "libram";

const iotm2022 = [bb_AutumnAton, bb_CookBookBat, bb_CursedMagnifyingGlass, bb_DesignerSweatpants, bb_GreyGoose, bb_JuneCleaver, bb_Mayday, bb_TinyStillsuit];
const iotm2023 = [bb_2002Catalog, bb_AugustScepter, bb_CandyCane, bb_ClosedCircuitPhoneSystem, bb_CursedMonkeyPaw, bb_JillOfAllTrades, bb_PatrioticEagle, bb_SITCourseCertificate];
const iotm2024 = [bb_SpringShoes];

export default class WereProf extends Std2024 {
    iotms = [...iotm2022, ...iotm2023, ...iotm2024];
    getCookbookbatItems(): { [key: string]: number; } {
        let whey = 0, yeast = 0, veggie = 0;
        if (myDaycount() === 1) {
            //ricotta (init)
            whey = get('cyrptAlcoveEvilness') > 13 && !have($item`Pete's rich ricotta`) && !have($effect`Rippin' Ricotta`) ? 2 : 0;
            // focaccia (fam exp)
            yeast = get('_eldritchTentacleFought') ? 0 : 2;
            // focaccia (fam exp)
            veggie = get('_eldritchTentacleFought') ? 0 : 2;
            // roasted veggie (item)
            veggie += $location`Hero's Field`.turnsSpent === 0 ? 2 : 0;
            // plain calzone (ml)
            if (!(have($item`plain calzone`) || have($effect`Angering Pizza Purists`) || myLevel() >= 11)) {
                whey += 2;
                yeast += 2;
            }
        } else if (myDaycount() === 2) {
            // focaccia and roasted veggie (fam exp, item)
            veggie = 4;
            // focaccia and bread (fam exp, meat)
            yeast = 4;
            // ricotta
            yeast = 2;
        }
        return {
            // rich ricotta and plain calzone (init, ml)
            [$item`St. Sneaky Pete's Whey`.name]: whey,
            // focaccia and roasted veggie (fam exp, item drop)
            [$item`Vegetable of Jarlsberg`.name]: veggie,
            // focaccia and plain calzone (ml, fam exp)
            [$item`Yeast of Boris`.name]: yeast
        };
    }
    getWarnings(): string[] {
        const warnings: string[] = [];

        if (!have($effect`Everything Looks Red`)) {
            warnings.push(`Dart freekill (unless hunting soon). Darts are${!haveEquipped(toItem('Everfull Dart Holster')) ? ' NOT' : ''} equipped`);
        }

        if (myDaycount() === 1) {
            if (myTurncount() < 65) {
                if (familiarEquippedEquipment(myFamiliar()) !== $item`tiny stillsuit`) {
                    warnings.push('Tiny stillsuit not on current familiar');
                }
                if (get('familiarSweat') >= 43) {
                    warnings.push('5 adv stillsuit drink available');
                }
            } else {
                if ($location`Megalo-City`.turnsSpent < 5) {
                    familiarEquippedEquipment($familiar`Gelatinous Cubeling`) !== $item`tiny stillsuit` && warnings.push('Cubeling stillsuit (brick farming)');
                } else {
                    familiarEquippedEquipment($familiar`Slimeling`) !== $item`tiny stillsuit` && warnings.push('Slimeling stillsuit (zep mob)');
                }
            }
        }

        return [...warnings, ...super.getWarnings()];
    }
    getErrors(): string[] {
        const errors = have(toEffect('Mild-Mannered')) && getModifier('Monster Level') > 24 ? ['Too much ML'] : [];
        return [...errors, ...super.getErrors()];
    }

    getMimicExpNeeded(): number {
        return myDaycount() === 1 ? 700 : 850;
    }

    getMimicExpUsed(): number {
        let exp = 0;
        const day1Cost = [100, 50, 50, 50, 50, 50, 50, 100, 100, 50, 50];
        const day2Cost = [100, 100, 100, 100, 100, 50, 100, 50, 50, 50, 50];

        for (let i = 0; i < get('_mimicEggsObtained', 0); i++) {
            exp += myDaycount() === 1 ? day1Cost[i] : day2Cost[i];
        }

        return exp;
    }


}