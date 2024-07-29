import { useEffect, useRef, useState } from 'react';
import AceEditor from 'react-ace';

import styles from './index.module.css'
// 引入 Ace Editor 的主题和模式
// import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/theme-monokai';
import { useCodeStore, setFile } from '../../store/codeStore';

// 可选：引入更多的模式和主题
// import 'ace-builds/src-noconflict/mode-python';
// import 'ace-builds/src-noconflict/theme-github';

const CodeEditor = () => {
    const [code, setCode] = useState(``);

    const context = useCodeStore((state) => state.file)


    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [readOnley, setReadOnley] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const editorRef = useRef<AceEditor>(null);

    const handleContextMenu = (e: { preventDefault: () => void; clientX: any; clientY: any; }) => {
        e.preventDefault();
        setMenuPosition({ x: e.clientX, y: e.clientY });
        setContextMenuVisible(true);
    };

    const handleClick = () => {
        setContextMenuVisible(false);
    };
    useEffect(() => {
        if (editorRef !== null && editorRef.current !== null && editorRef.current.editor !== null) {
            const editor = editorRef.current.editor;
            editor.container.addEventListener('contextmenu', handleContextMenu);
        }
        if (context && context.trim() !== "") {
            setCode(context)
        }
        return () => {
            if (editorRef !== null && editorRef.current !== null && editorRef.current.editor !== null) {
                const editor = editorRef.current.editor;
                editor.container.removeEventListener('contextmenu', handleContextMenu);
            }
            if (code && code.trim() !== "") {
                setFile(code);
            }
        };
    }, []);

    const handleChange = (newCode: string) => {
        setCode(newCode);
    };

    const runCode = () => {
        try {
            setReadOnley(!readOnley);
            setFile(code);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className={styles.container}>
            <AceEditor
                ref={editorRef}
                mode="golang"
                theme="monokai"
                name="codeEditor"
                value={code}
                onChange={handleChange}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true
                }}
                style={{ width: '100%', height: '300px' }}
            />
            {contextMenuVisible && (
                <div
                    id="contextMenu"
                    style={{
                        position: 'absolute',
                        top: `${menuPosition.y}px`,
                        left: `${menuPosition.x}px`,
                        background: 'white',
                        border: '1px solid #ccc',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000,
                    }}
                >
                    <ul style={{ listStyleType: 'none', padding: '5px', margin: 0 }}>
                        <li style={{ padding: '8px 12px', cursor: 'pointer' }} onClick={() => handleClick()}>parser</li>
                    </ul>
                </div>
            )}
            <button onClick={runCode}>{readOnley ? "Parser" : "Edit"}</button>
        </div>
    );
};

export default CodeEditor;
