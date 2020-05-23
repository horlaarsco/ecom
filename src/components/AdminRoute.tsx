import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../App";

// @ts-ignore
export default function AdminRoute({ children, ...rest }) {
  // @ts-ignore
  const Logged = useContext(AuthContext).loggedIn;
  // @ts-ignore
  const Admin = useContext(AuthContext).isAdmin;

  if (Logged && Admin) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to='/' />;
  }
}
