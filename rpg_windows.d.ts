//=============================================================================
// rpg_windows.js v1.5.0
//=============================================================================

//-----------------------------------------------------------------------------
// Window_Base
//
// The superclass of all windows within the game.

/**
 * Super class of all windows within the game.
 * Inherits from the Window class.
 * @class Window_Base
 * @extends {Window}
 */
declare class Window_Base {
  /**
   * The standard icon width;
   * default is 32.
   * @protected
   * @static
   * @type {number}
   * @memberof Window_Base
   */
  protected static _iconWidth: number;
  /**
   * The standard icon height;
   * default is 32.
   * @protected
   * @static
   * @type {number}
   * @memberof Window_Base
   */
  protected static _iconHeight: number;
  /**
   * The standard face width;
   * default is 144.
   * @protected
   * @static
   * @type {number}
   * @memberof Window_Base
   */
  protected static _faceWidth: number;
  /**
   * The standard face height;
   * default is 144.
   * @protected
   * @static
   * @type {number}
   * @memberof Window_Base
   */
  protected static _faceHeight: number;
  /**
   * The opening property; determines if
   * the window is opening.
   * @protected
   * @type {boolean}
   * @memberof Window_Base
   */
  protected _opening: boolean;
  /**
   * The closing property; determines if
   * the window is closing.
   * @protected
   * @type {boolean}
   * @memberof Window_Base
   */
  protected _closing: boolean;

  /**
   * Creates an instance of Window_Base.
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @param {number} height 
   * @memberof Window_Base
   */
  constructor(x: number, y: number, width: number, height: number);

  /**
   * Returns the standard line height of the current window;
   * default is 36.
   * @returns {number} 
   * @memberof Window_Base
   */
  lineHeight(): number;
  /**
   * Returns the standard font face of the 
   * game based on what language the game is in.
   * @returns {string} 
   * @memberof Window_Base
   */
  standardFontFace(): string;
  /**
   * Returns the standard font size of the text
   * in window; default is 28.
   * @returns {number} 
   * @memberof Window_Base
   */
  standardFontSize(): number;
  /**
   * Returns the standard padding of the window;
   * default is 18.
   * @returns {number} 
   * @memberof Window_Base
   */
  standardPadding(): number;
  /**
   * Returns the text padding of the window;
   * default is 6.
   * @returns {number} 
   * @memberof Window_Base
   */
  textPadding(): number;
  /**
   * Returns the standard back opacity of the window; this is the
   * opacity of the area behind the window's text content.
   * Default is 192.
   * @returns {number} 
   * @memberof Window_Base
   */
  standardBackOpacity(): number;
  /**
   * Loads the window skin from the img/system directory.
   * 
   * @memberof Window_Base
   */
  loadWindowSkin(): void;
  /**
   * Updates the window padding based on the 
   * standardPadding method.
   * @memberof Window_Base
   */
  updatePadding(): void;
  /**
   * Updates the back opacity of the window
   * based on the standardBackOpacity method.
   * @memberof Window_Base
   */
  updateBackOpacity(): void;
  /**
   * Returns the inner content width of the window.
   * 
   * @returns {number} 
   * @memberof Window_Base
   */
  contentsWidth(): number;
  /**
   * Returns the inner content height of the window.
   * 
   * @returns {number} 
   * @memberof Window_Base
   */
  contentsHeight(): number;
  /**
   * Returns the fitting height given a number of lines based on
   * the line height plus standard padding of the window.
   * Default formula: numLines * lineHeight + standardPadding * 2
   *
   * @param {number} numLines 
   * @returns {number} 
   * @memberof Window_Base
   */
  fittingHeight(numLines: number): number;
  /**
   * Updates the tone of the window based on the
   * game system window tone defined in the database.
   * @memberof Window_Base
   */
  updateTone(): void;
  /**
   * Creates the contents of the window; this is the area
   * of the window which text is drawn to.
   * @memberof Window_Base
   */
  createContents(): void;
  /**
   * Resets the font settings of the window back to the
   * default.
   * @memberof Window_Base
   */
  resetFontSettings(): void;
  /**
   * Resets the text color of the window back to the
   * default.
   * @memberof Window_Base
   */
  resetTextColor(): void;
  /**
   * The update method of the window; this is
   * run every frame to do logic processing for the window.
   * @memberof Window_Base
   */
  update(): void;
  /**
   * Updates the openness of the window when the
   * _opening property is set to true.
   * Openness is increased.
   * @memberof Window_Base
   */
  updateOpen(): void;
  /**
   * Updates the openness of the window when the 
   * _closing property is set to true.
   * Openness is decreased.
   * @memberof Window_Base
   */
  updateClose(): void;
  /**
   * Opens the window.
   * 
   * @memberof Window_Base
   */
  open(): void;
  /**
   * Closes the window.
   * 
   * @memberof Window_Base
   */
  close(): void;
  /**
   * Returns true if the window is currently opening.
   *
   * @returns {boolean} 
   * @memberof Window_Base
   */
  isOpening(): boolean;
  /**
   * Returns true if the window is currently closing.
   * 
   * @returns {boolean} 
   * @memberof Window_Base
   */
  isClosing(): boolean;
  /**
   * Shows the window, making it visible.
   * 
   * @memberof Window_Base
   */
  show(): void;
  /**
   * Hides the window, making it invisible;
   * the window is not closed when hidden.
   * 
   * @memberof Window_Base
   */
  hide(): void;
  /**
   * Activates the window, allowing it to be processed
   * and to update.
   * @memberof Window_Base
   */
  activate(): void;
  /**
   * Deactives the window, preventing further processing.
   * 
   * @memberof Window_Base
   */
  deactivate(): void;
  /**
   * Returns a text color given a numbered index
   * as a css color string; this index maps
   * directly to the img/system/window.png colors
   * by default.
   * @param {number} n 
   * @returns {*} 
   * @memberof Window_Base
   */
  textColor(n: number): string;
  /**
   * Returns the normal color as a css
   * color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  normalColor(): string;
  /**
   * Returns the system color as a
   * css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  systemColor(): string;
  /**
   * Returns the crisis color as a 
   * css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  crisisColor(): string;
  /**
   * Returns the death color as a 
   * css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  deathColor(): string;
  /**
   * Returns the gauage back color as 
   * a css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  gaugeBackColor(): string;
  /**
   * Returns the hp gauge color 1 
   * as a css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  hpGaugeColor1(): string;
  /**
   * Returns the hp gauge color 2 
   * as a css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  hpGaugeColor2(): string;
  /**
   * Returns the mp gauge color 1
   * as a css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  mpGaugeColor1(): string;
  /**
   * Returns the mp gauge color 2
   * as a css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  mpGaugeColor2(): string;
  /**
   * Returns the mp cost color as a
   * css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  mpCostColor(): string;
  /**
   * Returns the power up color as a
   * css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  powerUpColor(): string;
  /**
   * Returns the power down color as a 
   * css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  powerDownColor(): string;
  /**
   * Returns the tp gauge color 1 as a 
   * css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  tpGaugeColor1(): string;
  /**
   * Returns tp gauge color 2 as a
   * css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  tpGaugeColor2(): string;
  /**
   * Returns the tp cost color as a 
   * css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  tpCostColor(): string;
  /**
   * Returns the pending color as a
   * css color string.
   * @returns {string} 
   * @memberof Window_Base
   */
  pendingColor(): string;
  /**
   * Returns the translucentOpacity for the window;
   * The default is 160.
   * 
   * @returns {number} 
   * @memberof Window_Base
   */
  translucentOpacity(): number;
  /**
   * Changes the text color property given a css color string.
   * 
   * @param {string} color 
   * @memberof Window_Base
   */
  changeTextColor(color: string): void;
  /**
   * Changes the paintOpacity (the opacity of the text drawn to the window);
   * if true the opacity is set to 255, otherwise the opacity is set to 160.
   * @param {boolean} enabled 
   * @memberof Window_Base
   */
  changePaintOpacity(enabled: boolean): void;
  /**
   * Given text or a number, draws the content to the window's contents
   * layer at the specified x and y coordinate within the max width.
   * The text content can also be aligned with the align property.
   * The possible alignments are: "left", "center", "right".
   * @param {(string | number)} text 
   * @param {number} x 
   * @param {number} y 
   * @param {number} maxWidth 
   * @param {string} align 
   * @memberof Window_Base
   */
  drawText(text: string | number, x: number, y: number, maxWidth: number, align: string): void;
  /**
   * Calculates the width of a text string and
   * returns a number.
   * @param {string} text 
   * @returns {number} 
   * @memberof Window_Base
   */
  textWidth(text: string): number;
  /**
   * Draws text with text codes included; this will draw
   * icons, increase text height, and more.
   * @param {string} text 
   * @param {number} x 
   * @param {number} y 
   * @returns {number} 
   * @memberof Window_Base
   */
  drawTextEx(text: string, x: number, y: number): number;
  /**
   * Converts the escape characters and returns the text content
   * after processing the characters.
   * @param {string} text 
   * @returns {string} 
   * @memberof Window_Base
   */
  convertEscapeCharacters(text: string): string;
  /**
   * Returns the actor name given an index;
   * the index starts from 1.
   * @param {number} actorIndex 
   * @returns {string} 
   * @memberof Window_Base
   */
  actorName(actorIndex: number): string;
  /**
   * Returns a party member name given an index;
   * the index starts from 1.
   * @param {number} partyMemberIndex 
   * @returns {string} 
   * @memberof Window_Base
   */
  partyMemberName(partyMemberIndex: number): string;
  /**
   * Process each character in the text when drawTextEx
   * is used to draw text.
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
  processCharacter(textState: MV.TextState): void;
  /**
   * Processes the normal characters in the text
   * when drawTextEx is used to draw text.
   * Normal characters are letters and numbers.
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
  processNormalCharacter(textState: MV.TextState): void;
  /**
   * Processes new line when drawTextEx is used to draw text.
   * 
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
  processNewLine(textState: MV.TextState): void;
  /**
   * Processes new page when drawTexttEx is used to draw text.
   * 
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
  processNewPage(textState: MV.TextState): void;
  obtainEscapeCode(textState: MV.TextState): string;
  /**
   * Obtains the escape parameters from text codes in the text state
   * when drawTextEx is used to draw text.
   * @param {MV.TextState} textState 
   * @returns {(number | string)} 
   * @memberof Window_Base
   */
  obtainEscapeParam(textState: MV.TextState): number | string;
  /**
   * Processes escape characters when drawTextEx is used 
   * for drawing text.
   * @param {string} code 
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
  processEscapeCharacter(code: string, textState: MV.TextState): void;
  /**
   * Processes drawing an icon when drawTextEx is used for
   * drawing text.
   * @param {number} iconIndex 
   * @param {MV.TextState} textState 
   * @memberof Window_Base
   */
  processDrawIcon(iconIndex: number, textState: MV.TextState): void;
  /**
   * Makes the font bigger by a value of 12.
   * 
   * @memberof Window_Base
   */
  makeFontBigger(): void;
  /**
   * Makes the font smaller by a value of 12.
   * 
   * @memberof Window_Base
   */
  makeFontSmaller(): void;
  /**
   * Calculates the text height of the textState (when using drawTextEx);
   * if all is set to true, all lines of text are calculated, otherwise
   * only a single line is processed.
   * @param {MV.TextState} textState 
   * @param {boolean} all 
   * @returns {number} 
   * @memberof Window_Base
   */
  calcTextHeight(textState: any, all: boolean): number;
  /**
   * Draws an icon given the specified iconIndex at the specified
   * x and y coordinates. The Width and Height of the icon is based on the
   * _iconWidth and _iconHeight properties.
   * @param {number} iconIndex 
   * @param {number} x 
   * @param {number} y 
   * @memberof Window_Base
   */
  drawIcon(iconIndex: number, x: number, y: number): void;
  drawFace(faceName: string, faceIndex: number, x: number, y: number, width: number, height: number): void;
  /**
   * Draws a character (map sprites) at the specified x and y coordinate.
   * CharacterName refers to character spritesheet, and characterIndex refers
   * to the characterIndex on the spritesheet.
   * @param {string} characterName 
   * @param {number} characterIndex 
   * @param {number} x 
   * @param {number} y 
   * @memberof Window_Base
   */
  drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;
  /**
   * Draws a gauge at the specified x and y coordinates within the given width.
   * Color1 and Color2 represent the gradient as css color strings of the gauge.
   * 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @param {number} rate 
   * @param {string} color1 
   * @param {string} color2 
   * @memberof Window_Base
   */
  drawGauge(x: number, y: number, width: number, rate: number, color1: string, color2: string);
  /**
   * Returns the hp color as a css string.
   * 
   * @param {Game_Actor} actor 
   * @returns {string} 
   * @memberof Window_Base
   */
  hpColor(actor: Game_Actor): string;
  /**
   * Returns the mp color as a css color string.
   * 
   * @param {Game_Actor} actor 
   * @returns {string} 
   * @memberof Window_Base
   */
  mpColor(actor: Game_Actor): string;
  /**
   * Returns the tp color as a css color string.
   * 
   * @param {Game_Actor} actor 
   * @returns {string} 
   * @memberof Window_Base
   */
  tpColor(actor: Game_Actor): string;
  drawActorCharacter(actor: Game_Actor, x: number, y: number): void;
  /**
   * Draws the actor face at the specified x and y coordinates within
   * the given width.
   * @param {Game_Actor} actor 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @param {number} height 
   * @memberof Window_Base
   */
  drawActorFace(actor: Game_Actor, x: number, y: number, width: number, height: number): void;
  /**
   * Draws the actor name at the specified x and y coordinates within
   * the given width.
   * @param {Game_Actor} actor 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @memberof Window_Base
   */
  drawActorName(actor: Game_Actor, x: number, y: number, width: number): void;
  /**
   * Draws the actor class at the specified x and y coordinates
   * within the given width.
   * @param {Game_Actor} actor 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @memberof Window_Base
   */
  drawActorClass(actor: Game_Actor, x: number, y: number, width: number): void;
  /**
   * Draws the actor nickname at the specified x and y coordinates
   * within the given width.
   * @param {Game_Actor} actor 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @memberof Window_Base
   */
  drawActorNickname(actor: Game_Actor, x: number, y: number, width: number): void;
  /**
   * Draws the actor level at the specified x and y coordinates.
   * 
   * @param {Game_Actor} actor 
   * @param {number} x 
   * @param {number} y 
   * @memberof Window_Base
   */
  drawActorLevel(actor: Game_Actor, x: number, y: number);
  /**
   * Draws the actor icons at the specified x and y coordinates
   * within the given width.
   * @param {Game_Actor} actor 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @memberof Window_Base
   */
  drawActorIcons(actor: Game_Actor, x: number, y: number, width: number): void;
  /**
   * Draws the current and max number at the specified x and y coordinate
   * within the given width. Color1 represents the current number and color2
   * represents the max number when the text is drawn.
   * @param {number} current 
   * @param {number} max 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @param {string} color1 
   * @param {string} color2 
   * @memberof Window_Base
   */
  drawCurrentAndMax(current: number, max: number, x: number, y: number, width: number, color1: string, color2: string): void;
  /**
   * Draws the actor hp at the specified x and y coordinates within
   * the given width.
   * @param {Game_Actor} actor 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @memberof Window_Base
   */
  drawActorHp(actor: Game_Actor, x: number, y: number, width: number): void;
  /**
   * Draws the actor mp at the specified x and y coordinates within
   * the given width.
   * @param {Game_Actor} actor 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @memberof Window_Base
   */
  drawActorMp(actor: Game_Actor, x: number, y: number, width: number): void;
  /**
   * Draws the actor tp at the specified x and y coordinates within the
   * given width.
   * @param {Game_Actor} actor 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @memberof Window_Base
   */
  drawActorTp(actor: Game_Actor, x: number, y: number, width: number): void;
  /**
   * Draws a simple status for the game actor passed into the method at the
   * specified x and y coordinates within the given width.
   * 
   * @param {Game_Actor} actor 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @memberof Window_Base
   */
  drawActorSimpleStatus(actor: Game_Actor, x: number, y: number, width: number): void;
  /**
   * Draws the item name at the specified x and y coordinates within
   * the given width.
   * @param {RPG.BaseItem} item 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @memberof Window_Base
   */
  drawItemName(item: RPG.BaseItem, x: number, y: number, width: number): void;
  /**
   * Draws the currency value given at the specified x and y coordinates within
   * the width given. Useful if you want to write your own custom currency value.
   * @param {number} value 
   * @param {string} unit 
   * @param {number} x 
   * @param {number} y 
   * @param {number} width 
   * @memberof Window_Base
   */
  drawCurrencyValue(value: number, unit: string, x: number, y: number, width: number): void;
  /**
   * Changes the text color based on the powerUpColor, powerDownColor
   * and normal color. powerUpColor is any number greater than 0, powerDownColor
   * is any color less than 0, otherwise normal color is returned.
   * @param {number} change 
   * @memberof Window_Base
   */
  paramchangeTextColor(change: number): void;
  /**
   * Sets the background type of the window.
   * 0 is 255 window opacity (standard).
   * 1 is the window with background dimmer.
   * Any other number changes the opacity
   * to 0.
   * @param {number} type 
   * @memberof Window_Base
   */
  setBackgroundType(type: number): void;
  /**
   * Shows the background dimmer sprite.
   * 
   * @memberof Window_Base
   */
  showBackgroundDimmer(): void;
  /**
   * Hides the background dimmer sprite.
   * 
   * @memberof Window_Base
   */
  hideBackgroundDimmer(): void;
  /**
   * Updates the background dimmer sprite opacity based on the openness
   * of the window.
   * @memberof Window_Base
   */
  updateBackgroundDimmer(): void;
  /**
   * Refreshes the bitmap attached to the dimmer sprite
   * based on the window dimensions.
   * @memberof Window_Base
   */
  refreshDimmerBitmap(): void;
  /**
   * Color 1 of the dimmer sprite bitmap.
   * for the gradient.
   * @returns {string} 
   * @memberof Window_Base
   */
  dimColor1(): string;
  /**
   * Color 2 of the dimmer sprite bitmap
   * for the gradient.
   * @returns {string} 
   * @memberof Window_Base
   */
  dimColor2(): string;
  /**
   * Returns the x coordinate of the mouse to
   * a local window x coordinate.
   * @param {number} x 
   * @returns {number} 
   * @memberof Window_Base
   */
  canvasToLocalX(x:number): number;
  /**
   * Returns the y coordinate of the mouse
   * to a local window y coordinate.
   * @param {number} y 
   * @returns {number} 
   * @memberof Window_Base
   */
  canvasToLocalY(y: number): number;
  /**
   * Reverses the face images of the 
   * game party members.
   * @memberof Window_Base
   */
  reserveFaceImages(): void;
}

//-----------------------------------------------------------------------------
// Window_Selectable
//
// The window class with cursor movement and scroll functions.

declare class Window_Selectable extends Window_Base {
  protected _index: number;
  protected _cursorFixed: boolean;
  protected _cursorAll: boolean;
  protected _stayCount: number;
  protected _helpWindow: any;
  protected _handlers: object;
  protected _touching: boolean;
  protected _scrollX: number;
  protected _scrollY: number;
  
  constructor(x: number, y: number, width: number, height: number);
  index(): number;
  cursorFixed(): boolean;
  setCursorFixed(cursorFixed: boolean): void;
  cursorAll(): boolean;
  setCursorAll(cursorAll: boolean): void;
  maxCols(): number;
  maxItems(): number;
  spacing(): number;
  itemWidth(): number;
  itemHeight(): number;
  /**
   * Selects the current index within the window given a number.
   * 
   * @param {number} index 
   * @memberof Window_Selectable
   */
  select(index: number): void;
  /**
   * Deselects the currently selected index.
   * 
   * @memberof Window_Selectable
   */
  deselect(): void;

  /**
   * Reselects the index based on the window's _index property.
   * 
   * @memberof Window_Selectable
   */
  reselect(): void;
  row(): number;
  topRow(): number;
  maxTopRow(): number;
  /**
   * Sets the current top row of the given a number.
   * The top row will then be moved to an index
   * of the window.
   * @param {number} row 
   * @memberof Window_Selectable
   */
  setTopRow(row: number): void;
  resetScroll(): void;
  maxPageRows(): number;
  maxPageItems(): number;
  isHorizontal(): boolean;
  bottomRow(): number;
  setBottomRow(row: number): void;
  /**
   * Creates a new rectangle based on itemWidth and itemHeight.
   * The rectangle is mainly used for positioning items within
   * the selectable window.
   * @param {number} index 
   * @returns {Rectangle} 
   * @memberof Window_Selectable
   */
  itemRect(index: number): Rectangle;
  /**
   * Creates a new rectangle based on itemWidth and itemHeight
   * The rectangle is used for positioning text within
   * the selectable window.
   * @param {number} index 
   * @returns {Rectangle} 
   * @memberof Window_Selectable
   */
  itemRectForText(index: number): Rectangle;
  setHelpWindow(helpWindow: Window_Help): void;
  showHelpWindow(): void;
  hideHelpWindow(): void;
  /**
   * Creates a new handler with the symbol as the handler name
   * and a method (JS function) bound to it.
   * @param {string} symbol 
   * @param {*} method 
   * @memberof Window_Selectable
   */
  setHandler(symbol: string, method: any): void;
  isHandled(symbol: string): boolean;
  callHandler(symbol: string): void;
  isOpenAndActive(): boolean;
  isCursorMovable(): boolean;
  cursorDown(wrap: boolean): void;
  cursorUp(wrap: boolean): void;
  cursorRight(wrap: boolean): void;
  cursorLeft(wrap: boolean): void;
  cursorPagedown(): void;
  cursorPageup(): void;
  scrollDown(): void;
  scrollUp(): void;
  updateArrows(): void;
  processCursorMove(): void;
  processHandling(): void;
  processWheel(): void;
  processTouch(): void;
  isTouchedInsideFrame(): boolean;
  onTouch(triggered: boolean): void;
  hitTest(x: number, y: number): number;
  isContentsArea(x: number, y: number): boolean;
  isTouchOkEnabled(): boolean;
  isOkEnabled(): boolean;
  isCancelEnabled(): boolean;
  isOkTriggered(): boolean;
  isCancelTriggered(): boolean;
  processOk(): void;
  playOkSound(): void;
  playBuzzerSound(): void;
  callOkHandler(): void;
  processCancel(): void;
  callCancelHandler(): void;
  processPageup(): void;
  processPagedown(): void;
  updateInputData(): void;
  updateCursor(): void;
  isCursorVisible(): boolean;
  ensureCursorVisible(): void;
  callUpdateHelp(): void;
  updateHelp(): void;
  setHelpWindowItem(item: any): void;
  isCurrentItemEnabled(): boolean;
  drawAllItems(): void;
  drawItem(index: number): void;
  clearItem(index: number): void;
  redrawItem(index: number): void;
  redrawCurrentItem(): void;
  refresh(): void;
}

/**
 * Super class of windows for selecting a command.
 * 
 * @class Window_Command
 * @extends {Window_Selectable}
 */
declare class Window_Command extends Window_Selectable {
  constructor(x: number, y: number)
  windowWidth(): number;
  windowHeight(): number;
  numVisibleRows(): number;
  maxItems(): number;
  clearCommandList(): void;

  /**
   * Convenient method for overwriting and adding
   * commands with the addCommand method.
   * @memberof Window_Command
   */
  makeCommandList(): void;
  /**
   * Adds commands to the window list with the specified
   * parameters. The actual command can be found as an object.
   * @param {string} name 
   * @param {string} symbol 
   * @param {boolean} enabled 
   * @param {(any | object)} ext 
   * @memberof Window_Command
   */
  addCommand(name: string, symbol: string, enabled: boolean, ext: any | object)
  commandName(index: number): string;
  commandSymbol(index: number): string;
  isCommandEnabled(index: number): boolean;
  currentData(): object;
  currentSymbol(): string;
  currentExt(): any | object;
  findSymbol(symbol: string): number;
  selectSymbol(symbol: string): void;
  findExt(ext: any | object): number;
  selectExt(ext: any | object): void;
  itemTextAlign(): string;
}

/**
 * The command window for horizontal selection format.
 * Same as Window_Command.
 * @class Window_HorzCommand
 * @extends {Window_Command}
 */
declare class Window_HorzCommand extends Window_Command {
  constructor(x: number, y:number)
}

/**
 * The window for display the description of the
 * selected item given an item or a text string.
 * @class Window_Help
 * @extends {Window_Base}
 */
declare class Window_Help extends Window_Base {
  protected _text: string;
  constructor(numLines: number);
  setText(text: string): void;
  clear(): void;
  setItem(item: RPG.BaseItem): void;
}

/**
 * Window for displaying game gold in RPGMakerMV.
 * 
 * @class Window_Gold
 * @extends {Window_Base}
 */
declare class Window_Gold extends Window_Base {
  constructor(x: number, y: number);
  /**
   * Returns the $gameParty gold as a number.
   * 
   * @returns {number} 
   * @memberof Window_Gold
   */
  value(): number;
  /**
   * Returns the RPGMakerMV database currency
   * as a string.
   * @returns {string} 
   * @memberof Window_Gold
   */
  currencyUnit(): string;
}

declare class Window_MenuCommand extends Window_Command {
  constructor(x: number, y: number);
  initCommandPosition(): void;
  /**
   * Adds the standard game commands to the
   * RPGMakerMV main menu.
   * @memberof Window_MenuCommand
   */
  addMainCommands(): void;
  addFormationCommand(): void;
  addOriginalCommands(): void;
  addSaveCommand(): void;
  addGameEndCommand(): void;
  /**
   * Checks if the standard game commands for the menu
   * are needed based on database system options.
   * @param {string} name 
   * @returns {boolean} 
   * @memberof Window_MenuCommand
   */
  needsCommand(name: string): boolean;
  areMainCommandsEnabled(): boolean;
  isOptionsEnabled(): boolean;
  isSaveEnabled(): boolean;
  selectLast(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_MenuStatus
 *
 * The window for displaying party member status on the menu screen.
 * @class Window_MenuStatus
 * @extends {Window_Selectable}
 */
declare class Window_MenuStatus extends Window_Selectable {
    protected _formationMode: boolean;
    protected _pendingIndex: number;

    constructor(x: number, y: number);

    windowWidth(): number;
    windowHeight(): number;
    itemHeight(): number;
    numVisibleRows(): number;
    loadImages(): void;
    drawItemBackground(index: number): void;
    drawItemImage(index: number): void;
    drawItemStatus(index: number): void;
    selectLast(): void;
    formationMode(): boolean;
    setFormationMode(formationMode: boolean): void;
    pendingIndex(): number;
    setPendingIndex(index: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_MenuActor
 *
 * The window for selecting a target actor on the item and skill screens.
 * @class Window_MenuActor
 * @extends {Window_MenuStatus}
 */
declare class Window_MenuActor extends Window_MenuStatus {
    constructor();

    selectForItem(item: RPG.BaseItem): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_ItemCategory
 *
 * The window for selecting a category of items on the item and shop screens.
 * @class Window_ItemCategory
 */
declare class Window_ItemCategory extends Window_HorzCommand {
    protected _itemWindow: Window_ItemList;

    constructor();

    setItemWindow(itemWindow: Window_ItemList): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_ItemList
 *
 * The window for selecting an item on the item screen.
 * @class Window_ItemList
 */
declare class Window_ItemList extends Window_Selectable {
    protected _category: string;
    protected _data: Array<RPG.BaseItem>;

    constructor(x: number, y: number, width: number, height: number);

    setCategory(category: string): void;
    item(): RPG.BaseItem;
    includes(item: RPG.BaseItem): boolean;
    needsNumber(): boolean;
    isEnabled(item: RPG.BaseItem): boolean;
    selectLast(): void;
    makeItemList(): void;
    numberWidth(): number;
    drawItemNumber(item: RPG.BaseItem, x: number, y: number, width: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_SkillType
 *
 * The window for selecting a skill type on the skill screen.
 * @class Window_SkillType
 */
declare class Window_SkillType extends Window_Command {
    protected _actor: Game_Actor;
    protected _skillWindow: Window_SkillList;

    constructor(x: number, y: number);

    setActor(actor: Game_Actor): void;
    setSkillWindow(skillWindow: Window_SkillList): void;
    selectLast(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_SkillStatus
 *
 * The window for displaying the skill user's status on the skill screen.
 * @class Window_SkillStatus
 */
declare class Window_SkillStatus extends Window_Base {
    protected _actor: Game_Actor;

    constructor(x: number, y: number, width: number, height: number);

    setActor(actor: Game_Actor): void;
    refresh(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_SkillList
 *
 * The window for selecting a skill on the skill screen.
 * @class Window_SkillList
 */
declare class Window_SkillList extends Window_Selectable {
    protected _actor: Game_Actor;
    protected _stypeId: number;
    protected _data: Array<RPG.Skill>;

    constructor(x: number, y: number, witth: number, height: number);

    setActor(actor: Game_Actor): void;
    setStypeId(stypeId: number): void;
    item(): RPG.Skill;
    includes(item: RPG.Skill): boolean;
    isEnabled(item: RPG.Skill): boolean;
    makeItemList(): void;
    selectLast(): void;
    costWidth(): number;
    drawSkillCost(skill: RPG.Skill, x: number, y: number, width: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_EquipStatus
 *
 * The window for displaying parameter changes on the equipment screen.
 * @class Window_EquipStatus
 */
declare class Window_EquipStatus extends Window_Base {
    protected _actor: Game_Actor;
    protected _tempActor: Game_Actor;

    constructor(x: number, y: number);

    windowWidth(): number;
    windowHeight(): number;
    numVisibleRows(): number;
    setActor(actor: Game_Actor): void;
    refresh(): void;
    setTempActor(tempActor: Game_Actor): void;
    drawItem(x: number, y: number, paramId: number): void;
    drawParamName(x: number, y: number, paramId: number): void;
    drawCurrentParam(x: number, y: number, paramId: number): void;
    drawRightArrow(x: number, y: number): void;
    drawNewParam(x: number, y: number, paramId: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_EquipCommand
 *
 * The window for selecting a command on the equipment screen.
 * @class Window_EquipCommand
 */
declare class Window_EquipCommand extends Window_HorzCommand {
    protected _windowWidth: number;

    constructor(x: number, y: number, width: number);
}

/**
 * -----------------------------------------------------------------------------
 * Window_EquipSlot
 *
 * The window for selecting an equipment slot on the equipment screen.
 * @class Window_EquipSlot
 */
declare class Window_EquipSlot extends Window_Selectable {
    protected _actor: Game_Actor;
    protected _itemWindow: Window_EquipItem;
    protected _statusWindow: Window_EquipStatus;

    constructor(x: number, y: number, width: number, height: number);

    setActor(actor: Game_Actor): void;
    item(): RPG.EquipItem;
    slotName(index: number): string;
    isEnabled(index: number): boolean;
    setStatusWindow(statusWindow: Window_EquipStatus): void;
    setItemWindow(itemWindow: Window_EquipItem): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_EquipItem
 *
 * The window for selecting an equipment item on the equipment screen.
 * @class Window_EquipItem
 */
declare class Window_EquipItem extends Window_ItemList {
    protected _actor: Game_Actor;
    protected _slotId: number;
    protected _statusWindow: Window_EquipStatus;

    constructor(x: number, y: number, width: number, height: number);

    setActor(actor: Game_Actor): void;
    setSlotId(slotId: number): void;
    includes(item: RPG.EquipItem): boolean;
    isEnabled(item: RPG.EquipItem): boolean;
    setStatusWindow(statusWindow: Window_EquipStatus): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_Status
 *
 * The window for displaying full status on the status screen.
 * @class Window_Status
 */
declare class Window_Status extends Window_Selectable {
    protected _actor: Game_Actor;

    constructor();

    setActor(actor: Game_Actor): void;
    drawBlock1(y: number): void;
    drawBlock2(y: number): void;
    drawBlock3(y: number): void;
    drawBlock4(y: number): void;
    drawHorzLine(y: number): void;
    lineColor(): string;
    drawBasicInfo(x: number, y: number): void;
    drawParameters(x: number, y: number): void;
    drawExpInfo(x: number, y: number): void;
    drawEquipments(x: number, y: number): void;
    drawProfile(x: number, y: number): void;
    maxEquipmentLines(): number;
}

/**
 * -----------------------------------------------------------------------------
 * Window_Options
 *
 * The window for changing various settings on the options screen.
 * @class Window_Options
 */
declare class Window_Options extends Window_Command {
    constructor();

    updatePlacement(): void;
    addGeneralOptions(): void;
    addVolumeOptions(): void;
    statusWidth(): number;
    statusText(index: number): string;
    isVolumeSymbol(symbol: string): boolean;
    booleanStatusText(value: boolean): string;
    volumeStatusText(value: number): string;
    volumeOffset(): number;
    changeValue(symbol: string, value: boolean | number): void;
    getConfigValue(symbol: string): boolean;
    setConfigValue(symbol: string, volume: boolean | number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_SavefileList
 *
 * The window for selecting a save file on the save and load screens.
 * @class Window_SavefileList
 */
declare class Window_SavefileList extends Window_Selectable {
    protected _mode: string;

    constructor(x: number, y: number, width: number, height: number);

    setMode(mode: string): void;
    maxVisibleItems(): number;
    itemHeight(): number;
    drawFileId(id: number, x: number, y: number): void;
    drawContents(info: {key: string}, rect: Rectangle, valid: boolean): void;
    drawGameTitle(info: {key: string}, x: number, y: number, width: number): void;
    drawPartyCharacters(info: {key: string}, x: number, y: number): void;
    drawPlaytime(info: {key: string}, x: number, y: number, width: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_ShopCommand
 *
 * The window for selecting buy/sell on the shop screen.
 * @class Window_ShopCommand
 */
declare class Window_ShopCommand extends Window_HorzCommand {
    protected _windowWidth: number;
    protected _purchaseOnly: boolean;

    initialize(width: number, purchaseOnly: boolean): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_ShopBuy
 *
 * The window for selecting an item to buy on the shop screen.
 * @class Window_ShopBuy
 */
declare class Window_ShopBuy extends Window_Selectable {
    protected _shopGoods: Array<Array<any>>;
    protected _money: number;
    protected _data: Array<RPG.BaseItem>;
    protected _price: Array<number>;
    protected _statusWindow: Window_ShopStatus;

    constructor(x: number, y: number, height: number, shopGoods: Array<Array<any>>);

    windowWidth(): number;
    item(): RPG.BaseItem;
    setMoney(money: number): void;
    price(item: RPG.BaseItem): number;
    isEnabled(item: RPG.BaseItem): boolean;
    makeItemList(): void;
    setStatusWindow(statusWindow: Window_ShopStatus): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_ShopSell
 *
 * The window for selecting an item to sell on the shop screen.
 * @class Window_ShopSell
 */
declare class Window_ShopSell extends Window_ItemList {
    constructor(x: number, y: number, width: number, height: number);

    isEnabled(item: RPG.BaseItem): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Window_ShopNumber
 *
 * The window for inputting quantity of items to buy or sell on the shop
 * screen.
 * @class Window_ShopNumber
 */
declare class Window_ShopNumber extends Window_Selectable {
    protected _item: RPG.BaseItem;
    protected _max: number;
    protected _price: number;
    protected _number: number;
    protected _currencyUnit: string;
    protected _buttons: Array<Sprite_Button>;

    constructor(x: number, y: number, height: number);

    windowWidth(): number;
    number(): number;
    setup(item: RPG.BaseItem, max: number, price: number): void;
    setCurrencyUnit(currencyUnit: string): void;
    createButtons(): void;
    placeButtons(): void;
    updateButtonsVisiblity(): void;
    showButtons(): void;
    hideButtons(): void;
    drawMultiplicationSign(): void;
    drawNumber(): void;
    drawTotalPrice(): void;
    itemY(): number;
    priceY(): number;
    buttonY(): number;
    cursorWidth(): number;
    cursorX(): number;
    maxDigits(): number;
    processNumberChange(): void;
    changeNumber(amount: number): void;
    onButtonUp(): void;
    onButtonUp2(): void;
    onButtonDown(): void;
    onButtonDown2(): void;
    onButtonOk(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_ShopStatus
 *
 * The window for displaying number of items in possession and the actor's
 * equipment on the shop screen.
 * @class Window_ShopStatus
 */
declare class Window_ShopStatus extends Window_Base {
    protected _item: RPG.BaseItem;
    protected _pageIndex: number;

    constructor(x: number, y: number, width: number, height: number);

    refresh(): void;
    setItem(item: RPG.BaseItem): void;
    isEquipItem(): boolean;
    drawPossession(x: number, y: number): void;
    drawEquipInfo(x: number, y: number): void;
    statusMembers(): Array<Game_Actor>;
    pageSize(): number;
    maxPages(): number;
    drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;
    drawActorParamChange(x: number, y: number, actor: Game_Actor, item1: RPG.EquipItem): void;
    paramId(): number;
    currentEquippedItem(actor: Game_Actor, etypeId: number): RPG.EquipItem;
    updatePage(): void;
    isPageChangeEnabled(): boolean;
    isPageChangeRequested(): boolean;
    isTouchedInsideFrame(): boolean;
    changePage(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_NameEdit
 *
 * The window for editing an actor's name on the name input screen.
 * @class Window_NameEdit
 */
declare class Window_NameEdit extends Window_Base {
    protected _name: string;
    protected _index: number;

    constructor(actor: Game_Actor, maxLength: number);

    windowWidth(): number;
    windowHeight(): number;

    // "name" is defines already by superclass(PIXI.DisplayObject).
    // name(): string;

    restoreDefault(): boolean;
    add(ch: string): boolean;
    back(): boolean;
    faceWidth(): number;
    charWidth(): number;
    left(): number;
    underlineRect(index: number): Rectangle;
    underlineColor(): string;
    drawUnderline(index: number): void;
    drawChar(index: number): void;
    refresh(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_NameInput
 *
 * The window for selecting text characters on the name input screen.
 * @class Window_NameInputt
 */
declare class Window_NameInput extends Window_Selectable {
    static LATIN1: Array<string>;
    static LATIN2: Array<string>;
    static RUSSIA: Array<string>;
    static JAPAN1: Array<string>;
    static JAPAN2: Array<string>;
    static JAPAN3: Array<string>;

    protected _editWindow: Window_NameEdit;
    protected _page: number;
    protected _index: number;

    constructor(editWindow: Window_NameEdit);

    windowHeight(): number;
    table(): Array<Array<string>>;
    character(): string;
    isPageChange(): boolean;
    isOk(): boolean;
    processJump(): void;
    processBack(): void;
    onNameAdd(): void;
    onNameOk(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_ChoiceList
 *
 * The window used for the event command [Show Choices].
 * @class Window_ChoiceList
 */
declare class Window_ChoiceList extends Window_Command {
    protected _messageWindow: Window_Message;
    protected _background: number;

    constructor(messageWindow: Window_Message);

    start(): void;
    selectDefault(): void;
    updatePlacement(): void;
    updateBackground(): void;
    maxChoiceWidth(): number;
    textWidthEx(text: string): number;
}

/**
 * -----------------------------------------------------------------------------
 * Window_NumberInput
 *
 * The window used for the event command [Input Number].
 * @class Window_NumberInput
 */
declare class Window_NumberInput extends Window_Selectable {
    protected _messageWindow: Window_Message;
    protected _number: number;
    protected _maxDigits: number;
    protected _buttons: Array<Sprite_Button>;

    constructor(messageWindow: Window_Message);

    start(): void;
    updatePlacement(): void;
    windowWidth(): number;
    windowHeight(): number;
    itemWidth(): number;
    createButtons(): void;
    placeButtons(): void;
    updateButtonsVisiblity(): void;
    showButtons(): void;
    hideButtons(): void;
    buttonY(): number;
    processDigitChange(): void;
    changeDigit(up: boolean): void;
    onButtonUp(): void;
    onButtonDown(): void;
    onButtonOk(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_EventItem
 *
 * The window used for the event command [Select Item].
 * @class Window_EventItem
 */
declare class Window_EventItem extends Window_ItemList {
    protected _messageWindow: Window_Message;

    constructor(messageWindow: Window_Message);

    windowHeight(): number;
    numVisibleRows(): number;
    start(): void;
    updatePlacement(): void;
    includes(item: RPG.BaseItem): boolean;
    isEnabled(item: RPG.BaseItem): boolean;
    onOk(): void;
    onCancel(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_Message
 *
 * The window for displaying text messages.
 * @class Window_Message
 */
declare class Window_Message extends Window_Base {
    protected _background: number;
    protected _positionType: number;
    protected _waitCount: number;
    protected _faceBitmap: Bitmap;
    protected _textState: MV.TextState;
    protected _pauseSkip: boolean;
    protected _showFast: boolean;
    protected _lineShowFast: boolean;

    protected _goldWindow: Window_Gold;
    protected _choiceWindow: Window_ChoiceList;
    protected _numberWindow: Window_NumberInput;
    protected _itemWindow: Window_EventItem;

    constructor();

    initMembers(): void;
    subWindows(): Array<Window_Base>;
    createSubWindows(): void;
    windowWidth(): number;
    windowHeight(): number;
    clearFlags(): void;
    numVisibleRows(): number;
    checkToNotClose(): void;
    canStart(): boolean;
    startMessage(): void;
    updatePlacement(): void;
    updateBackground(): void;
    terminateMessage(): void;
    updateWait(): boolean;
    updateLoading(): boolean;
    updateInput(): boolean;
    isAnySubWindowActive(): boolean;
    updateMessage(): boolean;
    onEndOfText(): void;
    startInput(): boolean;
    isTriggered(): boolean;
    doesContinue(): boolean;
    areSettingsChanged(): boolean;
    updateShowFast(): void;
    newPage(textState: MV.TextState): void;
    loadMessageFace(): void;
    drawMessageFace(): void;
    newLineX(): number;
    processNewLine(textState: MV.TextState): void;
    processNewPage(textState: MV.TextState): void;
    isEndOfText(textState: MV.TextState): boolean;
    needsNewPage(textState: MV.TextState): boolean;
    processEscapeCharacter(code: string, textState: MV.TextState): void;
    startWait(count: number): void;
    startPause(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_ScrollText
 *
 * The window for displaying scrolling text. No frame is displayed, but it
 * is handled as a window for convenience.
 * @class Window_ScrollText
 */
declare class Window_ScrollText extends Window_Base {
    protected _text: string;
    protected _allTextHeight: number;

    constructor();

    startMessage(): void;
    refresh(): void;
    updateMessage(): void;
    scrollSpeed(): number;
    isFastForward(): boolean;
    fastForwardRate(): number;
    terminateMessage(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_MapName
 *
 * The window for displaying the map name on the map screen.
 * @class Window_MapName
 */
declare class Window_MapName extends Window_Base {
    protected _showCount: number;

    constructor();

    windowWidth(): number;
    windowHeight(): number;
    updateFadeIn(): void;
    updateFadeOut(): void;
    refresh(): void;
    drawBackground(x: number, y: number, width: number, height: number): void;
}


/**
 * -----------------------------------------------------------------------------
 * Window_BattleLog
 *
 * The window for displaying battle progress. No frame is displayed, but it is
 * handled as a window for convenience.
 * @class Window_BattleLog
 */
declare class Window_BattleLog extends Window_Selectable {
    protected _lines: Array<string>;
    protected _methods: Array<MV.BattleLogMethod>;
    protected _waitCount: number;
    protected _waitMode: string;
    protected _baseLineStack: Array<number>;
    protected _spriteset: Spriteset_Battle;

    constructor();

    setSpriteset(spriteset: Spriteset_Battle): void;
    windowWidth(): number;
    windowHeight(): number;
    maxLines(): number;
    createBackBitmap(): void;
    createBackSprite(): void;
    numLines(): number;
    messageSpeed(): number;
    isBusy(): boolean;
    updateWait(): boolean;
    updateWaitCount(): boolean;
    updateWaitMode(): boolean;
    setWaitMode(waitMode: string): void;
    callNextMethod(): void;
    isFastForward(): boolean;
    push(methodName: string, ...args: any[]): void;
    clear(): void;
    wait(): void;
    waitForEffect(): void;
    waitForMovement(): void;
    addText(text: string): void;
    pushBaseLine(): void;
    popBaseLine(): void;
    waitForNewLine(): void;
    popupDamage(target: Game_Battler): void;
    performActionStart(subject: Game_Battler, action: Game_Action): void;
    performAction(subject: Game_Battler, action: Game_Action): void;
    performActionEnd(subject: Game_Battler): void;
    performDamage(target: Game_Battler): void;
    performMiss(target: Game_Battler): void;
    performRecovery(target: Game_Battler): void;
    performEvasion(target: Game_Battler): void;
    performMagicEvasion(target: Game_Battler): void;
    performCounter(target: Game_Battler): void;
    performReflection(target: Game_Battler): void;
    performSubstitute(substitute: Game_Battler, target: Game_Battler): void;
    performCollapse(target: Game_Battler): void;
    showAnimation(subject: Game_Battler, targets: Game_Battler, animationId: number): void;
    showAttackAnimation(subject: Game_Battler, targets: Game_Battler): void;
    showActorAttackAnimation(subject: Game_Battler, targets: Game_Battler): void;
    showEnemyAttackAnimation(subject: Game_Battler, targets: Game_Battler): void;
    showNormalAnimation(targets: Game_Battler, animationId: number, mirror: boolean): void;
    animationBaseDelay(): number;
    animationNextDelay(): number;
    drawBackground(): void;
    backRect(): Rectangle;
    backColor(): string;
    backPaintOpacity(): number;
    drawLineText(index: number): void;
    startTurn(): void;
    startAction(subject: Game_Battler, action: Game_Action, targets: Array<Game_Battler>): void;
    endAction(subject: Game_Battler): void;
    displayCurrentState(subject: Game_Battler): void;
    displayRegeneration(subject: Game_Battler): void;
    displayAction(subject: Game_Battler, item: RPG.UsableItem): void;
    displayCounter(target: Game_Battler): void;
    displayReflection(target: Game_Battler): void;
    displaySubstitute(substitute: Game_Battler, target: Game_Battler): void;
    displayActionResults(subject: Game_Battler, targt: Game_Battler): void;
    displayFailure(target: Game_Battler): void;
    displayCritical(target: Game_Battler): void;
    displayDamage(target: Game_Battler): void;
    displayMiss(target: Game_Battler): void;
    displayEvasion(target: Game_Battler): void;
    displayHpDamage(target: Game_Battler): void;
    displayMpDamage(target: Game_Battler): void;
    displayTpDamage(target: Game_Battler): void;
    displayAffectedStatus(target: Game_Battler): void;
    displayAutoAffectedStatus(target: Game_Battler): void;
    displayChangedStates(target: Game_Battler): void;
    displayAddedStates(target: Game_Battler): void;
    displayRemovedStates(target: Game_Battler): void;
    displayChangedBuffs(target: Game_Battler): void;
    displayBuffs(target: Game_Battler, buffs: Array<number>, fmt: string): void;
    makeHpDamageText(target: Game_Battler): void;
    makeMpDamageText(target: Game_Battler): string;
    makeTpDamageText(target: Game_Battler): string;
}

/**
 * -----------------------------------------------------------------------------
 * Window_PartyCommand
 *
 * The window for selecting whether to fight or escape on the battle screen.
 * @class Window_PartyCommand
 */
declare class Window_PartyCommand extends Window_Command {
    constructor();

    setup(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_ActorCommand
 *
 * The window for selecting an actor's action on the battle screen.
 * @class Window_ActorCommand
 */
declare class Window_ActorCommand extends Window_Command {
    protected _actor: Game_Actor;

    constructor();

    addAttackCommand(): void;
    addSkillCommands(): void;
    addGuardCommand(): void;
    addItemCommand(): void;
    setup(actor: Game_Actor): void;
    selectLast(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_BattleStatus
 *
 * The window for displaying the status of party members on the battle screen.
 * @class Window_BattleStatus
 */
declare class Window_BattleStatus extends Window_Selectable {
    constructor();

    windowWidth(): number;
    windowHeight(): number;
    numVisibleRows(): number;
    basicAreaRect(index: number): Rectangle;
    gaugeAreaRect(index: number): Rectangle;
    gaugeAreaWidth(): number;
    drawBasicArea(rect: Rectangle, actor: Game_Actor): void;
    drawGaugeArea(rect: Rectangle, actor: Game_Actor): void;
    drawGaugeAreaWithTp(rect: Rectangle, actor: Game_Actor): void;
    drawGaugeAreaWithoutTp(rect: Rectangle, actor: Game_Actor): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_BattleActor
 *
 * The window for selecting a target actor on the battle screen.
 * @class Window_BattleActor
 */
declare class Window_BattleActor extends Window_BattleStatus {
    constructor(x: number, y: number);

    select(index: number): void;
    actor(): Game_Actor;
}

/**
 * -----------------------------------------------------------------------------
 * Window_BattleEnemy
 *
 * The window for selecting a target enemy on the battle screen.
 * @class Window_BattleEnemy
 */
declare class Window_BattleEnemy extends Window_Selectable {
    protected _enemies: Array<Game_Enemy>;

    constructor(x: number, y: number);

    windowWidth(): number;
    windowHeight(): number;
    numVisibleRows(): number;
    enemy(): Game_Enemy;
    enemyIndex(): number;
    select(index: number): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_BattleSkill
 *
 * The window for selecting a skill to use on the battle screen.
 * @class Window_BattleSkill
 */
declare class Window_BattleSkill extends Window_SkillList {
    constructor(x: number, y: number, width: number, height: number);
}

/**
 * -----------------------------------------------------------------------------
 * Window_BattleItem
 *
 * The window for selecting an item to use on the battle screen.
 * @class Window_BattleItem
 */
declare class Window_BattleItem extends Window_ItemList {
    constructor(x: number, y: number, width: number, height: number);

    includes(item: RPG.UsableItem): boolean;
}

/**
 * -----------------------------------------------------------------------------
 * Window_TitleCommand
 *
 * The window for selecting New Game/Continue on the title screen.
 * @class Window_TitleCommand
 */
declare class Window_TitleCommand extends Window_Command {
    protected static _lastCommandSymbol: string;

    constructor();

    updatePlacement(): void;
    isContinueEnabled(): boolean;
    initCommandPosition(): void;
    selectLast(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_GameEnd
 *
 * The window for selecting "Go to Title" on the game end screen.
 * @class Window_GameEnd
 */
declare class Window_GameEnd extends Window_Command {
    constructor();

    updatePlacement(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_DebugRange
 *
 * The window for selecting a block of switches/variables on the debug screen.
 * @class Window_DebugRange
 */
declare class Window_DebugRange extends Window_Selectable {
    protected static lastTopRow: number;
    protected static lastIndex: number;

    protected _editWindow: Window_DebugEdit;

    constructor(x: number, y: number);

    windowWidth(): number;
    windowHeight(): number;
    mode(): string;
    topId(): number;
    setEditWindow(editWindow: Window_DebugEdit): void;
}

/**
 * -----------------------------------------------------------------------------
 * Window_DebugEdit
 *
 * The window for displaying switches and variables on the debug screen.
 * @class Window_DebugEdit
 */
declare class Window_DebugEdit extends Window_Selectable {
    protected _mode: string;
    protected _topId: number;

    constructor(x: number, y: number, width: number);

    itemName(dataId: number): string;
    itemStatus(dataId: number): string;
    setMode(mode: string): void;
    setTopId(id: number): void;
    currentId(): number;
    updateSwitch(): void;
    updateVariable(): void;
}