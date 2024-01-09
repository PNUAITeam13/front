// import { create } from "zustand";
// import {auth_api} from "../api/apis/auth.api";
// import {ICheckCode, IEditUserForm, ILogin, IRegister, IResetPassword} from "../interfaces/general";
// import {profile_api} from "../api/apis/profile.api";
// import {permissions_api} from "../api/apis/permissions.api";
//
// interface IUserStoreState {
//   user: any | null;
// }
// interface IUserStore  extends IUserStoreState{
//   setUserData: (user: any | null) => void
//   register: (body: IRegister) => Promise<any>
//   login: (body: ILogin) => Promise<any>
//   getProfile: () => Promise<any>
//   logout: () => Promise<any>
//   refresh: () => Promise<any>
//   profileSettings: (body: IEditUserForm) => Promise<any>
//   forgotPasswordEmail: (email: string) => Promise<any>
//   forgotPasswordCheck: (payload: ICheckCode) => Promise<any>
//   forgotPasswordChange: (payload: IResetPassword) => Promise<any>
//   loginTk: (body: any) => Promise<any>
// }
//
// const initialState = {
//   errorStatus: 0,
//   user: null,
// }
//
//
// export const useUserStore = create<IUserStore>((set) => ({
//   ...initialState,
//   setUserData: (user) => {
//     set(state => ({
//       ...state,
//       user
//     }))
//   },
//   logout: async () => {
//     const response = await auth_api.logout();
//
//     const { status, data } = response;
//
//     if (status !== 200) {
//       throw new Error(data);
//     }
//
//     set((state) => ({
//       ...state,
//       user: null
//     }));
//   },
//   getProfile: async () => {
//     const response = await profile_api.profile();
//
//     const { status, data } = response;
//
//     if (!status || !data) {
//       throw new Error("No status code or data returned from server.");
//     }
//
//     if (status !== 200) {
//       throw new Error(data);
//     }
//
//     set((state) => ({
//       ...state,
//       user: data.data
//     }));
//     return response;
//   },
//   profileSettings: async (body) => {
//     const response = await profile_api.profileSettings(body);
//
//     const { status, data } = response;
//
//     if (!status || !data) {
//       throw new Error("No status code or data returned from server.");
//     }
//
//     if (status !== 200) {
//       throw new Error(data);
//     }
//
//     set((state) => ({
//       ...state,
//       user: data.data
//     }));
//     return response;
//
//   },
//   register: async (body) => {
//     const response = await auth_api.register(body);
//
//     const { status, data } = response;
//
//     if (!status || !data) {
//       throw new Error("No status code or data returned from server.");
//     }
//
//     if (status !== 200) {
//       throw new Error(data);
//     } else {
//       set((state) => ({
//         ...state,
//
//       }));
//       return response;
//     }
//   },
//   login: async (body) => {
//     const response = await auth_api.login(body);
//
//     const { status, data } = response;
//
//     if (!status || !data) {
//       throw new Error("No status code or data returned from server.");
//     }
//     if (status !== 200) {
//       throw new Error(data);
//     } else {
//       set((state) => ({
//         ...state,
//         user: data.data
//       }));
//       return response;
//     }
//   },
//   loginTk: async (body) => {
//     const response = await auth_api.loginTk(body);
//
//     const { status, data } = response;
//
//     if (!status || !data) {
//       throw new Error("No status code or data returned from server.");
//     }
//     if (status !== 200) {
//       throw new Error(data);
//     } else {
//       set((state) => ({
//         ...state,
//         user: data.data
//       }));
//       return response;
//     }
//   },
//   refresh: async () => {
//     const response = await auth_api.refresh();
//
//     const { status, data } = response;
//
//     if (!status || !data) {
//       throw new Error("No status code or data returned from server.");
//     }
//     if (status !== 201) {
//       throw new Error(data);
//     } else {
//       set((state) => ({
//         ...state,
//         user: data.profile
//       }));
//       return response;
//     }
//   },
//   forgotPasswordEmail: async (email) => {
//     const response = await auth_api.forgotPasswordEmail(email);
//
//     const { status, data } = response;
//
//     if (!status || !data) {
//       throw new Error("No status code or data returned from server.");
//     }
//     if (status !== 200) {
//       throw new Error(data);
//     } else {
//       set((state) => ({
//         ...state,
//       }));
//       return response;
//     }
//   },
//
//
// }));
//
// export const userStoreOut = useUserStore.getState();
export {}