import { LoadWasm } from "../wasmLoader/loadWasm";
import CodeBlock from "../components/Coder/pcode";



export default function Root() {
    const codeString = `
  def hello_world():
      print("Hello, world!")
  
  hello_world()
  `;

  const gocode = `
  package main
  
  import "fmt"
  
  func main() {
      fmt.Println("Hello, world!")
  }
  `


    return (
        <LoadWasm>
            <div className="App">
            <h1>Code Highlighting with PrismJS</h1>
            <CodeBlock code={codeString} language="python" />
            <CodeBlock code={gocode} language="go" />
            </div>
        </LoadWasm>

    );
}
