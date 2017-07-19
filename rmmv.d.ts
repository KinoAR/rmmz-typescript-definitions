/*
* Do Not Remove This Header
//=============================================================================
//  ChangeLog
//=============================================================================
* version 1.0.0
* - Added most major MV functions.
* - Added PIXI.js type definitions
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
declare namespace RPG {
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

declare var $dataActors: Array<RPG.Actor>;
declare var $dataClasses: Array<RPG.Class>;
declare var $dataSkills: Array<RPG.Skill>;
declare var $dataItems: Array<RPG.Item>;
declare var $dataWeapons: Array<RPG.Weapon>;
declare var $dataArmors: Array<RPG.Armor>;
declare var $dataEnemies: Array<RPG.Enemy>;
declare var $dataTroops: Array<RPG.Troop>;
declare var $dataStates: Array<RPG.State>;
declare var $dataAnimations: Array<RPG.Animation>;
declare var $dataTilesets: Array<RPG.Tileset>;
declare var $dataCommonEvents: Array<RPG.CommonEvent>;
declare var $dataSystem: RPG.System;
declare var $dataMapInfos: Array<RPG.MapInfo>;
declare var $dataMap: RPG.Map;
declare var $gameTemp: Game_Temp;
declare var $gameSystem: Game_System;
declare var $gameScreen: Game_Screen;
declare var $gameTimer: Game_Timer;
declare var $gameMessage: Game_Message;
declare var $gameSwitches: Game_Switches;
declare var $gameVariables: Game_Variables;
declare var $gameSelfSwitches: Game_SelfSwitches;
declare var $gameActors: Game_Actors;
declare var $gameParty: Game_Party;
declare var $gameTroop: Game_Troop;
declare var $gameMap: Game_Map;
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
  static saveGame(savefileId: number): boolean;
  static loadGame(savefileId: number): boolean;
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

    loadAnimation(filename: string, hue?: number): Bitmap;
    loadBattleback1(filename: string, hue?: number): Bitmap;
    loadBattleback2(filename: string, hue?: number): Bitmap;
    loadEnemy(filename: string, hue?: number): Bitmap;
    loadCharacter(filename: string, hue?: number): Bitmap;
    loadFace(filename: string, hue?: number): Bitmap;
    loadParallax(filename: string, hue?: number): Bitmap;
    loadPicture(filename: string, hue?: number): Bitmap;
    loadSvActor(filename: string, hue?: number): Bitmap;
    loadSvEnemy(filename: string, hue?: number): Bitmap;
    loadSystem(filename: string, hue?: number): Bitmap;
    loadTileset(filename: string, hue?: number): Bitmap;
    loadTitle1(filename: string, hue?: number): Bitmap;
    loadTitle2(filename: string, hue?: number): Bitmap;
    loadBitmap(folder: string, filename: string, hue: number, smooth: boolean): Bitmap;
    loadEmptyBitmap(path: string, hue: number): Bitmap;
    loadNormalBitmap(path: string, hue: number): Bitmap;
    clear(): void;
    isReady(): boolean;
    isObjectCharacter(filename: string): boolean;
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
    protected _animationSprites: Array<Sprite_Animation>;
    protected _effectTarget: Sprite_Base;
    protected _hiding: boolean;

    constructor();

    hide(): void;
    show(): void;
    updateVisibility(): void;
    updateAnimationSprites(): void;
    startAnimation(animation: RPG.Animation, mirror: boolean, delay: number): void;
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
    isActive(): boolean;
    isButtonTouched(): boolean;
    canvasToLocalX(x: number): number;
    canvasToLocalY(y: number): number;
}

/**
 * -----------------------------------------------------------------------------
 * Sprite_Character
 *
 * The sprite for displaying a character.
 */
declare class Sprite_Character extends Sprite_Base {
    protected _character: Game_Character;
    protected _balloonDuration: number;
    protected _tilesetId: number;
    protected _upperBody: Sprite;
    protected _lowerBody: Sprite;
    protected _bushDepth: number;
    protected _balloonSprite: Sprite_Balloon;

    constructor(character: Game_Character);

    initMembers(): void;
    setCharacter(character: Game_Character): void;
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
    setupBalloon(): void;
    startBalloon(): void;
    updateBalloon(): void;
    endBalloon(): void;
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

    loadSystemImages(): void;
    loadSystemWindowImage(): void;
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

    onMapLoaded(): void;
    updateMainMultiply(): void;
    updateMain(): void;
    isFastForward(): boolean;
    stop(): void;
    needsFadeIn(): boolean;
    needsSlowFadeOut(): boolean;
    updateWaitCount(): boolean;
    updateDestination(): void;
    isMapTouchOk(): boolean;
    processMapTouch(): void;
    isSceneChangeOk(): boolean;
    updateScene(): void;
    createDisplayObjects(): void;
    createSpriteset(): void;
    createAllWindows(): void;
    createMapNameWindow(): void;
    createMessageWindow(): void;
    createScrollTextWindow(): void;
    updateTransferPlayer(): void;
    updateEncounter(): void;
    updateCallMenu(): void;
    isMenuEnabled(): boolean;
    isMenuCalled(): boolean;
    callMenu(): void;
    updateCallDebug(): void;
    isDebugCalled(): boolean;
    fadeInForTransfer(): void;
    fadeOutForTransfer(): void;
    launchBattle(): void;
    stopAudioOnBattleStart(): void;
    startEncounterEffect(): void;
    updateEncounterEffect(): void;
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

    createCommandWindow(): void;
    createGoldWindow(): void;
    createStatusWindow(): void;
    commandItem(): void;
    commandPersonal(): void;
    commandFormation(): void;
    commandOptions(): void;
    commandSave(): void;
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

    createCategoryWindow(): void;
    createItemWindow(): void;
    onCategoryOk(): void;
    onItemOk(): void;
    onItemCancel(): void;
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

    createSkillTypeWindow(): void;
    createStatusWindow(): void;
    createItemWindow(): void;
    refreshActor(): void;
    commandSkill(): void;
    onItemCancel(): void;
    playSeForItem(): void;
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

    savefileId(): void;
    createHelpWindow(): void;
    createListWindow(): void;
    mode(): void;
    activateListWindow(): void;
    helpWindowText(): string;
    firstSavefileIndex(): number;
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
    mode(): string;
    helpWindowText(): string;
    firstSavefileIndex(): number;
    onSavefileOk(): void;
    onSaveSuccess(): void;
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

    mode(): string;
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
    createBackground(): void;
    createCommandWindow(): void;
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
    money(): number;
    currencyUnit(): string;
    buyingPrice(): number;
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
    createSpriteset(): void;
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
    playGameoverMusic(): void;
    createBackground(): void;
    isTriggered(): boolean;
    gotoTitle(): void;
}
