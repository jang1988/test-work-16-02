import { create } from 'zustand';

export const langStore = create((set) => ({
    lang: 'lv',
    selectlang: (newLang: any) =>
        set((state: any) => ({
            lang: newLang.lang,
        })),
}));