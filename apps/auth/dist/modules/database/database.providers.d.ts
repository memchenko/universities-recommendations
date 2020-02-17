export declare const DATABASE = "DATABASE";
declare const _default: {
    provide: string;
    useFactory: () => Promise<import("typeorm").Connection>;
}[];
export default _default;
