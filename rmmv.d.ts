/*
* Do Not Remove This Header
//=============================================================================
//  ChangeLog
//=============================================================================
* version 1.0.0
* - Added most major MV functions.
* - Added PIXI.js type definitions
* - Added LZString type definitions
* - Added FPSMeter type definitions
//=============================================================================
//  Credits
//=============================================================================
*
*  AsterAtwood: https://github.com/AsterAtwood
*  Sabakan03: https://github.com/sabakan03
*  For providing the base d.ts files to work from.
//=============================================================================
//  Contact Information
//=============================================================================
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Website Link: http://endlessillusoft.com/
* Twitter Link: https://twitter.com/EISKino
* Patreon Link: https://www.patreon.com/EISKino
*
* Hope this makes your plugin creation all the better.
* --Kino
*/

// Type definitions for Pixi.js 4.5
// Project: https://github.com/pixijs/pixi.js/tree/dev
// Definitions by: clark-stevenson <https://github.com/pixijs/pixi-typescript>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace PIXI {
    // from CONST
    const VERSION: typeof CONST.VERSION;
    const PI_2: typeof CONST.PI_2;
    const RAD_TO_DEG: typeof CONST.RAD_TO_DEG;
    const DEG_TO_RAD: typeof CONST.DEG_TO_RAD;
    const RENDERER_TYPE: typeof CONST.RENDERER_TYPE;
    const BLEND_MODES: typeof CONST.BLEND_MODES;
    const DRAW_MODES: typeof CONST.DRAW_MODES;
    const SCALE_MODES: typeof CONST.SCALE_MODES;
    const WRAP_MODES: typeof CONST.WRAP_MODES;
    const TRANSFORM_MODE: typeof CONST.TRANSFORM_MODE;
    const PRECISION: typeof CONST.PRECISION;
    const GC_MODES: typeof CONST.GC_MODES;
    const SHAPES: typeof CONST.SHAPES;
    const TEXT_GRADIENT: typeof CONST.TEXT_GRADIENT;
    const UPDATE_PRIORITY: typeof CONST.UPDATE_PRIORITY;

    function autoDetectRenderer(width: number, height: number, options?: PIXI.RendererOptions, forceCanvas?: boolean): PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    function autoDetectRenderer(options?: PIXI.RendererOptions): PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    const loader: PIXI.loaders.Loader;

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////SETTINGS///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace settings {
        let TARGET_FPMS: number;
        let MIPMAP_TEXTURES: boolean;
        let RESOLUTION: number;
        let FILTER_RESOLUTION: number;
        let SPRITE_MAX_TEXTURES: number;
        let SPRITE_BATCH_SIZE: number;
        let RETINA_PREFIX: RegExp;
        const RENDER_OPTIONS: {
            view: HTMLCanvasElement | null,
            antialias: boolean,
            forceFXAA: boolean,
            autoResize: boolean,
            transparent: boolean,
            backgroundColor: number,
            clearBeforeRender: boolean,
            preserveDrawingBuffer: boolean,
            roundPixels: boolean
            width: number,
            height: number,
            legacy: boolean,
        };
        let TRANSFORM_MODE: number;
        let GC_MODE: number;
        let GC_MAX_IDLE: number;
        let GC_MAX_CHECK_COUNT: number;
        let WRAP_MODE: number;
        let SCALE_MODE: number;
        let PRECISION_VERTEX: string;
        let PRECISION_FRAGMENT: string;
        let PRECISION: string;
        let UPLOADS_PER_FRAME: number;
        let CAN_UPLOAD_SAME_BUFFER: boolean;
    }

    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////ACCESSIBILITY////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace accessibility {
        // accessibility
        class AccessibilityManager {
            constructor(renderer: CanvasRenderer | WebGLRenderer);
            activate(): void;
            deactivate(): void;
            protected div: HTMLElement;
            protected pool: HTMLElement[];
            protected renderId: number;
            debug: boolean;
            renderer: SystemRenderer;
            protected children: AccessibleTarget[];
            protected isActive: boolean;

            protected updateAccessibleObjects(displayObject: DisplayObject): void;
            protected update(): void;
            protected capHitArea(hitArea: HitArea): void;
            protected addChild(displayObject: DisplayObject): void;
            protected _onClick(e: interaction.InteractionEvent): void;
            protected _onFocus(e: interaction.InteractionEvent): void;
            protected _onFocusOut(e: interaction.InteractionEvent): void;
            protected _onKeyDown(e: interaction.InteractionEvent): void;
            protected _onMouseMove(): void;

            destroy(): void;
        }
        interface AccessibleTarget {
            accessible: boolean;
            accessibleTitle: string | null;
            accessibleHint: string | null;
            tabIndex: number;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////CORE//////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // const

    namespace CONST {
        const VERSION: string;
        const PI_2: number;
        const RAD_TO_DEG: number;
        const DEG_TO_RAD: number;
        const TARGET_FPMS: number;
        const RENDERER_TYPE: {
            UNKNOWN: number;
            WEBGL: number;
            CANVAS: number;
        };
        const BLEND_MODES: {
            NORMAL: number;
            ADD: number;
            MULTIPLY: number;
            SCREEN: number;
            OVERLAY: number;
            DARKEN: number;
            LIGHTEN: number;
            COLOR_DODGE: number;
            COLOR_BURN: number;
            HARD_LIGHT: number;
            SOFT_LIGHT: number;
            DIFFERENCE: number;
            EXCLUSION: number;
            HUE: number;
            SATURATION: number;
            COLOR: number;
            LUMINOSITY: number;
            NORMAL_NPM: number;
            ADD_NPM: number;
            SCREEN_NPM: number;
        };
        const DRAW_MODES: {
            POINTS: number;
            LINES: number;
            LINE_LOOP: number;
            LINE_STRIP: number;
            TRIANGLES: number;
            TRIANGLE_STRIP: number;
            TRIANGLE_FAN: number;
        };
        const SCALE_MODES: {
            LINEAR: number,
            NEAREST: number
        };
        const GC_MODES: {
            AUTO: number;
            MANUAL: number;
        };
        const WRAP_MODES: {
            CLAMP: number;
            MIRRORED_REPEAT: number;
            REPEAT: number;
        };
        const TRANSFORM_MODE: {
            DEFAULT: number;
            DYNAMIC: number;
            STATIC: number;
        };
        const URL_FILE_EXTENSION: RegExp | string;
        const DATA_URI: RegExp | string;
        const SVG_SIZE: RegExp | string;
        const SHAPES: {
            POLY: number;
            RECT: number;
            CIRC: number;
            ELIP: number;
            RREC: number;
        };
        const PRECISION: {
            LOW: string;
            MEDIUM: string;
            HIGH: string;
        };
        const TEXT_GRADIENT: {
            LINEAR_VERTICAL: number;
            LINEAR_HORIZONTAL: number;
        };
        const UPDATE_PRIORITY: {
            INTERACTION: number;
            HIGH: number;
            NORMAL: number;
            LOW: number;
            UTILITY: number;
        };
    }

    // display

    class Application {
        constructor(options?: ApplicationOptions)
        constructor(width?: number, height?: number, options?: ApplicationOptions, noWebGL?: boolean, sharedTicker?: boolean, sharedLoader?: boolean);

        private _ticker: ticker.Ticker;

        renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
        stage: Container;
        ticker: ticker.Ticker;
        readonly screen: Rectangle;

        stop(): void;
        start(): void;
        render(): void;
        destroy(removeView?: boolean): void;
        readonly view: HTMLCanvasElement;
    }

    interface DestroyOptions {
        children?: boolean;
        texture?: boolean;
        baseTexture?: boolean;
    }
    class Bounds {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
        rect: Rectangle;

        isEmpty(): boolean;
        clear(): void;

        getRectangle(rect?: Rectangle): Rectangle;
        addPoint(point: Point): void;
        addQuad(vertices: number[]): Bounds | undefined;
        addFrame(transform: Transform, x0: number, y0: number, x1: number, y1: number): void;
        addVertices(transform: Transform, vertices: number[], beginOffset: number, endOffset: number): void;
        addBounds(bounds: Bounds): void;
        addBoundsMask(bounds: Bounds, mask: Bounds): void;
        addBoundsArea(bounds: Bounds, area: Rectangle): void;
    }
    class Container extends DisplayObject {
        // begin extras.getChildByName
        getChildByName(name: string): DisplayObject;
        // end extras.getChildByName

        children: DisplayObject[];
        width: number;
        height: number;

        protected onChildrenChange: (...args: any[]) => void;
        addChild<T extends DisplayObject>(child: T, ...additionalChildren: DisplayObject[]): T;
        addChildAt<T extends DisplayObject>(child: T, index: number): T;
        swapChildren(child: DisplayObject, child2: DisplayObject): void;
        getChildIndex(child: DisplayObject): number;
        setChildIndex(child: DisplayObject, index: number): void;
        getChildAt(index: number): DisplayObject;
        removeChild(child: DisplayObject): DisplayObject;
        removeChildAt(index: number): DisplayObject;
        removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];
        updateTransform(): void;
        calculateBounds(): void;
        protected _calculateBounds(): void;
        protected containerUpdateTransform(): void;
        renderWebGL(renderer: WebGLRenderer): void;
        renderAdvancedWebGL(renderer: WebGLRenderer): void;
        protected _renderWebGL(renderer: WebGLRenderer): void;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        renderCanvas(renderer: CanvasRenderer): void;
        destroy(options?: DestroyOptions | boolean): void;

        once(event: "added" | "removed", fn: (displayObject: DisplayObject) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        once(event: string, fn: Function, context?: any): this;
        on(event: "added" | "removed", fn: (displayObject: DisplayObject) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        on(event: string, fn: Function, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        off(event: "added" | "removed" | string, fn?: Function, context?: any): this;
    }
    class DisplayObject extends utils.EventEmitter implements interaction.InteractiveTarget, accessibility.AccessibleTarget {
        // begin extras.cacheAsBitmap
        protected _cacheAsBitmap: boolean;
        protected _cacheData: boolean;
        cacheAsBitmap: boolean;
        protected _renderCachedWebGL(renderer: WebGLRenderer): void;
        protected _initCachedDisplayObject(renderer: WebGLRenderer): void;
        protected _renderCachedCanvas(renderer: CanvasRenderer): void;
        protected _initCachedDisplayObjectCanvas(renderer: CanvasRenderer): void;
        protected _calculateCachedBounds(): Rectangle;
        protected _getCachedLocalBounds(): Rectangle;
        protected _destroyCachedDisplayObject(): void;
        protected _cacheAsBitmapDestroy(options: boolean | any): void;
        // end extras.cacheAsBitmap

        // begin extras.getChildByName
        name: string | null;
        // end extras.getChildByName

        // begin extras.getGlobalPosition
        getGlobalPosition(point?: Point, skipUpdate?: boolean): Point;
        // end extras.getGlobalPosition

        // begin accessible target
        accessible: boolean;
        accessibleTitle: string | null;
        accessibleHint: string | null;
        tabIndex: number;
        // end accessible target

        // begin interactive target
        interactive: boolean;
        interactiveChildren: boolean;
        hitArea: PIXI.Rectangle | PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.RoundedRectangle;
        buttonMode: boolean;
        cursor: string;
        trackedPointers(): { [key: number]: interaction.InteractionTrackingData; };
        // depricated
        defaultCursor: string;
        // end interactive target

        transform: TransformBase;
        alpha: number;
        visible: boolean;
        renderable: boolean;
        parent: Container;
        worldAlpha: number;
        filterArea: Rectangle;
        protected _filters: Filter[] | null;
        protected _enabledFilters: Filter[] | null;
        protected _bounds: Bounds;
        protected _boundsID: number;
        protected _lastBoundsID: number;
        protected _boundsRect: Rectangle;
        protected _localBoundsRect: Rectangle;
        protected _mask: PIXI.Graphics | PIXI.Sprite;
        protected readonly _destroyed: boolean;
        x: number;
        y: number;
        worldTransform: Matrix;
        localTransform: Matrix;
        position: Point | ObservablePoint;
        scale: Point | ObservablePoint;
        pivot: Point | ObservablePoint;
        skew: ObservablePoint;
        rotation: number;
        worldVisible: boolean;
        mask: PIXI.Graphics | PIXI.Sprite;
        filters: Filter[] | null;

        updateTransform(): void;
        protected displayObjectUpdateTransform(): void;
        protected _recursivePostUpdateTransform(): void;
        getBounds(skipUpdate?: boolean, rect?: Rectangle): Rectangle;
        getLocalBounds(rect?: Rectangle): Rectangle;
        //creates and returns a new point
        toGlobal(position: PointLike): Point;
        //modifies the x and y of the passed point and returns it
        toGlobal<T extends PointLike>(position: PointLike, point?: T, skipUpdate?: boolean): T;
        //creates and returns a new point
        toLocal(position: PointLike, from?: DisplayObject): Point;
        //modifies the x and y of the passed point and returns it
        toLocal<T extends PointLike>(position: PointLike, from?: DisplayObject, point?: T, skipUpdate?: boolean): T;
        renderWebGL(renderer: WebGLRenderer): void;
        renderCanvas(renderer: CanvasRenderer): void;
        setParent(container: Container): Container;
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): DisplayObject;
        destroy(): void;

        on(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
        once(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
        removeListener(event: interaction.InteractionEventTypes, fn?: (event: interaction.InteractionEvent) => void, context?: any): this;
        removeAllListeners(event: interaction.InteractionEventTypes): this;
        off(event: interaction.InteractionEventTypes, fn?: (event: interaction.InteractionEvent) => void, context?: any): this;
        addListener(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
    }
    class TransformBase {
        static IDENTITY: TransformBase;

        worldTransform: Matrix;
        localTransform: Matrix;
        protected _worldID: number;
        updateLocalTransform(): void;
        updateTransform(parentTransform: TransformBase): void;
        updateWorldTransform(parentTransform: TransformBase): void;
    }
    class TransformStatic extends TransformBase {
        position: ObservablePoint;
        scale: ObservablePoint;
        pivot: ObservablePoint;
        skew: ObservablePoint;

        protected _rotation: number;
        protected _sr?: number;
        protected _cr?: number;
        protected _cy?: number;
        protected _sy?: number;
        protected _nsx?: number;
        protected _cx?: number;
        protected _currentLocalID: number;

        protected onChange(): void;
        updateSkew(): void;
        updateLocalTransform(): void;
        updateTransform(parentTransform: TransformBase): void;
        setFromMatrix(matrix: Matrix): void;
        rotation: number;
    }
    class Transform extends TransformBase {
        constructor();

        position: Point;
        scale: Point;
        skew: ObservablePoint;
        pivot: Point;

        protected _rotation: number;
        protected _sr?: number;
        protected _cr?: number;
        protected _cy?: number;
        protected _sy?: number;
        protected _nsx?: number;
        protected _cx?: number;

        updateSkew(): void;
        setFromMatrix(matrix: Matrix): void;

        rotation: number;
    }
    // graphics
    class GraphicsData {
        constructor(
            lineWidth: number,
            lineColor: number,
            lineAlpha: number,
            fillColor: number,
            fillAlpha: number,
            fill: boolean,
            nativeLines: boolean,
            shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any);
        lineWidth: number;
        nativeLines: boolean;
        lineColor: number;
        lineAlpha: number;
        protected _lineTint: number;
        fillColor: number;
        fillAlpha: number;
        protected _fillTint: number;
        fill: boolean;
        protected holes: Circle[] | Rectangle[] | Ellipse[] | Polygon[] | RoundedRectangle[] | any[];
        shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any;
        type?: number;
        clone(): GraphicsData;
        addHole(shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any): void;
        destroy(options?: DestroyOptions | boolean): void;
    }
    class Graphics extends Container {
        constructor(nativeLines?: boolean);

        fillAlpha: number;
        lineWidth: number;
        nativeLines: boolean;
        lineColor: number;
        protected graphicsData: GraphicsData[];
        tint: number;
        protected _prevTint: number;
        blendMode: number;
        currentPath: GraphicsData;
        protected _webGL: any;
        isMask: boolean;
        boundsPadding: number;
        protected _localBounds: Bounds;
        dirty: number;
        fastRectDirty: number;
        clearDirty: number;
        boundsDirty: number;
        protected cachedSpriteDirty: boolean;
        protected _spriteRect: Rectangle;
        protected _fastRect: boolean;

        static _SPRITE_TEXTURE: Texture;

        clone(): Graphics;
        lineStyle(lineWidth?: number, color?: number, alpha?: number): Graphics;
        moveTo(x: number, y: number): Graphics;
        lineTo(x: number, y: number): Graphics;
        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;
        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): Graphics;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
        arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): Graphics;
        beginFill(color: number, alpha?: number): Graphics;
        endFill(): Graphics;
        drawRect(x: number, y: number, width: number, height: number): Graphics;
        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
        drawCircle(x: number, y: number, radius: number): Graphics;
        drawEllipse(x: number, y: number, width: number, height: number): Graphics;
        drawPolygon(path: number[] | Point[]): Graphics;
        clear(): Graphics;
        isFastRect(): boolean;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        protected _calculateBounds(): Rectangle;
        protected _renderSpriteRect(renderer: PIXI.SystemRenderer): void;
        containsPoint(point: Point): boolean;
        updateLocalBounds(): void;
        drawShape(shape: Circle | Rectangle | Ellipse | Polygon | RoundedRectangle | any): GraphicsData;
        generateCanvasTexture(scaleMode?: number, resolution?: number): Texture;
        protected closePath(): Graphics;
        protected addHole(): Graphics;
        destroy(options?: DestroyOptions | boolean): void;
    }
    class CanvasGraphicsRenderer {
        constructor(renderer: SystemRenderer);
        render(graphics: Graphics): void;
        protected updateGraphicsTint(graphics: Graphics): void;
        protected renderPolygon(points: Point[], close: boolean, context: CanvasRenderingContext2D): void;
        destroy(): void;
    }
    class GraphicsRenderer extends ObjectRenderer {
        constructor(renderer: PIXI.CanvasRenderer);

        protected graphicsDataPool: GraphicsData[];
        protected primitiveShader: PrimitiveShader;
        gl: WebGLRenderingContext;

        CONTEXT_UID: number;

        destroy(): void;
        render(graphics: Graphics): void;
        protected updateGraphics(graphics: PIXI.Graphics): void;
        getWebGLData(webGL: WebGLRenderingContext, type: number, nativeLines: number): WebGLGraphicsData;
    }
    class WebGLGraphicsData {
        constructor(gl: WebGLRenderingContext, shader: glCore.GLShader, attribsState: glCore.AttribState);

        gl: WebGLRenderingContext;
        color: number[];
        points: Point[];
        indices: number[];
        buffer: WebGLBuffer;
        indexBuffer: WebGLBuffer;
        dirty: boolean;
        glPoints: number[];
        glIndices: number[];
        shader: glCore.GLShader;
        vao: glCore.VertexArrayObject;
        nativeLines: boolean;

        reset(): void;
        upload(): void;
        destroy(): void;
    }
    class PrimitiveShader extends glCore.GLShader { }

    // math

    namespace GroupD8 {
        const E: number;
        const SE: number;
        const S: number;
        const SW: number;
        const W: number;
        const NW: number;
        const N: number;
        const NE: number;
        const MIRROR_HORIZONTAL: number;
        const MIRROR_VERTICAL: number;
        function uX(ind: number): number;
        function uY(ind: number): number;
        function vX(ind: number): number;
        function vY(ind: number): number;
        function inv(rotation: number): number;
        function add(rotationSecond: number, rotationFirst: number): number;
        function sub(rotationSecond: number, rotationFirst: number): number;
        function rotate180(rotation: number): number;
        function isSwapWidthHeight(rotation: number): boolean;
        function byDirection(dx: number, dy: number): number;
        function matrixAppendRotationInv(matrix: Matrix, rotation: number, tx: number, ty: number): void;
    }
    class Matrix {
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);

        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;

        fromArray(array: number[]): void;
        set(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        toArray(transpose?: boolean, out?: number[]): number[];
        apply(pos: Point, newPos?: Point): Point;
        applyInverse(pos: Point, newPos?: Point): Point;
        translate(x: number, y: number): Matrix;
        scale(x: number, y: number): Matrix;
        rotate(angle: number): Matrix;
        append(matrix: Matrix): Matrix;
        setTransform(x: number, y: number, pivotX: number, pivotY: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number): PIXI.Matrix;
        prepend(matrix: Matrix): Matrix;
        invert(): Matrix;
        identity(): Matrix;
        decompose(transform: TransformBase): TransformBase;
        clone(): Matrix;
        copy(matrix: Matrix): Matrix;

        static IDENTITY: Matrix;
        static TEMP_MATRIX: Matrix;
    }
    class PointLike {
        x: number;
        y: number;

        set(x?: number, y?: number): void;
        copy(point: PointLike): void;
    }
    class ObservablePoint extends PointLike {
        constructor(cb: () => any, scope?: any, x?: number, y?: number);
        cb: () => any;
        scope: any;
    }
    class Point extends PointLike {
        constructor(x?: number, y?: number);
        clone(): Point;
        equals(p: PointLike): boolean;
    }
    interface HitArea {
        contains(x: number, y: number): boolean;
    }
    class Circle {
        constructor(x?: number, y?: number, radius?: number);

        x: number;
        y: number;
        radius: number;
        type: number;

        clone(): Circle;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;
    }
    class Ellipse {
        constructor(x?: number, y?: number, width?: number, height?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        type: number;

        clone(): Ellipse;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;
    }
    class Polygon {
        constructor(points: Point[] | number[]);
        // Note - Rest Params cannot be combined with |
        //tslint:disable-next-line:unified-signatures
        constructor(...points: Point[]);
        //tslint:disable-next-line:unified-signatures
        constructor(...points: number[]);

        closed: boolean;
        points: number[];
        type: number;

        clone(): Polygon;
        contains(x: number, y: number): boolean;
        close(): void;
    }
    class Rectangle {
        constructor(x?: number, y?: number, width?: number, height?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        type: number;
        left: number;
        right: number;
        top: number;
        bottom: number;

        static EMPTY: Rectangle;

        clone(): Rectangle;
        copy(rectangle: Rectangle): Rectangle;
        contains(x: number, y: number): boolean;
        pad(paddingX: number, paddingY: number): void;
        fit(rectangle: Rectangle): void;
        enlarge(rectangle: Rectangle): void;
    }
    class RoundedRectangle {
        constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        type: number;

        clone(): RoundedRectangle;
        contains(x: number, y: number): boolean;
    }
    // renderers
    interface RendererOptions {
        /**
         * the width of the renderers view [default=800]
         */
        width?: number;

        /**
         * the height of the renderers view [default=600]
         */
        height?: number;

        /**
         * the canvas to use as a view, optional
         */
        view?: HTMLCanvasElement;

        /**
         * If the render view is transparent, [default=false]
         */
        transparent?: boolean;

        /**
         * sets antialias (only applicable in chrome at the moment) [default=false]
         */
        antialias?: boolean;

        /**
         * enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context [default=false]
         */
        preserveDrawingBuffer?: boolean;

        /**
         * The resolution / device pixel ratio of the renderer, retina would be 2 [default=1]
         */
        resolution?: number;

        /**
         * prevents selection of WebGL renderer, even if such is present [default=false]
         */
        forceCanvas?: boolean;

        /**
         * The background color of the rendered area (shown if not transparent) [default=0x000000]
         */
        backgroundColor?: number;

        /**
         * This sets if the renderer will clear the canvas or not before the new render pass. [default=true]
         */
        clearBeforeRender?: boolean;

        /**
         * If true Pixi will Math.floor() x/ y values when rendering, stopping pixel interpolation. [default=false]
         */
        roundPixels?: boolean;

        /**
         * forces FXAA antialiasing to be used over native FXAA is faster, but may not always look as great ** webgl only** [default=false]
         */
        forceFXAA?: boolean;

        /**
         * `true` to ensure compatibility with older / less advanced devices. If you experience unexplained flickering try setting this to true. **webgl only** [default=false]
         */
        legacy?: boolean;

        /**
         * Depricated
         */
        context?: WebGLRenderingContext;

        /**
         * Depricated
         */
        autoResize?: boolean;
    }
    interface ApplicationOptions extends RendererOptions {
        /**
         * `true` to use PIXI.ticker.shared, `false` to create new ticker. [default=false]
         */
        sharedTicker?: boolean;

        /**
         * `true` to use PIXI.loaders.shared, `false` to create new Loader.
         */
        sharedLoader?: boolean;
    }
    class SystemRenderer extends utils.EventEmitter {
        constructor(system: string, options?: RendererOptions);
        constructor(system: string, screenWidth?: number, screenHeight?: number, options?: RendererOptions);

        type: number;
        options: RendererOptions;
        screen: Rectangle;
        readonly width: number;
        readonly height: number;
        view: HTMLCanvasElement;
        resolution: number;
        transparent: boolean;
        autoResize: boolean;
        blendModes: any; // todo?
        preserveDrawingBuffer: boolean;
        clearBeforeRender: boolean;
        roundPixels: boolean;
        protected _backgroundColor: number;
        protected _backgroundColorRgba: number[];
        protected _backgroundColorString: string;
        protected _tempDisplayObjectParent: Container;
        protected _lastObjectRendered: DisplayObject;

        resize(screenWidth: number, screenHeight: number): void;
        generateTexture(displayObject: DisplayObject, scaleMode?: number, resolution?: number): RenderTexture;
        render(...args: any[]): void;
        destroy(removeView?: boolean): void;
    }
    class CanvasRenderer extends SystemRenderer {
        // plugintarget mixin start
        static __plugins: any;
        //tslint:disable-next-line:ban-types forbidden-types
        static registerPlugin(pluginName: string, ctor: Function): void;
        plugins: any;
        initPlugins(): void;
        destroyPlugins(): void;
        // plugintarget mixin end

        // from InteractionManager
        interaction?: interaction.InteractionManager;

        constructor(options?: RendererOptions);
        constructor(screenWidth?: number, screenHeight?: number, options?: RendererOptions);

        rootContext: CanvasRenderingContext2D;
        rootResolution?: number;
        refresh: boolean;
        maskManager: CanvasMaskManager;
        smoothProperty: string;
        extract: extract.CanvasExtract;

        context: CanvasRenderingContext2D | null;

        render(displayObject: PIXI.DisplayObject, renderTexture?: PIXI.RenderTexture, clear?: boolean, transform?: PIXI.Transform, skipUpdateTransform?: boolean): void;
        setBlendMode(blendMode: number): void;
        destroy(removeView?: boolean): void;
        clear(clearColor?: string): void;

        on(event: "prerender" | "postrender", fn: () => void, context?: any): this;
        once(event: "prerender" | "postrender", fn: () => void, context?: any): this;
        removeListener(event: "prerender" | "postrender", fn?: () => void, context?: any): this;
        removeAllListeners(event: "prerender" | "postrender"): this;
        off(event: "prerender" | "postrender", fn?: () => void, context?: any): this;
        addListener(event: "prerender" | "postrender", fn: () => void, context?: any): this;
    }
    class CanvasMaskManager {
        constructor(renderer: CanvasRenderer);

        pushMask(maskData: any): void;
        protected renderGraphicsShape(graphics: Graphics): void;
        popMask(renderer: WebGLRenderer | CanvasRenderer): void;
        destroy(): void;
    }
    class CanvasRenderTarget {
        constructor(width: number, height: number, resolution: number);

        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        resolution: number;

        width: number;
        height: number;

        clear(): void;
        resize(width: number, height: number): void;
        destroy(): void;
    }
    interface WebGLRendererOptions extends RendererOptions {
    }
    class WebGLRenderer extends SystemRenderer {
        // plugintarget mixin start
        static __plugins: any;
        //tslint:disable-next-line:ban-types forbidden-types
        static registerPlugin(pluginName: string, ctor: Function): void;
        plugins: any;
        initPlugins(): void;
        destroyPlugins(): void;
        // plugintarget mixin end

        // from InteractionManager
        interaction: interaction.InteractionManager;

        constructor(options?: WebGLRendererOptions);
        constructor(screenWidth?: number, screenHeight?: number, options?: WebGLRendererOptions);

        protected _contextOptions: {
            alpha: boolean;
            antiAlias?: boolean;
            premultipliedAlpha: boolean;
            stencil: boolean;
            preseveDrawingBuffer?: boolean;
        };
        protected _backgroundColorRgba: number[];
        maskManager: MaskManager;
        stencilManager?: StencilManager;
        emptyRenderer: ObjectRenderer;
        currentRenderer: ObjectRenderer;
        gl: WebGLRenderingContext;
        CONTEXT_UID: number;
        state?: WebGLState;
        renderingToScreen: boolean;
        boundTextures: Texture[];
        filterManager: FilterManager;
        textureManager?: TextureManager;
        textureGC?: TextureGarbageCollector;
        extract: extract.WebGLExtract;
        protected drawModes: any;
        protected _activeShader: Shader;
        _activeRenderTarget: RenderTarget;
        protected _initContext(): void;

        render(displayObject: PIXI.DisplayObject, renderTexture?: PIXI.RenderTexture, clear?: boolean, transform?: PIXI.Transform, skipUpdateTransform?: boolean): void;
        setObjectRenderer(objectRenderer: ObjectRenderer): void;
        flush(): void;
        setBlendMode(blendMode: number): void;
        clear(clearColor?: number): void;
        setTransform(matrix: Matrix): void;
        clearRenderTexture(renderTexture: RenderTexture, clearColor?: number): WebGLRenderer;
        bindRenderTexture(renderTexture: RenderTexture, transform: Transform): WebGLRenderer;
        bindRenderTarget(renderTarget: RenderTarget): WebGLRenderer;
        bindShader(shader: Shader, autoProject?: boolean): WebGLRenderer;
        bindTexture(texture: Texture | BaseTexture, location?: number, forceLocation?: boolean): number;
        unbindTexture(texture: Texture | BaseTexture): WebGLRenderer | undefined;
        createVao(): glCore.VertexArrayObject;
        bindVao(vao: glCore.VertexArrayObject): WebGLRenderer;
        reset(): WebGLRenderer;
        handleContextLost: (event: WebGLContextEvent) => void;
        handleContextRestored: () => void;
        destroy(removeView?: boolean): void;

        on(event: "prerender" | "postrender", fn: () => void, context?: any): this;
        on(event: "context", fn: (gl: WebGLRenderingContext) => void, context?: any): this;
        once(event: "prerender" | "postrender", fn: () => void, context?: any): this;
        once(event: "context", fn: (gl: WebGLRenderingContext) => void, context?: any): this;
        removeListener(event: "prerender" | "postrender", fn?: () => void, context?: any): this;
        removeListener(event: "context", fn?: (gl: WebGLRenderingContext) => void, context?: any): this;
        removeAllListeners(event: "prerender" | "postrender" | "context"): this;
        off(event: "prerender" | "postrender", fn?: () => void, context?: any): this;
        off(event: "context", fn?: (gl: WebGLRenderingContext) => void, context?: any): this;
        addListener(event: "prerender" | "postrender", fn: () => void, context?: any): this;
        addListener(event: "context", fn: (gl: WebGLRenderingContext) => void, context?: any): this;
    }
    class WebGLState {
        constructor(gl: WebGLRenderingContext);

        activeState: number[];
        defaultState: number[];
        stackIndex: number;
        stack: number[];
        gl: WebGLRenderingContext;
        maxAttribs: number;
        attribState: glCore.AttribState;
        nativeVaoExtension: any;

        push(): void;
        pop(): void;
        setState(state: number[]): void;
        setBlend(value: number): void;
        setBlendMode(value: number): void;
        setDepthTest(value: number): void;
        setCullFace(value: number): void;
        setFrontFace(value: number): void;
        resetAttributes(): void;
        resetToDefault(): void;
    }
    class TextureManager {
        constructor(renderer: WebGLRenderer);

        renderer: WebGLRenderer;
        gl: WebGLRenderingContext;
        protected _managedTextures: Texture[];

        bindTexture(): void;
        getTexture(): WebGLTexture;
        updateTexture(texture: BaseTexture | Texture): WebGLTexture;
        destroyTexture(texture: BaseTexture, _skipRemove?: boolean): void;
        removeAll(): void;
        destroy(): void;
    }
    class TextureGarbageCollector {
        constructor(renderer: WebGLRenderer);

        renderer: WebGLRenderer;
        count: number;
        checkCount: number;
        maxIdle: number;
        checkCountMax: number;
        mode: number;

        update(): void;
        run(): void;
        unload(): void;
    }
    abstract class ObjectRenderer extends WebGLManager {
        constructor(renderer: WebGLRenderer);

        start(): void;
        stop(): void;
        flush(): void;

        render(...args: any[]): void;
    }
    class Quad {
        constructor(gl: WebGLRenderingContext);

        gl: WebGLRenderingContext;
        vertices: number[];
        uvs: number[];
        interleaved: number[];
        indices: number[];
        vertexBuffer: WebGLBuffer;
        vao: glCore.VertexArrayObject;
        initVao(shader: glCore.GLShader): void;
        map(targetTextureFrame: Rectangle, destinationFrame: Rectangle): Quad;
        upload(): Quad;
        destroy(): void;
    }
    interface FilterDataStackItem {
        renderTarget: RenderTarget;
        filter: any[];
        bounds: Rectangle;
    }
    class RenderTarget {
        constructor(gl: WebGLRenderingContext, width: number, height: number, scaleMode: number, resolution: number, root?: boolean);

        gl: WebGLRenderingContext;
        frameBuffer: glCore.GLFramebuffer;
        texture: Texture;
        clearColor: number[];
        size: Rectangle;
        resolution: number;
        projectionMatrix: Matrix;
        transform: Matrix;
        frame: Rectangle;
        defaultFrame: Rectangle;
        destinationFrame: Rectangle;
        sourceFrame?: Rectangle;
        stencilBuffer: glCore.GLFramebuffer;
        stencilMaskStack: Graphics[];
        filterData: {
            index: number,
            stack: FilterDataStackItem[];
        };
        scaleMode: number;
        root: boolean;

        clear(clearColor?: number[]): void;
        attachStencilBuffer(): void;
        setFrame(destinationFrame: Rectangle, sourceFrame: Rectangle): void;
        activate(): void;
        calculateProjection(destinationFrame: Rectangle, sourceFrame: Rectangle): void;
        resize(width: number, height: number): void;
        destroy(): void;
    }

    class BlendModeManager extends WebGLManager {
        constructor(renderer: WebGLRenderer);

        currentBlendMode: number;

        setBlendMode(blendMode: number): boolean;
    }
    interface FilterManagerStackItem {
        renderTarget: RenderTarget;
        sourceFrame: Rectangle;
        destinationFrame: Rectangle;
        filters: Filter[];
        target: any;
        resolution: number;
    }
    class FilterManager extends WebGLManager {
        constructor(renderer: WebGLRenderer);
        gl: WebGLRenderingContext;
        quad: Quad;
        stack: FilterManagerStackItem[];
        stackIndex: number;
        shaderCache: any;
        filterData: any;

        pushFilter(target: RenderTarget, filters: Filter[]): void;
        popFilter(): void;
        applyFilter(shader: glCore.GLShader | Filter, inputTarget: RenderTarget, outputTarget: RenderTarget, clear?: boolean): void;
        syncUniforms(shader: glCore.GLShader, filter: Filter): void;
        getRenderTarget(clear?: boolean, resolution?: number): RenderTarget;
        returnRenderTarget(renderTarget: RenderTarget): RenderTarget;
        calculateScreenSpaceMatrix(outputMatrix: Matrix): Matrix;
        calculateNormalizedScreenSpaceMatrix(outputMatrix: Matrix): Matrix;
        calculateSpriteMatrix(outputMatrix: Matrix, sprite: Sprite): Matrix;
        destroy(): void;
        emptyPool(): void;
        getPotRenderTarget(gl: WebGLRenderingContext, minWidth: number, minHeight: number, resolution: number): RenderTarget;
        freePotRenderTarget(renderTarget: RenderTarget): void;
    }
    class StencilMaskStack {
        stencilStack: any[];
        reverse: boolean;
        count: number;
    }
    class MaskManager extends WebGLManager {
        scissor: boolean;
        scissorData: any;
        scissorRenderTarget: RenderTarget;
        enableScissor: boolean;
        alphaMaskPool: number[];
        alphaMaskIndex: number;
        pushMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        popMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        pushSpriteMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        popSpriteMask(): void;
        pushStencilMask(maskData: Sprite | Graphics): void;
        popStencilMask(): void;
        pushScissorMask(target: RenderTarget, maskData: Sprite | Graphics): void;
        popScissorMask(): void;
    }
    class StencilManager extends WebGLManager {
        constructor(renderer: WebGLRenderer);

        stencilMaskStack: Graphics[];

        setMaskStack(stencilMasStack: Graphics[]): void;
        pushStencil(graphics: Graphics): void;
        popStencil(): void;
        destroy(): void;
    }
    class WebGLManager {
        constructor(renderer: WebGLRenderer);

        renderer: SystemRenderer;
        onContextChange(): void;
        destroy(): void;
    }
    interface UniformData {
        type: string;
        value: any;

        // name is set by pixi if uniforms were automatically extracted from shader code, but not used anywhere
        name?: string;
    }
    class Filter {
        constructor(vertexSrc?: string, fragmentSrc?: string, uniforms?: { [name: string]: UniformData });

        vertextSrc?: string;
        fragmentSrc: string;
        blendMode: number;
        protected uniformData: { [name: string]: UniformData };
        uniforms: { [name: string]: any } | any;
        glShaders: any;
        glShaderKey?: number;
        padding: number;
        resolution: number;
        enabled: boolean;
        autoFit: boolean;
        apply(filterManager: FilterManager, input: RenderTarget, output: RenderTarget, clear?: boolean, currentState?: any): void;

        static defaultVertexSrc: string;
        static defaultFragmentSrc: string;
    }
    class SpriteMaskFilter extends Filter {
        constructor(sprite: Sprite);

        maskSprite: Sprite;
        maskMatrix: Matrix;
        apply(filterManager: FilterManager, input: RenderTarget, output: RenderTarget): void;
    }

    // sprites

    class Sprite extends Container {
        constructor(texture?: Texture);

        protected _anchor: ObservablePoint;
        anchor: ObservablePoint;
        protected _texture: Texture;
        protected _transformTrimmedID: number;
        protected _textureTrimmedID: number;
        protected _width: number;
        protected _height: number;
        tint: number;
        protected _tint: number;
        protected _tintRGB: number;
        blendMode: number;
        pluginName: string;
        protected cachedTint: number;
        texture: Texture;
        protected textureDirty: boolean;
        protected _textureID: number;
        protected _transformID: number;
        protected vertexTrimmedData: Float32Array;
        vertexData: Float32Array;
        width: number;
        height: number;

        protected _onTextureUpdate(): void;
        calculateVertices(): void;
        protected _calculateBounds(): void;
        protected calculateTrimmedVertices(): void;
        protected onAnchorUpdate(): void;
        protected _renderWebGL(renderer: WebGLRenderer): void;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        getLocalBounds(): Rectangle;
        containsPoint(point: Point): boolean;
        destroy(options?: DestroyOptions | boolean): void;

        static from(source: number | string | BaseTexture | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): Sprite;
        static fromFrame(frameId: string): Sprite;
        static fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;
    }
    class BatchBuffer {
        vertices: ArrayBuffer;
        float32View: number[];
        uint32View: number[];

        destroy(): void;
    }
    class SpriteRenderer extends ObjectRenderer {
        constructor(renderer: PIXI.WebGLRenderer);

        vertSize: number;
        vertByteSize: number;
        size: number;
        buffers: BatchBuffer[];
        indices: number[];
        shaders: Shader[];
        currentIndex: number;
        tick: number;
        groups: any[];
        sprites: Sprite[];
        vertexBuffers: number[];
        vaos: glCore.VertexArrayObject[];
        vaoMax: number;
        vertexCount: number;

        protected onContextChanged: () => void;
        protected onPrerender: () => void;
        render(sprite: Sprite): void;
        flush(): void;
        start(): void;
        stop(): void;
        destroy(): void;
    }
    class CanvasSpriteRenderer extends ObjectRenderer {
        constructor(renderer: WebGLRenderer);

        render(sprite: Sprite): void;
        destroy(): void;
    }
    namespace CanvasTinter {
        function getTintedTexture(sprite: Sprite, color: number): HTMLCanvasElement;
        function tintWithMultiply(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        function tintWithOverlay(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        function tintWithPerPixel(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        function roundColor(color: number): number;

        let cacheStepsPerColorChannel: number;
        let convertTintToImage: boolean;
        let canUseMultiply: boolean;
        let tintMethod: number;
    }

    // text
    interface TextStyleOptions {
        align?: string;
        breakWords?: boolean;
        dropShadow?: boolean;
        dropShadowAlpha?: number;
        dropShadowAngle?: number;
        dropShadowBlur?: number;
        dropShadowColor?: string | number;
        dropShadowDistance?: number;
        fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        fillGradientType?: number;
        fillGradientStops?: number[];
        fontFamily?: string | string[];
        fontSize?: number | string;
        fontStyle?: string;
        fontVariant?: string;
        fontWeight?: string;
        letterSpacing?: number;
        lineHeight?: number;
        lineJoin?: string;
        miterLimit?: number;
        padding?: number;
        stroke?: string | number;
        strokeThickness?: number;
        textBaseline?: string;
        trim?: boolean;
        wordWrap?: boolean;
        wordWrapWidth?: number;
    }

    class TextStyle implements TextStyleOptions {
        constructor(style: TextStyleOptions)

        styleID: number;

        clone(): TextStyle;
        reset(): void;

        protected _align: string;
        align: string;
        protected _breakWords: boolean;
        breakWords: boolean;
        protected _dropShadow: boolean;
        dropShadow: boolean;
        protected _dropShadowAlpha: number;
        dropShadowAlpha: number;
        protected _dropShadowAngle: number;
        dropShadowAngle: number;
        protected _dropShadowBlur: number;
        dropShadowBlur: number;
        protected _dropShadowColor: string | number;
        dropShadowColor: string | number;
        protected _dropShadowDistance: number;
        dropShadowDistance: number;
        protected _fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        protected _fillGradientType: number;
        fillGradientType: number;
        protected _fillGradientStops: number[];
        fillGradientStops: number[];
        protected _fontFamily: string | string[];
        fontFamily: string | string[];
        protected _fontSize: number | string;
        fontSize: number | string;
        protected _fontStyle: string;
        fontStyle: string;
        protected _fontVariant: string;
        fontVariant: string;
        protected _fontWeight: string;
        fontWeight: string;
        protected _letterSpacing: number;
        letterSpacing: number;
        protected _lineHeight: number;
        lineHeight: number;
        protected _lineJoin: string;
        lineJoin: string;
        protected _miterLimit: number;
        miterLimit: number;
        protected _padding: number;
        padding: number;
        protected _stroke: string | number;
        stroke: string | number;
        protected _strokeThickness: number;
        strokeThickness: number;
        protected _textBaseline: string;
        textBaseline: string;
        protected _trim: boolean;
        trim: boolean;
        protected _wordWrap: boolean;
        wordWrap: boolean;
        protected _wordWrapWidth: number;
        wordWrapWidth: number;
        toFontString(): string;
    }
    class TextMetrics {
        protected _canvas: HTMLCanvasElement;
        protected _context: CanvasRenderingContext2D;
        protected _fonts: FontMetrics;

        text: string;
        style: TextStyle;
        width: number;
        height: number;
        lines: number[];
        lineWidgets: number[];
        lineHeight: number;
        maxLineWidth: number;
        fontProperties: any;

        constructor(text: string, style: TextStyle, width: number, height: number, lines: number[], lineWidths: number[], lineHeight: number, maxLineWidth: number, fontProperties: any);

        static measureText(text: string, style: TextStyle, wordWrap?: boolean, canvas?: HTMLCanvasElement): TextMetrics;
        static wordWrap(text: string, style: TextStyle, canvas?: HTMLCanvasElement): string;
        static measureFont(font: string): FontMetrics;
    }
    interface FontMetrics {
        ascent: number;
        descent: number;
        fontSize: number;
    }
    class Text extends Sprite {
        constructor(text?: string, style?: TextStyleOptions, canvas?: HTMLCanvasElement);

        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        resolution: number;
        protected _text: string;
        protected _style: TextStyle;
        //tslint:disable-next-line:ban-types forbidden-types
        protected _styleListener: Function;
        protected _font: string;
        protected localStyleID: number;

        width: number;
        height: number;
        style: TextStyle;
        text: string;

        protected updateText(respectDirty?: boolean): void;
        protected drawLetterSpacing(text: string, x: number, y: number, isStroke?: boolean): void;
        protected updateTexture(): void;
        renderWebGL(renderer: WebGLRenderer): void;
        protected _renderCanvas(renderer: CanvasRenderer): void;
        getLocalBounds(rect?: Rectangle): Rectangle;
        protected _calculateBounds(): void;
        protected _onStyleChange: () => void;
        protected _generateFillStyle(style: TextStyle, lines: string[]): string | number | CanvasGradient;
        destroy(options?: DestroyOptions | boolean): void;
        dirty: boolean;
    }
    // textures
    class BaseRenderTexture extends BaseTexture {
        constructor(width?: number, height?: number, scaleMode?: number, resolution?: number);

        height: number;
        width: number;
        realHeight: number;
        realWidth: number;
        resolution: number;
        scaleMode: number;
        hasLoaded: boolean;
        protected _glRenderTargets: { [n: number]: WebGLTexture; };
        protected _canvasRenderTarget: { [n: number]: WebGLTexture; };
        valid: boolean;

        resize(width: number, height: number): void;
        destroy(): void;

        on(event: "update", fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        once(event: "update", fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        removeListener(event: "update", fn?: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        removeAllListeners(event: "update"): this;
        off(event: "update", fn?: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
        addListener(event: "update", fn: (baseRenderTexture: BaseRenderTexture) => void, context?: any): this;
    }
    class BaseTexture extends utils.EventEmitter {
        static from(source: string | HTMLImageElement | HTMLCanvasElement, scaleMode?: number, sourceScale?: number): BaseTexture;

        constructor(source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, scaleMode?: number, resolution?: number);

        protected uuid?: number;
        protected touched: number;
        resolution: number;
        width: number;
        height: number;
        realWidth: number;
        realHeight: number;
        scaleMode: number;
        hasLoaded: boolean;
        isLoading: boolean;
        wrapMode: number;
        source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | null;
        origSource: HTMLImageElement | null;
        imageType: string | null;
        sourceScale: number;
        premultipliedAlpha: boolean;
        imageUrl: string | null;
        protected isPowerOfTwo: boolean;
        mipmap: boolean;
        wrap?: boolean;
        protected _glTextures: any;
        protected _enabled: number;
        protected _id?: number;
        protected _virtualBoundId: number;
        protected readonly _destroyed: boolean;
        textureCacheIds: string[];

        update(): void;
        protected _updateDimensions(): void;
        protected _updateImageType(): void;
        protected _loadSvgSource(): void;
        protected _loadSvgSourceUsingDataUri(dataUri: string): void;
        protected _loadSvgSourceUsingXhr(): void;
        protected _loadSvgSourceUsingString(svgString: string): void;
        protected loadSource(source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): void;
        protected _sourceLoaded(): void;
        destroy(): void;
        dispose(): void;
        updateSourceImage(newSrc: string): void;

        static fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: number, sourceScale?: number): BaseTexture;
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number, origin?: string): BaseTexture;
        static addToCache(baseTexture: BaseTexture, id: string): void;
        static removeFromCache(baseTexture: string | BaseTexture): BaseTexture;

        on(event: "update" | "loaded" | "error" | "dispose", fn: (baseTexture: BaseTexture) => void, context?: any): this;
        once(event: "update" | "loaded" | "error" | "dispose", fn: (baseTexture: BaseTexture) => void, context?: any): this;
        removeListener(event: "update" | "loaded" | "error" | "dispose", fn?: (baseTexture: BaseTexture) => void, context?: any): this;
        removeAllListeners(event: "update" | "loaded" | "error" | "dispose"): this;
        off(event: "update" | "loaded" | "error" | "dispose", fn?: (baseTexture: BaseTexture) => void, context?: any): this;
        addListener(event: "update" | "loaded" | "error" | "dispose", fn: (baseTexture: BaseTexture) => void, context?: any): this;
    }
    class RenderTexture extends Texture {
        constructor(baseRenderTexture: BaseRenderTexture, frame?: Rectangle);

        protected legacyRenderer: any;
        valid: boolean;

        resize(width: number, height: number, doNotResizeBaseTexture?: boolean): void;

        static create(width?: number, height?: number, scaleMode?: number, resolution?: number): RenderTexture;
    }
    class Texture extends utils.EventEmitter {
        constructor(baseTexture: BaseTexture, frame?: Rectangle, orig?: Rectangle, trim?: Rectangle, rotate?: number);

        noFrame: boolean;
        baseTexture: BaseTexture;
        protected _frame: Rectangle;
        trim?: Rectangle;
        valid: boolean;
        requiresUpdate: boolean;
        protected _uvs: TextureUvs;
        orig: Rectangle;
        protected _updateID: number;
        transform: any;
        textureCacheIds: string[];

        update(): void;
        protected onBaseTextureLoaded(baseTexture: BaseTexture): void;
        protected onBaseTextureUpdated(baseTexture: BaseTexture): void;
        destroy(destroyBase?: boolean): void;
        clone(): Texture;
        protected _updateUvs(): void;

        static fromImage(imageUrl: string, crossOrigin?: boolean, scaleMode?: number, sourceScale?: number): Texture;
        static fromFrame(frameId: string): Texture;
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: number, origin?: string): Texture;
        static fromVideo(video: HTMLVideoElement | string, scaleMode?: number): Texture;
        static fromVideoUrl(videoUrl: string, scaleMode?: number): Texture;
        static from(source: number | string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | BaseTexture): Texture;
        static fromLoader(source: HTMLImageElement | HTMLCanvasElement, imageUrl: string, name?: string): Texture;
        static addToCache(texture: Texture, id: string): void;
        static removeFromCache(texture: string | Texture): Texture;

        // depreciation
        static addTextureToCache(texture: Texture, id: string): void;
        static removeTextureFromCache(id: string): Texture;

        frame: Rectangle;
        protected _rotate: boolean | 0;
        rotate: number;
        width: number;
        height: number;

        static EMPTY: Texture;
        static WHITE: Texture;

        on(event: "update", fn: (texture: Texture) => void, context?: any): this;
        once(event: "update", fn: (texture: Texture) => void, context?: any): this;
        removeListener(event: "update", fn?: (texture: Texture) => void, context?: any): this;
        removeAllListeners(event: "update"): this;
        off(event: "update", fn?: (texture: Texture) => void, context?: any): this;
        addListener(event: "update", fn: (texture: Texture) => void, context?: any): this;
    }
    class TextureUvs {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x3: number;
        y3: number;

        uvsUint32: Uint32Array;

        protected set(frame: Rectangle, baseFrame: Rectangle, rotate: number): void;
    }

    class Spritesheet {
        static BATCH_SIZE: number;

        constructor(baseTexture: BaseTexture, data: any, resolutionFilename?: string);

        baseTexture: BaseTexture;
        textures: { [key: string]: Texture; };
        data: any;
        resolution: number;
        protected _frames: any;
        protected _frameKeys: string;
        protected _batchIndex: number;
        protected _callback: (spriteSheet: this, textures: { [key: string]: Texture; }) => void;
        protected _updateResolution(resolutionFilename: string): number;
        parse(callback: (spriteSheet: this, textures: { [key: string]: Texture; }) => void): void;
        protected _processFrames(initialFrameIndex: number): void;
        protected _parseComplete(): void;
        protected _nextBatch(): void;
        destroy(destroyBase?: boolean): void;
    }

    class VideoBaseTexture extends BaseTexture {
        constructor(source: HTMLVideoElement, scaleMode?: number);

        autoUpdate: boolean;
        autoPlay: boolean;
        protected _isAutoUpdating: boolean;

        update(): void;
        protected _onCanPlay(): void;
        protected _onPlayStart(): void;
        protected _onPlayStop(): void;
        destroy(): void;
        protected _isSourcePlaying(): boolean;
        protected _isSourceReady(): boolean;

        static fromVideo(video: HTMLVideoElement, scaleMode?: number): VideoBaseTexture;
        static fromUrl(videoSrc: string | any | string[] | any[]): VideoBaseTexture;
        static fromUrls(videoSrc: string | any | string[] | any[]): VideoBaseTexture;

        source: HTMLVideoElement;
        protected loadSource(source: HTMLVideoElement): void;
    }

    // ticker

    namespace ticker {
        const shared: Ticker;

        class TickerListener {
            constructor(fn: (deltaTime: number) => void, context?: any, priority?: number, once?: boolean);
            fn: (deltaTime: number) => void;
            context: any;
            priority: number;
            once: boolean;
            next: TickerListener;
            previous: TickerListener;
            protected _destroyed: boolean;
            match(fn: (deltaTime: number) => void, context?: any): boolean;
            emit(deltaTime: number): TickerListener;
            connect(previous: TickerListener): void;
            destroy(hard?: boolean): void;
        }
        class Ticker {
            protected _tick: (time: number) => void;
            protected _head: TickerListener;
            protected _requestId: number | null;
            protected _maxElapsedMS: number;

            autoStart: boolean;
            deltaTime: number;
            elapsedMS: number;
            lastTime: number;
            speed: number;
            started: boolean;

            protected _requestIfNeeded(): void;
            protected _cancelIfNeeded(): void;
            protected _startIfPossible(): void;

            add(fn: (deltaTime: number) => void, context?: any, priority?: number): Ticker;
            addOnce(fn: (deltaTime: number) => void, context?: any, priority?: number): Ticker;
            //tslint:disable-next-line:ban-types forbidden-types
            remove(fn: Function, context?: any, priority?: number): Ticker;
            protected _addListener(listener: TickerListener): Ticker;
            readonly FPS: number;
            minFPS: number;

            start(): void;
            stop(): void;
            destroy(): void;
            update(currentTime?: number): void;
        }
    }

    // shader

    class Shader extends glCore.GLShader { }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////EXTRACT///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace extract {
        class CanvasExtract {
            protected renderer: CanvasRenderer;

            constructor(renderer: CanvasRenderer);

            image(target?: DisplayObject | RenderTexture): HTMLImageElement;
            base64(target?: DisplayObject | RenderTexture): string;
            canvas(target?: DisplayObject | RenderTexture): HTMLCanvasElement;
            pixels(renderTexture?: DisplayObject | RenderTexture): number[];

            destroy(): void;
        }
        class WebGLExtract {
            protected renderer: WebGLRenderer;

            constructor(renderer: WebGLRenderer);

            image(target?: DisplayObject | RenderTexture): HTMLImageElement;
            base64(target?: DisplayObject | RenderTexture): string;
            canvas(target?: DisplayObject | RenderTexture): HTMLCanvasElement;
            pixels(renderTexture?: DisplayObject | RenderTexture): number[];

            destroy(): void;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////EXTRAS////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace extras {
        interface BitmapTextStyle {
            font?: string | {
                name?: string;
                size?: number;
            };
            align?: string;
            tint?: number;
        }
        class BitmapText extends Container {
            static registerFont(xml: XMLDocument, texture: Texture): any;

            constructor(text: string, style?: BitmapTextStyle);

            protected _textWidth: number;
            protected _textHeight: number;
            textWidth: number;
            textHeight: number;
            protected _glyphs: Sprite[];
            protected _font: string | {
                name?: string;
                size?: number;
            };
            font: string | {
                name?: string;
                size?: number;
            };
            protected _text: string;
            protected _maxWidth: number;
            maxWidth: number;
            protected _maxLineHeight: number;
            maxLineHeight: number;
            protected _anchor: ObservablePoint;
            dirty: boolean;
            tint: number;
            align: string;
            text: string;
            anchor: PIXI.Point | number;

            protected updateText(): void;
            updateTransform(): void;
            getLocalBounds(): Rectangle;
            protected validate(): void;

            static fonts: any;
        }
        interface AnimatedSpriteTextureTimeObject {
            texture: Texture;
            time?: number;
        }
        class AnimatedSprite extends Sprite {
            constructor(textures: Texture[] | AnimatedSpriteTextureTimeObject[], autoUpdate?: boolean);

            protected _autoUpdate: boolean;
            protected _textures: Texture[];
            protected _durations: number[];
            textures: Texture[] | AnimatedSpriteTextureTimeObject[];
            animationSpeed: number;
            loop: boolean;
            onComplete: () => void;
            onFrameChange: (currentFrame: number) => void;
            onLoop: () => void;
            protected _currentTime: number;
            playing: boolean;
            totalFrames: number;
            currentFrame: number;
            stop(): void;
            play(): void;
            gotoAndStop(frameNumber: number): void;
            gotoAndPlay(frameNumber: number): void;
            protected update(deltaTime: number): void;
            destroy(options?: DestroyOptions | boolean): void;

            static fromFrames(frame: string[]): AnimatedSprite;
            static fromImages(images: string[]): AnimatedSprite;
        }
        class TextureTransform {
            constructor(texture: Texture, clampMargin?: number);

            protected _texture: Texture;
            protected mapCoord: Matrix;
            protected uClampFrame: Float32Array;
            protected uClampOffset: Float32Array;
            protected _lastTextureID: number;

            clampOffset: number;
            clampMargin: number;

            texture: Texture;

            update(forceUpdate?: boolean): boolean;
        }
        class TilingSprite extends Sprite {
            constructor(texture: Texture, width?: number, height?: number);

            tileTransform: TransformStatic;
            protected _width: number;
            protected _height: number;
            protected _canvasPattern: CanvasPattern;
            uvTransform: TextureTransform;
            uvRespectAnchor: boolean;

            clampMargin: number;
            tileScale: Point | ObservablePoint;
            tilePosition: Point | ObservablePoint;

            multiplyUvs(uvs: Float32Array, out: Float32Array): Float32Array;
            protected _onTextureUpdate(): void;
            protected _renderWebGL(renderer: WebGLRenderer): void;
            protected _renderCanvas(renderer: CanvasRenderer): void;
            protected _calculateBounds(): void;
            getLocalBounds(rect?: Rectangle): Rectangle;
            containsPoint(point: Point): boolean;
            destroy(options?: DestroyOptions | boolean): void;

            static from(source: number | string | BaseTexture | HTMLCanvasElement | HTMLVideoElement, width?: number, height?: number): TilingSprite;
            static fromFrame(frameId: string, width?: number, height?: number): TilingSprite;
            // if you remove the next line, the class will break. https://github.com/pixijs/pixi-typescript/issues/96
            static fromImage(imageId: string, crossorigin?: boolean, scaleMode?: number): Sprite;
            static fromImage(imageId: string, width?: number, height?: number, crossorigin?: boolean, scaleMode?: number): TilingSprite;

            width: number;
            height: number;
        }
        class TilingSpriteRenderer extends ObjectRenderer {
            constructor(renderer: WebGLRenderer);

            render(ts: TilingSprite): void;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////FILTERS///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace filters {
        class FXAAFilter extends Filter { }
        class BlurFilter extends Filter {
            constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);

            blurXFilter: BlurXFilter;
            blurYFilter: BlurYFilter;
            resolution: number;
            padding: number;
            passes: number;
            blur: number;
            blurX: number;
            blurY: number;
            quality: number;
        }
        class BlurXFilter extends Filter {
            constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);

            protected _quality: number;

            quality: number;
            passes: number;
            resolution: number;
            strength: number;
            firstRun: boolean;
            blur: number;
        }
        class BlurYFilter extends Filter {
            constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);

            protected _quality: number;

            quality: number;
            passes: number;
            resolution: number;
            strength: number;
            firstRun: boolean;
            blur: number;
        }
        class ColorMatrixFilter extends Filter {
            constructor();

            protected _loadMatrix(matrix: number[], multiply?: boolean): void;
            protected _multiply(out: number[], a: number[], b: number[]): void;
            protected _colorMatrix(matrix: number[]): void;

            matrix: number[];
            alpha: number;

            brightness(b: number, multiply?: boolean): void;
            greyscale(scale: number, multiply?: boolean): void;
            blackAndWhite(multiply?: boolean): void;
            hue(rotation: number, multiply?: boolean): void;
            contrast(amount: number, multiply?: boolean): void;
            saturate(amount: number, multiply?: boolean): void;
            desaturate(multiply?: boolean): void;
            negative(multiply?: boolean): void;
            sepia(multiply?: boolean): void;
            technicolor(multiply?: boolean): void;
            polaroid(multiply?: boolean): void;
            toBGR(multiply?: boolean): void;
            kodachrome(multiply?: boolean): void;
            browni(multiply?: boolean): void;
            vintage(multiply?: boolean): void;
            colorTone(desaturation: number, toned: number, lightColor: string, darkColor: string, multiply?: boolean): void;
            night(intensity: number, multiply?: boolean): void;
            predator(amount: number, multiply?: boolean): void;
            lsd(multiply?: boolean): void;
            reset(): void;
        }
        class DisplacementFilter extends Filter {
            constructor(sprite: Sprite, scale?: number);

            scale: Point;
            map: Texture;
        }
        class VoidFilter extends Filter {
            glShaderKey: number;
        }

        // pixi-filters.d.ts todo
        // https://github.com/pixijs/pixi-filters/
        class NoiseFilter extends Filter {
            constructor(noise?: number, seed?: number);
            noise: number;
            seed: number;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////INTERACTION///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace interaction {
        interface InteractiveTarget {
            interactive: boolean;
            interactiveChildren: boolean;
            hitArea: PIXI.Rectangle | PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.RoundedRectangle;
            buttonMode: boolean;
            cursor: string;
            trackedPointers(): { [key: number]: InteractionTrackingData; };

            // depricated
            defaultCursor: string;
        }
        interface InteractionTrackingData {
            readonly pointerId: number;
            flags: number;
            none: number;
            over: boolean;
            rightDown: boolean;
            leftDown: boolean;
        }
        interface InteractionEvent {
            stopped: boolean;
            target: DisplayObject;
            currentTarget: DisplayObject;
            type: string;
            data: InteractionData;
            stopPropagation(): void;
        }
        class InteractionData {
            global: Point;
            target: DisplayObject;
            originalEvent: MouseEvent | TouchEvent | PointerEvent;
            identifier: number;
            isPrimary: boolean;
            button: number;
            buttons: number;
            width: number;
            height: number;
            tiltX: number;
            tiltY: number;
            pointerType: string;
            pressure: number;
            rotationAngle: number;
            twist: number;
            tangentialPressure: number;
            readonly pointerID: number;
            protected _copyEvent(event: Touch | MouseEvent | PointerEvent): void;
            protected _reset(): void;
            getLocalPosition(displayObject: DisplayObject, point?: Point, globalPos?: Point): Point;
        }
        type InteractionPointerEvents = "pointerdown" | "pointercancel" | "pointerup" |
            "pointertap" | "pointerupoutside" | "pointermove" | "pointerover" | "pointerout";
        type InteractionTouchEvents = "touchstart" | "touchcancel" | "touchend" |
            "touchendoutside" | "touchmove" | "tap";
        type InteractionMouseEvents = "rightdown" | "mousedown" | "rightup" | "mouseup" |
            "rightclick" | "click" | "rightupoutside" | "mouseupoutside" | "mousemove" |
            "mouseover" | "mouseout" | "mouseover";
        type InteractionEventTypes = InteractionPointerEvents | InteractionTouchEvents | InteractionMouseEvents;
        interface InteractionManagerOptions {
            autoPreventDefault?: boolean;
            interactionFrequency?: number;
        }
        class InteractionManager extends utils.EventEmitter {
            constructor(renderer: CanvasRenderer | WebGLRenderer | SystemRenderer, options?: InteractionManagerOptions);

            renderer: SystemRenderer;
            autoPreventDefault: boolean;
            interactionFrequency: number;
            mouse: InteractionData;
            activeInteractionData: { [key: number]: InteractionData; };
            interactionDataPool: InteractionData[];
            eventData: InteractionEvent;
            protected interactionDOMElement: HTMLElement;
            moveWhenInside: boolean;
            eventsAdded: boolean;
            protected mouseOverRenderer: boolean;
            readonly supportsTouchEvents: boolean;
            readonly supportsPointerEvents: boolean;
            protected onPointerUp: (event: PointerEvent) => void;
            protected processPointerUp: (interactionEvent: InteractionEvent, displayObject: Container | PIXI.Sprite | PIXI.extras.TilingSprite, hit: boolean) => void;
            protected onPointerCancel: (event: PointerEvent) => void;
            protected processPointerCancel: (interactionEvent: InteractionEvent, displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite) => void;
            protected onPointerDown: (event: PointerEvent) => void;
            protected processPointerDown: (interactionEvent: InteractionEvent, displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite, hit: boolean) => void;
            protected onPointerMove: (event: PointerEvent) => void;
            protected processPointerMove: (interactionEvent: InteractionEvent, displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite, hit: boolean) => void;
            protected onPointerOut: (event: PointerEvent) => void;
            protected processPointerOverOut: (interactionEvent: InteractionEvent, displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite, hit: boolean) => void;
            protected onPointerOver: (event: PointerEvent) => void;
            cursorStyles: {
                default: string;
                pointer: string;
            };
            currentCursorMode: string;
            cursor: string;
            protected _tempPoint: Point;
            resolution: number;
            hitTest(globalPoint: Point, root?: Container): DisplayObject;
            protected setTargetElement(element: HTMLCanvasElement, resolution?: number): void;
            protected addEvents(): void;
            protected removeEvents(): void;
            update(deltaTime?: number): void;
            setCursorMode(mode: string): void;
            protected dispatchEvent(displayObject: Container | Sprite | extras.TilingSprite, eventString: string, eventData: any): void;
            mapPositionToPoint(point: Point, x: number, y: number): void;
            //tslint:disable-next-line:ban-types forbidden-types
            protected processInteractive(
                interactionEvent: InteractionEvent,
                displayObject: PIXI.Container | PIXI.Sprite | PIXI.extras.TilingSprite,
                func?: Function,
                hitTest?: boolean,
                interactive?: boolean
            ): boolean;
            //tslint:disable-next-line:ban-types forbidden-types
            protected onPointerComplete(
                originalEvent: PointerEvent,
                cancelled: boolean,
                func: Function
            ): void;
            protected getInteractionDataForPointerId(pointerId: number): InteractionData;
            protected releaseInteractionDataForPointerId(event: PointerEvent): void;
            protected configureInteractionEventForDOMEvent(interactionEvent: InteractionEvent, pointerEvent: PointerEvent, interactionData: InteractionData): InteractionEvent;
            protected normalizeToPointerData(event: TouchEvent | MouseEvent | PointerEvent): PointerEvent[];
            destroy(): void;

            // depricated
            defaultCursorStyle: string;
            currentCursorStyle: string;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////LOADER/////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    // pixi loader extends
    // https://github.com/englercj/resource-loader/
    // 2.0.6

    class MiniSignalBinding {
        //tslint:disable-next-line:ban-types forbidden-types
        constructor(fn: Function, once?: boolean, thisArg?: any);

        //tslint:disable-next-line:ban-types forbidden-types
        protected _fn: Function;
        protected _once: boolean;
        protected _thisArg: any;
        protected _next: MiniSignalBinding;
        protected _prev: MiniSignalBinding;
        protected _owner: MiniSignal;

        detach(): boolean;
    }
    class MiniSignal {
        constructor();

        protected _head: MiniSignalBinding;
        protected _tail: MiniSignalBinding;

        handlers(exists?: boolean): MiniSignalBinding[] | boolean;
        handlers(exists?: true): boolean;
        handlers(exists?: false): MiniSignalBinding[];

        has(node: MiniSignalBinding): boolean;
        dispatch(): boolean;
        //tslint:disable-next-line:ban-types forbidden-types
        add(fn: Function, thisArg?: any): any;
        //tslint:disable-next-line:ban-types forbidden-types
        once(fn: Function, thisArg?: any): any;
        detach(node: MiniSignalBinding): MiniSignal;
        detachAll(): MiniSignal;
    }

    namespace loaders {
        interface LoaderOptions {
            crossOrigin?: boolean | string;
            loadType?: number;
            xhrType?: string;
            metaData?: any;
            loadElement?: HTMLImageElement | HTMLAudioElement | HTMLVideoElement;
            skipSource?: boolean;
        }
        interface ResourceDictionary {
            [index: string]: PIXI.loaders.Resource;
        }

        // As of ResourceLoader v2 we no longer require EventEmitter
        // However, for depreciation reasons, it remains.
        class Loader extends utils.EventEmitter {
            // pixi overrides here
            //tslint:disable-next-line:ban-types forbidden-types
            static addPixiMiddleware(fn: Function): void;

            // below this line is the original non-pixi loader

            static Resource: any;
            static async: any;
            static base64: any;

            constructor(baseUrl?: string, concurrency?: number);

            baseUrl: string;
            progress: number;
            loading: boolean;
            defaultQueryString: string;

            //tslint:disable-next-line:ban-types forbidden-types
            protected _beforeMiddleware: Function[];
            //tslint:disable-next-line:ban-types forbidden-types
            protected _afterMiddleware: Function[];
            protected _resourcesParsing: Resource[];
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundLoadResource: (r: Resource, d: Function) => void;
            protected _queue: any;

            resources: ResourceDictionary;

            onProgress: MiniSignal;
            onError: MiniSignal;
            onLoad: MiniSignal;
            onStart: MiniSignal;
            onComplete: MiniSignal;

            add(...params: any[]): this;
            //tslint:disable-next-line:ban-types forbidden-types
            add(name: string, url: string, options?: LoaderOptions, cb?: Function): this;
            //tslint:disable-next-line:ban-types forbidden-types
            add(obj: string | any | any[], options?: LoaderOptions, cb?: Function): this;

            //tslint:disable-next-line:ban-types forbidden-types
            pre(fn: Function): this;
            //tslint:disable-next-line:ban-types forbidden-types
            use(fn: Function): this;
            reset(): this;
            //tslint:disable-next-line:ban-types forbidden-types
            load(cb?: Function): this;

            protected _prepareUrl(url: string): string;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _loadResource(resource: Resource, dequeue: Function): void;
            protected _onComplete(): void;
            protected _onLoad(resource: Resource): void;

            destroy(): void;

            // depreciation

            on(event: "complete", fn: (loader: loaders.Loader, object: any) => void, context?: any): this;
            on(event: "error", fn: (error: Error, loader: loaders.Loader, resource: Resource) => void, context?: any): this;
            on(event: "load" | "progress", fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): this;
            on(event: "start", fn: (loader: loaders.Loader) => void, context?: any): this;

            once(event: "complete", fn: (loader: loaders.Loader, object: any) => void, context?: any): this;
            once(event: "error", fn: (error: Error, loader: loaders.Loader, resource: Resource) => void, context?: any): this;
            once(event: "load" | "progress", fn: (loader: loaders.Loader, resource: Resource) => void, context?: any): this;
            once(event: "start", fn: (loader: loaders.Loader) => void, context?: any): this;
            //tslint:disable-next-line:ban-types forbidden-types
            off(event: "complete" | "error" | "load" | "progress" | "start" | string, fn?: Function, context?: any): this;
        }
        interface TextureDictionary {
            [index: string]: PIXI.Texture;
        }
        class Resource {
            static setExtensionLoadType(extname: string, loadType: number): void;
            static setExtensionXhrType(extname: string, xhrType: string): void;

            constructor(name: string, url: string | string[], options?: LoaderOptions);

            protected _flags: number;

            name: string;
            url: string;
            extension: string;
            data: any;
            crossOrigin: boolean | string;
            loadType: number;
            xhrType: string;
            metadata: any;
            error: Error;
            xhr: XMLHttpRequest | null;
            children: Resource[];
            type: number;
            progressChunk: number;

            //tslint:disable-next-line:ban-types forbidden-types
            protected _dequeue: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _onLoadBinding: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundComplete: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundOnError: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundOnProgress: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundXhrOnError: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundXhrOnAbort: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundXhrOnLoad: Function;
            //tslint:disable-next-line:ban-types forbidden-types
            protected _boundXdrOnTimeout: Function;

            onStart: MiniSignal;
            onProgress: MiniSignal;
            onComplete: MiniSignal;
            onAfterMiddleware: MiniSignal;

            isDataUrl: boolean;
            isComplete: boolean;
            isLoading: boolean;
            complete(): void;
            abort(message?: string): void;
            //tslint:disable-next-line:ban-types forbidden-types
            load(cb?: Function): void;

            protected _hasFlag(flag: number): boolean;
            protected _setFlag(flag: number, value: boolean): void;
            protected _loadElement(type: string): void;
            protected _loadSourceElement(type: string): void;
            protected _loadXhr(): void;
            protected _loadXdr(): void;
            protected _createSource(type: string, url: string, mime?: string): HTMLSourceElement;
            protected _onError(event?: any): void;
            protected _onProgress(event?: any): void;
            protected _xhrOnError(): void;
            protected _xhrOnAbort(): void;
            protected _xdrOnTimeout(): void;
            protected _xhrOnLoad(): void;
            protected _determineCrossOrigin(url: string, loc: any): string;
            protected _determineXhrType(): number;
            protected _determineLoadType(): number;
            protected _getExtension(): string;
            protected _getMimeXhrType(type: number): string;

            static STATUS_FLAGS: {
                NONE: number;
                DATA_URL: number;
                COMPLETE: number;
                LOADING: number;
            };

            static TYPE: {
                UNKNOWN: number;
                JSON: number;
                XML: number;
                IMAGE: number;
                AUDIO: number;
                VIDEO: number;
                TEXT: number;
            };

            static LOAD_TYPE: {
                XHR: number;
                IMAGE: number;
                AUDIO: number;
                VIDEO: number;
            };

            static XHR_RESPONSE_TYPE: {
                DEFAULT: string;
                BUFFER: string;
                BLOB: string;
                DOCUMENT: string;
                JSON: string;
                TEXT: string;
            };

            static EMPTY_GIF: string;

            texture: Texture;
            spineAtlas: any;
            spineData: any;
            textures?: TextureDictionary;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////MESH///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    namespace mesh {
        class Mesh extends Container {
            constructor(texture: Texture, vertices?: Float32Array, uvs?: Float32Array, indices?: Uint16Array, drawMode?: number);

            protected _texture: Texture;
            uvs: Float32Array;
            vertices: Float32Array;
            indices: Uint16Array;
            dirty: number;
            indexDirty: number;
            dirtyVertex: boolean;
            protected _geometryVersion: number;
            blendMode: number;
            pluginName: string;
            canvasPadding: number;
            drawMode: number;
            texture: Texture;
            tintRgb: Float32Array;
            protected _glDatas: { [n: number]: any; };
            protected _uvTransform: extras.TextureTransform;
            uploadUvTransform: boolean;
            multiplyUvs(): void;
            refresh(forceUpdate?: boolean): void;
            protected _refresh(): void;
            protected _renderWebGL(renderer: WebGLRenderer): void;
            protected _renderCanvas(renderer: CanvasRenderer): void;
            protected _onTextureUpdate(): void;
            protected _calculateBounds(): void;
            containsPoint(point: Point): boolean;
            tint: number;

            static DRAW_MODES: {
                TRIANGLE_MESH: number;
                TRIANGLES: number;
            };
        }

        class CanvasMeshRenderer {
            constructor(renderer: CanvasRenderer);

            renderer: CanvasRenderer;

            render(mesh: Mesh): void;
            protected _renderTriangleMesh(mesh: Mesh): void;
            protected _renderTriangles(mesh: Mesh): void;
            protected _renderDrawTriangle(mesh: Mesh, index0: number, index1: number, index2: number): void;
            protected renderMeshFlat(mesh: Mesh): void;

            destroy(): void;
        }

        class MeshRenderer extends ObjectRenderer {
            constructor(renderer: WebGLRenderer);

            shader: Shader;
            render(mesh: Mesh): void;
        }

        class Plane extends Mesh {
            constructor(texture: Texture, verticesX?: number, verticesY?: number);
            protected _ready: boolean;
            verticesX: number;
            verticesY: number;
            drawMode: number;

            refresh(): void;

            protected _onTexureUpdate(): void;
        }

        class NineSlicePlane extends Plane {
            constructor(texture: Texture, leftWidth?: number, topHeight?: number, rightWidth?: number, bottomHeight?: number);

            width: number;
            height: number;
            leftWidth: number;
            rightWidth: number;
            topHeight: number;
            bottomHeight: number;

            protected _leftWidth: number;
            protected _rightWidth: number;
            protected _topHeight: number;
            protected _bottomHeight: number;
            protected _height: number;
            protected _width: number;
            protected _origHeight: number;
            protected _origWidth: number;
            protected _uvh: number;
            protected _uvw: number;

            updateHorizontalVertices(): void;
            updateVerticalVertices(): void;
            protected drawSegment(context: CanvasRenderingContext2D | WebGLRenderingContext, textureSource: any, w: number, h: number, x1: number, y1: number, x2: number, y2: number): void;
            protected _refresh(): void;
        }

        class Rope extends Mesh {
            constructor(texture: Texture, points: Point[]);

            points: Point[];
            colors: number[];
            autoUpdate: boolean;
            protected _refresh(): void;

            refreshVertices(): void;
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////PARTICLES////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    namespace particles {
        interface ParticleContainerProperties {
            scale?: boolean;
            position?: boolean;
            rotation?: boolean;
            uvs?: boolean;
            alpha?: boolean;
        }
        class ParticleContainer extends Container {
            constructor(size?: number, properties?: ParticleContainerProperties, batchSize?: number);
            protected _tint: number;
            protected tintRgb: number | any[];
            tint: number;
            protected _properties: boolean[];
            protected _maxSize: number;
            protected _batchSize: number;
            protected _glBuffers: { [n: number]: WebGLBuffer; };
            protected _bufferToUpdate: number;
            interactiveChildren: boolean;
            blendMode: number;
            roundPixels: boolean;
            baseTexture: BaseTexture;

            setProperties(properties: ParticleContainerProperties): void;
            protected onChildrenChange: (smallestChildIndex?: number) => void;

            destroy(options?: DestroyOptions | boolean): void;
        }
        class ParticleBuffer {
            constructor(gl: WebGLRenderingContext, properties: any, dynamicPropertyFlags: any[], size: number);

            gl: WebGLRenderingContext;
            vertSize: number;
            vertByteSize: number;
            size: number;
            dynamicProperties: any[];
            staticProperties: any[];
            staticStride: number;
            staticBuffer: any;
            staticData: any;
            dynamicStride: number;
            dynamicBuffer: any;
            dynamicData: any;

            destroy(): void;
        }
        interface ParticleRendererProperty {
            attribute: number;
            size: number;
            uploadFunction(children: PIXI.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
            offset: number;
        }
        class ParticleRenderer extends ObjectRenderer {
            constructor(renderer: WebGLRenderer);

            shader: glCore.GLShader;
            indexBuffer: WebGLBuffer;
            properties: ParticleRendererProperty[];
            protected tempMatrix: Matrix;

            start(): void;
            generateBuffers(container: ParticleContainer): ParticleBuffer[];
            uploadVertices(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
            uploadPosition(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
            uploadRotation(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
            uploadUvs(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
            uploadAlpha(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
            destroy(): void;

            indices: Uint16Array;
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////PREPARE///////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    namespace prepare {
        type AddHook = (item: any, queue: any[]) => boolean;
        type UploadHook<UploadHookSource> = (prepare: UploadHookSource, item: any) => boolean;
        abstract class BasePrepare<UploadHookSource>{
            constructor(renderer: SystemRenderer);

            limiter: CountLimiter | TimeLimiter;
            protected renderer: SystemRenderer;
            protected uploadHookHelper: UploadHookSource;
            protected queue: any[];
            protected addHooks: AddHook[];
            protected uploadHooks: Array<UploadHook<UploadHookSource>>;
            //tslint:disable-next-line:ban-types forbidden-types
            protected completes: Function[];
            protected ticking: boolean;
            protected delayedTick: () => void;

            //tslint:disable-next-line:ban-types forbidden-types
            upload(item: Function | DisplayObject | Container | BaseTexture | Texture | Graphics | Text | any, done?: () => void): void;
            protected tick(): void;
            protected prepareItems(): void;
            registerFindHook(addHook: AddHook): this;
            registerUploadHook(uploadHook: UploadHook<UploadHookSource>): this;
            protected findMultipleBaseTextures(item: PIXI.DisplayObject, queue: any[]): boolean;
            protected findBaseTexture(item: PIXI.DisplayObject, queue: any[]): boolean;
            protected findTexture(item: PIXI.DisplayObject, queue: any[]): boolean;
            add(item: PIXI.DisplayObject | PIXI.Container | PIXI.BaseTexture | PIXI.Texture | PIXI.Graphics | PIXI.Text | any): this;
            destroy(): void;
        }
        class CanvasPrepare extends BasePrepare<CanvasPrepare> {
            constructor(renderer: CanvasRenderer);

            protected canvas: HTMLCanvasElement;
            protected ctx: CanvasRenderingContext2D;
        }
        class WebGLPrepare extends BasePrepare<WebGLRenderer> {
            constructor(renderer: WebGLRenderer);
        }
        class CountLimiter {
            constructor(maxItemsPerFrame: number);

            protected maxItemsPerFrame: number;
            protected itemsLeft: number;

            beginFrame(): void;
            allowedToUpload(): boolean;
        }
        class TimeLimiter {
            constructor(maxMilliseconds: number);

            protected maxMilliseconds: number;
            protected frameStart: number;

            beginFrame(): void;
            allowedToUpload(): boolean;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////pixi-gl-core/////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    // pixi-gl-core https://github.com/pixijs/pixi-gl-core
    // sharedArrayBuffer as a type is not available yet.
    // need to fully define what an `Attrib` is.
    namespace glCore {
        interface ContextOptions {
            /**
             * Boolean that indicates if the canvas contains an alpha buffer.
             */
            alpha?: boolean;
            /**
             * Boolean that indicates that the drawing buffer has a depth buffer of at least 16 bits.
             */
            depth?: boolean;
            /**
             * Boolean that indicates that the drawing buffer has a stencil buffer of at least 8 bits.
             */
            stencil?: boolean;
            /**
             * Boolean that indicates whether or not to perform anti-aliasing.
             */
            antialias?: boolean;
            /**
             * Boolean that indicates that the page compositor will assume the drawing buffer contains colors with pre-multiplied alpha.
             */
            premultipliedAlpha?: boolean;
            /**
             * If the value is true the buffers will not be cleared and will preserve their values until cleared or overwritten by the author.
             */
            preserveDrawingBuffer?: boolean;
            /**
             *  Boolean that indicates if a context will be created if the system performance is low.
             */
            failIfMajorPerformanceCaveat?: boolean;
        }
        function createContext(view: HTMLCanvasElement, options?: ContextOptions): WebGLRenderingContext;
        function setVertexAttribArrays(gl: WebGLRenderingContext, attribs: Attrib[], state?: WebGLState): WebGLRenderingContext | undefined;
        class GLBuffer {
            constructor(gl: WebGLRenderingContext, type: number, data: ArrayBuffer | ArrayBufferView | any, drawType: number);

            protected _updateID?: number;
            gl: WebGLRenderingContext;
            buffer: WebGLBuffer;
            type: number;
            drawType: number;
            data: ArrayBuffer | ArrayBufferView | any;

            upload(data: ArrayBuffer | ArrayBufferView | any, offset?: number, dontBind?: boolean): void;
            bind(): void;

            static createVertexBuffer(gl: WebGLRenderingContext, data: ArrayBuffer | ArrayBufferView | any, drawType: number): GLBuffer;
            static createIndexBuffer(gl: WebGLRenderingContext, data: ArrayBuffer | ArrayBufferView | any, drawType: number): GLBuffer;
            static create(gl: WebGLRenderingContext, type: number, data: ArrayBuffer | ArrayBufferView | any, drawType: number): GLBuffer;

            destroy(): void;
        }
        class GLFramebuffer {
            constructor(gl: WebGLRenderingContext, width: number, height: number);

            gl: WebGLRenderingContext;
            frameBuffer: WebGLFramebuffer;
            stencil: WebGLRenderbuffer;
            texture: GLTexture;
            width: number;
            height: number;

            enableTexture(texture: GLTexture): void;
            enableStencil(): void;
            clear(r: number, g: number, b: number, a: number): void;
            bind(): void;
            unbind(): void;
            resize(width: number, height: number): void;
            destroy(): void;

            static createRGBA(gl: WebGLRenderingContext, width: number, height: number, data: ArrayBuffer | ArrayBufferView | any): GLFramebuffer;
            static createFloat32(gl: WebGLRenderingContext, width: number, height: number, data: ArrayBuffer | ArrayBufferView | any): GLFramebuffer;
        }
        class GLShader {
            constructor(gl: WebGLRenderingContext, vertexSrc: string | string[], fragmentSrc: string | string[], precision?: string, attributeLocations?: { [key: string]: number });

            gl: WebGLRenderingContext;
            program?: WebGLProgram | null;
            uniformData: any;
            uniforms: any;
            attributes: any;

            bind(): void;
            destroy(): void;
        }
        class GLTexture {
            constructor(gl: WebGLRenderingContext, width?: number, height?: number, format?: number, type?: number);

            gl: WebGLRenderingContext;
            texture: WebGLTexture;
            mipmap: boolean;
            premultiplyAlpha: boolean;
            width: number;
            height: number;
            format: number;
            type: number;

            upload(source: HTMLImageElement | ImageData | HTMLVideoElement | HTMLCanvasElement): void;
            uploadData(data: ArrayBuffer | ArrayBufferView, width: number, height: number): void;
            bind(location?: number): void;
            unbind(): void;
            minFilter(linear: boolean): void;
            magFilter(linear: boolean): void;
            enableMipmap(): void;
            enableLinearScaling(): void;
            enableNearestScaling(): void;
            enableWrapClamp(): void;
            enableWrapRepeat(): void;
            enableWrapMirrorRepeat(): void;
            destroy(): void;

            static fromSource(gl: WebGLRenderingContext, source: HTMLImageElement | ImageData | HTMLVideoElement | HTMLCanvasElement, premultipleAlpha?: boolean): GLTexture;
            static fromData(gl: WebGLRenderingContext, data: number[], width: number, height: number): GLTexture;
        }
        interface Attrib {
            attribute: {
                location: number;
                size: number;
            };
            normalized: boolean;
            stride: number;
            start: number;
            buffer: ArrayBuffer;
        }
        interface WebGLRenderingContextAttribute {
            buffer: WebGLBuffer;
            attribute: any;
            type: number;
            normalized: boolean;
            stride: number;
            start: number;
        }
        interface AttribState {
            tempAttribState: Attrib[];
            attribState: Attrib[];
        }
        class VertexArrayObject {
            static FORCE_NATIVE: boolean;

            constructor(gl: WebGLRenderingContext, state: WebGLState);

            protected nativeVaoExtension: any;
            protected nativeState: AttribState;
            protected nativeVao: VertexArrayObject;
            gl: WebGLRenderingContext;
            attributes: Attrib[];
            indexBuffer: GLBuffer;
            dirty: boolean;

            bind(): VertexArrayObject;
            unbind(): VertexArrayObject;
            activate(): VertexArrayObject;
            addAttribute(buffer: GLBuffer, attribute: Attrib, type: number, normalized: boolean, stride: number, start: number): VertexArrayObject;
            addIndex(buffer: GLBuffer, options?: any): VertexArrayObject;
            clear(): VertexArrayObject;
            draw(type: number, size: number, start: number): VertexArrayObject;
            destroy(): void;
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////UTILS//////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////

    interface DecomposedDataUri {
        mediaType: string;
        subType: string;
        encoding: string;
        data: any;
    }

    namespace utils {
        function uid(): number;
        function hex2rgb(hex: number, out?: number[]): number[];
        function hex2string(hex: number): string;
        function rgb2hex(rgb: number[]): number;
        function canUseNewCanvasBlendModes(): boolean;
        function getResolutionOfUrl(url: string, defaultValue?: number): number;
        function getSvgSize(svgString: string): any;
        function decomposeDataUri(dataUri: string): DecomposedDataUri | void;
        function getUrlFileExtension(url: string): string | void;
        function sayHello(type: string): void;
        function skipHello(): void;
        function isWebGLSupported(): boolean;
        function sign(n: number): number;
        function removeItems<T>(arr: T[], startIdx: number, removeCount: number): void;
        function correctBlendMode(blendMode: number, premultiplied: boolean): number;
        function premultiplyTint(tint: number, alpha: number): number;
        function premultiplyRgba(rgb: Float32Array | number[], alpha: number, out?: Float32Array, premultiply?: boolean): Float32Array;
        function premultiplyTintToRgba(tint: number, alpha: number, out?: Float32Array, premultiply?: boolean): Float32Array;
        const premultiplyBlendMode: number[][];
        const TextureCache: any;
        const BaseTextureCache: any;

        // https://github.com/kaimallea/isMobile
        namespace isMobile {
            const apple: {
                phone: boolean;
                ipod: boolean;
                tablet: boolean;
                device: boolean;
            };
            const android: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            const amazon: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            const windows: {
                phone: boolean;
                tablet: boolean;
                device: boolean;
            };
            const seven_inch: boolean;
            const other: {
                blackberry10: boolean;
                blackberry: boolean;
                opera: boolean;
                firefox: boolean;
                chrome: boolean;
                device: boolean;
            };
            const any: boolean;
            const phone: boolean;
            const tablet: boolean;
        }
        // https://github.com/primus/eventemitter3
        class EventEmitter {
            static prefixed: string | boolean;
            static EventEmitter: {
                new (): EventEmitter;
                prefixed: string | boolean;
            };
            /**
             * Minimal EventEmitter interface that is molded against the Node.js
             * EventEmitter interface.
             *
             * @constructor
             * @api public
             */
            constructor();
            /**
             * Return an array listing the events for which the emitter has registered listeners.
             *
             * @returns {(string | symbol)[]}
             */
            eventNames(): Array<(string | symbol)>;
            /**
             * Return the listeners registered for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns {Function[]}
             */
            //tslint:disable-next-line:ban-types forbidden-types
            listeners(event: string | symbol): Function[];
            /**
             * Check if there listeners for a given event.
             * If `exists` argument is not `true` lists listeners.
             *
             * @param {(string | symbol)} event The event name.
             * @param {boolean} exists Only check if there are listeners.
             * @returns {boolean}
             */
            listeners(event: string | symbol, exists: boolean): boolean;
            /**
             * Calls each of the listeners registered for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {...*} args Arguments that are passed to registered listeners
             * @returns {boolean} `true` if the event had listeners, else `false`.
             */
            emit(event: string | symbol, ...args: any[]): boolean;
            /**
             * Add a listener for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn The listener function.
             * @param {*} [context=this] The context to invoke the listener with.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            on(event: string | symbol, fn: Function, context?: any): this;
            /**
             * Add a one-time listener for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn The listener function.
             * @param {*} [context=this] The context to invoke the listener with.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            once(event: string | symbol, fn: Function, context?: any): this;
            /**
             * Remove the listeners of a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn Only remove the listeners that match this function.
             * @param {*} context Only remove the listeners that have this context.
             * @param {boolean} once Only remove one-time listeners.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            removeListener(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;
            /**
             * Remove all listeners, or those of the specified event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns {EventEmitter} `this`.
             */
            removeAllListeners(event?: string | symbol): this;
            /**
             * Alias method for `removeListener`
             */
            //tslint:disable-next-line:ban-types forbidden-types
            off(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;
            /**
             * Alias method for `on`
             */
            //tslint:disable-next-line:ban-types forbidden-types
            addListener(event: string | symbol, fn: Function, context?: any): this;
            /**
             * This function doesn't apply anymore.
             * @deprecated
             */
            setMaxListeners(): this;
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////depreciation/////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    // not sure how to handle blendmodes scalemodes basetexturecache
    namespace core {
        /**
         * @class
         * @private
         * @name SpriteBatch
         * @memberof PIXI
         * @see PIXI.ParticleContainer
         * @throws {ReferenceError} SpriteBatch does not exist any more, please use the new ParticleContainer instead.
         * @deprecated since version 3.0.0
         */
        type SpriteBatch = ParticleContainer;

        /**
         * @class
         * @private
         * @name AssetLoader
         * @memberof PIXI
         * @see PIXI.loaders.Loader
         * @throws {ReferenceError} The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.
         * @deprecated since version 3.0.0
         */
        type AssetLoader = loaders.Loader;

        /**
         * @class
         * @private
         * @name Stage
         * @memberof PIXI
         * @see PIXI.Container
         * @deprecated since version 3.0.0
         */
        type Stage = Container;

        /**
         * @class
         * @private
         * @name DisplayObjectContainer
         * @memberof PIXI
         * @see PIXI.Container
         * @deprecated since version 3.0.0
         */
        type DisplayObjectContainer = Container;

        /**
         * @class
         * @private
         * @name Strip
         * @memberof PIXI
         * @see PIXI.mesh.Mesh
         * @deprecated since version 3.0.0
         */
        type Strip = mesh.Mesh;

        /**
         * @class
         * @private
         * @name Rope
         * @memberof PIXI
         * @see PIXI.mesh.Rope
         * @deprecated since version 3.0.0
         */
        type Rope = mesh.Rope;

        /**
         * @class
         * @private
         * @name ParticleContainer
         * @memberof PIXI
         * @see PIXI.particles.ParticleContainer
         * @deprecated since version 4.0.0
         */
        type ParticleContainer = particles.ParticleContainer;

        /**
         * @class
         * @private
         * @name MovieClip
         * @memberof PIXI
         * @see PIXI.extras.MovieClip
         * @deprecated since version 3.0.0
         */
        type MovieClip = extras.AnimatedSprite;

        /**
         * @class
         * @private
         * @name TilingSprite
         * @memberof PIXI
         * @see PIXI.extras.TilingSprite
         * @deprecated since version 3.0.0
         */
        type TilingSprite = extras.TilingSprite;

        /**
         * @class
         * @private
         * @name BaseTextureCache
         * @memberof PIXI
         * @see PIXI.utils.BaseTextureCache
         * @deprecated since version 3.0.0
         */
        type BaseTextureCache = any;

        /**
         * @class
         * @private
         * @name BitmapText
         * @memberof PIXI
         * @see PIXI.extras.BitmapText
         * @deprecated since version 3.0.0
         */
        type BitmapText = extras.BitmapText;

        /**
         * @namespace
         * @private
         * @name math
         * @memberof PIXI
         * @see PIXI
         * @deprecated since version 3.0.6
         */
        type math = any;

        /**
         * @class
         * @private
         * @name PIXI.AbstractFilter
         * @see PIXI.Filter
         * @deprecated since version 3.0.6
         */
        type AbstractFilter = Filter;

        /**
         * @class
         * @private
         * @name PIXI.TransformManual
         * @see PIXI.TransformBase
         * @deprecated since version 4.0.0
         */
        type TransformManual = TransformBase;

        /**
         * @static
         * @constant
         * @name PIXI.TARGET_FPMS
         * @see PIXI.settings.TARGET_FPMS
         * @deprecated since version 4.2.0
         */
        type TARGET_FPMS = number;

        /**
         * @static
         * @constant
         * @name PIXI.FILTER_RESOLUTION
         * @see PIXI.settings.FILTER_RESOLUTION
         * @deprecated since version 4.2.0
         */
        type FILTER_RESOLUTION = number;

        /**
         * @static
         * @constant
         * @name PIXI.RESOLUTION
         * @see PIXI.settings.RESOLUTION
         * @deprecated since version 4.2.0
         */
        type RESOLUTION = number;

        /**
         * @static
         * @constant
         * @name PIXI.MIPMAP_TEXTURES
         * @see PIXI.settings.MIPMAP_TEXTURES
         * @deprecated since version 4.2.0
         */
        type MIPMAP_TEXTURES = any;

        /**
         * @static
         * @constant
         * @name PIXI.SPRITE_BATCH_SIZE
         * @see PIXI.settings.SPRITE_BATCH_SIZE
         * @deprecated since version 4.2.0
         */
        type SPRITE_BATCH_SIZE = number;

        /**
         * @static
         * @constant
         * @name PIXI.SPRITE_MAX_TEXTURES
         * @see PIXI.settings.SPRITE_MAX_TEXTURES
         * @deprecated since version 4.2.0
         */
        type SPRITE_MAX_TEXTURES = number;

        /**
         * @static
         * @constant
         * @name PIXI.RETINA_PREFIX
         * @see PIXI.settings.RETINA_PREFIX
         * @deprecated since version 4.2.0
         */
        type RETINA_PREFIX = RegExp | string;

        /**
         * @static
         * @constant
         * @name PIXI.DEFAULT_RENDER_OPTIONS
         * @see PIXI.settings.RENDER_OPTIONS
         * @deprecated since version 4.2.0
         */
        type DEFAULT_RENDER_OPTIONS = number;

        /**
         * @static
         * @name PRECISION
         * @memberof PIXI.settings
         * @see PIXI.PRECISION
         * @deprecated since version 4.4.0
         */
        type PRECISION = string;
    }

    namespace extras {
        /**
         * @class
         * @name MovieClip
         * @memberof PIXI.extras
         * @see PIXI.extras.AnimatedSprite
         * @deprecated since version 4.2.0
         */
        type MovieClip = extras.AnimatedSprite;
    }
    namespace settings {
        /**
         * @static
         * @name PRECISION
         * @memberof PIXI.settings
         * @see PIXI.PRECISION
         * @deprecated since version 4.4.0
         */
        type PRECISION = number;
    }
}

declare namespace pixi {
    const gl: typeof PIXI.glCore;
}

//tslint:disable-next-line:no-single-declare-module
declare module "pixi.js" {
    export = PIXI;
}
// Type definitions for FPSmeter v0.3.0
// Project: http://darsa.in/fpsmeter/
// Definitions by: Aaron Lampros <http://github.com/alampros/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface FPSMeterOptions {
	interval?: number; 		// Update interval in milliseconds.
	smoothing?: number;		// Spike smoothing strength. 1 means no smoothing.
	show?: string;			// Whether to show 'fps', or 'ms' = frame duration in milliseconds.
	toggleOn?: string;		// Toggle between show 'fps' and 'ms' on this event.
	decimals?: number;		// Number of decimals in FPS number. 1 = 59.9, 2 = 59.94, ...
	maxFps?: number;		// Max expected FPS value.
	threshold?: number;		// Minimal tick reporting interval in milliseconds.
	position?: string;		// Meter position.
	zIndex?: number;		// Meter Z index.
	left?: string;			// Meter left offset.
	top?: string;			// Meter top offset.
	right?: string;			// Meter right offset.
	bottom?: string;		// Meter bottom offset.
	margin?: string;		// Meter margin. Helps with centering the counter when left: 50%;

	theme?: string;			// Meter theme. Build in: 'dark', 'light', 'transparent', 'colorful'.
	heat?: number;			// Allow themes to use coloring by FPS heat. 0 FPS = red, maxFps = green.

	graph?: number;			// Whether to show history graph.
	history?: number;		// How many history states to show in a graph.
}

declare class FPSMeter {
	constructor(anchor?: HTMLElement, options?: FPSMeterOptions);
	public options : FPSMeterOptions;
	public tick(): void;
	public tickStart(): void;
	public pause(): FPSMeter;
	public resume(): FPSMeter;
	public set(name: string, value: any): FPSMeter;
	public showDuration(): FPSMeter;
	public showFps(): FPSMeter;
	public toggle(): FPSMeter;
	public hide(): FPSMeter;
	public show(): FPSMeter;
	public destroy() : void;
}

// Type definitions for lz-string 1.3
// Project: https://github.com/pieroxy/lz-string
// Definitions by: Roman Nikitin <https://github.com/M0ns1gn0r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var LZString: LZStringStatic;

    /**
     * LZ-based compression algorithm for JavaScript.
     */
    interface LZStringStatic {
        /**
         * Compresses input string producing an instance of an "invalid" UTF-16 string.
         * Such string could be stored in localStorage only on webkit
         * browsers (tested on Android, Chrome, Safari).
         *
         * @param uncompressed A string which should be compressed.
         */
        compress(uncompressed: string): string;

        /**
         * Decompresses "invalid" input string created by the method compress().
         *
         * @param compressed A string obtained from a call to compress().
         */
        decompress(compressed: string): string;

        /**
         * Compresses input string producing an instance of a "valid" UTF-16 string,
         * in the sense that all browsers can store them safely.
         *
         * @param uncompressed A string which should be compressed.
         */
        compressToUTF16(uncompressed: string): string;

        /**
         * Decompresses "valid" input string created by the method compressToUTF16().
         *
         * @param compressed A string obtained from a call to compressToUTF16().
         */
        decompressFromUTF16(compressed: string): string;

        /**
         * Compresses input string producing an instance of a ASCII UTF-16 string,
         * which represents the original string encoded in Base64.
         * The result can be safely transported outside the browser with a
         * guarantee that none of the characters produced need to be URL-encoded.
         *
         * @param uncompressed A string which should be compressed.
         */
        compressToBase64(uncompressed: string): string;

        /**
         * Decompresses ASCII UTF-16 input string created by the method compressToBase64().
         *
         * @param compressed A string obtained from a call to compressToBase64().
         */
        decompressFromBase64(compressed: string): string;

        /**
         * produces ASCII strings representing the original string encoded in Base64 with a few
         * tweaks to make these URI safe. Hence, you can send them to the server without thinking
         * about URL encoding them. This saves bandwidth and CPU
         *
         * @param uncompressed A string which should be compressed.
         */
        compressToEncodedURIComponent(uncompressed: string): string;

        /**
         * Decompresses "valid" input string created by the method compressToEncodedURIComponent().
         *
         * @param compressed A string obtained from a call to compressToEncodedURIComponent().
         */
        decompressFromEncodedURIComponent(compressed: string): string;

        /**
         * produces an uint8Array
         *
         * @param uncompressed A string which should be compressed.
         */
        compressToUint8Array(uncompressed: string): Uint8Array;

        /**
         * Decompresses "valid" array created by the method compressToUint8Array().
         *
         * @param compressed A string obtained from a call to compressToUint8Array().
         */
        decompressFromUint8Array(compressed: Uint8Array): string;
    }

declare class Bitmap {
    /**
     * Loads a image file and returns a new bitmap object.
     *
     * @static
     * @method load
     * @param {String} url The image url of the texture
     * @return Bitmap
     */
    static load(url: string): Bitmap;

    /**
     * Takes a snapshot of the game screen and returns a new bitmap object.
     *
     * @static
     * @method snap
     * @param {Stage} stage The stage object
     * @return Bitmap
     */
    static snap(stage: Stage): Bitmap;

    /**
     * The face name of the font.
     *
     * @property fontFace
     * @type String
     */
    fontFace: string;

    /**
     * The size of the font in pixels.
     *
     * @property fontSize
     * @type Number
     */
    fontSize: number;

    /**
     * Whether the font is italic.
     *
     * @property fontItalic
     * @type Boolean
     */
    fontItalic: number;

    /**
     * The color of the text in CSS format.
     *
     * @property textColor
     * @type String
     */
    textColor: string;

    /**
     * The color of the outline of the text in CSS format.
     *
     * @property outlineColor
     * @type String
     */
    outlineColor: string;

    /**
     * The width of the outline of the text.
     *
     * @property outlineWidth
     * @type Number
     */
    outlineWidth: number;

    /**
     * [read-only] The url of the image file.
     *
     * @property url
     * @type String
     */
    url: string;

    /**
     * [read-only] The base texture that holds the image.
     *
     * @property baseTexture
     * @type PIXI.BaseTexture
     */
    baseTexture: PIXI.BaseTexture;

    /**
     * [read-only] The bitmap canvas.
     *
     * @property canvas
     * @type HTMLCanvasElement
     */
    canvas: HTMLCanvasElement;

    /**
     * [read-only] The 2d context of the bitmap canvas.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */
    context: CanvasRenderingContext2D;

    /**
     * [read-only] The width of the bitmap.
     *
     * @property width
     * @type Number
     */
    width: number;

    /**
     * [read-only] The height of the bitmap.
     *
     * @property height
     * @type Number
     */
    height: number;

    /**
     * [read-only] The rectangle of the bitmap.
     *
     * @property rect
     * @type Rectangle
     */
    rect: Rectangle;

    /**
     * Whether the smooth scaling is applied.
     *
     * @property smooth
     * @type Boolean
     */
    smooth: boolean;

    /**
     * The opacity of the drawing object in the range (0, 255).
     *
     * @property paintOpacity
     * @type Number
     */
    paintOpacity: number;

    /**
     * Cache entry, for images. In all cases _url is the same as cacheEntry.key
     * @type CacheEntry
     */
    cacheEntry: CacheEntry;

    /**
     * The basic object that represents an image.
     *
     * @class Bitmap
     * @constructor
     * @param {Number} width The width of the bitmap
     * @param {Number} height The height of the bitmap
     */
    constructor();
    constructor(width: number, height: number);

    /**
     * Checks whether the bitmap is ready to render.
     *
     * @method isReady
     * @return {Boolean} True if the bitmap is ready to render
     */
    isReady(): boolean;

    /**
     * Checks whether a loading error has occurred.
     *
     * @method isError
     * @return {Boolean} True if a loading error has occurred
     */
    isError(): boolean;

    /**
     * Resizes the bitmap.
     *
     * @method resize
     * @param {Number} width The new width of the bitmap
     * @param {Number} height The new height of the bitmap
     */
    resize(width: number, height: number): void;

    /**
     * Performs a block transfer.
     *
     * @method blt
     * @param {Bitmap} source The bitmap to draw
     * @param {Number} sx The x coordinate in the source
     * @param {Number} sy The y coordinate in the source
     * @param {Number} sw The width of the source image
     * @param {Number} sh The height of the source image
     * @param {Number} dx The x coordinate in the destination
     * @param {Number} dy The y coordinate in the destination
     * @param {Number} [dw=sw] The width to draw the image in the destination
     * @param {Number} [dh=sh] The height to draw the image in the destination
     */
    blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number,
                        dx: number, dy: number, dw?: number, dh?: number): void;

    /**
     * Returns pixel color at the specified point.
     *
     * @method getPixel
     * @param {Number} x The x coordinate of the pixel in the bitmap
     * @param {Number} y The y coordinate of the pixel in the bitmap
     * @return {String} The pixel color (hex format)
     */
    getPixel(x: number, y: number): string;

    /**
     * Returns alpha pixel value at the specified point.
     *
     * @method getAlphaPixel
     * @param {Number} x The x coordinate of the pixel in the bitmap
     * @param {Number} y The y coordinate of the pixel in the bitmap
     * @return {String} The alpha value
     */
    getAlphaPixel(x: number, y: number): string;

    /**
     * Clears the specified rectangle.
     *
     * @method clearRect
     * @param {Number} x The x coordinate for the upper-left corner
     * @param {Number} y The y coordinate for the upper-left corner
     * @param {Number} width The width of the rectangle to clear
     * @param {Number} height The height of the rectangle to clear
     */
    clearRect(x: number, y: number, width: number, height: number): void;

    /**
     * Clears the entire bitmap.
     *
     * @method clear
     */
    clear(): void;

    /**
     * Fills the specified rectangle.
     *
     * @method fillRect
     * @param {Number} x The x coordinate for the upper-left corner
     * @param {Number} y The y coordinate for the upper-left corner
     * @param {Number} width The width of the rectangle to clear
     * @param {Number} height The height of the rectangle to clear
     * @param {String} color The color of the rectangle in CSS format
     */
    fillRect(x: number, y: number, width: number, height: number, color: string): void;

    /**
     * Fills the entire bitmap.
     *
     * @method fillAll
     * @param {String} color The color of the rectangle in CSS format
     */
    fillAll(color: string): void;

    /**
     * Draws the rectangle with a gradation.
     *
     * @method gradientFillRect
     * @param {Number} x The x coordinate for the upper-left corner
     * @param {Number} y The y coordinate for the upper-left corner
     * @param {Number} width The width of the rectangle to clear
     * @param {Number} height The height of the rectangle to clear
     * @param {String} color1 The start color of the gradation
     * @param {String} color2 The end color of the gradation
     * @param {Boolean} vertical Whether it draws a vertical gradient
     */
    gradientFillRect(x: number, y: number, width: number, height: number,
                     color1: string, color2: string, vertical?: boolean): void;

    /**
     * Draw the filled circle.
     *
     * @method drawCircle
     * @param {Number} x The x coordinate of the center of the circle
     * @param {Number} y The y coordinate of the center of the circle
     * @param {Number} radius The radius of the circle
     * @param {String} color The color of the circle in CSS format
     */
    drawCircle(x: number, y: number, radius: number, color: string): void;

    /**
     * Draws the outline text to the bitmap.
     *
     * @method drawText
     * @param {String} text The text that will be drawn
     * @param {Number} x The x coordinate for the left of the text
     * @param {Number} y The y coordinate for the top of the text
     * @param {Number} maxWidth The maximum allowed width of the text
     * @param {Number} lineHeight The height of the text line
     * @param {String} align The alignment of the text
     */
    drawText(text: string, x: number, y: number,
             maxWidth: number, lineHeight: number, align: string): void;

    /**
     * Returns the width of the specified text.
     *
     * @method measureTextWidth
     * @param {String} text The text to be measured
     * @return {Number} The width of the text in pixels
     */
    measureTextWidth(text: string): number;

    /**
     * Changes the color tone of the entire bitmap.
     *
     * @method adjustTone
     * @param {Number} r The red strength in the range (-255, 255)
     * @param {Number} g The green strength in the range (-255, 255)
     * @param {Number} b The blue strength in the range (-255, 255)
     */
    adjustTone(r: number, g: number, b: number): void;

    /**
     * Rotates the hue of the entire bitmap.
     *
     * @method rotateHue
     * @param {Number} offset The hue offset in 360 degrees
     */
    rotateHue(offset: number): void;

    /**
     * Applies a blur effect to the bitmap.
     *
     * @method blur
     */
    blur(): void;

    /**
     * Add a callback function that will be called when the bitmap is loaded.
     *
     * @method addLoadListener
     * @param {Function} listner The callback function
     */
    addLoadListener(listner: () => void): void;

    /**
     * touch the resource
     * @method touch
     */
    touch(): void;

    /**
     * Performs a block transfer, using assumption that original image was not modified (no hue)
     *
     * @method blt
     * @param {Bitmap} source The bitmap to draw
     * @param {Number} sx The x coordinate in the source
     * @param {Number} sy The y coordinate in the source
     * @param {Number} sw The width of the source image
     * @param {Number} sh The height of the source image
     * @param {Number} dx The x coordinate in the destination
     * @param {Number} dy The y coordinate in the destination
     * @param {Number} [dw=sw] The width to draw the image in the destination
     * @param {Number} [dh=sh] The height to draw the image in the destination
     */
    bltImage(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

    protected _canvas: HTMLCanvasElement;
    protected _context: CanvasRenderingContext2D;
    protected _baseTexture: PIXI.BaseTexture;
    protected _image: HTMLImageElement;
    protected _url: string;
    protected _paintOpacity: number;
    protected _smooth: boolean;
    protected _loadListeners: () => void;
    protected _isLoading: boolean;
    protected _hasError: boolean;

    /**
     * @method _makeFontNameText
     * @return {String} FontNameText
     * @private
     */
    protected _makeFontNameText(): string;

    /**
     * @method _drawTextOutline
     * @param {String} text
     * @param {Number} tx
     * @param {Number} ty
     * @param {Number} maxWidth
     * @private
     */
    protected _drawTextOutline(text: number, tx: number, ty: number, maxWidth: number): void;

    /**
     * @method _drawTextBody
     * @param {String} text
     * @param {Number} tx
     * @param {Number} ty
     * @param {Number} maxWidth
     * @private
     */
    protected _drawTextBody(text: string, tx: number, ty: number, maxWidth: number): void;

    /**
     * @method _onLoad
     * @private
     */
    protected _onLoad(): void;

    /**
     * @method _callLoadListeners
     * @private
     */
    protected _callLoadListeners(): void;

    /**
     * @method _onError
     * @private
     */
    protected _onError(): void;

    /**
     * @method _setDirty
     * @private
     */
    protected _setDirty(): void;
}

/**
 * The static class that carries out graphics processing.
 *
 * @class Graphics
 */
interface GraphicsStatic {
    /**
     * The total frame count of the game screen.
     *
     * @static
     * @property frameCount
     * @type Number
     */
    frameCount: number;

    /**
     * The alias of PIXI.blendModes.NORMAL.
     *
     * @static
     * @property BLEND_NORMAL
     * @type Number
     * @final
     */
    BLEND_NORMAL: number;

    /**
     * The alias of PIXI.blendModes.ADD.
     *
     * @static
     * @property BLEND_ADD
     * @type Number
     * @final
     */
    BLEND_ADD: number;

    /**
     * The alias of PIXI.blendModes.MULTIPLY.
     *
     * @static
     * @property BLEND_MULTIPLY
     * @type Number
     * @final
     */
    BLEND_MULTIPLY: number;

    /**
     * The alias of PIXI.blendModes.SCREEN.
     *
     * @static
     * @property BLEND_SCREEN
     * @type Number
     * @final
     */
    BLEND_SCREEN: number;

    /**
     * The width of the game screen.
     *
     * @static
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the game screen.
     *
     * @static
     * @property height
     * @type Number
     */
    height: number;

    /**
     * The width of the window display area.
     *
     * @static
     * @property boxWidth
     * @type Number
     */
    boxWidth: number;

    /**
     * The height of the window display area.
     *
     * @static
     * @property boxHeight
     * @type Number
     */
    boxHeight: number;

    /**
     * The zoom scale of the game screen.
     *
     * @static
     * @property scale
     * @type Number
     */
    scale: number;

    /**
     * Initializes the graphics system.
     *
     * @static
     * @method initialize
     * @param {Number} width The width of the game screen
     * @param {Number} height The height of the game screen
     * @param {String} type The type of the renderer.
     *                 'canvas', 'webgl', or 'auto'.
     */
    initialize(): void;
    initialize(width: number, height: number, type: string): void;

    /**
     * Marks the beginning of each frame for FPSMeter.
     *
     * @static
     * @method tickStart
     */
    tickStart(): void;

    /**
     * Marks the end of each frame for FPSMeter.
     *
     * @static
     * @method tickEnd
     */
    tickEnd(): void;

    /**
     * Renders the stage to the game screen.
     *
     * @static
     * @method render
     * @param {Stage} stage The stage object to be rendered
     */
    render(stage?: Stage): void;

    /**
     * Checks whether the renderer type is WebGL.
     *
     * @static
     * @method isWebGL
     * @return {Boolean} True if the renderer type is WebGL
     */
    isWebGL(): boolean;

    /**
     * Checks whether the current browser supports WebGL.
     *
     * @static
     * @method hasWebGL
     * @return {Boolean} True if the current browser supports WebGL.
     */
    hasWebGL(): boolean;

    /**
     * Checks whether the canvas blend mode 'difference' is supported.
     *
     * @static
     * @method canUseDifferenceBlend
     * @return {Boolean} True if the canvas blend mode 'difference' is supported
     */
    canUseDifferenceBlend(): boolean;

    /**
     * Checks whether the canvas blend mode 'saturation' is supported.
     *
     * @static
     * @method canUseSaturationBlend
     * @return {Boolean} True if the canvas blend mode 'saturation' is supported
     */
    canUseSaturationBlend(): boolean;

    /**
     * Sets the source of the "Now Loading" image.
     *
     * @static
     * @method setLoadingImage
     * @param {String} Path of image
     */
    setLoadingImage(src: string);

    /**
     * Initializes the counter for displaying the "Now Loading" image.
     *
     * @static
     * @method startLoading
     */
    startLoading(): void;

    /**
     * Increments the loading counter and displays the "Now Loading" image if necessary.
     *
     * @static
     * @method updateLoading
     */
    updateLoading(): void;

    /**
     * Erases the "Now Loading" image.
     *
     * @static
     * @method endLoading
     */
    endLoading(): void;

    /**
     * Displays the error text to the screen.
     *
     * @static
     * @method printError
     * @param {String} name The name of the error
     * @param {String} message The message of the error
     */
    printError(name: string, message: string): void;

    /**
     * Shows the FPSMeter element.
     *
     * @static
     * @method showFps
     */
    showFps(): void;

    /**
     * Hides the FPSMeter element.
     *
     * @static
     * @method hideFps
     */
    hideFps(): void;

    /**
     * Loads a font file.
     *
     * @static
     * @method loadFont
     * @param {String} name The face name of the font
     * @param {String} url The url of the font file
     */
    loadFont(name: string, url: string): void;

    /**
     * Checks whether the font file is loaded.
     *
     * @static
     * @method isFontLoaded
     * @param {String} name The face name of the font
     * @return {Boolean} True if the font file is loaded
     */
    isFontLoaded(name: string): boolean;

    /**
     * Starts playback of a video.
     *
     * @static
     * @method playVideo
     * @param {String} src
     */
    playVideo(src: string): void;

    /**
     * Checks whether the video is playing.
     *
     * @static
     * @method isVideoPlaying
     * @return {Boolean} True if the video is playing
     */
    isVideoPlaying(): boolean;

    /**
     * Checks whether the browser can play the specified video type.
     *
     * @static
     * @method canPlayVideoType
     * @param {String} type The video type to test support for
     * @return {Boolean} True if the browser can play the specified video type
     */
    canPlayVideoType(type: string): boolean;

    /**
     * Converts an x coordinate on the page to the corresponding
     * x coordinate on the canvas area.
     *
     * @static
     * @method pageToCanvasX
     * @param {Number} x The x coordinate on the page to be converted
     * @return {Number} The x coordinate on the canvas area
     */
    pageToCanvasX(x: number): number;

    /**
     * Converts a y coordinate on the page to the corresponding
     * y coordinate on the canvas area.
     *
     * @static
     * @method pageToCanvasY
     * @param {Number} y The y coordinate on the page to be converted
     * @return {Number} The y coordinate on the canvas area
     */
    pageToCanvasY(y: number): number;

    /**
     * Checks whether the specified point is inside the game canvas area.
     *
     * @static
     * @method isInsideCanvas
     * @param {Number} x The x coordinate on the canvas area
     * @param {Number} y The y coordinate on the canvas area
     * @return {Boolean} True if the specified point is inside the game canvas area
     */
    isInsideCanvas(x: number, y: number): boolean;

    /**
     * Calls pixi.js garbage collector
     */
    callGC(): void;



    _width: number;
    _height: number;
    _rendererType: string;
    _boxWidth: number;
    _boxHeight: number;
    _scale: number;
    _realScale : number;
    _errorPrinter: boolean;
    _canvas: HTMLCanvasElement;
    _video: HTMLVideoElement;
    _upperCanvas: HTMLCanvasElement;
    _renderer: PIXI.SystemRenderer;
    _fpsMeter: FPSMeter;
    _modeBox: HTMLDivElement;
    _skipCount: number;
    _maxSkip: number;
    _rendered: boolean;
    _loadingImage: HTMLImageElement;
    _loadingCount: number;
    _fpsMeterToggled: boolean;
    _stretchEnabled: boolean;
    _canUseDifferenceBlend: boolean;
    _canUseSaturationBlend: boolean;
    _hiddenCanvas: HTMLCanvasElement;

    /**
     * @static
     * @method _createAllElements
     * @private
     */
    _createAllElements(): void;

    /**
     * @static
     * @method _updateAllElements
     * @private
     */
    _updateAllElements(): void;

    /**
     * @static
     * @method _updateRealScale
     * @private
     */
    _updateRealScale(): void;

    /**
     * @static
     * @method _makeErrorHtml
     * @param {String} name
     * @param {String} message
     * @return {String}
     * @private
     */
    _makeErrorHtml(name: string, message: string): void;

    /**
     * @static
     * @method _defaultStretchMode
     * @private
     */
    _defaultStretchMode(): boolean;

    /**
     * @static
     * @method _testCanvasBlendModes
     * @private
     */
    _testCanvasBlendModes(): void;

    /**
     * @static
     * @method _modifyExistingElements
     * @private
     */
    _modifyExistingElements(): void;

    /**
     * @static
     * @method _createErrorPrinter
     * @private
     */
    _createErrorPrinter(): void;

    /**
     * @static
     * @method _updateErrorPrinter
     * @private
     */
    _updateErrorPrinter(): void;

    /**
     * @static
     * @method _createCanvas
     * @private
     */
    _createCanvas(): void;

    /**
     * @static
     * @method _updateCanvas
     * @private
     */
    _updateCanvas(): void;

    /**
     * @static
     * @method _createVideo
     * @private
     */
    _createVideo(): void;

    /**
     * @static
     * @method _updateVideo
     * @private
     */
    _updateVideo(): void;

    /**
     * @static
     * @method _createUpperCanvas
     * @private
     */
    _createUpperCanvas(): void;

    /**
     * @static
     * @method _updateUpperCanvas
     * @private
     */
    _updateUpperCanvas(): void;

    /**
     * @static
     * @method _clearUpperCanvas
     * @private
     */
    _clearUpperCanvas(): void;

    /**
     * @static
     * @method _paintUpperCanvas
     * @private
     */
    _paintUpperCanvas(): void;

    /**
     * @static
     * @method _createRenderer
     * @private
     */
    _createRenderer(): void;

    /**
     * @static
     * @method _updateRenderer
     * @private
     */
    _updateRenderer(): void;

    /**
     * @static
     * @method _createFPSMeter
     * @private
     */
    _createFPSMeter(): void;

    /**
     * @static
     * @method _createModeBox
     * @private
     */
    _createModeBox(): void;

    /**
     * @static
     * @method _createGameFontLoader
     * @private
     */
    _createGameFontLoader(): void;

    /**
     * @static
     * @method _createFontLoader
     * @param {String} name
     * @private
     */
    _createFontLoader(name: string): void;

    /**
     * @static
     * @method _centerElement
     * @param {HTMLCanvasElement} element
     * @private
     */
    _centerElement(element: HTMLCanvasElement): void;

    /**
     * @static
     * @method _disableTextSelection
     * @private
     */
    _disableTextSelection(): void;

    /**
     * @static
     * @method _disableContextMenu
     * @private
     */
    _disableContextMenu(): void;

    /**
     * @static
     * @method _applyCanvasFilter
     * @private
     */
    _applyCanvasFilter(): void;

    /**
     * @static
     * @method _onVideoLoad
     * @private
     */
    _onVideoLoad(): void;

    /**
     * @static
     * @method _onVideoError
     * @private
     */
    _onVideoError(): void;

    /**
     * @static
     * @method _onVideoEnd
     * @private
     */
    _onVideoEnd(): void;

    /**
     * @static
     * @method _updateVisibility
     * @param {Boolean} videoVisible
     * @private
     */
    _updateVisibility(videoVisible: boolean): void;

    /**
     * @static
     * @method _isVideoVisible
     * @return {Boolean}
     * @private
     */
    _isVideoVisible(): boolean;

    /**
     * @static
     * @method _setupEventHandlers
     * @private
     */
    _setupEventHandlers(): void;

    /**
     * @static
     * @method _onWindowResize
     * @private
     */
    _onWindowResize(): void;

    /**
     * @static
     * @method _onKeyDown
     * @param {KeyboardEvent} event
     * @private
     */
    _onKeyDown(event: KeyboardEvent): void;

    /**
     * @static
     * @method _switchFPSMeter
     * @private
     */
    _switchFPSMeter(): void;

    /**
     * @static
     * @method _switchStretchMode
     * @return {Boolean}
     * @private
     */
    _switchStretchMode(): void;

    /**
     * @static
     * @method _switchFullScreen
     * @private
     */
    _switchFullScreen(): void;

    /**
     * @static
     * @method _isFullScreen
     * @return {Boolean}
     * @private
     */
    _isFullScreen(): boolean;

    /**
     * @static
     * @method _requestFullScreen
     * @private
     */
    _requestFullScreen(): void;

    /**
     * @static
     * @method _cancelFullScreen
     * @private
     */
    _cancelFullScreen(): void;
}
declare var Graphics: GraphicsStatic;

/**
 * The static class that handles HTML5 Audio.
 *
 * @class Html5Audio
 * @constructor
 */
interface Html5AudioStatic {
    _initialized: boolean;
    _unlocked: boolean;
    _audioElement: HTMLAudioElement;
    _gainTweenInterval: number;
    _tweenGain: number;
    _tweenTargetGain: number;
    _tweenGainStep: number;
    _staticSePath: boolean;
    _volume: number;
    _loadListeners: Array<() => void>;
    _hasError: boolean;
    _autoPlay: boolean;
    _isLoading: boolean;
    _buffered: boolean;

    /**
     * [read-only] The url of the audio file.
     *
     * @property url
     * @type String
     */
    url: string;

    /**
     * The volume of the audio.
     *
     * @property volume
     * @type Number
     */
    volume: number;

    /**
     * Sets up the Html5 Audio.
     *
     * @static
     * @method setup
     * @param {String} url The url of the audio file
     */
    setup(url: string): void;

    /**
     * Initializes the audio system.
     *
     * @static
     * @method initialize
     * @return {Boolean} True if the audio system is available
     */
    initialize(): void;

    /**
     * Clears the audio data.
     *
     * @static
     * @method clear
     */
    clear(): void;

    /**
     * Set the URL of static se.
     *
     * @static
     * @param {String} url
     */
    setStaticSe(url: string): void;

    /**
     * Checks whether the audio data is ready to play.
     *
     * @static
     * @method isReady
     * @return {Boolean} True if the audio data is ready to play
     */
    isReady(): boolean;

    /**
     * Checks whether a loading error has occurred.
     *
     * @static
     * @method isError
     * @return {Boolean} True if a loading error has occurred
     */
    isError(): boolean;

    /**
     * Checks whether the audio is playing.
     *
     * @static
     * @method isPlaying
     * @return {Boolean} True if the audio is playing
     */
    isPlaying(): boolean;

    /**
     * Plays the audio.
     *
     * @static
     * @method play
     * @param {Boolean} loop Whether the audio data play in a loop
     * @param {Number} offset The start position to play in seconds
     */
    play(loop: boolean, offset: number): void;

    /**
     * Stops the audio.
     *
     * @static
     * @method stop
     */
    stop(): void;

    /**
     * Performs the audio fade-in.
     *
     * @static
     * @method fadeIn
     * @param {Number} duration Fade-in time in seconds
     */
    fadeIn(duration: number): void;

    /**
     * Performs the audio fade-out.
     *
     * @static
     * @method fadeOut
     * @param {Number} duration Fade-out time in seconds
     */
    fadeOut(duration: number): void;

    /**
     * Gets the seek position of the audio.
     *
     * @static
     * @method seek
     */
    seek(): void;

    /**
     * Add a callback function that will be called when the audio data is loaded.
     *
     * @static
     * @method addLoadListener
     * @param {Function} listner The callback function
     */
    addLoadListener(listner: () => void): void;

    /**
     * @static
     * @method _setupEventHandlers
     * @private
     */
    _setupEventHandlers(): void;

    /**
     * @static
     * @method _onTouchStart
     * @private
     */
    _onTouchStart(): void;

    /**
     * @static
     * @method _onVisibilityChange
     * @private
     */
    _onVisibilityChange(): void;

    /**
     * @static
     * @method _onLoadedData
     * @private
     */
    _onLoadedData(): void;

    /**
     * @static
     * @method _onError
     * @private
     */
    _onError(): void;

    /**
     * @static
     * @method _onEnded
     * @private
     */
    _onEnded(): void;

    /**
     * @static
     * @method _onHide
     * @private
     */
    _onHide(): void;

    /**
     * @static
     * @method _onShow
     * @private
     */
    _onShow(): void;

    /**
     * @static
     * @method _load
     * @param {String} url
     * @private
     */
    _load(url: string): void;

    /**
     * @static
     * @method _startPlaying
     * @param {Boolean} loop
     * @param {Number} offset
     * @private
     */
    _startPlaying(loop: boolean, offset: number): void;

    /**
     * @static
     * @method _onLoad
     * @private
     */
    _onLoad(): void;

    /**
     * @static
     * @method _startGainTween
     * @params {Number} duration
     * @private
     */
    _startGainTweenfunction(duration: number): void;

    /**
     * @static
     * @method _applyTweenValue
     * @param {Number} volume
     * @private
     */
    _applyTweenValue(volume: number): void;
}
declare var Html5Audio: Html5AudioStatic;

/**
 * The static class that handles input data from the keyboard and gamepads.
 *
 * @class Input
 */
interface InputStatic {
    _currentState: {[key: string]: boolean};
    _previousState: {[key: string]: boolean};
    _gamepadStates: Array<Array<boolean>>;
    _latestButton: string;
    _pressedTime: number;
    _dir4: number;
    _dir8: number;
    _preferredAxis: string;
    _date: number;

    /**
     * The wait time of the key repeat in frames.
     *
     * @static
     * @property keyRepeatWait
     * @type Number
     */
    keyRepeatWait: number;

    /**
     * The interval of the key repeat in frames.
     *
     * @static
     * @property keyRepeatInterval
     * @type Number
     */
    keyRepeatInterval: number;

    /**
     * A hash table to convert from a virtual key code to a mapped key name.
     *
     * @static
     * @property keyMapper
     * @type Object
     */
    keyMapper: {[key: number]: string};

    /**
     * A hash table to convert from a gamepad button to a mapped key name.
     *
     * @static
     * @property gamepadMapper
     * @type Object
     */
    gamepadMapper: {[key: number]: string};

    /**
     * [read-only] The four direction value as a number of the numpad, or 0 for neutral.
     *
     * @static
     * @property dir4
     * @type Number
     */
    dir4: number;

    /**
     * [read-only] The eight direction value as a number of the numpad, or 0 for neutral.
     *
     * @static
     * @property dir8
     * @type Number
     */
    dir8: number;

    /**
     * [read-only] The time of the last input in milliseconds.
     *
     * @static
     * @property date
     * @type Number
     */
    date: number;

    /**
     * Initializes the input system.
     *
     * @static
     * @method initialize
     */
    initialize(): void;

    /**
     * Clears all the input data.
     *
     * @static
     * @method clear
     */
    clear(): void;

    /**
     * Updates the input data.
     *
     * @static
     * @method update
     */
    update(): void;

    /**
     * Checks whether a key is currently pressed down.
     *
     * @static
     * @method isPressed
     * @param {String} keyName The mapped name of the key
     * @return {Boolean} True if the key is pressed
     */
    isPressed(keyName: string): boolean;

    /**
     * Checks whether a key is just pressed.
     *
     * @static
     * @method isTriggered
     * @param {String} keyName The mapped name of the key
     * @return {Boolean} True if the key is triggered
     */
    isTriggered(keyName: string): boolean;

    /**
     * Checks whether a key is just pressed or a key repeat occurred.
     *
     * @static
     * @method isRepeated
     * @param {String} keyName The mapped name of the key
     * @return {Boolean} True if the key is repeated
     */
    isRepeated(keyName: string): boolean;

    /**
     * Checks whether a key is kept depressed.
     *
     * @static
     * @method isLongPressed
     * @param {String} keyName The mapped name of the key
     * @return {Boolean} True if the key is long-pressed
     */
    isLongPressed(keyName: string): boolean;

    /**
     * @static
     * @method _wrapNwjsAlert
     * @private
     */
    _wrapNwjsAlert(): void;

    /**
     * @static
     * @method _setupEventHandlers
     * @private
     */
    _setupEventHandlers(): void;

    /**
     * @static
     * @method _onKeyDown
     * @param {KeyboardEvent} event
     * @private
     */
    _onKeyDown(event: KeyboardEvent): void;

    /**
     * @static
     * @method _shouldPreventDefault
     * @param {Number} keyCode
     * @return {Boolean}
     * @private
     */
    _shouldPreventDefault(keyCode: number): boolean;

    /**
     * @static
     * @method _onKeyUp
     * @param {KeyboardEvent} event
     * @private
     */
    _onKeyUp(event: KeyboardEvent): void;

    /**
     * @static
     * @method _onLostFocus
     * @private
     */
    _onLostFocus(): void;

    /**
     * @static
     * @method _pollGamepads
     * @private
     */
    _pollGamepads(): void;

    /**
     * @static
     * @method _updateGamepadState
     * @param {Gamepad} gamepad
     * @private
     */
    _updateGamepadState(gamepad: Gamepad): void;

    /**
     * @static
     * @method _updateDirection
     * @private
     */
    _updateDirection(): void;

    /**
     * @static
     * @method _signX
     * @return {Number}
     * @private
     */
    _signX(): number;

    /**
     * @static
     * @method _signY
     * @return {Number}
     * @private
     */
    _signY(): number;

    /**
     * @static
     * @method _makeNumpadDirection
     * @param {Number} x
     * @param {Number} y
     * @return {Number}
     * @private
     */
    _makeNumpadDirection(x: number, y: number): number;

    /**
     * @static
     * @method _isEscapeCompatible
     * @param {String} keyName
     * @return {Boolean}
     * @private
     */
    _isEscapeCompatible(keyName: string): boolean;
}
declare var Input: InputStatic;

/**
 * This is not a class, but contains some methods that will be added to the
 * standard Javascript objects.
 *
 * @class JsExtensions
 */
declare class JsExtensions {}

interface Array<T> {
    /**
     * Makes a shallow copy of the array.
     *
     * @method Array.prototype.clone
     * @return {Array} A shallow copy of the array
     */
    clone(): Array<T>;

    /**
     * Checks whether the array contains a given element.
     *
     * @method Array.prototype.contains
     * @param {Any} element The element to search for
     * @return {Boolean} True if the array contains a given element
     */
    contains(element: T): boolean;

    /**
     * Checks whether the two arrays are same.
     *
     * @method Array.prototype.equals
     * @param {Array} array The array to compare to
     * @return {Boolean} True if the two arrays are same
     */
    equals(array: Array<any>): boolean;
}

interface Math {
    /**
     * Generates a random integer in the range (0, max-1).
     *
     * @static
     * @method Math.randomInt
     * @param {Number} max The upper boundary (excluded)
     * @return {Number} A random integer
     */
    randomInt(max: number): number;
}

interface Number {
    /**
     * Returns a number whose value is limited to the given range.
     *
     * @method Number.prototype.clamp
     * @param {Number} min The lower boundary
     * @param {Number} max The upper boundary
     * @return {Number} A number in the range (min, max)
     */
    clamp(min: number, max: number): number;

    /**
     * Returns a modulo value which is always positive.
     *
     * @method Number.prototype.mod
     * @param {Number} n The divisor
     * @return {Number} A modulo value
     */
    mod(n: number): number;

    /**
     * Makes a number string with leading zeros.
     *
     * @method Number.prototype.padZero
     * @param {Number} length The length of the output string
     * @return {String} A string with leading zeros
     */
    padZero(length: number): string;
}

interface String {
    /**
     * Checks whether the string contains a given string.
     *
     * @method String.prototype.contains
     * @param {String} string The string to search for
     * @return {Boolean} True if the string contains a given string
     */
    contains(string): boolean;

    /**
     * Replaces %1, %2 and so on in the string to the arguments.
     *
     * @method String.prototype.format
     * @param {Any} ...args The objects to format
     * @return {String} A formatted string
     */
    format(...args: Array<any>): string;

    /**
     * Makes a number string with leading zeros.
     *
     * @method String.prototype.padZero
     * @param {Number} length The length of the output string
     * @return {String} A string with leading zeros
     */
    padZero(length: number): string;
}

declare class Point extends PIXI.Point {
    /**
     * The point class.
     *
     * @class Point
     * @constructor
     * @param {Number} x The x coordinate
     * @param {Number} y The y coordinate
     */
    constructor(x?: number, y?: number);

    /**
     * The x coordinate.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate.
     *
     * @property y
     * @type Number
     */
    y: number;
}

declare class Rectangle extends PIXI.Rectangle {
    /**
     * @static
     * @property emptyRectangle
     * @type Rectangle
     */
    static emptyRectangle: Rectangle;

    /**
     * The rectangle class.
     *
     * @class Rectangle
     * @constructor
     * @param {Number} x The x coordinate for the upper-left corner
     * @param {Number} y The y coordinate for the upper-left corner
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     */
    constructor(x?: number, y?: number, width?: number, height?: number);

    /**
     * The x coordinate for the upper-left corner.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate for the upper-left corner.
     *
     * @property y
     * @type Number
     */
    y: number;

    /**
     * The width of the rectangle.
     *
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the rectangle.
     *
     * @property height
     * @type Number
     */
    height: number;
}

/**
 * The static class that handles JSON with object information.
 *
 * @class JsonEx
 */
interface JsonExStatic {
    /**
     * The maximum depth of objects.
     *
     * @static
     * @property maxDepth
     * @type Number
     * @default 100
     */
    maxDepth: number;

    /**
     * Makes a deep copy of the specified object.
     *
     * @static
     * @method makeDeepCopy
     * @param {Object} object The object to be copied
     * @return {Object} The copied object
     */
    makeDeepCopy(object: any): any;

    /**
     * Converts an object to a JSON string with object information.
     *
     * @static
     * @method stringify
     * @param {Object} object The object to be converted
     * @return {String} The JSON string
     */
    stringify(object: any): string;

    /**
     * Parses a JSON string and reconstructs the corresponding object.
     *
     * @static
     * @method parse
     * @param {String} json The JSON string
     * @return {Object} The reconstructed object
     */
    parse(json: string): any;

    /**
     * @static
     * @method _encode
     * @param {Object} value
     * @param {Number} depth
     * @return {Object}
     * @private
     */
    _encode(value: any, depth: number): any;

    /**
     * @static
     * @method _decode
     * @param {Object} value
     * @return {Object}
     * @private
     */
    _decode(value: any): any;

    /**
     * @static
     * @method _getConstructorName
     * @param {Object} value
     * @return {String}
     * @private
     */
    _getConstructorName(value: any): string;

    /**
     * @static
     * @method _resetPrototype
     * @param {Object} value
     * @param {Object} prototype
     * @return {Object}
     * @private
     */
    _resetPrototype(value: any, prototype: any): any;
}

/**
 * The static class that handles JSON with object information.
 *
 * @class JsonEx
 */
declare var JsonEx: JsonExStatic;

declare class ScreenSprite extends PIXI.Sprite {
    /**
     * The opacity of the sprite (0 to 255).
     *
     * @property opacity
     * @type Number
     */
    opacity: number;

    /**
     * The sprite which covers the entire game screen.
     *
     * @class ScreenSprite
     * @constructor
     */
    constructor();

    /**
     * Sets black to the color of the screen sprite.
     *
     * @method setBlack
     */
    setBlack(): void;

    /**
     * Sets white to the color of the screen sprite.
     *
     * @method setWhite
     */
    setWhite(): void;

    /**
     * Sets the color of the screen sprite by values.
     *
     * @method setColor
     * @param {Number} r The red value in the range (0, 255)
     * @param {Number} g The green value in the range (0, 255)
     * @param {Number} b The blue value in the range (0, 255)
     */
    setColor(r?: number, g?: number, b?: number): void;

    protected _graphics: PIXI.Graphics;
    protected _red: number;
    protected _green: number;
    protected _blue: number;
    protected _colorText: string;
}

declare class Sprite extends PIXI.Sprite {
    /**
     * Number of the created objects.
     *
     * @static
     * @property _counter
     * @type Number
     */
    static _counter: number;

    /**
     * The image for the sprite.
     *
     * @property bitmap
     * @type Bitmap
     */
    bitmap: Bitmap;

    /**
     * The width of the sprite without the scale.
     *
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the sprite without the scale.
     *
     * @property height
     * @type Number
     */
    height: number;

    /**
     * The opacity of the sprite (0 to 255).
     *
     * @property opacity
     * @type Number
     */
    opacity: number;

    /**
     * The visibility of the sprite.
     *
     * @property visible
     * @type Boolean
     */
    visible: boolean;

    /**
     * The x coordinate of the sprite.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate of the sprite.
     *
     * @property y
     * @type Number
     */
    y: number;

    /**
     * The origin point of the sprite. (0,0) to (1,1).
     *
     * @property anchor
     * @type Point
     */
    point: Point;

    /**
     * The scale factor of the sprite.
     *
     * @property scale
     * @type Point
     */
    scale: Point;

    /**
     * The rotation of the sprite in radians.
     *
     * @property rotation
     * @type Number
     */
    rotation: number;

    /**
     * The blend mode to be applied to the sprite.
     *
     * @property blendMode
     * @type Number
     */
    blendMode: number;

    /**
     * Sets the filters for the sprite.
     *
     * @property filters
     * @type Array<PIXI.Filter>
     */
    filters: Array<PIXI.Filter>;

    /**
     * [read-only] The array of children of the sprite.
     *
     * @property children
     * @type Array<PIXI.DisplayObject>
     */
    children: Array<PIXI.DisplayObject>;

    /**
     * [read-only] The object that contains the sprite.
     *
     * @property parent
     * @type PIXI.DisplayObjectContainer
     */
    parent: PIXI.Container;

    spriteId: number;
    opaque: boolean;
    voidFilter: PIXI.Filter;

    /**
     * The basic object that is rendered to the game screen.
     *
     * @class Sprite
     * @constructor
     * @param {Bitmap} bitmap The image for the sprite
     */
    constructor(bitmap?: Bitmap);

    /**
     * Updates the sprite for each frame.
     *
     * @method update
     */
    update(): void;

    /**
     * @method updateTransform
     * @private
     */
    updateTransform(): void;

    /**
     * Sets the x and y at once.
     *
     * @method move
     * @param {Number} x The x coordinate of the sprite
     * @param {Number} y The y coordinate of the sprite
     */
    move(x: number, y: number): void;

    /**
     * Sets the rectagle of the bitmap that the sprite displays.
     *
     * @method setFrame
     * @param {Number} x The x coordinate of the frame
     * @param {Number} y The y coordinate of the frame
     * @param {Number} width The width of the frame
     * @param {Number} height The height of the frame
     */
    setFrame(x: number, y: number, width: number, height: number): void;

    /**
     * Gets the blend color for the sprite.
     *
     * @method getBlendColor
     * @return {Array} The blend color [r, g, b, a]
     */
    getBlendColor(): Array<number>;

    /**
     * Sets the blend color for the sprite.
     *
     * @method setBlendColor
     * @param {Array} color The blend color [r, g, b, a]
     */
    setBlendColor(color: Array<number>): void;

    /**
     * Gets the color tone for the sprite.
     *
     * @method getColorTone
     * @return {Array} The color tone [r, g, b, gray]
     */
    getColorTone(): Array<number>;

    /**
     * Sets the color tone for the sprite.
     *
     * @method setColorTone
     * @param {Array} tone The color tone [r, g, b, gray]
     */
    setColorTone(tone: Array<number>): void;

    /**
     * Adds a child to the container.
     *
     * @method addChild
     * @param {PIXI.DisplayObject} child The child to add
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Adds a child to the container at a specified index.
     *
     * @method addChildAt
     * @param {PIXI.DisplayObject} child The child to add
     * @param {Number} index The index to place the child in
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

    /**
     * Removes a child from the container.
     *
     * @method removeChild
     * @param {PIXI.DisplayObject} child The child to remove
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Removes a child from the specified index position.
     *
     * @method removeChildAt
     * @param {Number} index The index to get the child from
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChildAt(index: number): PIXI.DisplayObject;

    protected _bitmap: Bitmap;
    protected _frame: Rectangle;
    protected _realFrame: Rectangle;
    protected _offset: Point;
    protected _blendColor: Array<Number>;
    protected _colorTone: Array<Number>;
    protected _canvas: HTMLCanvasElement;
    protected _context: CanvasRenderingContext2D;
    protected _tintTexture: PIXI.BaseTexture;

    /**
     * use heavy renderer that will reduce border artifacts and apply advanced blendModes
     * @type {boolean}
     * @private
     */
    protected _isPicture: boolean;

    /**
     * @method _onBitmapLoad
     * @private
     */
    protected _onBitmapLoad(): void;

    /**
     * @method _refresh
     * @private
     */
    protected _refresh(): void;

    /**
     * @method _isInBitmapRect
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     * @return {Boolean}
     * @private
     */
    protected _isInBitmapRect(x: number, y: number, w: number, h: number): boolean;

    /**
     * @method _needsTint
     * @return {Boolean}
     * @private
     */
    protected _needsTint(): boolean;

    /**
     * @method _createTinter
     * @param {Number} w
     * @param {Number} h
     * @private
     */
    protected _createTinter(w: number, h: number): void;

    /**
     * @method _executeTint
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     * @private
     */
    protected _executeTint(x: number, y: number, w: number, h: number): void;

    /**
     * @method _renderCanvas
     * @param {PIXI.CanvasRenderer} renderer
     * @private
     */
    protected _renderCanvas_PIXI(renderer: PIXI.CanvasRenderer): void;

    /**
     * @method _renderWebGL
     * @param {PIXI.WebGLRenderer} renderer
     * @private
     */
    protected _renderWebGL_PIXI(renderer: PIXI.WebGLRenderer): void;

    /**
     * @method _renderCanvas
     * @param {PIXI.CanvasRenderer} renderer
     * @private
     */
    protected _renderCanvas(renderer: PIXI.CanvasRenderer): void;

    /**
     * @method _renderWebGL
     * @param {PIXI.WebGLRenderer} renderer
     * @private
     */
    protected _renderWebGL(renderer: PIXI.WebGLRenderer): void;

    /**
     * checks if we need to speed up custom blendmodes
     * @param renderer
     * @private
     */
    protected _speedUpCustomBlendModes(renderer: PIXI.WebGLRenderer): void;
}

declare class Stage extends PIXI.Container {
    // The interactive flag causes a memory leak.
    interactive: boolean;

    /**
     * The root object of the display tree.
     *
     * @class Stage
     * @constructor
     */
    constructor();

    /**
     * Adds a child to the container.
     *
     * @method addChild
     * @param {PIXI.DisplayObject} child The child to add
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Adds a child to the container at a specified index.
     *
     * @method addChildAt
     * @param {PIXI.DisplayObject} child The child to add
     * @param {Number} index The index to place the child in
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

    /**
     * Removes a child from the container.
     *
     * @method removeChild
     * @param {PIXI.DisplayObject} child The child to remove
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Removes a child from the specified index position.
     *
     * @method removeChildAt
     * @param {Number} index The index to get the child from
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChildAt(index: number): PIXI.DisplayObject;
}

declare class Tilemap extends PIXI.Container {
    // Tile type checkers

    static TILE_ID_A1: number;
    static TILE_ID_A2: number;
    static TILE_ID_A3: number;
    static TILE_ID_A4: number;
    static TILE_ID_A5: number;
    static TILE_ID_B: number;
    static TILE_ID_C: number;
    static TILE_ID_D: number;
    static TILE_ID_E: number;
    static TILE_ID_MAX: number;

    static FLOOR_AUTOTILE_TABLE: Array<Array<Array<number>>>;
    static WALL_AUTOTILE_TABLE: Array<Array<Array<number>>>;
    static WATERFALL_AUTOTILE_TABLE: Array<Array<Array<number>>>;

    static isVisibleTile(tileId: number): boolean;
    static isAutotile(tileId: number): boolean;
    static getAutotileKind(tileId: number): number;
    static getAutotileShape(tileId: number): number;
    static makeAutotileId(kind: number, shape: number): number;
    static isSameKindTile(tileID1: number, tileID2: number): boolean;
    static isTileA1(tileId: number): boolean;
    static isTileA2(tileId: number): boolean;
    static isTileA3(tileId: number): boolean;
    static isTileA4(tileId: number): boolean;
    static isTileA5(tileId: number): boolean;
    static isWaterTile(tileId: number): boolean;
    static isWaterfallTile(tileId: number): boolean;
    static isGroundTile(tileId: number): boolean;
    static isShadowingTile(tileId: number): boolean;
    static isRoofTile(tileId: number): boolean;
    static isWallTopTile(tileId: number): boolean;
    static isWallSideTile(tileId: number): boolean;
    static isWallTile(tileId: number): boolean;
    static isFloorTypeAutotile(tileId: number): boolean;
    static isWallTypeAutotile(tileId: number): boolean;
    static isWaterfallTypeAutotile(tileId: number): boolean;

    /**
     * The bitmaps used as a tileset.
     *
     * @property bitmaps
     * @type Array
     */
    bitmaps: Array<Bitmap>;

    /**
     * The origin point of the tilemap for scrolling.
     *
     * @property origin
     * @type Point
     */
    origin: Point;

    /**
     * The tileset flags.
     *
     * @property flags
     * @type Array
     */
    flags: Array<number>;

    /**
     * The animation count for autotiles.
     *
     * @property animationCount
     * @type Number
     */
    animationCount: number;

    /**
     * Whether the tilemap loops horizontal.
     *
     * @property horizontalWrap
     * @type Boolean
     */
    horizontalWrap: boolean;

    /**
     * Whether the tilemap loops vertical.
     *
     * @property verticalWrap
     * @type Boolean
     */
    verticalWrap: boolean;

    /**
     * The width of the screen in pixels.
     *
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the screen in pixels.
     *
     * @property height
     * @type Number
     */
    height: number;

    /**
     * The width of a tile in pixels.
     *
     * @property tileWidth
     * @type Number
     */
    tileWidth: number;

    /**
     * The height of a tile in pixels.
     *
     * @property tileHeight
     * @type Number
     */
    tileHeight: number;

    /**
     * [read-only] The array of children of the sprite.
     *
     * @property children
     * @type Array<PIXI.DisplayObject>
     */
    children: Array<PIXI.DisplayObject>;

    /**
     * [read-only] The object that contains the sprite.
     *
     * @property parent
     * @type PIXI.DisplayObjectContainer
     */
    parent: PIXI.Container;

    /**
     * The tilemap which displays 2D tile-based game map.
     *
     * @class Tilemap
     * @constructor
     */
    constructor();

    /**
     * Sets the tilemap data.
     *
     * @method setData
     * @param {Number} width The width of the map in number of tiles
     * @param {Number} height The height of the map in number of tiles
     * @param {Array} data The one dimensional array for the map data
     */
    setData(width: number, height: number, data: Array<number>);

    /**
     * Checks whether the tileset is ready to render.
     *
     * @method isReady
     * @type Boolean
     * @return {Boolean} True if the tilemap is ready
     */
    isReady(): boolean;

    /**
     * Updates the tilemap for each frame.
     *
     * @method update
     */
    update(): void;

    /**
     * @method updateTransform
     * @private
     */
    updateTransform(): void;

    /**
     * Forces to repaint the entire static
     *
     * @method refresh
     */
    refresh(): void;

    /**
     * Adds a child to the container.
     *
     * @method addChild
     * @param {PIXI.DisplayObject} child The child to add
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Adds a child to the container at a specified index.
     *
     * @method addChildAt
     * @param {PIXI.DisplayObject} child The child to add
     * @param {Number} index The index to place the child in
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

    /**
     * Removes a child from the container.
     *
     * @method removeChild
     * @param {PIXI.DisplayObject} child The child to remove
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Removes a child from the specified index position.
     *
     * @method removeChildAt
     * @param {Number} index The index to get the child from
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChildAt(index: number): PIXI.DisplayObject;

    /**
     * Forces to refresh the tileset
     *
     * @method refresh
     */
    refreshTileset(): void;


    protected _margin: number;
    protected _width: number;
    protected _height: number;
    protected _tileWidth: number;
    protected _tileHeight: number;
    protected _mapWidth: number;
    protected _mapHeight : number;
    protected _mapData: Array<number>;
    protected _layerWidth: number;
    protected _layerHeight: number;
    protected _lastTiles: Array<Array<Array<Array<number>>>>;
    protected _lowerLayer: Sprite;
    protected _upperLayer: Sprite;

    /**
     * @method _createLayers
     * @private
     */
    protected _createLayers(): void;

    /**
     * @method _updateLayerPositions
     * @param {Number} startX
     * @param {Number} startY
     * @private
     */
    protected _updateLayerPositions(startX: number, startY: number): void;

    /**
     * @method _paintAllTiles
     * @param {Number} startX
     * @param {Number} startY
     * @private
     */
    protected _paintAllTiles(startX: number, startY: number): void;

    /**
     * @method _paintTiles
     * @param {Number} startX
     * @param {Number} startY
     * @param {Number} x
     * @param {Number} y
     * @private
     */
    protected _paintTiles(startX: number, startY: number, x: number, y: number): void;

    /**
     * @method _readLastTiles
     * @param {Number} i
     * @param {Number} x
     * @param {Number} y
     * @private
     */
    protected _readLastTiles(i: number, x: number, y: number): Array<number>;

    /**
     * @method _writeLastTiles
     * @param {Number} i
     * @param {Number} x
     * @param {Number} y
     * @param {Array} tiles
     * @private
     */
    protected _writeLastTiles(i: number, x: number, y: number, tiles: Array<number>): void;

    /**
     * @method _drawTile
     * @param {Bitmap} bitmap
     * @param {Number} tileId
     * @param {Number} dx
     * @param {Number} dy
     * @private
     */
    protected _drawTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * @method _drawNormalTile
     * @param {Bitmap} bitmap
     * @param {Number} tileId
     * @param {Number} dx
     * @param {Number} dy
     * @private
     */
    protected _drawNormalTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * @method _drawAutotile
     * @param {Bitmap} bitmap
     * @param {Number} tileId
     * @param {Number} dx
     * @param {Number} dy
     * @private
     */
    protected _drawAutotile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * @method _drawTableEdge
     * @param {Bitmap} bitmap
     * @param {Number} tileId
     * @param {Number} dx
     * @param {Number} dy
     * @private
     */
    protected _drawTableEdge(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * @method _drawShadow
     * @param {Bitmap} bitmap
     * @param {Number} shadowBits
     * @param {Number} dx
     * @param {Number} dy
     * @private
     */
    protected _drawShadow(bitmap: Bitmap, shadowBits: number, dx: number, dy: number): void;

    /**
     * @method _readMapData
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @return {Number}
     * @private
     */
    protected _readMapData(x: number, y: number, z: number): number;

    /**
     * @method _isHigherTile
     * @param {Number} tileId
     * @return {Boolean}
     * @private
     */
    protected _isHigherTile(tileId: number): boolean;

    /**
     * @method _isTableTile
     * @param {Number} tileId
     * @return {Boolean}
     * @private
     */
    protected _isTableTile(tileId: number): boolean;

    /**
     * @method _isOverpassPosition
     * @param {Number} mx
     * @param {Number} my
     * @return {Boolean}
     * @private
     */
    protected _isOverpassPosition(mx: number, my: number): boolean;

    /**
     * @method _sortChildren
     * @private
     */
    protected _sortChildren(): void;

    /**
     * @method _compareChildOrder
     * @param {Sprite} a
     * @param {Sprite} b
     * @private
     */
    protected _compareChildOrder(a: Sprite, b: Sprite): number;
}

declare class ShaderTilemap extends Tilemap {
    /**
     * Uploads animation state in renderer
     *
     * @method _hackRenderer
     * @param {PIXI.SystemRenderer} pixi renderer
     * @private
     */
    _hackRenderer(renderer: PIXI.SystemRenderer): PIXI.SystemRenderer;

    /**
     * PIXI render method
     *
     * @method renderWebGL
     * @param {PIXI.WebGLRenderer} pixi renderer
     */
    renderWebGL(renderer: PIXI.WebGLRenderer): void;

    /**
     * PIXI render method
     *
     * @method renderCanvas
     * @param {PIXI.CanvasRenderer} pixi renderer
     */
    renderCanvas(renderer: PIXI.CanvasRenderer): void;

    /**
     * Forces to repaint the entire tilemap AND update bitmaps list if needed
     *
     * @method refresh
     */
    refresh(): void;

    /**
     * Call after you update tileset
     *
     * @method refreshTileset
     */
    refreshTileset(): void;
}

declare class TilingSprite extends PIXI.extras.TilingSprite {
    /**
     * The origin point of the tiling sprite for scrolling.
     *
     * @property origin
     * @type Point
     */
    origin: Point;

    /**
     * The image for the tiling sprite.
     *
     * @property bitmap
     * @type Bitmap
     */
    bitmap: Bitmap;

    /**
     * The opacity of the tiling sprite (0 to 255).
     *
     * @property opacity
     * @type Number
     */
    opacity: number;

    /**
     * The visibility of the tiling sprite.
     *
     * @property visible
     * @type Boolean
     */
    visibility: boolean;

    /**
     * The x coordinate of the tiling sprite.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate of the tiling sprite.
     *
     * @property y
     * @type Number
     */
    y: number;

    spriteId: number;

    /**
     * The sprite object for a tiling image.
     *
     * @class TilingSprite
     * @constructor
     * @param {Bitmap} bitmap The image for the tiling sprite
     */
    constructor(bitmap: Bitmap);

    /**
     * Updates the tiling sprite for each frame.
     *
     * @method update
     */
    update(): void;

    /**
     * @method updateTransform
     * @private
     */
    updateTransform(): void;

    /**
     * Sets the x, y, width, and height all at once.
     *
     * @method move
     * @param {Number} x The x coordinate of the tiling sprite
     * @param {Number} y The y coordinate of the tiling sprite
     * @param {Number} width The width of the tiling sprite
     * @param {Number} height The height of the tiling sprite
     */
    move(x?: number, y?: number, width?: number, height?: number): void;

    /**
     * Specifies the region of the image that the tiling sprite will use.
     *
     * @method setFrame
     * @param {Number} x The x coordinate of the frame
     * @param {Number} y The y coordinate of the frame
     * @param {Number} width The width of the frame
     * @param {Number} height The height of the frame
     */
    setFrame(x: number, y: number, width: number, height: number): void;

    updateTransformTS(): void;

    protected _bitmap: Bitmap;
    protected _width: number;
    protected _height: number;
    protected _frame: Rectangle;

    /**
     * @method _onBitmapLoad
     * @private
     */
    protected _onBitmapLoad(): void;

    /**
     * @method _refresh
     * @private
     */
    protected _refresh(): void;

    /**
     * @method _renderCanvas
     * @param {PIXI.CanvasRenderer} renderer
     * @private
     */
    protected _renderCanvas(renderer: PIXI.CanvasRenderer): void;

    /**
     * @method _renderWebGL
     * @param {PIXI.WebGLRenderer} renderer
     * @private
     */
    protected _renderWebGL(renderer: PIXI.WebGLRenderer): void;

    /**
     * @method generateTilingTexture
     * @param {Boolean} arg
     */
    // generateTilingTexture(arg: boolean): void;
}

declare class ToneFilter extends PIXI.filters.ColorMatrixFilter {
    /**
     * The color matrix filter for WebGL.
     *
     * @class ToneFilter
     * @extends PIXI.Filter
     * @constructor
     */
    constructor();

    /**
     * Changes the hue.
     *
     * @method adjustHue
     * @param {Number} value The hue value in the range (-360, 360)
     */
    adjustHue(value?: number): void;

    /**
     * Changes the saturation.
     *
     * @method adjustSaturation
     * @param {Number} value The saturation value in the range (-255, 255)
     */
    adjustSaturation(value?: number): void;

    /**
     * Changes the tone.
     *
     * @method adjustTone
     * @param {Number} r The red strength in the range (-255, 255)
     * @param {Number} g The green strength in the range (-255, 255)
     * @param {Number} b The blue strength in the range (-255, 255)
     */
    adjustTone(r?: number, g?: number, b?: number): void;
}

declare class ToneSprite extends PIXI.Container {
    /**
     * The sprite which changes the screen color in 2D canvas mode.
     *
     * @class ToneSprite
     * @constructor
     */
    constructor();

    /**
     * Clears the tone.
     *
     * @method reset
     */
    clear(): void;

    /**
     * Sets the tone.
     *
     * @method setTone
     * @param {Number} r The red strength in the range (-255, 255)
     * @param {Number} g The green strength in the range (-255, 255)
     * @param {Number} b The blue strength in the range (-255, 255)
     * @param {Number} gray The grayscale level in the range (0, 255)
     */
    setTone(r: number, g: number, b: number, gray: number): void;

    protected _red: number;
    protected _green: number;
    protected _blue: number;
    protected _gray: number;

    /**
     * @method _renderCanvas
     * @param {PIXI.CanvasRenderer} renderer
     * @private
     */
    protected _renderCanvas(renderer: PIXI.CanvasRenderer): void;

    /**
     * @method _renderWebGL
     * @param {PIXI.WebGLRenderer} renderer
     * @private
     */
    protected _renderWebGL(renderer: PIXI.WebGLRenderer): void;
}

interface TouchInputStatic {
    _mousePressed: boolean;
    _screenPressed: boolean;
    _pressedTime: number;
    _events: MV.TouchInputEvents;
    _triggered: boolean;
    _cancelled: boolean;
    _moved: boolean;
    _released: boolean;
    _wheelX: number;
    _wheelY: number;
    _x: number;
    _y: number;
    _date: number;

    /**
     * The wait time of the pseudo key repeat in frames.
     *
     * @static
     * @property keyRepeatWait
     * @type Number
     */
    keyRepeatWait: number;

    /**
     * The interval of the pseudo key repeat in frames.
     *
     * @static
     * @property keyRepeatInterval
     * @type Number
     */
    keyRepeatInterval: number;

    /**
     * [read-only] The horizontal scroll amount.
     *
     * @static
     * @property wheelX
     * @type Number
     */
    wheelX: number;

    /**
     * [read-only] The vertical scroll amount.
     *
     * @static
     * @property wheelY
     * @type Number
     */
    wheelY: number;

    /**
     * [read-only] The x coordinate on the canvas area of the latest touch event.
     *
     * @static
     * @property x
     * @type Number
     */
    x: number;

    /**
     * [read-only] The y coordinate on the canvas area of the latest touch event.
     *
     * @static
     * @property y
     * @type Number
     */
    y: number;

    /**
     * [read-only] The time of the last input in milliseconds.
     *
     * @static
     * @property date
     * @type Number
     */
    date: number;

    /**
     * Initializes the touch system.
     *
     * @static
     * @method initialize
     */
    initialize(): void;

    /**
     * Clears all the touch data.
     *
     * @static
     * @method clear
     */
    clear(): void;

    /**
     * Updates the touch data.
     *
     * @static
     * @method update
     */
    update(): void;

    /**
     * Checks whether the mouse button or touchscreen is currently pressed down.
     *
     * @static
     * @method isPressed
     * @return {Boolean} True if the mouse button or touchscreen is pressed
     */
    isPressed(): boolean;

    /**
     * Checks whether the left mouse button or touchscreen is just pressed.
     *
     * @static
     * @method isTriggered
     * @return {Boolean} True if the mouse button or touchscreen is triggered
     */
    isTriggered(): boolean;

    /**
     * Checks whether the left mouse button or touchscreen is just pressed
     * or a pseudo key repeat occurred.
     *
     * @static
     * @method isRepeated
     * @return {Boolean} True if the mouse button or touchscreen is repeated
     */
    isRepeated(): boolean;

    /**
     * Checks whether the left mouse button or touchscreen is kept depressed.
     *
     * @static
     * @method isLongPressed
     * @return {Boolean} True if the left mouse button or touchscreen is long-pressed
     */
    isLongPressed(): boolean;

    /**
     * Checks whether the right mouse button is just pressed.
     *
     * @static
     * @method isCancelled
     * @return {Boolean} True if the right mouse button is just pressed
     */
    isCancelled(): boolean;

    /**
     * Checks whether the mouse or a finger on the touchscreen is moved.
     *
     * @static
     * @method isMoved
     * @return {Boolean} True if the mouse or a finger on the touchscreen is moved
     */
    isMoved(): boolean;

    /**
     * Checks whether the left mouse button or touchscreen is released.
     *
     * @static
     * @method isReleased
     * @return {Boolean} True if the mouse button or touchscreen is released
     */
    isReleased(): boolean;

    /**
     * @static
     * @method _setupEventHandlers
     * @private
     */
    _setupEventHandlers(): void;

    /**
     * @static
     * @method _onMouseDown
     * @param {MouseEvent} event
     * @private
     */
    _onMouseDown(event: MouseEvent): void;

    /**
     * @static
     * @method _onLeftButtonDown
     * @param {MouseEvent} event
     * @private
     */
    _onLeftButtonDown(event: MouseEvent): void;

    /**
     * @static
     * @method _onMiddleButtonDown
     * @param {MouseEvent} event
     * @private
     */
    _onMiddleButtonDown(event: MouseEvent): void;

    /**
     * @static
     * @method _onRightButtonDown
     * @param {MouseEvent} event
     * @private
     */
    _onRightButtonDown(event: MouseEvent): void;

    /**
     * @static
     * @method _onMouseMove
     * @param {MouseEvent} event
     * @private
     */
    _onMouseMove(event: MouseEvent): void;

    /**
     * @static
     * @method _onMouseUp
     * @param {MouseEvent} event
     * @private
     */
    _onMouseUp (event: MouseEvent): void;

    /**
     * @static
     * @method _onWheel
     * @param {WheelEvent} event
     * @private
     */
    _onWheel(event: WheelEvent): void;

    /**
     * @static
     * @method _onTouchStart
     * @param {TouchEvent} event
     * @private
     */
    _onTouchStart(event: TouchEvent): void;

    /**
     * @static
     * @method _onTouchMove
     * @param {TouchEvent} event
     * @private
     */
    _onTouchMove(event: TouchEvent): void;

    /**
     * @static
     * @method _onTouchEnd
     * @param {TouchEvent} event
     * @private
     */
    _onTouchEnd(event: TouchEvent): void;

    /**
     * @static
     * @method _onTouchCancel
     * @param {TouchEvent} event
     * @private
     */
    _onTouchCancel(event: TouchEvent): void;

    /**
     * @static
     * @method _onPointerDown
     * @param {PointerEvent} event
     * @private
     */
    _onPointerDown(event: PointerEvent): void;

    /**
     * @static
     * @method _onTrigger
     * @param {Number} x
     * @param {Number} y
     * @private
     */
    _onTrigger(x: number, y: number): void;

    /**
     * @static
     * @method _onCancel
     * @param {Number} x
     * @param {Number} y
     * @private
     */
    _onCancel(x: number, y: number): void;

    /**
     * @static
     * @method _onMove
     * @param {Number} x
     * @param {Number} y
     * @private
     */
    _onMove(x: number, y: number): void;

    /**
     * @static
     * @method _onRelease
     * @param {Number} x
     * @param {Number} y
     * @private
     */
    _onRelease(x: number, y: number): void;
}
declare var TouchInput: TouchInputStatic;

/**
 * The static class that defines utility methods.
 *
 * @class Utils
 */
interface UtilsStatic {
    /**
     * The name of the RPG Maker. 'MV' in the current version.
     *
     * @static
     * @property RPGMAKER_NAME
     * @type String
     * @final
     */
    RPGMAKER_NAME: string;

    /**
     * The version of the RPG Maker.
     *
     * @static
     * @property RPGMAKER_VERSION
     * @type String
     * @final
     */
    RPGMAKER_VERSION: string;

    /**
     * Checks whether the option is in the query string.
     *
     * @static
     * @method isOptionValid
     * @param {String} name The option name
     * @return {Boolean} True if the option is in the query string
     */
    isOptionValid(name: string): boolean;

    /**
     * Checks whether the platform is NW.js.
     *
     * @static
     * @method isNwjs
     * @return {Boolean} True if the platform is NW.js
     */
    isNwjs(): boolean;

    /**
     * Checks whether the platform is a mobile device.
     *
     * @static
     * @method isMobileDevice
     * @return {Boolean} True if the platform is a mobile device
     */
    isMobileDevice(): boolean;

    /**
     * Checks whether the browser is Mobile Safari.
     *
     * @static
     * @method isMobileSafari
     * @return {Boolean} True if the browser is Mobile Safari
     */
    isMobileSafari(): boolean;

    /**
     * Checks whether the browser is Android Chrome.
     *
     * @static
     * @method isAndroidChrome
     * @return {Boolean} True if the browser is Android Chrome
     */
    isAndroidChrome(): boolean;

    /**
     * Checks whether the browser can read files in the game folder.
     *
     * @static
     * @method canReadGameFiles
     * @return {Boolean} True if the browser can read files in the game folder
     */
    canReadGameFiles(): boolean;

    /**
     * Makes a CSS color string from RGB values.
     *
     * @static
     * @method rgbToCssColor
     * @param {Number} r The red value in the range (0, 255)
     * @param {Number} g The green value in the range (0, 255)
     * @param {Number} b The blue value in the range (0, 255)
     * @return {String} CSS color string
     */
    rgbToCssColor(r: number, g: number, b: number): string;
}
declare var Utils: UtilsStatic;


declare class WebAudio {
    static _context: AudioContext;
    static _masterGainNode: GainNode;
    static _initialized: boolean;
    static _unlocked: boolean;

    /**
     * Initializes the audio system.
     *
     * @static
     * @method initialize
     * @param {Boolean} noAudio Flag for the no-audio mode
     * @return {Boolean} True if the audio system is available
     */
    static initialize(noAudio?: boolean): boolean;

    /**
     * Checks whether the browser can play ogg files.
     *
     * @static
     * @method canPlayOgg
     * @return {Boolean} True if the browser can play ogg files
     */
    static canPlayOgg(): boolean;

    /**
     * Checks whether the browser can play m4a files.
     *
     * @static
     * @method canPlayM4a
     * @return {Boolean} True if the browser can play m4a files
     */
    static canPlayM4a(): boolean;

    /**
     * @static
     * @method _createContext
     * @private
     */
    static _createContext(): void;

    /**
     * @static
     * @method _detectCodecs
     * @private
     */
    static _detectCodecs(): void;

    /**
     * @static
     * @method _createMasterGainNode
     * @private
     */
    static _createMasterGainNode(): void;

    /**
     * @static
     * @method _setupEventHandlers
     * @private
     */
    static _setupEventHandlers(): void;

    /**
     * @static
     * @method _onTouchStart
     * @private
     */
    static _onTouchStart(): void;

    /**
     * @static
     * @method _onVisibilityChange
     * @private
     */
    static _onVisibilityChange(): void;

    /**
     * @static
     * @method _onHide
     * @private
     */
    static _onHide(): void;

    /**
     * @static
     * @method _onShow
     * @private
     */
    static _onShow(): void;

    /**
     * @static
     * @method _shouldMuteOnHide
     * @private
     */
    static _shouldMuteOnHide(): void;

    /**
     * @static
     * @method _fadeIn
     * @param {Number} duration
     * @private
     */
    static _fadeIn(duration: number): void;

    /**
     * @static
     * @method _fadeOut
     * @param {Number} duration
     * @private
     */
    static _fadeOut(duration: number): void;

    /**
     * [read-only] The url of the audio file.
     *
     * @property url
     * @type String
     */
    url: string;

    /**
     * The volume of the audio.
     *
     * @property volume
     * @type Number
     */
    volume: number;

    /**
     * The pitch of the audio.
     *
     * @property pitch
     * @type Number
     */
    pitch: number;

    /**
     * The pan of the audio.
     *
     * @property pan
     * @type Number
     */
    pan: number;

    /**
     * The audio object of Web Audio API.
     *
     * @class WebAudio
     * @constructor
     * @param {String} url The url of the audio file
     */
    constructor(url: string);

    /**
     * Clears the audio data.
     *
     * @method clear
     */
    clear(): void;

    /**
     * Checks whether the audio data is ready to play.
     *
     * @method isReady
     * @return {Boolean} True if the audio data is ready to play
     */
    isReady(): boolean;

    /**
     * Checks whether a loading error has occurred.
     *
     * @method isError
     * @return {Boolean} True if a loading error has occurred
     */
    isError(): boolean;

    /**
     * Checks whether the audio is playing.
     *
     * @method isPlaying
     * @return {Boolean} True if the audio is playing
     */
    isPlaying(): boolean;

    /**
     * Plays the audio.
     *
     * @method play
     * @param {Boolean} loop Whether the audio data play in a loop
     * @param {Number} offset The start position to play in seconds
     */
    play(loop: boolean, offset: number): void;

    /**
     * Stops the audio.
     *
     * @method stop
     */
    stop(): void;

    /**
     * Performs the audio fade-in.
     *
     * @method fadeIn
     * @param {Number} duration Fade-in time in seconds
     */
    fadeIn(duration: number): void;

    /**
     * Performs the audio fade-out.
     *
     * @method fadeOut
     * @param {Number} duration Fade-out time in seconds
     */
    fadeOut(duration: number): void;

    /**
     * Gets the seek position of the audio.
     *
     * @method seek
     */
    seek(): void;

    /**
     * Add a callback function that will be called when the audio data is loaded.
     *
     * @method addLoadListener
     * @param {Function} listner The callback function
     */
    addLoadListener(listner: () => void): void;

    /**
     * Add a callback function that will be called when the playback is stopped.
     *
     * @method addStopListener
     * @param {Function} listner The callback function
     */
    addStopListener(listner: () => void): void;

    protected _buffer: AudioNode;
    protected _sourceNode: AudioBufferSourceNode;
    protected _gainNode: GainNode;
    protected _pannerNode: PannerNode;
    protected _totalTime: number;
    protected _sampleRate: number;
    protected _loopStart: number;
    protected _loopLength: number;
    protected _startTime: number;
    protected _volume: number;
    protected _pitch: number;
    protected _pan: number;
    protected _endTimer: number;
    protected _loadListeners: Array<() => void>;
    protected _stopListeners: Array<() => void>;
    protected _hasError: boolean;
    protected _autoPlay: boolean;

    /**
     * @method _load
     * @param {String} url
     * @private
     */
    protected _load(url: string): void;

    /**
     * @method _onXhrLoad
     * @param {XMLHttpRequest} xhr
     * @private
     */
    protected _onXhrLoad(xhr: XMLHttpRequest): void;

    /**
     * @method _startPlaying
     * @param {Boolean} loop
     * @param {Number} offset
     * @private
     */
    protected _startPlaying(loop: boolean, offset: number): void;

    /**
     * @method _createNodes
     * @private
     */
    protected _createNodes(): void;

    /**
     * @method _connectNodes
     * @private
     */
    protected _connectNodes(): void;

    /**
     * @method _removeNodes
     * @private
     */
    protected _removeNodes(): void;

    /**
     * @method _createEndTimer
     * @private
     */
    protected _createEndTimer(): void;

    /**
     * @method _removeEndTimer
     * @private
     */
    protected _removeEndTimer(): void;

    /**
     * @method _updatePanner
     * @private
     */
    protected _updatePanner(): void;

    /**
     * @method _onLoad
     * @private
     */
    protected _onLoad(): void;

    /**
     * @method _readLoopComments
     * @param {Uint8Array} array
     * @private
     */
    protected _readLoopComments(array: Uint8Array): void;

    /**
     * @method _readOgg
     * @param {Uint8Array} array
     * @private
     */
    protected _readOgg(array: Uint8Array): void;

    /**
     * @method _readMp4
     * @param {Uint8Array} array
     * @private
     */
    protected _readMp4(array: Uint8Array): void;

    /**
     * @method _readMetaData
     * @param {Uint8Array} array
     * @param {Number} index
     * @param {Number} size
     * @private
     */
    protected _readMetaData(array: Uint8Array, index: number, size: number): void;

    /**
     * @method _readLittleEndian
     * @param {Uint8Array} array
     * @param {Number} index
     * @private
     */
    protected _readLittleEndian(array: Uint8Array, index: number): void;

    /**
     * @method _readBigEndian
     * @param {Uint8Array} array
     * @param {Number} index
     * @private
     */
    protected _readBigEndian(array: Uint8Array, index: number): void;

    /**
     * @method _readFourCharacters
     * @param {Uint8Array} array
     * @param {Number} index
     * @private
     */
    protected _readFourCharacters(array: Uint8Array, index: number): void;
}

declare class Weather extends PIXI.Container {
    /**
     * The type of the weather in ['none', 'rain', 'storm', 'snow'].
     *
     * @property type
     * @type String
     */
    type: string;

    /**
     * The power of the weather in the range (0, 9).
     *
     * @property power
     * @type Number
     */
    power: number;

    /**
     * The origin point of the weather for scrolling.
     *
     * @property origin
     * @type Point
     */
    origin: Point;

    /**
     * The weather effect which displays rain, storm, or snow.
     *
     * @class Weather
     * @constructor
     */
    constructor();

    /**
     * Updates the weather for each frame.
     *
     * @method update
     */
    update(): void;

    protected _width: number;
    protected _height: number;
    protected _sprites: Array<Sprite>;
    protected _rainBitmap: Bitmap;
    protected _stormBitmap: Bitmap;
    protected _snowBitmap: Bitmap;
    protected _dimmerSprite: ScreenSprite;

    /**
     * @method _createBitmaps
     * @private
     */
    protected _createBitmaps(): void;

    /**
     * @method _createDimmer
     * @private
     */
    protected _createDimmer(): void;

    /**
     * @method _updateDimmer
     * @private
     */
    protected _updateDimmer(): void;

    /**
     * @method _updateAllSprites
     * @private
     */
    protected _updateAllSprites(): void;

    /**
     * @method _addSprite
     * @private
     */
    protected _addSprite(): void;

    /**
     * @method _removeSprite
     * @private
     */
    protected _removeSprite(): void;

    /**
     * @method _updateSprite
     * @param {Sprite} sprite
     * @private
     */
    protected _updateSprite(sprite: Sprite): void;

    /**
     * @method _updateRainSprite
     * @param {Sprite} sprite
     * @private
     */
    protected _updateRainSprite(sprite: Sprite): void;

    /**
     * @method _updateStormSprite
     * @param {Sprite} sprite
     * @private
     */
    protected _updateStormSprite(sprite: Sprite): void;

    /**
     * @method _updateSnowSprite
     * @param {Sprite} sprite
     * @private
     */
    protected _updateSnowSprite(sprite: Sprite): void;

    /**
     * @method _rebornSprite
     * @param {Sprite} sprite
     * @private
     */
    protected _rebornSprite(sprite: Sprite): void;
}

declare abstract class _Window extends PIXI.Container {
    /**
     * The origin point of the window for scrolling.
     *
     * @property origin
     * @type Point
     */
    origin: Point;

    /**
     * The active state for the window.
     *
     * @property active
     * @type Boolean
     */
    active: boolean;

    /**
     * The visibility of the down scroll arrow.
     *
     * @property downArrowVisible
     * @type Boolean
     */
    downArrowVisible: boolean;

    /**
     * The visibility of the up scroll arrow.
     *
     * @property upArrowVisible
     * @type Boolean
     */
    upArrowVisible: boolean;

    /**
     * The visibility of the pause sign.
     *
     * @property pause
     * @type Boolean
     */
    pause: boolean;

    /**
     * The image used as a window skin.
     *
     * @property windowskin
     * @type Bitmap
     */
    windowskin: Bitmap;

    /**
     * The bitmap used for the window contents.
     *
     * @property contents
     * @type Bitmap
     */
    contents: Bitmap;

    /**
     * The width of the window in pixels.
     *
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the window in pixels.
     *
     * @property height
     * @type Number
     */
    height: number;

    /**
     * The size of the padding between the frame and contents.
     *
     * @property padding
     * @type Number
     */
    padding: number;

    /**
     * The size of the margin for the window background.
     *
     * @property margin
     * @type Number
     */
    margin: number;

    /**
     * The opacity of the window without contents (0 to 255).
     *
     * @property opacity
     * @type Number
     */
    opacity: number;

    /**
     * The opacity of the window background (0 to 255).
     *
     * @property backOpacity
     * @type Number
     */
    backOpacity: number;

    /**
     * The opacity of the window contents (0 to 255).
     *
     * @property contentsOpacity
     * @type Number
     */
    contentsOpacity: number;

    /**
     * The openness of the window (0 to 255).
     *
     * @property openness
     * @type Number
     */
    openness: number;

    /**
     * The visibility of the sprite.
     *
     * @property visible
     * @type Boolean
     */
    visible: boolean;

    /**
     * The x coordinate of the sprite.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate of the sprite.
     *
     * @property y
     * @type Number
     */
    y: number;

    /**
     * [read-only] The array of children of the sprite.
     *
     * @property children
     * @type Array<PIXI.DisplayObject>
     */
    children: Array<PIXI.DisplayObject>;

    /**
     * [read-only] The object that contains the sprite.
     *
     * @property parent
     * @type PIXI.DisplayObjectContainer
     */
    parent: PIXI.Container;

    /**
     * The window in the game.
     *
     * @class Window
     * @constructor
     */
    constructor();

    /**
     * Updates the window for each frame.
     *
     * @method update
     */
    update(): void;

    /**
     * Sets the x, y, width, and height all at once.
     *
     * @method move
     * @param {Number} x The x coordinate of the window
     * @param {Number} y The y coordinate of the window
     * @param {Number} width The width of the window
     * @param {Number} height The height of the window
     */
    move(x?: number, y?: number, width?: number, height?: number): void;

    /**
     * Returns true if the window is completely open (openness == 255).
     *
     * @method isOpen
     * @return {Boolean}
     */
    isOpen(): boolean;

    /**
     * Returns true if the window is completely closed (openness == 0).
     *
     * @method isClosed
     * @return {Boolean}
     */
    isClosed(): boolean;

    /**
     * Sets the position of the command cursor.
     *
     * @method setCursorRect
     * @param {Number} x The x coordinate of the cursor
     * @param {Number} y The y coordinate of the cursor
     * @param {Number} width The width of the cursor
     * @param {Number} height The height of the cursor
     */
    setCursorRect(x?: number, y?: number, width?: number, height?: number): void;

    /**
     * Changes the color of the background.
     *
     * @method setTone
     * @param {Number} r The red value in the range (-255, 255)
     * @param {Number} g The green value in the range (-255, 255)
     * @param {Number} b The blue value in the range (-255, 255)
     */
    setTone(r: number, g: number, b: number): void;

    /**
     * Adds a child between the background and contents.
     *
     * @method addChildToBack
     * @param {PIXI.DisplayObject} child The child to add
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChildToBack(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Adds a child to the container.
     *
     * @method addChild
     * @param {PIXI.DisplayObject} child The child to add
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Adds a child to the container at a specified index.
     *
     * @method addChildAt
     * @param {PIXI.DisplayObject} child The child to add
     * @param {Number} index The index to place the child in
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

    /**
     * Removes a child from the container.
     *
     * @method removeChild
     * @param {PIXI.DisplayObject} child The child to remove
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Removes a child from the specified index position.
     *
     * @method removeChildAt
     * @param {Number} index The index to get the child from
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChildAt(index: number): PIXI.DisplayObject;

    /**
     * @method updateTransform
     * @private
     */
    updateTransform(): void;

    protected _isWindow: boolean;
    protected _windowskin: Bitmap;
    protected _width: number;
    protected _height: number;
    protected _cursorRect: Rectangle;
    protected _openness: number;
    protected _animationCount: number;
    protected _padding: number;
    protected _margin: number;
    protected _colorTone: Array<number>;
    protected _windowSpriteContainer: PIXI.Container;
    protected _windowBackSprite: Sprite;
    protected _windowCursorSprite: Sprite;
    protected _windowFrameSprite: Sprite;
    protected _windowContentsSprite: Sprite;
    protected _windowArrowSprites: Array<any>;
    protected _windowPauseSignSprite: Sprite;
    protected _downArrowSprite: Sprite;
    protected _upArrowSprite: Sprite;

    /**
     * @method _createAllParts
     * @private
     */
    protected _createAllParts(): void;

    /**
     * @method _onWindowskinLoad
     * @private
     */
    protected _onWindowskinLoad(): void;

    /**
     * @method _refreshAllParts
     * @private
     */
    protected _refreshAllParts(): void;

    /**
     * @method _refreshBack
     * @private
     */
    protected _refreshBack(): void;

    /**
     * @method _refreshFrame
     * @private
     */
    protected _refreshFrame(): void;

    /**
     * @method _refreshCursor
     * @private
     */
    protected _refreshCursor(): void;

    /**
     * @method _refreshContents
     * @private
     */
    protected _refreshContents(): void;

    /**
     * @method _refreshArrows
     * @private
     */
    protected _refreshArrows(): void;

    /**
     * @method _refreshPauseSign
     * @private
     */
    protected _refreshPauseSign(): void;

    /**
     * @method _updateCursor
     * @private
     */
    protected _updateCursor(): void;

    /**
     * @method _updateContents
     * @private
     */
    protected _updateContents(): void;

    /**
     * @method _updateArrows
     * @private
     */
    protected _updateArrows(): void;

    /**
     * @method _updatePauseSign
     * @private
     */
    protected _updatePauseSign(): void;
}


declare class WindowLayer extends PIXI.Container {
    /**
     * The width of the window layer in pixels.
     *
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the window layer in pixels.
     *
     * @property height
     * @type Number
     */
    height: number;

    /**
     * The x coordinate of the sprite.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate of the sprite.
     *
     * @property y
     * @type Number
     */
    y: number;

    /**
     * [read-only] The array of children of the sprite.
     *
     * @property children
     * @type Array<PIXI.DisplayObject>
     */
    children: Array<PIXI.DisplayObject>;

    /**
     * [read-only] The object that contains the sprite.
     *
     * @property parent
     * @type PIXI.DisplayObjectContainer
     */
    parent: PIXI.Container;

    voidFilter: PIXI.Filter;

    /**
     * The layer which contains game windows.
     *
     * @class WindowLayer
     * @constructor
     */
    constructor();

    /**
     * Sets the x, y, width, and height all at once.
     *
     * @method move
     * @param {Number} x The x coordinate of the window layer
     * @param {Number} y The y coordinate of the window layer
     * @param {Number} width The width of the window layer
     * @param {Number} height The height of the window layer
     */
    move(x: number, y: number, width: number, height: number): void;

    /**
     * Updates the window layer for each frame.
     *
     * @method update
     */
    update(): void;

    /**
     * Adds a child to the container.
     *
     * @method addChild
     * @param {PIXI.DisplayObject} child The child to add
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Adds a child to the container at a specified index.
     *
     * @method addChildAt
     * @param {PIXI.DisplayObject} child The child to add
     * @param {Number} index The index to place the child in
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

    /**
     * Removes a child from the container.
     *
     * @method removeChild
     * @param {PIXI.DisplayObject} child The child to remove
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Removes a child from the specified index position.
     *
     * @method removeChildAt
     * @param {Number} index The index to get the child from
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChildAt(index: number): PIXI.DisplayObject;

    /**
     * @method _renderCanvas
     * @param {PIXI.CanvasRenderer} renderer
     * @private
     */
    renderCanvas(renderer: PIXI.CanvasRenderer);

    /**
     * @method _renderWebGL
     * @param {PIXI.WebGLRenderer} renderer
     * @private
     */
    renderWebGL(renderer: PIXI.WebGLRenderer): void;

    protected _width: number;
    protected _height: number;
    protected _tempCanvas: HTMLCanvasElement;
    protected _translationMatrix: Array<number>;
    protected _windowMask: PIXI.Graphics;
    protected _renderSprite: PIXI.Container;

    /**
     * @method _canvasClearWindowRect
     * @param {PIXI.CanvasRenderer} renderSession
     * @param {Window} window
     * @private
     */
    protected _canvasClearWindowRect(renderSession: PIXI.CanvasRenderer, window: Window): void;

    /**
     * @method _maskWindow
     * @param {Window} window
     * @private
     */
     protected _maskWindow(window: _Window): void;
}

declare class CacheEntry {
    /**
     * The resource class. Allows to be collected as a garbage if not use for some time or ticks
     *
     * @class CacheEntry
     * @constructor
     * @param {ResourceManager} resource manager
     * @param {string} key, url of the resource
     * @param {string} item - Bitmap, HTML5Audio, WebAudio - whatever you want to store in the cache
     */
    constructor(cache: CacheMap, key: string, item: string)

    /**
     * frees the resource
     */
    free(byTTL?: boolean): void;

    /**
     * Allocates the resource
     * @returns {CacheEntry}
     */
    allocate(): CacheEntry;

    /**
     * Sets the time to live
     * @param {number} ticks TTL in ticks, 0 if not set
     * @param {number} time TTL in seconds, 0 if not set
     * @returns {CacheEntry}
     */
    setTimeToLive(ticks?: number, seconds?: number): CacheEntry;

    isStillAlive(): boolean;

    /**
     * makes sure that resource wont freed by Time To Live
     * if resource was already freed by TTL, put it in cache again
     */
    touch(): void;
}

declare class CacheMap {
    /**
     * Cache for images, audio, or any other kind of resource
     * @param manager
     * @constructor
     */
    constructor(manager: ImageManagerStatic);

    /**
     * checks ttl of all elements and removes dead ones
     */
    checkTTL(): void;

    /**
     * cache item
     * @param key url of cache element
     * @returns {*|null}
     */
    getItem(key: string): any;

    clear(): void;
    setItem(key, item): CacheEntry;
    update(ticks: number, delta: number): void;
}


interface DecrypterStatic {
    hasEncryptedImages: boolean;
    hasEncryptedAudio: boolean;

    _requestImgFile: Array<string>;
    _headerlength: number;
    _xhrOk: number;
    _encryptionKey: string;
    _ignoreList: Array<string>;

    SIGNATURE: string;
    VER: string;
    REMAIN: string;

    checkImgIgnore(url: string): boolean;
    decryptImg(url: string, bitmap: Bitmap): void;
    decryptHTML5Audio(url: string, bgm: MV.AudioParameters, pos?: number): void;
    cutArrayHeader(arrayBuffer: ArrayBuffer, length: number): ArrayBuffer;
    decryptArrayBuffer(arrayBuffer: ArrayBuffer): void;
    createBlobUrl(arrayBuffer: ArrayBuffer): string;
    extToEncryptExt(url: string): string;
    readEncryptionkey(): void;
}
declare var Decrypter: DecrypterStatic;declare namespace RPG {
    export interface MetaData {
        /**
         * The text of the note.
         */
        note: string;

        /**
         * The Meta.
         */
        meta: {[key: string]: any};
    }

    /**
     * The data class for maps.
     */
    export interface Map extends MetaData {
        /**
         * The map's display name.
         */
        displayName: string;

        /**
         * The map's tile set.
         */
        tilesetId: number;

        /**
         * The map's width.
         */
        width: number;

        /**
         * The map's height.
         */
        height: number;

        /**
         * The scroll type (0: No Loop, 1: Vertical Loop, 2: Horizontal Loop, 3: Both Loop).
         */
        scrollType: number;

        /**
         * The truth value indicating whether the battle background specification is enabled.
         */
        specifyBattleback: boolean;

        /**
         * The file name of the floor graphic if the battle background specification is enabled.
         */
        battleback1Name: string;

        /**
         * The file name of the wall graphic if the battle background specification is enabled.
         */
        battleback2_name: string;

        /**
         * The truth value indicating whether BGM autoswitching is enabled.
         */
        autoplayBgm: boolean;

        /**
         * The name of that BGM (RPG.AudioFile) if BGM autoswitching is enabled.
         */
        bgm: AudioFile;

        /**
         * The truth value indicating whether BGS autoswitching is enabled.
         */
        autoplayBgs: boolean;

        /**
         * The name of that BGS (RPG.AudioFile) if BGS autoswitching is enabled.
         */
        bgs: AudioFile;

        /**
         * The truth value of the [Disable Dashing] option.
         */
        disableDashing: boolean;

        /**
         * An encounter list. A RPG.Map.Encounter ID array.
         */
        encounterList: Array<Map.Encounter>;

        /**
         * The average number of steps between encounters.
         */
        encounterStep: number;

        /**
         * The file name of the parallax background's graphic.
         */
        parallaxName: string;

        /**
         * The truth value of the [Loop Horizontal] option for the parallax background.
         */
        parallaxLoopX: boolean;

        /**
         * The truth value of the [Loop Vertical] option for the parallax background.
         */
        parallaxLoopY: boolean;

        /**
         * The automatic x-axis scrolling speed for the parallax background.
         */
        parallaxSx: number;

        /**
         * The automatic y-axis scrolling speed for the parallax background.
         */
        parallaxSy: number;

        /**
         * The truth value of the [Show in the Editor] option for the parallax background.
         */
        parallaxShow: boolean;

        /**
         * The map data. A 3-dimensional tile ID array (Table).
         */
        data: Array<number>;

        /**
         * The array of RPG.Event data.
         */
        events: Array<Event>;
    }

    namespace Map {
        /**
         * The data class for the encounter settings.
         */
        export interface Encounter {
            /**
             * The enemy troop ID.
             */
            troopId: number;

            /**
             * Weight.
             */
            weight: number;

            /**
             * An array containing region IDs.
             */
            regionSet: Array<number>;
        }
    }

    /**
     * The data class for map information.
     */
    export interface MapInfo {
        /**
         * The map name.
         */
        name: string;

        /**
         * The parent map ID.
         */
        parentId: number;

        /**
         * The map tree display order, which is used internally.
         */
        order: number;
    }

    /**
     * The data class for map events.
     */
    export interface Event extends MetaData {
        /**
         * The event ID.
         */
        id: number;

        /**
         * The event name.
         */
        name: string;

        /**
         * The event's x-coordinate on the map.
         */
        x: number;

        /**
         * The event's y-coordinate on the map.
         */
        y: number;

        /**
         * The event pages. RPG.EventPage array.
         */
        pages: Array<EventPage>;
    }

    /**
     * The data class for the event page.
     */
    export interface EventPage {
        /**
         * The event condition (RPG.EventPage.Condition).
         */
        conditions: EventPage.Conditions;

        /**
         * The event graphic (RPG.EventPage.Image) .
         */
        image: EventPage.Image;

        /**
         * The type of movement (0: fixed, 1: random, 2: approach, 3: custom).
         */
        moveType: number;

        /**
         * The movement speed (1: x8 slower, 2: x4 slower, 3: x2 slower, 4: normal, 5: x2 faster, 6: x4 faster).
         */
        moveSpeed: number;

        /**
         * The movement frequency (1: lowest, 2: lower, 3: normal, 4: higher, 5: highest).
         */
        moveFrequency: number;

        /**
         * The movement route (RPG.MoveRoute). Referenced only when the movement type is set to custom.
         */
        moveRoute: Array<MoveRoute>;

        /**
         * The truth value of the [Walking Animation] option.
         */
        walkAnime: boolean;

        /**
         * The truth value of the [Stepping Animation] option.
         */
        stepAnime: boolean;

        /**
         * The truth value of the [Direction Fix] option.
         */
        directionFix: boolean;

        /**
         * The truth value of the [Through] option.
         */
        through: boolean;

        /**
         * The priority type (0: below characters, 1: same as characters, 2: above characters).
         */
        priorityType: number;

        /**
         * The event trigger (0: action button, 1: player touch, 2: event touch, 3: autorun, 4: parallel).
         */
        trigger: number;

        /**
         * A list of event commands. An RPG.EventCommand array.
         */
        list: Array<EventCommand>;
    }

    namespace EventPage {
        /**
         * The data class for the event page conditions.
         */
        export interface Conditions {
            /**
             * The truth value indicating whether the first [Switch] condition is valid.
             */
            switch1Valid: boolean;

            /**
             * The truth value indicating whether the second [Switch] condition is valid.
             */
            switch2Valid: boolean;

            /**
             * The truth value indicating whether the [Variable] condition is valid.
             */
            variableValid: boolean;

            /**
             * The truth value indicating whether the [Self Switch] condition is valid.
             */
            selfSwitchValid: boolean;

            /**
             * The truth value indicating whether the [Item] condition is valid.
             */
            itemValid: boolean;

            /**
             * The truth value indicating whether the [Actor] condition is valid.
             */
            actorValid: boolean;

            /**
             * The ID of that switch if the first [Switch] condition is valid.
             */
            switch1Id: number;

            /**
             * The ID of that switch if the second [Switch] condition is valid.
             */
            switch2Id: number;

            /**
             * The ID of that variable if the [Variable] condition is valid.
             */
            variableId: number;

            /**
             * The standard value of that variable (x and greater) if the [Variable] condition is valid.
             */
            variableValue: number;

            /**
             * The letter of that self switch ("A".."D") if the [Self Switch] condition is valid.
             */
            selfSwitchCh: string;

            /**
             * The ID of that item if the [Item] condition is valid.
             */
            itemId: number;

            /**
             * The ID of that actor if the [Actor] condition is valid.
             */
            actorId: number;
        }

        /**
         * The data class for the Event page [Graphics].
         */
        export interface Image {
            /**
             * The tile ID. If the specified graphic is not a tile, this value is 0.
             */
            tileId: number;

            /**
             * The file name of the character's graphic.
             */
            characterName: string;

            /**
             * The index of the character's graphic file (0..7).
             */
            characterIndex: number;

            /**
             * The direction in which the character is facing (2: down, 4: left, 6: right, 8: up).
             */
            direction: number;

            /**
             * The character's pattern (0..2).
             */
            pattern: number;
        }
    }

    /**
     * The data class for the event page.
     */
    export interface BattleEventPage {
         /**
          * The event condition (RPG.EventPage.Condition).
          */
         conditions: BattleEventPage.Conditions;

         /**
          * A list of event commands. An RPG.EventCommand array.
          */
         list: Array<EventCommand>;

         /**
          * The span.
          */
         span: number;
    }

    namespace BattleEventPage {
        /**
         * The data class for the event page conditions.
         */
        export interface Conditions {
            /**
             * The percentage of actor HP.
             */
            actorHp: number;

            /**
             * The ID of that actor if the [Actor] condition is valid.
             */
            actorId: number;

            /**
             * The truth value indicating whether the [Actor] condition is valid.
             */
            actorValid: boolean;

            /**
             * The percentage of enemy HP.
             */
            enemyHp: number;

            /**
             * The enemy index.
             */
            enemyIndex: number;

            /**
             * The truth value indicating whether the [Enemy] condition is valid.
             */
            enemyValid: boolean;

            /**
             * The ID of that switch if the [Switch] condition is valid.
             */
            switchId: number;

            /**
             * The truth value indicating whether the [Switch] condition is valid.
             */
            switchValid: boolean;

            /**
             * The turn condition value A.
             */
            turnA: number;

            /**
             * The turn condition value B.
             */
            turnB: number;

            /**
             * The boolean value indicating whether the "turn end" is valid.
             */
            turnEnding: boolean;

            /**
             * The boolean value indicating whether the "turn" is valid.
             */
            turnValid: boolean;
        }
    }

    /**
     * The data class for the Event command.
     */
    export interface EventCommand {
        /**
         * The event code.
         */
        code: number;

        /**
         * The indent depth. Usually 0. The [Conditional Branch] command, among others, adds 1 with every step deeper.
         */
        indent: number;

        /**
         * An array containing the Event command's arguments. The contents vary for each command.
         */
        parameters: Array<any>;
    }

    /**
     * The data class for the Move route.
     */
    export interface MoveRoute {
        /**
         * The truth value of the [Repeat Action] option.
         */
        repeat: boolean;

        /**
         * The truth value of the [Skip If Cannot Move] option.
         */
        skippable: boolean;

        /**
         * The truth value of the [Wait for Completion] option.
         */
        wait: boolean;

        /**
         * Program contents. An RPG.MoveCommand array.
         */
        list: Array<MoveCommand>;
    }

    /**
     * The data class for the Move command.
     */
    export interface MoveCommand {
        /**
         * Move command code.
         */
        code: number;

        /**
         * An array containing the Move command's arguments. The contents vary for each command.
         */
        parameters: Array<any>;
    }

    /**
     * The data class for actors.
     */
    export interface Actor extends MetaData {
        /**
         * The ID.
         */
        id: number;

        /**
         * The name.
         */
        name: string;

        /**
         * The actor's nickname.
         */
        nickname: string;

        /**
         * The actor's class ID.
         */
        classId: number;

        /**
         * The actor's initial level.
         */
        initialLevel: number;

        /**
         * The actor's max level
         */
        maxLevel: number;

        /**
         * The file name of the actor's walking graphic.
         */
        characterName: string;

        /**
         * The index (0..7) of the actor's walking graphic.
         */
        characterIndex: number;

        /**
         * The file name of the actor's face graphic.
         */
        faceName: string;

        /**
         * The index (0..7) of the actor's face graphic.
         */
        faceIndex: number;

        /**
         * The file name of the actor's battler graphic.
         */
        battlerName: string;

        /**
         * The actor's initial equipment. An array of weapon IDs or armor IDs with the following subscripts:
         */
        equips: Array<number>;

        /**
         * The profile.
         */
        profile: string;

        /**
         * The array of Trait data.
         */
        traits: Array<Trait>;
    }

    /**
     * The data class for class.
     */
    export interface Class extends MetaData {
        /**
         * The ID.
         */
        id: number;

        /**
         * The name.
         */
        name: string;

        /**
         * An array of values that decides the experience curve. The subscripts are as follows:
         *
         * 0: Base value
         * 1: Extra value
         * 2: Acceleration A
         * 3: Acceleration B
         */
        expParams: Array<number>;

        /**
         * The parameter development curve. A 2-dimensional array containing ordinary parameters according to level (Table).
         *
         * The format is params[param_id, level], and param_id is assigned as follows:
         *
         * 0: Maximum hit points
         * 1: Maximum magic points
         * 2: Attack power
         * 3: Defense power
         * 4: Magic attack power
         * 5: Magic defense power
         * 6: Agility
         * 7: Luck
         */
        params: Array<Array<number>>;

        /**
         * The skills to learn. An array of RPG.Class.Learning.
         */
        learnings: Array<Class.Learning>;

        /**
         * The array of Trait data.
         */
        traits: Array<Trait>;
    }

    namespace Class {
        /**
         * The data class for a class's [Skills to Learn].
         */
        export interface Learning extends MetaData {
            /**
             * The data class for a class's [Skills to Learn].
             */
            level: number;

            /**
             * The ID of the skill to learn.
             */
            skillId: number;
        }
    }

    /**
     * A superclass of actor, class, skill, item, weapon, armor, enemy, and state.
     *
     * Some items are unnecessary depending on the type of data, but they are included for convenience sake.
     */
    export interface BaseItem extends MetaData {
        /**
         * The item ID.
         */
        id: number;

        /**
         * The item name.
         */
        name: string;

        /**
         * The icon number.
         */
        iconIndex: number;

        /**
         * The description text.
         */
        description: string;
    }
    /**
     * The Superclass of Skill and Item.
     */

    export interface UsableItem extends BaseItem {
        /**
         * The scope of effects.
         *
         * 0: None
         * 1: One Enemy
         * 2: All Enemies
         * 3: One Random Enemy
         * 4: Two Random Enemies
         * 5: Three Random Enemies
         * 6: Four Random Enemies
         * 7: One Ally
         * 8: All Allies
         * 9: One Ally (Dead)
         * 10: All Allies (Dead)
         * 11: The User
         */
        scope: number;

        /**
         * When the item/skill may be used.
         *
         * 0: Always
         * 1: Only in battle
         * 2: Only from the menu
         * 3: Never
         */
        occasion: number;

        /**
         * The speed correction.
         */
        speed: number;

        /**
         * The success rate.
         */
        successRate: number;

        /**
         * The number of repeats.
         */
        repeats: number;

        /**
         * The number of TP gained.
         */
        tpGain: number;

        /**
         * The type of hit.
         *
         * 0: Certain hit
         * 1: Physical attack
         * 2: Magical attack
         */
        hitType: number;

        /**
         * The animation ID.
         */
        animationId: number;

        /**
         * Damage (RPG.Damage).
         */
        damage: Damage;

        /**
         * A list of use effects. An RPG.Effect array.
         */
        effects: Array<Effect>;
    }
    /**
     * The data class for skills.
     */

    export interface Skill extends UsableItem {
        /**
         * Skill type ID.
         */
        stypeId: number;

        /**
         * Number of MP consumed.
         */
        mpCost: number;

        /**
         * Number of TP consumed
         */
        tpCost: number;

        /**
         * The use message.
         */
        message1: string;

        /**
         * The use message.
         */
        message2: string;

        /**
         * Weapon type required.
         */
        requiredWtypeId1: number;

        /**
         * Weapon type required.
         */
        requiredWtypeId2: number;
    }
    /**
     * The data class for items.
     */
    export interface Item extends UsableItem {
        /**
         * The item type ID.
         *
         * 1: Regular item
         * 2: Key item
         */
        itypeId: number;

        /**
         * The item's price.
         */
        price: number;

        /**
         * The truth value indicating whether the item disappears when used.
         */
        consumable: boolean;
    }

    /**
     * A superclass of weapons and armor.
     */
    export interface EquipItem extends BaseItem {
        /**
         * The price of the weapon or armor.
         */
        price: number;

        /**
         * The type of weapon or armor.
         *
         * 0: Weapon
         * 1: Shield
         * 2: Head
         * 3: Body
         * 4: Accessory
         */
        etypeId: number;

        /**
         * The amount of parameter change. An array of integers using the following IDs as subscripts:
         *
         * 0: Maximum hit points
         * 1: Maximum magic points
         * 2: Attack power
         * 3: Defense power
         * 4: Magic attack power
         * 5: Magic defense power
         * 6: Agility
         * 7: Luck
         */
        params: Array<number>;

        /**
         * The array of Trait data.
         */
        traits: Array<Trait>;
    }

    /**
     * The data class for weapons.
     */
    export interface Weapon extends EquipItem {
        /**
         * The weapon type ID.
         */
        wtypeId: number;

        /**
         * The animation ID when using the weapon.
         */
        animationId: number;
    }

    /**
     * The data class for armor.
     */
    export interface Armor extends EquipItem {
        /**
         * The armor type ID.
         */
        atypeId: number;
    }

    /**
     * The data class for enemies.
     */
    export interface Enemy extends MetaData {
        /**
         * The file name of the enemy's battler graphic.
         */
        battlerName: string;

        /**
         * The adjustment value for the battler graphic's hue (0..360).
         */
        battlerHue: number;
      
      /**
       * The name of the enemy in the database.
       * 
       * @type {string}
       * @memberof Enemy
       */
        name: string
      
      /**
       * The ID of the enemy in the database.
       * 
       * @type {number}
       * @memberof Enemy
       */
      id:number 

        /**
         * Parameters. An array of integers using the following IDs as subscripts:
         *
         * 0: Maximum hit points
         * 1: Maximum magic points
         * 2: Attack power
         * 3: Defense power
         * 4: Magic attack power
         * 5: Magic defense power
         * 6: Agility
         * 7: Luck
         */
        params: Array<number>;

        /**
         * The enemy's experience.
         */
        exp: number;

        /**
         * The enemy's gold.
         */
        gold: number;

        /**
         * The items the enemy drops. An RPG.Enemy.DropItem array.
         */
        dropItems: Array<Enemy.DropItem>;

        /**
         * The enemy's action pattern. An array of RPG.Enemy.Action.
         */
        actions: Array<Enemy.Action>;
    }

    namespace Enemy {
        /**
         * The data class for enemy [Drop Items].
         */
        export interface DropItem {
            /**
             * The type of dropped item.
             *
             * 0: None
             * 1: Item
             * 2: Weapon
             * 3: Armor
             */
            kind: number;

            /**
             * The ID of the data depending on the type of dropped item (item, weapon, or armor).
             */
            dataId: number;

            /**
             * N of the probability that the item will be dropped, 1/N.
             */
            denominator: number;
        }

        /**
         * The data class for enemy [Actions].
         */
        export interface Action {
            /**
             * The ID of skills to be employed as actions.
             */
            skillId: number;

            /**
             * The type of condition.
             *
             * 0: Always
             * 1: Turn No.
             * 2: HP
             * 3: MP
             * 4: State
             * 5: Party Level
             * 6: Switch
             */
            conditionType: number;

            /**
             * The first parameter of the condition.
             */
            conditionParam1: number;

            /**
             * The second parameter of the condition.
             */
            conditionParam2: number;

            /**
             * The action's priority rating (1..10).
             */
            rating: number;
        }
    }

    /**
     * The data class for state.
     */
    export interface State extends MetaData {
        /**
         * The ID.
         */
        id: number;

        /**
         * The name.
         */
        name: string;

        /**
         * Action restrictions.
         *
         * 0: None
         * 1: Attack enemy
         * 2: Attack enemy or ally
         * 3: Attack ally
         * 4: Cannot act
         */
        restriction: number;

        /**
         * The state priority (0..100).
         */
        priority: number;

        /**
         * Removes state at end of battle (true/false).
         */
        removeAtBattleEnd: boolean;

        /**
         * Removes state by action restriction (true/false).
         */
        removeByRestriction: boolean;

        /**
         * The timing of automatic state removal.
         *
         * 0: None
         * 1: At end of action
         * 2: At end of turn
         */
        autoRemovalTiming: number;

        /**
         * The minimum turns of the duration.
         */
        minTurns: number;

        /**
         * The maximum turns of the duration.
         */
        maxTurns: number;

        /**
         * Removes state by damage (true/false).
         */
        removeByDamage: boolean;

        /**
         * Chance of state being removed by damage (%).
         */
        chanceByDamage: number;

        /**
         * Removes state by walking (true/false).
         */
        removeByWalking: boolean;

        /**
         * Number of steps until state is removed.
         */
        stepToRemove: number;

        /**
         * The icon number.
         */
        iconIndex: number;

        /**
         * The message when an actor fell in the state.
         */
        message1: string;

        /**
         * The message when an enemy fell in the state.
         */
        message2: string;

        /**
         * The message when the state remains.
         */
        message3: string;

        /**
         * The message when the state is removed.
         */
        message4: string;

        /**
         * The side-view motion.
         */
        motion: number;

        /**
         * The side-view overlay.
         */
        overlay: number;

        /**
         * The array of Trait data.
         */
        traits: Array<Trait>;
        releaseByDamage?: boolean;
        description?: string;
    }

    export interface Trait {
        /**
         * The trait code.
         */
        code: number;

        /**
         * The ID of the data (such as elements or states) according to the type of the trait.
         */
        dataId: number;

        /**
         * The value set according to the type of the trait.
         */
        value: number;

        /**
         * The map tree expansion flag, which is used internally.
         */
        expanded: boolean;

        /**
         * The x-axis scroll position, which is used internally.
         */
        scrollX: number;

        /**
         * The y-axis scroll position, which is used internally.
         */
        scrollY: number;
    }

    /**
     * The data class for damage.
     */
    export interface Damage {
        /**
         * The type of damage.
         *
         * 0: None
         * 1: HP damage
         * 2: MP damage
         * 3: HP recovery
         * 4: MP recovery
         * 5: HP drain
         * 6: MP drain
         */
        type: number;

        /**
         * The element ID.
         */
        elementId: number;

        /**
         * The formula.
         */
        formula: string;

        /**
         * The degree of variability.
         */
        variance: number;

        /**
         * Critical hit (true/false).
         */
        critical: boolean;
    }

    /**
     * The data class for use effects.
     */
    export interface Effect {
        /**
         * The use effect code.
         */
        code: number;

        /**
         * The ID of data (state, parameter, and so on) according to the type of use effect.
         */
        dataId: number;

        /**
         * Value 1 set according to the type of use effect.
         */
        value1: number;

        /**
         * Value 2 set according to the type of use effect.
         */
        value2: number;
    }

    /**
     * The data class for enemy troops.
     */
    export interface Troop {
        /**
         * The troop ID.
         */
        id: number;

        /**
         * The troop name.
         */
        name: string;

        /**
         * The troop members. An RPG.Troop.Member array.
         */
        members: Array<RPG.Troop.Member>;

        /**
         * The battle events. An RPG.Troop.Page array.
         */
        pages: Array<RPG.Troop.Page>;
    }

    namespace Troop {
        /**
         * The data class for enemy troop members.
         */
        export interface Member {
            /**
             * The enemy ID.
             */
            enemyId: number;

            /**
             * The troop member's x-coordinate.
             */
            x: number;

            /**
             * The troop member's y-coordinate.
             */
            y: number;

            /**
             * The truth value of the [Appear Halfway] option.
             */
            hidden: boolean;
        }

        /**
         * The data class for battle events (pages).
         */
        export interface Page {
            /**
             * Condition (RPG.Troop.Page.Condition).
             */
            condition: Page.Condition;

            /**
             * Span (0: battle, 1: turn, 2: moment).
             */
            span: number;

            /**
             * Program contents. An RPG.EventCommand array.
             */
            list: Array<EventCommand>;
        }

        namespace Page {
            /**
             * The data class of battle event [Conditions].
             */
            export interface Condition {
                /**
                 * The truth value indicating whether the [At End of Turn] condition is valid.
                 */
                turnEnding: boolean;

                /**
                 * The truth value indicating whether the [Turn No.] condition is valid.
                 */
                turnValid: boolean;

                /**
                 * The truth value indicating whether the [Enemy] condition is valid.
                 */
                enemyValid: boolean;

                /**
                 * The truth value indicating whether the [Actor] condition is valid.
                 */
                actorValid: boolean;

                /**
                 * The truth value indicating whether the [Switch] condition is valid.
                 */
                switchValid: boolean;

                /**
                 * The a and b values specified in the [Turn No.] condition. To be input in the form A + B * X.
                 */
                turnA: number;

                /**
                 * The a and b values specified in the [Turn No.] condition. To be input in the form A + B * X.
                 */
                turnB: number;

                /**
                 * The troop member index specified in the [Enemy] condition (0..7).
                 */
                enemyIndex: number;

                /**
                 * The HP percentage specified in the [Enemy] condition.
                 */
                enemyHp: number;

                /**
                 * The actor ID specified in the [Actor] condition.
                 */
                actorId: number;

                /**
                 * The HP percentage specified in the [Actor] condition.
                 */
                actorHp: number;

                /**
                 * The switch ID specified in the [Switch] condition.
                 */
                switchId: number;
            }
        }
    }

    /**
     * The data class for animation.
     */
    export interface Animation {
        /**
         * The animation ID.
         */
        id: number;

        /**
         * The animation name.
         */
        name: string;

        /**
         * The file name of the first animation's graphic.
         */
        animation1Name: string;

        /**
         * The adjustment value for the hue of the first animation's graphic (0..360).
         */
        animation1Hue: number;

        /**
         * The file name of the second animation's graphic.
         */
        animation2Name: string;

        /**
         * The adjustment value for the hue of the second animation's graphic (0..360).
         */
        animation2Hue: number;

        /**
         * The base position (0: head, 1: center, 2: feet, 3: screen).
         */
        position: number;

        /**
         * Number of frames.
         */
        frameMax: number;

        /**
         * The three-dimensional array containing the frame contents.
         */
        frames: Array<Array<Array<number>>>;

        /**
         * Timing for SE and flash effects. An RPG.Animation.Timing array.
         */
        timings: Array<Animation.Timing>;
    }

    namespace Animation {
        /**
         * The data class for the timing of an animation's SE and flash effects.
         */
        export interface Timing {
            /**
             * The frame number. 1 less than the number displayed in RPG Maker.
             */
            frame: number;

            /**
             * The sound effect or SE (RPG.AudioFile).
             */
            se: AudioFile;

            /**
             * The flash area (0: none, 1: target, 2: screen; 3: hide target).
             */
            flashScope: number;

            /**
             * The color of the flash (Color).
             */
            flashColor: Array<number>;

            /**
             * The duration of the flash.
             */
            flashDuration: number;
        }
    }

    /**
     * The data class for tile sets.
     */
    export interface Tileset extends MetaData {
        /**
         * The ID of the tile set.
         */
        id: number;

        /**
         * The name of the tile set.
         */
        name: string;

        /**
         * The mode of the tile set (0: Field type, 1: Area type, 2: VX compatible type).
         */
        mode: number;

        /**
         * The file name of the graphic used as the number index (0-8) tile set.
         *
         * The correspondence between numbers and sets is illustrated in the table below.
         *
         * 0 TileA1
         * 1 TileA2
         * 2 TileA3
         * 3 TileA4
         * 4 TileA5
         * 5 TileB
         * 6 TileC
         * 7 TileD
         * 8 TileE
         */
        tilesetNames: Array<string>;

        /**
         * The flags table. A 1-dimensional array containing a variety of flags (Table).
         *
         * Uses tile IDs as subscripts. The correspondence of each bit is as shown below:
         *
         * 0x0001: Impassable downward
         * 0x0002: Impassable leftward
         * 0x0004: Impassable rightward
         * 0x0008: Impassable upward
         * 0x0010: Display on normal character
         * 0x0020: Ladder
         * 0x0040: Bush
         * 0x0080: Counter
         * 0x0100: Damage floor
         * 0x0200: Impassable by boat
         * 0x0400: Impassable by ship
         * 0x0800: Airship cannot land
         * 0xF000: Terrain tag
         * This manual does not discuss bit operations, but they are similar to those in C.
         * We recommend an Internet search using keywords such as "hexadecimal bit operations" when necessary.
         */
        flags: Array<number>;
    }

    /**
     * The data class for common events.
     */
    export interface CommonEvent {
        /**
         * The event ID.
         */
        id: number;

        /**
         * The event name.
         */
        name: string;

        /**
         * The event trigger (0: none, 1: autorun; 2: parallel).
         */
        trigger: number;

        /**
         * The condition switch ID.
         */
        switchId: number;

        /**
         * A list of event commands. An RPG.EventCommand array.
         */
        list: Array<EventCommand>;
    }

    export interface System {
        /**
         * The game title.
         */
        gameTitle: string;

        /**
         * A random number used for update checks. The number changes every time data is saved in RPG Maker.
         */
        versionId: number;

        /**
         * The locale string such as "ja_JP" and "en_US".
         */
        locale: string;

        /**
         * The initial party. An array of actor IDs.
         */
        partyMembers: Array<number>;

        /**
         * The unit of currency.
         */
        currencyUnit: string;

        /**
         * The window color.
         */
        windowTone: Array<number>;

        /**
         * The array of System.AttackMotion data.
         */
        attackMotions: Array<System.AttackMotion>;

        /**
         * A list of elements. A string array using element IDs as subscripts, with the element in the 0 position being nil.
         */
        elements: Array<string>;

        /**
         * he equipment type. A string array with the following subscripts:
         * 1: Weapon
         * 2: Shield
         * 3: Head
         * 4: Body
         * 5: Accessory
         */
        equipTypes: Array<string>;

        /**
         * A list of skill types. A string array using skill type IDs as subscripts, with the element in the 0 position being nil.
         */
        skillTypes: Array<string>;

        /**
         * A list of weapon types. A string array using weapon type IDs as subscripts, with the element in the 0 position being nil.
         */
        weaponTypes: Array<string>;

        /**
         * A list of armor types. A string array using armor type IDs as subscripts, with the element in the 0 position being nil.
         */
        armorTypes: Array<string>;

        /**
         * A switch name list. A string array using switch IDs as subscripts, with the element in the 0 position being nil.
         */
        switches: Array<string>;

        /**
         * A variable name list. A string array using variable IDs as subscripts, with the element in the 0 position being nil.
         */
        variables: Array<string>;

        /**
         * Boat settings (RPG.System.Vehicle).
         */
        boat: System.Vehicle;

        /**
         * Ship settings (RPG.System.Vehicle).
         */
        ship: System.Vehicle;

        /**
         * Airship settings (RPG.System.Vehicle).
         */
        airship: System.Vehicle;

        /**
         * The file name of the title (background) graphic.
         */
        title1Name: string;

        /**
         * The file name of the title (frame) graphic.
         */
        title2Name: string;

        /**
         * The truth value of the [Draw Game Title] option.
         */
        optDrawTitle: boolean;

        /**
         * The truth value of the [Start Transparent] option.
         */
        optTransparent: boolean;

        /**
         * The truth value of the [Show Player Followers] option.
         */
        optFollowers: boolean;

        /**
         * The truth value of the [K.O. by Slip Damage] option.
         */
        optSlipDeath: boolean;

        /**
         * The truth value of the [K.O. by Floor Damage] option.
         */
        optFloorDeath: boolean;

        /**
         * The truth value of the [Display TP in Battle] option.
         */
        optDisplayTp: boolean;

        /**
         * The truth value of the [Reserve Members' EXP] option.
         */
        optExtraExp: boolean;

        /**
         * The truth value of the [use side-view battle] option.
         */
        optSideView: boolean;

        /**
         * The title BGM (RPG.AudioFile).
         */
        titleBgm: AudioFile;

        /**
         * The battle BGM (RPG.AudioFile).
         */
        battleBgm: AudioFile;

        /**
         * The battle end ME (RPG.AudioFile).
         */
        battleEndMe: AudioFile;

        /**
         * The gameover ME (RPG.AudioFile).
         */
        gameoverMe: AudioFile;

        /**
         * Sound effects. An RPG.SE array.
         */
        sounds: Array<AudioFile>;

        /**
         * The map ID of the player's initial position.
         */
        startMapId: number;

        /**
         * The map's x-coordinate of the player's initial position.
         */
        startX: number;

        /**
         * The map's y-coordinate of the player's initial position.
         */
        startY: number;

        /**
         * Terms (RPG.System.Terms).
         */
        terms: System.Terms;

        /**
         * Party settings for battle tests. An RPG.System.TestBattler array.
         */
        testBattlers: Array<System.TestBattler>;

        /**
         * The enemy troop ID for battle tests.
         */
        testTroopId: number;

        /**
         * The file name of the battle background (floor) graphic for use in editing enemy troops and battle tests.
         */
        battleback1Name: string;

        /**
         * The file name of the battle background (wall) graphic for use in editing enemy troops and battle tests.
         */
        battleback2Name: string;

        /**
         * The battler graphic file name for use in editing animations.
         */
        battlerName: string;

        /**
         * The adjustment value for the battler graphic's hue (0..360) for use in editing animations.
         */
        battlerHue: number;

        /**
         * The ID of the map currently being edited. For internal use.
         */
        editMapId: number;
    }

    namespace System {
        /**
         * The data class for vehicles.
         */
        export interface Vehicle {
            /**
             * The file name of the vehicle's walking graphic.
             */
            characterName: string;
            /**

             * The index of the vehicle's walking graphic (0..7).
             */
            characterIndex: number;

            /**
             * The vehicle's BGM (RPG.AudioFile).
             */
            bgm: AudioFile;

            /**
             * The map ID of the vehicle's initial position.
             */
            startMapId: number;

            /**
             * The map's x-coordinate of the vehicle's initial position.
             */
            startX: number;

            /**
             * The map's y-coordinate of the vehicle's initial position.
             */
            startY: number;
        }

        /**
         * The data class for terminology.
         */
        export interface Terms {
            /**
             * The basic status. A string array with the following subscripts:
             *
             * 0: Level
             * 1: Level (short)
             * 2: HP
             * 3: HP (short)
             * 4: MP
             * 5: MP (short)
             * 6: TP
             * 7: TP (short)
             * 8: EXP
             * 9: EXP (short)
             */
            basic: Array<string>;

            /**
             * Parameters. A string array with the following subscripts:
             *
             * 0: Maximum hit points
             * 1: Maximum magic points
             * 2: Attack power
             * 3: Defense power
             * 4: Magic attack power
             * 5: Magic defense power
             * 6: Agility
             * 7: Luck
             * 8: Hit
             * 9: Evasion
             */
            params: Array<string>;

            /**
             * 0: Fight
             * 1: Escape
             * 2: Attack
             * 3: Defend
             * 4: Item
             * 5: Skill
             * 6: Equip
             * 7: Status
             * 8: Sort
             * 9: Save
             * 10: Exit Game
             * 11: Option
             * 12: Weapon
             * 13: Armor
             * 14: Key Item
             * 15: Change Equipment
             * 16: Ultimate Equipment
             * 17: Remove All
             * 18: New Game
             * 19: Continue
             * 20: (not used)
             * 21: Go to Title
             * 22: Cancel
             * 23: (not used)
             * 24: Buy
             * 25: Sell
             */
            commands: Array<string>;

            /**
             * The messages.
             */
            messages: {[key: string]: string};
        }

        /**
         * The data class for the actors used in battle tests.
         */
        export interface TestBattler {
            /**
             * The actor ID.
             */
            actorId: number;

            /**
             * The actor's level.
             */
            level: number;

            /**
             * The actor's equipment. An array of weapon IDs or armor IDs with the following subscripts:
             *
             * 0: Weapon
             * 1: Shield
             * 2: Head
             * 3: Body
             * 4: Accessory
             */
            equips: Array<number>;
        }

        export interface AttackMotion {
            /**
             * The type of the motion.
             */
            type: number;

            /**
             * The ID of the weapon image.
             */
            weaponImageId: number;
        }
    }

    /**
     * The data class for audio file.
     */
    export interface AudioFile {
        /**
         * The sound file name.
         */
        name: string;

        /**
         * The pan.
         */
        pan: number;

        /**
         * The sound's pitch (50..150). The default value is 100.
         */
        pitch: number;

        /**
         * The sound's volume (0..100). The default values are 100 for BGM and ME and 80 for BGS and SE.
         */
        volume: number;
    }
}
declare namespace MV {
    export interface Matrix {
        type: string;
        value: Array<number>;
    }
    export interface TouchInputEvents {
        trigger: boolean;
        cancelled: boolean;
        moved: boolean;
        released: boolean;
        wheelX: number;
        wheelY: number;
    }
    export interface AudioParameters {
        name: string;
        volume: number;
        pitch: number;
        pan: number;
        pos: number;
    }
    export interface BattleRewards {
        gold: number;
        exp: number;
        items: Array<RPG.BaseItem>;
    }
    export interface BattlerAnimation {
        animationId: number;
        mirror: boolean;
        delay: number;
    }
    export interface CommandItem {
        name: string;
        symbol: string;
        enabled: boolean;
        ext: any;
    }
    export interface TextState {
        index: number;
        x: number;
        y: number;
        left: number;
    }
    export interface BattleLogMethod {
        name: string;
        params: any;
    }
    export interface Motion {
        index: number;
        loop: boolean;
    }
    export interface ConfigData {
        alwaysDash: boolean;
        commandRemember: boolean;
        bgmVolume: number;
        bgsVolume: number;
        meVolume: number;
        seVolume: number;
    }
    export interface DatabaseFile {
        name: string;
        src: string;
    }
    export interface SaveFileInfo {
        globalId: string;
        title: string;
        characters: Array<Array<any>>;
        faces: Array<Array<any>>;
        playtime: string;
        timestamp: number;
    }
    export interface SaveContents {
        system: Game_System;
        screen: Game_Screen;
        timer: Game_Timer;
        switches: Game_Switches;
        variables: Game_Variables;
        selfSwitches: Game_SelfSwitches;
        actors: Game_Actors;
        party: Game_Party;
        map: Game_Map;
        player: Game_Party;
    }
    export interface PluginSettings {
        name: string;
        status: string;
        description: string;
        parameters: {[key: string]: string};
    }
}
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

    isPlaytest(): boolean;
    reserveCommonEvent(commonEventId: number): void;
    clearCommonEvent(): void;
    isCommonEventReserved(): boolean;
    reservedCommonEvent(): void;
    setDestination(x: number, y: number): void;
    clearDestination(): void;
    isDestinationValid(): boolean;
    destinationX(): number;
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
    disableSave(): void;
    enableSave(): void;
    isMenuEnabled(): boolean;
    disableMenu(): void;
    enableMenu(): void;
    isEncounterEnabled(): boolean;
    disableEncounter(): void;
    enableEncounter(): void;
    isFormationEnabled(): boolean;
    disableFormation(): void;
    enableFormation(): void;
    battleCount(): number;
    winCount(): number;
    escapeCount(): number;
    saveCount(): number;
    versionId(): number;
    windowTone(): Array<number>;
    setWindowTone(value: Array<number>): void;
    battleBgm(): RPG.AudioFile;
    setBattleBgm(value: RPG.AudioFile): void;
    victoryMe(): RPG.AudioFile;
    setVictoryMe(value: RPG.AudioFile): void;
    defeatMe(): RPG.AudioFile;
    setDefeatMe(value: RPG.AudioFile): void;
    onBattleStart(): void;
    onBattleWin(): void;
    onBattleEscape(): void;
    onBeforeSave(): void;
    onAfterLoad(): void;
    playtime(): number;
    playtimeText(): string;
    saveBgm(): void;
    replayBgm(): void;
    saveWalkingBgm(): void;
    replayWalkingBgm(): void;
}

/**
 * The game object class for the timer.
 * 
 * @class Game_Timer
 */
declare class Game_Timer {
    protected _frames: number;
    protected _working: boolean;

    update(sceneActive: boolean): void;
    start(count: number): void;
    stop(): void;
    isWorking(): boolean;
    seconds(): number;
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
    faceName(): string;
    faceIndex(): number;
    background(): number;
    positionType(): number;
    choiceDefaultType(): number;
    choiceCancelType(): number;
    choiceBackground(): number;
    choicePositionType(): number;
    numInputVariableId(): number;
    numInputMaxDigits(): number;
    itemChoiceVariableId(): number;
    itemChoiceItypeId(): number;
    scrollMode(): boolean;
    scrollSpeed(): number;
    scrollNoFast(): boolean;
    add(text: string): void;
    setFaceImage(faceName: string, faceIndex: number): void;
    setBackground(background: number): void;
    setPositionType(positionType: number): void;
    setChoices(choices: Array<string>, defaultType: number, cancelType: number): void;
    setChoiceBackground(background: number): void;
    setChoicePositionType(positionType: number): void;
    setNumberInput(variableId: number, maxDigits: number): void;
    setItemChoice(variableId: number, itemType: number): void;
    setScroll(speed: number, noFast: boolean): void;
    setChoiceCallback(callback: ((n: number) => void)): void;
    onChoice(n: number): void;
    hasText(): boolean;
    isChoice(): boolean;
    isNumberInput(): boolean;
    isItemChoice(): boolean;
    isBusy(): boolean;
    newPage(): void;
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
 * The game object class for selfswitches
 * 
 * @class Game_SelfSwitches
 */
declare class Game_SelfSwitches {
    protected _data: {key: Array<any>};

    clear(): void;
    value(key: Array<any>): boolean;
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

    protected _zoomX: number;
    protected _zoomY: number;
    protected _zoomScale: number;
    protected _zoomScaleTarget: number;
    protected _zoomDuration: number;

    protected _weatherType: string;
    protected _weatherPower: number;
    protected _weatherPowerTarget: number;
    protected _weatherDuration: number;

    protected _brightness: number;
    protected _fadeOutDuration: number;
    protected _fadeInDuration: number;

    protected _tone: Array<number>;
    protected _toneTarget: Array<number>;
    protected _toneDuration: number;

    protected _flashColor: Array<number>;
    protected _flashDuration: number;

    protected _pictures: Array<Game_Picture>;

    clear(): void;
    onBattleStart(): void;
    brightness(): number;
    tone(): Array<number>;
    flashColor(): Array<number>;
    shake(): number;
    zoomX(): number;
    zoomY(): number;
    zoomScale(): number;
    weatherType(): string;
    weatherPower(): number;
    picture(pictureId: number): Game_Picture;
    realPictureId(pictureId: number): number;
    clearFade(): void;
    clearTone(): void;
    clearFlash(): void;
    clearShake(): void;
    clearZoom(): void;
    clearWeather(): void;
    clearPictures(): void;
    eraseBattlePictures(): void;
    maxPictures(): number;
    startFadeOut(duration: number): void;
    startFadeIn(duration: number): void;
    startTint(tone: Array<number>, duration: number): void;
    startFlash(color: Array<number>, duration: number): void;
    startShake(power: number, speed: number, duration: number): void;
    startZoom(x: number, y: number, scale: number, duration: number): void;
    setZoom(x: number, y: number, scale: number): void;
    changeWeather(type: string, power: number, duration: number): void;
    update(): void;
    updateFadeOut(): void;
    updateFadeIn(): void;
    updateTone(): void;
    updateFlash(): void;
    updateShake(): void;
    updateZoom(): void;
    updateWeather(): void;
    updatePictures(): void;
    startFlashForDamage(): void;
    showPicture(pictureId: number, name: string, origin: number, x: number, y: number,
                scaleX: number, scaleY: number, opacity: number, blendMode: number): void;
    movePicture(pictureId: number, origin: number, x: number, y: number,
                scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number): void;
    rotatePicture(pictureId: number, speed: number): void;
    tintPicture(pictureId: number, tone: Array<number>, duration: number): void;
    erasePicture(pictureId: number): void;
}

/**
 * The game object class for a picture.
 * 
 * @class Game_Picture
 */
declare class Game_Picture {
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

    name(): string;
    origin(): number;
    x(): number;
    y(): number;
    scaleX(): number;
    scaleY(): number;
    opacity(): number;
    blendMode(): number;
    tone(): Array<number>;
    angle(): number;
    initBasic(): void;
    initTarget(): void;
    initTone(): void;
    initRotation(): void;
    show(name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number): void;
    move(origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number): void;
    rotate(speed: number): void;
    tint(tone: Array<number>, duration: number): void;
    erase(): void;
    update(): void;
    updateMove(): void;
    updateTone(): void;
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
    isSkill(): boolean;
    isItem(): boolean;
    isUsableItem(): boolean;
    isWeapon(): boolean;
    isArmor(): boolean;
    isEquipItem(): boolean;
    isNull(): boolean;
    itemId(): number;
    object(): RPG.BaseItem;
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

    clear(): void;
    addedStateObjects(): Array<RPG.State>;
    removedStateObjects(): Array<RPG.State>;
    isStatusAffected(): boolean;
    isHit(): boolean;
    isStateAdded(stateId: number): boolean;
    pushAddedState(stateId: number): void;
    isStateRemoved(stateId: number): boolean;
    pushRemovedState(stateId: number): void;
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
    eraseState(stateId: number): void;
    isStateAffected(stateId: number): boolean;
    isDeathStateAffected(): boolean;
    deathStateId(): number;
    resetStateCounts(stateId: number): void;
    isStateExpired(stateId: number): boolean;
    updateStateTurns(): void;
    clearBuffs(): void;
    eraseBuff(paramId: number): void;
    buffLength(): number;
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
    updateBuffTurns(): void;
    die(): void;
    revive(): void;
    states(): Array<RPG.State>;
    stateIcons(): Array<number>;
    buffIcons(): Array<number>;
    buffIconIndex(buffLevel: number, paramId: number): number;
    allIcons(): Array<number>;
    traitObjects(): Array<any>;
    allTraits(): Array<RPG.Trait>;
    traits(code: number): Array<RPG.Trait>;
    traitsWithId(code: number, id: number): Array<RPG.Trait>;
    traitsPi(code: number, id: number): number;
    traitsSum(code: number, id: number): number;
    traitsSumAll(code: number): number;
    traitsSet(code: number): Array<number>;
    paramBase(paramId: number): number;
    paramPlus(paramId: number): number;
    paramMin(paramId: number): number;
    paramMax(paramId: number): number;
    paramRate(paramId: number): number;
    paramBuffRate(paramId: number): number;
    param(paramId: number): number;
    xparam(xparamId: number): number;
    sparam(sparamId: number): number;
    elementRate(elementId: number): number;
    debuffRate(paramId: number): number;
    stateRate(stateId: number): number;
    stateResistSet(): Array<number>;
    isStateResist(stateId: number): boolean;
    attackElements(): Array<number>;
    attackStates(): Array<number>;
    attackStatesRate(stateId: number): void;
    attackSpeed(): number;
    attackTimesAdd(): number;
    addedSkillTypes(): Array<number>;
    isSkillTypeSealed(stypeId: number): boolean;
    addedSkills(): Array<number>;
    isSkillSealed(skillId: number): boolean;
    isEquipWtypeOk(wtypeId: number): boolean;
    isEquipAtypeOk(atypeId: number): boolean;
    isEquipTypeLocked(etypeId: number): boolean;
    isEquipTypeSealed(etypeId: number): boolean;
    slotType(): number;
    isDualWield(): boolean;
    actionPlusSet(): Array<number>;
    specialFlag(flagId: number): boolean;
    collapseType(): number;
    partyAbility(abilityId: number): boolean;
    isAutoBattle(): boolean;
    isGuard(): boolean;
    isSubstitute(): boolean;
    isPreserveTp(): boolean;
    addParam(paramId: number, value: number): void;
    setHp(hp: number): void;
    setMp(mp: number): void;
    setTp(tp: number): void;
    maxTp(): number;
    refresh(): void;
    recoverAll(): void;
    hpRate(): number;
    mpRate(): number;
    tpRate(): number;
    hide(): void;
    appear(): void;
    isHidden(): boolean;
    isAppeared(): boolean;
    isDead(): boolean;
    isAlive(): boolean;
    isDying(): boolean;
    isRestricted(): boolean;
    canInput(): boolean;
    canMove(): boolean;
    isConfused(): boolean;
    confusionLevel(): number;
    isActor(): boolean;
    isEnemy(): boolean;
    sortStates(): void;
    restriction(): number;
    addNewState(stateId: number): void;
    onRestrict(): void;
    mostImportantStateText(): string;
    stateMotionIndex(): number;
    stateOverlayIndex(): number;
    isSkillWtypeOk(skill: RPG.Skill): boolean;
    skillMpCost(skill: RPG.Skill): number;
    skillTpCost(skill: RPG.Skill): number;
    canPaySkillCost(skill: RPG.Skill): boolean;
    paySkillCost(skill: RPG.Skill): void;
    isOccasionOk(item: RPG.UsableItem): boolean;
    meetsUsableItemConditions(item: RPG.UsableItem): boolean;
    meetsSkillConditions(skill: RPG.Skill): boolean;
    meetsItemConditions(item: RPG.Item): boolean;
    canUse(item: RPG.UsableItem): boolean;
    canEquip(item: RPG.EquipItem): boolean;
    canEquipWeapon(item: RPG.EquipItem): boolean;
    canEquipArmor(item: RPG.EquipItem): boolean;
    attackSkillId(): number;
    guardSkillId(): number;
    canAttack(): boolean;
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

    name(): string;
    battlerName(): string;
    index(): number;
    friendsUnit(): Game_Unit;
    opponentsUnit(): Game_Unit;
    clearAnimations(): void;
    clearDamagePopup(): void;
    clearWeaponAnimation(): void;
    clearEffect(): void;
    clearMotion(): void;
    requestEffect(effectType: string): void;
    requestMotion(motionType: string): void;
    requestMotionRefresh(): void;
    select(): void;
    deselect(): void;
    isAnimationRequested(): boolean;
    isDamagePopupRequested(): boolean;
    isEffectRequested(): boolean;
    isMotionRequested(): boolean;
    isWeaponAnimationRequested(): boolean;
    isMotionRefreshRequested(): boolean;
    isSelected(): boolean;
    effectType(): string;
    motionType(): string;
    weaponImageId(): number;
    shiftAnimation(): MV.BattlerAnimation;
    startAnimation(animationId: number, mirror: boolean, delay: number): void;
    startDamagePopup(): void;
    startWeaponAnimation(weaponImageId: number): void;
    action(index: number): Game_Action;
    setAction(index: number, action: Game_Action): void;
    numActions(): number;
    clearActions(): void;
    result(): Game_ActionResult;
    clearResult(): void;
    refresh(): void;
    addState(stateId: number): void;
    isStateAddable(stateId: number): boolean;
    isStateRestrict(stateId: number): boolean;
    onRestrict(): void;
    removeState(stateId: number): void;
    escape(): void;
    addBuff(paramId: number, turns: number): void;
    addDebuff(paramId: number, turns: number): void;
    removeBuff(paramId: number): void;
    removeBattleStates(): void;
    removeAllBuffs(): void;
    removeStatesAuto(timing: number): void;
    removeBuffsAuto(): void;
    removeStatesByDamage(): void;
    makeActionTimes(): number;
    makeActions(): void;
    speed(): number;
    makeSpeed(): void;
    currentAction(): Game_Action;
    removeCurrentAction(): void;
    setLastTarget(target: Game_Battler): void;
    forceAction(skillId: number, targetIndex: number): void;
    useItem(item: RPG.UsableItem): void;
    consumeItem(item: RPG.UsableItem): void;
    gainHp(value: number): void;
    gainMp(value: number): void;
    gainTp(value: number): void;
    gainSilentTp(value: number): void;
    initTp(): void;
    clearTp(): void;
    chargeTpByDamage(damageRate: number): void;
    regenerateHp(): void;
    maxSlipDamage(): number;
    regenerateMp(): void;
    regenerateTp(): void;
    regenerateAll(): void;
    onBattleStart(): void;
    onAllActionsEnd(): void;
    onTurnEnd(): void;
    onBattleEnd(): void;
    onDamage(value: number): void;
    setActionState(actionState: string): void;
    isUndecided(): boolean;
    isInputting(): boolean;
    isWaiting(): boolean;
    isActing(): boolean;
    isChanting(): boolean;
    isGuardWaiting(): boolean;
    performActionStart(action: Game_Action): void;
    performAction(action: Game_Action): void;
    performActionEnd(): void;
    performDamage(): void;
    performMiss(): void;
    performRecovery(): void;
    performEvasion(): void;
    performMagicEvasion(): void;
    performCounter(): void;
    performReflection(): void;
    performSubstitute(target: Game_Battler): void;
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
    actorId(): number;
    actor(): RPG.Actor;
    setName(name: string): void;
    nickname(): string;
    setNickname(nickname: string): void;
    profile(): string;
    setProfile(profile: string): void;
    faceName(): string;
    faceIndex(): number;
    clearStates(): void;
    eraseState(stateId: number): void;
    resetStateCounts(stateId: number): void;
    initImages(): void;
    expForLevel(level: number): number;
    initExp(): void;
    currentExp(): number;
    currentLevelExp(): number;
    nextLevelExp(): number;
    nextRequiredExp(): number;
    maxLevel(): void;
    isMaxLevel(): boolean;
    initSkills(): void;
    initEquips(equips: Array<number>): void;
    equipSlots(): Array<number>;
    equips(): Array<RPG.EquipItem>;
    weapons(): Array<RPG.Weapon>;
    armors(): Array<RPG.Armor>;
    hasWeapon(weapon: RPG.Weapon): boolean;
    hasArmor(armor: RPG.Armor): boolean;
    isEquipChangeOk(slotId: number): boolean;
    changeEquip(slotId: number, item: RPG.EquipItem): void;
    forceChangeEquip(slotId: number, item: RPG.EquipItem): void;
    tradeItemWithParty(newItem: RPG.EquipItem, oldItem: RPG.EquipItem): boolean;
    changeEquipById(etypeId: number, itemId: number): void;
    isEquipped(item: RPG.EquipItem): boolean;
    discardEquip(item: RPG.EquipItem): void;
    releaseUnequippableItems(forcing: boolean): void;
    clearEquipments(): void;
    optimizeEquipments(): void;
    bestEquipItem(slotId: number): void;
    calcEquipItemPerformance(item: RPG.EquipItem): number;
    isSkillWtypeOk(skill: RPG.Skill): boolean;
    isWtypeEquipped(wtypeId: number): boolean;
    refresh(): void;
    friendsUnit(): Game_Party;
    opponentsUnit(): Game_Troop;
    isBattleMember(): boolean;
    isFormationChangeOk(): boolean;
    currentClass(): RPG.Class;
    isClass(gameClass: RPG.Class): boolean;
    skills(): Array<RPG.Skill>;
    usableSkills(): Array<RPG.Skill>;
    attackElements(): Array<number>;
    hasNoWeapons(): boolean;
    bareHandsElementId(): number;
    attackAnimationId1(): number;
    attackAnimationId2(): number;
    bareHandsAnimationId(): number;
    changeExp(exp: number, show: boolean): void;
    levelUp(): void;
    levelDown(): void;
    findNewSkills(lastSkills: Array<RPG.Skill>): Array<RPG.Skill>;
    displayLevelUp(newSkills: Array<RPG.Skill>): void;
    gainExp(exp: number): void;
    finalExpRate(): number;
    benchMembersExpRate(): number;
    shouldDisplayLevelUp(): boolean;
    changeLevel(level: number, show: boolean): void;
    learnSkill(skillId: number): void;
    forgetSkill(skillId: number): void;
    isLearnedSkill(skillId: number): boolean;
    changeClass(classId: number, keepExp: boolean): void;
    setCharacterImage(characterName: string, characterIndex: number): void;
    setFaceImage(faceName: string, faceIndex: number): void;
    setBattlerImage(battlerName: string): void;
    isSpriteVisible(): boolean;
    startAnimation(animationId: number, mirror: boolean, delay: number): void;
    performAttack(): void;
    performVictory(): void;
    performEscape(): void;
    makeActionList(): Array<Game_Action>;
    makeAutoBattleActions(): void;
    makeConfusionActions(): void;
    onPlayerWalk(): void;
    updateStateSteps(state: RPG.State): void;
    showAddedStates(): void;
    showRemovedStates(): void;
    stepsForTurn(): number;
    turnEndOnMap(): void;
    checkFloorEffect(): void;
    executeFloorDamage(): void;
    basicFloorDamage(): number;
    maxFloorDamage(): number;
    performMapDamage(): void;
    clearActions(): void;
    inputtingAction(): Game_Action;
    selectNextCommand(): boolean;
    selectPreviousCommand(): boolean;
    lastMenuSkill(): RPG.Skill;
    setLastMenuSkill(skill: RPG.Skill): void;
    lastBattleSkill(): RPG.Skill;
    setLastBattleSkill(skill: RPG.Skill): void;
    lastCommandSymbol(): string;
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
    friendsUnit(): Game_Troop;
    opponentsUnit(): Game_Party;
    isBattleMember(): boolean;
    enemyId(): number;
    enemy(): RPG.Enemy;
    exp(): void;
    gold(): void;
    makeDropItems(): Array<RPG.BaseItem>;
    dropItemRate(): number;
    itemObject(kind: number, dataId: number): void;
    isSpriteVisible(): boolean;
    screenX(): number;
    screenY(): number;
    battlerHue(): number;
    originalName(): string;
    isLetterEmpty(): boolean;
    setLetter(letter: string): void;
    setPlural(plural: boolean): void;
    transform(enemyId: number): void;
    meetsCondition(action: RPG.Enemy.Action): boolean;
    meetsTurnCondition(param1: number, param2: number): boolean;
    meetsHpCondition(param1: number, param2: number): boolean;
    meetsMpCondition(param1: number, param2: number): boolean;
    meetsStateCondition(param: number): boolean;
    meetsPartyLevelCondition(param: number): boolean;
    meetsSwitchCondition(param: number): boolean;
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

    actor(actorId: number): Game_Actor;
}

/**
 * Superclass of Game_Party & Game_Troop
 * 
 * @class Game_Unit
 */
declare class Game_Unit {
    protected _inBattle: boolean;

    inBattle(): boolean;
    members(): Array<Game_Battler>;
    aliveMembers(): Array<Game_Battler>;
    deadMembers(): Array<Game_Battler>;
    movableMembers(): Array<Game_Battler>;
    clearActions(): void;
    agility(): number;
    tgrSum(): number;
    randomTarget(): Game_Battler;
    randomDeadTarget(): Game_Battler;
    smoothTarget(index: number): Game_Battler;
    smoothDeadTarget(index: number): Game_Battler;
    clearResults(): void;
    onBattleStart(): void;
    onBattleEnd(): void;
    makeActions(): void;
    select(activeMember: Game_Battler): void;
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

    members(): Array<Game_Actor>;
    aliveMembers(): Array<Game_Actor>;
    deadMembers(): Array<Game_Actor>;
    movableMembers(): Array<Game_Actor>;
    battleMembers(): Array<Game_Actor>;
    initAllItems(): void;
    exists(): boolean;
    size(): number;
    isEmpty(): boolean;
    maxBattleMembers(): number;
    leader(): Game_Actor;
    reviveBattleMembers(): void;
    items(): Array<RPG.Item>;
    weapons(): Array<RPG.Weapon>;
    armors(): Array<RPG.Armor>;
    equipItems(): Array<RPG.EquipItem>;
    allItems(): Array<RPG.BaseItem>;
    itemContainer(item: RPG.BaseItem): {[itemId: number]: number};
    setupStartingMembers(): void;
    name(): string;
    setupBattleTest(): void;
    setupBattleTestMembers(): void;
    setupBattleTestItems(): void;
    highestLevel(): number;
    addActor(actorId: number): void;
    removeActor(actorId: number): void;
    gold(): number;
    gainGold(amount: number): void;
    loseGold(amount: number): void;
    maxGold(): number;
    steps(): number;
    increaseSteps(): void;
    numItems(item: RPG.BaseItem): number;
    maxItems(item: RPG.BaseItem): number;
    hasMaxItems(item: RPG.BaseItem): boolean;
    hasItem(item: RPG.BaseItem, includeEquip: boolean): boolean;
    isAnyMemberEquipped(item: RPG.EquipItem): boolean;
    gainItem(item: RPG.BaseItem, amount: number, includeEquip: boolean): void;
    discardMembersEquip(item: RPG.EquipItem, amount: number): void;
    loseItem(item: RPG.BaseItem, amount: number, includeEquip: boolean): void;
    consumeItem(item: RPG.BaseItem): void;
    canUse(item: RPG.BaseItem): boolean;
    canInput(): boolean;
    onPlayerWalk(): void;
    menuActor(): Game_Actor;
    setMenuActor(actor: Game_Actor): void;
    makeMenuActorNext(): void;
    makeMenuActorPrevious(): void;
    targetActor(): Game_Actor;
    setTargetActor(actor: Game_Actor): void;
    lastItem(): RPG.BaseItem;
    setLastItem(item: RPG.BaseItem): void;
    swapOrder(index1: number, index2: number): void;
    charactersForSavefile(): Array<Array<any>>;
    facesForSavefile(): Array<Array<any>>;
    partyAbility(abilityId: number): boolean;
    hasEncounterHalf(): boolean;
    hasEncounterNone(): boolean;
    hasCancelSurprise(): boolean;
    hasRaisePreemptive(): boolean;
    hasGoldDouble(): boolean;
    hasDropItemDouble(): boolean;
    ratePreemptive(troopAgi: number): number;
    rateSurprise(troopAgi: number): number;
    performVictory(): void;
    performEscape(): void;
    removeBattleStates(): void;
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

    members(): Array<Game_Enemy>;
    aliveMembers(): Array<Game_Enemy>;
    deadMembers(): Array<Game_Enemy>;
    movableMembers(): Array<Game_Enemy>;
    isEventRunning(): boolean;
    updateInterpreter(): void;
    turnCount(): number;
    members(): Array<Game_Enemy>;
    clear(): void;
    troop(): RPG.Troop;
    setup(troopId: number): void;
    makeUniqueNames(): void;
    letterTable(): Array<string>;
    enemyNames(): Array<string>;
    meetsConditions(page: RPG.BattleEventPage): boolean;
    setupBattleEvent(): void;
    increaseTurn(): void;
    expTotal(): number;
    goldTotal(): number;
    goldRate(): number;
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
    isEventRunning(): boolean;
    tileWidth(): number;
    tileHeight(): number;
    mapId(): number;
    tilesetId(): number;
    displayX(): number;
    displayY(): number;
    parallaxName(): string;
    battleback1Name(): string;
    battleback2Name(): string;
    requestRefresh(mapId: number): void;
    isNameDisplayEnabled(): boolean;
    disableNameDisplay(): void;
    enableNameDisplay(): void;
    createVehicles(): void;
    refereshVehicles(): void;
    vehicles(): Array<Game_Vehicle>;
    vehicle(type: string): Game_Vehicle;
    boat(): Game_Vehicle;
    ship(): Game_Vehicle;
    airship(): Game_Vehicle;
    setupEvents(): void;
    events(): Array<Game_Event>;
    event(eventId: number): Game_Event;
    eraseEvent(eventId: number): void;
    parallelCommonEvents(): Array<RPG.CommonEvent>;
    setupScroll(): void;
    setupParallax(): void;
    setupBattleback(): void;
    setDisplayPos(x: number, y: number): void;
    parallaxOx(): number;
    parallaxOy(): number;
    tileset(): RPG.Tileset;
    tilesetFlags(): Array<number>;
    displayName(): string;
    width(): number;
    height(): number;
    data(): Array<number>;
    isLoopHorizontal(): boolean;
    isLoopVertical(): boolean;
    isDashDisabled(): boolean;
    encounterList(): Array<RPG.Map.Encounter>;
    encounterStep(): number;
    isOverworld(): boolean;
    screenTileX(): number;
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
    canvasToMapX(x: number): number;
    canvasToMapY(y: number): number;
    autoplay(): void;
    refreshIfNeeded(): void;
    refresh(): void;
    refreshTileEvents(): void;
    eventsXy(x: number, y: number): Array<Game_Event>;
    eventsXyNt(x: number, y: number): Array<Game_Event>;
    tileEventsXy(x: number, y: number): Array<Game_Event>;
    eventIdXy(x: number, y: number): number;
    scrollDown(distance: number): void;
    scrollLeft(distance: number): void;
    scrollRight(distance: number): void;
    scrollUp(distance: number): void;
    isValid(x: number, y: number): boolean;
    checkPassage(x: number, y: number, bit: number): boolean;
    tileId(x: number, y: number, z: number): number;
    layeredTiles(x: number, y: number): Array<number>;
    allTiles(x: number, y: number): Array<number>;
    autotileType(x: number, y: number, z: number): number;
    isPassable(x: number, y: number, d: number): boolean;
    isBoatPassable(x: number, y: number): boolean;
    isShipPassable(x: number, y: number): boolean;
    isAirshipLandOk(x: number, y: number): boolean;
    checkLayeredTilesFlags(x: number, y: number, bit: number): boolean;
    isLadder(x: number, y: number): boolean;
    isBush(x: number, y: number): boolean;
    isCounter(x: number, y: number): boolean;
    isDamageFloor(x: number, y: number): boolean;
    terrainTag(x: number, y: number): number;
    regionId(x: number, y: number): number;
    startScroll(direction: number, distance: number, speed: number): void;
    isScrolling(): boolean;
    update(sceneActive: boolean): void;
    updateScroll(): void;
    scrollDistance(): number;
    doScroll(direction: number, distance: number): void;
    updateEvents(): void;
    updateVehicles(): void;
    updateParallax(): void;
    changeTileset(tilesetId: number): void;
    changeBattleback(battleback1Name: string, battleback2Name: string): void;
    changeParallax(name: string, loopX: boolean, loopY: boolean, sx: number, sy: number): void;
    updateInterpreter(): void;
    unlockEvent(eventId: number): void;
    setupStartingEvent(): boolean;
    setupTestEvent(): boolean;
    setupStartingMapEvent(): boolean;
    setupAutorunCommonEvent(): boolean;
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

    event(): RPG.CommonEvent;
    list(): Array<RPG.EventCommand>;
    refresh(): void;
    isActive(): boolean;
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
    moveSpeed(): number;
    setMoveSpeed(moveSpeed: number): void;
    moveFrequency(): number;
    setMoveFrequency(moveFrequency: number): void;
    opacity(): number;
    setOpacity(opacity: number): void;
    blendMode(): number;
    setBlendMode(blendMode: number): void;
    isNormalPriority(): boolean;
    setPriorityType(priorityType: number): void;
    isMoving(): boolean;
    isJumping(): boolean;
    jumpHeight(): number;
    isStopping(): boolean;
    checkStop(threshold: number): boolean;
    resetStopCount(): void;
    realMoveSpeed(): number;
    distancePerFrame(): number;
    isDashing(): boolean;
    isDebugThrough(): boolean;
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
    setDirection(d: number): void;
    isTile(): boolean;
    isObjectCharacter(): boolean;
    shiftY(): number;
    scrolledX(): number;
    scrolledY(): number;
    screenX(): number;
    screenY(): number;
    screenZ(): number;
    isNearTheScreen(): boolean;
    update(): void;
    updateStop(): void;
    updateJump(): void;
    updateMove(): void;
    updateAnimation(): void;
    animationWait(): number;
    updateAnimationCount(): void;
    updatePattern(): void;
    maxPattern(): number;
    pattern(): number;
    setPattern(pattern: number): void;
    isOriginalPattern(): boolean;
    resetPattern(): void;
    refreshBushDepth(): void;
    isOnLadder(): boolean;
    isOnBush(): boolean;
    terrainTag(): number;
    regionId(): number;
    increaseSteps(): void;
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
    hasStepAnime(): boolean;
    setStepAnime(stepAnime: boolean): void;
    isDirectionFixed(): boolean;
    setDirectionFix(directionFix: boolean): void;
    isThrough(): boolean;
    setThrough(through: boolean): void;
    isTransparent(): boolean;
    bushDepth(): number;
    setTransparent(transparent: boolean): void;
    requestAnimation(animationId: number): void;
    requestBalloon(balloonId: number): void;
    animationId(): number;
    balloonId(): number;
    startAnimation(): void;
    startBalloon(): void;
    isAnimationPlaying(): boolean;
    isBalloonPlaying(): boolean;
    endAnimation(): void;
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
    memorizeMoveRoute(): void;
    restoreMoveRoute(): void;
    isMoveRouteForcing(): boolean;
    setMoveRoute(moveRoute: RPG.MoveRoute): void;
    forceMoveRoute(moveRoute: RPG.MoveRoute): void;
    updateStop(): void;
    updateRoutineMove(): void;
    processMoveCommand(command: RPG.MoveCommand): void;
    deltaXFrom(x: number): number;
    deltaYFrom(y: number): number;
    moveRandom(): void;
    moveTowardCharacter(character: Game_Character): void;
    moveAwayFromCharacter(character: Game_Character): void;
    turnTowardCharacter(character: Game_Character): void;
    turnAwayFromCharacter(character: Game_Character): void;
    turnTowardPlayer(): void;
    turnAwayFromPlayer(): void;
    moveTowardPlayer(): void;
    moveAwayFromPlayer(): void;
    moveForward(): void;
    moveBackward(): void;
    processRouteEnd(): void;
    advanceMoveRouteIndex(): void;
    turnRight90(): void;
    turnLeft90(): void;
    turn180(): void;
    turnRightOrLeft90(): void;
    turnRandom(): void;
    swap(character: Game_Character): void;
    findDirectionTo(goalX: number, goalY: number): number;
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

    clearTransferInfo(): void;
    followers(): Game_Followers;
    refresh(): void;
    isStopping(): boolean;
    reserveTransfer(mapId: number, x: number, y: number, d?: number, fadeType?: number): void;
    requestMapReload(): void;
    isTransferring(): boolean;
    newMapId(): number;
    fadeType(): number;
    performTransfer(): void;
    isMapPassable(x: number, y: number, d: number): boolean;
    vehicle(): Game_Vehicle;
    isInBoat(): boolean;
    isInShip(): boolean;
    isInAirship(): boolean;
    isInVehicle(): boolean;
    isNormal(): boolean;
    isDashing(): boolean;
    isDebugThrough(): boolean;
    isCollided(x: number, y: number): boolean;
    centerX(): number;
    centerY(): number;
    center(x: number, y: number): void;
    locate(x: number, y: number): void;
    increaseSteps(): void;
    makeEncounterCount(): void;
    makeEncounterTroopId(): number;
    meetsEncounterConditions(encounter: RPG.Map.Encounter): boolean;
    executeEncounter(): boolean;
    startMapEvent(x: number, y: number, triggers: Array<number>, normal: boolean): void;
    moveByInput(): void;
    canMove(): boolean;
    getInputDirection(): number;
    executeMove(direction: number): void;
    update(sceneActive?: boolean): void;
    updateDashing(): void;
    isDashButtonPressed(): boolean;
    updateScroll(lastScrolledX: number, lastScrolledY: number): void;
    updateVehicle(): void;
    updateVehicleGetOn(): void;
    updateVehicleGetOff(): void;
    updateNonmoving(wasMoving: boolean): void;
    triggerAction(): boolean;
    triggerButtonAction(): boolean;
    triggerTouchAction(): boolean;
    triggerTouchActionD1(x1: number, y1: number): boolean;
    triggerTouchActionD2(x2: number, y2: number): boolean;
    triggerTouchActionD3(x2: number, y2: number): boolean;
    updateEncounterCount(): void;
    canEncounter(): boolean;
    encounterProgressValue(): number;
    checkEventTriggerHere(triggers: Array<number>): void;
    checkEventTriggerThere(triggers: Array<number>): void;
    canStartLocalEvents(): boolean;
    getOnOffVehicle(): boolean;
    getOnVehicle(): boolean;
    getOffVehicle(): boolean;
    forceMoveForward(): void;
    isOnDamageFloor(): boolean;
    moveStraight(d: number): void;
    moveDiagonally(horz: number, vert: number): void;
    jump(xPlus: number, yPlus: number): void;
    showFollowers(): void;
    hideFollowers(): void;
    gatherFollowers(): void;
    areFollowersGathering(): boolean;
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
    actor(): Game_Actor;
    isVisible(): boolean;
    update(): void;
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

    isVisible(): boolean;
    show(): void;
    hide(): void;
    follower(index: number): Game_Follower;
    forEach(callback: () => void, thisObject: any): void;
    reverseEach(callback: () => void, thisObject: any): void;
    refresh(): void;
    update(): void;
    updateMove(): void;
    jumpAll(): void;
    synchronize(x: number, y: number, d: number): void;
    gather(): void;
    areGathering(): boolean;
    visibleFollowers(): Array<Game_Follower>;
    areMoving(): boolean;
    areGathered(): boolean;
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
    isBoat(): boolean;
    isShip(): boolean;
    isAirship(): boolean;
    resetDirection(): void;
    initMoveSpeed(): void;
    vehicle(): RPG.System.Vehicle;
    loadSystemSettings(): void;
    refresh(): void;
    setLocation(mapId: number, x: number, y: number): void;
    pos(x: number, y: number): boolean;
    isMapPassable(x: number, y: number, d: number): boolean;
    getOn(): void;
    getOff(): void;
    setBgm(bgm: RPG.AudioFile): void;
    playBgm(): void;
    syncWithPlayer(): void;
    screenY(): number;
    shadowX(): number;
    shadowY(): number;
    shadowOpacity(): number;
    canMove(): boolean;
    update(): void;
    updateAirship(): void;
    updateAirshipAltitude(): void;
    maxAltitude(): number;
    isLowest(): boolean;
    isHighest(): boolean;
    isTakeoffOk(): boolean;
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
    eventId(): number;
    event(): RPG.Event;
    page(): RPG.EventPage;
    list(): Array<RPG.EventCommand>;
    isCollidedWithCharacters(x: number, y: number): boolean;
    isCollidedWithEvents(x: number, y: number): boolean;
    isCollidedWithPlayerCharacters(x: number, y: number): boolean;
    lock(): void;
    unlock(): void;
    updateStop(): void;
    updateSelfMovement(): void;
    stopCountThreshold(): number;
    moveTypeRandom(): void;
    moveTypeTowardPlayer(): void;
    isNearThePlayer(): boolean;
    moveTypeCustom(): void;
    isStarting(): boolean;
    clearStartingFlag(): void;
    isTriggerIn(triggers: Array<number>): boolean;
    start(): void;
    erase(): void;
    refresh(): void;
    findProperPageIndex(): number;
    meetsConditions(page: RPG.EventPage): boolean;
    setupPage(): void;
    clearPageSettings(): void;
    setupPageSettings(): void;
    isOriginalPattern(): boolean;
    resetPattern(): void;
    checkEventTriggerAuto(): void;
    update(): void;
    updateParallel(): void;
    locate(x: number, y: number): void;
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
    clear(): void;
    setup(list: Array<RPG.EventCommand>, eventId: number): void;
    eventId(): number;
    isOnCurrentMap(): boolean;
    setupReservedCommonEvent(): boolean;
    isRunning(): boolean;
    update(): void;
    updateChild(): boolean;
    updateWait(): boolean;
    updateWaitCount(): boolean;
    updateWaitMode(): boolean;
    setWaitMode(waitMode: string): void;
    wait(duration: number): void;
    fadeSpeed(): number;
    executeCommand(): boolean;
    checkFreeze(): boolean;
    terminate(): void;
    skipBranch(): void;
    currentCommand(): RPG.EventCommand;
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
    checkErrors(): void;
    parameters(name: string): any;
    setParameters(name: string, parameters: {[key: string]: string}): void;
    loadScript(name: string): void;
    onError(e: Event): void;
}
declare var PluginManager: PluginManagerStatic;

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

    updateFrame(): void;
    setColdFrame(x: number, y: number, width: number, height: number): void;
    setHotFrame(x: number, y: number, width: number, height: number): void;
    setClickHandler(method: () => void): void;
    callClickHandler(): void;
    processTouch(): void;
    /**
     * Returns true if the sprite button
     * is currently active.
     * @returns {boolean} 
     * @memberof Sprite_Button
     */
    isActive(): boolean;
    isButtonTouched(): boolean;
    /**
     * Changes the x coordinate of the screen to
     * local sprite x coordinate.
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
    updateBitmap(): void;
    isImageChanged(): boolean;
    setTileBitmap(): void;
    setCharacterBitmap(): void;
    updateFrame(): void;
    updateTileFrame(): void;
    updateCharacterFrame(): void;
    characterBlockX(): number;
    characterBlockY(): number;
    characterPatternX(): void;
    characterPatternY(): number;
    patternWidth(): number;
    patternHeight(): number;
    updateHalfBodySprites(): void;
    createHalfBodySprites(): void;
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
    setBattler(battler: Game_Battler): void;
    setHome(x: number, y: number): void;
    updateMain(): void;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updatePosition(): void;
    updateAnimation(): void;
    updateDamagePopup(): void;
    updateSelectionEffect(): void;
    setupAnimation(): void;
    setupDamagePopup(): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
    startMove(x: number, y: number, duration: number): void;
    onMoveEnd(): void;
    isEffecting(): boolean;
    /**
     * Returns true if the sprite for the battler
     * is moving.
     * @returns {boolean} 
     * @memberof Sprite_Battler
     */
    isMoving(): boolean;
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

    constructor(battler?: Game_Actor);

    createMainSprite(): void;
    createShadowSprite(): void;
    createWeaponSprite(): void;
    createStateSprite(): void;
    setBattler(battler: Game_Actor): void;
    moveToStartPosition(): void;
    setActorHome(index: number): void;
    updateShadow(): void;
    setupMotion(): void;
    setupWeaponAnimation(): void;
    startMotion(motionType: string): void;
    updateTargetPosition(): void;
    updateMove(): void;
    updateMotion(): void;
    updateMotionCount(): void;
    motionSpeed(): number;
    refreshMotion(): void;
    startEntryMotion(): void;
    stepForward(): void;
    stepBack(): void;
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
    setBattler(battler: Game_Enemy): void;
    loadBitmap(name: string, hue: number): void;
    updateStateSprite(): void;
    initVisibility(): void;
    setupEffect(): void;
    startEffect(effectType: string): void;
    startAppear(): void;
    startDisappear(): void;
    startWhiten(): void;
    startBlink(): void;
    startCollapse(): void;
    startBossCollapse(): void;
    startInstantCollapse(): void;
    updateEffect(): void;
    isEffecting(): boolean;
    revertToNormal(): void;
    updateWhiten(): void;
    updateBlink(): void;
    updateAppear(): void;
    updateDisappear(): void;
    updateCollapse(): void;
    updateBossCollapse(): void;
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

    createBitmap(): void;
    updateBitmap(): void;
    redraw(): void;
    timerText(): string;
    updatePosition(): void;
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

    createBitmap(): void;
    updatePosition(): void;
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

    createLowerLayer(): void;
    createUpperLayer(): void;
    createBaseSprite(): void;
    createToneChanger(): void;
    createWebGLToneChanger(): void;
    createCanvasToneChanger(): void;
    createPictures(): void;
    createTimer(): void;
    createScreenSprites(): void;
    updateScreenSprites(): void;
    updateToneChanger(): void;
    updateWebGLToneChanger(): void;
    updateCanvasToneChanger(): void;
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

    hideCharacters(): void;
    createParallax(): void;
    createTilemap(): void;
    loadTileset(): void;
    createCharacters(): void;
    createShadow(): void;
    createDestination(): void;
    createWeather(): void;
    updateTileset(): void;
    /**
     * Simple fix for canvas parallax issue, destroy old parallax and readd to  the tree.
     */
    protected _canvasReAddParallax(): void;
    updateParallax(): void;
    updateTilemap(): void;
    updateShadow(): void;
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

    createBackground(): void;
    createBattleField(): void;
    createBattleback(): void;
    updateBattleback(): void;
    locateBattleback(): void;
    battleback1Bitmap(): Bitmap;
    battleback2Bitmap(): Bitmap;
    battleback1Name(): string;
    battleback2Name(): string;
    overworldBattleback1Name(): string;
    overworldBattleback2Name(): string;
    normalBattleback1Name(): string;
    normalBattleback2Name(): string;
    terrainBattleback1Name(type: number): string;
    terrainBattleback2Name(type: number): string;
    defaultBattleback1Name(): string;
    defaultBattleback2Name(): string;
    shipBattleback1Name(): string;
    shipBattleback2Name(): string;
    autotileType(z: number): number;
    createEnemies(): void;
    compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number;
    createActors(): void;
    updateActors(): void;
    battlerSprites(): Array<Sprite_Battler>;
    isAnimationPlaying(): boolean;
    isEffecting(): boolean;
    isAnyoneMoving(): boolean;
    isBusy(): boolean;
}
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
