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
  protected static _iconWidth: number;
  protected static _iconHeight: number;
  protected static _faceWidth: number;
  protected static _faceHeight: number;
  protected _opening: boolean;
  protected _closing: boolean;

  constructor(x: number, y: number, width: number, height: number);

  /**
   * Returns the standard line height of the current window
   * 
   * @returns {number} 
   * @memberof Window_Base
   */
  lineHeight(): number;
  standardFontFace(): string;
  standardFontSize(): number;
  standardPadding(): number;
  textPadding(): number;
  standardBackOpacity(): number;
  /**
   * Loads the window skin from the img/system directory.
   * 
   * @memberof Window_Base
   */
  loadWindowSkin(): void;
  updatePadding(): void;
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
  fittingHeight(numLine: number): number;
  updateTone(): void;
  createContents(): void;
  resetFontSettings(): void;
  resetTextColor(): void;
  update(): void;
  updateOpen(): void;
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
  isOpening(): boolean;
  isClosing(): boolean;
  show(): void;
  hide(): void;
  activate(): void;
  deactivate(): void;
  /**
   * Returns a text color given a numbered index
   * 
   * @param {number} n 
   * @returns {*} 
   * @memberof Window_Base
   */
  textColor(n: number): any;
  normalColor(): any;
  systemColor(): any;
  crisisColor(): any;
  deathColor(): any;
  gaugeBackColor(): any;
  hpGaugeColor1(): any;
  hpGaugeColor2(): any;
  mpGaugeColor1(): any;
  mpGaugeColor2(): any;
  mpCostColor(): any;
  powerUpColor(): any;
  powerDownColor(): any;
  tpGaugeColor1(): any;
  tpGaugeColor2(): any;
  tpCostColor(): any;
  pendingColor(): any;
  translucentOpacity(): number;
  changeTextColor(color: string): void;
  changePaintOpacity(enabled: boolean): void;
  drawText(x: string | number, y: number, maxWidth: number, align: string): void;
  textWidth(text: string): number;
  drawTextEx(text: string, x: number, y: number): number;
  convertEscapeCharacters(text: string): string;
  actorName(actorIndex: number): string;
  partyMemberName(partyMemberIndex: number): string;
  processCharacter(textState: any): void;
  processNormalCharacter(textState: any): void;
  processNewLine(textState: any): void;
  processNewPage(textState: any): void;
  obtainEscapeCode(textState: any): string;
  obtainEscapeParam(textState: any): number | string;
  processEscapeCharacter(code: string, textState: any): void;
  processDrawIcon(iconIndex: number, textState: any): void;
  makeFontBigger(): void;
  makeFontSmaller(): void;
  calcTextHeight(textState: any, all: boolean): number;
  drawIcon(iconIndex: number, x: number, y: number): void;
  drawFace(faceName: string, faceIndex: number, x: number, y: number, width: number, height: number): void;
  drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;
  drawGauge(x: number, y: number, width: number, rate: number, color1: string, color2: string);
  hpColor(actor: Game_Actor): string;
  mpColor(actor: Game_Actor): string;
  tpColor(actor: Game_Actor): string;
  drawActorCharacter(actor: Game_Actor, x: number, y: number): void;
  drawActorFace(actor: Game_Actor, x: number, y: number, width: number, height: number): void;
  drawActorName(actor: Game_Actor, x: number, y: number, width: number): void;
  drawActorClass(actor: Game_Actor, x: number, y: number, width: number): void;
  drawActorNickname(actor: Game_Actor, x: number, y: number, width: number): void;
  drawActorLevel(actor: Game_Actor, x: number, y: number);
  drawActorIcons(actor: Game_Actor, x: number, y: number, width: number): void;
  drawCurrentAndMax(current: number, max: number, x: number, y: number, width: number, color1: string, color2: string): void;
  drawActorHp(actor: Game_Actor, x: number, y: number, width: number): void;
  drawActorMp(actor: Game_Actor, x: number, y: number, width: number): void;
  drawActorTp(actor: Game_Actor, x: number, y: number, width: number): void;
  drawActorSimpleStatus(actor: Game_Actor, x: number, y: number, width: number): void;
  drawItemName(item: any, x: number, y: number, width: number): void;
  drawCurrencyValue(value: number, unit: string, x: number, y: number, width: number): void;
  paramchangeTextColor(change: number): void;
  setBackgroundType(type: number): void;
  showBackgroundDimmer(): void;
  hideBackgroundDimmer(): void;
  updateBackgroundDimmer(): void;
  refreshDimmerBitmap(): void;
  dimColor1(): string;
  dimColor2(): string;
  canvasToLocalX(x:number): number;
  canvasToLocalY(y: number): number;
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
  setItem(item: Game_Item | any | object): void;
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