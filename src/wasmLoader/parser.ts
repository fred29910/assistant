import { Response,ParserReq } from "../wasmLoader/goFuncs";

export async function parser(input: string): Promise<Response<string>> {
    const req: ParserReq = {
        content: input
    }
    const result =  await window.parser(JSON.stringify(req));
    return JSON.parse(result);
}