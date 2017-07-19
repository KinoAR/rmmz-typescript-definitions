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
declare var TextManager: TextManagerStatic;/**
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


