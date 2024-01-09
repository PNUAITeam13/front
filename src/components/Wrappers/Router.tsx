import {Navigate, Route, RouteProps} from "react-router-dom";
import React, {FC} from "react";
import {RouteUrls} from "../../interfaces/enum";
interface IRouterWrapper {
  user: any,
  children: JSX.Element
}
const RouterWrapper: FC<IRouterWrapper> = ({ user, children })  => {
  if (!user) {
    return <><Navigate to={RouteUrls.SIGN_IN} replace /></>;
  }

  return children;
};
export default RouterWrapper;