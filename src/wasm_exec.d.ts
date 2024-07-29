// wasm_exec.d.ts
declare class Go {
    importObject: any;
    run(instance: WebAssembly.Instance): void;
}

interface GoWasm {
    add(a: number, b: number): number;
    parser(a: string): string;
}

export interface ParserReq {
    content: string;
    pos?: Position;
}
export interface Position {
    start: number;
    end: number;
}

export interface Response<T> {
    code: number;
    msg: string;
    data: T;
}