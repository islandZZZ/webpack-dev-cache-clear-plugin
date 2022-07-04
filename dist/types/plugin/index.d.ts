export declare type Options = Record<'domains', Array<String>>;
export declare class WebpackDevCacheClearPlugin {
    private options;
    constructor(options: any);
    apply(compiler: any): void;
}
