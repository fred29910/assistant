import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';


import CodeEditor from "../components/Coder";
import { LoadWasm } from "../wasmLoader/loadWasm";


export default function Coder() {
    const [sum, setSum] = useState<number | null>(null);

    useEffect(() => {
        const runWasm = async () => {
            console.log("runWasm", sum);
            setSum(1)
        };
        runWasm();
    }, []);

    return (
        <>
            <Helmet>
                <title>Coder</title>
            </Helmet>
            <LoadWasm>
                <CodeEditor />
            </LoadWasm>

        </>
    );
}
