import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { Provider } from "react-redux";
import GlobalStyle from "@styles/globalStyles";
import store from "@redux/store";

function MyApp({ Component, pageProps }: any): JSX.Element {
  return (
    <StyledThemeProvider>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </StyledThemeProvider>
  );
}

export default MyApp;
