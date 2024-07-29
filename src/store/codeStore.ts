import { create } from "zustand"
import { Position } from "../wasm_exec"

export type CodeStore = {
    file: string,
    selected?: string,
    selectList?: string[],
    setterList?: CodeSetter[],
}

export type CodeSetter = {
    id: string | number,
    content: string,
    name: string | number,
    pos: Position,
    selected?: boolean,
    gen?: string,
}

export const useCodeStore = create<CodeStore>(() => ({
    file: "",
}))

// get select by id
export const getById = (id: string | number): CodeSetter | undefined => {
    return useCodeStore.getState().setterList?.find((item) => item.id === id)
}

// setting select code
export const setSetted = (context: string, name = "", pos: Position) => {
    const list = useCodeStore.getState().setterList
    const exeists = list?.find((item) => item.content === context) 
    if (exeists) {
        useCodeStore.setState(() => ({
            setterList: list,
        }))
    }
    if (!list) {
        useCodeStore.setState(() => ({
            setterList: [{ id: Date.now(), content: context, name, pos }],
        }))
    } else {
        useCodeStore.setState(() => ({
            setterList: [...list, { id: Date.now(), content: context, name, pos }],
        }))
    }
}
