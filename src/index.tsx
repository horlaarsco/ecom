import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./styles/index.css";
import { appTheme } from "./styles/theme";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // uri: "https://horla-ecom.herokuapp.com/",
  uri: process.env.REACT_APP_APOLLO,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={appTheme}>
        <CSSReset />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
