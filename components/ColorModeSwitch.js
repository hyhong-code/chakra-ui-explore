import NextLink from "next/link";
import {
  IconButton,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
  useColorMode,
  Input,
  Link,
} from "@chakra-ui/core";
import { Fragment } from "react";

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Fragment>
      <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
        Open Drawer
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Demo</DrawerHeader>

          <DrawerBody>
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === "dark" ? "sun" : "moon"}
              variant="ghost"
            />
            <Input placeholder="Type here..." />

            <NextLink href="/form">
              <Link>Form</Link>
            </NextLink>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
