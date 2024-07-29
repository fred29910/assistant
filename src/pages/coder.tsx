import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';


import CodeEditor from "../components/Coder";
import { loadWasm } from './../wasmModule';
import GoWasm from '../go_exec'; // Import the generated TypeScript types


export default function Coder() {
    const [sum, setSum] = useState<number | null>(null);

    useEffect(() => {
        const runWasm = async () => {
            const wasm: typeof GoWasm = await loadWasm();
            const result = wasm.add(3, 4);
            setSum(result);
            console.log("wasm", sum)
        };
        runWasm();
    }, []);

    return (
        <>
            <Helmet>
                <title>Coder</title>
            </Helmet>
            <CodeEditor />
        </>
    );
}
