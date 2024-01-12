import { create } from "zustand";
import {models_api} from "../api/apis/models.api";

interface IAclchoStoreState {
  data: any[];
  modelFields: any[]
  loading: boolean;
}
interface IAclchoStore  extends IAclchoStoreState{
  creteModelAlcho: (model: any) => void;
  createModelAlchoByFile: (model: any) => void;
  getAlchoModelDetails: () => void;
  creteModelMobile: (model: any) => void;
  createModelMobileByFile: (model: any) => void;
  getMobileModelDetails: () => void;
  creteModelCsgo: (model: any) => void;
  createModelCsgoByFile: (model: any) => void;
  getCsgoModelDetails: () => void;
  setData: (data: any[]) => void;
}

const initialState = {
  data: [],
  modelFields: [],
  loading: true,
}


export const useAclchoStore = create<IAclchoStore>((set) => ({
  ...initialState,
  setData: (data) => {
    set((state) => ({
      ...state,
      data: data
    }));
  },
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
    set((state) => ({
      ...state,
      loading: true
    }));
    const response = await models_api.getAlchoModelDetails().finally(() => {
      set((state) => ({
        ...state,
        loading: false
      }));
    });

    const { status, data } = response;

    if (status !== 200) {
      throw new Error(data);
    }

    set((state) => ({
      ...state,
      modelFields: data.data
    }));
  },
  creteModelMobile: async (model) => {
    const response = await models_api.createMobileoModel(model);

    const { status, data } = response;

    if (status !== 200) {
      throw new Error(data);
    }

    set((state) => ({
      ...state,
      data: data.data
    }));
  },
  createModelMobileByFile: async (model) => {
    const response = await models_api.createMobileModelByFile(model);

    const { status, data } = response;

    if (status !== 200) {
      throw new Error(data);
    }

    set((state) => ({
      ...state,
      data: data.data
    }));
  },
  getMobileModelDetails: async () => {
    set((state) => ({
      ...state,
      loading: true
    }));
    const response = await models_api.getMobileoModelDetails().finally(() => {
      set((state) => ({
        ...state,
        loading: false
      }));
    });

    const { status, data } = response;

    if (status !== 200) {
      throw new Error(data);
    }

    set((state) => ({
      ...state,
      modelFields: data.data
    }));
  },
  creteModelCsgo: async (model) => {
    const response = await models_api.createCsgoModel(model);

    const { status, data } = response;

    if (status !== 200) {
      throw new Error(data);
    }

    set((state) => ({
      ...state,
      data: data.data
    }));
  },
  createModelCsgoByFile: async (model) => {
    const response = await models_api.createCsgoModelByFile(model);

    const { status, data } = response;

    if (status !== 200) {
      throw new Error(data);
    }

    set((state) => ({
      ...state,
      data: data.data
    }));
  },
  getCsgoModelDetails: async () => {
    set((state) => ({
      ...state,
      loading: true
    }));
    const response = await models_api.getCsgoModelDetails().finally(() => {
      set((state) => ({
        ...state,
        loading: false
      }));
    });

    const { status, data } = response;

    if (status !== 200) {
      throw new Error(data);
    }

    set((state) => ({
      ...state,
      modelFields: data.data
    }));
  },


}));

export const userStoreOut = useAclchoStore.getState();
