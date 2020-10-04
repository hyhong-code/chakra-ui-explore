import { ThemeProvider, theme, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import ColorModeSwitch from "../components/ColorModeSwitch";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ColorModeSwitch />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
