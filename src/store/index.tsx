import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IState {
  jsonFiles?: any;
  addJsonFiles?: any;
}

const useStore = create(
  devtools<IState>((set, get) => ({
    jsonFiles: [],

    addJsonFiles(newFiles: any) {
      const setJsonFiles = [...get().jsonFiles, newFiles];
      set({ jsonFiles: setJsonFiles });
    },
  })),
);

useStore.getState().addJsonFiles;

export default useStore;
