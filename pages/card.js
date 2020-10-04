import {
  useColorMode,
  Badge,
  Box,
  Image,
  Text,
  Stack,
  Icon,
  Button,
} from "@chakra-ui/core";

const card = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "gray.500", dark: "gray.100" };

  return (
    <Box
      w="400px"
      rounded="20px"
      overflow="hidden"
      boxShadow="sm"
      bg={bgColor[colorMode]}
    >
      <Image src="/thumb.png" alt="cover" />

      <Box p={5}>
        <Stack isInline align="baseline">
          <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
            NEW!
          </Badge>
          <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
            REACT
          </Badge>
          <Text
            textTransform="uppercase"
            fontSize="sm"
            color="gray.500"
            letterSpacing="wide"
          >
            2 Hours &bull; 12 Lectures
          </Text>
        </Stack>

        <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
          Introduction to Chakra-ui
        </Text>

        <Text isTruncated fontWeight="light" fontSize="md">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna <br />{" "}
          aliqua. Arcu dui vivamus arcu felis bibendum ut tristique et egestas.
          Feugiat vivamus at augue eget arcu dictum. Eget duis at tellus at urna
          condimentum mattis. Sit amet porttitor eget dolor morbi non arcu
          risus. Tortor at auctor urna nunc id cursus metus aliquam eleifend. A
          lacus vestibulum sed arcu non odio. Phasellus vestibulum lorem sed
          risus ultricies. Nulla malesuada pellentesque elit eget gravida cum
          sociis natoque penatibus.
        </Text>

        <Stack isInline justify="space-between" color={textColor[colorMode]}>
          <Text fontWeight="semibold" fontSize="lg">
            $20
          </Text>

          <Box as="span" ml="auto">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Icon name="star" color="teal.500" key={idx} />
            ))}
            <Icon name="star" />
          </Box>

          <Text as="h3" fontSize="lg" fontWeight="semibold">
            34 Reviews
          </Text>
        </Stack>

        <Box textAlign="center">
          <Button
            variantColor="teal"
            size="lg"
            mt={3}
            boxShadow="sm"
            _hover={{ boxShadow: "md" }}
            _active={{ boxShadow: "lg" }}
          >
            Sign Up Now!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default card;
