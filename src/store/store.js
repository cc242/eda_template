import create from "zustand";

export const [useStore, api] = create((set, get) => {
    return {
        references: null,
        setReferences: (id)=> set(state => ({ references: id }))
    }
});
