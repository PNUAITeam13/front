import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import RouterWrapper from "./Router";
import Main from "../../pages/Main";


const Router = () => {


    return (<Routes>
        <Route
          path={'/'}
          index
          element={
                <Main />
          }
        />
        <Route
            path="*"
            element={<Navigate to={'/'} />}
        />
    </Routes>)
}

export default Router