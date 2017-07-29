//=============================================================================
// rpg_managers.js v1.5.0
//=============================================================================
/** @global RPGMakerMV Actor data. */
declare var $dataActors: Array<RPG.Actor>;
/** @global RPGMakerMV Class data. */
declare var $dataClasses: Array<RPG.Class>;
/** @global RPGMakerMV Skill data. */
declare var $dataSkills: Array<RPG.Skill>;
/** @global RPGMakerMV Item data. */
declare var $dataItems: Array<RPG.Item>;
/** @global RPGMakerMV Weapon data. */
declare var $dataWeapons: Array<RPG.Weapon>;
/** @global RPGMakerMV Armor data. */
declare var $dataArmors: Array<RPG.Armor>;
/** @global RPGMakerMV Enemy data. */
declare var $dataEnemies: Array<RPG.Enemy>;
/** @global RPGMakerMV Troop data. */
declare var $dataTroops: Array<RPG.Troop>;
/** @global RPGMakerMV State data. */
declare var $dataStates: Array<RPG.State>;
/** @global RPGMakerMV Animation data. */
declare var $dataAnimations: Array<RPG.Animation>;
/** @global RPGMakerMV Tileset data. */
declare var $dataTilesets: Array<RPG.Tileset>;
/** @global RPGMakerMV CommonEvent data. */
declare var $dataCommonEvents: Array<RPG.CommonEvent>;
/** @global RPGMakerMV System data. */
declare var $dataSystem: RPG.System;
/** @global RPGMakerMV MapInfo data. */
declare var $dataMapInfos: Array<RPG.MapInfo>;
/** @global RPGMakerMV Map data for the current map. */
declare var $dataMap: RPG.Map;
/** @global RPGMakerMV Temporary game data; not saved with the game. */
declare var $gameTemp: Game_Temp;
/** @global RPGMakerMV Game System data; saved with the game.
 * @type {Game_Temp}
*/
declare var $gameSystem: Game_System;
/** @global RPGMakerMV Game Screen; contains properties and methods
 * for adjusting the game screen.
 * @type {Game_Screen}
 */
declare var $gameScreen: Game_Screen;
declare var $gameTimer: Game_Timer;
/** @global RPGMakerMV Game Message; contains properties and methods
 * for displaying messages in the game message window. 
 * @type {Game_Message}
*/
declare var $gameMessage: Game_Message;
/** @global RPGMakerMV Game Switches; contains properties and methods
 * for modifying in game switches while the game is running.
 * These are boolean values: true or false.
 * @type {Game_Switches}
 */
declare var $gameSwitches: Game_Switches;
/** @global RPGMakerMV Game Variables; contains properties and methods
 * for modifying the values of game variables.
 * The variables can contain anything.
 * @type {Game_Variables}
 */
declare var $gameVariables: Game_Variables;
declare var $gameSelfSwitches: Game_SelfSwitches;
declare var $gameActors: Game_Actors;
/** @global RPGmakerMV Game Party; contains properties and methods
 * for interacting with the game party. Some of the methods include
 * number of party members, etc.
 * @type {Game_Party}
 */
declare var $gameParty: Game_Party;
/** @global RPGMakerMV Game Troop; contains properties and methods
 * for interacting with the game troops. Some of the methods include
 * enemy data, enemy names, etc.
 * @type {Game_Troop}
 */
declare var $gameTroop: Game_Troop;
/** @global RPGMakerMV Game Map; contains properties and methods
 * for interacting with the game map. Some of these methods include
 * interacting with the map's game_interpreter, and event information.
 * @type {Game_Map}
 */
declare var $gameMap: Game_Map;
/** @global RPGMakerMV Game Player; contains properties and methods
 * for interacting with the game player. Some of these methods
 * include interacting with the player's position and move route.
 * @type {Game_Player}
 */
declare var $gamePlayer: Game_Player;
declare var $testEvent: Array<RPG.EventCommand>;

declare class DataManager {
  protected static _globalId: string;
  protected static _lastAccessedId: number;
  protected static _errorUrl: any;
  protected static _databaseFiles: Array<Object>;
  constructor();
  static loadDatabase(): void;
  static loadDataFile(name: string, src: string): void;
  static isDatabaseLoaded(): boolean;
  static loadMapData(mapId: number): void;
  static makeEmptyMap(): void;
  static isMapLoaded(): boolean;
  static onLoad(object: any);
  static extractMetaData(data: object): void;
  static checkError(): void;
  static isBattleTest(): boolean;
  static isEventTest(): boolean;
  /**
   * Returns a boolean value given an item.
   * Item being a database object representing a skill.
   * @static
   * @param {object} item 
   * @returns {boolean} 
   * @memberof DataManager
   */
  static isSkill(item: object): boolean;
  /**
   * Returns a boolean value given an item.
   * Item must be a database item to be true.
   * @static
   * @param {object} item 
   * @returns {boolean} 
   * @memberof DataManager
   */
  static isItem(item: object): boolean;
  /**
   * Returns a boolean value given an item.
   * Item must be a database weapon to be true.
   * @static
   * @param {object} item 
   * @returns {boolean} 
   * @memberof DataManager
   */
  static isWeapon(item: object): boolean;
  /**
   * Returns a boolean value given an item.
   * Item must be a database armor to be true.
   * @static
   * @param {object} item 
   * @returns {boolean} 
   * @memberof DataManager
   */
  static isArmor(item: object): boolean;
  static createGameObjects(): void;
  static setupNewGame(): void;
  static setupBattleTest(): void;
  static setupEventTest(): void;
  static loadGlobalInfo(): void;
  static saveGlobalInfo(info: object): void;
  /**
   * Returns a boolean value given a savefileId.
   * If the savefileId exists; the value will be true.
   * @static
   * @param {number} savefileId 
   * @returns {boolean} 
   * @memberof DataManager
   */
  static isThisGameFile(savefileId: number): boolean;
  static isAnySavefileExists(): boolean;
  static latestSavefileId(): number;
  static loadAllSavefileImages(): void;
  static loadSavefileImages(info: object): void;
  /**
   * Returns the maximum number of save files 
   * allocated in the game.
   * @static
   * @returns {number} 
   * @memberof DataManager
   */
  static maxSavefiles(): number;
  /**
   * Saves the RPGMakerMV game given a savefileId.
   * Returns true if successful.
   * @static
   * @param {number} savefileId 
   * @returns {boolean} 
   * @memberof DataManager
   */
  static saveGame(savefileId: number): boolean;
  static loadGame(savefileId: number): boolean;
  /**
   * Returns the last accessed save fileId upon
   * saving or loading the game.
   * @static
   * @returns {number} 
   * @memberof DataManager
   */
  static lastAccessedSavefileId(): number;
  static saveGameWithoutRescue(savefileId: number): boolean;
  static loadGameWithoutRescue(savefileId: number): boolean;
  static selectSavefileForNewGame(): void;
  /**
   * Creates a new save file on the global
   * save file information containing important
   * data such as play time, characters, timestamp.
   * @static
   * @memberof DataManager
   */
  static makeSavefileInfo(): void;
  /**
   * Creates the save file contents when saving your game.
   * Good for aliasing when you want to add more data
   * to the game's save contents.
   * @static
   * @returns {object} 
   * @memberof DataManager
   */
  static makeSaveContents(): object;
  /**
   * Extracts the save file contents into the game's
   * variables. An excellent method to alias when you
   * wish to extend the game's save contents for a plugin.
   * @static
   * @param {object} contents 
   * @memberof DataManager
   */
  static extractSaveContents(contents: object): void;
}

/**
 * The static class that handles BGM, BGS, ME, and SE.
 * 
 * @interface AudioManagerStatic
 */
interface AudioManagerStatic {
    _bgmVolume: number;
    _bgsVolume: number;
    _meVolume: number;
    _seVolume: number;
    _currentBgm: MV.AudioParameters;
    _currentBgs: MV.AudioParameters;
    _bgmBuffer: Html5AudioStatic | WebAudio;
    _bgsBuffer: Html5AudioStatic | WebAudio;
    _meBuffer: Html5AudioStatic | WebAudio;
    _seBuffers: Array<Html5AudioStatic | WebAudio>;
    _staticBuffers: Array<Html5AudioStatic | WebAudio>;
    _replayFadeTime: number;
    _path: string;
    _blobUrl: string;

    bgmVolume: number;
    bgsVolume: number;
    meVolume: number;
    seVolume: number;

    playBgm(bgm: MV.AudioParameters, pos?: number): void;
    replayBgm(bgm: MV.AudioParameters): void;
    isCurrentBgm(bgm: MV.AudioParameters): boolean;
    updateBgmParameters(bgm: MV.AudioParameters): void;
    updateCurrentBgm(bgm: MV.AudioParameters, pos: number): void;
    stopBgm(): void;
    fadeOutBgm(duration: number): void;
    fadeInBgm(duration: number): void;

    playBgs(bgs: MV.AudioParameters, pos?: number): void;
    replayBgs(bgs: MV.AudioParameters): void;
    isCurrentBgs(bgs: MV.AudioParameters): boolean;
    updateBgsParameters(bgs: MV.AudioParameters): void;
    updateCurrentBgs(bgs: MV.AudioParameters, pos: number): void;
    stopBgs(): void;
    fadeOutBgs(duration: number): void;
    fadeInBgs(duration: number): void;
    playMe(me: MV.AudioParameters): void;
    updateMeParameters(me: MV.AudioParameters): void;
    fadeOutMe(duration: number): void;
    stopMe(): void;
    playMe(me: MV.AudioParameters): void;
    updateMeParameters(me: MV.AudioParameters): void;
    fadeOutMe(duration: number): void;
    stopMe(): void;
    playSe(se: MV.AudioParameters): void;
    updateSeParameters(buffer: MV.AudioParameters, se: MV.AudioParameters): void;
    stopSe(): void;
    playStaticSe(se: MV.AudioParameters): void;
    loadStaticSe(se: MV.AudioParameters): void;
    isStaticSe(se: MV.AudioParameters): boolean;
    stopAll(): void;
    saveBgm(): MV.AudioParameters;
    saveBgs(): MV.AudioParameters;
    makeEmptyAudioObject(): MV.AudioParameters;
    createBuffer(): Html5AudioStatic | WebAudio;
    updateBufferParameters(buffer: MV.AudioParameters, configVolume: number, audio: MV.AudioParameters): void;
    audioFileExt(): string;
    shouldUseHtml5Audio(): boolean;
    checkErrors(): void;
    checkWebAudioError(): void;
    checkWebAudioError(webAudio: Html5AudioStatic | WebAudio): void;
    playEncryptedBgm(bgm: MV.AudioParameters, pos?: number): void;
    createDecryptBuffer(url: string, bgm: MV.AudioParameters, pos?: number): void;
}
declare var AudioManager: AudioManagerStatic;


/**
 * SoundManager
 * The static class that plays sound effects defined in the database
 * @interface SoundManagerStatic
 */
interface SoundManagerStatic {
    preloadImportantSounds(): void;
    loadSystemSound(n: number): void;
    playSystemSound(n: number): void;
    playCursor(): void;
    playOk(): void;
    playCancel(): void;
    playBuzzer(): void;
    playEquip(): void;
    playSave(): void;
    playLoad(): void;
    playBattleStart(): void;
    playEscape(): void;
    playEnemyAttack(): void;
    playEnemyDamage(): void;
    playEnemyCollapse(): void;
    playBossCollapse1(): void;
    playBossCollapse2(): void;
    playActorDamage(): void;
    playActorCollapse(): void;
    playRecovery(): void;
    playMiss(): void;
    playEvasion(): void;
    playMagicEvasion(): void;
    playReflection(): void;
    playShop(): void;
    playUseItem(): void;
    playUseSkill(): void;
}
declare var SoundManager: SoundManagerStatic;

/**
 * The static class that manages the
 * battle process.
 * @interface BattleManagerStatic
 */
interface BattleManagerStatic {
    _phase: string;
    _canEscape: boolean;
    _canLose: boolean;
    _battleTest: boolean;
    _eventCallback: () => void;
    _preemptive: boolean;
    _surprise: boolean;
    _actorIndex: number;
    _actionForcedBattler: Game_Battler;
    _mapBgm: MV.AudioParameters;
    _mapBgs: MV.AudioParameters;
    _actionBattlers: Array<Game_Battler>;
    _subject: Game_Battler;
    _action: Game_Action;
    _targets: Array<Game_Battler>;
    _logWindow: Window_BattleLog;
    _statusWindow: Window_BattleStatus;
    _spriteset: Spriteset_Battle;
    _escapeRatio: number;
    _escaped: boolean;
    _rewards: MV.BattleRewards;

    setup(troopId: number, canEscape: boolean, canLose: boolean): void;
    initMembers(): void;
    isBattleTest(): boolean;
    setBattleTest(battleTest: boolean): void;
    setEventCallback(callback: () => void): void;
    setLogWindow(logWindow: Window_BattleLog): void;
    setStatusWindow(statusWindow: Window_BattleStatus): void;
    setSpriteset(spriteset: Spriteset_Battle): void;
    onEncounter(): void;
    ratePreemptive(): number;
    rateSurprise(): number;
    saveBgmAndBgs(): void;
    playBattleBgm(): void;
    playVictoryMe(): void;
    playDefeatMe(): void;
    replayBgmAndBgs(): void;
    makeEscapeRatio(): void;
    update(): void;
    updateEvent(): boolean;
    updateEventMain(): boolean;
    isBusy(): boolean;
    isInputting(): boolean;
    isInTurn(): boolean;
    isTurnEnd(): boolean;
    isAborting(): boolean;
    isBattleEnd(): boolean;
    canEscape(): boolean;
    canLose(): boolean;
    isEscaped(): boolean;
    actor(): Game_Actor;
    clearActor(): void;
    changeActor(newActorIndex: number, lastActorActionState: string): void;
    startBattle(): void;
    displayStartMessages(): void;
    startInput(): void;
    inputtingAction(): Game_Action;
    selectNextCommand(): void;
    selectPreviousCommand(): void;
    refreshStatus(): void;
    startTurn(): void;
    updateTurn(): void;
    processTurn(): void;
    endTurn(): void;
    updateTurnEnd(): void;
    getNextSubject(): Game_Battler;
    allBattleMembers(): Array<Game_Battler>;
    makeActionOrders(): void;
    startAction(): void;
    updateAction(): void;
    endAction(): void;
    invokeAction(): void;
    invokeNormalAction(): void;
    invokeCounterAttack(): void;
    invokeMagicReflection(): void;
    applySubstitute(target: Game_Battler): Game_Battler;
    checkSubstitute(target: Game_Battler): boolean;
    isActionForced(): boolean;
    forceAction(battler: Game_Battler): void;
    processForcedAction(): void;
    abort(): void;
    checkBattleEnd(): boolean;
    checkAbort(): boolean;
    processVictory(): void;
    processEscape(): boolean;
    processAbort(): void;
    processDefeat(): void;
    endBattle(result: number): void;
    updateBattleEnd(): void;
    makeRewards(): void;
    displayVictoryMessage(): void;
    displayDefeatMessage(): void;
    displayEscapeSuccessMessage(): void;
    displayEscapeFailureMessage(): void;
    displayRewards(): void;
    displayExp(): void;
    displayGold(): void;
    displayDropItems(): void;
    gainRewards(): void;
    gainExp(): void;
    gainGold(): void;
    gainDropItems(): void;
}
declare var BattleManager: BattleManagerStatic;

interface ConfigManagerStatic extends MV.ConfigData {
    load(): void;
    save(): void;
    makeData(): MV.ConfigData;
    applyData(config: MV.ConfigData): void;
    readFlag(config: MV.ConfigData, name: string): boolean;
    readVolume(config: MV.ConfigData, name: string): number;
}
declare var ConfigManager: ConfigManagerStatic;

/**
 * ImageManager
 * The static class that loads iamges, create bitmap objects and retains them.
 * @interface ImageManagerStatic
 */
interface ImageManagerStatic {
    cache: CacheMap;

    /**
     * Loads a Bitmap object from the 'img/animations/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadAnimation(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/battlebacks1/' folder
     *  and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadBattleback1(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/battlebacks2/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadBattleback2(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/enemies/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadEnemy(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/characters/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadCharacter(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/faces/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadFace(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/parallaxes/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadParallax(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/pictures/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadPicture(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/sv_actors/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadSvActor(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/sv_enemies/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadSvEnemy(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from 'img/system/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadSystem(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/tilesets/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadTileset(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/titles1/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadTitle1(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from the 'img/titles2/' folder
     * and returns it.
     * @param {string} filename 
     * @param {number} [hue] 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadTitle2(filename: string, hue?: number): Bitmap;
    /**
     * Loads a Bitmap object from any folder and returns it.
     * 
     * @param {string} folder 
     * @param {string} filename 
     * @param {number} hue 
     * @param {boolean} smooth 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadBitmap(folder: string, filename: string, hue: number, smooth: boolean): Bitmap;
    /**
     * Loads an empty Bitmap object and returns it.
     * 
     * @param {string} path 
     * @param {number} hue 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadEmptyBitmap(path: string, hue: number): Bitmap;
    /**
     * Loads a Bitmap object given a path
     * and returns it.
     * @param {string} path 
     * @param {number} hue 
     * @returns {Bitmap} 
     * @memberof ImageManagerStatic
     */
    loadNormalBitmap(path: string, hue: number): Bitmap;
    /**
     * Clears the image cache in RPGMakerMV.
     * 
     * @memberof ImageManagerStatic
     */
    clear(): void;
    /**
     * Returns true if the image cache
     * is ready.
     * @returns {boolean} 
     * @memberof ImageManagerStatic
     */
    isReady(): boolean;
    /**
     * Returns true if the given filename
     * is an object character. Must contain
     * a  '!' in the file name to be an
     * object character.
     * @param {string} filename 
     * @returns {boolean} 
     * @memberof ImageManagerStatic
     */
    isObjectCharacter(filename: string): boolean;
    /**
     * Returns true if the given filename is
     * a large character. Must contain a '$'
     * in the file name to be a large character.
     * @param {string} filename 
     * @returns {boolean} 
     * @memberof ImageManagerStatic
     */
    isBigCharacter(filename: string): boolean;
    isZeroParallax(filename: string): boolean;
}
declare var ImageManager: ImageManagerStatic;

interface SceneManagerStatic {
    _scene: Scene_Base;
    _nextScene: Scene_Base;
    _stack: Array<() => void>;
    _stopped: boolean;
    _sceneStarted: boolean;
    _exiting: boolean;
    _previousClass: () => void;
    _backgroundBitmap: Bitmap;
    _screenWidth: number;
    _screenHeight: number;
    _boxWidth: number;
    _boxHeight: number;
    _deltaTime: number;
    _currentTime: number;
    _accumulator: number;

    run(sceneClass: () => void): void;
    initialize(): void;
    initGraphics(): void;
    preferableRendererType(): string;
    shouldUseCanvasRenderer(): boolean;
    checkWebGL(): void;
    checkFileAccess(): void;
    initAudio(): void;
    initInput(): void;
    initNwjs(): void;
    checkPluginErrors(): void;
    setupErrorHandlers(): void;
    requestUpdate(): void;
    update(): void;
    terminate(): void;
    onError(e: Event): void;
    onKeyDown(event: KeyboardEvent): void;
    catchException(e: Event): void;
    tickStart(): void;
    tickEnd(): void;
    updateInputData(): void;
    updateMain(): void;
    changeScene(): void;
    updateScene(): void;
    renderScene(): void;
    onSceneCreate(): void;
    onSceneStart(): void;
    onSceneLoading(): void;
    isSceneChanging(): boolean;
    isCurrentSceneBusy(): boolean;
    isCurrentSceneStarted(): boolean;
    isNextScene(sceneClass: () => void): boolean;
    isPreviousScene(sceneClass: () => void): boolean;
    goto(sceneClass: () => void): void;
    push(sceneClass: () => void): void;
    pop(): void;
    exit(): void;
    clearStack(): void;
    stop(): void;
    prepareNextScene(): void;
    snap(): Bitmap;
    snapForBackground(): void;
    backgroundBitmap(): Bitmap;
    updateManagers(ticks: number, delta: number): void;
}
declare var SceneManager: SceneManagerStatic;

/**
 * StorageManager
 * The static class that manages storage saving game data.
 * @interface StorageManagerStatic
 */
interface StorageManagerStatic {
    save(savefileId: number, json: string): void;
    load(savefileId: number): string;
    exists(savefileId: number): boolean;
    remove(savefileId: number): void;
    backup(savefileId: number): void;
    backupExists(savefileId: number): boolean;
    cleanBackup(savefileId: number): boolean;
    restoreBackup(savefileId: number): void;
    isLocalMode(): boolean;
    saveToLocalFile(savefileId: number, json: string): void;
    loadFromLocalFile(savefileId: number): string;
    loadFromLocalBackupFile(savefileId: number): string;
    localFileBackupExists(savefileId: number): boolean;
    localFileExists(savefileId: number): boolean;
    removeLocalFile(savefileId: number): void;
    saveToWebStorage(savefileId: number, json: string): void;
    loadFromWebStorage(savefileId: number): string;
    loadFromWebStorageBackup(savefileId: number): string;
    webStorageBackupExists(savefileId: number): boolean;
    webStorageExists(savefileId: number): boolean;
    removeWebStorage(savefileId: number): void;
    localFileDirectoryPath(): string;
    localFilePath(savefileId: number): string;
    webStorageKey(savefileId: number): string;
}
declare var StorageManager: StorageManagerStatic;

/**
 * TextManager
 * The static class that handles terms and messages.
 * @interface TextManagerStatic
 */
interface TextManagerStatic {
    currencyUnit: string;
    level: string;
    levelA: string;
    hp: string;
    hpA: string;
    mp: string;
    mpA: string;
    tp: string;
    tpA: string;
    exp: string;
    expA: string;
    fight: string;
    escape: string;
    attack: string;
    guard: string;
    item: string;
    skill: string;
    equip: string;
    status: string;
    formation: string;
    save: string;
    gameEnd: string;
    options: string;
    weapon: string;
    armor: string;
    keyItem: string;
    equip2: string;
    optimize: string;
    clear: string;
    newGame: string;
    continue_: string;
    toTitle: string;
    cancel: string;
    buy: string;
    sell: string;
    alwaysDash: string;
    commandRemember: string;
    bgmVolume: string;
    bgsVolume: string;
    meVolume: string;
    seVolume: string;
    possession: string;
    expTotal: string;
    expNext: string;
    saveMessage: string;
    loadMessage: string;
    file: string;
    partyName: string;
    emerge: string;
    preemptive: string;
    surprise: string;
    escapeStart: string;
    escapeFailure: string;
    victory: string;
    defeat: string;
    obtainExp: string;
    obtainGold: string;
    obtainItem: string;
    levelUp: string;
    obtainSkill: string;
    useItem: string;
    criticalToEnemy: string;
    criticalToActor: string;
    actorDamage: string;
    actorRecovery: string;
    actorGain: string;
    actorLoss: string;
    actorDrain: string;
    actorNoDamage: string;
    actorNoHit: string;
    enemyDamage: string;
    enemyRecovery: string;
    enemyGain: string;
    enemyLoss: string;
    enemyDrain: string;
    enemyNoDamage: string;
    enemyNoHit: string;
    evasion: string;
    magicEvasion: string;
    magicReflection: string;
    counterAttack: string;
    substitute: string;
    buffAdd: string;
    debuffAdd: string;
    buffRemove: string;
    actionFailure: string;
    basic(basicId: number): string;
    param(paramId: number): string;
    command(commandId: number): string;
    message(messageId: string): string;
    getter(method: string, param: number): string;
}
declare var TextManager: TextManagerStatic;

/**
 * PluginManager
 * The static class that manages plugins.
 * @interface PluginManagerStatic
 */
interface PluginManagerStatic {
    _path: string;
    _scripts: Array<string>;
    _errorUrls: Array<string>;
    _parameters: {[key: string]: {[key: string]: string}};

    setup(plugins: Array<MV.PluginSettings>): void;
    /**
     * Checks for errors in the plugins.
     * 
     * @memberof PluginManagerStatic
     */
    checkErrors(): void;
    parameters(name: string): any;
    setParameters(name: string, parameters: {[key: string]: string}): void;
    loadScript(name: string): void;
    onError(e: Event): void;
}
declare var PluginManager: PluginManagerStatic;

