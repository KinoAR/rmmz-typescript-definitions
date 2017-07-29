/**
 * The game object class for temporary data that is not
 * included in the save data.
 * @class Game_Temp
 */
declare class Game_Temp {
    protected _isPlaytest: boolean;
    protected _commonEventId: number;
    protected _destinationX: number;
    protected _destinationY: number;

    /**
     * Determines if the game is in Play Test mode.
     * 
     * @returns {boolean} 
     * @memberof Game_Temp
     */
    isPlaytest(): boolean;
    /**
     * Reserves the given commonEventId to be processed later.
     * 
     * @param {number} commonEventId 
     * @memberof Game_Temp
     */
    reserveCommonEvent(commonEventId: number): void;
    /**
     * Clears the current reserved common event.
     * 
     * @memberof Game_Temp
     */
    clearCommonEvent(): void;
    /**
     * Returns true if a common event has been reserved.
     * 
     * @returns {boolean} 
     * @memberof Game_Temp
     */
    isCommonEventReserved(): boolean;
    /**
     * Returns common event data from the database.
     * 
     * @returns {any} 
     * @memberof Game_Temp
     */
    reservedCommonEvent(): any;
    /**
     * Sets the destination of the player for movement.
     * 
     * @param {number} x 
     * @param {number} y 
     * @memberof Game_Temp
     */
    setDestination(x: number, y: number): void;
    /**
     * Clears the destination of movement for the player.
     * 
     * @memberof Game_Temp
     */
    clearDestination(): void;
    /**
     * Determines if the destination for the player to move to is valid.
     * 
     * @returns {boolean} 
     * @memberof Game_Temp
     */
    isDestinationValid(): boolean;
    /**
     * Returns the x coordinate of the destination.
     * 
     * @returns {number} 
     * @memberof Game_Temp
     */
    destinationX(): number;
    /**
     * Returns the y coordinate of the destination.
     * 
     * @returns {number} 
     * @memberof Game_Temp
     */
    destinationY(): number;
}

/**
 * Game Object class for the system data.
 * 
 * @class Game_System
 */
declare class Game_System {
    protected _saveEnabled: boolean;
    protected _menuEnabled: boolean;
    protected _encounterEnabled: boolean;
    protected _formationEnabled: boolean;
    protected _battleCount: number;
    protected _winCount: number;
    protected _escapeCount: number;
    protected _saveCount: number;
    protected _versionId: number;
    protected _framesOnSave: number;
    protected _bgmOnSave: RPG.AudioFile;
    protected _bgsOnSave: RPG.AudioFile;
    protected _windowTone: Array<number>;
    protected _battleBgm: RPG.AudioFile;
    protected _victoryMe: RPG.AudioFile;
    protected _defeatMe: RPG.AudioFile;
    protected _savedBgm: RPG.AudioFile;
    protected _walkingBgm: RPG.AudioFile;

    isJapanese(): boolean;
    isChinese(): boolean;
    isKorean(): boolean;
    isCJK(): boolean;
    isRussian(): boolean;
    isSideView(): boolean;
    isSaveEnabled(): boolean;
    /**
     * Disables the ability to save the game.
     * 
     * @memberof Game_System
     */
    disableSave(): void;
    /**
     * Enables the ability to save the game.
     * 
     * @memberof Game_System
     */
    enableSave(): void;
    /**
     * Returns true if the menu is enabled.
     * 
     * @returns {boolean} 
     * @memberof Game_System
     */
    isMenuEnabled(): boolean;
    /**
     * Disables the menu from being accessed.
     * 
     * @memberof Game_System
     */
    disableMenu(): void;
    /**
     * Enables the menu to be accessed.
     * 
     * @memberof Game_System
     */
    enableMenu(): void;
    isEncounterEnabled(): boolean;
    /**
     * Returns true if the player can encounter enemies.
     * 
     * @memberof Game_System
     */
    disableEncounter(): void;
    enableEncounter(): void;
    isFormationEnabled(): boolean;
    /**
     * Disables the use of the formation command in the menu.
     * 
     * @memberof Game_System
     */
    disableFormation(): void;
    /**
     * Enables the use of the formation command in the menu.
     * 
     * @memberof Game_System
     */
    enableFormation(): void;
    /**
     * Returns the number of battles the player has participated in.
     * 
     * @returns {number} 
     * @memberof Game_System
     */
    battleCount(): number;
    /**
     * Returns the number of the wins the player has gained in battle.
     * 
     * @returns {number} 
     * @memberof Game_System
     */
    winCount(): number;
    /**
     * Returns the number of battles the player has escaped from in battle.
     * 
     * @returns {number} 
     * @memberof Game_System
     */
    escapeCount(): number;
    /**
     * Returns the number of saves the player has made in game.
     * 
     * @returns {number} 
     * @memberof Game_System
     */
    saveCount(): number;
    /**
     * Returns the version id represented in the database.
     * 
     * @returns {number} 
     * @memberof Game_System
     */
    versionId(): number;
    /**
     * Returns the tone of the window in the database.
     * 
     * @returns {Array<number>} 
     * @memberof Game_System
     */
    windowTone(): Array<number>;
    setWindowTone(value: Array<number>): void;
    /**
     * Returns the current battle background music.
     * 
     * @returns {RPG.AudioFile} 
     * @memberof Game_System
     */
    battleBgm(): RPG.AudioFile;
    /**
     * Sets the battle background music.
     * 
     * @param {RPG.AudioFile} value 
     * @memberof Game_System
     */
    setBattleBgm(value: RPG.AudioFile): void;
    /**
     * Returns the victory musical effect.
     * 
     * @returns {RPG.AudioFile} 
     * @memberof Game_System
     */
    victoryMe(): RPG.AudioFile;
    /**
     * Sets the victory musical effect.
     * 
     * @param {RPG.AudioFile} value 
     * @memberof Game_System
     */
    setVictoryMe(value: RPG.AudioFile): void;
    /**
     * Returns the defeat musical effect.
     * 
     * @returns {RPG.AudioFile} 
     * @memberof Game_System
     */
    defeatMe(): RPG.AudioFile;
    /**
     * Sets the defeat musical effect.
     * 
     * @param {RPG.AudioFile} value 
     * @memberof Game_System
     */
    setDefeatMe(value: RPG.AudioFile): void;
    onBattleStart(): void;
    onBattleWin(): void;
    onBattleEscape(): void;
    onBeforeSave(): void;
    onAfterLoad(): void;
    playtime(): number;
    playtimeText(): string;
    /**
     * Saves background music to the game system object.
     * 
     * @memberof Game_System
     */
    saveBgm(): void;
    /**
     * Replays the saved background music.
     * 
     * @memberof Game_System
     */
    replayBgm(): void;
    /**
     * Saves the walking background music.
     * 
     * @memberof Game_System
     */
    saveWalkingBgm(): void;
    /**
     * Replays the saved walking background music.
     * 
     * @memberof Game_System
     */
    replayWalkingBgm(): void;
    /**
     * Saves the second walking bgm from the map data.
     * 
     * @memberof Game_System
     */
    saveWalkingBgm2(): void;
}

/**
 * The game object class for the timer.
 * 
 * @class Game_Timer
 */
declare class Game_Timer {
    protected _frames: number;
    protected _working: boolean;

    /**
     * Updates the game timer.
     * 
     * @param {boolean} sceneActive 
     * @memberof Game_Timer
     */
    update(sceneActive: boolean): void;
    /**
     * Starts the timer with the specified number of frames as count.
     * 
     * @param {number} count 
     * @memberof Game_Timer
     */
    start(count: number): void;
    /**
     * Stops the timer.
     * 
     * @memberof Game_Timer
     */
    stop(): void;
    /**
     * Returns true if the timer is working and counting down.
     * 
     * @returns {boolean} 
     * @memberof Game_Timer
     */
    isWorking(): boolean;
    /**
     * Returns the number of seconds on the timer.
     * 
     * @returns {number} 
     * @memberof Game_Timer
     */
    seconds(): number;
    /**
     * Handler for when the time expires on the timer.
     * 
     * @memberof Game_Timer
     */
    onExpire(): void;
}

/**
 * The game object class for the state of the message window
 * that displays text or selections.
 * @class Game_Message
 */
declare class Game_Message {
    protected _texts: Array<string>;
    protected _choices: Array<string>;
    protected _faceName: string;
    protected _faceIndex: number;
    protected _background: number;
    protected _positionType: number;
    protected _choiceDefaultType: number;
    protected _choiceCancelType: number;
    protected _choiceBackground: number;
    protected _choicePostionType: number;
    protected _numInputVariableId: number;
    protected _numInputMaxDigits: number;
    protected _itemChoiceVariableId: number;
    protected _itemChoiceItypeId: number;
    protected _scrollMode: boolean;
    protected _scrollSpeed: number;
    protected _scrollNoFast: boolean;
    protected _choiceCallback: (n: number) => void;

    clear(): void;
    choices(): Array<string>;
    /**
     * Returns the name of the face image used for the message.
     * 
     * @returns {string} 
     * @memberof Game_Message
     */
    faceName(): string;
    /**
     * Returns the face index within the face image to display the
     * correct face.
     * @returns {number} 
     * @memberof Game_Message
     */
    faceIndex(): number;
    /**
     * Returns the background associated with the message;
     * this is the background
     * @returns {number} 
     * @memberof Game_Message
     */
    background(): number;
    /**
     * Returns the current position type of the message window.
     * 
     * @returns {number} 
     * @memberof Game_Message
     */
    positionType(): number;
    choiceDefaultType(): number;
    choiceCancelType(): number;
    /**
     * Returns the background type of the choice window.
     * 
     * @returns {number} 
     * @memberof Game_Message
     */
    choiceBackground(): number;
    /**
     * Returns the position of the choice window.
     * 
     * @returns {number} 
     * @memberof Game_Message
     */
    choicePositionType(): number;
    /**
     * Returns the number input variable id.
     * 
     * @returns {number} 
     * @memberof Game_Message
     */
    numInputVariableId(): number;
    /**
     * Returns the number input maximum digits.
     * 
     * @returns {number} 
     * @memberof Game_Message
     */
    numInputMaxDigits(): number;
    /**
     * Returns the item choice variable id.
     * 
     * @returns {number} 
     * @memberof Game_Message
     */
    itemChoiceVariableId(): number;
    /**
     * Returns the item choice item type id.
     * 
     * @returns {number} 
     * @memberof Game_Message
     */
    itemChoiceItypeId(): number;
    /**
     * Returns true if the scroll mode is set to true.
     * 
     * @returns {boolean} 
     * @memberof Game_Message
     */
    scrollMode(): boolean;
    /**
     * Returns the scroll speed.
     * 
     * @returns {number} 
     * @memberof Game_Message
     */
    scrollSpeed(): number;
    /**
     * Returns true if the scroll is set to not being fast.
     * 
     * @returns {boolean} 
     * @memberof Game_Message
     */
    scrollNoFast(): boolean;
    /**
     * Adds text to the game message object.
     * 
     * @param {string} text 
     * @memberof Game_Message
     */
    add(text: string): void;
    setFaceImage(faceName: string, faceIndex: number): void;
    /**
     * Sets the background of the message window;
     * options are 0 (fully opaque), 1 (transparent), 2 (invisible background).
     * The default is 0.
     * @param {number} background 
     * @memberof Game_Message
     */
    setBackground(background: number): void;
    /**
     * Sets the position of the message window;
     * default is 2.
     * @param {number} positionType 
     * @memberof Game_Message
     */
    setPositionType(positionType: number): void;
    /**
     * Sets the choices within the choice window;
     * sets the default and cancel choices for the window.
     * @param {Array<string>} choices 
     * @param {number} defaultType 
     * @param {number} cancelType 
     * @memberof Game_Message
     */
    setChoices(choices: Array<string>, defaultType: number, cancelType: number): void;
    setChoiceBackground(background: number): void;
    /**
     * Sets the position of the choice window associated with the
     * message window.
     * @param {number} positionType 
     * @memberof Game_Message
     */
    setChoicePositionType(positionType: number): void;
    /**
     * Sets the number input and associates it with a variable id;
     * the max number of digits can also be set.
     * @param {number} variableId 
     * @param {number} maxDigits 
     * @memberof Game_Message
     */
    setNumberInput(variableId: number, maxDigits: number): void;
    /**
     * Sets the choice and associates it with a variable id;
     * sets the itemtype id associated with the choice.
     * @param {number} variableId 
     * @param {number} itemType 
     * @memberof Game_Message
     */
    setItemChoice(variableId: number, itemType: number): void;
    /**
     * Sets the scroll speed of the message window;
     * disable fast movement if noFast is set to true.
     * @param {number} speed 
     * @param {boolean} noFast 
     * @memberof Game_Message
     */
    setScroll(speed: number, noFast: boolean): void;
    /**
     * Sets a callback to be associated with a specific choice;
     * a callback is a JavaScript function that will be run when the
     * choice is selected.
     * @param {((n: number) => void)} callback 
     * @memberof Game_Message
     */
    setChoiceCallback(callback: ((n: number) => void)): void;
    onChoice(n: number): void;
    /**
     * Returns true if the game message object has text.
     * 
     * @returns {boolean} 
     * @memberof Game_Message
     */
    hasText(): boolean;
    /**
     * Returns true if the game message object has a set of choices.
     * 
     * @returns {boolean} 
     * @memberof Game_Message
     */
    isChoice(): boolean;
    /**
     * Returns true if the game message object has a number input attached.
     * 
     * @returns {boolean} 
     * @memberof Game_Message
     */
    isNumberInput(): boolean;
    /**
     * Returns true if the game message object has an item choice attached.
     * 
     * @returns {boolean} 
     * @memberof Game_Message
     */
    isItemChoice(): boolean;
    /**
     * Returns true if the game message object has text, choices, number input,
     * or item choice.
     * @returns {boolean} 
     * @memberof Game_Message
     */
    isBusy(): boolean;
    /**
     * Creates a new page for the text within the message window.
     * 
     * @memberof Game_Message
     */
    newPage(): void;
    /**
     * Returns all of the text contained within the message.
     * 
     * @returns {string} 
     * @memberof Game_Message
     */
    allText(): string;
}

/**
 * The game object class for game switches.
 *
 * @class Game_Switches
 */
declare class Game_Switches {
    protected _data: Array<boolean>;

    clear(): void;
    value(switchId: number): boolean;
    setValue(switchId: number, value: boolean): void;
    onChange(): void;
}

/**
 * The game object class for game variables.
 * 
 * @class Game_Variables
 */
declare class Game_Variables {
    protected _data: Array<number>;

    clear(): void;
    value(variableId: number): number;
    setValue(variableId: number, value: number): void;
    onChange(): void;
}

/**
 * The game object class for self switches.
 * 
 * @class Game_SelfSwitches
 */
declare class Game_SelfSwitches {
    protected _data: {key: Array<any>};

    /**
     * Clears the array of data for the game's self switches.
     * 
     * @memberof Game_SelfSwitches
     */
    clear(): void;
    /**
     * Returns the value of the switch at the current key;
     * the value is a boolean (true or false).
     * @param {Array<any>} key 
     * @returns {boolean} 
     * @memberof Game_SelfSwitches
     */
    value(key: Array<any>): boolean;
    /**
     * Sets the value of the key of the respected self switch.
     * 
     * @param {Array<any>} key 
     * @param {boolean} value 
     * @memberof Game_SelfSwitches
     */
    setValue(key: Array<any>, value: boolean): void;
    onChange(): void;
}

/**
 * The game object class for screen effect data, such as
 * changes in color tone and flashes.
 * aliased as $gameScreen.
 * @class Game_Screen
 */
declare class Game_Screen {
    protected _shake: number;
    protected _shakePower: number;
    protected _shakeSpeed: number;
    protected _shakeDuration: number;
    protected _shakeDirection: number;

    /**
     * _zoomX property of the game screen.
     * 
     * @protected
     * @type {number}
     * @memberof Game_Screen
     */
    protected _zoomX: number;
    /**
     * _zoomY property of the game screen.
     * 
     * @protected
     * @type {number}
     * @memberof Game_Screen
     */
    protected _zoomY: number;
    protected _zoomScale: number;
    protected _zoomScaleTarget: number;
    protected _zoomDuration: number;

    protected _weatherType: string;
    protected _weatherPower: number;
    protected _weatherPowerTarget: number;
    protected _weatherDuration: number;

    /**
     * The _brightness property of the game screen;
     * returned when calling the brightness method.
     * @protected
     * @type {number}
     * @memberof Game_Screen
     */
    protected _brightness: number;
    protected _fadeOutDuration: number;
    protected _fadeInDuration: number;

    protected _tone: Array<number>;
    protected _toneTarget: Array<number>;
    protected _toneDuration: number;

    protected _flashColor: Array<number>;
    protected _flashDuration: number;

    /**
     * The array of Game_Pictures that are 
     * attached to the game screen.
     * @protected
     * @type {Array<Game_Picture>}
     * @memberof Game_Screen
     */
    protected _pictures: Array<Game_Picture>;

    clear(): void;
    /**
     * Handler for when the battle starts in game; prepares
     * the screen for the battle scene.
     * @memberof Game_Screen
     */
    onBattleStart(): void;
    /**
     * Returns the brightness of the game screen.
     * 
     * @returns {number} 
     * @memberof Game_Screen
     */
    brightness(): number;
    tone(): Array<number>;
    flashColor(): Array<number>;
    shake(): number;
    /**
     * Returns the  zoom x coordinate of the screen.
     * 
     * @returns {number} 
     * @memberof Game_Screen
     */
    zoomX(): number;
    /**
     * Returns the zoom y coordiante of the screen.
     * 
     * @returns {number} 
     * @memberof Game_Screen
     */
    zoomY(): number;
    /**
     * Returns the zoom scale of the screen.
     * 
     * @returns {number} 
     * @memberof Game_Screen
     */
    zoomScale(): number;
    /**
     * Returns the current weather type.
     * 
     * @returns {string} 
     * @memberof Game_Screen
     */
    weatherType(): string;
    /**
     * Returns the weather power.
     * 
     * @returns {number} 
     * @memberof Game_Screen
     */
    weatherPower(): number;
    /**
     * Returns the specified picture given the picture id.
     * 
     * @param {number} pictureId 
     * @returns {Game_Picture} 
     * @memberof Game_Screen
     */
    picture(pictureId: number): Game_Picture;
    /**
     * Returns the real picture id, given the picture id.
     * 
     * @param {number} pictureId 
     * @returns {number} 
     * @memberof Game_Screen
     */
    realPictureId(pictureId: number): number;
    /**
     * Clears the screen fade.
     * 
     * @memberof Game_Screen
     */
    clearFade(): void;
    /**
     * Clears the screen tone.
     * 
     * @memberof Game_Screen
     */
    clearTone(): void;
    /**
     * Clears the screen flash.
     * 
     * @memberof Game_Screen
     */
    clearFlash(): void;
    /**
     * Clears the screen shake.
     * 
     * @memberof Game_Screen
     */
    clearShake(): void;
    /**
     * Clears the screen zoom.
     * 
     * @memberof Game_Screen
     */
    clearZoom(): void;
    /**
     * Clears the screen weather.
     * 
     * @memberof Game_Screen
     */
    clearWeather(): void;
    /**
     * Clears the pictures set on the game screen.
     * 
     * @memberof Game_Screen
     */
    clearPictures(): void;
    /**
     * Erases the battle pictures.
     * 
     * @memberof Game_Screen
     */
    eraseBattlePictures(): void;
    /**
     * Returns the maximum number of pictures set on the game screen.
     * 
     * @returns {number} 
     * @memberof Game_Screen
     */
    maxPictures(): number;
    startFadeOut(duration: number): void;
    startFadeIn(duration: number): void;
    startTint(tone: Array<number>, duration: number): void;
    startFlash(color: Array<number>, duration: number): void;
    startShake(power: number, speed: number, duration: number): void;
    startZoom(x: number, y: number, scale: number, duration: number): void;
    setZoom(x: number, y: number, scale: number): void;
    changeWeather(type: string, power: number, duration: number): void;
    /**
     * Updates the game screen.
     * 
     * @memberof Game_Screen
     */
    update(): void;
    /**
     * Updates the screen fade out.
     * 
     * @memberof Game_Screen
     */
    updateFadeOut(): void;
    /**
     * Updates the screen fade in.
     * 
     * @memberof Game_Screen
     */
    updateFadeIn(): void;
    /**
     * Updates the screen tone.
     * 
     * @memberof Game_Screen
     */
    updateTone(): void;
    /**
     * Update the screen flash.
     * 
     * @memberof Game_Screen
     */
    updateFlash(): void;
    /**
     * Update the screen shake.
     * 
     * @memberof Game_Screen
     */
    updateShake(): void;
    /**
     * Update the screen zoom.
     * 
     * @memberof Game_Screen
     */
    updateZoom(): void;
    /**
     * Update the screen weather.
     * 
     * @memberof Game_Screen
     */
    updateWeather(): void;
    /**
     * Update the screen pictures.
     * 
     * @memberof Game_Screen
     */
    updatePictures(): void;
    startFlashForDamage(): void;
    showPicture(pictureId: number, name: string, origin: number, x: number, y: number,
                scaleX: number, scaleY: number, opacity: number, blendMode: number): void;
    movePicture(pictureId: number, origin: number, x: number, y: number,
                scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number): void;
    rotatePicture(pictureId: number, speed: number): void;
    tintPicture(pictureId: number, tone: Array<number>, duration: number): void;
    /**
     * Erases a picture from the screen given the respected picture id.
     * 
     * @param {number} pictureId 
     * @memberof Game_Screen
     */
    erasePicture(pictureId: number): void;
}

/**
 * The game object class for a picture.
 * 
 * @class Game_Picture
 */
declare class Game_Picture {
    /**
     * _name property of the current picture.
     * 
     * @protected
     * @type {string}
     * @memberof Game_Picture
     */
    protected _name: string;
    protected _origin: number;
    protected _x: number;
    protected _y: number;
    protected _scaleX: number;
    protected _scaleY: number;
    protected _opacity: number;
    protected _blendMode: number;

    protected _targetX: number;
    protected _targetY: number;
    protected _targetScaleX: number;
    protected _targetScaleY: number;
    protected _targetOpacity: number;
    protected _duration: number;

    protected _tone: Array<number>;
    protected _toneTarget: Array<number>;
    protected _toneDuration: number;

    protected _angle: number;
    protected _rotationSpeed: number;

    /**
     * Returns the name of the game picture.
     * 
     * @returns {string} 
     * @memberof Game_Picture
     */
    name(): string;
    /**
     * Returns the origin of the game picture.
     * 
     * @returns {number} 
     * @memberof Game_Picture
     */
    origin(): number;
    /**
     * Returns the picture x coordinate.
     * 
     * @returns {number} 
     * @memberof Game_Picture
     */
    x(): number;
    /**
     * Returns the picture y coordinate.
     * 
     * @returns {number} 
     * @memberof Game_Picture
     */
    y(): number;
    /**
     * Returns x scale of the game picture.
     * 
     * @returns {number} 
     * @memberof Game_Picture
     */
    scaleX(): number;
    /**
     * Returns the y scale of the game picture.
     * 
     * @returns {number} 
     * @memberof Game_Picture
     */
    scaleY(): number;
    /**
     * Returns the opacity of the game picture.
     * 
     * @returns {number} 
     * @memberof Game_Picture
     */
    opacity(): number;
    /**
     * Returns the blend mode of the game picture.
     * 
     * @returns {number} 
     * @memberof Game_Picture
     */
    blendMode(): number;
    /**
     * Returns the tone of the game picture.
     * 
     * @returns {Array<number>} 
     * @memberof Game_Picture
     */
    tone(): Array<number>;
    /**
     * Returns the angle of the game picture.
     * 
     * @returns {number} 
     * @memberof Game_Picture
     */
    angle(): number;
    initBasic(): void;
    initTarget(): void;
    initTone(): void;
    initRotation(): void;
    show(name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number): void;
    move(origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number): void;
    rotate(speed: number): void;
    tint(tone: Array<number>, duration: number): void;
    /**
     * Erases the game picture.
     * 
     * @memberof Game_Picture
     */
    erase(): void;
    /**
     * Updates the game picture.
     * 
     * @memberof Game_Picture
     */
    update(): void;
    /**
     * Updates the movement of the game picture.
     * 
     * @memberof Game_Picture
     */
    updateMove(): void;
    /**
     * Updates the tone of the game picture.
     * 
     * @memberof Game_Picture
     */
    updateTone(): void;
    /**
     * Updates the rotation of the game picture.
     * 
     * @memberof Game_Picture
     */
    updateRotation(): void;
}

/**
 * Game_Item
 * The game object class for handling skills, items, weapons. armor.
 * This is required, because the save data should not include the database object itself.
 * @class Game_Item
 */
declare class Game_Item {
    protected _dataClass: string;
    protected _itemId: number;

    constructor(item: RPG.BaseItem);
    /**
     * Returns true the item is a skill.
     * 
     * @returns {boolean} 
     * @memberof Game_Item
     */
    isSkill(): boolean;
    /**
     * Returns true if the item is an item.
     * 
     * @returns {boolean} 
     * @memberof Game_Item
     */
    isItem(): boolean;
    /**
     * Returns true if the item is a usable item, similar to a potion.
     * 
     * @returns {boolean} 
     * @memberof Game_Item
     */
    isUsableItem(): boolean;
    /**
     * Returns true if the item is a weapon.
     * 
     * @returns {boolean} 
     * @memberof Game_Item
     */
    isWeapon(): boolean;
    /**
     * Returns true if the item is an armor.
     * 
     * @returns {boolean} 
     * @memberof Game_Item
     */
    isArmor(): boolean;
    /**
     * Returns true if the item is equippable (weapon or armor).
     * 
     * @returns {boolean} 
     * @memberof Game_Item
     */
    isEquipItem(): boolean;
    /**
     * Returns true if the item is 'null'.
     * 
     * @returns {boolean} 
     * @memberof Game_Item
     */
    isNull(): boolean;
    /**
     * Returns the current itemId.
     * 
     * @returns {number} 
     * @memberof Game_Item
     */
    itemId(): number;
    object(): RPG.BaseItem;
    /**
     * Sets the current item of the current Game_Item object.
     * 
     * @param {RPG.BaseItem} item 
     * @memberof Game_Item
     */
    setObject(item: RPG.BaseItem): void;
    setEquip(isWeapon: boolean, itemId: number): void;
}

/**
 * Game_Action
 * The game object class representing a battle action.
 * @class Game_Action
 */
declare class Game_Action {
    static EFFECT_RECOVER_HP: number;
    static EFFECT_RECOVER_MP: number;
    static EFFECT_GAIN_TP: number;
    static EFFECT_ADD_STATE: number;
    static EFFECT_REMOVE_STATE: number;
    static EFFECT_ADD_BUFF: number;
    static EFFECT_ADD_DEBUFF: number;
    static EFFECT_REMOVE_BUFF: number;
    static EFFECT_REMOVE_DEBUFF: number;
    static EFFECT_SPECIAL: number;
    static EFFECT_GROW: number;
    static EFFECT_LEARN_SKILL: number;
    static EFFECT_COMMON_EVENT: number;
    static SPECIAL_EFFECT_ESCAPE: number;
    static HITTYPE_CERTAIN: number;
    static HITTYPE_PHYSICAL: number;
    static HITTYPE_MAGICAL: number;

    protected _subjectActorId: number;
    protected _subjectEnemyIndex: number;
    protected _targetIndex: number;
    protected _forcing: boolean;
    protected _item: Game_Item;

    constructor(subject: Game_Battler, forcing: boolean);

    clear(): void;
    setSubject(subject: Game_Battler): void;
    subject(): Game_Battler;
    friendsUnit(): Game_Unit;
    opponentsUnit(): Game_Unit;
    setEnemyAction(action: RPG.Enemy.Action): void;
    setAttack(): void;
    setGuard(): void;
    setSkill(skillId: number): void;
    setItem(itemId: number): void;
    setItemObject(object: RPG.UsableItem): void;
    setTarget(targetIndex: number): void;
    item(): RPG.UsableItem;
    isSkill(): boolean;
    isItem(): boolean;
    numRepeats(): number;
    checkItemScope(list: Array<number>): boolean;
    isForOpponent(): boolean;
    isForFriend(): boolean;
    isForDeadFriend(): boolean;
    isForUser(): boolean;
    isForOne(): boolean;
    isForRandom(): boolean;
    isForAll(): boolean;
    needsSelection(): boolean;
    numTargets(): number;
    checkDamageType(list: Array<number>): boolean;
    isHpEffect(): boolean;
    isMpEffect(): boolean;
    isDamage(): boolean;
    isRecover(): boolean;
    isDrain(): boolean;
    isHpRecover(): boolean;
    isMpRecover(): boolean;
    isCertainHit(): boolean;
    isPhysical(): boolean;
    isMagical(): boolean;
    isAttack(): boolean;
    isGuard(): boolean;
    isMagicSkill(): boolean;
    decideRandomTarget(): void;
    setConfusion(): void;
    prepare(): void;
    isValid(): boolean;
    speed(): number;
    makeTargets(): Array<Game_Battler>;
    repeatTargets(targets: Array<Game_Battler>): Array<Game_Battler>;
    confusionTarget(): Game_Battler;
    targetsForOpponents(): Array<Game_Battler>;
    targetsForFriends(): Array<Game_Battler>;
    evaluate(): number;
    itemTargetCandidates(): Array<Game_Battler>;
    evaluateWithTarget(target: Game_Battler): number;
    testApply(target: Game_Battler): boolean;
    hasItemAnyValidEffects(target: Game_Battler): boolean;
    testItemEffect(target: Game_Battler, effect: RPG.Effect): boolean;
    itemCnt(target: Game_Battler): number;
    itemMrf(target: Game_Battler): number;
    itemHit(target: Game_Battler): number;
    itemEva(target: Game_Battler): number;
    itemCri(target: Game_Battler): number;
    apply(target: Game_Battler): void;
    makeDamageValue(target: Game_Battler, critical: boolean): number;
    evalDamageFormula(target: Game_Battler): number;
    calcElementRate(target: Game_Battler): number;
    elementsMaxRate(target: Game_Battler, elements: Array<number>): number;
    applyCritical(damage: number): number;
    applyVariance(damage: number, variance: number): number;
    applyGuard(damage: number, target: Game_Battler): number;
    executeDamage(target: Game_Battler, value: number): void;
    executeHpDamage(target: Game_Battler, value: number): void;
    executeMpDamage(target: Game_Battler, value: number): void;
    gainDrainedHp(value: number): void;
    gainDrainedMp(value: number): void;
    applyItemEffect(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectRecoverHp(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectRecoverMp(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectGainTp(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectAddState(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectAddAttackState(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectAddNormalState(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectRemoveState(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectAddBuff(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectAddDebuff(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectRemoveBuff(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectRemoveDebuff(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectSpecial(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectGrow(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectLearnSkill(target: Game_Battler, effect: RPG.Effect): void;
    itemEffectCommonEvent(target: Game_Battler, effect: RPG.Effect): void;
    makeSuccess(target: Game_Battler): void;
    applyItemUserEffect(target: Game_Battler): void;
    lukEffectRate(target: Game_Battler): number;
    applyGlobal(): void;
}


/**
 * -----------------------------------------------------------------------------
 * Game_ActionResult
 *
 * The game object declare class for a result of a battle action. For convinience, all
 * member variables in this declare class are public.
 * @class Game_ActionResult
 */
declare class Game_ActionResult {
    used: boolean;
    missed: boolean;
    evaded: boolean;
    physical: boolean;
    drain: boolean;
    critical: boolean;
    success: boolean;
    hpAffected: boolean;
    hpDamage: number;
    mpDamage: number;
    tpDamage: number;
    addedStates: Array<number>;
    removedStates: Array<number>;
    addedBuffs: Array<number>;
    addedDebuffs: Array<number>;
    removedBuffs: Array<number>;

    /**
     * Clears the game action result.
     * 
     * @memberof Game_ActionResult
     */
    clear(): void;
    /**
     * Returns the added states from the action result.
     * 
     * @returns {Array<RPG.State>} 
     * @memberof Game_ActionResult
     */
    addedStateObjects(): Array<RPG.State>;
    /**
     * Returns the removes states from the result.
     * 
     * @returns {Array<RPG.State>} 
     * @memberof Game_ActionResult
     */
    removedStateObjects(): Array<RPG.State>;
    isStatusAffected(): boolean;
    /**
     * Returns true if the action result is a hit.
     * 
     * @returns {boolean} 
     * @memberof Game_ActionResult
     */
    isHit(): boolean;
    isStateAdded(stateId: number): boolean;
    pushAddedState(stateId: number): void;
    isStateRemoved(stateId: number): boolean;
    pushRemovedState(stateId: number): void;
    /**
     * Returns true if the a buff is added to the specified param
     * from the action result.
     * @param {number} paramId 
     * @returns {boolean} 
     * @memberof Game_ActionResult
     */
    isBuffAdded(paramId: number): boolean;
    pushAddedBuff(paramId: number): void;
    isDebuffAdded(paramId: number): boolean;
    pushAddedDebuff(paramId: number): void;
    isBuffRemoved(paramId: number): boolean;
    pushRemovedBuff(paramId: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_BattlerBase
 *
 * The superdeclare class of Game_Battler. It mainly contains parameters calculation.
 * @class Game_BattlerBase
 */
declare class Game_BattlerBase {
    static TRAIT_ELEMENT_RATE: number;
    static TRAIT_DEBUFF_RATE: number;
    static TRAIT_STATE_RATE: number;
    static TRAIT_STATE_RESIST: number;
    static TRAIT_PARAM: number;
    static TRAIT_XPARAM: number;
    static TRAIT_SPARAM: number;
    static TRAIT_ATTACK_ELEMENT: number;
    static TRAIT_ATTACK_STATE: number;
    static TRAIT_ATTACK_SPEED: number;
    static TRAIT_ATTACK_TIMES: number;
    static TRAIT_STYPE_ADD: number;
    static TRAIT_STYPE_SEAL: number;
    static TRAIT_SKILL_ADD: number;
    static TRAIT_SKILL_SEAL: number;
    static TRAIT_EQUIP_WTYPE: number;
    static TRAIT_EQUIP_ATYPE: number;
    static TRAIT_EQUIP_LOCK: number;
    static TRAIT_EQUIP_SEAL: number;
    static TRAIT_SLOT_TYPE: number;
    static TRAIT_ACTION_PLUS: number;
    static TRAIT_SPECIAL_FLAG: number;
    static TRAIT_COLLAPSE_TYPE: number;
    static TRAIT_PARTY_ABILITY: number;
    static FLAG_ID_AUTO_BATTLE: number;
    static FLAG_ID_GUARD: number;
    static FLAG_ID_SUBSTITUTE: number;
    static FLAG_ID_PRESERVE_TP: number;
    static ICON_BUFF_START: number;
    static ICON_DEBUFF_START: number;

    protected _hp: number;
    protected _mp: number;
    protected _tp: number;
    protected _hidden: boolean;

    protected _paramPlus: Array<number>;
    protected _states: Array<number>;
    protected _stateTurns: {[stateId: number]: number};
    protected _buffs: Array<number>;
    protected _buffTurns: Array<number>;

    /** [read-only] Hit Points */
    hp: number;
    /** [read-only] Magic Points */
    mp: number;
    /** [read-only] Tactical Points */
    tp: number;
    /** [read-only] Maximum Hit Points - param 0*/
    mhp: number;
    /** [read-only] Maximum Magic Points - param 1*/
    mmp: number;
    /** [read-only] ATtacK power - param 2*/
    atk: number;
    /** [read-only] DEFense power - param 3*/
    def: number;
    /** [read-only] Magic Attack power - param 4*/
    mat: number;
    /** [read-only] Magic Defense power - param 5*/
    mdf: number;
    /** [read-only] Agility - param 6 */
    agi: number;
    /** [read-only] LucK - param 7*/
    luk: number;
    /** [read-only] HIT rate -xparam 0*/
    hit: number;
    /** [read-only] EVAsion rate */
    eva: number;
    /** [read-only] CRItical rate */
    cri: number;
    /** [read-only] Critical EVasion rate */
    cev: number;
    /** [read-only] Magic EVasion rate */
    mev: number;
    /** [read-only] Magic ReFlection rate */
    mrf: number;
    /** [read-only] CouNTer attack rate */
    cnt: number;
    /** [read-only] Hp ReGeneration rate */
    hrg: number;
    /** [read-only] Mp ReGeneration rate */
    mrg: number;
    /** [read-only] Tp ReGeneration rate */
    trg: number;
    /** [read-only] TarGet Rate */
    tgr: number;
    /** [read-only] Ggweqrtg*xzuaRD effect rate */
    grd: number;
    /** [read-only] RECovery effect rate */
    rec: number;
    /** [read-only] PHArmacology */
    pha: number;
    /** [read-only] Mp Cost Rate */
    mcr: number;
    /** [read-only] Tp Charge Rate */
    tcr: number;
    /** [read-only] Physical Damage Rate */
    pdr: number;
    /** [read-only] Magical Damage Rate */
    mdr: number;
    /** [read-only] Floor Damage Rate */
    fdr: number;
    /** [read-only] EXperience Rate */
    exr: number;

    initMembers(): void;
    clearParamPlus(): void;
    clearStates(): void;
    /**
     * Erases the current state from the game battler given the 
     * stateId in the editor database.
     * @param {number} stateId 
     * @memberof Game_BattlerBase
     */
    eraseState(stateId: number): void;
    /**
     * Returns true if the battler is affected by the specified state given
     * the state id.
     * @param {number} stateId 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isStateAffected(stateId: number): boolean;
    isDeathStateAffected(): boolean;
    /**
     * Returns the death state id.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    deathStateId(): number;
    /**
     * Resets the state count of the specified state, given the state id.
     * 
     * @param {number} stateId 
     * @memberof Game_BattlerBase
     */
    resetStateCounts(stateId: number): void;
    /**
     * Returns true if the state, given the state id is expired.
     * 
     * @param {number} stateId 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isStateExpired(stateId: number): boolean;
    updateStateTurns(): void;
    /**
     * Clears buffs from the battler.
     * 
     * @memberof Game_BattlerBase
     */
    clearBuffs(): void;
    eraseBuff(paramId: number): void;
    /**
     * Returns the length of the buff.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    buffLength(): number;
    /**
     * Buffs the current parameter id.
     * 
     * @param {number} paramId 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    buff(paramId: number): number;
    isBuffAffected(paramId: number): boolean;
    isDebuffAffected(paramId: number): boolean;
    isBuffOrDebuffAffected(paramId: number): boolean;
    isMaxBuffAffected(paramId: number): boolean;
    isMaxDebuffAffected(paramId: number): boolean;
    increaseBuff(paramId: number): void;
    decreaseBuff(paramId: number): void;
    overwriteBuffTurns(paramId: number, turns: number): void;
    isBuffExpired(paramId: number): boolean;
    /**
     * Updates the buff turns on battler.
     * 
     * @memberof Game_BattlerBase
     */
    updateBuffTurns(): void;
    /**
     * Kills the battler.
     * 
     * @memberof Game_BattlerBase
     */
    die(): void;
    /**
     * Revives the battler.
     * 
     * @memberof Game_BattlerBase
     */
    revive(): void;
    /**
     * Returns the states applied to the battler.
     * 
     * @returns {Array<RPG.State>} 
     * @memberof Game_BattlerBase
     */
    states(): Array<RPG.State>;
    /**
     * Returns the array of state icons attached to the battler;
     * this is determined by the active states on the battler.
     * @returns {Array<number>} 
     * @memberof Game_BattlerBase
     */
    stateIcons(): Array<number>;
    /**
     * Returns the array of buff icons attached to the battler;
     * this is determined by the active buffs on the battler.
     * @returns {Array<number>} 
     * @memberof Game_BattlerBase
     */
    buffIcons(): Array<number>;
    buffIconIndex(buffLevel: number, paramId: number): number;
    /**
     * Returns all of the icons attached to the battler.
     * 
     * @returns {Array<number>} 
     * @memberof Game_BattlerBase
     */
    allIcons(): Array<number>;
    traitObjects(): Array<any>;
    /**
     * Returns all the traits of the battler.
     * 
     * @returns {Array<RPG.Trait>} 
     * @memberof Game_BattlerBase
     */
    allTraits(): Array<RPG.Trait>;
    traits(code: number): Array<RPG.Trait>;
    traitsWithId(code: number, id: number): Array<RPG.Trait>;
    traitsPi(code: number, id: number): number;
    traitsSum(code: number, id: number): number;
    traitsSumAll(code: number): number;
    traitsSet(code: number): Array<number>;
    /**
     * Returns the base parameters of the battler; this is determined by their
     * current level and the paramId given.
     * @param {number} paramId 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    paramBase(paramId: number): number;
    paramPlus(paramId: number): number;
    paramMin(paramId: number): number;
    paramMax(paramId: number): number;
    paramRate(paramId: number): number;
    paramBuffRate(paramId: number): number;
    /**
     * Returns a standard parameter, given a paramId;
     * standard parameters include: HP, MP, Atk, M.Atk, Def, M.Def, Luck, Agility.
     * @param {number} paramId 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    param(paramId: number): number;
    xparam(xparamId: number): number;
    sparam(sparamId: number): number;
    elementRate(elementId: number): number;
    debuffRate(paramId: number): number;
    stateRate(stateId: number): number;
    stateResistSet(): Array<number>;
    isStateResist(stateId: number): boolean;
    /**
     * Returns the attack elements of the battler
     * as a list of numbers.
     * @returns {Array<number>} 
     * @memberof Game_BattlerBase
     */
    attackElements(): Array<number>;
    /**
     * Returns the attack states of the battler as a
     * list of numbers.
     * @returns {Array<number>} 
     * @memberof Game_BattlerBase
     */
    attackStates(): Array<number>;
    attackStatesRate(stateId: number): void;
    /**
     * Returns the attack speed of the battler.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    attackSpeed(): number;
    /**
     * Returns the number of attacks available to the battler.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    attackTimesAdd(): number;
    addedSkillTypes(): Array<number>;
    isSkillTypeSealed(stypeId: number): boolean;
    addedSkills(): Array<number>;
    isSkillSealed(skillId: number): boolean;
    isEquipWtypeOk(wtypeId: number): boolean;
    isEquipAtypeOk(atypeId: number): boolean;
    isEquipTypeLocked(etypeId: number): boolean;
    isEquipTypeSealed(etypeId: number): boolean;
    /**
     * Returns the battler slot type of a trait.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    slotType(): number;
    /**
     * Returns true if the battler dual wields.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isDualWield(): boolean;
    actionPlusSet(): Array<number>;
    specialFlag(flagId: number): boolean;
    /**
     * Returns the collapse type of the battler.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    collapseType(): number;
    partyAbility(abilityId: number): boolean;
    /**
     * Returns true if the battler is set to battle automatically.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isAutoBattle(): boolean;
    /**
     * Returns true if the battler is guarding.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isGuard(): boolean;
    isSubstitute(): boolean;
    /**
     * Returns true if tp is preserved between battles.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isPreserveTp(): boolean;
    addParam(paramId: number, value: number): void;
    /**
     * Sets the battler hp.
     * 
     * @param {number} hp 
     * @memberof Game_BattlerBase
     */
    setHp(hp: number): void;
    /**
     * Sets the battler mp.
     * 
     * @param {number} mp 
     * @memberof Game_BattlerBase
     */
    setMp(mp: number): void;
    /**
     * Sets the battler tp.
     * 
     * @param {number} tp 
     * @memberof Game_BattlerBase
     */
    setTp(tp: number): void;
    /**
     * Returns the maximum tp of the battler.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    maxTp(): number;
    /**
     * Refreshes the battler.
     * 
     * @memberof Game_BattlerBase
     */
    refresh(): void;
    /**
     * Recovers the battler from all states and restores the
     * battler to maximum hp and mp.
     * @memberof Game_BattlerBase
     */
    recoverAll(): void;
    /**
     * Returns the percentage of the battler's hp left as a float.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    hpRate(): number;
    /**
     * Returns the percentage of the battler's mp left as a float.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    mpRate(): number;
    /**
     * Returns the percentage of the battler's tp left as a float.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    tpRate(): number;
    /**
     * Hides the game battler.
     * 
     * @memberof Game_BattlerBase
     */
    hide(): void;
    /**
     * Shows the game battler.
     * 
     * @memberof Game_BattlerBase
     */
    appear(): void;
    /**
     * Returns true if the game battler is hidden.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isHidden(): boolean;
    /**
     * Returns true if the game battler is not hidden.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isAppeared(): boolean;
    /**
     * Returns true if the battler is dead.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isDead(): boolean;
    /**
     * Returns true if the battler is alive.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isAlive(): boolean;
    /**
     * Returns true if the battler is dying.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isDying(): boolean;
    /**
     * Returns true if the game battler is restricted.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isRestricted(): boolean;
    /**
     * Returns true if the battler can input actions.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    canInput(): boolean;
    canMove(): boolean;
    /**
     * Returns true if the battler is confused.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isConfused(): boolean;
    /**
     * Returns the confusion level of the battler.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    confusionLevel(): number;
    /**
     * Returns true if the battler is an actor.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isActor(): boolean;
    /**
     * Returns true if the battler is an enemy.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isEnemy(): boolean;
    /**
     * Sorts the states attached to the battler.
     * 
     * @memberof Game_BattlerBase
     */
    sortStates(): void;
    /**
     * Returns the number of the restriction.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    restriction(): number;
    /**
     * Adds a new state given a state id to the battler.
     * 
     * @param {number} stateId 
     * @memberof Game_BattlerBase
     */
    addNewState(stateId: number): void;
    /**
     * Handler for when the battler is restricted.
     * 
     * @memberof Game_BattlerBase
     */
    onRestrict(): void;
    mostImportantStateText(): string;
    stateMotionIndex(): number;
    stateOverlayIndex(): number;
    /**
     * Returns true if the skill is a weapon type
     * oriented skill.
     * @param {RPG.Skill} skill 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isSkillWtypeOk(skill: RPG.Skill): boolean;
    /**
     * Returns the mp cost of the skill.
     * 
     * @param {RPG.Skill} skill 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    skillMpCost(skill: RPG.Skill): number;
    /**
     * Returns the tp cost of the skill.
     * 
     * @param {RPG.Skill} skill 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    skillTpCost(skill: RPG.Skill): number;
    /**
     * Returns true if the battler can pay the cost
     * of the specified skill.
     * @param {RPG.Skill} skill 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    canPaySkillCost(skill: RPG.Skill): boolean;
    /**
     * Pays the cost of the skill when activating the skill.
     * 
     * @param {RPG.Skill} skill 
     * @memberof Game_BattlerBase
     */
    paySkillCost(skill: RPG.Skill): void;
    /**
     * Returns true if the item occasion is okay.
     * 
     * @param {RPG.UsableItem} item 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    isOccasionOk(item: RPG.UsableItem): boolean;
    meetsUsableItemConditions(item: RPG.UsableItem): boolean;
    /**
     * Returns true if the battler meets the skill conditions.
     * 
     * @param {RPG.Skill} skill 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    meetsSkillConditions(skill: RPG.Skill): boolean;
    /**
     * Returns true if the battler meets the item conditions.
     * 
     * @param {RPG.Item} item 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    meetsItemConditions(item: RPG.Item): boolean;
    /**
     * Returns true if the battler can use the item.
     * 
     * @param {RPG.UsableItem} item 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    canUse(item: RPG.UsableItem): boolean;
    /**
     * Returns true if the battler can equip the item.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    canEquip(item: RPG.EquipItem): boolean;
    /**
     * Returns true if the battler can equip a weapon.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    canEquipWeapon(item: RPG.EquipItem): boolean;
    /**
     * Returns true if the battler can equip armor.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    canEquipArmor(item: RPG.EquipItem): boolean;
    /**
     * Returns the attack skill id in the database.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    attackSkillId(): number;
    /**
     * Returns the guard skill id in the database.
     * 
     * @returns {number} 
     * @memberof Game_BattlerBase
     */
    guardSkillId(): number;
    /**
     * Returns true if the battler can attack.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    canAttack(): boolean;
    /**
     * Returns true if the battler can guard.
     * 
     * @returns {boolean} 
     * @memberof Game_BattlerBase
     */
    canGuard(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Battler
 *
 * The superdeclare class of Game_Actor and Game_Enemy. It contains methods for sprites
 * and actions.
 * @class Game_Battler
 */
declare class Game_Battler extends Game_BattlerBase {
    protected _actions: Array<Game_Action>;
    protected _speed: number;
    protected _result: Game_ActionResult;
    protected _actionState: string;
    protected _lastTargetIndex: number;
    protected _animations: Array<MV.BattlerAnimation>;
    protected _damagePopup: boolean;
    protected _effectType: string;
    protected _motionType: string;
    protected _weaponImageId: number;
    protected _motionRefresh: boolean;
    protected _selected: boolean;

    /**
     * Returns the name of the battler.
     * 
     * @returns {string} 
     * @memberof Game_Battler
     */
    name(): string;
    /**
     * Returns the battler name of the battler;
     * the battler name is associated with the file used as the battler graphic.
     * @returns {string} 
     * @memberof Game_Battler
     */
    battlerName(): string;
    /**
     * Returns the index of the battler.
     * 
     * @returns {number} 
     * @memberof Game_Battler
     */
    index(): number;
    /**
     * Returns the unit of the battler; this is either the 
     * game party or game troop.
     * @returns {Game_Unit} 
     * @memberof Game_Battler
     */
    friendsUnit(): Game_Unit;
    /**
     * Returns the opponents unit; this is either
     * game party or game troop.
     * @returns {Game_Unit} 
     * @memberof Game_Battler
     */
    opponentsUnit(): Game_Unit;
    /**
     * Clears animations from the battler.
     * 
     * @memberof Game_Battler
     */
    clearAnimations(): void;
    /**
     * Clear damage pop up from the battler.
     * 
     * @memberof Game_Battler
     */
    clearDamagePopup(): void;
    /**
     * Clear weapon animation from the battler.
     * 
     * @memberof Game_Battler
     */
    clearWeaponAnimation(): void;
    /**
     * Clears effect from the battler.
     * 
     * @memberof Game_Battler
     */
    clearEffect(): void;
    /**
     * Clears motion from the battler.
     * 
     * @memberof Game_Battler
     */
    clearMotion(): void;
    requestEffect(effectType: string): void;
    /**
     * Request the specified motion on the game battler.
     * 
     * @param {string} motionType 
     * @memberof Game_Battler
     */
    requestMotion(motionType: string): void;
    requestMotionRefresh(): void;
    select(): void;
    deselect(): void;
    isAnimationRequested(): boolean;
    isDamagePopupRequested(): boolean;
    isEffectRequested(): boolean;
    /**
     * Returns true if a motion is requested.
     * 
     * @returns {boolean} 
     * @memberof Game_Battler
     */
    isMotionRequested(): boolean;
    /**
     * Returns true if a weapon animation is requested.
     * 
     * @returns {boolean} 
     * @memberof Game_Battler
     */
    isWeaponAnimationRequested(): boolean;
    isMotionRefreshRequested(): boolean;
    isSelected(): boolean;
    /**
     * Returns the effect type of the battler.
     * 
     * @returns {string} 
     * @memberof Game_Battler
     */
    effectType(): string;
    /**
     * Returns the motion type of the battler.
     * 
     * @returns {string} 
     * @memberof Game_Battler
     */
    motionType(): string;
    /**
     * Returns the weapon image id.
     * 
     * @returns {number} 
     * @memberof Game_Battler
     */
    weaponImageId(): number;
    /**
     * Shifts the battler animation.
     * 
     * @returns {MV.BattlerAnimation} 
     * @memberof Game_Battler
     */
    shiftAnimation(): MV.BattlerAnimation;
    /**
     * Starts the specified animation, given the animation id on the
     * battler.
     * @param {number} animationId 
     * @param {boolean} mirror 
     * @param {number} delay 
     * @memberof Game_Battler
     */
    startAnimation(animationId: number, mirror: boolean, delay: number): void;
    /**
     * Starts a damage pop up on the battler.
     * 
     * @memberof Game_Battler
     */
    startDamagePopup(): void;
    /**
     * Starts the weapon animation on te battler given a weapon id.
     * 
     * @param {number} weaponImageId 
     * @memberof Game_Battler
     */
    startWeaponAnimation(weaponImageId: number): void;
    action(index: number): Game_Action;
    /**
     * Sets the action at the specified index for the battler.
     * 
     * @param {number} index 
     * @param {Game_Action} action 
     * @memberof Game_Battler
     */
    setAction(index: number, action: Game_Action): void;
    /**
     * Returns the number of battler actions.
     * 
     * @returns {number} 
     * @memberof Game_Battler
     */
    numActions(): number;
    /**
     * Clears the battler actions.
     * 
     * @memberof Game_Battler
     */
    clearActions(): void;
    /**
     * Returns the battler action result.
     * 
     * @returns {Game_ActionResult} 
     * @memberof Game_Battler
     */
    result(): Game_ActionResult;
    /**
     * Clears the battler action result.
     * 
     * @memberof Game_Battler
     */
    clearResult(): void;
    /**
     * Refreshes the battler.
     * 
     * @memberof Game_Battler
     */
    refresh(): void;
    /**
     * Adds a state to the battler given the specified
     * state id.
     * @param {number} stateId 
     * @memberof Game_Battler
     */
    addState(stateId: number): void;
    /**
     * Returns true if the specified state given the state id
     * is addable.
     * @param {number} stateId 
     * @returns {boolean} 
     * @memberof Game_Battler
     */
    isStateAddable(stateId: number): boolean;
    /**
     * Returns true if the specified state given the state id
     * restricts.
     * 
     * @param {number} stateId 
     * @returns {boolean} 
     * @memberof Game_Battler
     */
    isStateRestrict(stateId: number): boolean;
    /**
     * Handler for when theb attler is restricted.
     * 
     * @memberof Game_Battler
     */
    onRestrict(): void;
    /**
     * Removes the specified state given the state id.
     * 
     * @param {number} stateId 
     * @memberof Game_Battler
     */
    removeState(stateId: number): void;
    /**
     * Has the battler escape from battle; plays a sound on escaping.
     * 
     * @memberof Game_Battler
     */
    escape(): void;
    /**
     * Adds a buff to the battler for the specified number of turns
     * on the selected parameter.
     * @param {number} paramId 
     * @param {number} turns 
     * @memberof Game_Battler
     */
    addBuff(paramId: number, turns: number): void;
    /**
     * Adds a debuff to the battler for the specified number of turns
     * on the selected parameter.
     * @param {number} paramId 
     * @param {number} turns 
     * @memberof Game_Battler
     */
    addDebuff(paramId: number, turns: number): void;
    removeBuff(paramId: number): void;
    removeBattleStates(): void;
    /**
     * Removes all buffs from the battler.
     * 
     * @memberof Game_Battler
     */
    removeAllBuffs(): void;
    removeStatesAuto(timing: number): void;
    removeBuffsAuto(): void;
    removeStatesByDamage(): void;
    /**
     * Creates the number of times for
     * an action.
     * @returns {number} 
     * @memberof Game_Battler
     */
    makeActionTimes(): number;
    /**
     * Creates the actions for the battler.
     * 
     * @memberof Game_Battler
     */
    makeActions(): void;
    /**
     * Returns the speed of the battler.
     * 
     * @returns {number} 
     * @memberof Game_Battler
     */
    speed(): number;
    /**
     * Calculates the speed of the battler.
     * 
     * @memberof Game_Battler
     */
    makeSpeed(): void;
    /**
     * Returns the current action of the battler.
     * 
     * @returns {Game_Action} 
     * @memberof Game_Battler
     */
    currentAction(): Game_Action;
    /**
     * Removes the current battler action.
     * 
     * @memberof Game_Battler
     */
    removeCurrentAction(): void;
    setLastTarget(target: Game_Battler): void;
    forceAction(skillId: number, targetIndex: number): void;
    /**
     * Has theb attler use the given item.
     * 
     * @param {RPG.UsableItem} item 
     * @memberof Game_Battler
     */
    useItem(item: RPG.UsableItem): void;
    /**
     * Has the battler consume the given item.
     * 
     * @param {RPG.UsableItem} item 
     * @memberof Game_Battler
     */
    consumeItem(item: RPG.UsableItem): void;
    /**
     * Adds the specified amount of hp to the battler.
     * 
     * @param {number} value 
     * @memberof Game_Battler
     */
    gainHp(value: number): void;
    /**
     * Adds the specified amount of mp to the battler.
     * 
     * @param {number} value 
     * @memberof Game_Battler
     */
    gainMp(value: number): void;
    /**
     * Adds the specified amount of tp to the battler.
     * 
     * @param {number} value 
     * @memberof Game_Battler
     */
    gainTp(value: number): void;
    /**
     * Adds a specified amount of tp to the battler silently.
     * 
     * @param {number} value 
     * @memberof Game_Battler
     */
    gainSilentTp(value: number): void;
    /**
     * Initializes the battler's tp; tp is random.
     * 
     * @memberof Game_Battler
     */
    initTp(): void;
    /**
     * Clears the battler's tp.
     * 
     * @memberof Game_Battler
     */
    clearTp(): void;
    chargeTpByDamage(damageRate: number): void;
    /**
     * Has the battler regenerate hp based on their hp regen.
     * 
     * @memberof Game_Battler
     */
    regenerateHp(): void;
    maxSlipDamage(): number;
    /**
     * Has the battler regenerate mp based on their mp regen.
     * 
     * @memberof Game_Battler
     */
    regenerateMp(): void;
    /**
     * Has the battler regenerate tp based on their tp regen.
     * 
     * @memberof Game_Battler
     */
    regenerateTp(): void;
    /**
     * Has the battler regenerate all resources based on
     * their respective regeneration stats.
     * @memberof Game_Battler
     */
    regenerateAll(): void;
    /**
     * Handler for when battle has started.
     * 
     * @memberof Game_Battler
     */
    onBattleStart(): void;
    onAllActionsEnd(): void;
    onTurnEnd(): void;
    onBattleEnd(): void;
    onDamage(value: number): void;
    setActionState(actionState: string): void;
    isUndecided(): boolean;
    /**
     * Returns true if the battler is inputting commands in battle.
     * 
     * @returns {boolean} 
     * @memberof Game_Battler
     */
    isInputting(): boolean;
    /**
     * Returns true if the battler is waiting in battle.
     * 
     * @returns {boolean} 
     * @memberof Game_Battler
     */
    isWaiting(): boolean;
    /**
     * Returns true if the battler is performing an action in battle.
     * 
     * @returns {boolean} 
     * @memberof Game_Battler
     */
    isActing(): boolean;
    /**
     * Returns true if the battler is chanting in combat.
     * 
     * @returns {boolean} 
     * @memberof Game_Battler
     */
    isChanting(): boolean;
    /**
     * Returns true if the battler is waiting to guard.
     * 
     * @returns {boolean} 
     * @memberof Game_Battler
     */
    isGuardWaiting(): boolean;
    /**
     * Perform action start motion, given the specified game action.
     * 
     * @param {Game_Action} action 
     * @memberof Game_Battler
     */
    performActionStart(action: Game_Action): void;
    /**
     * Perform given action motion.
     * 
     * @param {Game_Action} action 
     * @memberof Game_Battler
     */
    performAction(action: Game_Action): void;
    /**
     * Perform action end motion.
     * 
     * @memberof Game_Battler
     */
    performActionEnd(): void;
    /**
     * Perform damage motion.
     * 
     * @memberof Game_Battler
     */
    performDamage(): void;
    /**
     * Perform miss motion.
     * 
     * @memberof Game_Battler
     */
    performMiss(): void;
    /**
     * Perform recovery motion.
     * 
     * @memberof Game_Battler
     */
    performRecovery(): void;
    /**
     * Perform evasion motion.
     * 
     * @memberof Game_Battler
     */
    performEvasion(): void;
    /**
     * Perform magic evasion motion.
     * 
     * @memberof Game_Battler
     */
    performMagicEvasion(): void;
    /**
     * Perform counter motion.
     * 
     * @memberof Game_Battler
     */
    performCounter(): void;
    /**
     * Performs the reflect motion.
     * 
     * @memberof Game_Battler
     */
    performReflection(): void;
    /**
     * Perform substitute motion with the specified game battler.
     * 
     * @param {Game_Battler} target 
     * @memberof Game_Battler
     */
    performSubstitute(target: Game_Battler): void;
    /**
     * Performs the collapse motion.
     * 
     * @memberof Game_Battler
     */
    performCollapse(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Actor
 *
 * The game object declare class for an actor.
 * @class Game_Actor
 */
declare class Game_Actor extends Game_Battler {
    protected _actorId: number;
    protected _name: string;
    protected _nickname: string;
    protected _profile: string;
    protected _classId: number;
    protected _level: number;
    protected _characterName: string;
    protected _characterIndex: number;
    protected _faceName: string;
    protected _faceIndex: number;
    protected _battlerName: string;
    protected _exp: {[classId: number]: number};
    protected _skills: Array<number>;
    protected _equips: Array<Game_Item>;
    protected _actionInputIndex: number;
    protected _lastMenuSkill: Game_Item;
    protected _lastBattleSkill: Game_Item;
    protected _lastCommandSymbol: string;
    protected _stateSteps: {[stateId: number]: number};

    /** [read-only] */
    level: number;

    constructor(actorId: number);

    setup(actorId: number): void;
    /**
     * Returns the id of the actor.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    actorId(): number;
    /**
     * Returns the database information of the actor.
     * 
     * @returns {RPG.Actor} 
     * @memberof Game_Actor
     */
    actor(): RPG.Actor;
    /**
     * Sets the actor name.
     * 
     * @param {string} name 
     * @memberof Game_Actor
     */
    setName(name: string): void;
    /**
     * Returns the nickname of the actor.
     * 
     * @returns {string} 
     * @memberof Game_Actor
     */
    nickname(): string;
    /**
     * Sets the nickname of the actor.
     * 
     * @param {string} nickname 
     * @memberof Game_Actor
     */
    setNickname(nickname: string): void;
    /**
     * Returns the actor profile.
     * 
     * @returns {string} 
     * @memberof Game_Actor
     */
    profile(): string;
    /**
     * Sets the actor profile.
     * 
     * @param {string} profile 
     * @memberof Game_Actor
     */
    setProfile(profile: string): void;
    /**
     * Returns the face name of the actor; this is
     * the image of faces for the actor.
     * @returns {string} 
     * @memberof Game_Actor
     */
    faceName(): string;
    /**
     * Returns the face index of the actor.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    faceIndex(): number;
    /**
     * Clears all states from the actor.
     * 
     * @memberof Game_Actor
     */
    clearStates(): void;
    /**
     * Erase the specified state from the actor.
     * 
     * @param {number} stateId 
     * @memberof Game_Actor
     */
    eraseState(stateId: number): void;
    /**
     * Reset state count of the specified state.
     * 
     * @param {number} stateId 
     * @memberof Game_Actor
     */
    resetStateCounts(stateId: number): void;
    /**
     * Initialize images of the actor.
     * 
     * @memberof Game_Actor
     */
    initImages(): void;
    /**
     * Returns the exp required to level.
     * 
     * @param {number} level 
     * @returns {number} 
     * @memberof Game_Actor
     */
    expForLevel(level: number): number;
    /**
     * Initialize exp of the actor.
     * 
     * @memberof Game_Actor
     */
    initExp(): void;
    /**
     * Returns the current experience points of the actor.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    currentExp(): number;
    /**
     * Returns the current level's experience for the actor.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    currentLevelExp(): number;
    /**
     * Returns the experience points for the next level of the actor.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    nextLevelExp(): number;
    /**
     * Returns the next required experience points for the actor to level up.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    nextRequiredExp(): number;
    /**
     * Returns the maximum level of the actor.
     * 
     * @memberof Game_Actor
     */
    maxLevel(): void;
    /**
     * Returns true if the actor is max level.
     * 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    isMaxLevel(): boolean;
    /**
     * Initialize actor skills.
     * 
     * @memberof Game_Actor
     */
    initSkills(): void;
    /**
     * Initialize actor equipment in the given slots.
     * 
     * @param {Array<number>} equips 
     * @memberof Game_Actor
     */
    initEquips(equips: Array<number>): void;
    /**
     * Returns the equip slots of the actor.
     * 
     * @returns {Array<number>} 
     * @memberof Game_Actor
     */
    equipSlots(): Array<number>;
    /**
     * Returns the equipment of the actor.
     * 
     * @returns {Array<RPG.EquipItem>} 
     * @memberof Game_Actor
     */
    equips(): Array<RPG.EquipItem>;
    /**
     * Returns the weapon of the actor.
     * 
     * @returns {Array<RPG.Weapon>} 
     * @memberof Game_Actor
     */
    weapons(): Array<RPG.Weapon>;
    /**
     * Returns the armor of the actor.
     * 
     * @returns {Array<RPG.Armor>} 
     * @memberof Game_Actor
     */
    armors(): Array<RPG.Armor>;
    /**
     * Returns true if the actor has a weapon.
     * 
     * @param {RPG.Weapon} weapon 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    hasWeapon(weapon: RPG.Weapon): boolean;
    /**
     * Returns true if the actor has armor.
     * 
     * @param {RPG.Armor} armor 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    hasArmor(armor: RPG.Armor): boolean;
    /**
     * Returns true if the equip change is okay in the given slot.
     * 
     * @param {number} slotId 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    isEquipChangeOk(slotId: number): boolean;
    /**
     * Changes the actor equipment in the given slot with the
     * given equip item. Places the original item into the party
     * inventory.
     * @param {number} slotId 
     * @param {RPG.EquipItem} item 
     * @memberof Game_Actor
     */
    changeEquip(slotId: number, item: RPG.EquipItem): void;
    /**
     * Forces the actor to change equipment in the given slot
     * with the given equip item without placing the item back into
     * the party inventory.
     * @param {number} slotId 
     * @param {RPG.EquipItem} item 
     * @memberof Game_Actor
     */
    forceChangeEquip(slotId: number, item: RPG.EquipItem): void;
    /**
     * Trades the new item with the old item in the party inventory.
     * 
     * @param {RPG.EquipItem} newItem 
     * @param {RPG.EquipItem} oldItem 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    tradeItemWithParty(newItem: RPG.EquipItem, oldItem: RPG.EquipItem): boolean;
    /**
     * Changes the actor equip with an item based on the equip id.
     * 
     * @param {number} etypeId 
     * @param {number} itemId 
     * @memberof Game_Actor
     */
    changeEquipById(etypeId: number, itemId: number): void;
    /**
     * Returns true if the actor is equipped with the specific item.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    isEquipped(item: RPG.EquipItem): boolean;
    /**
     * Discards the given equip item from the actor; item
     * is not return to the party inventory.
     * @param {RPG.EquipItem} item 
     * @memberof Game_Actor
     */
    discardEquip(item: RPG.EquipItem): void;
    /**
     * Returns items the actor can't normally equip to the party inventory.
     * 
     * @param {boolean} forcing 
     * @memberof Game_Actor
     */
    releaseUnequippableItems(forcing: boolean): void;
    /**
     * Clears the actor's equipment; items are returned to the inventory.
     * 
     * @memberof Game_Actor
     */
    clearEquipments(): void;
    /**
     * Optimize the actor's equipment.
     * 
     * @memberof Game_Actor
     */
    optimizeEquipments(): void;
    /**
     * Equips the best item in the given slot.
     * 
     * @param {number} slotId 
     * @memberof Game_Actor
     */
    bestEquipItem(slotId: number): void;
    /**
     * Calculates the equip item performance and returns the sum/difference.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {number} 
     * @memberof Game_Actor
     */
    calcEquipItemPerformance(item: RPG.EquipItem): number;
    isSkillWtypeOk(skill: RPG.Skill): boolean;
    isWtypeEquipped(wtypeId: number): boolean;
    /**
     * Refreshes the actor.
     * 
     * @memberof Game_Actor
     */
    refresh(): void;
    friendsUnit(): Game_Party;
    opponentsUnit(): Game_Troop;
    /**
     * Returns true if the actor is a member in battle.
     * 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    isBattleMember(): boolean;
    isFormationChangeOk(): boolean;
    /**
     * Returns the current class of the actor from the database.
     * 
     * @returns {RPG.Class} 
     * @memberof Game_Actor
     */
    currentClass(): RPG.Class;
    /**
     * Returns true if the actor is the specified class from the database.
     * 
     * @param {RPG.Class} gameClass 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    isClass(gameClass: RPG.Class): boolean;
    /**
     * Returns the actor's skills; even if the skills are not usable.
     * 
     * @returns {Array<RPG.Skill>} 
     * @memberof Game_Actor
     */
    skills(): Array<RPG.Skill>;
    /**
     * Returns the usable skills of the actor.
     * 
     * @returns {Array<RPG.Skill>} 
     * @memberof Game_Actor
     */
    usableSkills(): Array<RPG.Skill>;
    /**
     * Returns the attack element ids.
     * 
     * @returns {Array<number>} 
     * @memberof Game_Actor
     */
    attackElements(): Array<number>;
    /**
     * Returns true if the actor has no weapon.
     * 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    hasNoWeapons(): boolean;
    /**
     * Returns the element id of barehanded attacks.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    bareHandsElementId(): number;
    /**
     * Returns the first attack animation id.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    attackAnimationId1(): number;
    /**
     * Returns the second attack animation id.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    attackAnimationId2(): number;
    /**
     * Returns the animation id for a barehanded attack.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    bareHandsAnimationId(): number;
    /**
     * Change the actor experience points; leveling up the actor
     * if it's above the required exp for the current level.
     * If show is set to true, actor level up with be displayed.
     * @param {number} exp 
     * @param {boolean} show 
     * @memberof Game_Actor
     */
    changeExp(exp: number, show: boolean): void;
    /**
     * Level up the actor.
     * 
     * @memberof Game_Actor
     */
    levelUp(): void;
    /**
     * Level down the actor.
     * 
     * @memberof Game_Actor
     */
    levelDown(): void;
    findNewSkills(lastSkills: Array<RPG.Skill>): Array<RPG.Skill>;
    /**
     * Displays the actor level up in a message window, with the learned skills.
     * 
     * @param {Array<RPG.Skill>} newSkills 
     * @memberof Game_Actor
     */
    displayLevelUp(newSkills: Array<RPG.Skill>): void;
    /**
     * Gives the specified exp to the actor.
     * 
     * @param {number} exp 
     * @memberof Game_Actor
     */
    gainExp(exp: number): void;
    /**
     * Returns the final exp rate of the actor based on if the actor 
     * is a reserved party member or an active battle member. 
     * @returns {number} 
     * @memberof Game_Actor
     */
    finalExpRate(): number;
    /**
     * Returns the exp rate of actors not in battle; this is set in the database.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    benchMembersExpRate(): number;
    /**
     * Returns true if the actor should display level up in a message window.
     * 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    shouldDisplayLevelUp(): boolean;
    /**
     * Changes the actor level; if show is set to true,
     * the actor level will be displayed.
     * @param {number} level 
     * @param {boolean} show 
     * @memberof Game_Actor
     */
    changeLevel(level: number, show: boolean): void;
    /**
     * Actor learns the specified skill given the skill id.
     * 
     * @param {number} skillId 
     * @memberof Game_Actor
     */
    learnSkill(skillId: number): void;
    /**
     * Actor forgets the specified skill given the skill id from 
     * the actor's usable skills.
     * @param {number} skillId 
     * @memberof Game_Actor
     */
    forgetSkill(skillId: number): void;
    /**
     * Returns true if the actor has learned the specified
     * skill given the specified skill id.
     * @param {number} skillId 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    isLearnedSkill(skillId: number): boolean;
    /**
     * Changes the actor class; if keep is true, the actor
     * will retain their experience points.
     * @param {number} classId 
     * @param {boolean} keepExp 
     * @memberof Game_Actor
     */
    changeClass(classId: number, keepExp: boolean): void;
    setCharacterImage(characterName: string, characterIndex: number): void;
    /**
     * Sets the face image of the actor given the face image (from database)
     * and face index within the iamge.
     * 
     * @param {string} faceName 
     * @param {number} faceIndex 
     * @memberof Game_Actor
     */
    setFaceImage(faceName: string, faceIndex: number): void;
    /**
     * Sets the battler image of the actor; this is the sprite displayed
     * in the side view mode.
     * @param {string} battlerName 
     * @memberof Game_Actor
     */
    setBattlerImage(battlerName: string): void;
    /**
     * Returns true if the actor sprite is visible.
     * 
     * @returns {boolean} 
     * @memberof Game_Actor
     */
    isSpriteVisible(): boolean;
    /**
     * Starts the animation on the actor given the specified animation id;
     * if  mirror is set to true, the animation will be mirrored. If a delay is enter,
     * the animation will be delayed.
     * @param {number} animationId 
     * @param {boolean} mirror 
     * @param {number} delay 
     * @memberof Game_Actor
     */
    startAnimation(animationId: number, mirror: boolean, delay: number): void;
    /**
     * Performs the attack motion for the actor.
     * 
     * @memberof Game_Actor
     */
    performAttack(): void;
    /**
     * Perform the victory motion for the actor.
     * 
     * @memberof Game_Actor
     */
    performVictory(): void;
    /**
     * Performs the escape motion for the actor.
     * 
     * @memberof Game_Actor
     */
    performEscape(): void;
    /**
     * Creates the action list for the actor.
     * 
     * @returns {Array<Game_Action>} 
     * @memberof Game_Actor
     */
    makeActionList(): Array<Game_Action>;
    /**
     * Creates the auto battle actions for the game actor.
     * 
     * @memberof Game_Actor
     */
    makeAutoBattleActions(): void;
    makeConfusionActions(): void;
    /**
     * Handler for when the player walks on the map scene.
     * 
     * @memberof Game_Actor
     */
    onPlayerWalk(): void;
    updateStateSteps(state: RPG.State): void;
    /**
     * Shows the added states to the actor.
     * 
     * @memberof Game_Actor
     */
    showAddedStates(): void;
    /**
     * Shows the removed states from the actor.
     * 
     * @memberof Game_Actor
     */
    showRemovedStates(): void;
    stepsForTurn(): number;
    turnEndOnMap(): void;
    /**
     * Checks the effect of the floor on the actor.
     * 
     * @memberof Game_Actor
     */
    checkFloorEffect(): void;
    /**
     * Executes the floor dmaage on the actor.
     * 
     * @memberof Game_Actor
     */
    executeFloorDamage(): void;
    /**
     * Returns the basic floor damage.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    basicFloorDamage(): number;
    /**
     * Returns the max floor damage.
     * 
     * @returns {number} 
     * @memberof Game_Actor
     */
    maxFloorDamage(): number;
    /**
     * Perform damage to the actor on the map scene.
     * 
     * @memberof Game_Actor
     */
    performMapDamage(): void;
    /**
     * Clears all of the actor's animations.
     * 
     * @memberof Game_Actor
     */
    clearActions(): void;
    /**
     * Returns action the actor is inputting.
     * 
     * @returns {Game_Action} 
     * @memberof Game_Actor
     */
    inputtingAction(): Game_Action;
    selectNextCommand(): boolean;
    selectPreviousCommand(): boolean;
    /**
     * Returns the last menu skill of the actor.
     * 
     * @returns {RPG.Skill} 
     * @memberof Game_Actor
     */
    lastMenuSkill(): RPG.Skill;
    setLastMenuSkill(skill: RPG.Skill): void;
    /**
     * Returns the last battle skill of the actor.
     * 
     * @returns {RPG.Skill} 
     * @memberof Game_Actor
     */
    lastBattleSkill(): RPG.Skill;
    setLastBattleSkill(skill: RPG.Skill): void;
    /**
     * Returns the last command symbol that the actor used.
     * 
     * @returns {string} 
     * @memberof Game_Actor
     */
    lastCommandSymbol(): string;
    /**
     * Sets the last command symbol to the given symbol; this is the
     * selected command in the battle menu.
     * @param {string} symbol 
     * @memberof Game_Actor
     */
    setLastCommandSymbol(symbol: string): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Enemy
 *
 * The game object declare class for an enemy.
 * @class Game_Enemy
 */
declare class Game_Enemy extends Game_Battler {
    protected _enemyId: number;
    protected _letter: string;
    protected _plural: boolean;
    protected _screenX: number;
    protected _screenY: number;

    constructor(enemyId: number, x: number, y: number);

    initMembers(): void;
    setup(enemyId: number, x: number, y: number): void;
    /**
     * Returns the other troops in the enemy team.
     * 
     * @returns {Game_Troop} 
     * @memberof Game_Enemy
     */
    friendsUnit(): Game_Troop;
    /**
     * Returns the game party.
     * 
     * @returns {Game_Party} 
     * @memberof Game_Enemy
     */
    opponentsUnit(): Game_Party;
    isBattleMember(): boolean;
    /**
     * Returns the enemy id.
     * 
     * @returns {number} 
     * @memberof Game_Enemy
     */
    enemyId(): number;
    /**
     * Returns the enemy information from the database.
     * 
     * @returns {RPG.Enemy} 
     * @memberof Game_Enemy
     */
    enemy(): RPG.Enemy;
    /**
     * Returns the enemy's exp amount.
     * 
     * @memberof Game_Enemy
     */
    exp(): void;
    /**
     * Returns enemy's given gold.
     * 
     * @memberof Game_Enemy
     */
    gold(): void;
    /**
     * Creates the drop items for the enemy specified by the database.
     * 
     * @returns {Array<RPG.BaseItem>} 
     * @memberof Game_Enemy
     */
    makeDropItems(): Array<RPG.BaseItem>;
    /**
     * Returns the item drop rate of the enemy.
     * 
     * @returns {number} 
     * @memberof Game_Enemy
     */
    dropItemRate(): number;
    itemObject(kind: number, dataId: number): void;
    /**
     * Returns true if the enemy sprite is visible.
     * 
     * @returns {boolean} 
     * @memberof Game_Enemy
     */
    isSpriteVisible(): boolean;
    /**
     * Returns enemy screen X coordinate.
     * 
     * @returns {number} 
     * @memberof Game_Enemy
     */
    screenX(): number;
    /**
     * Returns enemy screen Y position.
     * 
     * @returns {number} 
     * @memberof Game_Enemy
     */
    screenY(): number;
    /**
     * Returns the hue of the enemy.
     * 
     * @returns {number} 
     * @memberof Game_Enemy
     */
    battlerHue(): number;
    /**
     * Returns the enemy original name.
     * 
     * @returns {string} 
     * @memberof Game_Enemy
     */
    originalName(): string;
    isLetterEmpty(): boolean;
    setLetter(letter: string): void;
    setPlural(plural: boolean): void;
    /**
     * Transform the enemy into another enemy based on id.
     * 
     * @param {number} enemyId 
     * @memberof Game_Enemy
     */
    transform(enemyId: number): void;
    meetsCondition(action: RPG.Enemy.Action): boolean;
    meetsTurnCondition(param1: number, param2: number): boolean;
    meetsHpCondition(param1: number, param2: number): boolean;
    meetsMpCondition(param1: number, param2: number): boolean;
    meetsStateCondition(param: number): boolean;
    meetsPartyLevelCondition(param: number): boolean;
    meetsSwitchCondition(param: number): boolean;
    /**
     * Returns true if the enemy action is valid.
     * 
     * @param {RPG.Enemy.Action} action 
     * @returns {boolean} 
     * @memberof Game_Enemy
     */
    isActionValid(action: RPG.Enemy.Action): boolean;
    selectAction(actionList: Array<RPG.Enemy.Action>, ratingZero: number): RPG.Enemy.Action;
    selectAllActions(actionList: Array<RPG.Enemy.Action>): void;
}



/**
 * Wrapper class for Game_Actor.
 * This is the array form.
 * @class Game_Actors
 */
declare class Game_Actors {
    protected _data: Array<Game_Actor>;

    /**
     * Returns the actor with the specified id.
     * 
     * @param {number} actorId 
     * @returns {Game_Actor} 
     * @memberof Game_Actors
     */
    actor(actorId: number): Game_Actor;
}

/**
 * Superclass of Game_Party & Game_Troop
 * 
 * @class Game_Unit
 */
declare class Game_Unit {
    protected _inBattle: boolean;

    /**
     * Returns true if unit is in battle.
     * 
     * @returns {boolean} 
     * @memberof Game_Unit
     */
    inBattle(): boolean;
    /**
     * Returns the list of battlers.
     * 
     * @returns {Array<Game_Battler>} 
     * @memberof Game_Unit
     */
    members(): Array<Game_Battler>;
    /**
     * Returns the list of alive battlers.
     * 
     * @returns {Array<Game_Battler>} 
     * @memberof Game_Unit
     */
    aliveMembers(): Array<Game_Battler>;
    /**
     * Returns the list of dead battlers.
     * 
     * @returns {Array<Game_Battler>} 
     * @memberof Game_Unit
     */
    deadMembers(): Array<Game_Battler>;
    /**
     * Returns the list of movable members.
     * 
     * @returns {Array<Game_Battler>} 
     * @memberof Game_Unit
     */
    movableMembers(): Array<Game_Battler>;
    /**
     * Clears the unit's actions.
     * 
     * @memberof Game_Unit
     */
    clearActions(): void;
    /**
     * Returns the agility of the unit.
     * 
     * @returns {number} 
     * @memberof Game_Unit
     */
    agility(): number;
    tgrSum(): number;
    /**
     * Returns a random target from the game unit.
     * 
     * @returns {Game_Battler} 
     * @memberof Game_Unit
     */
    randomTarget(): Game_Battler;
    /**
     * Returns a random dead target from the game unit.
     * 
     * @returns {Game_Battler} 
     * @memberof Game_Unit
     */
    randomDeadTarget(): Game_Battler;
    smoothTarget(index: number): Game_Battler;
    smoothDeadTarget(index: number): Game_Battler;
    /**
     * Clears the action results.
     * 
     * @memberof Game_Unit
     */
    clearResults(): void;
    /**
     * Handler for when battle is started.
     * 
     * @memberof Game_Unit
     */
    onBattleStart(): void;
    /**
     * Handler for when battle has ended.
     * 
     * @memberof Game_Unit
     */
    onBattleEnd(): void;
    /**
     * Creates the action's of the game unit.
     * 
     * @memberof Game_Unit
     */
    makeActions(): void;
    /**
     * Selects a member of the unit given a battler.
     * 
     * @param {Game_Battler} activeMember 
     * @memberof Game_Unit
     */
    select(activeMember: Game_Battler): void;
    /**
     * Returns true if all members of the unit are dead.
     * 
     * @returns {boolean} 
     * @memberof Game_Unit
     */
    isAllDead(): boolean;
    substituteBattler(): Game_Battler;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Party
 *
 * The game object declare class for the party. Information such as gold and items is
 * included.
 * @class Game_Party
 */
declare class Game_Party extends Game_Unit {
    static ABILITY_ENCOUNTER_HALF: number;
    static ABILITY_ENCOUNTER_NONE: number;
    static ABILITY_CANCEL_SURPRISE: number;
    static ABILITY_RAISE_PREEMPTIVE: number;
    static ABILITY_GOLD_DOUBLE: number;
    static ABILITY_DROP_ITEM_DOUBLE: number;

    protected _gold: number;
    protected _steps: number;
    protected _lastItem: Game_Item;
    protected _menuActorId: number;
    protected _targetActorId: number;
    protected _actors: Array<Game_Actor>;

    protected _items: {[itemId: number]: number};
    protected _weapons: {[itemId: number]: number};
    protected _armors: {[itemId: number]: number};

    /**
     * Returns all party members.
     * 
     * @returns {Array<Game_Actor>} 
     * @memberof Game_Party
     */
    members(): Array<Game_Actor>;
    /**
     * Returns the living party members.
     * 
     * @returns {Array<Game_Actor>} 
     * @memberof Game_Party
     */
    aliveMembers(): Array<Game_Actor>;
    /**
     * Returns the dead party members.
     * 
     * @returns {Array<Game_Actor>} 
     * @memberof Game_Party
     */
    deadMembers(): Array<Game_Actor>;
    /**
     * Returns the movable members in the party.
     * 
     * @returns {Array<Game_Actor>} 
     * @memberof Game_Party
     */
    movableMembers(): Array<Game_Actor>;
    /**
     * Returns the battle members in the party.
     * 
     * @returns {Array<Game_Actor>} 
     * @memberof Game_Party
     */
    battleMembers(): Array<Game_Actor>;
    /**
     * Initialize all party items.
     * 
     * @memberof Game_Party
     */
    initAllItems(): void;
    /**
     * Returns true if the game party exists.
     * 
     * @returns {boolean} 
     * @memberof Game_Party
     */
    exists(): boolean;
    /**
     * Returns the size of the party.
     * 
     * @returns {number} 
     * @memberof Game_Party
     */
    size(): number;
    /**
     * Returns true if the game party is empty.
     * 
     * @returns {boolean} 
     * @memberof Game_Party
     */
    isEmpty(): boolean;
    /**
     * Returns the maximum battle members in the party.
     * 
     * @returns {number} 
     * @memberof Game_Party
     */
    maxBattleMembers(): number;
    /**
     * Returns the leader of the party.
     * 
     * @returns {Game_Actor} 
     * @memberof Game_Party
     */
    leader(): Game_Actor;
    /**
     * Revive the battle members of the party.
     * 
     * @memberof Game_Party
     */
    reviveBattleMembers(): void;
    items(): Array<RPG.Item>;
    /**
     * Returns the weapons of the party.
     * 
     * @returns {Array<RPG.Weapon>} 
     * @memberof Game_Party
     */
    weapons(): Array<RPG.Weapon>;
    /**
     * Returns the party's armor.
     * 
     * @returns {Array<RPG.Armor>} 
     * @memberof Game_Party
     */
    armors(): Array<RPG.Armor>;
    /**
     * Returns the party's equippable items.
     * 
     * @returns {Array<RPG.EquipItem>} 
     * @memberof Game_Party
     */
    equipItems(): Array<RPG.EquipItem>;
    /**
     * Returns all items within the party's posession.
     * 
     * @returns {Array<RPG.BaseItem>} 
     * @memberof Game_Party
     */
    allItems(): Array<RPG.BaseItem>;
    itemContainer(item: RPG.BaseItem): {[itemId: number]: number};
    /**
     * Sets up the starting party members.
     * 
     * @memberof Game_Party
     */
    setupStartingMembers(): void;
    name(): string;
    /**
     * Sets up a test battle with the party.
     * 
     * @memberof Game_Party
     */
    setupBattleTest(): void;
    /**
     * Sets up the battle test members.
     * 
     * @memberof Game_Party
     */
    setupBattleTestMembers(): void;
    /**
     * Sets up the battle test items.
     * 
     * @memberof Game_Party
     */
    setupBattleTestItems(): void;
    /**
     * Returns the highest level in the party.
     * 
     * @returns {number} 
     * @memberof Game_Party
     */
    highestLevel(): number;
    /**
     * Adds an actor to the party given the actor id.
     * 
     * @param {number} actorId 
     * @memberof Game_Party
     */
    addActor(actorId: number): void;
    /**
     * Removes an actor from the party given the actor id.
     * 
     * @param {number} actorId 
     * @memberof Game_Party
     */
    removeActor(actorId: number): void;
    /**
     * Returns party gold.
     * 
     * @returns {number} 
     * @memberof Game_Party
     */
    gold(): number;
    /**
     * Increases the party gold given a specified amount.
     * 
     * @param {number} amount 
     * @memberof Game_Party
     */
    gainGold(amount: number): void;
    /**
     * Decreases the party gold given a specified amount.
     * 
     * @param {number} amount 
     * @memberof Game_Party
     */
    loseGold(amount: number): void;
    /**
     * Returns maximum gold of the party.
     * 
     * @returns {number} 
     * @memberof Game_Party
     */
    maxGold(): number;
    /**
     * Returns the number of steps the party has taken.
     * 
     * @returns {number} 
     * @memberof Game_Party
     */
    steps(): number;
    /**
     * Increases the number of steps the party has taken.
     * 
     * @memberof Game_Party
     */
    increaseSteps(): void;
    /**
     * Returns the number of items in the possession of the party of the
     * given item.
     * @param {RPG.BaseItem} item 
     * @returns {number} 
     * @memberof Game_Party
     */
    numItems(item: RPG.BaseItem): number;
    /**
     * Returns the maximum number of items of the given item.
     * 
     * @param {RPG.BaseItem} item 
     * @returns {number} 
     * @memberof Game_Party
     */
    maxItems(item: RPG.BaseItem): number;
    hasMaxItems(item: RPG.BaseItem): boolean;
    /**
     * Returns true if the party has the given item;
     * if includeEquip is set to true, this will also check party equipment.
     * @param {RPG.BaseItem} item 
     * @param {boolean} includeEquip 
     * @returns {boolean} 
     * @memberof Game_Party
     */
    hasItem(item: RPG.BaseItem, includeEquip: boolean): boolean;
    /**
     * Returns true if any party member has the specified equip item.
     * 
     * @param {RPG.EquipItem} item 
     * @returns {boolean} 
     * @memberof Game_Party
     */
    isAnyMemberEquipped(item: RPG.EquipItem): boolean;
    gainItem(item: RPG.BaseItem, amount: number, includeEquip: boolean): void;
    discardMembersEquip(item: RPG.EquipItem, amount: number): void;
    loseItem(item: RPG.BaseItem, amount: number, includeEquip: boolean): void;
    /**
     * Has the party consume the given item.
     * 
     * @param {RPG.BaseItem} item 
     * @memberof Game_Party
     */
    consumeItem(item: RPG.BaseItem): void;
    /**
     * Returns true if the party can use the item.
     * 
     * @param {RPG.BaseItem} item 
     * @returns {boolean} 
     * @memberof Game_Party
     */
    canUse(item: RPG.BaseItem): boolean;
    canInput(): boolean;
    /**
     * Handler for when the player walks.
     * 
     * @memberof Game_Party
     */
    onPlayerWalk(): void;
    /**
     * Returns the actor that will be used in the current menu;
     * this is for menu scenes that target one actor.
     * @returns {Game_Actor} 
     * @memberof Game_Party
     */
    menuActor(): Game_Actor;
    setMenuActor(actor: Game_Actor): void;
    makeMenuActorNext(): void;
    makeMenuActorPrevious(): void;
    targetActor(): Game_Actor;
    setTargetActor(actor: Game_Actor): void;
    /**
     * Returns the last item selected by the game party.
     * 
     * @returns {RPG.BaseItem} 
     * @memberof Game_Party
     */
    lastItem(): RPG.BaseItem;
    setLastItem(item: RPG.BaseItem): void;
    swapOrder(index1: number, index2: number): void;
    /**
     * Returns the characters that go on the save life.
     * 
     * @returns {Array<Array<any>>} 
     * @memberof Game_Party
     */
    charactersForSavefile(): Array<Array<any>>;
    /**
     * Returns the actor faces for the save file.
     * 
     * @returns {Array<Array<any>>} 
     * @memberof Game_Party
     */
    facesForSavefile(): Array<Array<any>>;
    partyAbility(abilityId: number): boolean;
    /**
     * Returns true if the encounter rate is set to half.
     * 
     * @returns {boolean} 
     * @memberof Game_Party
     */
    hasEncounterHalf(): boolean;
    /**
     * Returns true if the encounter rate is set to none.
     * 
     * @returns {boolean} 
     * @memberof Game_Party
     */
    hasEncounterNone(): boolean;
    hasCancelSurprise(): boolean;
    /**
     * Returns true if the party has an increased chance of preemptive strike.
     * 
     * @returns {boolean} 
     * @memberof Game_Party
     */
    hasRaisePreemptive(): boolean;
    /**
     * Returns true if the party has double gold in effect.
     * 
     * @returns {boolean} 
     * @memberof Game_Party
     */
    hasGoldDouble(): boolean;
    hasDropItemDouble(): boolean;
    ratePreemptive(troopAgi: number): number;
    rateSurprise(troopAgi: number): number;
    /**
     * Performs victory motion for the entire party.
     * 
     * @memberof Game_Party
     */
    performVictory(): void;
    /**
     * Performs escape motion for the entire party.
     * 
     * @memberof Game_Party
     */
    performEscape(): void;
    /**
     * Remove battle states from all actors in the party.
     * 
     * @memberof Game_Party
     */
    removeBattleStates(): void;
    /**
     * Refreshes the motion on all actors in the party.
     * 
     * @memberof Game_Party
     */
    requestMotionRefresh(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Troop
 *
 * The game object declare class for a troop and the battle-related data.
 * @class Game_Troop
 */
declare class Game_Troop extends Game_Unit {
    static LETTER_TABLE_HALF: Array<string>;
    static LETTER_TABLE_FULL: Array<string>;

    protected _interpreter: Game_Interpreter;
    protected _troopId: number;
    protected _eventFlags: {[page: number]: boolean};
    protected _enemies: Array<Game_Enemy>;
    protected _turnCount: number;
    protected _namesCount: {[name: string]: number};

    /**
     * Returns all enemies in the battle.
     * 
     * @returns {Array<Game_Enemy>} 
     * @memberof Game_Troop
     */
    members(): Array<Game_Enemy>;
    /**
     * Returns all alive enemies.
     * 
     * @returns {Array<Game_Enemy>} 
     * @memberof Game_Troop
     */
    aliveMembers(): Array<Game_Enemy>;
    /**
     * Returns all dead enemies.
     * 
     * @returns {Array<Game_Enemy>} 
     * @memberof Game_Troop
     */
    deadMembers(): Array<Game_Enemy>;
    /**
     * Returns movable enemies.
     * 
     * @returns {Array<Game_Enemy>} 
     * @memberof Game_Troop
     */
    movableMembers(): Array<Game_Enemy>;
    /**
     * Returns true if event is running.
     * 
     * @returns {boolean} 
     * @memberof Game_Troop
     */
    isEventRunning(): boolean;
    /**
     * Updates the game interpreter.
     * 
     * @memberof Game_Troop
     */
    updateInterpreter(): void;
    /**
     * Returns the turn count.
     * 
     * @returns {number} 
     * @memberof Game_Troop
     */
    turnCount(): number;
    clear(): void;
    /**
     * Returns troop information from the database.
     * 
     * @returns {RPG.Troop} 
     * @memberof Game_Troop
     */
    troop(): RPG.Troop;
    setup(troopId: number): void;
    /**
     * Creates unique names for each enemy.
     * 
     * @memberof Game_Troop
     */
    makeUniqueNames(): void;
    /**
     * Returns the letter table for enemy troops.
     * 
     * @returns {Array<string>} 
     * @memberof Game_Troop
     */
    letterTable(): Array<string>;
    /**
     * Returns the name of enemies within the troop.
     * 
     * @returns {Array<string>} 
     * @memberof Game_Troop
     */
    enemyNames(): Array<string>;
    meetsConditions(page: RPG.BattleEventPage): boolean;
    setupBattleEvent(): void;
    /**
     * Increases the turn number.
     * 
     * @memberof Game_Troop
     */
    increaseTurn(): void;
    /**
     * Returns the total exp of all members of the enemy troop.
     * 
     * @returns {number} 
     * @memberof Game_Troop
     */
    expTotal(): number;
    /**
     * Return the total gold of all enemies.
     * 
     * @returns {number} 
     * @memberof Game_Troop
     */
    goldTotal(): number;
    /**
     * Returns the gold rate based on game party gold rate.
     * 
     * @returns {number} 
     * @memberof Game_Troop
     */
    goldRate(): number;
    /**
     * Creates the drop items for all members of the enemy troop, and
     * returns the item information.
     * @returns {Array<RPG.BaseItem>} 
     * @memberof Game_Troop
     */
    makeDropItems(): Array<RPG.BaseItem>;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Map
 *
 * The game object declare class for a map. It contains scrolling and passage
 * determination functions.
 * @class Game_Map
 */
declare class Game_Map {
    protected _interpreter: Game_Interpreter;
    protected _mapId: number;
    protected _tilesetId: number;
    protected _events: Array<Game_Event>;
    protected _commonEvents: Array<Game_CommonEvent>;
    protected _vehicles: Array<Game_Vehicle>;
    protected _displayX: number;
    protected _displayY: number;
    protected _nameDisplay: boolean;
    protected _scrollDirection: number;
    protected _scrollRest: number;
    protected _scrollSpeed: number;
    protected _parallaxName: string;
    protected _parallaxZero: boolean;
    protected _parallaxLoopX: boolean;
    protected _parallaxLoopY: boolean;
    protected _parallaxSx: number;
    protected _parallaxSy: number;
    protected _parallaxX: number;
    protected _parallaxY: number;
    protected _battleback1Name: string;
    protected _battleback2Name: string;
    protected _needsRefresh: boolean;

    setup(mapId: number): void;
    /**
     * Returns true if an event is running.
     * 
     * @returns {boolean} 
     * @memberof Game_Map
     */
    isEventRunning(): boolean;
    /**
     * Returns tile width.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    tileWidth(): number;
    /**
     * Returns tile height.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    tileHeight(): number;
    /**
     * Returns map id.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    mapId(): number;
    /**
     * Returns the tileset id.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    tilesetId(): number;
    /**
     * Returns the display x coordinate.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    displayX(): number;
    /**
     * Returns the display y coordinate.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    displayY(): number;
    parallaxName(): string;
    /**
     * Returns the name of battle back 1.
     * 
     * @returns {string} 
     * @memberof Game_Map
     */
    battleback1Name(): string;
    /**
     * Returns the name of battle back 2.
     * 
     * @returns {string} 
     * @memberof Game_Map
     */
    battleback2Name(): string;
    requestRefresh(mapId: number): void;
    /**
     * Returns true if the name display is enabled.
     * 
     * @returns {boolean} 
     * @memberof Game_Map
     */
    isNameDisplayEnabled(): boolean;
    /**
     * Disables name display.
     * 
     * @memberof Game_Map
     */
    disableNameDisplay(): void;
    /**
     * Enable name display.
     * 
     * @memberof Game_Map
     */
    enableNameDisplay(): void;
    /**
     * Creates the vehicles for the game map.
     * 
     * @memberof Game_Map
     */
    createVehicles(): void;
    /**
     * Refreshes the vehicles on the game map.
     * 
     * @memberof Game_Map
     */
    refereshVehicles(): void;
    vehicles(): Array<Game_Vehicle>;
    /**
     * Returns the game vehicle specified by type.
     * 
     * @param {string} type 
     * @returns {Game_Vehicle} 
     * @memberof Game_Map
     */
    vehicle(type: string): Game_Vehicle;
    /**
     * Returns the game boat.
     * 
     * @returns {Game_Vehicle} 
     * @memberof Game_Map
     */
    boat(): Game_Vehicle;
    /**
     * Returns the game ship.
     * 
     * @returns {Game_Vehicle} 
     * @memberof Game_Map
     */
    ship(): Game_Vehicle;
    /**
     * Returns the game airship.
     * 
     * @returns {Game_Vehicle} 
     * @memberof Game_Map
     */
    airship(): Game_Vehicle;
    setupEvents(): void;
    /**
     * Returns all events on the game map.
     * 
     * @returns {Array<Game_Event>} 
     * @memberof Game_Map
     */
    events(): Array<Game_Event>;
    /**
     * Returns an event, given the event id.
     * 
     * @param {number} eventId 
     * @returns {Game_Event} 
     * @memberof Game_Map
     */
    event(eventId: number): Game_Event;
    /**
     * Erases the event given the event id.
     * 
     * @param {number} eventId 
     * @memberof Game_Map
     */
    eraseEvent(eventId: number): void;
    /**
     * Returns all the parallel running common events.
     * 
     * @returns {Array<RPG.CommonEvent>} 
     * @memberof Game_Map
     */
    parallelCommonEvents(): Array<RPG.CommonEvent>;
    setupScroll(): void;
    setupParallax(): void;
    setupBattleback(): void;
    setDisplayPos(x: number, y: number): void;
    parallaxOx(): number;
    parallaxOy(): number;
    /**
     * Returns the tilset of the game map.
     * 
     * @returns {RPG.Tileset} 
     * @memberof Game_Map
     */
    tileset(): RPG.Tileset;
    /**
     * Returns the tileset flags of the game map.
     * 
     * @returns {Array<number>} 
     * @memberof Game_Map
     */
    tilesetFlags(): Array<number>;
    /**
     * Returns the display name of the game map.
     * 
     * @returns {string} 
     * @memberof Game_Map
     */
    displayName(): string;
    /**
     * Returns the map width.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    width(): number;
    /**
     * Returns the map height.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    height(): number;
    /**
     * Returns the map data.
     * 
     * @returns {Array<number>} 
     * @memberof Game_Map
     */
    data(): Array<number>;
    /**
     * Returns true if the map loops horizontally.
     * 
     * @returns {boolean} 
     * @memberof Game_Map
     */
    isLoopHorizontal(): boolean;
    /**
     * Returns true if the map loops vertically.
     * 
     * @returns {boolean} 
     * @memberof Game_Map
     */
    isLoopVertical(): boolean;
    /**
     * Returns true if dash is disabled on the map.
     * 
     * @returns {boolean} 
     * @memberof Game_Map
     */
    isDashDisabled(): boolean;
    /**
     * Returns the list of possible encounters on the current map.
     * 
     * @returns {Array<RPG.Map.Encounter>} 
     * @memberof Game_Map
     */
    encounterList(): Array<RPG.Map.Encounter>;
    /**
     * Returns the number of encounter steps on the map.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    encounterStep(): number;
    /**
     * Returns true if the map is an over world map.
     * 
     * @returns {boolean} 
     * @memberof Game_Map
     */
    isOverworld(): boolean;
    /**
     * Returns the screen tile x coordinate.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    screenTileX(): number;
    /**
     * Returns the screen tile y coordinate.
     * 
     * @returns {number} 
     * @memberof Game_Map
     */
    screenTileY(): number;
    adjustX(x: number): number;
    adjustY(y: number): number;
    roundX(x: number): number;
    roundY(y: number): number;
    xWithDirection(x: number, d: number): number;
    yWithDirection(y: number, d: number): number;
    roundXWithDirection(x: number, d: number): number;
    roundYWithDirection(y: number, d: number): number;
    deltaX(x1: number, x2: number): number;
    deltaY(y1: number, y2: number): number;
    distance(x1: number, y1: number, x2: number, y2: number): number;
    /**
     * Converts the x coordinate from canvas to map coordinate x.
     * 
     * @param {number} x 
     * @returns {number} 
     * @memberof Game_Map
     */
    canvasToMapX(x: number): number;
    /**
     * Converts the y coordinate from canvas to map y coordinate.
     * 
     * @param {number} y 
     * @returns {number} 
     * @memberof Game_Map
     */
    canvasToMapY(y: number): number;
    /**
     * Auto plays the game map.
     * 
     * @memberof Game_Map
     */
    autoplay(): void;
    refreshIfNeeded(): void;
    refresh(): void;
    refreshTileEvents(): void;
    /**
     * Returns the game events at the specified
     * x and y position.
     * @param {number} x 
     * @param {number} y 
     * @returns {Array<Game_Event>} 
     * @memberof Game_Map
     */
    eventsXy(x: number, y: number): Array<Game_Event>;
    eventsXyNt(x: number, y: number): Array<Game_Event>;
    tileEventsXy(x: number, y: number): Array<Game_Event>;
    eventIdXy(x: number, y: number): number;
    scrollDown(distance: number): void;
    scrollLeft(distance: number): void;
    scrollRight(distance: number): void;
    scrollUp(distance: number): void;
    /**
     * Returns true if the x and y coordinates are valid.
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean} 
     * @memberof Game_Map
     */
    isValid(x: number, y: number): boolean;
    checkPassage(x: number, y: number, bit: number): boolean;
    /**
     * Returns the tile id at the specified x, y, and z coordinates.
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     * @returns {number} 
     * @memberof Game_Map
     */
    tileId(x: number, y: number, z: number): number;
    layeredTiles(x: number, y: number): Array<number>;
    allTiles(x: number, y: number): Array<number>;
    autotileType(x: number, y: number, z: number): number;
    isPassable(x: number, y: number, d: number): boolean;
    isBoatPassable(x: number, y: number): boolean;
    isShipPassable(x: number, y: number): boolean;
    isAirshipLandOk(x: number, y: number): boolean;
    checkLayeredTilesFlags(x: number, y: number, bit: number): boolean;
    /**
     * Returns true if the specified element at the given x and y coordinates
     * is a ladder.
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean} 
     * @memberof Game_Map
     */
    isLadder(x: number, y: number): boolean;
    isBush(x: number, y: number): boolean;
    isCounter(x: number, y: number): boolean;
    isDamageFloor(x: number, y: number): boolean;
    terrainTag(x: number, y: number): number;
    regionId(x: number, y: number): number;
    startScroll(direction: number, distance: number, speed: number): void;
    isScrolling(): boolean;
    /**
     * Updates the game map, given that the scene is active.
     * 
     * @param {boolean} sceneActive 
     * @memberof Game_Map
     */
    update(sceneActive: boolean): void;
    updateScroll(): void;
    scrollDistance(): number;
    doScroll(direction: number, distance: number): void;
    /**
     * Updates all events on the map.
     * 
     * @memberof Game_Map
     */
    updateEvents(): void;
    /**
     * Updates all game vehicles on the map.
     * 
     * @memberof Game_Map
     */
    updateVehicles(): void;
    /**
     * Updates the map parallaxes.
     * 
     * @memberof Game_Map
     */
    updateParallax(): void;
    /**
     * Changes them ap tileset, given the tileset id.
     * 
     * @param {number} tilesetId 
     * @memberof Game_Map
     */
    changeTileset(tilesetId: number): void;
    changeBattleback(battleback1Name: string, battleback2Name: string): void;
    changeParallax(name: string, loopX: boolean, loopY: boolean, sx: number, sy: number): void;
    /**
     * Updates the map's game interpreter.
     * 
     * @memberof Game_Map
     */
    updateInterpreter(): void;
    /**
     * Unlocks an event on the map given the event id.
     * 
     * @param {number} eventId 
     * @memberof Game_Map
     */
    unlockEvent(eventId: number): void;
    setupStartingEvent(): boolean;
    setupTestEvent(): boolean;
    setupStartingMapEvent(): boolean;
    /**
     * Sets up an auto run common event.
     * 
     * @returns {boolean} 
     * @memberof Game_Map
     */
    setupAutorunCommonEvent(): boolean;
    /**
     * Returns true if any event is starting on the map.
     * 
     * @returns {boolean} 
     * @memberof Game_Map
     */
    isAnyEventStarting(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Game_CommonEvent
 *
 * The game object declare class for a common event. It contains functionality for
 * running parallel process events.
 * @class Game_CommonEvent
 */
declare class Game_CommonEvent {
    protected _commonEventId: number;
    protected _interpreter: Game_Interpreter;

    constructor(commonEventId: number);

    /**
     * Returns the common event information from the database.
     * 
     * @returns {RPG.CommonEvent} 
     * @memberof Game_CommonEvent
     */
    event(): RPG.CommonEvent;
    /**
     * Returns the common event's list of event commands.
     * 
     * @returns {Array<RPG.EventCommand>} 
     * @memberof Game_CommonEvent
     */
    list(): Array<RPG.EventCommand>;
    /**
     * Refreshes the common event.
     * 
     * @memberof Game_CommonEvent
     */
    refresh(): void;
    /**
     * Returns true if the common event is active.
     * 
     * @returns {boolean} 
     * @memberof Game_CommonEvent
     */
    isActive(): boolean;
    /**
     * Updates the common event.
     * 
     * @memberof Game_CommonEvent
     */
    update(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_CharacterBase
 *
 * The superdeclare class of Game_Character. It handles basic information, such as
 * coordinates and images, shared by all characters.
 * @class Game_CharacterBase
 */
declare class Game_CharacterBase {
    protected _x: number;
    protected _y: number;
    protected _realX: number;
    protected _realY: number;
    protected _moveSpeed: number;
    protected _moveFrequency: number;
    protected _opacity: number;
    protected _blendMode: number;
    protected _direction: number;
    protected _pattern: number;
    protected _priorityType: number;
    protected _tileId: number;
    protected _characterName: string;
    protected _characterIndex: number;
    protected _isObjectCharacter: boolean;
    protected _walkAnime: boolean;
    protected _stepAnime: boolean;
    protected _directionFix: boolean;
    protected _through: boolean;
    protected _transparent: boolean;
    protected _bushDepth: number;
    protected _animationId: number;
    protected _balloonId: number;
    protected _animationPlaying: boolean;
    protected _balloonPlaying: boolean;
    protected _animationCount: number;
    protected _stopCount: number;
    protected _jumpCount: number;
    protected _jumpPeak: number;
    protected _movementSuccess: boolean;

    /** [read-only] */
    x: number;
    /** [read-only] */
    y: number;

    initMembers(): void;
    pos(x: number, y: number): boolean;
    posNt(x: number, y: number): boolean;
    /**
     * Returns the move speed of the game character.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    moveSpeed(): number;
    setMoveSpeed(moveSpeed: number): void;
    /**
     * Returns the move frequency of the character.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    moveFrequency(): number;
    setMoveFrequency(moveFrequency: number): void;
    opacity(): number;
    setOpacity(opacity: number): void;
    /**
     * Returns the blend mode of the character;
     * these are represented by numbers.
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    blendMode(): number;
    /**
     * Sets the blend mode of the character;
     * these are represented by numbers.
     * @param {number} blendMode 
     * @memberof Game_CharacterBase
     */
    setBlendMode(blendMode: number): void;
    /**
     * Returns true if the character is
     * normal priority; this means you can collide with them.
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    isNormalPriority(): boolean;
    setPriorityType(priorityType: number): void;
    /**
     * Returns true if the character is moving.
     * 
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    isMoving(): boolean;
    /**
     * Returns true if the character is jumping.
     * 
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    isJumping(): boolean;
    /**
     * Returns the jump height of base character.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    jumpHeight(): number;
    /**
     * Returns true if the character is stopping.
     * 
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    isStopping(): boolean;
    checkStop(threshold: number): boolean;
    /**
     * Resets the step count of the character.
     * 
     * @memberof Game_CharacterBase
     */
    resetStopCount(): void;
    realMoveSpeed(): number;
    distancePerFrame(): number;
    /**
     * Returns true if the character is dashing.
     * 
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    isDashing(): boolean;
    isDebugThrough(): boolean;
    /**
     * Straightens the character.
     * 
     * @memberof Game_CharacterBase
     */
    straighten(): void;
    reverseDir(d: number): number;
    canPass(x: number, y: number, d: number): boolean;
    canPassDiagonally(x: number, y: number, horz: number, vert: number): boolean;
    isMapPassable(x: number, y: number, d: number): boolean;
    isCollidedWithCharacters(x: number, y: number): boolean;
    isCollidedWithEvents(x: number, y: number): boolean;
    isCollidedWithVehicles(x: number, y: number): boolean;
    setPosition(x: number, y: number): void;
    copyPosition(character: Game_Player): void;
    locate(x: number, y: number): void;
    direction(): number;
    /**
     * Sets the direction of the character based on numpad
     * directions.
     * @param {number} d 
     * @memberof Game_CharacterBase
     */
    setDirection(d: number): void;
    /**
     * Returns true if the character is a tile; these
     * are events without character sprites.
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    isTile(): boolean;
    /**
     * Returns true if the character is an object character;
     * these are events with character sprites.
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    isObjectCharacter(): boolean;
    shiftY(): number;
    scrolledX(): number;
    scrolledY(): number;
    /**
     * Returns the character's scrreen x position.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    screenX(): number;
    /**
     * Returns the character's screen y position.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    screenY(): number;
    /**
     * Returns the character's screen z position.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    screenZ(): number;
    isNearTheScreen(): boolean;
    update(): void;
    updateStop(): void;
    updateJump(): void;
    updateMove(): void;
    updateAnimation(): void;
    animationWait(): number;
    /**
     * Updates the character's animation count.
     * 
     * @memberof Game_CharacterBase
     */
    updateAnimationCount(): void;
    updatePattern(): void;
    maxPattern(): number;
    /**
     * Returns the pattern of the character; these are the walking 
     * patterns.
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    pattern(): number;
    /**
     * Sets the pattern of the character, given 
     * a pattern number.
     * @param {number} pattern 
     * @memberof Game_CharacterBase
     */
    setPattern(pattern: number): void;
    isOriginalPattern(): boolean;
    /**
     * Resets the pattern of the character.
     * 
     * @memberof Game_CharacterBase
     */
    resetPattern(): void;
    refreshBushDepth(): void;
    isOnLadder(): boolean;
    isOnBush(): boolean;
    /**
     * Returns the terrain tag of the character.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    terrainTag(): number;
    /**
     * Returns the region id of the character.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    regionId(): number;
    /**
     * Increases the character steps.
     * 
     * @memberof Game_CharacterBase
     */
    increaseSteps(): void;
    /**
     * Returns the tile id of character.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    tileId(): number;
    characterName(): string;
    characterIndex(): number;
    setImage(characterName: string, characterIndex: number): void;
    setTileImage(tileId: number): void;
    checkEventTriggerTouchFront(d: number): void;
    checkEventTriggerTouch(x: number, y: number): boolean;
    isMovementSucceeded(x: number, y: number): boolean;
    setMovementSuccess(success: boolean): void;
    moveStraight(d: number): void;
    moveDiagonally(horz: number, vert: number): void;
    jump(xPlus: number, yPlus: number): void;
    hasWalkAnime(): boolean;
    setWalkAnime(walkAnime: boolean): void;
    /**
     * Returns true if the character has step animation.
     * 
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    hasStepAnime(): boolean;
    setStepAnime(stepAnime: boolean): void;
    /**
     * Returns true if the character is set to a fixed direction.
     * 
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    isDirectionFixed(): boolean;
    /**
     * Sets the character to be fixed in a specified direction
     * given a boolean value.
     * @param {boolean} directionFix 
     * @memberof Game_CharacterBase
     */
    setDirectionFix(directionFix: boolean): void;
    /**
     * Returns true if the character is set to pass through.
     * 
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    isThrough(): boolean;
    setThrough(through: boolean): void;
    isTransparent(): boolean;
    /**
     * Returns the bush depth around the character.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    bushDepth(): number;
    setTransparent(transparent: boolean): void;
    /**
     * Requests an animation given the animation id.
     * 
     * @param {number} animationId 
     * @memberof Game_CharacterBase
     */
    requestAnimation(animationId: number): void;
    /**
     * Requests the balloon animation given the balloon id.
     * 
     * @param {number} balloonId 
     * @memberof Game_CharacterBase
     */
    requestBalloon(balloonId: number): void;
    /**
     * Returns the animation id.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    animationId(): number;
    /**
     * Returns the id of the balloon animation.
     * 
     * @returns {number} 
     * @memberof Game_CharacterBase
     */
    balloonId(): number;
    /**
     * Starts the requested animation.
     * 
     * @memberof Game_CharacterBase
     */
    startAnimation(): void;
    /**
     * Stars a balloon animation.
     * 
     * @memberof Game_CharacterBase
     */
    startBalloon(): void;
    isAnimationPlaying(): boolean;
    /**
     * Returns true if a balloon animation is playing.
     * 
     * @returns {boolean} 
     * @memberof Game_CharacterBase
     */
    isBalloonPlaying(): boolean;
    endAnimation(): void;
    /**
     * Ends the balloon animation on the character.
     * 
     * @memberof Game_CharacterBase
     */
    endBalloon(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Character
 *
 * The superdeclare class of Game_Player, Game_Follower, GameVehicle, and Game_Event.
 * @class Game_Character
 */
declare class Game_Character extends Game_CharacterBase {
    static ROUTE_END: number;
    static ROUTE_MOVE_DOWN: number;
    static ROUTE_MOVE_LEFT: number;
    static ROUTE_MOVE_RIGHT: number;
    static ROUTE_MOVE_UP: number;
    static ROUTE_MOVE_LOWER_L: number;
    static ROUTE_MOVE_LOWER_R: number;
    static ROUTE_MOVE_UPPER_L: number;
    static ROUTE_MOVE_UPPER_R: number;
    static ROUTE_MOVE_RANDOM: number;
    static ROUTE_MOVE_TOWARD: number;
    static ROUTE_MOVE_AWAY: number;
    static ROUTE_MOVE_FORWARD: number;
    static ROUTE_MOVE_BACKWARD: number;
    static ROUTE_JUMP: number;
    static ROUTE_WAIT: number;
    static ROUTE_TURN_DOWN: number;
    static ROUTE_TURN_LEFT: number;
    static ROUTE_TURN_RIGHT: number;
    static ROUTE_TURN_UP: number;
    static ROUTE_TURN_90D_R: number;
    static ROUTE_TURN_90D_L: number;
    static ROUTE_TURN_180D: number;
    static ROUTE_TURN_90D_R_L: number;
    static ROUTE_TURN_RANDOM: number;
    static ROUTE_TURN_TOWARD: number;
    static ROUTE_TURN_AWAY: number;
    static ROUTE_SWITCH_ON: number;
    static ROUTE_SWITCH_OFF: number;
    static ROUTE_CHANGE_SPEED: number;
    static ROUTE_CHANGE_FREQ: number;
    static ROUTE_WALK_ANIME_ON: number;
    static ROUTE_WALK_ANIME_OFF: number;
    static ROUTE_STEP_ANIME_ON: number;
    static ROUTE_STEP_ANIME_OFF: number;
    static ROUTE_DIR_FIX_ON: number;
    static ROUTE_DIR_FIX_OFF: number;
    static ROUTE_THROUGH_ON: number;
    static ROUTE_THROUGH_OFF: number;
    static ROUTE_TRANSPARENT_ON: number;
    static ROUTE_TRANSPARENT_OFF: number;
    static ROUTE_CHANGE_IMAGE: number;
    static ROUTE_CHANGE_OPACITY: number;
    static ROUTE_CHANGE_BLEND_MODE: number;
    static ROUTE_PLAY_SE: number;
    static ROUTE_SCRIPT: number;

    protected _moveRouteForcing: boolean;
    protected _moveRoute: RPG.MoveRoute;
    protected _moveRouteIndex: number;
    protected _originalMoveRoute: RPG.MoveRoute;
    protected _originalMoveRouteIndex: number;
    protected _waitCount: number;

    initMembers(): void;
    /**
     * Memorizes the movement route.
     * 
     * @memberof Game_Character
     */
    memorizeMoveRoute(): void;
    /**
     * Restores the original movement route.
     * 
     * @memberof Game_Character
     */
    restoreMoveRoute(): void;
    /**
     * Returns true if the move route is being forced.
     * 
     * @returns {boolean} 
     * @memberof Game_Character
     */
    isMoveRouteForcing(): boolean;
    /**
     * Sets the move route of the game character.
     * 
     * @param {RPG.MoveRoute} moveRoute 
     * @memberof Game_Character
     */
    setMoveRoute(moveRoute: RPG.MoveRoute): void;
    /**
     * Forces the move route of the game character.
     * 
     * @param {RPG.MoveRoute} moveRoute 
     * @memberof Game_Character
     */
    forceMoveRoute(moveRoute: RPG.MoveRoute): void;
    updateStop(): void;
    /**
     * Updates the game character's move routine.
     * 
     * @memberof Game_Character
     */
    updateRoutineMove(): void;
    /**
     * Processes the given move commands.
     * 
     * @param {RPG.MoveCommand} command 
     * @memberof Game_Character
     */
    processMoveCommand(command: RPG.MoveCommand): void;
    deltaXFrom(x: number): number;
    deltaYFrom(y: number): number;
    /**
     * Move's the game character at random.
     * 
     * @memberof Game_Character
     */
    moveRandom(): void;
    /**
     * Moves the game character toward the other game character.
     * 
     * @param {Game_Character} character 
     * @memberof Game_Character
     */
    moveTowardCharacter(character: Game_Character): void;
    /**
     * Moves the game character away from the other game character.
     * 
     * @param {Game_Character} character 
     * @memberof Game_Character
     */
    moveAwayFromCharacter(character: Game_Character): void;
    /**
     * Turns the game character toward the other game character.
     * 
     * @param {Game_Character} character 
     * @memberof Game_Character
     */
    turnTowardCharacter(character: Game_Character): void;
    /**
     * Turns the game character away from the other game character.
     * 
     * @param {Game_Character} character 
     * @memberof Game_Character
     */
    turnAwayFromCharacter(character: Game_Character): void;
    /**
     * Turns the game character toward the player.
     * 
     * @memberof Game_Character
     */
    turnTowardPlayer(): void;
    /**
     * Turns the game character away from the player.
     * 
     * @memberof Game_Character
     */
    turnAwayFromPlayer(): void;
    /**
     * Moves the game character toward the player.
     * 
     * @memberof Game_Character
     */
    moveTowardPlayer(): void;
    /**
     * Moves the game character away from the player.
     * 
     * @memberof Game_Character
     */
    moveAwayFromPlayer(): void;
    /**
     * Moves the game character forward.
     * 
     * @memberof Game_Character
     */
    moveForward(): void;
    /**
     * Moves the game character backward.
     * 
     * @memberof Game_Character
     */
    moveBackward(): void;
    /**
     * Handles the end of the move route.
     * 
     * @memberof Game_Character
     */
    processRouteEnd(): void;
    advanceMoveRouteIndex(): void;
    /**
     * Turns the game character right by 90 degrees.
     * 
     * @memberof Game_Character
     */
    turnRight90(): void;
    /**
     * Turns the game character left by 90 degrees.
     * 
     * @memberof Game_Character
     */
    turnLeft90(): void;
    turn180(): void;
    /**
     * Turns the game character or left by 90 degrees.
     * 
     * @memberof Game_Character
     */
    turnRightOrLeft90(): void;
    /**
     * Turns the game character at random.
     * 
     * @memberof Game_Character
     */
    turnRandom(): void;
    swap(character: Game_Character): void;
    findDirectionTo(goalX: number, goalY: number): number;
    /**
     * Returns the search limit for path finding.
     * 
     * @returns {number} 
     * @memberof Game_Character
     */
    searchLimit(): number;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Player
 *
 * The game object declare class for the player. It contains event starting
 * determinants and map scrolling functions.
 * @class Game_Player
 */
declare class Game_Player extends Game_Character {
    protected _vehicleType: string;
    protected _vehicleGettingOn: boolean;
    protected _vehicleGettingOff: boolean;
    protected _dashing: boolean;
    protected _needsMapReload: boolean;
    protected _transferring: boolean;
    protected _newMapId: number;
    protected _newX: number;
    protected _newY: number;
    protected _newDirection: number;
    protected _fadeType: number;
    protected _followers: Game_Followers;
    protected _encounterCount: number;

    /**
     * Clears the transfer information for the player.
     * 
     * @memberof Game_Player
     */
    clearTransferInfo(): void;
    /**
     * Returns the player followers (party members).
     * 
     * @returns {Game_Followers} 
     * @memberof Game_Player
     */
    followers(): Game_Followers;
    /**
     * Refreshes the game player.
     * 
     * @memberof Game_Player
     */
    refresh(): void;
    /**
     * Returns true if the player is stopping.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    isStopping(): boolean;
    /**
     * Reserves a transfer of the player to the specified map, at the given
     * x and y coordinates, facing the given direction (d). Using a specific fade.
     * @param {number} mapId 
     * @param {number} x 
     * @param {number} y 
     * @param {number} [d] 
     * @param {number} [fadeType] 
     * @memberof Game_Player
     */
    reserveTransfer(mapId: number, x: number, y: number, d?: number, fadeType?: number): void;
    requestMapReload(): void;
    isTransferring(): boolean;
    /**
     * Returns the new map id.
     * 
     * @returns {number} 
     * @memberof Game_Player
     */
    newMapId(): number;
    fadeType(): number;
    /**
     * Performs a transfer of the player to a different area or map.
     * 
     * @memberof Game_Player
     */
    performTransfer(): void;
    isMapPassable(x: number, y: number, d: number): boolean;
    /**
     * Returns the current vehicles the player is riding in.
     * 
     * @returns {Game_Vehicle} 
     * @memberof Game_Player
     */
    vehicle(): Game_Vehicle;
    /**
     * Returns true if the player is in a boat.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    isInBoat(): boolean;
    /**
     * Returns true if the player is in a ship.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    isInShip(): boolean;
    /**
     * Returns true if the player is in an airship.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    isInAirship(): boolean;
    /**
     * Returns true if the player is in a vehicle.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    isInVehicle(): boolean;
    /**
     * Returns true if the player is in their normal state.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    isNormal(): boolean;
    /**
     * Returns true if the player is dashing.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    isDashRing(): boolean;
    isDebugThrough(): boolean;
    isCollided(x: number, y: number): boolean;
    /**
     * Returns the player's center x coordinate.
     * 
     * @returns {number} 
     * @memberof Game_Player
     */
    centerX(): number;
    /**
     * Returns the player's center y coordinate.
     * 
     * @returns {number} 
     * @memberof Game_Player
     */
    centerY(): number;
    center(x: number, y: number): void;
    locate(x: number, y: number): void;
    increaseSteps(): void;
    /**
     * Creates the encounter count for the player.
     * 
     * @memberof Game_Player
     */
    makeEncounterCount(): void;
    /**
     * Creates the encounter troop id and returns it.
     * 
     * @returns {number} 
     * @memberof Game_Player
     */
    makeEncounterTroopId(): number;
    meetsEncounterConditions(encounter: RPG.Map.Encounter): boolean;
    /**
     * Executes an encounter.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    executeEncounter(): boolean;
    /**
     * Has the player start a map event at the given x and y coordinates.
     * Also passing the triggers and whether the event start is normal.
     * @param {number} x 
     * @param {number} y 
     * @param {Array<number>} triggers 
     * @param {boolean} normal 
     * @memberof Game_Player
     */
    startMapEvent(x: number, y: number, triggers: Array<number>, normal: boolean): void;
    moveByInput(): void;
    /**
     * Returns true if the player can move.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    canMove(): boolean;
    /**
     * Gets the input direction of the player as a number.
     * 
     * @returns {number} 
     * @memberof Game_Player
     */
    getInputDirection(): number;
    executeMove(direction: number): void;
    update(sceneActive?: boolean): void;
    /**
     * Updates the dashing of the player.
     * 
     * @memberof Game_Player
     */
    updateDashing(): void;
    /**
     * Returns true if the dash button is pressed.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    isDashButtonPressed(): boolean;
    updateScroll(lastScrolledX: number, lastScrolledY: number): void;
    /**
     * Updates the vehicle.
     * 
     * @memberof Game_Player
     */
    updateVehicle(): void;
    /**
     * Updates the player getting on the vehicle.
     * 
     * @memberof Game_Player
     */
    updateVehicleGetOn(): void;
    /**
     * Updates the player getting off the vehicle.
     * 
     * @memberof Game_Player
     */
    updateVehicleGetOff(): void;
    updateNonmoving(wasMoving: boolean): void;
    triggerAction(): boolean;
    triggerButtonAction(): boolean;
    /**
     * Returns true if the player triggered a touch action.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    triggerTouchAction(): boolean;
    triggerTouchActionD1(x1: number, y1: number): boolean;
    triggerTouchActionD2(x2: number, y2: number): boolean;
    triggerTouchActionD3(x2: number, y2: number): boolean;
    /**
     * Updates the player encounter count.
     * 
     * @memberof Game_Player
     */
    updateEncounterCount(): void;
    /**
     * Returns true if the player can encounter enemies.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    canEncounter(): boolean;
    /**
     * Returns the encounter progress value of the player.
     * 
     * @returns {number} 
     * @memberof Game_Player
     */
    encounterProgressValue(): number;
    checkEventTriggerHere(triggers: Array<number>): void;
    checkEventTriggerThere(triggers: Array<number>): void;
    /**
     * Returns true if the player can start local events.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    canStartLocalEvents(): boolean;
    /**
     * Returns true if the player is getting on/off a vehicle.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    getOnOffVehicle(): boolean;
    /**
     * Returns true if the player is getting on a vehicle.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    getOnVehicle(): boolean;
    /**
     * Returns true if the player is getting off a vehicle.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    getOffVehicle(): boolean;
    /**
     * Forces the player to move forward.
     * 
     * @memberof Game_Player
     */
    forceMoveForward(): void;
    /**
     * Returns true if the player is on a floor that does damage.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    isOnDamageFloor(): boolean;
    /**
     * Moves the player straight, given a direction.
     * 
     * @param {number} d 
     * @memberof Game_Player
     */
    moveStraight(d: number): void;
    /**
     * Moves the player diagonally, given a horizontal
     * and vertical direction. The numpad represents the directions.
     * @param {number} horz 
     * @param {number} vert 
     * @memberof Game_Player
     */
    moveDiagonally(horz: number, vert: number): void;
    /**
     * Has the player jump in the given direction at the specified
     * x and y coordinate. This x and y will be added to the player's current
     * position. 
     * @param {number} xPlus 
     * @param {number} yPlus 
     * @memberof Game_Player
     */
    jump(xPlus: number, yPlus: number): void;
    /**
     * Shows the player followers.
     * 
     * @memberof Game_Player
     */
    showFollowers(): void;
    /**
     * Hides the player followers.
     * 
     * @memberof Game_Player
     */
    hideFollowers(): void;
    /**
     * Gather followers around the player.
     * 
     * @memberof Game_Player
     */
    gatherFollowers(): void;
    /**
     * Returns true if the followers are currently gathering.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    areFollowersGathering(): boolean;
    /**
     * Returns true if the followers are gathered.
     * 
     * @returns {boolean} 
     * @memberof Game_Player
     */
    areFollowersGathered(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Follower
 *
 * The game object declare class for a follower. A follower is an allied character,
 * other than the front character, displayed in the party.
 * @class Game_Follower
 */
declare class Game_Follower extends Game_Character {
    protected _memberIndex: number;

    constructor(memberIndex: number);

    refresh(): void;
    /**
     * Returns the current actor.
     * 
     * @returns {Game_Actor} 
     * @memberof Game_Follower
     */
    actor(): Game_Actor;
    /**
     * Returns true if the follower is visible.
     * 
     * @returns {boolean} 
     * @memberof Game_Follower
     */
    isVisible(): boolean;
    /**
     * Updates the game follower.
     * 
     * @memberof Game_Follower
     */
    update(): void;
    /**
     * Has the follower chase a game actor.
     * 
     * @param {Game_Character} character 
     * @memberof Game_Follower
     */
    chaseCharacter(character: Game_Character): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Followers
 *
 * The wrapper declare class for a follower array.
 * @class Game_Followers
 */
declare class Game_Followers {
    protected _visible: boolean;
    protected _gathering: boolean;
    protected _data: Array<Game_Follower>;

    /**
     * Returns true if the followers are visible.
     * 
     * @returns {boolean} 
     * @memberof Game_Followers
     */
    isVisible(): boolean;
    /**
     * Shows  the followers.
     * 
     * @memberof Game_Followers
     */
    show(): void;
    /**
     * Hides the followers.
     * 
     * @memberof Game_Followers
     */
    hide(): void;
    /**
     * Returns the followers at the specified index.
     * 
     * @param {number} index 
     * @returns {Game_Follower} 
     * @memberof Game_Followers
     */
    follower(index: number): Game_Follower;
    forEach(callback: () => void, thisObject: any): void;
    reverseEach(callback: () => void, thisObject: any): void;
    /**
     * Refreshes the game followers.
     * 
     * @memberof Game_Followers
     */
    refresh(): void;
    /**
     * Updates the game followers.
     * 
     * @memberof Game_Followers
     */
    update(): void;
    /**
     * Updates the movement of game followers.
     * 
     * @memberof Game_Followers
     */
    updateMove(): void;
    jumpAll(): void;
    synchronize(x: number, y: number, d: number): void;
    /**
     * Gathers the followers.
     * 
     * @memberof Game_Followers
     */
    gather(): void;
    /**
     * Returns true if the followers are gathering.
     * 
     * @returns {boolean} 
     * @memberof Game_Followers
     */
    areGathering(): boolean;
    /**
     * Returns the visible followers.
     * 
     * @returns {Array<Game_Follower>} 
     * @memberof Game_Followers
     */
    visibleFollowers(): Array<Game_Follower>;
    /**
     * Returns true if the followers are moving.
     * 
     * @returns {boolean} 
     * @memberof Game_Followers
     */
    areMoving(): boolean;
    /**
     * Returns true if the followers are gathered.
     * 
     * @returns {boolean} 
     * @memberof Game_Followers
     */
    areGathered(): boolean;
    /**
     * Returns true if the specified follower is collided at the specified x and y
     *coordinate.
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean} 
     * @memberof Game_Followers
     */
    isSomeoneCollided(x: number, y: number): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Vehicle
 *
 * The game object declare class for a vehicle.
 * @class Game_Vehicle
 */
declare class Game_Vehicle extends Game_Character {
    protected _type: string;
    protected _mapId: number;
    protected _altitude: number;
    protected _driving: boolean;
    protected _bgm: RPG.AudioFile;

    constructor(type: string);
    initMembers(): void;
    /**
     * Returns true if the vehicle is a boat.
     * 
     * @returns {boolean} 
     * @memberof Game_Vehicle
     */
    isBoat(): boolean;
    /**
     * Returns true if the vehicle is a ship.
     * 
     * @returns {boolean} 
     * @memberof Game_Vehicle
     */
    isShip(): boolean;
    /**
     * Returns true if the vehicle is an airship.
     * 
     * @returns {boolean} 
     * @memberof Game_Vehicle
     */
    isAirship(): boolean;
    /**
     * Resets the direction of the vehicle.
     * 
     * @memberof Game_Vehicle
     */
    resetDirection(): void;
    initMoveSpeed(): void;
    /**
     * Returns the current vehicle.
     * 
     * @returns {RPG.System.Vehicle} 
     * @memberof Game_Vehicle
     */
    vehicle(): RPG.System.Vehicle;
    loadSystemSettings(): void;
    /**
     * Refreshes the game vehicle.
     * 
     * @memberof Game_Vehicle
     */
    refresh(): void;
    setLocation(mapId: number, x: number, y: number): void;
    pos(x: number, y: number): boolean;
    isMapPassable(x: number, y: number, d: number): boolean;
    /**
     * Gets on the vehicle.
     * 
     * @memberof Game_Vehicle
     */
    getOn(): void;
    /**
     * Gets off the vehicle.
     * 
     * @memberof Game_Vehicle
     */
    getOff(): void;
    /**
     * Sets the bgm associated with the vehicle.
     * 
     * @param {RPG.AudioFile} bgm 
     * @memberof Game_Vehicle
     */
    setBgm(bgm: RPG.AudioFile): void;
    /**
     * Plays the bgm associated with the vehicle.
     * 
     * @memberof Game_Vehicle
     */
    playBgm(): void;
    /**
     * Syncs the vehicle with the player.
     * 
     * @memberof Game_Vehicle
     */
    syncWithPlayer(): void;
    /**
     * Returns the screen y position of the vehicle.
     * 
     * @returns {number} 
     * @memberof Game_Vehicle
     */
    screenY(): number;
    /**
     * Returns the shadow x position of the vehicle's shadow.
     * 
     * @returns {number} 
     * @memberof Game_Vehicle
     */
    shadowX(): number;
    /**
     * Returns the shadow y position of the vehicle's shadow.
     * 
     * @returns {number} 
     * @memberof Game_Vehicle
     */
    shadowY(): number;
    /**
     * Returns the shadow opacity of the vehicle's shadow.
     * 
     * @returns {number} 
     * @memberof Game_Vehicle
     */
    shadowOpacity(): number;
    /**
     * Returns true if the vehicle can move.
     * 
     * @returns {boolean} 
     * @memberof Game_Vehicle
     */
    canMove(): boolean;
    /**
     * Updates the vehicle.
     * 
     * @memberof Game_Vehicle
     */
    update(): void;
    /**
     * Updates the airship.
     * 
     * @memberof Game_Vehicle
     */
    updateAirship(): void;
    /**
     * Updates airship altitude.
     * 
     * @memberof Game_Vehicle
     */
    updateAirshipAltitude(): void;
    /**
     * Returns the max altitude of the vehicle.
     * 
     * @returns {number} 
     * @memberof Game_Vehicle
     */
    maxAltitude(): number;
    /**
     * Returns true if the vehicle is at it's lowest altitude.
     * 
     * @returns {boolean} 
     * @memberof Game_Vehicle
     */
    isLowest(): boolean;
    /**
     * Returns true if the vehicle is at it's highest altitude.
     * 
     * @returns {boolean} 
     * @memberof Game_Vehicle
     */
    isHighest(): boolean;
    /**
     * Returns true if take off is ok.
     * 
     * @returns {boolean} 
     * @memberof Game_Vehicle
     */
    isTakeoffOk(): boolean;
    /**
     * Returns true if the vehicle is capable of landing at the specified
     * x, y coordinate, with the specified direction (d).
     * @param {number} x 
     * @param {number} y 
     * @param {number} d 
     * @returns {boolean} 
     * @memberof Game_Vehicle
     */
    isLandOk(x: number, y: number, d: number): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Event
 *
 * The game object declare class for an event. It contains functionality for event page
 * switching and running parallel process events.
 * @class Game_Event
 */
declare class Game_Event extends Game_Character {
    protected _mapId: number;
    protected _eventId: number;
    protected _moveType: number;
    protected _trigger: number;
    protected _starting: boolean;
    protected _erased: boolean;
    protected _pageIndex: number;
    protected _originalPattern: number;
    protected _originalDirection: number;
    protected _prelockDirection: number;
    protected _locked: boolean;

    constructor(mapId: number, eventId: number);

    initMembers(): void;
    /**
     * Returns the event id of the game event.
     * 
     * @returns {number} 
     * @memberof Game_Event
     */
    eventId(): number;
    /**
     * Returns the event database information.
     * 
     * @returns {RPG.Event} 
     * @memberof Game_Event
     */
    event(): RPG.Event;
    /**
     * Returns the event page created in the database.
     * 
     * @returns {RPG.EventPage} 
     * @memberof Game_Event
     */
    page(): RPG.EventPage;
    /**
     * Returns the list of event commands on the current page of the game event.
     * 
     * @returns {Array<RPG.EventCommand>} 
     * @memberof Game_Event
     */
    list(): Array<RPG.EventCommand>;
    isCollidedWithCharacters(x: number, y: number): boolean;
    isCollidedWithEvents(x: number, y: number): boolean;
    /**
     * Returns true if the event has collided with the player character
     * at the specified x and y coordinates.
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean} 
     * @memberof Game_Event
     */
    isCollidedWithPlayerCharacters(x: number, y: number): boolean;
    /**
     * Locks the game event.
     * 
     * @memberof Game_Event
     */
    lock(): void;
    /**
     * Unlocks the game eveent.
     * 
     * @memberof Game_Event
     */
    unlock(): void;
    updateStop(): void;
    /**
     * Updates the self movement of the game event.
     * 
     * @memberof Game_Event
     */
    updateSelfMovement(): void;
    stopCountThreshold(): number;
    moveTypeRandom(): void;
    moveTypeTowardPlayer(): void;
    /**
     * Returns true if the game event is near the player.
     * 
     * @returns {boolean} 
     * @memberof Game_Event
     */
    isNearThePlayer(): boolean;
    moveTypeCustom(): void;
    /**
     * Returns true if the event is staring.
     * 
     * @returns {boolean} 
     * @memberof Game_Event
     */
    isStarting(): boolean;
    /**
     * Clears the starting flag.
     * 
     * @memberof Game_Event
     */
    clearStartingFlag(): void;
    isTriggerIn(triggers: Array<number>): boolean;
    /**
     * Starts the game event.
     * 
     * @memberof Game_Event
     */
    start(): void;
    /**
     * Erases the event.
     * 
     * @memberof Game_Event
     */
    erase(): void;
    /**
     * Refreshes the game event.
     * 
     * @memberof Game_Event
     */
    refresh(): void;
    /**
     * Finds the proper page index of the game event for
     * event command processing.
     * @returns {number} 
     * @memberof Game_Event
     */
    findProperPageIndex(): number;
    meetsConditions(page: RPG.EventPage): boolean;
    /**
     * Sets up the event page.
     * 
     * @memberof Game_Event
     */
    setupPage(): void;
    /**
     * Clears the page settings of the game event.
     * 
     * @memberof Game_Event
     */
    clearPageSettings(): void;
    /**
     * Sets up the event page settings.
     * 
     * @memberof Game_Event
     */
    setupPageSettings(): void;
    isOriginalPattern(): boolean;
    /**
     * Resets the pattern of the game event.
     * 
     * @memberof Game_Event
     */
    resetPattern(): void;
    checkEventTriggerAuto(): void;
    update(): void;
    updateParallel(): void;
    locate(x: number, y: number): void;
    /**
     * Forces the game event to move along the specified route.
     * 
     * @param {RPG.MoveRoute} moveRoute 
     * @memberof Game_Event
     */
    forceMoveRoute(moveRoute: RPG.MoveRoute): void;
}

/**
 * -----------------------------------------------------------------------------
 * Game_Interpreter
 *
 * The interpreter for running event commands.
 * @class Game_Interpreter
 */
declare class Game_Interpreter {
    protected _depth: number;
    protected _branch: {[indent: number]: number | boolean};
    protected _params: Array<any>;
    protected _indent: number;
    protected _frameCount: number;
    protected _freezeChecker: number;
    protected _mapId: number;
    protected _eventId: number;
    protected _list: Array<RPG.EventCommand>;
    protected _index: number;
    protected _waitCount: number;
    protected _waitMode: string;
    protected _comments: string;
    protected _character: Game_Event;
    protected _childInterpreter: Game_Interpreter;

    constructor(depth: number);
    checkOverflow(): void;
    /**
     * Clears the interpreter.
     * 
     * @memberof Game_Interpreter
     */
    clear(): void;
    /**
     * Sets up the interpreter with the list of event commands, and the given
     * event Id.
     * 
     * @param {Array<RPG.EventCommand>} list 
     * @param {number} eventId 
     * @memberof Game_Interpreter
     */
    setup(list: Array<RPG.EventCommand>, eventId: number): void;
    /**
     * Returns the currrent eventId.
     * 
     * @returns {number} 
     * @memberof Game_Interpreter
     */
    eventId(): number;
    /**
     * Returns true if the event is on the current map.
     * 
     * @returns {boolean} 
     * @memberof Game_Interpreter
     */
    isOnCurrentMap(): boolean;
    /**
     * Returns true after setting up the reserved common event.
     * 
     * @returns {boolean} 
     * @memberof Game_Interpreter
     */
    setupReservedCommonEvent(): boolean;
    /**
     * Returns true if the interpreter is running.
     * 
     * @returns {boolean} 
     * @memberof Game_Interpreter
     */
    isRunning(): boolean;
    update(): void;
    /**
     * Updates the child game interpreter.
     * 
     * @returns {boolean} 
     * @memberof Game_Interpreter
     */
    updateChild(): boolean;
    /**
     * Updates the wait of the game interpreter.
     * 
     * @returns {boolean} 
     * @memberof Game_Interpreter
     */
    updateWait(): boolean;
    updateWaitCount(): boolean;
    updateWaitMode(): boolean;
    /**
     * Sets the wait mode of the interpreter.
     * 
     * @param {string} waitMode 
     * @memberof Game_Interpreter
     */
    setWaitMode(waitMode: string): void;
    /**
     * sets a specified wait duration for the interpreter.
     * 
     * @param {number} duration 
     * @memberof Game_Interpreter
     */
    wait(duration: number): void;
    fadeSpeed(): number;
    /**
     * Executes the event command;
     * returns true or false based on execution.
     * @returns {boolean} 
     * @memberof Game_Interpreter
     */
    executeCommand(): boolean;
    /**
     * Checks if the interpreter has frozen.
     * 
     * @returns {boolean} 
     * @memberof Game_Interpreter
     */
    checkFreeze(): boolean;
    /**
     * Terminates the game interpreter.
     * 
     * @memberof Game_Interpreter
     */
    terminate(): void;
    /**
     * Skips a conditional branch on the interpreter.
     * 
     * @memberof Game_Interpreter
     */
    skipBranch(): void;
    /**
     * Returns the current event command.
     * 
     * @returns {RPG.EventCommand} 
     * @memberof Game_Interpreter
     */
    currentCommand(): RPG.EventCommand;
    /**
     * Returns the next event code.
     * 
     * @returns {number} 
     * @memberof Game_Interpreter
     */
    nextEventCode(): number;
    iterateActorId(param: number, callback: (actor: Game_Actor) => void): void;
    iterateActorEx(param1: number, param2: number, callback: (actor: Game_Actor) => void): void;
    iterateActorIndex(param: number, callback: (actor: Game_Actor) => void): void;
    iterateEnemyIndex(param: number, callback: (enemt: Game_Enemy) => void): void;
    iterateBattler(param1: number, param2: number, callback: (battler: Game_Battler) => void): void;
    character(param: number): Game_Character;
    operateValue(operation: number, operandType: number, operand: number): number;
    changeHp(target: number, value: number, allowDeath: boolean): void;

    /**
     * Show Text
     */
    command101(): boolean;

    /**
     * Show Choices
     */
    command102(): boolean;
    setupChoices(params: Array<any>): void;

    /**
     * When [**]
     */
    command402(): boolean;

    /**
     * When Cancel
     */
    command403(): boolean;

    /**
     * Input Number
     */
    command103(): boolean;

    /**
     *
     * @param params
     */
    setupNumInput(params: Array<number>): void;

    /**
     * Select Item
     */
    command104(): boolean;
    setupItemChoice(params: Array<number>): void;

    /**
     * Show Scrolling Text
     */
    command105(): boolean;

    /**
     * Comment
     */
    command108(): boolean;

    /**
     * Conditional Branch
     */
    command111(): boolean;

    /**
     * Else
     */
    command411(): boolean;

    /**
     * Loop
     */
    command112(): boolean;

    /**
     * Repeat Above
     */
    command413(): boolean;

    /**
     * Break Loop
     */
    command113(): boolean;

    /**
     * Exit Event Processing
     */
    command115(): boolean;

    /**
     * Common Event
     */
    command117(): boolean;
    setupChild(list: Array<RPG.EventCommand>, eventId: number): void;

    /**
     * Label
     */
    command118(): boolean;

    /**
     * Jump to Label
     */
    command119(): boolean;
    jumpTo(index: number): void;

    /**
     * Control Switches
     */
    command121(): boolean;

    /**
     * Control Variables
     */
    command122(): boolean;
    gameDataOperand(type: number, param1: number, param2: number): number;
    operateVariable(variableId: number, operationType: number, value: number): void;

    /**
     * Control Self Switch
     */
    command123(): boolean;

    /**
     * Control Timer
     */
    command124(): boolean;

    /**
     * Change Gold
     */
    command125(): boolean;

    /**
     * Change Items
     */
    command126(): boolean;

    /**
     * Change Weapons
     */
    command127(): boolean;

    /**
     * Change Armors
     */
    command128(): boolean;

    /**
     * Change Party Member
     */
    command129(): boolean;

    /**
     * Change Battle BGM
     */
    command132(): boolean;

    /**
     * Change Victory ME
     */
    command133(): boolean;

    /**
     * Change Save Access
     */
    command134(): boolean;

    /**
     * Change Menu Access
     */
    command135(): boolean;

    /**
     * Change Encounter Disable
     */
    command136(): boolean;

    /**
     * Change Formation Access
     */
    command137(): boolean;

    /**
     * Change Window Color
     */
    command138(): boolean;

    /**
     * Change Defeat ME
     */
    command139(): boolean;

    /**
     * Change Vehicle BGM
     */
    command140(): boolean;

    /**
     * Transfer Player
     */
    command201(): boolean;

    /**
     * Set Vehicle Location
     */
    command202(): boolean;

    /**
     * Set Event Location
     */
    command203(): boolean;

    /**
     * Scroll Map
     */
    command204(): boolean;

    /**
     * Set Movement Route
     */
    command205(): boolean;

    /**
     * Getting On and Off Vehicles
     */
    command206(): boolean;

    /**
     * Change Transparency
     */
    command211(): boolean;

    /**
     * Show Animation
     */
    command212(): boolean;

    /**
     * Show Balloon Icon
     */
    command213(): boolean;

    /**
     * Erase Event
     */
    command214(): boolean;

    /**
     * Change Player Followers
     */
    command216(): boolean;

    /**
     * Gather Followers
     */
    command217(): boolean;

    /**
     * Fadeout Screen
     */
    command221(): boolean;

    /**
     * Fadein Screen
     */
    command222(): boolean;

    /**
     * Tint Screen
     */
    command223(): boolean;

    /**
     * Flash Screen
     */
    command224(): boolean;

    /**
     * Shake Screen
     */
    command225(): boolean;

    /**
     * Wait
     */
    command230(): boolean;

    /**
     * Show Picture
     */
    command231(): boolean;

    /**
     * Move Picture
     */
    command232(): boolean;

    /**
     * Rotate Picture
     */
    command233(): boolean;

    /**
     * Tint Picture
     */
    command234(): boolean;

    /**
     * Erase Picture
     */
    command235(): boolean;

    /**
     * Set Weather Effect
     */
    command236(): boolean;

    /**
     * Play BGM
     */
    command241(): boolean;

    /**
     * Fadeout BGM
     */
    command242(): boolean;

    /**
     * Save BGM
     */
    command243(): boolean;

    /**
     * Resume BGM
     */
    command244(): boolean;

    /**
     * Play BGS
     */
    command245(): boolean;

    /**
     * Fadeout BGS
     */
    command246(): boolean;

    /**
     * Play ME
     */
    command249(): boolean;

    /**
     * Play SE
     */
    command250(): boolean;

    /**
     * Stop SE
     */
    command251(): boolean;

    /**
     * Play Movie
     */
    command261(): boolean;
    videoFileExt(): string;

    /**
     * Change Map Name Display
     */
    command281(): boolean;

    /**
     * Change Tileset
     */
    command282(): boolean;

    /**
     * Change Battle Back
     */
    command283(): boolean;

    /**
     * Change Parallax
     */
    command284(): boolean;

    /**
     * Get Location Info
     */
    command285(): boolean;

    /**
     * Battle Processing
     */
    command301(): boolean;

    /**
     * If Win
     */
    command601(): boolean;

    /**
     * If Escape
     */
    command602(): boolean;

    /**
     * If Lose
     */
    command603(): boolean;

    /**
     * Shop Processing
     */
    command302(): boolean;

    /**
     * Name Input Processing
     */
    command303(): boolean;

    /**
     * Change HP
     */
    command311(): boolean;

    /**
     * Change MP
     */
    command312(): boolean;

    /**
     * Change TP
     */
    command326(): boolean;

    /**
     * Change State
     */
    command313(): boolean;

    /**
     * Recover All
     */
    command314(): boolean;

    /**
     * Change EXP
     */
    command315(): boolean;

    /**
     * Change Level
     */
    command316(): boolean;

    /**
     * Change Parameter
     */
    command317(): boolean;

    /**
     * Change Skill
     */
    command318(): boolean;

    /**
     * Change Equipment
     */
    command319(): boolean;

    /**
     * Change Name
     */
    command320(): boolean;

    /**
     * Change Class
     */
    command321(): boolean;

    /**
     * Change Actor Images
     */
    command322(): boolean;

    /**
     * Change Vehicle Image
     */
    command323(): boolean;

    /**
     * Change Nickname
     */
    command324(): boolean;

    /**
     * Change Profile
     */
    command325(): boolean;

    /**
     * Change Enemy HP
     */
    command331(): boolean;

    /**
     * Change Enemy MP
     */
    command332(): boolean;

    /**
     * Change Enemy TP
     */
    command342(): boolean;

    /**
     * Change Enemy State
     */
    command333(): boolean;

    /**
     * Enemy Recover All
     */
    command334(): boolean;

    /**
     * Enemy Appear
     */
    command335(): boolean;

    /**
     * Enemy Transform
     */
    command336(): boolean;

    /**
     * Show Battle Animation
     */
    command337(): boolean;

    /**
     * Force Action
     */
    command339(): boolean;

    /**
     * Abort Battle
     */
    command340(): boolean;

    /**
     * Open Menu Screen
     */
    command351(): boolean;

    /**
     * Open Save Screen
     */
    command352(): boolean;

    /**
     * Game Over
     */
    command353(): boolean;

    /**
     * Return to Title Screen
     */
    command354(): boolean;

    /**
     * Script
     */
    command355(): boolean;

    /**
     * Plugin Command
     */
    command356(): boolean;
    pluginCommand(command: string, args: Array<string>): void;
}

