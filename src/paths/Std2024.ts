import { Familiar, Item, combatRateModifier, currentMcd, getLocationMonsters, getWorkshed, haveEquipped, itemAmount, myDaycount, myFamiliar, myLevel, myLocation, myPath, numericModifier, toEffect, toFamiliar, toItem, toMonster, toPath } from "kolmafia";
import bb_AutumnAton from "../iotms/2022/bb_AutumnAton";
import bb_CosmicBowlingBall from "../iotms/2022/bb_CosmicBowlingBall";
import bb_GreyGoose from "../iotms/2022/bb_GreyGoose";
import bb_JuneCleaver from "../iotms/2022/bb_JuneCleaver";
import bb_Mayday from "../iotms/2022/bb_Mayday";
import bb_ModelTrainSet from "../iotms/2022/bb_ModelTrainSet";
import bb_TinyStillsuit from "../iotms/2022/bb_TinyStillsuit";
import bb_2002Catalog from "../iotms/2023/bb_2002Catalog";
import bb_CandyCane from "../iotms/2023/bb_CandyCane";
import bb_ClosedCircuitPhoneSystem from "../iotms/2023/bb_ClosedCircuitPhoneSystem";
import bb_CursedMonkeyPaw from "../iotms/2023/bb_CursedMonkeyPaw";
import bb_JillOfAllTrades from "../iotms/2023/bb_JillOfAllTrades";
import bb_PatrioticEagle from "../iotms/2023/bb_PatrioticEagle";
import bb_SITCourseCertificate from "../iotms/2023/bb_SITCourseCertificate";
import { ASC_IOTM, ZONE_DATA } from "../lib";
import { $effect, $familiar, $item, $location, $locations, $phylum, get, have } from "libram";
import bb_BookOfFacts from "../iotms/2023/bb_BookOfFacts";
import bb_CookBookBat from "../iotms/2022/bb_CookBookBat";
import bb_CursedMagnifyingGlass from "../iotms/2022/bb_CursedMagnifyingGlass";
import bb_DesignerSweatpants from "../iotms/2022/bb_DesignerSweatpants";
import bb_RockGardenGuide from "../iotms/2023/bb_RockGardenGuide";
import bb_SpringShoes from "../iotms/2024/bb_SpringShoes";
import bb_AugustScepter from "../iotms/2023/bb_AugustScepter";
import bb_GuideToBurningLeaves from "../iotms/2023/bb_GuideToBurningLeaves";

const iotm2022 = [bb_AutumnAton, bb_CookBookBat, bb_CosmicBowlingBall, bb_CursedMagnifyingGlass, bb_DesignerSweatpants, bb_GreyGoose, bb_JuneCleaver, bb_Mayday, bb_ModelTrainSet, bb_TinyStillsuit];
const iotm2023 = [bb_2002Catalog, bb_AugustScepter, bb_BookOfFacts, bb_CandyCane, bb_ClosedCircuitPhoneSystem, bb_CursedMonkeyPaw, bb_GuideToBurningLeaves, bb_JillOfAllTrades, bb_PatrioticEagle, bb_RockGardenGuide, bb_SITCourseCertificate];
const iotm2024 = [bb_SpringShoes];

export default class {
    iotms = [...iotm2022, ...iotm2023, ...iotm2024];
    location = myLocation();

    getCookbookbatItems(): { [key: string]: number } {
        let neededItems: { [key: string]: number } = {};
        if (myDaycount() === 1) {
            neededItems = {
                // rich ricotta (init)
                [$item`St. Sneaky Pete's Whey`.name]: get('cyrptAlcoveEvilness') > 13 && !have($item`Pete's rich ricotta`) && !have($effect`Rippin' Ricotta`) ? 2 : 0,
                // focaccia and roasted veggie (fam exp, item drop)
                [$item`Vegetable of Jarlsberg`.name]: get('questRufus') === 'unstarted' ? 4 : 0,
                // focaccia (fam exp)
                [$item`Yeast of Boris`.name]: get('questRufus') === 'unstarted' ? 2 : 0
            };
        } else if (myDaycount() === 2) {
            neededItems = {
                // focaccia and plain calzone (fam exp, ML)
                [$item`Vegetable of Jarlsberg`.name]: 2,
                // focaccia and bread (fam exp, meat)
                [$item`Yeast of Boris`.name]: 4,
                // plain calzone (ML)
                [$item`St. Sneaky Pete's Whey`.name]: 2
            };
        }
        return neededItems;
    }

    checkCookbookbat(): boolean {
        let use = false;
        const neededItems = this.getCookbookbatItems();

        if (have($item`roasted vegetable focaccia`) || have($effect`Feeling Fancy`)) {
            neededItems[$item`Vegetable of Jarlsberg`.name] -= 2;
            neededItems[$item`Yeast of Boris`.name] -= 1;
        }

        if (have($item`roasted vegetable of Jarlsberg`) || have($effect`Wizard Sight`)) {
            neededItems[$item`Vegetable of Jarlsberg`.name] -= 2;
        }

        if (have($item`Boris's bread`) || have($effect`Inspired Chef`)) {
            neededItems[$item`Yeast of Boris`.name] -= 2;
        }

        use = Boolean(Object.entries(neededItems).find(([name, amt]) => itemAmount(toItem(name)) < amt));

        return use;
    }

    getMimicExpNeeded(): number {
        return 1100;
    }

    getMimicExpUsed(): number {
        return get('_mimicEggsObtained', 0) * 100;
    }

    getFamiliar(): string[] {
        const ret: string[] = [];
        const fams: Familiar[] = [];
        const myFam = myFamiliar();

        if (numericModifier('familiar experience') > 10) {
            return [];
        }

        this.iotms.forEach((iotm: ASC_IOTM) => {
            if (iotm.familiar) {
                const fam = iotm.familiar(this.location);
                fam && fams.push(fam);
            }
        });

        if (this.location === $location`The Black Forest` && !have($item`reassembled blackbird`)) {
            fams.push($familiar`Reassembled Blackbird`);
        }

        if (fams.length) {
            if (fams.length > 1) {
                ret.push(`Multiple fams required: ${fams.join(',')}`);
            } else if (myFam !== fams[0]) {
                ret.push(`${fams[0]} required`);
            }
        } else if (numericModifier('item drop') < 500 && numericModifier('meat drop') < 1000) {
            let suggestedFam: Familiar | undefined = undefined;
            if (get('cubelingProgress') < 9) {
                suggestedFam = $familiar`Gelatinous Cubeling`;
            }
            // check if the zone has dudes if we don't have an LED candle
            else if (!get('ledCandleDropped')) {
                if (Object.keys(getLocationMonsters(this.location)).find((name: string) => {
                    return toMonster(name).phylum === $phylum`Dude`;
                })) {
                    suggestedFam = $familiar`Jill-of-All-Trades`;
                }
            } else if (this.checkCookbookbat()) {
                suggestedFam = $familiar`Cookbookbat`;
            } else if (get('_mapToACandyRichBlockDrops') === 0) {
                suggestedFam = $familiar`Jill-of-All-Trades`;
            } else if (get('screechCombats') !== 0) {
                suggestedFam = $familiar`Patriotic Eagle`;
            } else if (this.getMimicExpNeeded() > toFamiliar('Chest Mimic').experience + this.getMimicExpUsed()) {
                suggestedFam = toFamiliar('Chest Mimic');
            } else {
                suggestedFam = $familiar`Cookbookbat`;
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

    getErrors(): string[] {
        const errors: string[] = [];
        [...this.iotms, {
            errors: (): string[] => {
                const errors: string[] = [];
                switch (this.location) {
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
                        break;
                    case $location`The Battlefield (Frat Uniform)`:
                        if (get('sidequestArenaCompleted') !== 'fratboy' || get('sidequestJunkyardCompleted') !== 'fratboy' || get('sidequestLighthouseCompleted') !== 'fratboy') {
                            errors.push('Finish lighthouse, arena, and junkyard first');
                        }
                        if (get('hippiesDefeated') >= 64 && get('sidequestOrchardCompleted') !== 'fratboy') {
                            errors.push('Finish orchard');
                        }
                        if (get('hippiesDefeated') >= 192 && get('sidequestNunsCompleted') !== 'fratboy') {
                            errors.push('Finish nuns');
                        }

                }
                if (getWorkshed() === $item`none` && myPath() !== toPath('WereProfessor')) {
                    errors.push('No workshed is set');
                }
                return errors;
            }
        }].forEach((iotm: ASC_IOTM) => {
            if (iotm.errors && iotm.errors(this.location)) {
                errors.push(...iotm.errors(this.location));
            }
        });
        return errors;
    }

    getWarnings(): string[] {
        const warnings: string[] = [];
        [...this.iotms, {
            warnings: (): string[] => {
                const warnings: string[] = [];
                if (!have(toEffect(`Everything Looks Green`))) {
                    if (have($item`green smoke bomb`) || have($item`tattered scrap of paper`)) {
                        warnings.push(`${(have($item`green smoke bomb`) ? 'green smoke bomb' : 'tattered scrap')} free run ready`);
                    }
                }

                !have($effect`Everything Looks Yellow`) && warnings.push('YR available');
                currentMcd() < 10 && myLevel() < 15 && getWorkshed() === $item`model train set` && !have(toEffect('Mild-Mannered Professor')) && warnings.push('MCD not at highest level');
                !$locations`Vanya's Castle, Megalo-City, Hero's Field, The Fungus Plains`.includes(this.location) && haveEquipped($item`continuum transfunctioner`) && warnings.push('Unequip continuum transfunctioner');
                this.location !== $location`The Daily Dungeon` && haveEquipped($item`ring of Detect Boring Doors`) && warnings.push('remove ring of detect boring doors');
                myDaycount() === 1 && have($item`earthenware muffin tin`) && warnings.push('order muffin');

                const zoneData = ZONE_DATA.get(this.location);
                zoneData?.nc && combatRateModifier() > -25 && !get('noncombatForcerActive') && warnings.push('Reduce combat rate');
                zoneData?.com && combatRateModifier() < 10 && warnings.push('Increase combat rate');

                get('noncombatForcerActive') && warnings.push('Forcing non combat');

                if (myLevel() >= 10 && myDaycount() === 1 && !have($item`futuristic hat`) ||
                    myLevel() >= 15 && myDaycount() > 2 && !have($item`futuristic hat`)) {
                    warnings.push('Use your wardrobe-o-matic');
                }

                switch (this.location) {
                    case $location`The Battlefield (Frat Uniform)`:
                        if (400 < get('hippiesDefeated') && get('hippiesDefeated') < 464) {
                            warnings.push('GROPS now available on the battlefield.');
                        }
                }

                return warnings;
            }
        }].forEach((iotm: ASC_IOTM) => {
            if (iotm.warnings && iotm.warnings(this.location)) {
                warnings.push(...iotm.warnings(this.location));
            }
        });
        return warnings;
    }

    getEquipment(): string[] {
        const ret: string[] = [];
        const equipment: Item[] = [];

        this.iotms.forEach((iotm) => {
            const equip = iotm.equip && iotm.equip(this.location);
            equip && equipment.push(...equip);
        });

        equipment.forEach((item) => { !haveEquipped(item) && ret.push(`Equip ${item}`); });

        return ret;
    }
}
