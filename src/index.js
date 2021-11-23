import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { fontTheme, media } from "./Components/constant";
import { Provider } from "react-redux";
import store from './store'

const theme = {
  bgColor: "blue",
  transition: "0.4s ease-in-out",
  media: {
    xs: `@media screen and (max-width: ${media.sm - 1}px)`,
    sm: `@media screen and (min-width: ${media.sm}px)`,
    md: `@media screen and (min-width: ${media.md}px)`,
    lg: `@media screen and (min-width: ${media.lg}px)`,
    xl: `@media screen and (min-width: ${media.xl}px)`,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ThemeProvider theme={fontTheme}>
            <App />
          </ThemeProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
