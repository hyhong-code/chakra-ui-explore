const {
  Input,
  Stack,
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  FormHelperText,
} = require("@chakra-ui/core");

const SignupForm = () => {
  return (
    <Stack spacing={2}>
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
        Login
      </Button>

      <FormHelperText textAlign="center">Welcome back!</FormHelperText>
    </Stack>
  );
};

export default SignupForm;
