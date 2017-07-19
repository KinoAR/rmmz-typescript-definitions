//=============================================================================
// rpg_windows.js v1.5.0
//=============================================================================

//-----------------------------------------------------------------------------
// Window_Base
//
// The superclass of all windows within the game.

declare class Window_Base {
  protected _iconWidth: number;
  protected _iconHeight: number;
  protected _faceWidth: number;
  protected _faceHeight: number;
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
  
  constructor(x: number, y: number, width: number, height: number)
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
}