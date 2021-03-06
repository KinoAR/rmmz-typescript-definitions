
declare class Scene_Base extends Stage {
    protected _active: boolean;
    protected _fadeSign: number;
    protected _fadeDuration: number;
    protected _fadeSprite: ScreenSprite;
    protected _imageReservationId: any | number;
    protected _windowLayer: WindowLayer;
    
    
    /**
     * Initializes the scene.
     * 
     * @memberof Scene_Base
     */
    initialize(): void 
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
    /**
     * Creates the scene's important properties.
     * 
     * @memberof Scene_Base
     */
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
    /**
     * Starts the scene.
     * 
     * @memberof Scene_Base
     */
    start(): void;
    /**
     * Updates the scene.
     * 
     * @memberof Scene_Base
     */
    update(): void;
    /**
     * Stops the scene.
     * 
     * @memberof Scene_Base
     */
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
    /**
     * Creates the window layer on the current scene
     * for displaying any and all windows.
     * @memberof Scene_Base
     */
    createWindowLayer(): void;
    /**
    * Adds a child window to the windowLayer process.
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
    /**
     * Updates the game's fade.
     * 
     * @memberof Scene_Base
     */
    updateFade(): void;
    updateChildren(): void;
    /**
     * Pops the current scene and returns to the previous
     * scene if available.
     * @memberof Scene_Base
     */
    popScene(): void;
    /**
     * Checks for game over.
     * 
     * @memberof Scene_Base
     */
    checkGameover(): void;
    fadeOutAll(): void;
    /**
     * Returns the fade speed.
     * 
     * @returns {number} 
     * @memberof Scene_Base
     */
    fadeSpeed(): number;
    /**
     * Returns the slow fade speed.
     * 
     * @returns {number} 
     * @memberof Scene_Base
     */
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
    /**
     * Loads the system window image for showing
     * all the windows in game.
     * @memberof Scene_Boot
     */
    loadSystemWindowImage(): void;
    /**
     * Returns true if the game font is loaded.
     * 
     * @returns {boolean} 
     * @memberof Scene_Boot
     */
    isGameFontLoaded(): boolean;
    updateDocumentTitle(): void;
    /**
     * Checks the player location upon booting the game.
     * 
     * @memberof Scene_Boot
     */
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

    /**
     * Creates the title scene background.
     * 
     * @memberof Scene_Title
     */
    createBackground(): void;
    /**
     * Creates the title screen foreground.
     * 
     * @memberof Scene_Title
     */
    createForeground(): void;
    /**
     * Draws the game title.
     * 
     * @memberof Scene_Title
     */
    drawGameTitle(): void;
    centerSprite(sprite: Sprite): void;
    /**
     * Creates the command window on the title scene.
     * 
     * @memberof Scene_Title
     */
    createCommandWindow(): void;
    /**
     * Handler for the new game command.
     * 
     * @memberof Scene_Title
     */
    commandNewGame(): void;
    /**
     * Handler for the continue command.
     * 
     * @memberof Scene_Title
     */
    commandContinue(): void;
    /**
     * Handler for the options command.
     * 
     * @memberof Scene_Title
     */
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
    /**
     * Returns true if the map scene needs a slow fade in.
     * 
     * @returns {boolean} 
     * @memberof Scene_Map
     */
    needsFadeIn(): boolean;
    /**
     * Returns true if the map scene needs a slow fade out.
     * 
     * @returns {boolean} 
     * @memberof Scene_Map
     */
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
    /**
     * Updates the scene.
     * 
     * @memberof Scene_Map
     */
    updateScene(): void;
    /**
     * Creates all the display objects on the map scene;
     * this includes the sprites, window layer, windows, and more.
     * @memberof Scene_Map
     */
    createDisplayObjects(): void;
    /**
     * Creates the spriteset on the map scene; 
     * this shows all the characters and events on the map.
     * @memberof Scene_Map
     */
    createSpriteset(): void;
    /**
     * Creates all the windows on the map scene
     * contains other window creation methods.
     * @memberof Scene_Map
     */
    createAllWindows(): void;
    /**
    * Creates the map name window within
    * the map scene; display map name.
    * @memberof Scene_Map
    */
    createMapNameWindow(): void;
    /**
     * Creates the message window for displaying
     * text on the map scene. Commonly used with the
     * showText command.
     * @memberof Scene_Map
     */
    createMessageWindow(): void;
    /**
     * Creates a scrolling text window on the map scene.
     * 
     * @memberof Scene_Map
     */
    createScrollTextWindow(): void;
    /**
     * Checks if the player is transferring;
     * if the player is transferring, move to a new map scene.
     * @memberof Scene_Map
     */
    updateTransferPlayer(): void;
    /**
     * Processes starting an encounter on the map scene.
     * 
     * @memberof Scene_Map
     */
    updateEncounter(): void;
    /**
     * Processes calling the menu on the map scene.
     * 
     * @memberof Scene_Map
     */
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
    /**
     * Launches into the battle scene.
     * 
     * @memberof Scene_Map
     */
    launchBattle(): void;
    /**
     * Stops all audio on battle start.
     * 
     * @memberof Scene_Map
     */
    stopAudioOnBattleStart(): void;
    /**
     * Starts the encounter effect on the map scene.
     * 
     * @memberof Scene_Map
     */
    startEncounterEffect(): void;
    updateEncounterEffect(): void;
    /**
     * Takes a snapshot of the map scene for displaying
     * on the battle scene if no battleback is present.
     * @memberof Scene_Map
     */
    snapForBattleBackground(): void;
    /**
     * Starts a flash encounter effect on the map scene
     * given a duration of the flash.
     * @param {number} duration 
     * @memberof Scene_Map
     */
    startFlashForEncounter(duration: number): void;
    /**
     * Returns the speed of the encounter effect.
     * 
     * @returns {number} 
     * @memberof Scene_Map
     */
    encounterEffectSpeed(): number;
}

/**
 * The super class of all menu-type scenes.
 * 
 * @class Scene_MenuBase
 * @extends {Scene_Base}
 */
declare class Scene_MenuBase extends Scene_Base {
    /**
     * The current actor selected in the base menu scene.
     * 
     * @protected
     * @type {Game_Actor}
     * @memberof Scene_MenuBase
     */
    protected _actor: Game_Actor;
    /**
     * The background sprite used to display the scene background.
     * 
     * @protected
     * @type {Sprite}
     * @memberof Scene_MenuBase
     */
    protected _backgroundSprite: Sprite;
    /**
     * The help window attached to the base menu scene.
     * 
     * @protected
     * @type {Window_Help}
     * @memberof Scene_MenuBase
     */
    protected _helpWindow: Window_Help;

    /**
     * Returns the current game actor.
     * 
     * @returns {Game_Actor} 
     * @memberof Scene_MenuBase
     */
    actor(): Game_Actor;
    /**
     * Updates the current actor.
     * 
     * @memberof Scene_MenuBase
     */
    updateActor(): void;
    /**
     * Creates the background of the base menu scene.
     * 
     * @memberof Scene_MenuBase
     */
    createBackground(): void;
    /**
     * Sets the background opacity of the base menu scene background.
     * 
     * @param {number} opacity 
     * @memberof Scene_MenuBase
     */
    setBackgroundOpacity(opacity: number): void;
    /**
     * Creates the help window.
     * 
     * @memberof Scene_MenuBase
     */
    createHelpWindow(): void;
    /**
     * Moves to the next actor in the party.
     * 
     * @memberof Scene_MenuBase
     */
    nextActor(): void;
    /**
     * Moves to the previous actor in the party.
     * 
     * @memberof Scene_MenuBase
     */
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

    /**
     * Creates the actor window within the base item scene.
     * 
     * @memberof Scene_ItemBase
     */
    createActorWindow(): void;
    /**
     * Returns the item attached to the item window within the base item scene.
     * 
     * @returns {*} 
     * @memberof Scene_ItemBase
     */
    item(): any;
    /**
     * Returns the current game actor.
     * 
     * @returns {Game_Actor} 
     * @memberof Scene_ItemBase
     */
    user(): Game_Actor;
    /**
     * Returns true if the cursor is left.
     * 
     * @returns {boolean} 
     * @memberof Scene_ItemBase
     */
    isCursorLeft(): boolean;
    /**
     * Shows the sub window.
     * 
     * @param {Window_Base} window 
     * @memberof Scene_ItemBase
     */
    showSubWindow(window: Window_Base): void;
    /**
     * Hides the sub window.
     * 
     * @param {Window_Base} window 
     * @memberof Scene_ItemBase
     */
    hideSubWindow(window: Window_Base): void;
    onActorOk(): void;
    onActorCancel(): void;
    determineItem(): void;
    /**
     * Uses the current item.
     * 
     * @memberof Scene_ItemBase
     */
    useItem(): void;
    /**
     * Activates the item window.
     * 
     * @memberof Scene_ItemBase
     */
    activateItemWindow(): void;
    itemTargetActors(): Game_Actor;
    /**
     * Returns true if the user (game actor) can use the item.
     * 
     * @returns {boolean} 
     * @memberof Scene_ItemBase
     */
    canUse(): boolean;
    /**
     * Returns true if the item effects are valid on the target(the user).
     * 
     * @returns {boolean} 
     * @memberof Scene_ItemBase
     */
    isItemEffectsValid(): boolean;
    applyItem(): void;
    /**
     * Checks the common event set on the item.
     * 
     * @memberof Scene_ItemBase
     */
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

    /**
     * Creates the status window within the equip scene.
     * 
     * @memberof Scene_Equip
     */
    createStatusWindow(): void;
    /**
     * Creates the status window within the equip scene.
     * 
     * @memberof Scene_Equip
     */
    createCommandWindow(): void;
    /**
     * Creates the slot window within the  equip scene.
     * 
     * @memberof Scene_Equip
     */
    createSlotWindow(): void;
    /**
     * Creates the item window within the equip scene.
     * 
     * @memberof Scene_Equip
     */
    createItemWindow(): void;
    /**
     * Refreshes the actor within the equip scene.
     * 
     * @memberof Scene_Equip
     */
    refreshActor(): void;
    /**
     * Handler for the equip command.
     * 
     * @memberof Scene_Equip
     */
    commandEquip(): void;
    /**
     * Handler for the optimize command.
     * 
     * @memberof Scene_Equip
     */
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

    /**
     * Refreshes the actor within the status scene.
     * 
     * @memberof Scene_Status
     */
    refreshActor(): void;
    /**
     * Handler for when the actor is changed within the status scene.
     * 
     * @memberof Scene_Status
     */
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
    /**
     * Creates the gold window on the shop scene.
     * 
     * @memberof Scene_Shop
     */
    createGoldWindow(): void;
    /**
     * Creates the command window for buying or selling.
     * 
     * @memberof Scene_Shop
     */
    createCommandWindow(): void;
    createDummyWindow(): void;
    /**
     * Creates the number input window on the shop scene.
     * 
     * @memberof Scene_Shop
     */
    createNumberWindow(): void;
    /**
     * Creates the status window.
     * 
     * @memberof Scene_Shop
     */
    createStatusWindow(): void;
    /**
     * Creates the buy window.
     * 
     * @memberof Scene_Shop
     */
    createBuyWindow(): void;
    /**
     * Creates the category window.
     * 
     * @memberof Scene_Shop
     */
    createCategoryWindow(): void;
    /**
     * Creates the sell window.
     * 
     * @memberof Scene_Shop
     */
    createSellWindow(): void;
    /**
     * Activates the buy window within the shop scene.
     * 
     * @memberof Scene_Shop
     */
    activateBuyWindow(): void;
    /**
     * Activates the sell window within the shop scene.
     * 
     * @memberof Scene_Shop
     */
    activateSellWindow(): void;
    /**
     * Handler for pressing buy within the shop scene.
     * 
     * @memberof Scene_Shop
     */
    commandBuy(): void;
    /**
     * Handler for pressing sell within the shop scene.
     * 
     * @memberof Scene_Shop
     */
    commandSell(): void;
    /**
     * Handler for when buying is confirmed.
     * 
     * @memberof Scene_Shop
     */
    onBuyOk(): void;
    /**
     * Handler for when buying is cancelled.
     * 
     * @memberof Scene_Shop
     */
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
    /**
     * Returns the maximum number bought.
     * 
     * @returns {number} 
     * @memberof Scene_Shop
     */
    maxBuy(): number;
    /**
     * Returns the maximum number sold.
     * 
     * @returns {number} 
     * @memberof Scene_Shop
     */
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
    /**
     * Prepares the name input scene for giving the specified
     * actor at actorId a name with a maximum number of characters
     * given by maxLength.
     * @param {number} actorId 
     * @param {number} maxLength 
     * @memberof Scene_Name
     */
    prepare(actorId: number, maxLength: number): void;
    /**
     * Creates the edit window.
     * 
     * @memberof Scene_Name
     */
    createEditWindow(): void;
    /**
     * Creates the input window.
     * 
     * @memberof Scene_Name
     */
    createInputWindow(): void;
    /**
     * Handler for when ok is processed on the name input scene.
     * 
     * @memberof Scene_Name
     */
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
    /**
     * Creates the range window.
     * 
     * @memberof Scene_Debug
     */
    createRangeWindow(): void;
    /**
     * Creates the edit window.
     * 
     * @memberof Scene_Debug
     */
    createEditWindow(): void;
    /**
     * Creates the debug help .window.
     * 
     * @memberof Scene_Debug
     */
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
    /**
     * Stops the battle scene.
     * 
     * @memberof Scene_Battle
     */
    stop(): void;
    /**
     * Returns true if the battle needs a slow fade out.
     * 
     * @returns {boolean} 
     * @memberof Scene_Battle
     */
    needsSlowFadeOut(): boolean;
    /**
     * Updates the status window on the battle scene.
     * 
     * @memberof Scene_Battle
     */
    updateStatusWindow(): void;
    /**
     * Updates the position of the battle scene windows.
     * 
     * @memberof Scene_Battle
     */
    updateWindowPositions(): void;
    /**
     * Creates all the display objects including:
     * the spritesheet, window layer, windows, and more.
     * 
     * @memberof Scene_Battle
     */
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
    /**
     * Creates the log window.
     * 
     * @memberof Scene_Battle
     */
    createLogWindow(): void;
    createStatusWindow(): void;
    createPartyCommandWindow(): void;
    /**
     * Creates the actor command window.
     * 
     * @memberof Scene_Battle
     */
    createActorCommandWindow(): void;
    /**
     * Creates the help window.
     * 
     * @memberof Scene_Battle
     */
    createHelpWindow(): void;
    /**
     * Creates the skill window.
     * 
     * @memberof Scene_Battle
     */
    createSkillWindow(): void;
    /**
     * Creates the item window.
     * 
     * @memberof Scene_Battle
     */
    createItemWindow(): void;
    /**
     * Creates the actor window.
     * 
     * @memberof Scene_Battle
     */
    createActorWindow(): void;
    /**
     * Creates the enemy window.
     * 
     * @memberof Scene_Battle
     */
    createEnemyWindow(): void;
    /**
     * Creates the message window on the battle scene.
     * 
     * @memberof Scene_Battle
     */
    createMessageWindow(): void;
    /**
     * Creates the scroll text window.
     * 
     * @memberof Scene_Battle
     */
    createScrollTextWindow(): void;
    refreshStatus(): void;
    startPartyCommandSelection(): void;
    /**
     * Handler for the fight command on battle start..
     * 
     * @memberof Scene_Battle
     */
    commandFight(): void;
    /**
     * Handler for the escape command on battle start.
     * 
     * @memberof Scene_Battle
     */
    commandEscape(): void;
    startActorCommandSelection(): void;
    /**
     * Handler for the attack command.
     * 
     * @memberof Scene_Battle
     */
    commandAttack(): void;
    /**
     * Handler for the skill command.
     * 
     * @memberof Scene_Battle
     */
    commandSkill(): void;
    /**
     * Handler for the guard command.
     * 
     * @memberof Scene_Battle
     */
    commandGuard(): void;
    /**
     * Handler for the item command.
     * 
     * @memberof Scene_Battle
     */
    commandItem(): void;
    /**
     * Selects the next command in the battle scene.
     * 
     * @memberof Scene_Battle
     */
    selectNextCommand(): void;
    /**
     * Selects the previous command in the battle scene.
     * 
     * @memberof Scene_Battle
     */
    selectPreviousCommand(): void;
    selectActorSelection(): void;
    onActorOk(): void;
    onActorCancel(): void;
    selectEnemySelection(): void;
    /**
     * Handler for when an enemy is selected.
     * 
     * @memberof Scene_Battle
     */
    onEnemyOk(): void;
    onEnemyCancel(): void;
    /**
     * Handler for when a skill is selected.
     * 
     * @memberof Scene_Battle
     */
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
