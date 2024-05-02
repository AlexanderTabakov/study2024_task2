import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IState {
    jsonFiles: [];

}

const initialState: IState = {
    jsonFiles: [],

};

const useStore = create(
    devtools<IState>((set) => ({
        jsonFiles: [],

        getJsonFiles: () => {

        }


    })),
);



export default useStore;
