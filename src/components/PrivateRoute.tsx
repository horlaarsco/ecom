import React, { useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../App";

// @ts-ignore
export default function PrivateRoute({ children, ...rest }) {
  // @ts-ignore
  const Logged = useContext(AuthContext).loggedIn;
  // @ts-ignore

  if (Logged) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to='/' />;
  }
}
