import create from "zustand";

export type ZustandStore = {
  field: number;
  something: any;
  setField: (val: number) => void;
  getField: () => number;
  setField2: (val: number) => void;
  loadSomething: (url: string) => Promise<void>;
};

export const useZustandStore = create<ZustandStore>((set, get) => ({
  field: 0,
  something: null,
  setField: (val: number) => {
    set({ field: val });
  },
  getField: () => {
    return get().field;
  },
  setField2: (val: number) => {
    set(state => {
      if (state.field > 3) {
        return state;
      } else {
        return { field: val };
      }
    });
  },
  loadSomething: async (url: string) => {
    const data = await fetch(url).then(response => response.json());
    set({ something: data });
  },
}));
