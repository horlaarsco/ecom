import React from "react";
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Link,
  useToast,
} from "@chakra-ui/core";
export default function Login() {
  return (
    <>
      <Heading fontSize={{ base: "sm", sm: "lg" }} my='6' textAlign='center'>
        SIGN IN WITH EMAIL
      </Heading>
      <FormControl w='full'>
        <FormLabel
          fontSize={{ base: "sm", sm: "lg" }}
          letterSpacing='widest'
          mb={{ base: 0, sm: 2 }}
          my='2'
          htmlFor='email'
        >
          Email address
        </FormLabel>
        <Input type='email' id='email' aria-describedby='email-helper-text' />
      </FormControl>
      <FormControl w='full' my='4'>
        <FormLabel
          fontSize={{ base: "sm", sm: "lg" }}
          letterSpacing='widest'
          my='2'
          mb={{ base: 0, sm: 2 }}
          htmlFor='password'
        >
          Password
        </FormLabel>
        <Input
          type='password'
          id='password'
          aria-describedby='email-helper-text'
        />
      </FormControl>
      <Button
        w='full'
        backgroundColor='black'
        color='white'
        _hover={{ background: "#303133" }}
        mt={4}
        type='submit'
      >
        Submit
      </Button>
      <Box my='5' textAlign='center'>
        <Link color='#303133'>Forgot password?</Link>
      </Box>
    </>
  );
}
