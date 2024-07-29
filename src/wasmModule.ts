export async function loadWasm(): Promise<GoWasm> {
    const go = new Go();
    const result = await WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject);
    go.run(result.instance);
    return window as unknown as GoWasm;// Assume the wasm functions are attached to the global scope
}
