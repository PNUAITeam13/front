// import { io } from "socket.io-client";
//
// const socket_url ='wss://test2.perun.fun:443'
//
// export const socket = io(socket_url, {
//   transports: ["websocket"],
//   path: "/socket.io/",
//   rememberUpgrade: true,
//   rejectUnauthorized: false,
//   withCredentials: true,
//   secure: true,
//     auth: {
//      tempToken: null
//   }
// });
//
// import Pusher from "pusher-js";
// import {env} from "../constants";
//
// export const pusher = new Pusher('dSRh63g9TYf58VF9sdf8', {
//   // broadcaster: 'pusher',
//   wsHost: env.REACT_APP_DEV_BASE_SERVER_DOMAIN,
//   cluster: 'mt1',
//   wssPort: 443,
//   disableStats: false,
//   enabledTransports: ['wss', 'ws'],
//   channelAuthorization: {
//     transport: "jsonp",
//     endpoint: `${env.REACT_APP_DEV_BASE_API_URL}/broadcasting/auth`
//   },
// })
export {}