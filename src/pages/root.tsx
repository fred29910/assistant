import { useEffect } from "react";
import { LoadWasm } from "../wasmLoader/loadWasm";



export default function Root() {
    useEffect(() => {
    }, []);

    return (
        <LoadWasm>
            <div className="App">
                <header className="App-header">

                    <button onClick={() => { alert(window.add(2, 3)); }}>
                        Click here to invoke WebAssembly!
                    </button>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </LoadWasm>

    );
}
