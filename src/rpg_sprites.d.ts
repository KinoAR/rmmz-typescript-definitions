/**
 * -----------------------------------------------------------------------------
 * Sprite_Base
 *
 * The sprite class with a feature which displays animations.
 */
declare class Sprite_Base extends Sprite {
    /**
     * The animation sprites assigned to the
     * sprite object.
     * @protected
     * @type {Array<Sprite_Animation>}
     * @memberof Sprite_Base
     */
    protected _animationSprites: Array<Sprite_Animation>;
    /**
     * The target that will have the animations applied
     * to it.
     * @protected
     * @type {Sprite_Base}
     * @memberof Sprite_Base
     */
    protected _effectTarget: Sprite_Base;
    /**
     * Property determining the sprite's visibility.
     *
     * @protected
     * @type {boolean}
     * @memberof Sprite_Base
     */
    protected _hiding: boolean;

    /**
     * Creates an instance of Sprite_Base.
     * @memberof Sprite_Base
     */
    constructor();

    /**
     * Hides the sprite.
     *
     * @memberof Sprite_Base
     */
    hide(): void;
    /**
     * Shows the sprite.
     *
     * @memberof Sprite_Base
     */
    show(): void;
    /**
     * Updadtes the visibility of the sprite based
     * on the _hiding property.
     * @memberof Sprite_Base
     */
    updateVisibility(): void;
    /**
     * Updates the animation sprites, cloning them;
     * if the sprite is playing, pushes the sprites into
     * animation sprites, otherwise the sprite is removed.
     * @memberof Sprite_Base
     */
    updateAnimationSprites(): void;
    /**
     * Starts a new animation on the current
     * sprite by assigning a new Sprite_Animation object to the
     * sprite's parent.
     * @param {RPG.Animation} animation
     * @param {boolean} mirror
     * @param {number} delay
     * @memberof Sprite_Base
     */
    startAnimation(animation: RPG.Animation, mirror: boolean, delay: number): void;
    /**
     * Returns true if an animation is currently playing.
     * @returns {boolean}
     * @memberof Sprite_Base
     */
    isAnimationPlaying(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Button
 *
 * The sprite for displaying a button.
 */
declare class Sprite_Button extends Sprite {
    protected _touching: boolean;
    protected _coldFrame: Rectangle;
    protected _hotFrame: Rectangle;
    protected _clickHandler: () => void;

    /**
     * Update method, which checks if the sprite is being touched and updates
     * the current frame.
     *
     * @memberof Sprite_Button
     */
    updateFrame(): void;
    /**
     * Set the button sprites cold frame.
     *
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     *
     * @memberof Sprite_Button
     *
     */
    setColdFrame(x: number, y: number, width: number, height: number): void;
    /**
     * Set the button sprites hot frame
     *
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     *
     * @memberof Sprite_Button
     *
     */
    setHotFrame(x: number, y: number, width: number, height: number): void;
    /**
     * Creates a new handler and binds it to the button.
     *
     * @param {function} height
     * @memberof Sprite_Button
     */
    setClickHandler(method: () => void): void;
    /**
     * Calls the handler method bound to the button.
     *
     * @param {function} height
     * @memberof Sprite_Button
     */
    callClickHandler(): void;
    /**
     * Processes weather or not the button is being touched and calls the handler
     * bound to the button.
     * @memberof Sprite_Button
     */
    processTouch(): void;
    /**
     * Returns true if the sprite button is currently active.
     * @returns {boolean}
     * @memberof Sprite_Button
     */
    isActive(): boolean;
    /**
     * Returns true is the button is presently being touched.
     * @returns {boolean}
     * @memberof Sprite_Button
     */
    isButtonTouched(): boolean;
    /**
     * Changes the x coordinate of the screen to local sprite x coordinate.
     * @param {number} x
     * @returns {number}
     * @memberof Sprite_Button
     */
    canvasToLocalX(x: number): number;
    /**
     * Changes the y coordinate of the screen
     * to local sprite y coordinate.
     * @param {number} y
     * @returns {number}
     * @memberof Sprite_Button
     */
    canvasToLocalY(y: number): number;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Character
 *
 * The sprite for displaying a character.
 */
declare class Sprite_Character extends Sprite_Base {
    /**
     * The Game_Character object assigned
     * to the sprite.
     * @protected
     * @type {Game_Character}
     * @memberof Sprite_Character
     */
    protected _character: Game_Character;
    protected _balloonDuration: number;
    protected _tilesetId: number;
    protected _upperBody: Sprite;
    protected _lowerBody: Sprite;
    protected _bushDepth: number;
    /**
     * The current balloon sprite
     * assigned to the sprite.
     * @protected
     * @type {Sprite_Balloon}
     * @memberof Sprite_Character
     */
    protected _balloonSprite: Sprite_Balloon;

    /**
     * Creates an instance of Sprite_Character.
     * @param {Game_Character} character
     * @memberof Sprite_Character
     */
    constructor(character: Game_Character);

    initMembers(): void;
    /**
     * Sets the current Game_Character object
     * attached to the sprite.
     * @param {Game_Character} character
     * @memberof Sprite_Character
     */
    setCharacter(character: Game_Character): void;
    /**
     * Returns true if the Game_Character object
     * tileId is greater than 0.
     * @returns {boolean}
     * @memberof Sprite_Character
     */
    isTile(): boolean;
    tilesetBitmap(tileId: number): Bitmap;
    /**
     * Updates the bitmap of the sprite character.
     * 
     * @memberof Sprite_Character
     */
    updateBitmap(): void;
    /**
     * Returns true if the sprite character image has changed.
     * 
     * @returns {boolean} 
     * @memberof Sprite_Character
     */
    isImageChanged(): boolean;
    setTileBitmap(): void;
    /**
     * Sets the sprite character bitmap.
     * 
     * @memberof Sprite_Character
     */
    setCharacterBitmap(): void;
    /**
     * Updates the sprite character frame.
     * 
     * @memberof Sprite_Character
     */
    updateFrame(): void;
    /**
     * Updates the sprite character tile frame.
     * 
     * @memberof Sprite_Character
     */
    updateTileFrame(): void;
    /**
     * Updates the sprite character -- character frame.
     * 
     * @memberof Sprite_Character
     */
    updateCharacterFrame(): void;
    characterBlockX(): number;
    characterBlockY(): number;
    characterPatternX(): void;
    characterPatternY(): number;
    patternWidth(): number;
    patternHeight(): number;
    updateHalfBodySprites(): void;
    createHalfBodySprites(): void;
    /**
     * Updates the position of the sprite character.
     * 
     * @memberof Sprite_Character
     */
    updatePosition(): void;
    updateAnimation(): void;
    updateOther(): void;
    setupAnimation(): void;
    /**
     * Sets up the Game_Character object
     * balloon sprite, and calls the startBalloon method.
     * @memberof Sprite_Character
     */
    setupBalloon(): void;
    /**
     * Starts the balloon sprite on the
     * Game_Character object.
     * @memberof Sprite_Character
     */
    startBalloon(): void;
    /**
     * Processes the balloon sprite, calls
     * the endBaloon method if the balloon sprite is done playing.
     * @memberof Sprite_Character
     */
    updateBalloon(): void;
    /**
     * Ends the balloon sprite, removing it from
     * the Game_Character object sprite.
     * @memberof Sprite_Character
     */
    endBalloon(): void;
    /**
     * Returns true if a balloon animation
     * is playing on the character.
     * @returns {boolean}
     * @memberof Sprite_Character
     */
    isBalloonPlaying(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Battler
 *
 * The superclass of Sprite_Actor and Sprite_Enemy.
 */
declare class Sprite_Battler extends Sprite_Base {
    protected _battler: Game_Battler;
    protected _damages: Array<Sprite_Damage>;
    protected _homeX: number;
    protected _homeY: number;
    protected _offsetX: number;
    protected _offsetY: number;
    protected _targetOffsetX: number;
    protected _targetOffsetY: number;
    protected _movementDuration: number;
    protected _selectionEffectCount: number;

    constructor(battler?: Game_Battler);

    initMembers(): void;
    /**
     * Sets the game battler of the sprite battler.
     * 
     * @param {Game_Battler} battler 
     * @memberof Sprite_Battler
     */
    setBattler(battler: Game_Battler): void;
    /**
     * Sets the home position of the sprite battler to the given
     * x and y coordinates.
     * @param {number} x 
     * @param {number} y 
     * @memberof Sprite_Battler
     */
    setHome(x: number, y: number): void;
    /**
     * Updates the main loop of the sprite battler.
     * 
     * @memberof Sprite_Battler
     */
    updateMain(): void;
    /**
     * Updates the bitmap of the sprite battler.
     * 
     * @memberof Sprite_Battler
     */
    updateBitmap(): void;
    /**
     * Updates the sprite battler's current frame.
     * 
     * @memberof Sprite_Battler
     */
    updateFrame(): void;
    /**
     * Updates movement on the sprite battler.
     * 
     * @memberof Sprite_Battler
     */
    updateMove(): void;
    /**
     * Updates the position of the sprite battler.
     * 
     * @memberof Sprite_Battler
     */
    updatePosition(): void;
    /**
     * Updates the sprite battler animation.
     * 
     * @memberof Sprite_Battler
     */
    updateAnimation(): void;
    /**
     * Updates the damage pop up for the sprite battler.
     * 
     * @memberof Sprite_Battler
     */
    updateDamagePopup(): void;
    updateSelectionEffect(): void;
    /**
     * Sets up animation on the sprite battler.
     * 
     * @memberof Sprite_Battler
     */
    setupAnimation(): void;
    /**
     * Sets up damage popup on the sprite battler.
     * 
     * @memberof Sprite_Battler
     */
    setupDamagePopup(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
    startMove(x: number, y: number, duration: number): void;
    /**
     * Handler for when movement has ended.
     * 
     * @memberof Sprite_Battler
     */
    onMoveEnd(): void;
    /**
     * Returns false for sprite battler.
     * 
     * @returns {boolean} 
     * @memberof Sprite_Battler
     */
    isEffecting(): boolean;
    /**
     * Returns true if the sprite for the battler
     * is moving.
     * @returns {boolean}
     * @memberof Sprite_Battler
     */
    isMoving(): boolean;
    /**
     * Returns true if the sprite battler is in the home position.
     * 
     * @returns {boolean} 
     * @memberof Sprite_Battler
     */
    inHomePosition(): boolean;
}


/**
 * -----------------------------------------------------------------------------
 * Sprite_Actor
 *
 * The sprite for displaying an actor.
 */
declare class Sprite_Actor extends Sprite_Battler {
    static MOTIONS: {
        walk: MV.Motion,
        wait: MV.Motion,
        chant: MV.Motion,
        guard: MV.Motion,
        damage: MV.Motion,
        evade: MV.Motion,
        thrust: MV.Motion,
        swing: MV.Motion,
        missile: MV.Motion,
        skill: MV.Motion,
        spell: MV.Motion,
        item: MV.Motion,
        escape: MV.Motion,
        victory: MV.Motion,
        dying: MV.Motion,
        abnormal: MV.Motion,
        sleep: MV.Motion,
        dead: MV.Motion,
    };

    protected _battlerName: string;
    protected _motion: MV.Motion;
    protected _motionCount: number;
    protected _pattern: number;
    protected _mainSprite: Sprite_Base;
    protected _shadowSprite: Sprite;
    protected _weaponSprite: Sprite_Weapon;
    protected _stateSprite: Sprite_StateOverlay;
    protected _actor: Game_Actor;

    /**
     * Creates an instance of Sprite_Actor; can be passed
     * a battler on creation.
     * @param {Game_Actor} [battler] 
     * @memberof Sprite_Actor
     */
    constructor(battler?: Game_Actor);

    /**
     * Creates the main sprite of the sprite actor.
     * 
     * @memberof Sprite_Actor
     */
    createMainSprite(): void;
    /**
     * Creates the shadow sprite of the sprite actor.
     * 
     * @memberof Sprite_Actor
     */
    createShadowSprite(): void;
    /**
     * Sets the weapon sprite of the sprite actor.
     * 
     * @memberof Sprite_Actor
     */
    createWeaponSprite(): void;
    /**
     * Creates the state sprite of the sprite actor.
     * 
     * @memberof Sprite_Actor
     */
    createStateSprite(): void;
    /**
     * Sets the battler of the sprite actor.
     * 
     * @param {Game_Actor} battler 
     * @memberof Sprite_Actor
     */
    setBattler(battler: Game_Actor): void;
    /**
     * Moves the sprite actor to the start position.
     * 
     * @memberof Sprite_Actor
     */
    moveToStartPosition(): void;
    setActorHome(index: number): void;
    updateShadow(): void;
    /**
     * Sets up motion on the sprite actor.
     * 
     * @memberof Sprite_Actor
     */
    setupMotion(): void;
    /**
     * Sets up weapon animation on the sprite actor.
     * 
     * @memberof Sprite_Actor
     */
    setupWeaponAnimation(): void;
    /**
     * Starts the motion given the specified motion
     * type.
     * @param {string} motionType 
     * @memberof Sprite_Actor
     */
    startMotion(motionType: string): void;
    updateTargetPosition(): void;
    /**
     * Updates the sprite actor's movement.
     * 
     * @memberof Sprite_Actor
     */
    updateMove(): void;
    /**
     * Updates the sprite actor's motion.
     * 
     * @memberof Sprite_Actor
     */
    updateMotion(): void;
    updateMotionCount(): void;
    /**
     * Returns the speed of the motion for the sprite actor.
     * 
     * @returns {number} 
     * @memberof Sprite_Actor
     */
    motionSpeed(): number;
    /**
     * Refreshes the motion of the sprite actor.
     * 
     * @memberof Sprite_Actor
     */
    refreshMotion(): void;
    /**
     * Starts the entry motion of the sprite actor.
     * 
     * @memberof Sprite_Actor
     */
    startEntryMotion(): void;
    /**
     * Has the sprite actor step forward.
     * 
     * @memberof Sprite_Actor
     */
    stepForward(): void;
    /**
     * Has the sprite actor step back.
     * 
     * @memberof Sprite_Actor
     */
    stepBack(): void;
    /**
     * Has the sprite actor retreat.
     * 
     * @memberof Sprite_Actor
     */
    retreat(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Enemy
 *
 * The sprite for displaying an enemy.
 */
declare class Sprite_Enemy extends Sprite_Battler {
    protected _enemy: Game_Enemy;
    protected _appeared: boolean;
    protected _battlerName: string;
    protected _battlerHue: number;
    protected _effectType: string;
    protected _effectDuration: number;
    protected _shake: number;
    protected _stateIconSprite: Sprite_StateIcon;

    constructor(battler: Game_Enemy);

    createStateIconSprite(): void;
    /**
     * Sets the battler to an instance of game enemy.
     * 
     * @param {Game_Enemy} battler Instance of game enemy.
     * @memberof Sprite_Enemy
     */
    setBattler(battler: Game_Enemy): void;
    loadBitmap(name: string, hue: number): void;
    /**
     * Updates the state sprite on the sprite enemy.
     * 
     * @memberof Sprite_Enemy
     */
    updateStateSprite(): void;
    initVisibility(): void;
    setupEffect(): void;
    startEffect(effectType: string): void;
    /**
     * Starts the appearinig effect on the sprite enemy.
     * 
     * @memberof Sprite_Enemy
     */
    startAppear(): void;
    /**
     * Starts the disappearing effect on the sprite enemy.
     * 
     * @memberof Sprite_Enemy
     */
    startDisappear(): void;
    /**
     * Starts the whiten effect on the sprite enemy.
     * 
     * @memberof Sprite_Enemy
     */
    startWhiten(): void;
    /**
     * Starts the blink effect on the sprite enemy.
     * 
     * @memberof Sprite_Enemy
     */
    startBlink(): void;
    /**
     * Starts the collapse effect of the sprite
     * enemy.
     * @memberof Sprite_Enemy
     */
    startCollapse(): void;
    /**
     * Starts the boss collapse effect of the sprite
     * enemy.
     * @memberof Sprite_Enemy
     */
    startBossCollapse(): void;
    /**
     * Starts the instant collapse effect of the sprite enemy.
     * 
     * @memberof Sprite_Enemy
     */
    startInstantCollapse(): void;
    updateEffect(): void;
    /**
     * Returns true if the effect type on the sprite enemy
     * is not null.
     * @returns {boolean} 
     * @memberof Sprite_Enemy
     */
    isEffecting(): boolean;
    /**
     * Revers the sprite enemy to a normal state.
     * 
     * @memberof Sprite_Enemy
     */
    revertToNormal(): void;
    /**
     * Updates the whiten effect on the sprite enemy.
     * 
     * @memberof Sprite_Enemy
     */
    updateWhiten(): void;
    /**
     * Updates the blink effect on the sprite enemy.
     * 
     * @memberof Sprite_Enemy
     */
    updateBlink(): void;
    /**
     * Updates the appear effect on the sprite enemy.
     * 
     * @memberof Sprite_Enemy
     */
    updateAppear(): void;
    updateDisappear(): void;
    /**
     * Updates the collapse effect.
     * 
     * @memberof Sprite_Enemy
     */
    updateCollapse(): void;
    /**
     * Updates the boss collapse effect.
     * 
     * @memberof Sprite_Enemy
     */
    updateBossCollapse(): void;
    /**
     * Updates the instant collapse effect.
     * 
     * @memberof Sprite_Enemy
     */
    updateInstantCollapse(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Animation
 *
 * The sprite for displaying an animation.
 */
declare class Sprite_Animation extends Sprite {
    protected static _checker1: {key: RPG.Animation};
    protected static _checker2: {key: RPG.Animation};

    protected _target: Sprite_Base;
    protected _animation: RPG.Animation;
    protected _mirror: boolean;
    protected _delay: number;
    protected _rate_: number;
    protected _duration: number;
    protected _flashColor: Array<number>;
    protected _flashDuration: number;
    protected _screenFlashDuration: number;
    protected _hidingDuration: number;
    protected _bitmap1: Bitmap;
    protected _bitmap2: Bitmap;
    protected _cellSprites: Array<Sprite>;
    protected _screenFlashSprite: ScreenSprite;
    protected _duplicated: boolean;
    protected _reduceArtifacts: boolean;

    initMembers(): void;
    setup(target: Sprite_Base, animation: RPG.Animation, mirror: boolean, delay: number): void;
    remove(): void;
    setupRate(): void;
    setupDuration(): void;
    updateFlash(): void;
    updateScreenFlash(): void;
    absoluteX(): number;
    absoluteY(): number;
    updateHiding(): void;
    isPlaying(): boolean;
    loadBitmaps(): void;
    /**
     * Returns true if the sprite animation is ready.
     * 
     * @returns {boolean} 
     * @memberof Sprite_Animation
     */
    isReady(): boolean;
    createSprites(): void;
    createCellSprites(): void;
    createScreenFlashSprite(): void;
    updateMain(): void;
    updatePosition(): void;
    updateFrame(): void;
    currentFrameIndex(): number;
    updateAllCellSprites(frame: Array<Array<number>>): void;
    updateCellSprite(sprite: Sprite, cell: Array<number>): void;
    processTimingData(timing: RPG.Animation.Timing): void;
    startFlash(color: Array<number>, duration: number): void;
    startScreenFlash(color: Array<number>, duration: number): void;
    startHiding(duration: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Damage
 *
 * The sprite for displaying a popup damage.
 */
declare class Sprite_Damage extends Sprite {
    protected _duration: number;
    protected _flashColor: Array<number>;
    protected _flashDuration: number;
    protected _damageBitmap: Bitmap;

    setup(target: Game_Actor): void;
    setupCriticalEffect(): void;
    digitWidth(): number;
    digitHeight(): number;
    createMiss(): void;
    createDigits(baseRow: number, value: number): void;
    createChildSprite(): Sprite;
    updateChild(sprite: Sprite): void;
    updateFlash(): void;
    updateOpacity(): void;
    isPlaying(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_StateIcon
 *
 * The sprite for displaying state icons.
 */
declare class Sprite_StateIcon extends Sprite {
    protected static _iconWidth: number;
    protected static _iconHeight: number;

    protected _battler: Game_Battler;
    protected _iconIndex: number;
    protected _animationCount: number;
    protected _animationIndex: number;

    initMembers(): void;
    loadBitmap(): void;
    setup(battler: Game_Battler): void;
    animationWait(): number;
    updateIcon(): void;
    updateFrame(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_StateOverlay
 *
 * The sprite for displaying an overlay image for a state.
 */
declare class Sprite_StateOverlay extends Sprite_Base {
    protected _battler: Game_Battler;
    protected _overlayIndex: number;
    protected _animationCount: number;
    protected _pattern: number;

    initMembers(): void;
    loadBitmap(): void;
    setup(battler: Game_Battler): void;
    animationWait(): number;
    updatePattern(): void;
    updateFrame(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Weapon
 *
 * The sprite for displaying a weapon image for attacking.
 */
declare class Sprite_Weapon extends Sprite_Base {
    protected _weaponImageId: number;
    protected _animationCount: number;
    protected _pattern: number;

    initMembers(): void;
    setup(weaponImageId: number): void;
    animationWait(): number;
    updatePattern(): void;
    loadBitmap(): void;
    updateFrame(): void;
    isPlaying(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Balloon
 *
 * The sprite for displaying a balloon icon.
 */
declare class Sprite_Balloon extends Sprite_Base {
    protected _balloonId: number;
    protected _duration: number;

    initMembers(): void;
    loadBitmap(): void;
    setup(balloonId: number): void;
    update(): void;
    updateFrame(): void;
    speed(): number;
    waitTime(): number;
    frameIndex(): number;
    isPlaying(): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Picture
 *
 * The sprite for displaying a picture.
 */
declare class Sprite_Picture extends Sprite {
    protected _pictureId: number;
    protected _pictureName: string;
    protected _isPicture: boolean;

    constructor(pictureId: number);

    picture(): Game_Picture;
    updateBitmap(): void;
    updateOrigin(): void;
    updatePosition(): void;
    updateScale(): void;
    updateTone(): void;
    updateOther(): void;
    loadBitmap(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Timer
 *
 * The sprite for displaying the timer.
 */
declare class Sprite_Timer extends Sprite {
    protected _seconds: number;

    /**
     * Creates the bitmap of the sprite timer.
     * 
     * @memberof Sprite_Timer
     */
    createBitmap(): void;
    /**
     * Updates the bitmap of the sprite timer.
     * 
     * @memberof Sprite_Timer
     */
    updateBitmap(): void;
    /**
     * Redraws the sprite timer.
     * 
     * @memberof Sprite_Timer
     */
    redraw(): void;
    /**
     * Returns the text of the timer.
     * 
     * @returns {string} The text displayed on the timer.
     * @memberof Sprite_Timer
     */
    timerText(): string;
    /**
     * Updates the positon of the sprite timer.
     * 
     * @memberof Sprite_Timer
     */
    updatePosition(): void;
    /**
     * Updates the visibility of the sprite timer.
     * 
     * @memberof Sprite_Timer
     */
    updateVisibility(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Destination
 *
 * The sprite for displaying the destination place of the touch input.
 */
declare class Sprite_Destination extends Sprite {
    protected _frameCount: number;

    /**
     * Creates the destination bitmap of the destination sprite.
     * 
     * @memberof Sprite_Destination
     */
    createBitmap(): void;
    /**
     * Updates the position of the destination sprite.
     * 
     * @memberof Sprite_Destination
     */
    updatePosition(): void;
    /**
     * Updates the destination sprite animation.
     * 
     * @memberof Sprite_Destination
     */
    updateAnimation(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Spriteset_Base
 *
 * The superdeclare class of Spriteset_Map and Spriteset_Battle.
 */
declare class Spriteset_Base extends Sprite {
    protected _tone: Array<number>;
    protected _baseSprite: Sprite;
    protected _blackScreen: ScreenSprite;
    protected _toneFilter: ToneFilter;
    protected _toneSprite: ToneSprite;
    protected _pictureContainer: Sprite;
    protected _timerSprite: Sprite_Timer;
    protected _flashSprite: ScreenSprite;
    protected _fadeSprite: ScreenSprite;

    /**
     * Creates the lower layer including the base sprites.
     * 
     * @memberof Spriteset_Base
     */
    createLowerLayer(): void;
    /**
     * Creates the upper layer including the pictures,
     * timer, and screen sprites.
     * @memberof Spriteset_Base
     */
    createUpperLayer(): void;
    /**
     * Create the base sprite.
     * 
     * @memberof Spriteset_Base
     */
    createBaseSprite(): void;
    /**
     * Creates the tone changer sprite.
     * 
     * @memberof Spriteset_Base
     */
    createToneChanger(): void;
    /**
     * Creates the WebGL toner.
     * 
     * @memberof Spriteset_Base
     */
    createWebGLToneChanger(): void;
    /**
     * Creates the Canvas tone.
     * 
     * @memberof Spriteset_Base
     */
    createCanvasToneChanger(): void;
    /**
     * Creates a new sprite picture on the spritesetb ase.
     * 
     * @memberof Spriteset_Base
     */
    createPictures(): void;
    /**
     * Creates a new Sprite timer on the spriteset base.
     * 
     * @memberof Spriteset_Base
     */
    createTimer(): void;
    /**
     * Creates the screen sprite.
     * 
     * @memberof Spriteset_Base
     */
    createScreenSprites(): void;
    /**
     * Updates the screen sprites on the spriteset base.
     * 
     * @memberof Spriteset_Base
     */
    updateScreenSprites(): void;
    updateToneChanger(): void;
    /**
     * Updates the WebGL tone changer.
     * 
     * @memberof Spriteset_Base
     */
    updateWebGLToneChanger(): void;
    /**
     * Updates the Canvas tone changer.
     * 
     * @memberof Spriteset_Base
     */
    updateCanvasToneChanger(): void;
    /**
     * Updates the position of spriteset base.
     * 
     * @memberof Spriteset_Base
     */
    updatePosition(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Spriteset_Map
 *
 * The set of sprites on the map screen.
 */
declare class Spriteset_Map extends Spriteset_Base {
    protected _parallax: TilingSprite;
    protected _tilemap: Tilemap | ShaderTilemap;
    protected _tileset: RPG.Tileset;
    protected _characterSprites: Array<Sprite_Character>;
    protected _shadowSprite: Sprite;
    protected _destinationSprite: Sprite_Destination;
    protected _weather: Weather;
    protected _parallaxName: string;

    /**
     * Hides the map spriteset character sprites.
     * 
     * @memberof Spriteset_Map
     */
    hideCharacters(): void;
    /**
     * Creates the map spriteset parallax.
     * 
     * @memberof Spriteset_Map
     */
    createParallax(): void;
    /**
     * Creates the map spriteset tile map.
     * 
     * @memberof Spriteset_Map
     */
    createTilemap(): void;
    /**
     * Loads the map spriteset tileset.
     * 
     * @memberof Spriteset_Map
     */
    loadTileset(): void;
    /**
     * Creates the map spriteset character sprite.
     * 
     * @memberof Spriteset_Map
     */
    createCharacters(): void;
    /**
     * Creates the map spriteset shadow sprite.
     * 
     * @memberof Spriteset_Map
     */
    createShadow(): void;
    /**
     * Creates the map spriteset destination sprite.
     * 
     * @memberof Spriteset_Map
     */
    createDestination(): void;
    /**
     * Creates the map spriteset weather.
     * 
     * @memberof Spriteset_Map
     */
    createWeather(): void;
    /**
     * Updates the map spriteset tileset.
     * 
     * @memberof Spriteset_Map
     */
    updateTileset(): void;
    /**
     * Simple fix for canvas parallax issue, destroy old parallax and readd to  the tree.
     */
    protected _canvasReAddParallax(): void;
    updateParallax(): void;
    /**
     * Updates the map spriteset tile map.
     * 
     * @memberof Spriteset_Map
     */
    updateTilemap(): void;
    /**
     * Updates the map spriteset shadow.
     * 
     * @memberof Spriteset_Map
     */
    updateShadow(): void;
    /**
     * Updates the map spriteset weather.
     * 
     * @memberof Spriteset_Map
     */
    updateWeather(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Spriteset_Battle
 *
 * The set of sprites on the battle screen.
 */
declare class Spriteset_Battle extends Spriteset_Base {
    protected _battlebackLocated: boolean;
    protected _backgroundSprite: Sprite;
    protected _battleField: Sprite;
    protected _back1Sprite: TilingSprite;
    protected _back2Sprite: TilingSprite;
    protected _enemySprites: Array<Sprite_Enemy>;
    protected _actorSprites: Array<Sprite_Actor>;

    /**
     * Creates the background of the battle spriteset.
     * 
     * @memberof Spriteset_Battle
     */
    createBackground(): void;
    /**
     * Creates the battlefield of the battle spriteset.
     * 
     * @memberof Spriteset_Battle
     */
    createBattleField(): void;
    /**
     * Creates the battleback of the battle spriteset.
     * 
     * @memberof Spriteset_Battle
     */
    createBattleback(): void;
    /**
     * Updates the battleback of the battle spriteset.
     * 
     * @memberof Spriteset_Battle
     */
    updateBattleback(): void;
    /**
     * Locates the battleback and adjusts the coordinates of the
     * battleback.
     * @memberof Spriteset_Battle
     */
    locateBattleback(): void;
    /**
     * Returns battleb ack 2 of the battle spriteset.
     * 
     * @returns {Bitmap} Instance of the Bitmap class.
     * @memberof Spriteset_Battle
     */
    battleback1Bitmap(): Bitmap;
    /**
     * Returns battleback 2 of the battle spriteset.
     * 
     * @returns {Bitmap} Instance of the Bitmap class.
     * @memberof Spriteset_Battle
     */
    battleback2Bitmap(): Bitmap;
    /**
     * 
     * 
     * @returns {string} Name of battleback 1 bitmap.
     * @memberof Spriteset_Battle
     */
    battleback1Name(): string;
    /**
     * 
     * 
     * @returns {string} Name of battleback 2 bitmap.
     * @memberof Spriteset_Battle
     */
    battleback2Name(): string;
    /**
     * Returns the battleback 1 name as a string.
     * 
     * @returns {string} Name of overworld battleback 1 bitmap.
     * @memberof Spriteset_Battle
     */
    overworldBattleback1Name(): string;
    /**
     * Returns the battleback 2 name as a string.
     * 
     * @returns {string} Name of overworld battleback 2 bitmap.
     * @memberof Spriteset_Battle
     */
    overworldBattleback2Name(): string;
    /**
     * 
     * 
     * @returns {string} Name of the normal battleback 1 bitmap.
     * @memberof Spriteset_Battle
     */
    normalBattleback1Name(): string;
    /**
     * 
     * 
     * @returns {string} Name of the normal battleback 2 bitmap.
     * @memberof Spriteset_Battle
     */
    normalBattleback2Name(): string;
    /**
     * Given the specified terrtain type, return
     * the battleback 1 name.
     * @param {number} type Terrain type.
     * @returns {string} Name of the terrtain battleback 1 bitmap.
     * @memberof Spriteset_Battle
     */
    terrainBattleback1Name(type: number): string;
    /**
     * Given the specified terrain type, return
     * the battleback 2 name.
     * @param {number} type Terrain type.
     * @returns {string} Name of the terrain battleback 2 bitmap.
     * @memberof Spriteset_Battle
     */
    terrainBattleback2Name(type: number): string;
    /**
     * 
     * 
     * @returns {string} Name of the default battleback 1 name.
     * @memberof Spriteset_Battle
     */
    defaultBattleback1Name(): string;
    /**
     * 
     * 
     * @returns {string} Name of the default battleback 2 name.
     * @memberof Spriteset_Battle
     */
    defaultBattleback2Name(): string;
    /**
     * 
     * 
     * @returns {string} Name of the ship battleback 1  bitmap.
     * @memberof Spriteset_Battle
     */
    shipBattleback1Name(): string;
    /**
     * 
     * 
     * @returns {string} Name of the ship battleback 2 bitmap.
     * @memberof Spriteset_Battle
     */
    shipBattleback2Name(): string;
    autotileType(z: number): number;
    /**
     * Creates sprite enemies for the battle spriteset.
     * 
     * @memberof Spriteset_Battle
     */
    createEnemies(): void;
    compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number;
    /**
     * Creates sprite actors for the battle spriteset.
     * 
     * @memberof Spriteset_Battle
     */
    createActors(): void;
    /**
     * Updates the actor sprites on the battle spriteset.
     * 
     * @memberof Spriteset_Battle
     */
    updateActors(): void;
    /**
     * Returns all battler sprites on the battle spriteset.
     * 
     * @returns {Array<Sprite_Battler>} 
     * @memberof Spriteset_Battle
     */
    battlerSprites(): Array<Sprite_Battler>;
    /**
     * Returns true if animation is playing on the battle spriteset.
     * 
     * @returns {boolean} 
     * @memberof Spriteset_Battle
     */
    isAnimationPlaying(): boolean;
    isEffecting(): boolean;
    /**
     * Returns true if any sprite actor or enemy is moving.
     * 
     * @returns {boolean} Representing whether any battle participants are moving.
     * @memberof Spriteset_Battle
     */
    isAnyoneMoving(): boolean;
    /**
     * Returns true if the battle spriteset is busy.
     * 
     * @returns {boolean} 
     * @memberof Spriteset_Battle
     */
    isBusy(): boolean;
}
