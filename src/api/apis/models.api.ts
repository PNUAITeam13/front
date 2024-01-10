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
    return await api.get(`alcohol_consumption/model_details`);
  },
};

