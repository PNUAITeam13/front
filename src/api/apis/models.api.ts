import {api} from "../index";



export const models_api = {
  createAlchoModel: async (body: any) => {
    return await api.post(`alcohol_consumption`, body);
  },
  createAlchoModelByFile: async (body: any) => {
    return await api.post(`alcohol_consumption/upload_file`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  },
  getAlchoModelDetails: async () => {
    return await api.get(`alcohol_consumption/fields`);
  },
  createMobileoModel: async (body: any) => {
    return await api.post(`mobile_pricing`, body);
  },
  createMobileModelByFile: async (body: any) => {
    return await api.post(`mobile_pricing/upload_file`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  },
  getMobileoModelDetails: async () => {
    return await api.get(`mobile_pricing/fields`);
  },
  createCsgoModel: async (body: any) => {
    return await api.post(`csgo_round_winner`, body);
  },
  createCsgoModelByFile: async (body: any) => {
    return await api.post(`csgo_round_winner/upload_file`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  },
  getCsgoModelDetails: async () => {
    return await api.get(`csgo_round_winner/fields`);
  },
};

