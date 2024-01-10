import { create } from "zustand";
import {models_api} from "../api/apis/models.api";

interface IAclchoStoreState {
  data: any[];
  modelFields: any[]
}
interface IAclchoStore  extends IAclchoStoreState{
  creteModelAlcho: (model: any) => void;
  createModelAlchoByFile: (model: any) => void;
  getAlchoModelDetails: () => void;
}

const initialState = {
  data: [],
  modelFields: []
}


export const useAclchoStore = create<IAclchoStore>((set) => ({
  ...initialState,
  creteModelAlcho: async (model) => {
    const response = await models_api.createAlchoModel(model);

    const { status, data } = response;

    if (status !== 200) {
      throw new Error(data);
    }

    set((state) => ({
      ...state,
      data: data.data
    }));
  },
  createModelAlchoByFile: async (model) => {
    const response = await models_api.createAlchoModelByFile(model);

    const { status, data } = response;

    if (status !== 200) {
      throw new Error(data);
    }

    set((state) => ({
      ...state,
      data: data.data
    }));
  },
  getAlchoModelDetails: async () => {
    const response = await models_api.getAlchoModelDetails();

    const { status, data } = response;

    if (status !== 200) {
      throw new Error(data);
    }

    set((state) => ({
      ...state,
      modelFields: data.data
    }));
  }


}));

export const userStoreOut = useAclchoStore.getState();
