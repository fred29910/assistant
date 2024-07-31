import { Helmet } from 'react-helmet';

import CodeEditor from "../components/Coder";
import { LoadWasm } from "../wasmLoader/loadWasm";


export default function Coder() {
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
