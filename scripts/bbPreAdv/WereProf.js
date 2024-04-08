"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = function(to, from, except, desc) {
  if (from && typeof from === "object" || typeof from === "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
      key = keys[i];
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: function(k) {
          return from[k];
        }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
  return to;
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: true }), mod);
};

// src/preAdvWereProf.ts
var preAdvWereProf_exports = {};
__export(preAdvWereProf_exports, {
  default: function() {
    return main;
  }
});
module.exports = __toCommonJS(preAdvWereProf_exports);

// src/paths/WereProf.ts
var import_kolmafia24 = require("kolmafia");

// node_modules/libram/dist/lib.js
var import_kolmafia3 = require("kolmafia");

// node_modules/libram/dist/property.js
var import_kolmafia = require("kolmafia");

// node_modules/libram/dist/propertyTypes.js
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_saladForkUsed", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_augSkillsCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"];
var monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_lastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505"];
var familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];

// node_modules/libram/dist/propertyTyping.js
var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}

// node_modules/libram/dist/property.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value = (0, import_kolmafia.getProperty)(property);
    if (default_ !== void 0 && value === "") {
      return default_;
    }
    return transform(value, property);
  };
};
var createMafiaClassPropertyGetter = function(Type, toType) {
  return createPropertyGetter(function(value) {
    if (value === "")
      return null;
    var v = toType(value);
    return v === Type.none ? null : v;
  });
};
var getString = createPropertyGetter(function(value) {
  return value;
});
var getCommaSeparated = createPropertyGetter(function(value) {
  return value.split(/, ?/);
});
var getBoolean = createPropertyGetter(function(value) {
  return value === "true";
});
var getNumber = createPropertyGetter(function(value) {
  return Number(value);
});
var getBounty = createMafiaClassPropertyGetter(import_kolmafia.Bounty, import_kolmafia.toBounty);
var getClass = createMafiaClassPropertyGetter(import_kolmafia.Class, import_kolmafia.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia.Coinmaster, import_kolmafia.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(import_kolmafia.Effect, import_kolmafia.toEffect);
var getElement = createMafiaClassPropertyGetter(import_kolmafia.Element, import_kolmafia.toElement);
var getFamiliar = createMafiaClassPropertyGetter(import_kolmafia.Familiar, import_kolmafia.toFamiliar);
var getItem = createMafiaClassPropertyGetter(import_kolmafia.Item, import_kolmafia.toItem);
var getLocation = createMafiaClassPropertyGetter(import_kolmafia.Location, import_kolmafia.toLocation);
var getMonster = createMafiaClassPropertyGetter(import_kolmafia.Monster, import_kolmafia.toMonster);
var getPhylum = createMafiaClassPropertyGetter(import_kolmafia.Phylum, import_kolmafia.toPhylum);
var getServant = createMafiaClassPropertyGetter(import_kolmafia.Servant, import_kolmafia.toServant);
var getSkill = createMafiaClassPropertyGetter(import_kolmafia.Skill, import_kolmafia.toSkill);
var getSlot = createMafiaClassPropertyGetter(import_kolmafia.Slot, import_kolmafia.toSlot);
var getStat = createMafiaClassPropertyGetter(import_kolmafia.Stat, import_kolmafia.toStat);
var getThrall = createMafiaClassPropertyGetter(import_kolmafia.Thrall, import_kolmafia.toThrall);
function get(property, _default2) {
  var value = getString(property);
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default2)) !== null && _getBoolean !== void 0 ? _getBoolean : false;
  } else if (isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default2)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default2);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default2);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default2);
  } else if (isStatProperty(property)) {
    return getStat(property, _default2);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default2);
  } else if (isStringProperty(property)) {
    return value;
  }
  if (_default2 instanceof import_kolmafia.Location) {
    return getLocation(property, _default2);
  } else if (_default2 instanceof import_kolmafia.Monster) {
    return getMonster(property, _default2);
  } else if (_default2 instanceof import_kolmafia.Familiar) {
    return getFamiliar(property, _default2);
  } else if (_default2 instanceof import_kolmafia.Stat) {
    return getStat(property, _default2);
  } else if (_default2 instanceof import_kolmafia.Phylum) {
    return getPhylum(property, _default2);
  } else if (typeof _default2 === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default2;
  } else if (typeof _default2 === "number") {
    return value === "" ? _default2 : parseInt(value);
  } else if (value === "") {
    return _default2 === void 0 ? "" : _default2;
  } else {
    return value;
  }
}
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0, import_kolmafia.setProperty)(property, stringValue);
  return value;
}
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
var PropertiesManager = /* @__PURE__ */ function() {
  function PropertiesManager2() {
    _classCallCheck(this, PropertiesManager2);
    _defineProperty(this, "properties", {});
  }
  _createClass(PropertiesManager2, [{
    key: "storedValues",
    get: function get3() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        if (!(propertyName in this.properties)) {
          this.properties[propertyName] = (0, import_kolmafia.propertyExists)(propertyName) ? get(propertyName) : PropertiesManager2.EMPTY_PREFERENCE;
        }
        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), choiceNumber = _ref6[0], choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices(_defineProperty({}, choiceToSet, value));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (!(property in this.properties))
          continue;
        var value = this.properties[property];
        if (value === PropertiesManager2.EMPTY_PREFERENCE) {
          (0, import_kolmafia.removeProperty)(property);
        } else if (value) {
          _set(property, value);
        } else {
          _set(property, "");
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      setProperties(this.properties);
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (get(property, 0) < value) {
        this.set(_defineProperty({}, property, value));
        return true;
      }
      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (get(property, 0) > value) {
        this.set(_defineProperty({}, property, value));
        return true;
      }
      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager2();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function clamp(property, min, max) {
      if (max < min)
        return false;
      var start = get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size)
        return false;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue)
          return false;
      }
      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager2();
      newGuy.properties = _objectSpread(_objectSpread({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }
      if (mergees.length === 0)
        return new PropertiesManager2();
      return mergees.reduce(function(a, b) {
        return a.merge(b);
      });
    }
  }]);
  return PropertiesManager2;
}();
_defineProperty(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));

// node_modules/libram/dist/template-string.js
var import_kolmafia2 = require("kolmafia");

// node_modules/libram/dist/utils.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function arrayContains(item2, array) {
  return array.includes(item2);
}
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = _createForOfIteratorHelper(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}
function undelay(delayedObject) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return typeof delayedObject === "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
function makeByXFunction(source) {
  return function(options) {
    var _options$val;
    var val = undelay(source);
    if ("default" in options)
      return (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default;
    return options[val];
  };
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function concatTemplateString2(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};
var handleTypeGetError = function(Type, error) {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  if (match) {
    (0, import_kolmafia2.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    (0, import_kolmafia2.print)(message);
  }
};
var createSingleConstant = function(Type) {
  var tagFunction = function tagFunction2(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia2.abort)();
  };
  tagFunction.none = Type.none;
  return tagFunction;
};
var createPluralConstant = function(Type) {
  var tagFunction = function tagFunction2(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia2.abort)();
  };
  tagFunction.all = function() {
    return Type.all();
  };
  return tagFunction;
};
var $bounty = createSingleConstant(import_kolmafia2.Bounty);
var $bounties = createPluralConstant(import_kolmafia2.Bounty);
var $class = createSingleConstant(import_kolmafia2.Class);
var $classes = createPluralConstant(import_kolmafia2.Class);
var $coinmaster = createSingleConstant(import_kolmafia2.Coinmaster);
var $coinmasters = createPluralConstant(import_kolmafia2.Coinmaster);
var $effect = createSingleConstant(import_kolmafia2.Effect);
var $effects = createPluralConstant(import_kolmafia2.Effect);
var $element = createSingleConstant(import_kolmafia2.Element);
var $elements = createPluralConstant(import_kolmafia2.Element);
var $familiar = createSingleConstant(import_kolmafia2.Familiar);
var $familiars = createPluralConstant(import_kolmafia2.Familiar);
var $item = createSingleConstant(import_kolmafia2.Item);
var $items = createPluralConstant(import_kolmafia2.Item);
var $location = createSingleConstant(import_kolmafia2.Location);
var $locations = createPluralConstant(import_kolmafia2.Location);
var $modifier = createSingleConstant(import_kolmafia2.Modifier);
var $modifiers = createPluralConstant(import_kolmafia2.Modifier);
var $monster = createSingleConstant(import_kolmafia2.Monster);
var $monsters = createPluralConstant(import_kolmafia2.Monster);
var $phylum = createSingleConstant(import_kolmafia2.Phylum);
var $phyla = createPluralConstant(import_kolmafia2.Phylum);
var $servant = createSingleConstant(import_kolmafia2.Servant);
var $servants = createPluralConstant(import_kolmafia2.Servant);
var $skill = createSingleConstant(import_kolmafia2.Skill);
var $skills = createPluralConstant(import_kolmafia2.Skill);
var $slot = createSingleConstant(import_kolmafia2.Slot);
var $slots = createPluralConstant(import_kolmafia2.Slot);
var $stat = createSingleConstant(import_kolmafia2.Stat);
var $stats = createPluralConstant(import_kolmafia2.Stat);
var $thrall = createSingleConstant(import_kolmafia2.Thrall);
var $thralls = createPluralConstant(import_kolmafia2.Thrall);
var $path = createSingleConstant(import_kolmafia2.Path);
var $paths = createPluralConstant(import_kolmafia2.Path);

// node_modules/libram/dist/lib.js
var _templateObject9;
var _templateObject10;
var _templateObject11;
var _templateObject12;
var _templateObject13;
var _templateObject14;
var _templateObject15;
var _templateObject16;
var _templateObject17;
var _templateObject18;
var _templateObject19;
var _templateObject20;
var _templateObject21;
var _templateObject22;
var _templateObject23;
var _templateObject24;
var _templateObject25;
var _templateObject26;
var _templateObject27;
var _templateObject28;
var _templateObject29;
var _templateObject30;
var _templateObject31;
var _templateObject32;
var _templateObject33;
var _templateObject34;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia3.Effect) {
    return (0, import_kolmafia3.haveEffect)(thing) >= quantity;
  }
  if (thing instanceof import_kolmafia3.Familiar) {
    return (0, import_kolmafia3.haveFamiliar)(thing);
  }
  if (thing instanceof import_kolmafia3.Item) {
    return (0, import_kolmafia3.availableAmount)(thing) >= quantity;
  }
  if (thing instanceof import_kolmafia3.Servant) {
    return (0, import_kolmafia3.haveServant)(thing);
  }
  if (thing instanceof import_kolmafia3.Skill) {
    return (0, import_kolmafia3.haveSkill)(thing);
  }
  if (thing instanceof import_kolmafia3.Thrall) {
    var thrall = (0, import_kolmafia3.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2["Digitize"] = "Digitize Monster";
  Wanderer2["Enamorang"] = "Enamorang Monster";
  Wanderer2["Familiar"] = "Familiar";
  Wanderer2["Holiday"] = "Holiday Monster";
  Wanderer2["Kramco"] = "Kramco";
  Wanderer2["Nemesis"] = "Nemesis Assassin";
  Wanderer2["Portscan"] = "portscan.edu";
  Wanderer2["Romantic"] = "Romantic Monster";
  Wanderer2["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted")
    return -1;
  else if (stringStep === "started")
    return 0;
  else if (stringStep === "finished" || stringStep === "")
    return 999;
  else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }
    return parseInt(stringStep.substring(4), 10);
  }
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
var byStat = makeByXFunction(function() {
  return (0, import_kolmafia3.myPrimestat)().toString();
});
var byClass = makeByXFunction(function() {
  return (0, import_kolmafia3.myClass)().toString();
});
function directlyUse(item2) {
  return (0, import_kolmafia3.visitUrl)("inv_use.php?which=3&whichitem=".concat(item2.id, "&pwd"));
}

// node_modules/libram/dist/modifier.js
var import_kolmafia4 = require("kolmafia");

// node_modules/libram/dist/modifierTypes.js
var booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"];
var classModifiers = ["Class"];
var numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"];
var effectModifiers = ["Effect", "Rollover Effect"];
var monsterModifiers = ["Avatar"];
var skillModifiers = ["Skill"];
var statModifiers = ["Plumber Stat"];
var stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];

// node_modules/libram/dist/modifier.js
function get2(name, subject) {
  if (arrayContains(name, booleanModifiers)) {
    return subject === void 0 ? (0, import_kolmafia4.booleanModifier)(name) : (0, import_kolmafia4.booleanModifier)(subject, name);
  }
  if (arrayContains(name, classModifiers)) {
    return (0, import_kolmafia4.classModifier)(subject, name);
  }
  if (arrayContains(name, effectModifiers)) {
    return (0, import_kolmafia4.effectModifier)(subject, name);
  }
  if (arrayContains(name, monsterModifiers)) {
    return (0, import_kolmafia4.monsterModifier)(subject, name);
  }
  if (arrayContains(name, numericModifiers)) {
    return subject === void 0 ? (0, import_kolmafia4.numericModifier)(name) : (0, import_kolmafia4.numericModifier)(subject, name);
  }
  if (arrayContains(name, skillModifiers)) {
    return (0, import_kolmafia4.skillModifier)(subject, name);
  }
  if (arrayContains(name, stringModifiers)) {
    return subject === void 0 ? (0, import_kolmafia4.stringModifier)(name) : (0, import_kolmafia4.stringModifier)(subject, name);
  }
  if (arrayContains(name, statModifiers)) {
    return (0, import_kolmafia4.statModifier)(subject, name);
  }
}

// node_modules/libram/dist/resources/2022/AutumnAton.js
var AutumnAton_exports = {};
__export(AutumnAton_exports, {
  available: function() {
    return available;
  },
  availableLocations: function() {
    return availableLocations;
  },
  currentUpgrades: function() {
    return currentUpgrades;
  },
  currentlyIn: function() {
    return currentlyIn;
  },
  getUniques: function() {
    return getUniques;
  },
  have: function() {
    return have2;
  },
  legs: function() {
    return legs;
  },
  possibleUpgrades: function() {
    return possibleUpgrades;
  },
  seasonalItems: function() {
    return seasonalItems;
  },
  sendTo: function() {
    return sendTo;
  },
  turnsForQuest: function() {
    return turnsForQuest;
  },
  turnsLeft: function() {
    return turnsLeft;
  },
  upgrade: function() {
    return upgrade;
  },
  visualAcuity: function() {
    return visualAcuity;
  },
  zoneItems: function() {
    return zoneItems;
  }
});
var import_kolmafia5 = require("kolmafia");
var _templateObject;
var _templateObject2;
var _templateObject3;
var _templateObject4;
var _templateObject5;
var _templateObject6;
var _templateObject7;
var _templateObject8;
var _templateObject92;
function _taggedTemplateLiteral2(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item = import_kolmafia5.Item.get("autumn-aton");
function available() {
  return (0, import_kolmafia5.availableAmount)(item) > 0;
}
function have2() {
  return get("hasAutumnaton") || available();
}
function checkLocations(html) {
  return (0, import_kolmafia5.xpath)(html, '//select[@name="heythereprogrammer"]//option[position()>1]/text()').map(function(name) {
    return (0, import_kolmafia5.toLocation)(name);
  });
}
function currentlyIn() {
  return get("autumnatonQuestLocation");
}
function sendTo(target) {
  var upgrade2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (!available())
    return null;
  var pageHtml = directlyUse(item);
  if (upgrade2 && (0, import_kolmafia5.availableChoiceOptions)()[1])
    (0, import_kolmafia5.runChoice)(1);
  var locationsAvailable = checkLocations(pageHtml);
  var location = target instanceof import_kolmafia5.Location ? target : Array.isArray(target) ? target.find(function(l) {
    return locationsAvailable.includes(l);
  }) : target(locationsAvailable);
  if (!location)
    return null;
  if (!locationsAvailable.includes(location))
    return null;
  if (!(0, import_kolmafia5.handlingChoice)())
    directlyUse(item);
  (0, import_kolmafia5.runChoice)(2, "heythereprogrammer=".concat(location.id));
  if ((0, import_kolmafia5.handlingChoice)())
    (0, import_kolmafia5.visitUrl)("main.php");
  return location;
}
function upgrade() {
  directlyUse(item);
  var canUpgrade = (0, import_kolmafia5.availableChoiceOptions)()[1] !== void 0;
  if (canUpgrade)
    (0, import_kolmafia5.runChoice)(1);
  (0, import_kolmafia5.visitUrl)("main.php");
  return canUpgrade;
}
function availableLocations() {
  if (!available())
    return [];
  var pageHtml = directlyUse(item);
  (0, import_kolmafia5.visitUrl)("main.php");
  return checkLocations(pageHtml);
}
var possibleUpgrades = ["leftarm1", "leftleg1", "rightarm1", "rightleg1", "base_blackhat", "cowcatcher", "periscope", "radardish", "dualexhaust"];
function currentUpgrades() {
  return get("autumnatonUpgrades").split(",");
}
function turnsLeft() {
  return get("autumnatonQuestTurn") - (0, import_kolmafia5.totalTurnsPlayed)();
}
function legs() {
  return currentUpgrades().filter(function(u) {
    return u.includes("leg");
  }).length;
}
function turnsForQuest() {
  return 11 * Math.max(1, get("_autumnatonQuests") - legs());
}
function visualAcuity() {
  var visualUpgrades = ["periscope", "radardish"];
  return 1 + currentUpgrades().filter(function(u) {
    return visualUpgrades.includes(u);
  }).length;
}
function zoneItems() {
  return 3 + currentUpgrades().filter(function(u) {
    return u.includes("arm");
  }).length;
}
function seasonalItems() {
  return currentUpgrades().includes("cowcatcher") ? 2 : 1;
}
var difficulties = ["low", "mid", "high"];
var UNIQUES = {
  outdoor: {
    low: {
      index: 4,
      item: $item(_templateObject || (_templateObject = _taggedTemplateLiteral2(["autumn leaf"])))
    },
    mid: {
      index: 2,
      item: $item(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["autumn debris shield"])))
    },
    high: {
      index: 6,
      item: $item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral2(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      index: 0,
      item: $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral2(["AutumnFest ale"])))
    },
    mid: {
      index: 3,
      item: $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral2(["autumn-spice donut"])))
    },
    high: {
      index: 7,
      item: $item(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral2(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      index: 1,
      item: $item(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral2(["autumn sweater-weather sweater"])))
    },
    mid: {
      index: 5,
      item: $item(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral2(["autumn dollar"])))
    },
    high: {
      index: 8,
      item: $item(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral2(["autumn years wisdom"])))
    }
  }
};
function getUniques(location) {
  var env = location.environment;
  var difficulty = location.difficultyLevel;
  if (arrayContains(env, ["outdoor", "indoor", "underground"]) && arrayContains(difficulty, difficulties)) {
    var _UNIQUES$env$difficul = UNIQUES[env][difficulty], index = _UNIQUES$env$difficul.index, _item = _UNIQUES$env$difficul.item;
    return {
      upgrade: possibleUpgrades[index],
      item: _item
    };
  }
  return null;
}

// src/iotms/2022/bb_AutumnAton.ts
var import_kolmafia6 = require("kolmafia");
var _templateObject35;
var _templateObject210;
function _taggedTemplateLiteral3(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_AutumnAton_default = {
  warnings: function() {
    var warnings = [];
    if (AutumnAton_exports.available() && (0, import_kolmafia6.myLevel)() >= 4 && !(get("_autumnatonQuests") == 2 && !(0, import_kolmafia6.canAdventure)($location(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral3(["The Hidden Temple"]))))) && (0, import_kolmafia6.itemAmount)($item(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral3(["rusty hedge trimmers"])))) < 4 && get("twinPeakProgress") !== 15 && get("cyrptNookEvilness") > 13) {
      warnings.push("Fallbot ready for dispatch");
    }
    return warnings;
  }
};

// src/iotms/2022/bb_CookBookBat.ts
var _templateObject36;
var _templateObject211;
function _taggedTemplateLiteral4(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_CookBookBat_default = {
  familiar: function(loc) {
    if (loc === $location(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral4(["The Black Forest"]))) && loc.turnsSpent === 4) {
      return $familiar(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral4(["Cookbookbat"])));
    }
    return void 0;
  }
};

// src/iotms/2022/bb_CursedMagnifyingGlass.ts
var import_kolmafia8 = require("kolmafia");

// src/lib.ts
var import_kolmafia7 = require("kolmafia");
var _templateObject72;
var _templateObject82;
var _templateObject93;
var _templateObject102;
var _templateObject112;
var _templateObject122;
var _templateObject132;
var _templateObject142;
var _templateObject152;
var _templateObject162;
var _templateObject172;
var _templateObject182;
var _templateObject192;
var _templateObject202;
var _templateObject212;
var _templateObject222;
var _templateObject232;
var _templateObject242;
var _templateObject252;
var _templateObject262;
var _templateObject272;
var _templateObject282;
var _templateObject292;
var _templateObject302;
var _templateObject312;
var _templateObject322;
var _templateObject332;
var _templateObject342;
var _templateObject352;
var _templateObject362;
var _templateObject37;
var _templateObject38;
var _templateObject39;
var _templateObject40;
var _templateObject41;
var _templateObject42;
var _templateObject43;
var _templateObject44;
var _templateObject45;
var _templateObject46;
var _templateObject47;
var _templateObject48;
var _templateObject49;
var _templateObject50;
var _templateObject51;
var _templateObject52;
var _templateObject53;
var _templateObject54;
var _templateObject55;
var _templateObject56;
var _templateObject57;
var _templateObject58;
var _templateObject59;
var _templateObject60;
var _templateObject61;
var _templateObject62;
var _templateObject63;
var _templateObject64;
var _templateObject65;
var _templateObject66;
var _templateObject67;
var _templateObject68;
var _templateObject69;
var _templateObject70;
var _templateObject71;
var _templateObject722;
var _templateObject73;
var _templateObject74;
var _templateObject75;
var _templateObject76;
var _templateObject77;
var _templateObject78;
var _templateObject79;
var _templateObject80;
var _templateObject81;
var _templateObject822;
var _templateObject83;
var _templateObject84;
var _templateObject85;
var _templateObject86;
var _templateObject87;
var _templateObject88;
var _templateObject89;
var _templateObject90;
var _templateObject91;
var _templateObject922;
var _templateObject932;
var _templateObject94;
var _templateObject95;
var _templateObject96;
var _templateObject97;
var _templateObject98;
var _templateObject99;
var _templateObject100;
var _templateObject101;
var _templateObject1022;
var _templateObject103;
var _templateObject104;
var _templateObject105;
var _templateObject106;
var _templateObject107;
var _templateObject108;
var _templateObject109;
var _templateObject110;
var _templateObject111;
var _templateObject1122;
var _templateObject113;
var _templateObject114;
var _templateObject115;
var _templateObject116;
var _templateObject117;
var _templateObject118;
var _templateObject119;
var _templateObject120;
var _templateObject121;
var _templateObject1222;
var _templateObject123;
var _templateObject124;
var _templateObject125;
var _templateObject126;
var _templateObject127;
var _templateObject128;
var _templateObject129;
var _templateObject130;
var _templateObject131;
var _templateObject1322;
var _templateObject133;
var _templateObject134;
var _templateObject135;
var _templateObject136;
var _templateObject137;
var _templateObject138;
var _templateObject139;
var _templateObject140;
var _templateObject141;
var _templateObject1422;
var _templateObject143;
var _templateObject144;
var _templateObject145;
var _templateObject146;
var _templateObject147;
var _templateObject148;
var _templateObject149;
var _templateObject150;
var _templateObject151;
var _templateObject1522;
var _templateObject153;
var _templateObject154;
var _templateObject155;
var _templateObject156;
var _templateObject157;
var _templateObject158;
var _templateObject159;
var _templateObject160;
var _templateObject161;
var _templateObject1622;
var _templateObject163;
var _templateObject164;
var _templateObject165;
var _templateObject166;
var _templateObject167;
var _templateObject168;
var _templateObject169;
var _templateObject170;
var _templateObject171;
var _templateObject1722;
var _templateObject173;
var _templateObject174;
var _templateObject175;
var _templateObject176;
var _templateObject177;
var _templateObject178;
var _templateObject179;
var _templateObject180;
var _templateObject181;
var _templateObject1822;
var _templateObject183;
var _templateObject184;
var _templateObject185;
var _templateObject186;
var _templateObject187;
var _templateObject188;
function _taggedTemplateLiteral5(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var map_to_candy_rich_block = (0, import_kolmafia7.toItem)("map to a candy-rich block");
var ML = ".8 ml";
var FRIAR_ZONE_DATA = {
  nc: true
};
var OVERGROWN_SHRINE_DATA = {
  forceEquip: [$item(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral5(["antique machete"])))]
};
var NC_ONLY = {
  nc: true
};
var FILTHWORM_ZONE = {
  forceEquip: [$item(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral5(["Flash Liquidizer Ultra Dousing Accessory"])))]
};
var RIFT_ZONE = {
  targetMonster: $monster(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral5(["shadow slab"]))),
  forceEquip: get("_fireExtinguisherCharge") > 20 ? [$item(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral5(["industrial fire extinguisher"])))] : void 0,
  dropChance: 10
};
var shipTurns = $location(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral5(["The Penultimate Fantasy Airship"]))).turnsSpent;
var ZONE_DATA = /* @__PURE__ */ new Map([[$location(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral5(["The Haunted Kitchen"]))), {
  phlyumToBan: $phylum(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral5(["Undead"])))
}], [$location(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral5(["Guano Junction"]))), {
  dropChance: 15
}], [$location(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral5(["The Beanbat Chamber"]))), {
  targetMonster: $monster(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral5(["beanbat"])))
}], [$location(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral5(["The Black Forest"]))), {
  forceEquip: [$item(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral5(["blackberry galoshes"])))],
  com: true,
  fam: have($item(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral5(["reassembled blackbird"])))) ? have((0, import_kolmafia7.toItem)("LED Candle")) ? void 0 : $familiar(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral5(["Jill-of-All-Trades"]))) : $familiar(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral5(["Reassembled Blackbird"])))
}], [$location(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral5(["The Spooky Forest"]))), {
  nc: $location(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral5(["The Spooky Forest"]))).turnsSpent > 5
}], [$location(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral5(["The Defiled Niche"]))), {
  targetMonster: $monster(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral5(["dirty old lihc"]))),
  phlyumToBan: $phylum(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral5(["Undead"])))
}], [$location(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral5(["The Daily Dungeon"]))), {
  forceEquip: [$item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral5(["ring of Detect Boring Doors"])))]
}], [$location(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral5(["The Defiled Alcove"]))), {
  nc: get("cyrptAlcoveEvilness") > 13,
  confirmText: !have($effect(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral5(["Ready to Survive"])))) ? "Use mayday package" : void 0
}], [$location(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral5(["The Dark Heart of the Woods"]))), FRIAR_ZONE_DATA], [$location(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral5(["The Dark Neck of the Woods"]))), FRIAR_ZONE_DATA], [$location(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral5(["The Dark Elbow of the Woods"]))), FRIAR_ZONE_DATA], [$location(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral5(["The Batrat and Ratbat Burrow"]))), {
  dropChance: 15
}], [$location(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral5(["The Boss Bat's Lair"]))), {
  targetMonster: $monster(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral5(["Boss Bat"]))),
  preventEquip: $location(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral5(["The Boss Bat's Lair"]))).turnsSpent > 5 ? [$item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral5(["miniature crystal ball"])))] : void 0
}], [$location(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral5(["The Hidden Temple"]))), {
  fam: get("_citizenZone") !== "The Hidden Temple" && !have($effect(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral5(["Stone-Faced"])))) ? $familiar(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral5(["Patriotic Eagle"]))) : void 0,
  confirmText: get("_citizenZone") !== "The Hidden Temple" ? "Pledge allegiance to the zone" : void 0,
  targetMonster: !have($effect(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral5(["Stone-Faced"])))) ? $monster(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral5(["baa-relief sheep"]))) : void 0,
  dropChance: !have($effect(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral5(["Stone-Faced"])))) ? 25 : void 0,
  forceEquip: !have($effect(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral5(["Stone-Faced"])))) ? [$item(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral5(["cursed monkey's paw"])))] : void 0
}], [$location(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral5(["The Haunted Billiards Room"]))), {
  nc: (0, import_kolmafia7.numericModifier)("pool skill") + (0, import_kolmafia7.myInebriety)() >= 8,
  com: (0, import_kolmafia7.numericModifier)("pool skill") + (0, import_kolmafia7.myInebriety)() < 8
}], [$location(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral5(["The Haunted Library"]))), {
  dropChance: 10,
  targetMonster: $monster(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral5(["writing desk"]))),
  phlyumToBan: $phylum(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral5(["undead"]))),
  forceEquip: get("banishedMonsters").includes("bookbat") ? void 0 : [$item(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral5(["cursed monkey's paw"])))]
}], [$location(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral5(["The Smut Orc Logging Camp"]))), {
  dropChance: 10
}], [$location(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral5(["The Goatlet"]))), {
  targetMonster: $monster(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral5(["dairy goat"]))),
  dropChance: 40,
  foodDrop: true,
  forceEquip: [$item(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral5(["cursed monkey's paw"])))],
  fam: $familiar(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral5(["Grey Goose"])))
}], [$location(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral5(["The Outskirts of Cobb's Knob"]))), {
  com: true,
  fam: get("beGregariousMonster") === $monster(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral5(["red butler"]))) && !get("banishedPhyla").includes($phylum(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral5(["Goblin"]))).toString()) ? $familiar(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral5(["Patriotic Eagle"]))) : void 0
}], [$location(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral5(["An Overgrown Shrine (Southeast)"]))), OVERGROWN_SHRINE_DATA], [$location(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral5(["An Overgrown Shrine (Southwest)"]))), OVERGROWN_SHRINE_DATA], [$location(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral5(["An Overgrown Shrine (Northeast)"]))), OVERGROWN_SHRINE_DATA], [$location(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral5(["An Overgrown Shrine (Northwest)"]))), OVERGROWN_SHRINE_DATA], [$location(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral5(["The Hidden Park"]))), NC_ONLY], [$location(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral5(["Hippy Camp"]))), {
  forceEquip: [$item(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral5(["distressed denim pants"]))), $item(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral5(["bejeweled pledge pin"]))), $item(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral5(["beer helmet"])))]
}], [$location(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral5(["Wartime Hippy Camp"]))), {
  forceEquip: [$item(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral5(["distressed denim pants"]))), $item(_templateObject722 || (_templateObject722 = _taggedTemplateLiteral5(["bejeweled pledge pin"]))), $item(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral5(["beer helmet"])))],
  nc: true
}], [$location(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral5(["Vanya's Castle"]))), {
  forceEquip: get("lastCopyableMonster") === $monster(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral5(["ninja snowman assassin"]))) && !have($item(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral5(["ninja carabiner"])))) ? [$item(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral5(["continuum transfunctioner"]))), $item(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral5(["backup camera"])))] : [$item(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral5(["continuum transfunctioner"])))]
}], [$location(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral5(["Megalo-City"]))), {
  forceEquip: [$item(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral5(["continuum transfunctioner"])))]
}], [$location(_templateObject822 || (_templateObject822 = _taggedTemplateLiteral5(["Lair of the Ninja Snowmen"]))), {
  com: true
}], [$location(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral5(["The Penultimate Fantasy Airship"]))), {
  com: shipTurns < 5 || shipTurns < 10 && have($item(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral5(["Tissue Paper Immateria"])))) || shipTurns < 15 && have($item(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral5(["Tin Foil Immateria"])))) || shipTurns < 20 && have($item(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral5(["Gauze Immateria"])))) || shipTurns < 25 && have($item(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral5(["Plastic Wrap Immateria"])))),
  targetMonster: have($item(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral5(["Mohawk wig"])))) && have($item(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral5(["amulet of extreme plot significance"])))) && (have($item(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral5(["titanium assault umbrella"])))) || have($item(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral5(["unbreakable umbrella"]))))) ? $monster(_templateObject922 || (_templateObject922 = _taggedTemplateLiteral5(["Quiet Healer"]))) : void 0,
  nc: !(shipTurns < 5 || shipTurns < 10 && have($item(_templateObject932 || (_templateObject932 = _taggedTemplateLiteral5(["Tissue Paper Immateria"])))) || shipTurns < 15 && have($item(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral5(["Tin Foil Immateria"])))) || shipTurns < 20 && have($item(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral5(["Gauze Immateria"])))) || shipTurns < 25 && have($item(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral5(["Plastic Wrap Immateria"]))))),
  dropChance: 10
}], [$location(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral5(["Oil Peak"]))), {
  maximizer: [ML],
  dropChance: 30
}], [$location(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral5(["The Hidden Park"]))), {
  confirmText: get("noncombatForcerActive") ? void 0 : "Force non combat?"
}], [$location(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral5(["The Hidden Bowling Alley"]))), {
  dropChance: 40,
  targetMonster: $monster(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral5(["pygmy bowler"])))
}], [$location(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral5(["The Hidden Apartment Building"]))), {
  targetMonster: $monster(_templateObject1022 || (_templateObject1022 = _taggedTemplateLiteral5(["pygmy shaman"])))
}], [$location(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral5(["The Hidden Office Building"]))), {
  targetMonster: $monster(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral5(["pygmy witch accountant"])))
}], [$location(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral5(["The Hidden Hospital"]))), {
  targetMonster: $monster(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral5(["pygmy witch surgeon"])))
}], [$location(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral5(["The Haunted Bedroom"]))), {
  targetMonster: $monster(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral5(["elegant animated nightstand"])))
}], [$location(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral5(["The Haunted Bathroom"]))), {
  nc: $location(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral5(["The Haunted Bathroom"]))).turnsSpent > 5
}], [$location(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral5(["The Haunted Gallery"]))), {
  nc: $location(_templateObject1122 || (_templateObject1122 = _taggedTemplateLiteral5(["The Haunted Gallery"]))).turnsSpent > 5
}], [$location(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral5(["The Haunted Ballroom"]))), {
  nc: $location(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral5(["The Haunted Ballroom"]))).turnsSpent > 5
}], [$location(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral5(["Next to that Barrel with Something Burning in it"]))), {
  targetMonster: $monster(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral5(["batwinged gremlin"]))),
  confirmText: have($item(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral5(["seal tooth"])))) ? void 0 : "Get a seal tooth to stasis."
}], [$location(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral5(["Near an Abandoned Refrigerator"]))), {
  targetMonster: $monster(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral5(["spider gremlin"]))),
  confirmText: have($item(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral5(["seal tooth"])))) ? void 0 : "Get a seal tooth to stasis."
}], [$location(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral5(["Out by that Rusted-Out Car"]))), {
  targetMonster: $monster(_templateObject1222 || (_templateObject1222 = _taggedTemplateLiteral5(["vegetable gremlin"]))),
  confirmText: have($item(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral5(["seal tooth"])))) ? void 0 : "Get a seal tooth to stasis."
}], [$location(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral5(["Over Where the Old Tires Are"]))), {
  targetMonster: $monster(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral5(["erudite gremlin"]))),
  confirmText: have($item(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral5(["seal tooth"])))) ? void 0 : "Get a seal tooth to stasis."
}], [$location(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral5(["The Castle in the Clouds in the Sky (Basement)"]))), NC_ONLY], [$location(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral5(["The Castle in the Clouds in the Sky (Ground Floor)"]))), {
  nc: !have($item(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral5(["electric boning knife"])))),
  com: have($item(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral5(["electric boning knife"]))))
}], [$location(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral5(["The Castle in the Clouds in the Sky (Top Floor)"]))), {
  nc: get("questL10Garbage") === "step9",
  forceEquip: get("questL10Garbage") === "step9" ? [$item(_templateObject1322 || (_templateObject1322 = _taggedTemplateLiteral5(["Mohawk wig"])))] : []
}], [$location(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral5(["The Arid, Extra-Dry Desert"]))), {
  forceEquip: get("banishedMonsters").includes("cactuary") ? [$item(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral5(["survival knife"]))), $item(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral5(["UV-resistant compass"])))] : [$item(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral5(["survival knife"]))), $item(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral5(["cursed monkey's paw"]))), $item(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral5(["UV-resistant compass"])))],
  confirmText: "Pickpocket the monster",
  phlyumToBan: $phylum(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral5(["Bug"])))
}], [$location(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral5(["The Battlefield (Frat Uniform)"]))), {
  dropChance: get("hippiesDefeated") > 400 ? 5 : void 0,
  phlyumToBan: get("hippiesDefeated") >= 400 ? $phylum(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral5(["Hippy"]))) : void 0
}], [$location(_templateObject1422 || (_templateObject1422 = _taggedTemplateLiteral5(["The Hatching Chamber"]))), FILTHWORM_ZONE], [$location(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral5(["The Feeding Chamber"]))), FILTHWORM_ZONE], [$location(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral5(["The Royal Guard Chamber"]))), FILTHWORM_ZONE], [$location(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral5(["The Filthworm Queen's Chamber"]))), {
  phlyumToBan: $phylum(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral5(["Bug"])))
}], [$location(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral5(["Shadow Rift (The Misspelled Cemetary)"]))), RIFT_ZONE], [$location(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral5(["Shadow Rift (The Hidden City)"]))), RIFT_ZONE], [$location(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral5(["Shadow Rift (The Ancient Buried Pyramid)"]))), RIFT_ZONE], [$location(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral5(["The Haunted Laundry Room"]))), {
  dropChance: 15,
  foodDrop: true,
  targetMonster: $monster(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral5(["cabinet of Dr. Limpieza"])))
}], [$location(_templateObject1522 || (_templateObject1522 = _taggedTemplateLiteral5(["The Haunted Wine Cellar"]))), {
  dropChance: 15,
  boozeDrop: true,
  targetMonster: $monster(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral5(["possessed wine rack"])))
}], [$location(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral5(["The Haunted Boiler Room"]))), {
  maximizer: [ML],
  targetMonster: $monster(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral5(["monstrous boiler"]))),
  forceEquip: [$item(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral5(["unstable fulminate"])))]
}], [$location(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral5(["The Defiled Nook"]))), {
  targetMonster: $monster(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral5(["spiny skelelton"]))),
  dropChance: 20
}], [$location(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral5(["A-Boo Peak"]))), {
  dropChance: 15
}], [$location(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral5(["The Themthar Hills"]))), {
  fam: $familiar(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral5(["Hobo Monkey"]))),
  forceEquip: [$item(_templateObject1622 || (_templateObject1622 = _taggedTemplateLiteral5(["distressed denim pants"]))), $item(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral5(["bejeweled pledge pin"]))), $item(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral5(["beer helmet"])))]
}], [$location(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral5(["The Fungus Plains"]))), {
  forceEquip: [$item(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral5(["continuum transfunctioner"])))]
}], [$location(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral5(["The Red Zeppelin"]))), {
  targetMonster: $monster(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral5(["red butler"]))),
  phlyumToBan: $phylum(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral5(["Dude"]))),
  dropChance: 30
}], [$location(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral5(["The Enormous Greater-Than Sign"]))), NC_ONLY], [$location(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral5(["The Dungeons of Doom"]))), NC_ONLY], [$location(_templateObject1722 || (_templateObject1722 = _taggedTemplateLiteral5(["The Defiled Cranny"]))), {
  maximizer: [ML],
  nc: get("cyrptCrannyEvilness") > 37
}], [$location(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral5(["The Typical Tavern Cellar"]))), {
  maximizer: [ML],
  nc: true
}], [$location(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral5(["Inside the Palindome"]))), {
  nc: !(have($item(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral5(["photograph of God"])))) && have($item(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral5(["photograph of an ostrich egg"])))) && have($item(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral5(["photograph of a red nugget"]))))),
  targetMonster: $monster(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral5(["Bob Racecar"]))),
  forceEquip: [$item(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral5(["Talisman o' Namsilat"])))],
  phlyumToBan: $phylum(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral5(["Beast"])))
}], [$location(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral5(["Twin Peak"]))), {
  dropChance: 15,
  nc: true,
  phlyumToBan: $phylum(_templateObject1822 || (_templateObject1822 = _taggedTemplateLiteral5(["Dude"])))
}], [$location(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral5(["The Upper Chamber"]))), {
  nc: true
  // TODO: reconsider this if we can get enough ratchets and have smoke bombs
}], [$location(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral5(["The Middle Chamber"]))), {
  dropChance: 20,
  targetMonster: $monster(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral5(["tomb rat"])))
}], [$location(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral5(["Cobb's Knob Harem"]))), {
  targetMonster: $monster(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral5(["Knob Goblin Harem Girl"])))
}], [$location(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral5(["A Mob of Zeppelin Protesters"]))), {
  maximizer: ["sleaze dmg", "sleaze spell dmg"]
}]]);

// src/iotms/2022/bb_CursedMagnifyingGlass.ts
var _templateObject189;
var _templateObject213;
function _taggedTemplateLiteral6(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_CursedMagnifyingGlass_default = {
  warnings: function(loc) {
    if (get("_voidFreeFights") < 5) {
      if (!(0, import_kolmafia8.haveEquipped)($item(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral6(["cursed magnifying glass"])))) && (0, import_kolmafia8.myLevel)() >= 11) {
        var zone = ZONE_DATA.get(loc);
        if (!(zone !== null && zone !== void 0 && zone.nc) && !(zone !== null && zone !== void 0 && zone.dropChance)) {
          return ["Should equip cursed magnifying glass"];
        }
      }
      if ((0, import_kolmafia8.haveEquipped)($item(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral6(["cursed magnifying glass"])))) && get("cursedMagnifyingGlassCount") === 13) {
        return ["Free void fight next turn"];
      }
    }
    return void 0;
  }
};

// src/iotms/2022/bb_DesignerSweatpants.ts
var import_kolmafia9 = require("kolmafia");
var _templateObject190;
var _templateObject214;
var _templateObject310;
var _templateObject410;
var _templateObject510;
var _templateObject610;
function _taggedTemplateLiteral7(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var hippyOutfitLocations = /* @__PURE__ */ new Map([[$location(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral7(["Hippy Camp"]))), true], [$location(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral7(["The Battlefield (Frat Uniform)"]))), true], [$location(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral7(["The Themthar Hills"]))), true]]);
var bb_DesignerSweatpants_default = {
  errors: function(loc) {
    if (!(0, import_kolmafia9.haveEquipped)($item(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral7(["designer sweatpants"])))) && !hippyOutfitLocations.get(loc)) {
      return ["Equip sweatpants"];
    }
    return void 0;
  },
  execute: function() {
    if (get("_sweatOutSomeBoozeUsed") < 3 && get("sweat") === 100 && (0, import_kolmafia9.myInebriety)() > 0) {
      (0, import_kolmafia9.useSkill)($skill(_templateObject510 || (_templateObject510 = _taggedTemplateLiteral7(["Sweat Out Some Booze"]))));
    }
    if (get("sweat") > Math.max(20, 25 * (3 - get("_sweatOutSomeBoozeUsed"))) && (0, import_kolmafia9.myMaxmp)() - 50 > (0, import_kolmafia9.myMp)() && (0, import_kolmafia9.myMp)() < (0, import_kolmafia9.myMaxmp)() / 3) {
      (0, import_kolmafia9.useSkill)($skill(_templateObject610 || (_templateObject610 = _taggedTemplateLiteral7(["Sip Some Sweat"]))));
    }
  }
};

// src/iotms/2022/bb_GreyGoose.ts
var import_kolmafia10 = require("kolmafia");
var _templateObject191;
var _templateObject215;
var _templateObject311;
var _templateObject411;
var _templateObject511;
var _templateObject611;
function _taggedTemplateLiteral8(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_GreyGoose_default = {
  warnings: function() {
    var warnings = [];
    var gooseWeight = Math.floor(Math.sqrt($familiar(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral8(["Grey Goose"]))).experience));
    if ((0, import_kolmafia10.myFamiliar)() === $familiar(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral8(["Grey Goose"]))) && gooseWeight > 5) {
      warnings.push("".concat(gooseWeight - 5, " drones ready to deploy"));
    }
    if (get("gooseDronesRemaining") >= 7 && !(have($item(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral8(["star"])))) || have($item(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral8(["Richard's star key"])))))) {
      warnings.push("Have enough drones for camel toe");
    }
    return warnings;
  },
  familiar: function(loc) {
    return loc === $location(_templateObject511 || (_templateObject511 = _taggedTemplateLiteral8(["The Hidden Bowling Alley"]))) ? $familiar(_templateObject611 || (_templateObject611 = _taggedTemplateLiteral8(["Grey Goose"]))) : void 0;
  }
};

// src/iotms/2022/bb_JuneCleaver.ts
var import_kolmafia11 = require("kolmafia");
var _templateObject193;
var _templateObject216;
var _templateObject313;
var _templateObject412;
var _templateObject512;
var _templateObject612;
var _templateObject710;
var _templateObject810;
function _taggedTemplateLiteral9(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var IGNORE_LOCATIONS = /* @__PURE__ */ new Map([[$location(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral9(["An Overgrown Shrine (Northeast)"]))), true], [$location(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral9(["An Overgrown Shrine (Southeast)"]))), true], [$location(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral9(["An Overgrown Shrine (Northwest)"]))), true], [$location(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral9(["An Overgrown Shrine (Southwest)"]))), true]]);
var bb_JuneCleaver_default = {
  warnings: function(loc) {
    if (!(0, import_kolmafia11.haveEquipped)($item(_templateObject512 || (_templateObject512 = _taggedTemplateLiteral9(["June cleaver"])))) && have($effect(_templateObject612 || (_templateObject612 = _taggedTemplateLiteral9(["Peppermint Rush"])))) && !(have($item(_templateObject710 || (_templateObject710 = _taggedTemplateLiteral9(["survival knife"])))) && loc === $location(_templateObject810 || (_templateObject810 = _taggedTemplateLiteral9(["The Arid, Extra-Dry Desert"])))) && !IGNORE_LOCATIONS.get(loc)) {
      return ["Equip June cleaver?"];
    }
    return [];
  }
};

// src/iotms/2022/bb_Mayday.ts
var import_kolmafia12 = require("kolmafia");
var _templateObject194;
var _templateObject217;
var _templateObject314;
var _templateObject413;
var _templateObject513;
var _templateObject613;
var _templateObject711;
var _templateObject811;
var _templateObject910;
var _templateObject1010;
function _taggedTemplateLiteral10(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_Mayday_default = {
  errors: function(loc) {
    var errors = [];
    if (loc === $location(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral10(["The Arid, Extra-Dry Desert"]))) && have($item(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral10(["MayDay\u2122 supply package"]))))) {
      errors.push("Use your supply package.");
    }
  },
  warnings: function(loc) {
    var warnings = [];
    if (loc === $location(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral10(["The Arid, Extra-Dry Desert"]))) && (0, import_kolmafia12.haveEffect)($effect(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral10(["Ultrahydrated"])))) === 1 && have($item(_templateObject513 || (_templateObject513 = _taggedTemplateLiteral10(["bar of freeze-dried water"]))))) {
      warnings.push("Can use bar of freeze-dried water for Ultrahydrated");
    }
    return warnings;
  },
  equip: function(loc) {
    return have($item(_templateObject613 || (_templateObject613 = _taggedTemplateLiteral10(["survival knife"])))) && loc === $location(_templateObject711 || (_templateObject711 = _taggedTemplateLiteral10(["The Arid, Extra-Dry Desert"]))) ? [$item(_templateObject811 || (_templateObject811 = _taggedTemplateLiteral10(["survival knife"])))] : [];
  },
  execute: function() {
    have($item(_templateObject910 || (_templateObject910 = _taggedTemplateLiteral10(["spare battery"])))) && (0, import_kolmafia12.use)($item(_templateObject1010 || (_templateObject1010 = _taggedTemplateLiteral10(["spare battery"]))));
  }
};

// src/iotms/2022/bb_TinyStillsuit.ts
var import_kolmafia13 = require("kolmafia");
var _templateObject195;
var _templateObject218;
var _templateObject315;
var _templateObject414;
function _taggedTemplateLiteral11(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_TinyStillsuit_default = {
  errors: function() {
    var errors = [];
    if (!((0, import_kolmafia13.familiarEquippedEquipment)($familiar(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral11(["Gelatinous Cubeling"])))) === $item(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral11(["tiny stillsuit"]))) && get("questRufus") !== "finished" || (0, import_kolmafia13.familiarEquippedEquipment)($familiar(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral11(["Slimeling"])))) === $item(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral11(["tiny stillsuit"]))) && questStep("questL11Ron") < 2 || (0, import_kolmafia13.myPath)() === (0, import_kolmafia13.toPath)("WereProfessor") && (0, import_kolmafia13.myTurncount)() < 65 || (0, import_kolmafia13.numericModifier)("familiar experience") > 3)) {
      errors.push("Stillsuit not on cubeling or slimeling");
    }
    return errors;
  }
};

// src/iotms/2023/bb_2002Catalog.ts
var import_kolmafia14 = require("kolmafia");
var _templateObject196;
var _templateObject219;
var _templateObject316;
function _taggedTemplateLiteral12(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_2002Catalog_default = {
  warnings: function() {
    var warnings = [];
    if ((0, import_kolmafia14.totalTurnsPlayed)() - get("spookyVHSTapeMonsterTurn") === 8 && get("spookyVHSTapeMonster")) {
      warnings.push("Spooky VHS monster next turn");
    }
    return warnings;
  },
  equip: function(loc) {
    var items = [];
    loc.zone === "Orchard" && items.push($item(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral12(["Flash Liquidizer Ultra Dousing Accessory"]))));
    loc === $location(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral12(["The Hidden Bowling Alley"]))) && items.push($item(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral12(["pro skateboard"]))));
    return items;
  }
};

// src/iotms/2023/bb_AugustScepter.ts
var import_kolmafia15 = require("kolmafia");
var _templateObject197;
function _taggedTemplateLiteral13(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_AugustScepter_default = {
  execute: function() {
    !get("_aug24Cast") && (0, import_kolmafia15.useSkill)($skill(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral13(["Aug. 24th: Waffle Day!"]))));
  }
};

// src/iotms/2023/bb_CandyCane.ts
var import_kolmafia16 = require("kolmafia");
var _templateObject198;
var _templateObject220;
var _templateObject317;
var _templateObject415;
var _templateObject514;
var _templateObject614;
var _templateObject712;
var _templateObject812;
var _templateObject911;
var _templateObject1011;
var _templateObject1110;
var _templateObject1210;
var _templateObject1310;
function _taggedTemplateLiteral14(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_CandyCane_default = {
  warnings: function() {
    var warnings = [];
    ((0, import_kolmafia16.myPath)() !== (0, import_kolmafia16.toPath)("WereProfessor") || get("cyrptAlcoveEvilness") > 13) && !have($effect(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral14(["Peppermint Rush"])))) && !(0, import_kolmafia16.haveEquipped)($item(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral14(["candy cane sword cane"])))) && warnings.push("Equip candy cane and use combat skill");
    return warnings;
  },
  equip: function(loc) {
    if (loc === $location(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral14(["The Daily Dungeon"]))) && !get("candyCaneSwordDailyDungeon") && get("_lastDailyDungeonRoom") === 14 || loc === $location(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral14(["The Black Forest"]))) && $location(_templateObject514 || (_templateObject514 = _taggedTemplateLiteral14(["The Black Forest"]))).turnsSpent % 5 === 4 && !get("candyCaneSwordBlackForest") || loc === $location(_templateObject614 || (_templateObject614 = _taggedTemplateLiteral14(["The Shore, Inc. Travel Agency"]))) && !get("candyCaneSwordShore") || loc === $location(_templateObject712 || (_templateObject712 = _taggedTemplateLiteral14(["Hippy Camp"]))) && !(get("candyCaneSwordWarHippyBait") || get("candyCaneSwordWarHippyLine")) || loc === $location(_templateObject812 || (_templateObject812 = _taggedTemplateLiteral14(["The Penultimate Fantasy Airship"]))) && !have($item(_templateObject911 || (_templateObject911 = _taggedTemplateLiteral14(["metallic A"])))) || loc === $location(_templateObject1011 || (_templateObject1011 = _taggedTemplateLiteral14(["A Mob of Zeppelin Protesters"]))) || loc === $location(_templateObject1110 || (_templateObject1110 = _taggedTemplateLiteral14(["The Hidden Bowling Alley"]))) && have($item(_templateObject1210 || (_templateObject1210 = _taggedTemplateLiteral14(["bowling ball"])))) && !get("candyCaneSwordBowlingAlley")) {
      return [$item(_templateObject1310 || (_templateObject1310 = _taggedTemplateLiteral14(["candy cane sword cane"])))];
    }
    return void 0;
  }
};

// src/iotms/2023/bb_ClosedCircuitPhoneSystem.ts
var _templateObject199;
var _templateObject221;
function _taggedTemplateLiteral15(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_ClosedCircuitPhoneSystem_default = {
  warnings: function(loc) {
    var warnings = [];
    loc.zone !== "Shadow Rift" && have($effect(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral15(["Shadow Affinity"])))) && warnings.push("Don't spend turns outside of Shadow Rift");
    return warnings;
  },
  errors: function(loc) {
    return loc.zone === "Shadow Rift" && !have($effect(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral15(["Shadow Affinity"])))) ? ["Call Rufus"] : [];
  }
};

// src/iotms/2023/bb_CursedMonkeyPaw.ts
var import_kolmafia17 = require("kolmafia");
var _templateObject200;
var _templateObject223;
var _templateObject318;
function _taggedTemplateLiteral16(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var needPaw = function(loc) {
  var data = ZONE_DATA.get(loc);
  var banishedMonsters = get("banishedMonsters");
  var monsters = Object.keys((0, import_kolmafia17.getLocationMonsters)(loc)).filter(function(name) {
    var _data$targetMonster;
    return name !== (data === null || data === void 0 || (_data$targetMonster = data.targetMonster) === null || _data$targetMonster === void 0 ? void 0 : _data$targetMonster.name);
  });
  var isBanished = Boolean(monsters.find(function(monster) {
    return banishedMonsters.includes("cursed monkey paw:".concat(monster));
  }));
  if (loc === $location(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral16(["The Hidden Temple"]))) && have($effect(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral16(["Stone-Faced"])))))
    return false;
  return isBanished;
};
var bb_CursedMonkeyPaw_default = {
  equip: function(loc) {
    if (get("_monkeyPawWishesUsed") === 0) {
      var data = ZONE_DATA.get(loc);
      if (data && data.targetMonster && needPaw(loc))
        return [$item(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral16(["cursed monkey's paw"])))];
    }
    return [];
  }
};

// src/iotms/2023/bb_JillOfAllTrades.ts
var _templateObject201;
function _taggedTemplateLiteral17(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_JillOfAllTrades_default = {
  familiar: function(loc) {
    var _ZONE_DATA$get;
    ((_ZONE_DATA$get = ZONE_DATA.get(loc)) === null || _ZONE_DATA$get === void 0 ? void 0 : _ZONE_DATA$get.dropChance) && $familiar(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral17(["Jill-of-All-Trades"])));
  }
};

// src/iotms/2023/bb_PatrioticEagle.ts
var import_kolmafia18 = require("kolmafia");
var _templateObject203;
var _templateObject224;
var _templateObject319;
var _templateObject416;
var _templateObject515;
var _templateObject615;
var _templateObject713;
var _templateObject813;
var _templateObject912;
var _templateObject1012;
var _templateObject1111;
var _templateObject1211;
var _templateObject1311;
var _templateObject1410;
var _templateObject1510;
var _templateObject1610;
var _templateObject1710;
var _templateObject1810;
var _templateObject1910;
var _templateObject204;
var _templateObject2110;
var _templateObject225;
var _templateObject233;
var _templateObject243;
var _templateObject253;
var _templateObject263;
function _taggedTemplateLiteral18(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var rwbTargetByLocation = /* @__PURE__ */ new Map([[$location(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral18(["The Defiled Niche"]))), $monster(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral18(["dirty old lihc"])))], [$location(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral18(["The Haunted Laundry Room"]))), $monster(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral18(["cabinet of Dr. Limpieza"])))], [$location(_templateObject515 || (_templateObject515 = _taggedTemplateLiteral18(["The Hidden Hospital"]))), $monster(_templateObject615 || (_templateObject615 = _taggedTemplateLiteral18(["pygmy witch surgeon"])))], [$location(_templateObject713 || (_templateObject713 = _taggedTemplateLiteral18(["The Haunted Wine Cellar"]))), $monster(_templateObject813 || (_templateObject813 = _taggedTemplateLiteral18(["possessed wine rack"])))], [$location(_templateObject912 || (_templateObject912 = _taggedTemplateLiteral18(["The Middle Chamber"]))), $monster(_templateObject1012 || (_templateObject1012 = _taggedTemplateLiteral18(["tomb rat"])))]]);
var phyla = /* @__PURE__ */ new Map([[$location(_templateObject1111 || (_templateObject1111 = _taggedTemplateLiteral18(["The Outskirts of Cobb's Knob"]))), $phylum(_templateObject1211 || (_templateObject1211 = _taggedTemplateLiteral18(["Goblin"])))], [$location(_templateObject1311 || (_templateObject1311 = _taggedTemplateLiteral18(["The Arid, Extra-Dry Desert"]))), $phylum(_templateObject1410 || (_templateObject1410 = _taggedTemplateLiteral18(["Bug"])))], [$location(_templateObject1510 || (_templateObject1510 = _taggedTemplateLiteral18(["Twin Peak"]))), $phylum(_templateObject1610 || (_templateObject1610 = _taggedTemplateLiteral18(["Dude"])))], [$location(_templateObject1710 || (_templateObject1710 = _taggedTemplateLiteral18(["Inside the Palindome"]))), $phylum(_templateObject1810 || (_templateObject1810 = _taggedTemplateLiteral18(["Beast"])))]]);
var bb_PatrioticEagle_default = {
  warnings: function() {
    return (0, import_kolmafia18.haveEffect)($effect(_templateObject1910 || (_templateObject1910 = _taggedTemplateLiteral18(["Everything Looks Red, White and Blue"])))) === 1 ? ["ELRWB expires next turn"] : void 0;
  },
  errors: function(loc) {
    var errors = [];
    var target = rwbTargetByLocation.get(loc);
    var zoneData = ZONE_DATA.get(loc);
    if (zoneData !== null && zoneData !== void 0 && zoneData.targetMonster && get("banishedPhyla").includes(zoneData.targetMonster.phylum.toString())) {
      errors.push("Looking for ".concat(zoneData.targetMonster, ", but ").concat(get("banishedPhyla"), " are currently banished."));
    } else if (target && get("rwbMonster") !== target && have($effect(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral18(["Everything Looks Red, White and Blue"]))))) {
      errors.push("Supposed to RWB ".concat(target, " but still have ELRWB"));
    }
    return errors;
  },
  familiar: function(loc) {
    var target = rwbTargetByLocation.get(loc);
    var phylum = phyla.get(loc);
    if (target && get("rwbMonster") !== target && !have($effect(_templateObject2110 || (_templateObject2110 = _taggedTemplateLiteral18(["Everything Looks Red, White and Blue"])))) || loc === $location(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral18(["The Hidden Temple"]))) && get("_citizenZone") !== "The Hidden Temple" && !have($effect(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral18(["Stone-Faced"])))) || loc === $location(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral18(["Lair of the Ninja Snowmen"]))) && get("_citizenZone") !== "Lair of the Ninja Snowmen" || loc === $location(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral18(["The Icy Peak"]))) && get("_citizenZone") !== "The Icy Peak" || phylum && !get("banishedPhyla").includes(phylum.toString())) {
      return $familiar(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral18(["Patriotic Eagle"])));
    }
    return void 0;
  }
};

// src/iotms/2023/bb_SITCourseCertificate.ts
var bb_SITCourseCertificate_default = {
  errors: function() {
    return get("_sitCourseCompleted") ? [] : ["Complete the SIT course"];
  }
};

// src/iotms/2024/bb_SpringShoes.ts
var import_kolmafia19 = require("kolmafia");
var _templateObject205;
var _templateObject226;
var _templateObject320;
function _taggedTemplateLiteral19(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var SHOES = (0, import_kolmafia19.toItem)("spring shoes");
var bb_SpringShoes_default = {
  warnings: function(loc) {
    var warnings = [];
    if ((0, import_kolmafia19.haveEquipped)(SHOES)) {
      (0, import_kolmafia19.myLevel)() < 12 && Object.keys((0, import_kolmafia19.getLocationMonsters)(loc)).find(function(name) {
        return (0, import_kolmafia19.toMonster)(name).phylum === $phylum(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral19(["Plant"])));
      }) && warnings.push("Use Growth Spurt against plants");
      (0, import_kolmafia19.myPath)() !== (0, import_kolmafia19.toPath)("WereProfessor") && !have($effect(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral19(["Everything Looks Green"])))) && warnings.push("Use Spring Away");
    }
    return warnings;
  },
  equip: function() {
    return !(0, import_kolmafia19.haveEquipped)(SHOES) && !have($effect(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral19(["Everything Looks Green"])))) && (0, import_kolmafia19.myPath)() !== (0, import_kolmafia19.toPath)("WereProfessor") ? [SHOES] : [];
  }
};

// src/paths/Std2024.ts
var import_kolmafia23 = require("kolmafia");

// src/iotms/2022/bb_CosmicBowlingBall.ts
var bb_CosmicBowlingBall_default = {
  warnings: function() {
    return get("cosmicBowlingBallReturnCombats") <= 1 ? ["Bowling ball available next combat (CLEESH + banish?)"] : [];
  }
};

// src/iotms/2022/bb_ModelTrainSet.ts
var import_kolmafia20 = require("kolmafia");
var bb_ModelTrainSet_default = {
  warnings: function() {
    var warnings = [];
    if (get("trainsetPosition") - get("lastTrainsetConfiguration") >= 42 && (0, import_kolmafia20.myLevel)() < 15 && get("chasmBridgeProgress") < 30) {
      warnings.push("Re-configure train set");
    }
    return warnings;
  }
};

// src/iotms/2023/bb_BookOfFacts.ts
var bb_BookOfFacts_default = {
  warnings: function() {
    if (get("_monsterHabitatsFightsLeft") === 1) {
      return ["Last recall habitat fight upcoming"];
    }
    return void 0;
  }
};

// src/iotms/2023/bb_RockGardenGuide.ts
var import_kolmafia21 = require("kolmafia");
var _templateObject206;
var _templateObject227;
var _templateObject321;
var _templateObject417;
var _templateObject516;
function _taggedTemplateLiteral20(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_RockGardenGuide_default = {
  execute: function() {
    (0, import_kolmafia21.cliExecute)("garden pick");
    have($item(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral20(["whet stone"])))) && (0, import_kolmafia21.use)($item(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral20(["whet stone"]))));
    (0, import_kolmafia21.canAdventure)($location(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral20(["The Arid, Extra-Dry Desert"])))) && have($item(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral20(["milestone"])))) && (0, import_kolmafia21.use)($item(_templateObject516 || (_templateObject516 = _taggedTemplateLiteral20(["milestone"]))));
  }
};

// src/iotms/2023/bb_GuideToBurningLeaves.ts
var import_kolmafia22 = require("kolmafia");
var _templateObject207;
var _templateObject228;
var _templateObject323;
var _templateObject418;
var _templateObject517;
var _templateObject616;
var _templateObject714;
var _templateObject814;
function _taggedTemplateLiteral21(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var bb_GuideToBurningLeaves_default = {
  warnings: function() {
    return (0, import_kolmafia22.itemAmount)($item(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral21(["inflammable leaf"])))) > 74 ? ["have enough leaves for canopy bed"] : void 0;
  },
  execute: function() {
    (0, import_kolmafia22.itemAmount)($item(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral21(["tiny rake"])))) === 0 && (0, import_kolmafia22.visitUrl)("campground.php?preaction=leaves");
    (0, import_kolmafia22.equippedItem)($slot(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral21(["Familiar"])))) === $item(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral21(["none"]))) && (0, import_kolmafia22.equip)($item(_templateObject517 || (_templateObject517 = _taggedTemplateLiteral21(["tiny rake"]))));
    !have($effect(_templateObject616 || (_templateObject616 = _taggedTemplateLiteral21(["Resined"])))) && (0, import_kolmafia22.itemAmount)($item(_templateObject714 || (_templateObject714 = _taggedTemplateLiteral21(["inflammable leaf"])))) >= 50 && (0, import_kolmafia22.use)($item(_templateObject814 || (_templateObject814 = _taggedTemplateLiteral21(["distilled resin"]))));
  }
};

// src/paths/Std2024.ts
var _templateObject208;
var _templateObject229;
var _templateObject324;
var _templateObject419;
var _templateObject518;
var _templateObject617;
var _templateObject715;
var _templateObject815;
var _templateObject913;
var _templateObject1013;
var _templateObject1112;
var _templateObject1212;
var _templateObject1312;
var _templateObject1411;
var _templateObject1511;
var _templateObject1611;
var _templateObject1711;
var _templateObject1811;
var _templateObject1911;
var _templateObject209;
var _templateObject2111;
var _templateObject2210;
var _templateObject234;
var _templateObject244;
var _templateObject254;
var _templateObject264;
var _templateObject273;
var _templateObject283;
var _templateObject293;
var _templateObject303;
var _templateObject3110;
var _templateObject325;
var _templateObject333;
var _templateObject343;
var _templateObject353;
var _templateObject363;
var _templateObject372;
var _templateObject382;
var _templateObject392;
var _templateObject402;
var _templateObject4110;
var _templateObject422;
var _templateObject432;
var _templateObject442;
var _templateObject452;
var _templateObject462;
var _templateObject472;
var _templateObject482;
var _templateObject492;
var _templateObject502;
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray3(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray3(arr);
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral22(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _toPrimitive2(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var iotm2022 = [bb_AutumnAton_default, bb_CookBookBat_default, bb_CosmicBowlingBall_default, bb_CursedMagnifyingGlass_default, bb_DesignerSweatpants_default, bb_GreyGoose_default, bb_JuneCleaver_default, bb_Mayday_default, bb_ModelTrainSet_default, bb_TinyStillsuit_default];
var iotm2023 = [bb_2002Catalog_default, bb_AugustScepter_default, bb_BookOfFacts_default, bb_CandyCane_default, bb_ClosedCircuitPhoneSystem_default, bb_CursedMonkeyPaw_default, bb_GuideToBurningLeaves_default, bb_JillOfAllTrades_default, bb_PatrioticEagle_default, bb_RockGardenGuide_default, bb_SITCourseCertificate_default];
var iotm2024 = [bb_SpringShoes_default];
var _default = /* @__PURE__ */ function() {
  function _default2() {
    _classCallCheck2(this, _default2);
    _defineProperty2(this, "iotms", [].concat(iotm2022, iotm2023, iotm2024));
    _defineProperty2(this, "location", (0, import_kolmafia23.myLocation)());
  }
  _createClass2(_default2, [{
    key: "getCookbookbatItems",
    value: function getCookbookbatItems() {
      var neededItems = {};
      if ((0, import_kolmafia23.myDaycount)() === 1) {
        neededItems = _defineProperty2(_defineProperty2(_defineProperty2({}, $item(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral22(["St. Sneaky Pete's Whey"]))).name, get("cyrptAlcoveEvilness") > 13 && !have($item(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral22(["Pete's rich ricotta"])))) && !have($effect(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral22(["Rippin' Ricotta"])))) ? 2 : 0), $item(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral22(["Vegetable of Jarlsberg"]))).name, get("questRufus") === "unstarted" ? 4 : 0), $item(_templateObject518 || (_templateObject518 = _taggedTemplateLiteral22(["Yeast of Boris"]))).name, get("questRufus") === "unstarted" ? 2 : 0);
      } else if ((0, import_kolmafia23.myDaycount)() === 2) {
        neededItems = _defineProperty2(_defineProperty2(_defineProperty2({}, $item(_templateObject617 || (_templateObject617 = _taggedTemplateLiteral22(["Vegetable of Jarlsberg"]))).name, 2), $item(_templateObject715 || (_templateObject715 = _taggedTemplateLiteral22(["Yeast of Boris"]))).name, 4), $item(_templateObject815 || (_templateObject815 = _taggedTemplateLiteral22(["St. Sneaky Pete's Whey"]))).name, 2);
      }
      return neededItems;
    }
  }, {
    key: "checkCookbookbat",
    value: function checkCookbookbat() {
      var use4 = false;
      var neededItems = this.getCookbookbatItems();
      if (have($item(_templateObject913 || (_templateObject913 = _taggedTemplateLiteral22(["roasted vegetable focaccia"])))) || have($effect(_templateObject1013 || (_templateObject1013 = _taggedTemplateLiteral22(["Feeling Fancy"]))))) {
        neededItems[$item(_templateObject1112 || (_templateObject1112 = _taggedTemplateLiteral22(["Vegetable of Jarlsberg"]))).name] -= 2;
        neededItems[$item(_templateObject1212 || (_templateObject1212 = _taggedTemplateLiteral22(["Yeast of Boris"]))).name] -= 1;
      }
      if (have($item(_templateObject1312 || (_templateObject1312 = _taggedTemplateLiteral22(["roasted vegetable of Jarlsberg"])))) || have($effect(_templateObject1411 || (_templateObject1411 = _taggedTemplateLiteral22(["Wizard Sight"]))))) {
        neededItems[$item(_templateObject1511 || (_templateObject1511 = _taggedTemplateLiteral22(["Vegetable of Jarlsberg"]))).name] -= 2;
      }
      if (have($item(_templateObject1611 || (_templateObject1611 = _taggedTemplateLiteral22(["Boris's bread"])))) || have($effect(_templateObject1711 || (_templateObject1711 = _taggedTemplateLiteral22(["Inspired Chef"]))))) {
        neededItems[$item(_templateObject1811 || (_templateObject1811 = _taggedTemplateLiteral22(["Yeast of Boris"]))).name] -= 2;
      }
      use4 = Boolean(Object.entries(neededItems).find(function(_ref) {
        var _ref2 = _slicedToArray2(_ref, 2), name = _ref2[0], amt = _ref2[1];
        return (0, import_kolmafia23.itemAmount)((0, import_kolmafia23.toItem)(name)) < amt;
      }));
      return use4;
    }
  }, {
    key: "getMimicExpNeeded",
    value: function getMimicExpNeeded() {
      return 1100;
    }
  }, {
    key: "getMimicExpUsed",
    value: function getMimicExpUsed() {
      return get("_mimicEggsObtained", 0) * 100;
    }
  }, {
    key: "getFamiliar",
    value: function getFamiliar2() {
      var _this = this;
      var ret = [];
      var fams = [];
      var myFam = (0, import_kolmafia23.myFamiliar)();
      if ((0, import_kolmafia23.numericModifier)("familiar experience") > 10) {
        return [];
      }
      this.iotms.forEach(function(iotm) {
        if (iotm.familiar) {
          var fam = iotm.familiar(_this.location);
          fam && fams.push(fam);
        }
      });
      if (this.location === $location(_templateObject1911 || (_templateObject1911 = _taggedTemplateLiteral22(["The Black Forest"]))) && !have($item(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral22(["reassembled blackbird"]))))) {
        fams.push($familiar(_templateObject2111 || (_templateObject2111 = _taggedTemplateLiteral22(["Reassembled Blackbird"]))));
      }
      if (fams.length) {
        if (fams.length > 1) {
          ret.push("Multiple fams required: ".concat(fams.join(",")));
        } else if (myFam !== fams[0]) {
          ret.push("".concat(fams[0], " required"));
        }
      } else if ((0, import_kolmafia23.numericModifier)("item drop") < 500 && (0, import_kolmafia23.numericModifier)("meat drop") < 1e3) {
        var suggestedFam = void 0;
        if (get("cubelingProgress") < 9) {
          suggestedFam = $familiar(_templateObject2210 || (_templateObject2210 = _taggedTemplateLiteral22(["Gelatinous Cubeling"])));
        } else if (!get("ledCandleDropped")) {
          if (Object.keys((0, import_kolmafia23.getLocationMonsters)(this.location)).find(function(name) {
            return (0, import_kolmafia23.toMonster)(name).phylum === $phylum(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral22(["Dude"])));
          })) {
            suggestedFam = $familiar(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral22(["Jill-of-All-Trades"])));
          }
        } else if (this.checkCookbookbat()) {
          suggestedFam = $familiar(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral22(["Cookbookbat"])));
        } else if (get("_mapToACandyRichBlockDrops") === 0) {
          suggestedFam = $familiar(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral22(["Jill-of-All-Trades"])));
        } else if (get("screechCombats") !== 0) {
          suggestedFam = $familiar(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral22(["Patriotic Eagle"])));
        } else if (this.getMimicExpNeeded() > (0, import_kolmafia23.toFamiliar)("Chest Mimic").experience + this.getMimicExpUsed()) {
          suggestedFam = (0, import_kolmafia23.toFamiliar)("Chest Mimic");
        } else {
          suggestedFam = $familiar(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral22(["Cookbookbat"])));
        }
        if (suggestedFam) {
          if (suggestedFam !== myFam) {
            ret.push("".concat(suggestedFam, " is the suggested familiar"));
          }
        } else {
        }
      }
      return ret;
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      var _this = this;
      var errors = [];
      [].concat(_toConsumableArray(this.iotms), [{
        errors: function() {
          var errors2 = [];
          switch (_this.location) {
            case $location(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral22(["The Hidden Apartment Building"]))):
              if (get("hiddenApartmentProgress") < 7 && !get("noncombatForcerActive") && (!have($effect(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral22(["Thrice-Cursed"])))) || !(have($effect(_templateObject3110 || (_templateObject3110 = _taggedTemplateLiteral22(["Twice-Cursed"])))) && (0, import_kolmafia23.haveEquipped)($item(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral22(["candy cane sword cane"]))))))) {
                errors2.push("Force NC and get 3 curse (or 2 curse + candy cane sword cane)");
              }
              break;
            case $location(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral22(["The Black Forest"]))):
              if (have($item(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral22(["blackberry galoshes"])))) && !(0, import_kolmafia23.haveEquipped)($item(_templateObject353 || (_templateObject353 = _taggedTemplateLiteral22(["blackberry galoshes"]))))) {
                errors2.push("Equip blackberry galoshes");
              }
              break;
            case $location(_templateObject363 || (_templateObject363 = _taggedTemplateLiteral22(["The Battlefield (Frat Uniform)"]))):
              if (get("sidequestArenaCompleted") !== "fratboy" || get("sidequestJunkyardCompleted") !== "fratboy" || get("sidequestLighthouseCompleted") !== "fratboy") {
                errors2.push("Finish lighthouse, arena, and junkyard first");
              }
              if (get("hippiesDefeated") >= 64 && get("sidequestOrchardCompleted") !== "fratboy") {
                errors2.push("Finish orchard");
              }
              if (get("hippiesDefeated") >= 192 && get("sidequestNunsCompleted") !== "fratboy") {
                errors2.push("Finish nuns");
              }
          }
          if ((0, import_kolmafia23.getWorkshed)() === $item(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral22(["none"]))) && (0, import_kolmafia23.myPath)() !== (0, import_kolmafia23.toPath)("WereProfessor")) {
            errors2.push("No workshed is set");
          }
          return errors2;
        }
      }]).forEach(function(iotm) {
        if (iotm.errors && iotm.errors(_this.location)) {
          errors.push.apply(errors, _toConsumableArray(iotm.errors(_this.location)));
        }
      });
      return errors;
    }
  }, {
    key: "getWarnings",
    value: function getWarnings() {
      var _this = this;
      var warnings = [];
      [].concat(_toConsumableArray(this.iotms), [{
        warnings: function() {
          var warnings2 = [];
          if (!have((0, import_kolmafia23.toEffect)("Everything Looks Green"))) {
            if (have($item(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral22(["green smoke bomb"])))) || have($item(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral22(["tattered scrap of paper"]))))) {
              warnings2.push("".concat(have($item(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral22(["green smoke bomb"])))) ? "green smoke bomb" : "tattered scrap", " free run ready"));
            }
          }
          !have($effect(_templateObject4110 || (_templateObject4110 = _taggedTemplateLiteral22(["Everything Looks Yellow"])))) && warnings2.push("YR available");
          (0, import_kolmafia23.currentMcd)() < 10 && (0, import_kolmafia23.myLevel)() < 15 && (0, import_kolmafia23.getWorkshed)() === $item(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral22(["model train set"]))) && !have((0, import_kolmafia23.toEffect)("Mild-Mannered Professor")) && warnings2.push("MCD not at highest level");
          !$locations(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral22(["Vanya's Castle, Megalo-City, Hero's Field, The Fungus Plains"]))).includes(_this.location) && (0, import_kolmafia23.haveEquipped)($item(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral22(["continuum transfunctioner"])))) && warnings2.push("Unequip continuum transfunctioner");
          _this.location !== $location(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral22(["The Daily Dungeon"]))) && (0, import_kolmafia23.haveEquipped)($item(_templateObject462 || (_templateObject462 = _taggedTemplateLiteral22(["ring of Detect Boring Doors"])))) && warnings2.push("remove ring of detect boring doors");
          (0, import_kolmafia23.myDaycount)() === 1 && have($item(_templateObject472 || (_templateObject472 = _taggedTemplateLiteral22(["earthenware muffin tin"])))) && warnings2.push("order muffin");
          var zoneData = ZONE_DATA.get(_this.location);
          (zoneData === null || zoneData === void 0 ? void 0 : zoneData.nc) && (0, import_kolmafia23.combatRateModifier)() > -25 && !get("noncombatForcerActive") && warnings2.push("Reduce combat rate");
          (zoneData === null || zoneData === void 0 ? void 0 : zoneData.com) && (0, import_kolmafia23.combatRateModifier)() < 10 && warnings2.push("Increase combat rate");
          get("noncombatForcerActive") && warnings2.push("Forcing non combat");
          if ((0, import_kolmafia23.myLevel)() >= 10 && (0, import_kolmafia23.myDaycount)() === 1 && !have($item(_templateObject482 || (_templateObject482 = _taggedTemplateLiteral22(["futuristic hat"])))) || (0, import_kolmafia23.myLevel)() >= 15 && (0, import_kolmafia23.myDaycount)() > 2 && !have($item(_templateObject492 || (_templateObject492 = _taggedTemplateLiteral22(["futuristic hat"]))))) {
            warnings2.push("Use your wardrobe-o-matic");
          }
          switch (_this.location) {
            case $location(_templateObject502 || (_templateObject502 = _taggedTemplateLiteral22(["The Battlefield (Frat Uniform)"]))):
              if (400 < get("hippiesDefeated") && get("hippiesDefeated") < 464) {
                warnings2.push("GROPS now available on the battlefield.");
              }
          }
          return warnings2;
        }
      }]).forEach(function(iotm) {
        if (iotm.warnings && iotm.warnings(_this.location)) {
          warnings.push.apply(warnings, _toConsumableArray(iotm.warnings(_this.location)));
        }
      });
      return warnings;
    }
  }, {
    key: "getEquipment",
    value: function getEquipment() {
      var _this = this;
      var ret = [];
      var equipment = [];
      this.iotms.forEach(function(iotm) {
        var equip3 = iotm.equip && iotm.equip(_this.location);
        equip3 && equipment.push.apply(equipment, _toConsumableArray(equip3));
      });
      equipment.forEach(function(item2) {
        !(0, import_kolmafia23.haveEquipped)(item2) && ret.push("Equip ".concat(item2));
      });
      return ret;
    }
  }]);
  return _default2;
}();

// src/paths/WereProf.ts
var _templateObject230;
var _templateObject231;
var _templateObject326;
var _templateObject420;
var _templateObject519;
var _templateObject618;
var _templateObject716;
var _templateObject816;
var _templateObject914;
var _templateObject1014;
var _templateObject1113;
var _templateObject1213;
var _templateObject1313;
var _templateObject1412;
var _templateObject1512;
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray4(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray4(o, minLen);
}
function _iterableToArray2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray4(arr);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral23(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey3(descriptor.key), descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get2(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty3(obj, key, value) {
  key = _toPropertyKey3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _toPrimitive3(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var iotm20222 = [bb_AutumnAton_default, bb_CookBookBat_default, bb_CursedMagnifyingGlass_default, bb_DesignerSweatpants_default, bb_GreyGoose_default, bb_JuneCleaver_default, bb_Mayday_default, bb_TinyStillsuit_default];
var iotm20232 = [bb_2002Catalog_default, bb_AugustScepter_default, bb_CandyCane_default, bb_ClosedCircuitPhoneSystem_default, bb_CursedMonkeyPaw_default, bb_JillOfAllTrades_default, bb_PatrioticEagle_default, bb_SITCourseCertificate_default];
var iotm20242 = [bb_SpringShoes_default];
var WereProf = /* @__PURE__ */ function(_Std) {
  _inherits(WereProf2, _Std);
  function WereProf2() {
    var _this;
    _classCallCheck3(this, WereProf2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, WereProf2, [].concat(args));
    _defineProperty3(_assertThisInitialized(_this), "iotms", [].concat(iotm20222, iotm20232, iotm20242));
    return _this;
  }
  _createClass3(WereProf2, [{
    key: "getCookbookbatItems",
    value: function getCookbookbatItems() {
      var whey = 0, yeast = 0, veggie = 0;
      if ((0, import_kolmafia24.myDaycount)() === 1) {
        whey = get("cyrptAlcoveEvilness") > 13 && !have($item(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral23(["Pete's rich ricotta"])))) && !have($effect(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral23(["Rippin' Ricotta"])))) ? 2 : 0;
        yeast = get("_eldritchTentacleFought") ? 0 : 2;
        veggie = get("_eldritchTentacleFought") ? 0 : 2;
        veggie += $location(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral23(["Hero's Field"]))).turnsSpent === 0 ? 2 : 0;
        if (!(have($item(_templateObject420 || (_templateObject420 = _taggedTemplateLiteral23(["plain calzone"])))) || have($effect(_templateObject519 || (_templateObject519 = _taggedTemplateLiteral23(["Angering Pizza Purists"])))) || (0, import_kolmafia24.myLevel)() >= 11)) {
          whey += 2;
          yeast += 2;
        }
      } else if ((0, import_kolmafia24.myDaycount)() === 2) {
        veggie = 4;
        yeast = 4;
        yeast = 2;
      }
      return _defineProperty3(_defineProperty3(_defineProperty3({}, $item(_templateObject618 || (_templateObject618 = _taggedTemplateLiteral23(["St. Sneaky Pete's Whey"]))).name, whey), $item(_templateObject716 || (_templateObject716 = _taggedTemplateLiteral23(["Vegetable of Jarlsberg"]))).name, veggie), $item(_templateObject816 || (_templateObject816 = _taggedTemplateLiteral23(["Yeast of Boris"]))).name, yeast);
    }
  }, {
    key: "getWarnings",
    value: function getWarnings() {
      var warnings = [];
      if (!have($effect(_templateObject914 || (_templateObject914 = _taggedTemplateLiteral23(["Everything Looks Red"]))))) {
        warnings.push("Dart freekill (unless hunting soon). Darts are".concat(!(0, import_kolmafia24.haveEquipped)((0, import_kolmafia24.toItem)("Everfull Dart Holster")) ? " NOT" : "", " equipped"));
      }
      if ((0, import_kolmafia24.myDaycount)() === 1) {
        if ((0, import_kolmafia24.myTurncount)() < 65) {
          if ((0, import_kolmafia24.familiarEquippedEquipment)((0, import_kolmafia24.myFamiliar)()) !== $item(_templateObject1014 || (_templateObject1014 = _taggedTemplateLiteral23(["tiny stillsuit"])))) {
            warnings.push("Tiny stillsuit not on current familiar");
          }
          if (get("familiarSweat") >= 43) {
            warnings.push("5 adv stillsuit drink available");
          }
        } else {
          if ($location(_templateObject1113 || (_templateObject1113 = _taggedTemplateLiteral23(["Megalo-City"]))).turnsSpent < 5) {
            (0, import_kolmafia24.familiarEquippedEquipment)($familiar(_templateObject1213 || (_templateObject1213 = _taggedTemplateLiteral23(["Gelatinous Cubeling"])))) !== $item(_templateObject1313 || (_templateObject1313 = _taggedTemplateLiteral23(["tiny stillsuit"]))) && warnings.push("Cubeling stillsuit (brick farming)");
          } else {
            (0, import_kolmafia24.familiarEquippedEquipment)($familiar(_templateObject1412 || (_templateObject1412 = _taggedTemplateLiteral23(["Slimeling"])))) !== $item(_templateObject1512 || (_templateObject1512 = _taggedTemplateLiteral23(["tiny stillsuit"]))) && warnings.push("Slimeling stillsuit (zep mob)");
          }
        }
      }
      return [].concat(warnings, _toConsumableArray2(_get(_getPrototypeOf(WereProf2.prototype), "getWarnings", this).call(this)));
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      var errors = have((0, import_kolmafia24.toEffect)("Mild-Mannered")) && get2("Monster Level") > 24 ? ["Too much ML"] : [];
      return [].concat(errors, _toConsumableArray2(_get(_getPrototypeOf(WereProf2.prototype), "getErrors", this).call(this)));
    }
  }, {
    key: "getMimicExpNeeded",
    value: function getMimicExpNeeded() {
      return (0, import_kolmafia24.myDaycount)() === 1 ? 700 : 850;
    }
  }, {
    key: "getMimicExpUsed",
    value: function getMimicExpUsed() {
      var exp = 0;
      var day1Cost = [100, 50, 50, 50, 50, 50, 50, 100, 100, 50, 50];
      var day2Cost = [100, 100, 100, 100, 100, 50, 100, 50, 50, 50, 50];
      for (var i = 0; i < get("_mimicEggsObtained", 0); i++) {
        exp += (0, import_kolmafia24.myDaycount)() === 1 ? day1Cost[i] : day2Cost[i];
      }
      return exp;
    }
  }]);
  return WereProf2;
}(_default);

// src/preAdv.ts
var import_kolmafia25 = require("kolmafia");
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray5(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray5(o, minLen);
}
function _iterableToArray3(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray5(arr);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function preAdv_default(path) {
  var messageArray = [];
  path.iotms.forEach(function(iotm) {
    iotm.execute && iotm.execute();
  });
  messageArray.push.apply(messageArray, _toConsumableArray3(path.getErrors()));
  messageArray.push.apply(messageArray, _toConsumableArray3(path.getWarnings()));
  messageArray.push.apply(messageArray, _toConsumableArray3(path.getFamiliar()));
  messageArray.push.apply(messageArray, _toConsumableArray3(path.getEquipment()));
  if (messageArray.length && !(0, import_kolmafia25.userConfirm)(messageArray.join("\n") + "\n\nProceed anyway?")) {
    messageArray.forEach(function(msg) {
      (0, import_kolmafia25.print)(msg, "red");
    });
    (0, import_kolmafia25.print)();
    (0, import_kolmafia25.abort)();
  }
}

// src/preAdvWereProf.ts
function main() {
  preAdv_default(new WereProf());
}
