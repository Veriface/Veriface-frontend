import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/utils/themes/theme";
import GlobalStyle from "../src/styles/GlobalStyles";
import "../src/styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
