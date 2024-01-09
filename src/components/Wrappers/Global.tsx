import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import React, {useEffect} from "react";
import CustomToaster from "../UI/Toaster";
import SocketProvider from "../../context";



interface GlobalProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Global = ({ children }: GlobalProps) => {

  return (
            // <I18nextProvider i18n={i18n}>
              <SocketProvider>
                    <BrowserRouter>
                        <CustomToaster />
                        <CssBaseline />
                          {children}
                    </BrowserRouter>
              </SocketProvider>
            //</I18nextProvider>

  );
};

export default Global;
