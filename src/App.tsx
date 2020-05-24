import React, { useEffect, useContext } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Header, Footer, Router, Loader, EmptyPage } from "./components";

import { useMutation } from "@apollo/react-hooks";
import { CHECK_LOG_IN } from "./utils/queries";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
// @ts-ignore
export const AuthContext = React.createContext();

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isAdmin, setAdmin] = React.useState(false);
  const [loadCart, setLoadCart] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [profile, setProfile] = React.useState({});

  // @ts-ignore
  const [verifylogin, { newww }] = useMutation(CHECK_LOG_IN);

  const verifyiflogin = async () => {
    // @ts-ignore
    const token = await JSON.parse(localStorage.getItem("token"));
    if (token) {
      try {
        const user = await verifylogin({
          variables: { type: token.id },
        });

        if (user) {
          if (user.data.verifylogin.role === "seller") {
            setLoggedIn(true);
            setAdmin(true);
            setLoading(false);
          }
          setLoggedIn(true);
          setProfile(user.data.verifylogin);
          setLoading(false);
        } else {
          setLoading(false);
          setLoggedIn(false);
        }
      } catch (error) {
        setLoading(false);
        setLoggedIn(false);
      }
    }
  };
  useEffect(() => {
    verifyiflogin();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        isAdmin,
        setAdmin,
        loadCart,
        setLoadCart,
        profile,
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
