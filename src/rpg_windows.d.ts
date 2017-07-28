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
  /**
   * The index property of Window_Selectable; this is used
   * to select items from the list within the window.
   * @protected
   * @type {number}
   * @memberof Window_Selectable
   */
  protected _index: number;
  /**
   * The boolean property that determines if the cursor is
   * fixed(locked to a position).
   * @protected
   * @type {boolean}
   * @memberof Window_Selectable
   */
  protected _cursorFixed: boolean;
  protected _cursorAll: boolean;
  protected _stayCount: number;
  protected _helpWindow: any;
  protected _handlers: object;
  protected _touching: boolean;
  protected _scrollX: number;
  protected _scrollY: number;
  
  constructor(x: number, y: number, width: number, height: number);
  /**
   * Returns the current position of the _index property.
   * 
   * @returns {number} 
   * @memberof Window_Selectable
   */
  index(): number;
  /**
   * Returns true if the _cursorFixed property is true;
   * this means the cursor is locked to a position.
   * @returns {boolean} 
   * @memberof Window_Selectable
   */
  cursorFixed(): boolean;
  /**
   * Sets the _cursorFixed property of the
   * window.
   * @param {boolean} cursorFixed 
   * @memberof Window_Selectable
   */
  setCursorFixed(cursorFixed: boolean): void;
  cursorAll(): boolean;
  setCursorAll(cursorAll: boolean): void;
  /**
   * Returns the maximum number of columns
   * for the window.
   * @returns {number} 
   * @memberof Window_Selectable
   */
  maxCols(): number;
  /**
   * Returns the maximum number of items within the window;
   * useful to overwrite when creating a new window.
   * This method is used to calculate the number of rows and more.
   * @returns {number} 
   * @memberof Window_Selectable
   */
  maxItems(): number;
  spacing(): number;
  /**
   * Returns the width of an item within the window;
   * determines the width of a column.
   * @returns {number} 
   * @memberof Window_Selectable
   */
  itemWidth(): number;
  /**
   * Returns the height of an item within the window;
   * determines the height of a row.
   * @returns {number} 
   * @memberof Window_Selectable
   */
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
  /**
   * Returns true if the window is horizontal;
   * means the window only has a single row.
   * @returns {boolean} 
   * @memberof Window_Selectable
   */
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
  /**
   * Shows the attached help window.
   * 
   * @memberof Window_Selectable
   */
  showHelpWindow(): void;
  /**
   * Hides the attached help window.
   * 
   * @memberof Window_Selectable
   */
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
  /**
   * Moves the cursor down; if wrap is passed
   * as true, then it will return to the top when
   * at the end of the list.
   * @param {boolean} wrap 
   * @memberof Window_Selectable
   */
  cursorDown(wrap: boolean): void;
  /**
   * Moves the cursor up; if wrap is passed 
   * as true, then it will return to the bottom
   * when at the top of the list.
   * @param {boolean} wrap 
   * @memberof Window_Selectable
   */
  cursorUp(wrap: boolean): void;
  cursorRight(wrap: boolean): void;
  cursorLeft(wrap: boolean): void;
  cursorPagedown(): void;
  cursorPageup(): void;
  scrollDown(): void;
  scrollUp(): void;
  updateArrows(): void;
  /**
   * Handles the processing of cursor movement.
   * 
   * @memberof Window_Selectable
   */
  processCursorMove(): void;
  /**
   * Handles the process of attached handlers.
   * 
   * @memberof Window_Selectable
   */
  processHandling(): void;
  /**
   * Handles the processing of the scroll wheel within
   * the window.
   * @memberof Window_Selectable
   */
  processWheel(): void;
  /**
   * Handles the processing of touch input.
   * 
   * @memberof Window_Selectable
   */
  processTouch(): void;
  isTouchedInsideFrame(): boolean;
  onTouch(triggered: boolean): void;
  hitTest(x: number, y: number): number;
  isContentsArea(x: number, y: number): boolean;
  /**
   * Determines if touch ok is enabled as an option;
   * this means whether you can confirm the selection
   * of an item within the window with touch input.
   * @returns {boolean} 
   * @memberof Window_Selectable
   */
  isTouchOkEnabled(): boolean;
  /**
   * Determines if ok is enabled as an option;
   * this means whether you can confirm selection
   * of an item within the window.
   * @returns {boolean} 
   * @memberof Window_Selectable
   */
  isOkEnabled(): boolean;
  isCancelEnabled(): boolean;
  isOkTriggered(): boolean;
  isCancelTriggered(): boolean;
  processOk(): void;
  /**
   * Plays a sound effect when okay is processed.
   * 
   * @memberof Window_Selectable
   */
  playOkSound(): void;
  /**
   * Plays the buzzer sound effect when input is
   * incorrect.
   * @memberof Window_Selectable
   */
  playBuzzerSound(): void;
  /**
   * Calls the ok handler and begins processing
   * confirmation of selection.
   * @memberof Window_Selectable
   */
  callOkHandler(): void;
  processCancel(): void;
  callCancelHandler(): void;
  processPageup(): void;
  processPagedown(): void;
  updateInputData(): void;
  updateCursor(): void;
  /**
   * Determines if the cursor is visible within
   * the window.
   * @returns {boolean} 
   * @memberof Window_Selectable
   */
  isCursorVisible(): boolean;
  ensureCursorVisible(): void;
  callUpdateHelp(): void;
  updateHelp(): void;
  setHelpWindowItem(item: any): void;
  isCurrentItemEnabled(): boolean;
  /**
   * Draws all items within the window; this method
   * cals drawItem multiple times.
   * @memberof Window_Selectable
   */
  drawAllItems(): void;
  drawItem(index: number): void;
  clearItem(index: number): void;
  redrawItem(index: number): void;
  redrawCurrentItem(): void;
  /**
   * Refreshes the window contents.
   * 
   * @memberof Window_Selectable
   */
  refresh(): void;
}

/**
 * Super class of windows for selecting a command.
 * 
 * @class Window_Command
 * @extends {Window_Selectable}
 */
declare class Window_Command extends Window_Selectable {
  /**
   * Creates an instance of Window_Command.
   * @param {number} x 
   * @param {number} y 
   * @memberof Window_Command
   */
  constructor(x: number, y: number)
  /**
   * Returns the width of the window;
   * default is 240.
   * @returns {number} 
   * @memberof Window_Command
   */
  windowWidth(): number;
  /**
   * Returns the height of the window;
   * takes the visible rows and passes it to the fittingHeight method.
   * @returns {number} 
   * @memberof Window_Command
   */
  windowHeight(): number;
  /**
   * Returns the number of visible rows within the window.
   * 
   * @returns {number} 
   * @memberof Window_Command
   */
  numVisibleRows(): number;
  /**
   * Returns the maximum number of items within the window.
   * 
   * @returns {number} 
   * @memberof Window_Command
   */
  maxItems(): number;
  /**
   * Clears the list of commands from the window;
   * this is useful for refreshing changing commands.
   * @memberof Window_Command
   */
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
  /**
   * Returns the command name given an index.
   * 
   * @param {number} index 
   * @returns {string} 
   * @memberof Window_Command
   */
  commandName(index: number): string;
  /**
   * Returns the command symbol given an index.
   * 
   * @param {number} index 
   * @returns {string} 
   * @memberof Window_Command
   */
  commandSymbol(index: number): string;
  /**
   * Determines if the command is enabled;
   * checks the enabled property of the command.
   * @param {number} index 
   * @returns {boolean} 
   * @memberof Window_Command
   */
  isCommandEnabled(index: number): boolean;
  /**
   * Returns the command object at the current index.
   * 
   * @returns {object} 
   * @memberof Window_Command
   */
  currentData(): object;
  /**
   * Returns the command symbol at the current index.
   * 
   * @returns {string} 
   * @memberof Window_Command
   */
  currentSymbol(): string;
  /**
   * Returns the ext property of the command at the current index.
   * 
   * @returns {(any | object)} 
   * @memberof Window_Command
   */
  currentExt(): any | object;
  /**
   * Finds a command object and returns the index number based
   * on the symbol property.
   * @param {string} symbol 
   * @returns {number} 
   * @memberof Window_Command
   */
  findSymbol(symbol: string): number;
  /**
   * Selects a command object based on the symbol property.
   * 
   * @param {string} symbol 
   * @memberof Window_Command
   */
  selectSymbol(symbol: string): void;
  /**
   * Finds a command object and returns the index number
   * based on the ext property.
   * @param {(any | object)} ext 
   * @returns {number} 
   * @memberof Window_Command
   */
  findExt(ext: any | object): number;
  /**
   * Selects a command object based on the ext property.
   * 
   * @param {(any | object)} ext 
   * @memberof Window_Command
   */
  selectExt(ext: any | object): void;
  /**
   * Returns the text align of the commands;
   * possible values are: 'left', 'center', 'right'.
   * @returns {string} 
   * @memberof Window_Command
   */
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
  /**
   * The text that is displayed within the window.
   * 
   * @protected
   * @type {string}
   * @memberof Window_Help
   */
  protected _text: string;
  /**
   * Creates an instance of Window_Help.
   * @param {number} numLines 
   * @memberof Window_Help
   */
  constructor(numLines: number);
  /**
   * Sets the _text property of the window;
   * this text will be displayed within the window.
   * @param {string} text 
   * @memberof Window_Help
   */
  setText(text: string): void;
  clear(): void;
  /**
   * Sets the current item of the help window.
   * 
   * @param {RPG.BaseItem} item 
   * @memberof Window_Help
   */
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
  /**
   * Adds the standard formation command to the
   * RPGMakerMV main menu.
   * @memberof Window_MenuCommand
   */
  addFormationCommand(): void;
  /**
   * Adds any user created commands to the 
   * RPGMakerMV main menu.
   * @memberof Window_MenuCommand
   */
  addOriginalCommands(): void;
  /**
   * Adds the save command to the 
   * RPGMakerMV main menu.
   * @memberof Window_MenuCommand
   */
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
  /**
   * Determines if the main commands are enabled;
   * this is based on the settings in the database.
   * @returns {boolean} 
   * @memberof Window_MenuCommand
   */
  areMainCommandsEnabled(): boolean;
  /**
   * Determines if the option command is enabled;
   * based on the setting in the database.
   * @returns {boolean} 
   * @memberof Window_MenuCommand
   */
  isOptionsEnabled(): boolean;
  /**
   * Determines if the save command is enabled;
   * based on the setting in the database.
   * @returns {boolean} 
   * @memberof Window_MenuCommand
   */
  isSaveEnabled(): boolean;
  /**
   * Selects the last command in menu.
   * 
   * @memberof Window_MenuCommand
   */
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

    /**
     * Creates an instance of Window_MenuStatus.
     * @param {number} x 
     * @param {number} y 
     * @memberof Window_MenuStatus
     */
    constructor(x: number, y: number);

    windowWidth(): number;
    windowHeight(): number;
    /**
     * Returns the height of each item (actor status) in the main menu
     * window.
     * @returns {number} 
     * @memberof Window_MenuStatus
     */
    itemHeight(): number;
    /**
     * Returns the number of visible rows in
     * menu status.
     * @returns {number} 
     * @memberof Window_MenuStatus
     */
    numVisibleRows(): number;
    /**
     * Loads the images for the main menu status window.
     * 
     * @memberof Window_MenuStatus
     */
    loadImages(): void;
    /**
     * Draws the item background at the given index.
     * 
     * @param {number} index 
     * @memberof Window_MenuStatus
     */
    drawItemBackground(index: number): void;
    drawItemImage(index: number): void;
    drawItemStatus(index: number): void;
    selectLast(): void;
    /**
     * Determines if the window is in formation mode;
     * if true, the player can select characters to swap
     * positions with.
     * @returns {boolean} 
     * @memberof Window_MenuStatus
     */
    formationMode(): boolean;
    /**
     * Sets the formation mode to true or false.
     * 
     * @param {boolean} formationMode 
     * @memberof Window_MenuStatus
     */
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

    /**
     * Sets the item window on the item category window.
     * 
     * @param {Window_ItemList} itemWindow 
     * @memberof Window_ItemCategory
     */
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
    /**
     * Returns the current item.
     * 
     * @returns {RPG.BaseItem} 
     * @memberof Window_ItemList
     */
    item(): RPG.BaseItem;
    /**
     * Returns true if the given item is included.
     * 
     * @param {RPG.BaseItem} item 
     * @returns {boolean} 
     * @memberof Window_ItemList
     */
    includes(item: RPG.BaseItem): boolean;
    needsNumber(): boolean;
    /**
     * Returns true if the given item is enabled.
     * 
     * @param {RPG.BaseItem} item 
     * @returns {boolean} 
     * @memberof Window_ItemList
     */
    isEnabled(item: RPG.BaseItem): boolean;
    selectLast(): void;
    /**
     * Creates the item list.
     * 
     * @memberof Window_ItemList
     */
    makeItemList(): void;
    /**
     * Returns the width of the numbers.
     * 
     * @returns {number} 
     * @memberof Window_ItemList
     */
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
    /**
     * The current game actor attached to the window.
     * 
     * @protected
     * @type {Game_Actor}
     * @memberof Window_SkillType
     */
    protected _actor: Game_Actor;
    /**
     * The current skill window attached to the window.
     * 
     * @protected
     * @type {Window_SkillList}
     * @memberof Window_SkillType
     */
    protected _skillWindow: Window_SkillList;

    /**
     * Creates an instance of Window_SkillType.
     * @param {number} x 
     * @param {number} y 
     * @memberof Window_SkillType
     */
    constructor(x: number, y: number);

    /**
     * Sets the current actor for the skill type window.
     * 
     * @param {Game_Actor} actor 
     * @memberof Window_SkillType
     */
    setActor(actor: Game_Actor): void;
    /**
     * Sets the skill window for the current skill type.
     * 
     * @param {Window_SkillList} skillWindow 
     * @memberof Window_SkillType
     */
    setSkillWindow(skillWindow: Window_SkillList): void;
    /**
     * Selects the last command in the window.
     * 
     * @memberof Window_SkillType
     */
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
    /**
     * The current game actor attached to the window.
     * 
     * @protected
     * @type {Game_Actor}
     * @memberof Window_SkillStatus
     */
    protected _actor: Game_Actor;

    /**
     * Creates an instance of Window_SkillStatus.
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @memberof Window_SkillStatus
     */
    constructor(x: number, y: number, width: number, height: number);

    /**
     * Sets the current actor for the window.
     * 
     * @param {Game_Actor} actor 
     * @memberof Window_SkillStatus
     */
    setActor(actor: Game_Actor): void;
    /**
     * Refreshes the window contents.
     * 
     * @memberof Window_SkillStatus
     */
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

    /**
     * Sets the current actor of the skill list window.
     * 
     * @param {Game_Actor} actor 
     * @memberof Window_SkillList
     */
    setActor(actor: Game_Actor): void;
    /**
     * Sets the skill type id of the skill list window.
     * 
     * @param {number} stypeId 
     * @memberof Window_SkillList
     */
    setStypeId(stypeId: number): void;
    /**
     * Returns the current skill from the databse.
     * 
     * @returns {RPG.Skill} 
     * @memberof Window_SkillList
     */
    item(): RPG.Skill;
    /**
     * Returns true if the given skill is included.
     * 
     * @param {RPG.Skill} item 
     * @returns {boolean} 
     * @memberof Window_SkillList
     */
    includes(item: RPG.Skill): boolean;
    /**
     * Returns true if the given skill is enabled.
     * 
     * @param {RPG.Skill} item 
     * @returns {boolean} 
     * @memberof Window_SkillList
     */
    isEnabled(item: RPG.Skill): boolean;
    /**
     * Creates the item list.
     * 
     * @memberof Window_SkillList
     */
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

    /**
     * Sets the current game actor.
     * 
     * @param {Game_Actor} actor 
     * @memberof Window_EquipSlot
     */
    setActor(actor: Game_Actor): void;
    /**
     * Returns the current equip item.
     * 
     * @returns {RPG.EquipItem} 
     * @memberof Window_EquipSlot
     */
    item(): RPG.EquipItem;
    /**
     * Returns the name of the slot at the specified index.
     * 
     * @param {number} index 
     * @returns {string} 
     * @memberof Window_EquipSlot
     */
    slotName(index: number): string;
    /**
     * Returns true if the current slot is enabled.
     * 
     * @param {number} index 
     * @returns {boolean} 
     * @memberof Window_EquipSlot
     */
    isEnabled(index: number): boolean;
    /**
     * Sets the status window within the equip slot window.
     * 
     * @param {Window_EquipStatus} statusWindow 
     * @memberof Window_EquipSlot
     */
    setStatusWindow(statusWindow: Window_EquipStatus): void;
    /**
     * Sets the item window within the equip slot window.
     * 
     * @param {Window_EquipItem} itemWindow 
     * @memberof Window_EquipSlot
     */
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
    /**
     * Draws a horizontal line at the given y coordinate.
     * 
     * @param {number} y 
     * @memberof Window_Status
     */
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

    /**
     * Sets the mode of the save file window.
     * 
     * @param {string} mode 
     * @memberof Window_SavefileList
     */
    setMode(mode: string): void;
    /**
     * Returns the maximum number of visible items.
     * 
     * @returns {number} 
     * @memberof Window_SavefileList
     */
    maxVisibleItems(): number;
    itemHeight(): number;
    /**
     * Draws the file id at the specified x and y coordinates.
     * 
     * @param {number} id 
     * @param {number} x 
     * @param {number} y 
     * @memberof Window_SavefileList
     */
    drawFileId(id: number, x: number, y: number): void;
    drawContents(info: {key: string}, rect: Rectangle, valid: boolean): void;
    drawGameTitle(info: {key: string}, x: number, y: number, width: number): void;
    drawPartyCharacters(info: {key: string}, x: number, y: number): void;
    /**
     * Draws the current playtime at the specified x and y coordinates within the given
     * width.
     * @param {{key: string}} info 
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @memberof Window_SavefileList
     */
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
    /**
     * Determines if the shop is purchase only.
     * 
     * @protected
     * @type {boolean}
     * @memberof Window_ShopCommand
     */
    protected _purchaseOnly: boolean;

    /**
     * Determines the width of the shop buy/sell window;
     * also determines if the shop is purchase only.
     * @param {number} width 
     * @param {boolean} purchaseOnly 
     * @memberof Window_ShopCommand
     */
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

    /**
     * Creates an instance of Window_ShopBuy.
     * @param {number} x 
     * @param {number} y 
     * @param {number} height 
     * @param {Array<Array<any>>} shopGoods 
     * @memberof Window_ShopBuy
     */
    constructor(x: number, y: number, height: number, shopGoods: Array<Array<any>>);

    /**
     * Returns the width of the window.
     * 
     * @returns {number} 
     * @memberof Window_ShopBuy
     */
    windowWidth(): number;
    /**
     * Returns the current item of the window.
     * 
     * @returns {RPG.BaseItem} 
     * @memberof Window_ShopBuy
     */
    item(): RPG.BaseItem;
    setMoney(money: number): void;
    price(item: RPG.BaseItem): number;
    /**
     * Checks if the current item is enabled (can be bought/sold).
     * 
     * @param {RPG.BaseItem} item 
     * @returns {boolean} 
     * @memberof Window_ShopBuy
     */
    isEnabled(item: RPG.BaseItem): boolean;
    /**
     * Creates a list of items for the shop window.
     * 
     * @memberof Window_ShopBuy
     */
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

    /**
     * Determines if the item is sellable, otherwise, greyed out.
     *
     * @param {RPG.BaseItem} item 
     * @returns {boolean} 
     * @memberof Window_ShopSell
     */
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
    /**
     * The current item being bought/sold.
     * 
     * @protected
     * @type {RPG.BaseItem}
     * @memberof Window_ShopNumber
     */
    protected _item: RPG.BaseItem;
    /**
     * Returns the maximum number of the item
     * that can be bought/sold.
     * @protected
     * @type {number}
     * @memberof Window_ShopNumber
     */
    protected _max: number;
    /**
     * The current price of the items.
     * 
     * @protected
     * @type {number}
     * @memberof Window_ShopNumber
     */
    protected _price: number;
    protected _number: number;
    /**
     * Returns the currency unit of the game.
     * 
     * @protected
     * @type {string}
     * @memberof Window_ShopNumber
     */
    protected _currencyUnit: string;
    /**
     * The buttons to input quantity
     * for the quantity of the item to be bought/sold.
     * @protected
     * @type {Array<Sprite_Button>}
     * @memberof Window_ShopNumber
     */
    protected _buttons: Array<Sprite_Button>;

    /**
     * Creates an instance of Window_ShopNumber.
     * @param {number} x 
     * @param {number} y 
     * @param {number} height 
     * @memberof Window_ShopNumber
     */
    constructor(x: number, y: number, height: number);

    /**
     * Returns the width of the window.
     * 
     * @returns {number} 
     * @memberof Window_ShopNumber
     */
    windowWidth(): number;
    number(): number;
    setup(item: RPG.BaseItem, max: number, price: number): void;
    setCurrencyUnit(currencyUnit: string): void;
    createButtons(): void;
    placeButtons(): void;
    updateButtonsVisiblity(): void;
    /**
     * Shows the quantity input buttons.
     * 
     * @memberof Window_ShopNumber
     */
    showButtons(): void;
    /**
     * Hides the quantity input buttons.
     * 
     * @memberof Window_ShopNumber
     */
    hideButtons(): void;
    drawMultiplicationSign(): void;
    drawNumber(): void;
    /**
     * Draws the total price of the selected
     * quantity of item.
     * @memberof Window_ShopNumber
     */
    drawTotalPrice(): void;
    itemY(): number;
    priceY(): number;
    buttonY(): number;
    /**
     * Returns the width of the cursor.
     * 
     * @returns {number} 
     * @memberof Window_ShopNumber
     */
    cursorWidth(): number;
    cursorX(): number;
    maxDigits(): number;
    /**
     * Processes the change in quantity.
     * 
     * @memberof Window_ShopNumber
     */
    processNumberChange(): void;
    /**
     * Changes the quantity, given a number.
     * 
     * @param {number} amount 
     * @memberof Window_ShopNumber
     */
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

    /**
     * Creates an instance of Window_ShopStatus.
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @memberof Window_ShopStatus
     */
    constructor(x: number, y: number, width: number, height: number);

    /**
     * Refreshes the window contents.
     * 
     * @memberof Window_ShopStatus
     */
    refresh(): void;
    setItem(item: RPG.BaseItem): void;
    isEquipItem(): boolean;
    drawPossession(x: number, y: number): void;
    drawEquipInfo(x: number, y: number): void;
    statusMembers(): Array<Game_Actor>;
    /**
     * Returns the page size.
     * 
     * @returns {number} 
     * @memberof Window_ShopStatus
     */
    pageSize(): number;
    /**
     * Returns the max number of pages.
     * 
     * @returns {number} 
     * @memberof Window_ShopStatus
     */
    maxPages(): number;
    drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;
    drawActorParamChange(x: number, y: number, actor: Game_Actor, item1: RPG.EquipItem): void;
    /**
     * Returns the parameter id.
     * 
     * @returns {number} 
     * @memberof Window_ShopStatus
     */
    paramId(): number;
    /**
     * Returns the current item equiped by the given actor when
     * the respective equipment Id is passed.
     * @param {Game_Actor} actor 
     * @param {number} etypeId 
     * @returns {RPG.EquipItem} 
     * @memberof Window_ShopStatus
     */
    currentEquippedItem(actor: Game_Actor, etypeId: number): RPG.EquipItem;
    /**
     * Updates the current page.
     * 
     * @memberof Window_ShopStatus
     */
    updatePage(): void;
    /**
     * Determines if page can be changed.
     * 
     * @returns {boolean} 
     * @memberof Window_ShopStatus
     */
    isPageChangeEnabled(): boolean;
    isPageChangeRequested(): boolean;
    /**
     * Determines if the window is touched within it's frame.
     * 
     * @returns {boolean} 
     * @memberof Window_ShopStatus
     */
    isTouchedInsideFrame(): boolean;
    /**
     * Changes the current page.
     * 
     * @memberof Window_ShopStatus
     */
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

    /**
     * Creates an instance of Window_NameEdit.
     * @param {Game_Actor} actor 
     * @param {number} maxLength 
     * @memberof Window_NameEdit
     */
    constructor(actor: Game_Actor, maxLength: number);

    /**
     * Returns the window width.
     * 
     * @returns {number} 
     * @memberof Window_NameEdit
     */
    windowWidth(): number;
    /**
     * Returns the window height.
     * 
     * @returns {number} 
     * @memberof Window_NameEdit
     */
    windowHeight(): number;

    // "name" is defines already by superclass(PIXI.DisplayObject).
    // name(): string;

    restoreDefault(): boolean;
    add(ch: string): boolean;
    back(): boolean;
    /**
     * Returns the width of the character face.
     * 
     * @returns {number} 
     * @memberof Window_NameEdit
     */
    faceWidth(): number;
    /**
     * Returns the width of a character.
     * 
     * @returns {number} 
     * @memberof Window_NameEdit
     */
    charWidth(): number;
    left(): number;
    underlineRect(index: number): Rectangle;
    /**
     * Returns the color of the underline as a css color string.
     * 
     * @returns {string} 
     * @memberof Window_NameEdit
     */
    underlineColor(): string;
    /**
     * Draws the underline at the given index of the window.
     * 
     * @param {number} index 
     * @memberof Window_NameEdit
     */
    drawUnderline(index: number): void;
    /**
     * Draws a character within the window at the specified index.
     * 
     * @param {number} index 
     * @memberof Window_NameEdit
     */
    drawChar(index: number): void;
    /**
     * Refreshes the window contents.
     * 
     * @memberof Window_NameEdit
     */
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

    /**
     * Returns the window height.
     * 
     * @returns {number} 
     * @memberof Window_NameInput
     */
    windowHeight(): number;
    /**
     * Returns the table of characters to input.
     * 
     * @returns {Array<Array<string>>} 
     * @memberof Window_NameInput
     */
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
    /**
     * Returns the window width.
     * 
     * @returns {number} 
     * @memberof Window_NumberInput
     */
    windowWidth(): number;
    /**
     * Returns the window height.
     * 
     * @returns {number} 
     * @memberof Window_NumberInput
     */
    windowHeight(): number;
    /**
     * Returns the item width.
     * 
     * @returns {number} 
     * @memberof Window_NumberInput
     */
    itemWidth(): number;
    /**
     * Creates the number input window buttons.
     * 
     * @memberof Window_NumberInput
     */
    createButtons(): void;
    /**
     * Places the number input window buttons.
     * 
     * @memberof Window_NumberInput
     */
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

    /**
     * Returns the height off the window.
     * 
     * @returns {number} 
     * @memberof Window_EventItem
     */
    windowHeight(): number;
    /**
     * Returns the number of visible rows.
     * 
     * @returns {number} 
     * @memberof Window_EventItem
     */
    numVisibleRows(): number;
    /**
     * Starts the event item window.
     * 
     * @memberof Window_EventItem
     */
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
    /**
     * Returns the sub windows attached to the message window.
     * 
     * @returns {Array<Window_Base>} 
     * @memberof Window_Message
     */
    subWindows(): Array<Window_Base>;
    /**
     * Creates the sub windows for the message window.
     * 
     * @memberof Window_Message
     */
    createSubWindows(): void;
    /**
     * Returns the width of the window.
     * 
     * @returns {number} 
     * @memberof Window_Message
     */
    windowWidth(): number;
    /**
     * Returns the height of the window.
     * 
     * @returns {number} 
     * @memberof Window_Message
     */
    windowHeight(): number;
    clearFlags(): void;
    /**
     * Returns the number of visible rows within the message window.
     * 
     * @returns {number} 
     * @memberof Window_Message
     */
    numVisibleRows(): number;
    checkToNotClose(): void;
    /**
     * Returns true if the message window can start.
     * 
     * @returns {boolean} 
     * @memberof Window_Message
     */
    canStart(): boolean;
    /**
     * Starts the displaying of the message within the message window.
     * 
     * @memberof Window_Message
     */
    startMessage(): void;
    /**
     * Updates the placement of the message window.
     * 
     * @memberof Window_Message
     */
    updatePlacement(): void;
    /**
     * Updates the background of the message window.
     * 
     * @memberof Window_Message
     */
    updateBackground(): void;
    /**
     * Terminates the message and closes the gold and message window.
     * 
     * @memberof Window_Message
     */
    terminateMessage(): void;
    /**
     * Updates the wait of the message window.
     * 
     * @returns {boolean} 
     * @memberof Window_Message
     */
    updateWait(): boolean;
    updateLoading(): boolean;
    /**
     * Updates input when the message window is processing.
     * 
     * @returns {boolean} 
     * @memberof Window_Message
     */
    updateInput(): boolean;
    /**
     * Returns true if any sub window is active.
     * 
     * @returns {boolean} 
     * @memberof Window_Message
     */
    isAnySubWindowActive(): boolean;
    /**
     * Updates the message.
     * 
     * @returns {boolean} 
     * @memberof Window_Message
     */
    updateMessage(): boolean;
    /**
     * Handler for when there is no text left to display within
     * the message window.
     * @memberof Window_Message
     */
    onEndOfText(): void;
    startInput(): boolean;
    /**
     * Returns true if the ok or cancel inputs have been triggered
     * multiple times.
     * @returns {boolean} 
     * @memberof Window_Message
     */
    isTriggered(): boolean;
    /**
     * Returns true if the message window still has text
     * and settings have not changed.
     * @returns {boolean} 
     * @memberof Window_Message
     */
    doesContinue(): boolean;
    /**
     * Returns true if the message window settings have been changed.
     * 
     * @returns {boolean} 
     * @memberof Window_Message
     */
    areSettingsChanged(): boolean;
    updateShowFast(): void;
    newPage(textState: MV.TextState): void;
    loadMessageFace(): void;
    drawMessageFace(): void;
    newLineX(): number;
    processNewLine(textState: MV.TextState): void;
    processNewPage(textState: MV.TextState): void;
    /**
     * Returns true if there is no text left to display in the message
     * window.
     * @param {MV.TextState} textState 
     * @returns {boolean} 
     * @memberof Window_Message
     */
    isEndOfText(textState: MV.TextState): boolean;
    /**
     * Returns true if the text state needs a new page to display text.
     * 
     * @param {MV.TextState} textState 
     * @returns {boolean} 
     * @memberof Window_Message
     */
    needsNewPage(textState: MV.TextState): boolean;
    processEscapeCharacter(code: string, textState: MV.TextState): void;
    /**
     * Starts a wait for the message window.
     * 
     * @param {number} count 
     * @memberof Window_Message
     */
    startWait(count: number): void;
    /**
     * Starts a pause for the message window; this will only be
     * lifted if the user presses a button.
     * @memberof Window_Message
     */
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

    /**
     * Starts the displaying of a message in the scroll text window.
     * 
     * @memberof Window_ScrollText
     */
    startMessage(): void;
    refresh(): void;
    updateMessage(): void;
    scrollSpeed(): number;
    /**
     * Returns true if the scene is in fast forward mode.
     * 
     * @returns {boolean} 
     * @memberof Window_ScrollText
     */
    isFastForward(): boolean;
    /**
     * Returns the fast forward rate of the scroll text window.
     * 
     * @returns {number} 
     * @memberof Window_ScrollText
     */
    fastForwardRate(): number;
    /**
     * Terminates the message and the scroll text window is hidden.
     * 
     * @memberof Window_ScrollText
     */
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

    /**
     * Returns the window width.
     * 
     * @returns {number} 
     * @memberof Window_MapName
     */
    windowWidth(): number;
    /**
     * Returns the window height.
     * 
     * @returns {number} 
     * @memberof Window_MapName
     */
    windowHeight(): number;
    updateFadeIn(): void;
    updateFadeOut(): void;
    /**
     * Windows the map name window.
     * 
     * @memberof Window_MapName
     */
    refresh(): void;
    /**
     * Draws the background of the map name window.
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @memberof Window_MapName
     */
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

    /**
     * Adds the attack command to the actor command window.
     * 
     * @memberof Window_ActorCommand
     */
    addAttackCommand(): void;
    /**
     * Adds the skill command to the actor command window.
     * 
     * @memberof Window_ActorCommand
     */
    addSkillCommands(): void;
    /**
     * Adds the guard command to the actor command window.
     * 
     * @memberof Window_ActorCommand
     */
    addGuardCommand(): void;
    /**
     * Adds the item command to the actor command window.
     * 
     * @memberof Window_ActorCommand
     */
    addItemCommand(): void;
    /**
     * Sets up the actor command window with a specified actor.
     * 
     * @param {Game_Actor} actor 
     * @memberof Window_ActorCommand
     */
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

    /**
     * Returns the window width.
     * 
     * @returns {number} 
     * @memberof Window_BattleStatus
     */
    windowWidth(): number;
    /**
     * Returns the window height.
     * 
     * @returns {number} 
     * @memberof Window_BattleStatus
     */
    windowHeight(): number;
    /**
     * Returns the number of visible rows.
     * 
     * @returns {number} 
     * @memberof Window_BattleStatus
     */
    numVisibleRows(): number;
    basicAreaRect(index: number): Rectangle;
    /**
     * returns a rectangle for the gauges in the gauge area.
     * 
     * @param {number} index 
     * @returns {Rectangle} 
     * @memberof Window_BattleStatus
     */
    gaugeAreaRect(index: number): Rectangle;
    /**
     * Returns the width of the guage area.
     * 
     * @returns {number} 
     * @memberof Window_BattleStatus
     */
    gaugeAreaWidth(): number;
    /**
     * Draws the basic area for actors within the battle status window.
     * 
     * @param {Rectangle} rect 
     * @param {Game_Actor} actor 
     * @memberof Window_BattleStatus
     */
    drawBasicArea(rect: Rectangle, actor: Game_Actor): void;
    /**
     * Draws the gauge area for the actors within the battle status window.
     * 
     * @param {Rectangle} rect 
     * @param {Game_Actor} actor 
     * @memberof Window_BattleStatus
     */
    drawGaugeArea(rect: Rectangle, actor: Game_Actor): void;
    /**
     * Draws the gauges in the basic area with tp included.
     * 
     * @param {Rectangle} rect 
     * @param {Game_Actor} actor 
     * @memberof Window_BattleStatus
     */
    drawGaugeAreaWithTp(rect: Rectangle, actor: Game_Actor): void;
    /**
     * Draws the gauges in the basic area without tp included.
     * 
     * @param {Rectangle} rect 
     * @param {Game_Actor} actor 
     * @memberof Window_BattleStatus
     */
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

    /**
     * Selects an actor within the battle actor window.
     * 
     * @param {number} index 
     * @memberof Window_BattleActor
     */
    select(index: number): void;
    /**
     * Returns the current selected actor.
     * 
     * @returns {Game_Actor} 
     * @memberof Window_BattleActor
     */
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

    /**
     * Returns the window width.
     * 
     * @returns {number} 
     * @memberof Window_BattleEnemy
     */
    windowWidth(): number;
    /**
     * Returns the window height.
     * 
     * @returns {number} 
     * @memberof Window_BattleEnemy
     */
    windowHeight(): number;
    /**
     * Returns the number of visible rows.
     * 
     * @returns {number} 
     * @memberof Window_BattleEnemy
     */
    numVisibleRows(): number;
    /**
     * Returns the current enemy.
     * 
     * @returns {Game_Enemy} 
     * @memberof Window_BattleEnemy
     */
    enemy(): Game_Enemy;
    /**
     * Returns the current index selected.
     * 
     * @returns {number} 
     * @memberof Window_BattleEnemy
     */
    enemyIndex(): number;
    /**
     * Selects a specified enemy using the index.
     * 
     * @param {number} index 
     * @memberof Window_BattleEnemy
     */
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