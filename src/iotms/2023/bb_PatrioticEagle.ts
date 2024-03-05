import { Location, Monster, Phylum, haveEffect } from "kolmafia";
import { get, have, $effect, $familiar, $location, $monster, $phylum } from "libram";
import { ASC_IOTM, ZONE_DATA } from "../../lib";

const rwbTargetByLocation = new Map<Location, Monster>([
    [$location`The Defiled Niche`, $monster`dirty old lihc`],
    [$location`The Haunted Laundry Room`, $monster`cabinet of Dr. Limpieza`],
    [$location`The Hidden Hospital`, $monster`pygmy witch surgeon`],
    [$location`The Haunted Wine Cellar`, $monster`possessed wine rack`],
    [$location`The Middle Chamber`, $monster`tomb rat`]
]);

const phyla = new Map<Location, Phylum>([
    [$location`The Outskirts of Cobb's Knob`, $phylum`Goblin`],
    [$location`The Arid, Extra-Dry Desert`, $phylum`Bug`],
    [$location`Twin Peak`, $phylum`Dude`],
    [$location`Inside the Palindome`, $phylum`Beast`]
]);

export default {
    warnings: () => {
        return haveEffect($effect`Everything Looks Red, White and Blue`) === 1 ? ['ELRWB expires next turn'] : undefined;
    },
    errors: (loc: Location) => {
        const errors = [];
        const target = rwbTargetByLocation.get(loc);
        const zoneData = ZONE_DATA.get(loc);

        if (zoneData?.targetMonster && get('banishedPhyla').includes(zoneData.targetMonster.phylum.toString())) {
            errors.push(`Looking for ${zoneData.targetMonster}, but ${get('banishedPhyla')} are currently banished.`);
        } else if (target && get('rwbMonster') !== target && have($effect`Everything Looks Red, White and Blue`)) {
            errors.push(`Supposed to RWB ${target} but still have ELRWB`);
        }

        return errors;
    },
    familiar: (loc: Location) => {
        const target = rwbTargetByLocation.get(loc);
        const phylum = phyla.get(loc);

        if (target && get('rwbMonster') !== target && !have($effect`Everything Looks Red, White and Blue`) ||
            loc === $location`The Hidden Temple` && get('_citizenZone') !== 'The Hidden Temple' && !have($effect`Stone-Faced`) ||
            loc === $location`Lair of the Ninja Snowmen` && get('_citizenZone') !== 'Lair of the Ninja Snowmen' ||
            loc === $location`The Icy Peak` && get('_citizenZone') !== 'The Icy Peak' ||
            phylum && !get('banishedPhyla').includes(phylum.toString())) {
            return $familiar`Patriotic Eagle`;
        }

        return undefined;
    }
} as ASC_IOTM;
