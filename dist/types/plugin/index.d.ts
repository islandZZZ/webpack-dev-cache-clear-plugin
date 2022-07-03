declare type OptionsType = {
    domains: Array<string>;
};
export interface Options {
    options: OptionsType;
}
export declare class WebpackDevCacheClearPlugin {
    private options;
    constructor(options: any);
    apply(compiler: any): void;
}
export {};
