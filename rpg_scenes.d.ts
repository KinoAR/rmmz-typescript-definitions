
declare class Scene_Base extends Stage {
    protected _active: boolean;
    protected _fadeSign: number;
    protected _fadeDuration: number;
    protected _fadeSprite: ScreenSprite;
    protected _imageReservationId: any | number;
    protected _windowLayer: WindowLayer;

    /**
     * Attach a reservation to the reserve queue
     * 
     * @memberof Scene_Base
     */
    attachReservation(): void;
    /**
     * Remove the reservation from the reserve queue.
     * 
     * @memberof Scene_Base
     */
    detachReservation(): void;
    create(): void;
    /**
     * Returns whether the scene is active or not.
     * 
     * @returns {boolean} 
     * @memberof Scene_Base
     */
    isActive(): boolean;
    /**
     * Returns if the scene is ready to start or not.
     * 
     * @returns {boolean} 
     * @memberof Scene_Base
     */
    isReady(): boolean;
    start(): void;
    update(): void;
    stop(): void;
    /**
     * Returns a boolean value.
     * Checks if the Scene is busy processing an event or
     * other conditions.
     * @returns {boolean} 
     * @memberof Scene_Base
     */
    isBusy(): boolean;
    /**
     * Terminates/ends the scene.
     * 
     * @memberof Scene_Base
     */
    terminate(): void;
    createWindowLayer(): void;
    /**
    * Add the children window to the windowLayer processing.
    * 
    * @method addWindow
    * @param {Window_Base}
    * @instance 
    * @memberof Scene_Base
    */
    addWindow(window: Window_Base): void;
    /**
    * Request a fadeIn screen process.
    * 
    * @method startFadeIn
    * @param {Number} [duration=30] The time the process will take for fadeIn the screen
    * @param {Boolean} [white=false] If true the fadein will be process with a white color else it's will be black
    * 
    * @instance 
    * @memberof Scene_Base
    */
    startFadeIn(duration: number, white: boolean): void;
    /**
    * Request a fadeOut screen process.
    * 
    * @method startFadeOut
    * @param {Number} [duration=30] The time the process will take for fadeOut the screen
    * @param {Boolean} [white=false] If true the fadeOut will be process with a white color else it's will be black
    * 
    * @instance 
    * @memberof Scene_Base
    */
    startFadeOut(duration: number, white: boolean): void;
    createFadeSprite(white: boolean): void;
    updateFade(): void;
    updateChildren(): void;
    /**
     * Pops the current scene and returns to the previous
     * scene if available.
     * @memberof Scene_Base
     */
    popScene(): void;
    checkGameover(): void;
    fadeOutAll(): void;
    fadeSpeed(): number;
    slowFadeSpeed(): number;
}

/**
 * The scene class for initialize the entire game.
 * 
 * @class Scene_Boot
 * @extends {Scene_Base}
 */
declare class Scene_Boot extends Scene_Base {
    protected _startDate: Date;

    /**
     * Loads the system images upon booting the game.
     * 
     * @memberof Scene_Boot
     */
    loadSystemImages(): void;
    loadSystemWindowImage(): void;
    /**
     * Returns true if the game font is loaded.
     * 
     * @returns {boolean} 
     * @memberof Scene_Boot
     */
    isGameFontLoaded(): boolean;
    updateDocumentTitle(): void;
    checkPlayerLocation(): void;
}

/**
 * The scene class of the title screen.
 * 
 * @class Scene_Title
 * @extends {Scene_Base}
 */
declare class Scene_Title extends Scene_Base {
    protected _commandWindow: Window_TitleCommand;
    protected _backSprite1: Sprite;
    protected _backSprite2: Sprite;
    protected _gameTitleSprite: Sprite;

    createBackground(): void;
    createForeground(): void;
    drawGameTitle(): void;
    centerSprite(sprite: Sprite): void;
    createCommandWindow(): void;
    commandNewGame(): void;
    commandContinue(): void;
    commandOptions(): void;
    /**
     * Plays the title screen music
     * upon enter the title scene.
     * @memberof Scene_Title
     */
    playTitleMusic(): void;
}

/**
 * The scene class of the map screen.
 * 
 * @class Scene_Map
 * @extends {Scene_Base}
 */
declare class Scene_Map extends Scene_Base {
    protected _waitCount: number;
    protected _encounterEffectDuration: number;
    protected _mapLoaded: boolean;
    protected _touchCount: number;
    protected _transfer: boolean;

    protected _spriteset: Spriteset_Map;
    protected _mapNameWindow: Window_MapName;
    protected _scrollTextWindow: Window_ScrollText;
    protected _messageWindow: Window_Message;

    menuCalling: boolean;

    /**
     * Handler for when the map scene is loaded.
     * 
     * @memberof Scene_Map
     */
    onMapLoaded(): void;
    /**
     * Speeds up the updateMain if
     * the map scene is in fast forward mode.
     * @memberof Scene_Map
     */
    updateMainMultiply(): void;
    /**
     * Updates the main $game globals
     * if the map scene is active.
     * @memberof Scene_Map
     */
    updateMain(): void;
    /**
     * Returns true if the player
     * is holding down the confirm button to
     * fast forward through text.
     * @returns {boolean} 
     * @memberof Scene_Map
     */
    isFastForward(): boolean;
    /**
     * Stops the map scene and prepares
     * for a new scene.
     * @memberof Scene_Map
     */
    stop(): void;
    needsFadeIn(): boolean;
    needsSlowFadeOut(): boolean;
    updateWaitCount(): boolean;
    /**
     * Constantly checks if the player
     * is touching the map, then processes
     * a map touch for mouse based player character movement.
     * @memberof Scene_Map
     */
    updateDestination(): void;
    /**
     * Returns true if the map scene is
     * active and the player can move. Used for
     * mouse movement on the map scene.
     * @returns {boolean} 
     * @memberof Scene_Map
     */
    isMapTouchOk(): boolean;
    /**
     * Processes the map touch and turns it
     * into coordinates for the player character to move to.
     * @memberof Scene_Map
     */
    processMapTouch(): void;
    isSceneChangeOk(): boolean;
    updateScene(): void;
    createDisplayObjects(): void;
    createSpriteset(): void;
    /**
     * Creates all the windows on the map scene
     * contains other window creation methods.
     * @memberof Scene_Map
     */
    createAllWindows(): void;
    createMapNameWindow(): void;
    /**
     * Creates the map name window within
     * the map scene; display map name.
     * @memberof Scene_Map
     */
    /**
     * Creates the message window for displaying
     * text on the map scene. Commonly used with the
     * showText command.
     * @memberof Scene_Map
     */
    createMessageWindow(): void;
    createScrollTextWindow(): void;
    /**
     * Checks if the player is transferring;
     * if the player is transferring, move to a new map scene.
     * @memberof Scene_Map
     */
    updateTransferPlayer(): void;
    updateEncounter(): void;
    updateCallMenu(): void;
    /**
     * Returns true if the menu is enabled
     * in the database.
     * @returns {boolean} 
     * @memberof Scene_Map
     */
    isMenuEnabled(): boolean;
    /**
     * Returns true if the menu is called
     * via an input trigger.
     * @returns {boolean} 
     * @memberof Scene_Map
     */
    isMenuCalled(): boolean;
    /**
     * Calls the standard RPGMakerMV menu scene.
     * 
     * @memberof Scene_Map
     */
    callMenu(): void;
    /**
     * Checks if debug is called via input trigger
     * and starts the debug scene.
     * 
     * @memberof Scene_Map
     */
    updateCallDebug(): void;
    /**
     * Returns true if the debug
     * scene is called via button press and in play test mode.
     * @returns {boolean} 
     * @memberof Scene_Map
     */
    isDebugCalled(): boolean;
    fadeInForTransfer(): void;
    fadeOutForTransfer(): void;
    launchBattle(): void;
    stopAudioOnBattleStart(): void;
    startEncounterEffect(): void;
    updateEncounterEffect(): void;
    /**
     * Takes a snapshot of the map scene for displaying
     * on the battle scene if no battleback is present.
     * @memberof Scene_Map
     */
    snapForBattleBackground(): void;
    startFlashForEncounter(duration: number): void;
    encounterEffectSpeed(): number;
}

/**
 * The super class of all menu-type scenes.
 * 
 * @class Scene_MenuBase
 * @extends {Scene_Base}
 */
declare class Scene_MenuBase extends Scene_Base {
    protected _actor: Game_Actor;
    protected _backgroundSprite: Sprite;
    protected _helpWindow: Window_Help;

    actor(): Game_Actor;
    updateActor(): void;
    createBackground(): void;
    setBackgroundOpacity(opacity: number): void;
    createHelpWindow(): void;
    nextActor(): void;
    previousActor(): void;
    onActorChange(): void;
}


/**
 * -----------------------------------------------------------------------------
 * Scene_Menu
 *
 * The scene class of the menu screen.
 * @class Scene_Menu
 * @extends {Scene_MenuBase}
 */
declare class Scene_Menu extends Scene_MenuBase {
    protected _commandWindow: Window_MenuCommand;
    protected _goldWindow: Window_Gold;
    protected _statusWindow: Window_MenuStatus;

    /**
     * Creates the main menu window on the 
     * menu scene; contains the commands for
     * menu usage.
     * @memberof Scene_Menu
     */
    createCommandWindow(): void;
    /**
     * Creates the gold window on the menu scene.
     * 
     * @memberof Scene_Menu
     */
    createGoldWindow(): void;
    /**
     * Creates the status window on the menu scene.
     * 
     * @memberof Scene_Menu
     */
    createStatusWindow(): void;
    /**
     * Handler for what to do when the 'item'
     * command is clicked.
     * @memberof Scene_Menu
     */
    commandItem(): void;
    commandPersonal(): void;
    commandFormation(): void;
    /**
     * Handler for what to do when the 'option'
     * command is clicked.
     * @memberof Scene_Menu
     */
    commandOptions(): void;
    /**
     * Handler for what to do when the 'save'
     * command is clicked.
     * @memberof Scene_Menu
     */
    commandSave(): void;
    /**
     * Handler for what to do when the 'game end'
     * command is clicked.
     * @memberof Scene_Menu
     */
    commandGameEnd(): void;
    onPersonalOk(): void;
    onPersonalCancel(): void;
    onFormationOk(): void;
    onFormationCancel(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_ItemBase
 *
 * The superclass of Scene_Item and Scene_Skill.
 * @class Scene_ItemBase
 * @extends {Scene_MenuBase}
 */
declare class Scene_ItemBase extends Scene_MenuBase {
    protected _actorWindow: Window_MenuActor;
    protected _itemWindow: Window_Selectable;

    createActorWindow(): void;
    item(): void;
    user(): Game_Actor;
    isCursorLeft(): boolean;
    showSubWindow(window: Window_Base): void;
    hideSubWindow(window: Window_Base): void;
    onActorOk(): void;
    onActorCancel(): void;
    determineItem(): void;
    useItem(): void;
    activateItemWindow(): void;
    itemTargetActors(): Game_Actor;
    canUse(): boolean;
    isItemEffectsValid(): boolean;
    applyItem(): void;
    checkCommonEvent(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Item
 *
 * The scene class of the item screen.
 * @class Scene_Item
 * @extends {Scene_ItemBase}
 */
declare class Scene_Item extends Scene_ItemBase {
    protected _categoryWindow: Window_ItemCategory;

    /**
     * Creates the category window on the
     * item scene.
     * @memberof Scene_Item
     */
    createCategoryWindow(): void;
    /**
     * Creates the item window on the item
     * scene.
     * @memberof Scene_Item
     */
    createItemWindow(): void;
    /**
     * Handler for when a cataegory is selected
     * on the item scene.
     * @memberof Scene_Item
     */
    onCategoryOk(): void;
    /**
     * Handler for when an item is selected
     * on the item scene.
     * @memberof Scene_Item
     */
    onItemOk(): void;
    /**
     * Handler for when an item selection
     * is canceled on the item scene.
     * @memberof Scene_Item
     */
    onItemCancel(): void;
    /**
     * Plays a sound effect when the
     * item is confirmed.
     * @memberof Scene_Item
     */
    playSeForItem(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Skill
 *
 * The scene class of the skill screen.
 * @class Scene_Skill
 * @extends {Scene_ItemBase}
 */
declare class Scene_Skill extends Scene_ItemBase {
    protected _skillTypeWindow: Window_SkillType;

    /**
     * Creates the window for skill types
     * within the skill scene.
     * @memberof Scene_Skill
     */
    createSkillTypeWindow(): void;
    /**
     * Creates the status window within
     * the skill scene.
     * @memberof Scene_Skill
     */
    createStatusWindow(): void;
    /**
     * Creates the item window
     * within the skill scene.
     * @memberof Scene_Skill
     */
    createItemWindow(): void;
    refreshActor(): void;
    /**
     * Handler for when a skill is
     * selected/confirmed within the skill scene.
     * @memberof Scene_Skill
     */
    commandSkill(): void;
    onItemCancel(): void;
    /**
     * Plays a sound effect on item
     * confirmation withiin the skill scene.
     * @memberof Scene_Skill
     */
    playSeForItem(): void;
    /**
     * Handler for when an an actor is
     * changed within the skill scene.
     * @memberof Scene_Skill
     */
    onActorChange(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Equip
 *
 * The scene class of the equipment screen.
 * @class Scene_Equip
 * @extends Scene_MenuBase
 */
declare class Scene_Equip extends Scene_MenuBase {
    protected _statusWindow: Window_EquipStatus;
    protected _commandWindow: Window_EquipCommand;
    protected _slotWindow: Window_EquipSlot;
    protected _itemWindow: Window_EquipItem;

    createStatusWindow(): void;
    createCommandWindow(): void;
    createSlotWindow(): void;
    createItemWindow(): void;
    refreshActor(): void;
    commandEquip(): void;
    commandOptimize(): void;
    commandClear(): void;
    onSlotOk(): void;
    onSlotCancel(): void;
    onItemOk(): void;
    onItemCancel(): void;
    onActorChange(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Status
 *
 * The scene class of the status screen.
 * @class Scene_Status
 * @extends {Scene_MenuBase}
 */
declare class Scene_Status extends Scene_MenuBase {
    protected _statusWindow: Window_Status;

    refreshActor(): void;
    onActorChange(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Options
 *
 * The scene class of the options screen.
 * @class Scene_Options
 * @extends {Scene_MenuBase}
 */
declare class Scene_Options extends Scene_MenuBase {
    protected _optionsWindow: Window_Options;

    createOptionsWindow(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_File
 *
 * The superclass of Scene_Save and Scene_Load.
 * @class Scene_File
 * @extends {Scene_MenuBase}
 */
declare class Scene_File extends Scene_MenuBase {
    protected _listWindow: Window_SavefileList;

    /**
     * Returns the current savefileId.
     * 
     * @memberof Scene_File
     */
    savefileId(): void;
    createHelpWindow(): void;
    createListWindow(): void;
    /**
     * The current mode of the scene;
     * the modes are 'save' or 'load'.
     * @memberof Scene_File
     */
    mode(): void;
    activateListWindow(): void;
    helpWindowText(): string;
    /**
     * Returns the index of the first
     * save file.
     * @returns {number} 
     * @memberof Scene_File
     */
    firstSavefileIndex(): number;
    /**
     * Handler for when a 
     * save file is selected within the file scene.
     * @memberof Scene_File
     */
    onSavefileOk(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Save
 *
 * The scene class of the save screen.
 * @class Scene_Save
 * @extends {Scene_File}
 */
declare class Scene_Save extends Scene_File {
    /**
     * Returns the mode of the
     * save scene.
     * @returns {string} 
     * @memberof Scene_Save
     */
    mode(): string;
    helpWindowText(): string;
    /**
     * Returns the index of the first
     * save file within the save scene.
     * @returns {number} 
     * @memberof Scene_Save
     */
    firstSavefileIndex(): number;
    /**
     * Handler for when a save file
     * is confirmed within the save scene.
     * @memberof Scene_Save
     */
    onSavefileOk(): void;
    /**
     * Handler for when save is a success.
     * 
     * @memberof Scene_Save
     */
    onSaveSuccess(): void;
    /**
     * Handler for when save fails.
     * 
     * @memberof Scene_Save
     */
    onSaveFailure(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Load
 *
 * The scene class of the load screen.
 * @class Scene_Load
 * @extends {Scene_File}
 */
declare class Scene_Load extends Scene_File {
    protected _loadSuccess: boolean;

    /**
     * Returns the mode of the
     * load scene.
     * @returns {string} 
     * @memberof Scene_Load
     */
    mode(): string;
    /**
     * Returns the help window text on the
     * game load scene.
     * @returns {string} 
     * @memberof Scene_Load
     */
    helpWindowText(): string;
    firstSavefileIndex(): number;
    onSavefileOk(): void;
    onLoadSuccess(): void;
    onLoadFailure(): void;
    reloadMapIfUpdated(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_GameEnd
 *
 * The scene class of the game end screen.
 * @class Scene_GameEnd
 * @extends {Scene_MenuBase}
 */
declare class Scene_GameEnd extends Scene_MenuBase {
    protected _commandWindow: Window_GameEnd;

    stop(): void;
    /**
     * Creates the background for
     * the game end scene.
     * @memberof Scene_GameEnd
     */
    createBackground(): void;
    /**
     * Creates the command window
     * for the game end screen.
     * @memberof Scene_GameEnd
     */
    createCommandWindow(): void;
    /**
     * Handler for when to title
     * is clicked within the game end screen.
     * @memberof Scene_GameEnd
     */
    commandToTitle(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Shop
 *
 * The scene class of the shop screen.
 * @class Scene_Shop
 * @extends {Scene_MenuBase}
 */
declare class Scene_Shop extends Scene_MenuBase {
    protected _goods: Array<Array<any>>;
    protected _purchaseOnly: boolean;
    protected _item: RPG.BaseItem;

    protected _goldWindow: Window_Gold;
    protected _commandWindow: Window_ShopCommand;
    protected _dummyWindow: Window_Base;
    protected _numberWindow: Window_ShopNumber;
    protected _statusWindow: Window_ShopStatus;
    protected _buyWindow: Window_ShopBuy;
    protected _categoryWindow: Window_ItemCategory;
    protected _sellWindow: Window_ShopSell;
    protected _helpWindow: Window_Help;

    prepare(goods: Array<Array<any>>, purchaseOnly: boolean): void;
    createGoldWindow(): void;
    createCommandWindow(): void;
    createDummyWindow(): void;
    createNumberWindow(): void;
    createStatusWindow(): void;
    createBuyWindow(): void;
    createCategoryWindow(): void;
    createSellWindow(): void;
    activateBuyWindow(): void;
    activateSellWindow(): void;
    commandBuy(): void;
    commandSell(): void;
    onBuyOk(): void;
    onBuyCancel(): void;
    onCategoryOk(): void;
    onCategoryCancel(): void;
    onSellOk(): void;
    onSellCancel(): void;
    onNumberOk(): void;
    onNumberCancel(): void;
    doBuy(number: number): void;
    doSell(number: number): void;
    endNumberInput(): void;
    maxBuy(): number;
    maxSell(): number;
    /**
     * Returns the player gold within
     * the shop scene.
     * @returns {number} 
     * @memberof Scene_Shop
     */
    money(): number;
    /**
     * Returns the currency unit of the
     * game within the shop scene.
     * @returns {string} 
     * @memberof Scene_Shop
     */
    currencyUnit(): string;
    /**
     * Returns the buying price for the current item.
     * 
     * @returns {number} 
     * @memberof Scene_Shop
     */
    buyingPrice(): number;
    /**
     * Returns the selling price for the current item.
     * 
     * @returns {number} 
     * @memberof Scene_Shop
     */
    sellingPrice(): number;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Name
 *
 * The scene class of the name input screen.
 * @class Scene_Name
 * @extends {Scene_MenuBase}
 */
declare class Scene_Name extends Scene_MenuBase {
    prepare(actorId: number, maxLength: number): void;
    createEditWindow(): void;
    createInputWindow(): void;
    onInputOk(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Debug
 *
 * The scene class of the debug screen.
 * @class Scene_Debug
 * @extends {Scene_MenuBase}
 */
declare class Scene_Debug extends Scene_MenuBase {
    createRangeWindow(): void;
    createEditWindow(): void;
    createDebugHelpWindow(): void;
    onRangeOk(): void;
    onEditCancel(): void;
    refreshHelpWindow(): void;
    /**
     * Returns the help text within the 
     * debug scene.
     * @returns {string} 
     * @memberof Scene_Debug
     */
    helpText(): string;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Battle
 *
 * The scene class of the battle screen.
 * @class Scene_Battle
 * @extends {Scene_Base}
 */
declare class Scene_Battle extends Scene_Base {
    protected _spriteset: Spriteset_Battle;
    protected _statusWindow: Window_BattleStatus;
    protected _partyCommandWindow: Window_PartyCommand;
    protected _actorCommandWindow: Window_ActorCommand;
    protected _skillWindow: Window_BattleSkill;
    protected _itemWindow: Window_BattleItem;
    protected _actorWindow: Window_BattleActor;
    protected _enemyWindow: Window_BattleEnemy;
    protected _logWindow: Window_BattleLog;
    protected _helpWindow: Window_Help;
    protected _messageWindow: Window_Message;
    protected _scrollTextWindow: Window_ScrollText;

    updateBattleProcess(): void;
    isAnyInputWindowActive(): boolean;
    changeInputWindow(): void;
    stop(): void;
    needsSlowFadeOut(): boolean;
    updateStatusWindow(): void;
    updateWindowPositions(): void;
    createDisplayObjects(): void;
    /**
     * Creates the spriteset within
     * the battle scene. This includes
     * sprites for actors, enemies, etc.
     * @memberof Scene_Battle
     */
    createSpriteset(): void;
    /**
     * Creates all the windows within the
     * battle scene.
     * @memberof Scene_Battle
     */
    createAllWindows(): void;
    createLogWindow(): void;
    createStatusWindow(): void;
    createPartyCommandWindow(): void;
    createActorCommandWindow(): void;
    createHelpWindow(): void;
    createSkillWindow(): void;
    createItemWindow(): void;
    createActorWindow(): void;
    createEnemyWindow(): void;
    createMessageWindow(): void;
    createScrollTextWindow(): void;
    refreshStatus(): void;
    startPartyCommandSelection(): void;
    commandFight(): void;
    commandEscape(): void;
    startActorCommandSelection(): void;
    commandAttack(): void;
    commandSkill(): void;
    commandGuard(): void;
    commandItem(): void;
    selectNextCommand(): void;
    selectPreviousCommand(): void;
    selectActorSelection(): void;
    onActorOk(): void;
    onActorCancel(): void;
    selectEnemySelection(): void;
    onEnemyOk(): void;
    onEnemyCancel(): void;
    onSkillOk(): void;
    onSkillCancel(): void;
    onItemOk(): void;
    onItemCancel(): void;
    onSelectAction(): void;
    endCommandSelection(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Scene_Gameover
 *
 * The scene class of the game over screen.
 * @class Scene_Gameover
 * @extends {Scene_Base}
 */
declare class Scene_Gameover extends Scene_Base {
    protected _backSprite: Sprite;

    stop(): void;
    /**
     * Plays the game over music
     * within the game over scene.
     * @memberof Scene_Gameover
     */
    playGameoverMusic(): void;
    /**
     * Creates the background of
     * the game over scene.
     * @memberof Scene_Gameover
     */
    createBackground(): void;
    isTriggered(): boolean;
    /**
     * Returns to the title scene (Scene_Title).
     * @memberof Scene_Gameover
     */
    gotoTitle(): void;
}
