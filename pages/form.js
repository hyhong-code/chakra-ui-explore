import { useColorMode, Box, Image, Tabs, TabList, TabPanel, TabPanels, Tab } from "@chakra-ui/core";

import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const form = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "light" ? "gray.200" : "gray.600"}
      w="350px"
      p={3}
      boxShadow="sm"
      rounded="lg"
    >
      <Image
        src="https://images.unsplash.com/photo-1514302240736-b1fee5985889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        w="80px"
        mx="auto"
        mt={12}
        mb={10}
        rounded="md"
      />
      <Tabs variant="enclosed-colored" m={4} isFitted>
        <TabList>
          <Tab>Sign up</Tab>
          <Tab>Login</Tab>
        </TabList>
        <TabPanels mt={3}>
          <TabPanel>
            <SignupForm />
          </TabPanel>
          <TabPanel>
            <LoginForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default form;
