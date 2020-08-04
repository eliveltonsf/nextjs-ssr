import App from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "raiz/style/global";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}