const {
  Input,
  Stack,
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  Divider,
  FormHelperText,
} = require("@chakra-ui/core");

const SignupForm = () => {
  return (
    <Stack spacing={2}>
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement children={<Icon name="info" />} />
          <Input type="name" placeholder="First name" aria-label="First name" />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement children={<Icon name="info" />} />
          <Input type="name" placeholder="Last name" aria-label="Last name" />
        </InputGroup>
      </FormControl>

      <Divider borderColor="gray.300" />

      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement children={<Icon name="email" />} />
          <Input type="email" placeholder="Email" aria-label="Email" />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement children={<Icon name="lock" />} />
          <Input type="password" placeholder="Passowrd" aria-label="Password" />
        </InputGroup>
      </FormControl>

      <Button
        type="submit"
        boxShadow="sm"
        variant="solid"
        _hover={{ boxShadow: "md" }}
        _active={{ boxShadow: "lg" }}
      >
        Sign up
      </Button>

      <FormHelperText textAlign="center">We will never share your email!</FormHelperText>
    </Stack>
  );
};

export default SignupForm;
