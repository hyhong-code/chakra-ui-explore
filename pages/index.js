import { Box, useColorMode } from "@chakra-ui/core";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <Box
      w="200px"
      h="15vh"
      bg={colorMode === "light" ? "gray.500" : "gray.200"}
      boxShadow="lg"
      rounded="lg"
    >
      Hello
    </Box>
  );
}
