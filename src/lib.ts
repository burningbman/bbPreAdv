import { Familiar, Item, Location, Monster, Phylum, myInebriety, numericModifier, toItem } from "kolmafia";
import { $effect, $familiar, $item, $location, $monster, $phylum, get, have } from "libram";


export const map_to_candy_rich_block = toItem('map to a candy-rich block');

export function getDefaultFamiliar(): Familiar {
    let suggestedFam;
    if (get('screechCombats') > 0) {
        suggestedFam = $familiar`Patriotic Eagle`;
    } else if (!have($item`short glass of water`) && !(get('_mapToACandyRichBlockUsed'))) {
        suggestedFam = $familiar`Shorter-Order Cook`;
    } else if (!have(map_to_candy_rich_block)) {
        suggestedFam = $familiar`Jill-of-All-Trades`;
    } else if (get('cubelingProgress') < 9) {
        suggestedFam = $familiar`Gelatinous Cubeling`;
    } else {
        suggestedFam = $familiar`Grey Goose`;
    }

    return suggestedFam;
}

export interface ASC_IOTM {
    warnings?: (loc: Location) => string[]
    errors?: (loc: Location) => string[]
    equip?: (loc: Location) => Item[]
    familiar?: (loc: Location) => Familiar | undefined,
    execute?: () => void
}



export const ML = '.8 ml';

export interface Zone {
    fam?: Familiar,
    maximizer?: string[],
    confirmText?: string,
    forceEquip?: Item[],
    targetMonster?: Monster,
    phlyumToBan?: Phylum,
    preventEquip?: Item[],
    nc?: boolean,
    dropChance?: number,
    foodDrop?: boolean,
    boozeDrop?: boolean,
    com?: boolean,
    rwbTarget?: Monster
}

export const FRIAR_ZONE_DATA: Zone = {
    nc: true
};

export const OVERGROWN_SHRINE_DATA: Zone = {
    forceEquip: [$item`antique machete`]
};

export const NC_ONLY: Zone = {
    nc: true
};

export const FILTHWORM_ZONE: Zone = {
    forceEquip: [$item`Flash Liquidizer Ultra Dousing Accessory`]
};

const RIFT_ZONE: Zone = {
    targetMonster: $monster`shadow slab`,
    forceEquip: get('_fireExtinguisherCharge') > 20 ? [$item`industrial fire extinguisher`] : undefined,
    dropChance: 10
};

export const shipTurns = $location`The Penultimate Fantasy Airship`.turnsSpent;

export const ZONE_DATA = new Map<Location, Zone>([
    [$location`The Haunted Kitchen`, {
        phlyumToBan: $phylum`Undead`
    }],
    [$location`Guano Junction`, {
        dropChance: 15
    }],
    [$location`The Beanbat Chamber`, {
        targetMonster: $monster`beanbat`
    }],
    [$location`The Black Forest`, {
        forceEquip: [$item`blackberry galoshes`],
        com: true,
        fam: have($item`reassembled blackbird`) ? (have(toItem('LED Candle')) ? undefined : $familiar`Jill-of-All-Trades`) : $familiar`Reassembled Blackbird`,
        rwbTarget: $monster`black friar`
    }],
    [$location`The Spooky Forest`, {
        nc: $location`The Spooky Forest`.turnsSpent > 5
    }],
    [$location`The Defiled Niche`, {
        targetMonster: $monster`dirty old lihc`,
        phlyumToBan: $phylum`Undead`
    }],
    [$location`The Daily Dungeon`, {
        forceEquip: [$item`ring of Detect Boring Doors`]
    }],
    [$location`The Defiled Alcove`, {
        nc: get('cyrptAlcoveEvilness') > 13,
        confirmText: !have($effect`Ready to Survive`) ? 'Use mayday package' : undefined
    }],
    [$location`The Dark Heart of the Woods`, FRIAR_ZONE_DATA],
    [$location`The Dark Neck of the Woods`, FRIAR_ZONE_DATA],
    [$location`The Dark Elbow of the Woods`, FRIAR_ZONE_DATA],
    [$location`The Batrat and Ratbat Burrow`, {
        dropChance: 15
    }],
    [$location`The Boss Bat's Lair`, {
        targetMonster: $monster`Boss Bat`,
        preventEquip: $location`The Boss Bat's Lair`.turnsSpent > 5 ? [$item`miniature crystal ball`] : undefined
    }],
    [$location`The Hidden Temple`, {
        fam: get('_citizenZone') !== 'The Hidden Temple' && !have($effect`Stone-Faced`) ? $familiar`Patriotic Eagle` : undefined,
        confirmText: (get('_citizenZone') !== 'The Hidden Temple') ? 'Pledge allegiance to the zone' : undefined,
        targetMonster: !have($effect`Stone-Faced`) ? $monster`baa-relief sheep` : undefined,
        dropChance: !have($effect`Stone-Faced`) ? 25 : undefined,
        forceEquip: !have($effect`Stone-Faced`) ? [$item`cursed monkey's paw`] : undefined
    }],
    [$location`The Haunted Billiards Room`, {
        nc: numericModifier('pool skill') + myInebriety() >= 8,
        com: numericModifier('pool skill') + myInebriety() < 8
    }],
    [$location`The Haunted Library`, {
        dropChance: 10,
        targetMonster: $monster`writing desk`,
        phlyumToBan: $phylum`undead`,
        forceEquip: get('banishedMonsters').includes('bookbat') ? undefined : [$item`cursed monkey's paw`]
    }],
    [$location`The Smut Orc Logging Camp`, {
        dropChance: 10
    }],
    [$location`The Goatlet`, {
        targetMonster: $monster`dairy goat`,
        dropChance: 40,
        foodDrop: true,
        forceEquip: [$item`cursed monkey's paw`],
        fam: $familiar`Grey Goose`
    }],
    [$location`The Outskirts of Cobb's Knob`, {
        com: true,
        fam: (get('beGregariousMonster') === $monster`red butler` && !get('banishedPhyla').includes($phylum`Goblin`.toString())) ? $familiar`Patriotic Eagle` : undefined
    }],
    [$location`An Overgrown Shrine (Southeast)`, OVERGROWN_SHRINE_DATA],
    [$location`An Overgrown Shrine (Southwest)`, OVERGROWN_SHRINE_DATA],
    [$location`An Overgrown Shrine (Northeast)`, OVERGROWN_SHRINE_DATA],
    [$location`An Overgrown Shrine (Northwest)`, OVERGROWN_SHRINE_DATA],
    [$location`The Hidden Park`, NC_ONLY],
    [$location`Hippy Camp`, {
        forceEquip: [$item`distressed denim pants`, $item`bejeweled pledge pin`, $item`beer helmet`],
    }],
    [$location`Wartime Hippy Camp`, {
        forceEquip: [$item`distressed denim pants`, $item`bejeweled pledge pin`, $item`beer helmet`],
        nc: true
    }],
    [$location`Vanya's Castle`, {
        forceEquip: get('lastCopyableMonster') === $monster`ninja snowman assassin` && !have($item`ninja carabiner`) ? [$item`continuum transfunctioner`, $item`backup camera`] : [$item`continuum transfunctioner`]
    }],
    [$location`Megalo-City`, {
        forceEquip: [$item`continuum transfunctioner`]
    }],
    [$location`Lair of the Ninja Snowmen`, {
        com: true
    }],
    [$location`The Penultimate Fantasy Airship`, {
        com: shipTurns < 5 || (shipTurns < 10 && have($item`Tissue Paper Immateria`)) || (shipTurns < 15 && have($item`Tin Foil Immateria`)) || (shipTurns < 20 && have($item`Gauze Immateria`)) || (shipTurns < 25 && have($item`Plastic Wrap Immateria`)),
        targetMonster: have($item`Mohawk wig`) && have($item`amulet of extreme plot significance`) && (have($item`titanium assault umbrella`) || have($item`unbreakable umbrella`)) ? $monster`Quiet Healer` : undefined,
        nc: !(shipTurns < 5 || (shipTurns < 10 && have($item`Tissue Paper Immateria`)) || (shipTurns < 15 && have($item`Tin Foil Immateria`)) || (shipTurns < 20 && have($item`Gauze Immateria`)) || (shipTurns < 25 && have($item`Plastic Wrap Immateria`))),
        dropChance: 10
    }],
    [$location`Oil Peak`, {
        maximizer: [ML],
        dropChance: 30
    }],
    [$location`The Hidden Park`, {
        confirmText: get('noncombatForcerActive') ? undefined : 'Force non combat?'
    }],
    [$location`The Hidden Bowling Alley`, {
        dropChance: 40,
        targetMonster: $monster`pygmy bowler`
    }],
    [$location`The Hidden Apartment Building`, {
        targetMonster: $monster`pygmy shaman`
    }],
    [$location`The Hidden Office Building`, {
        targetMonster: $monster`pygmy witch accountant`
    }],
    [$location`The Hidden Hospital`, {
        targetMonster: $monster`pygmy witch surgeon`,
        rwbTarget: $monster`pygmy witch surgeon`
    }],
    [$location`The Haunted Bedroom`, {
        targetMonster: $monster`elegant animated nightstand`
    }],
    [$location`The Haunted Bathroom`, { nc: $location`The Haunted Bathroom`.turnsSpent > 5 }],
    [$location`The Haunted Gallery`, { nc: $location`The Haunted Gallery`.turnsSpent > 5 }],
    [$location`The Haunted Ballroom`, { nc: $location`The Haunted Ballroom`.turnsSpent > 5 }],
    [$location`Next to that Barrel with Something Burning in it`, {
        targetMonster: $monster`batwinged gremlin`,
        confirmText: have($item`seal tooth`) ? undefined : 'Get a seal tooth to stasis.'
    }],
    [$location`Near an Abandoned Refrigerator`, {
        targetMonster: $monster`spider gremlin`,
        confirmText: have($item`seal tooth`) ? undefined : 'Get a seal tooth to stasis.'
    }],
    [$location`Out by that Rusted-Out Car`, {
        targetMonster: $monster`vegetable gremlin`,
        confirmText: have($item`seal tooth`) ? undefined : 'Get a seal tooth to stasis.'
    }],
    [$location`Over Where the Old Tires Are`, {
        targetMonster: $monster`erudite gremlin`,
        confirmText: have($item`seal tooth`) ? undefined : 'Get a seal tooth to stasis.'
    }],
    [$location`The Castle in the Clouds in the Sky (Basement)`, NC_ONLY],
    [$location`The Castle in the Clouds in the Sky (Ground Floor)`, {
        nc: !have($item`electric boning knife`),
        com: have($item`electric boning knife`)
    }],
    [$location`The Castle in the Clouds in the Sky (Top Floor)`, {
        nc: get('questL10Garbage') === 'step9',
        forceEquip: get('questL10Garbage') === 'step9' ? [$item`Mohawk wig`] : []
    }],
    [$location`The Arid, Extra-Dry Desert`, {
        forceEquip: get('banishedMonsters').includes('cactuary') ? [$item`survival knife`, $item`UV-resistant compass`] : [$item`survival knife`, $item`cursed monkey's paw`, $item`UV-resistant compass`],
        confirmText: 'Pickpocket the monster',
        phlyumToBan: $phylum`Bug`
    }],
    [$location`The Battlefield (Frat Uniform)`, {
        dropChance: (get('hippiesDefeated') > 400) ? 5 : undefined,
        phlyumToBan: get('hippiesDefeated') >= 400 ? $phylum`Hippy` : undefined
    }],
    [$location`The Hatching Chamber`, FILTHWORM_ZONE],
    [$location`The Feeding Chamber`, FILTHWORM_ZONE],
    [$location`The Royal Guard Chamber`, FILTHWORM_ZONE],
    [$location`The Filthworm Queen's Chamber`, {
        phlyumToBan: $phylum`Bug`
    }],
    [$location`Shadow Rift (The Misspelled Cemetary)`, RIFT_ZONE],
    [$location`Shadow Rift (The Hidden City)`, RIFT_ZONE],
    [$location`Shadow Rift (The Ancient Buried Pyramid)`, RIFT_ZONE],
    [$location`The Haunted Laundry Room`, {
        dropChance: 15,
        foodDrop: true,
        targetMonster: $monster`cabinet of Dr. Limpieza`,
        rwbTarget: $monster`cabinet of Dr. Limpieza`
    }],
    [$location`The Haunted Wine Cellar`, {
        dropChance: 15,
        boozeDrop: true,
        targetMonster: $monster`possessed wine rack`,
        rwbTarget: $monster`possessed wine rack`
    }],
    [$location`The Haunted Boiler Room`, {
        maximizer: [ML],
        targetMonster: $monster`monstrous boiler`,
        forceEquip: [$item`unstable fulminate`]
    }],
    [$location`The Defiled Nook`, {
        targetMonster: $monster`spiny skelelton`,
        dropChance: 20
    }],
    [$location`A-Boo Peak`, {
        dropChance: 15
    }],
    [$location`The Themthar Hills`, {
        fam: $familiar`Hobo Monkey`,
        forceEquip: [$item`distressed denim pants`, $item`bejeweled pledge pin`, $item`beer helmet`]
    }],
    [$location`The Fungus Plains`, {
        forceEquip: [$item`continuum transfunctioner`]
    }],
    [$location`The Red Zeppelin`, {
        targetMonster: $monster`red butler`,
        phlyumToBan: $phylum`Dude`,
        dropChance: 30
    }],
    [$location`The Enormous Greater-Than Sign`, NC_ONLY],
    [$location`The Dungeons of Doom`, NC_ONLY],
    [$location`The Defiled Cranny`, {
        maximizer: [ML],
        nc: get('cyrptCrannyEvilness') > 37
    }],
    [$location`The Typical Tavern Cellar`, {
        maximizer: [ML],
        nc: true
    }],
    [$location`Inside the Palindome`, {
        nc: !(have($item`photograph of God`) && have($item`photograph of an ostrich egg`) && have($item`photograph of a red nugget`)),
        targetMonster: $monster`Bob Racecar`,
        forceEquip: [$item`Talisman o' Namsilat`],
        phlyumToBan: $phylum`Beast`
    }],
    [$location`Twin Peak`, {
        dropChance: 15,
        nc: true,
        phlyumToBan: $phylum`Dude`
    }],
    [$location`The Upper Chamber`, {
        nc: true // TODO: reconsider this if we can get enough ratchets and have smoke bombs
    }],
    [$location`The Middle Chamber`, {
        dropChance: 20,
        targetMonster: $monster`tomb rat`,
        rwbTarget: $monster`tomb rat`
    }],
    [$location`Cobb's Knob Harem`, {
        targetMonster: $monster`Knob Goblin Harem Girl`
    }],
    [$location`A Mob of Zeppelin Protesters`, {
        maximizer: ['sleaze dmg', 'sleaze spell dmg']
    }]
]);