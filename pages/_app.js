import { ThemeProvider, theme, ColorModeProvider, CSSReset, Flex } from "@chakra-ui/core";
import Drawer from "../components/Drawer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Drawer />
        <Flex h="100vh" justify="center" align="center">
          <Component {...pageProps} />
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
