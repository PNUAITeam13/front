import { useState, useEffect, ReactNode } from "react";
import { initSockets } from "../sockets";
import SocketContext from "./socket";
const initialState = {
  messageError: {

  },
}
const SocketProvider = ({ children }: { children: ReactNode }) => {

  const [value, setValue] = useState(initialState);

  useEffect(() => {
    initSockets({setValue})
  }, [initSockets]);
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};
export default SocketProvider;
export {}