type gofunc = (...any) => any
export interface GoFuncs {
  add: (num1: number, num2: number) => number
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