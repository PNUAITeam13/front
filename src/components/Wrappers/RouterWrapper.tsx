import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import { RouteUrls} from "../../interfaces/enum";
import RouterWrapper from "./Router";
import SignInPage from "../../pages/SignInPage";


const Router = () => {


    return (<Routes>
        <Route
          path={'/'}
          element={
              <RouterWrapper user={null}>
                  {/*<Account />*/}
                <></>
              </RouterWrapper>
          }
        >
          {/*<Route*/}
          {/*  index*/}
          {/*  path={RouteUrls.USERS}*/}
          {/*  element={*/}
          {/*    <RouterWrapper user={hasPermission(PermissionsUser.userList)}>{<Users />}</RouterWrapper>*/}
          {/*  }*/}
          {/*/>*/}
        </Route>
        <Route
            index
            path={RouteUrls.SIGN_IN}
            element={<SignInPage />}
        />

        <Route
            path="*"
            element={<Navigate to={RouteUrls.SIGN_IN} />}
        />
    </Routes>)
}

export default Router