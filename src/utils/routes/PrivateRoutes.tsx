import { Redirect, Route } from "react-router-dom";

export const PrivateRoutes: any = (props: any) => {
  const isLogged = false; // user login status example

  return isLogged ? <Route {...props} /> : <Redirect to={`/`} />;
};
