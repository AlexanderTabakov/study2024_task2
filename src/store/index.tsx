import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IState {
  jsonFiles?: any;
  addJsonFiles?: any;
}

const initialState: IState = {
  jsonFiles: null,
};

const useStore = create(
  devtools<IState>((set, get) => ({
    ...initialState,
    jsonFiles: [],

    addJsonFiles(newFiles: []) {
      const setJsonFiles = [...get().jsonFiles, newFiles];
      set({ jsonFiles: setJsonFiles });
    },
    reset: () => {
      set((state: IState) => ({ jsonFiles: state.jsonFiles }));
    },
  })),
);

// useStore.getState().addJsonFiles;

export default useStore;
