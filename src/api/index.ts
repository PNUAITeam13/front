import axios from "axios";
// import {userStoreOut} from "../storestore/userStore";

export const api = axios.create({
  withCredentials: true,
  baseURL:
    (process.env.REACT_APP_TYPE_ENVIRONMENT === "DEV"
      ? process.env.REACT_APP_DEV_BASE_API_URL
      : process.env.REACT_APP_URL) + "/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   async (config) => {
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
//
// const securedRoutes = ['refresh', 'login', 'register']
//
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response) {
//       // ? Access Token was expired
//       if (error.response.status === 401 && !originalRequest._retry && !securedRoutes?.filter(el => originalRequest?.url?.includes(el)).length) {
//         originalRequest._retry = true;
//         // try {
//         //   const res = await userStoreOut.refresh();
//         //
//         //   if (res.status === 200) {
//         //     return api(originalRequest);
//         //   }
//         //   throw new Error("Failed to refresh token");
//         // } catch (err) {
//         //   userStoreOut.setUserData(null);
//         //   return Promise.reject(error);
//         // }
//         // ! Refresh Token was expired need refresh token or login again
//       }
//       if (error.response.status === 403 && error.response.data) {
//         return Promise.reject(error.response.data);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
