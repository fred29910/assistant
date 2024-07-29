import { create } from "zustand"

import { Position } from "../wasm_exec"
import { persist, createJSONStorage } from 'zustand/middleware'
import { genId } from "../utils/id";


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

export const useCodeStore = create(
    persist<CodeStore>(
        () => ({
            file: "",
        }),
        {
            name: "codeStore",
            storage: createJSONStorage(() => localStorage),
        }
    )
)

// get select by id
export const getById = (id: string | number): CodeSetter | undefined => {
    return useCodeStore.getState().setterList?.find((item) => item.id === id)
}

export const setFile = (file: string) => {
    useCodeStore.setState(() => ({
        file,
    }))
}

export const setSelected = (selected: string) => {
    useCodeStore.setState(() => ({
        selected,
    }))
}

export const setSelectList = (str: string) => {
    const list = useCodeStore.getState().selectList
    if (!list) {
        useCodeStore.setState(() => ({
            selectList: [str],
        }))
        return
    }

    const exeists = list?.find((item) => item === str)
    if (exeists) {
        return
    }
    useCodeStore.setState(() => ({
        selectList: [...list, str],
    }))
}
// setting select code
export const setSetted = (context: string, name = "", pos: Position): string|number => {
    const list = useCodeStore.getState().setterList
    const exeists = list?.find((item) => item.content === context)
    if (exeists) {
        const updatedList = list?.map((item) => {
            if (item.content === context) {
                return { ...item, name, pos }
            }
            return item
        })
        useCodeStore.setState(() => ({
            setterList: updatedList,
        }))
        return exeists.id
    }
    const id =genId(context)
    if (!list) {
        useCodeStore.setState(() => ({
            setterList: [{ id, content: context, name, pos }],
        }))
    } else {
        useCodeStore.setState(() => ({
            setterList: [...list, { id, content: context, name, pos }],
        }))
    }
    return id
}
