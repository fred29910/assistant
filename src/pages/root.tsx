import { useEffect, useState } from "react";

import { loadWasm } from './../wasmModule';
import GoWasm from '../go_exec'; // Import the generated TypeScript types


export default function Root() {
  const [sum, setSum] = useState<number | null>(null);

  useEffect(() => {
      const runWasm = async () => {
          const wasm: typeof GoWasm = await loadWasm();
          const result = wasm.add(3, 4);
          setSum(result);
      };
      runWasm();
  }, []);

  return (
      <div className="App">
          <header className="App-header">
              <h1>React WebAssembly Example</h1>
              {sum !== null ? <p>Sum of 3 and 4 is: {sum}</p> : <p>Loading...</p>}
          </header>
      </div>
  );
}
