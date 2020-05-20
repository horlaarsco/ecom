import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { gql } from "apollo-boost";
import { useHistory } from "react-router-dom";

import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
} from "@chakra-ui/core";
import { useMutation } from "@apollo/react-hooks";

const SIGN_UP = gql`
  mutation($data: UserInput) {
    addUser(input: $data) {
      firstName
      lastName
      email
      password
      role
      username
      password
      updatedAt
      createdAt
      verified
      id
      tokens
    }
  }
`;
export default function Signup() {
  const toast = useToast();

  const [addTodo, { loading }] = useMutation(SIGN_UP);
  let history = useHistory();

  const { handleSubmit, register, errors, watch } = useForm();

  // @ts-ignore
  const onSubmit = async (values) => {
    const data = { ...values, role: "User", verified: true };
    delete data.cpassword;
    try {
      const Newdata = await addTodo({ variables: { data: { ...data } } });
      console.log(Newdata);
      history.push("/");
      toast({
        position: "bottom-right",
        title: "Account created.",
        description: "Welcome to E-COM.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      let newError = "";
      if (error.message.includes("Duplicate")) {
        newError = "Email or Username already exist";
      } else if (error.message.includes("Required")) {
        newError = "Fill all required fields";
      }

      toast({
        position: "bottom-right",
        title: "An error occurred.",
        description: `${newError}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <>
      <Heading fontSize={{ base: "sm", sm: "lg" }} my='6' textAlign='center'>
        SIGN UP USING YOUR EMAIL ADDRESS
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl w='full' isInvalid={errors.email}>
          <FormLabel
            fontSize={{ base: "sm", sm: "lg" }}
            letterSpacing='widest'
            my='2'
            mb={{ base: 0, sm: 2 }}
            htmlFor='email'
          >
            Email address
          </FormLabel>
          <Input
            name='email'
            // type='email'
            id='email'
            ref={register({
              required: "Email is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl w='full' isInvalid={errors.username}>
          <FormLabel
            fontSize={{ base: "sm", sm: "lg" }}
            letterSpacing='widest'
            my='2'
            htmlFor='username'
            mb={{ base: 0, sm: 2 }}
          >
            Username
          </FormLabel>
          <Input
            id='username'
            name='username'
            ref={register({
              required: "Username is Required",
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: "Username cannot contain special characters",
              },
            })}
          />
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl w='full' isInvalid={errors.firstName}>
          <FormLabel
            fontSize={{ base: "sm", sm: "lg" }}
            letterSpacing='widest'
            my='2'
            mb={{ base: 0, sm: 2 }}
            htmlFor='firstName'
          >
            First Name
          </FormLabel>
          <Input
            id='firstName'
            name='firstName'
            ref={register({
              required: "First Name is Required",
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: "First Name cannot contain special characters",
              },
            })}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl w='full' isInvalid={errors.lastName}>
          <FormLabel
            fontSize={{ base: "sm", sm: "lg" }}
            letterSpacing='widest'
            my='2'
            mb={{ base: 0, sm: 2 }}
            htmlFor='lastName'
          >
            Last Name
          </FormLabel>
          <Input
            id='lastName'
            name='lastName'
            ref={register({
              required: "Last Name is Required",
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: "Last Name cannot contain special characters",
              },
            })}
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl w='full' isInvalid={errors.password}>
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
            name='password'
            ref={register({
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl w='full' isInvalid={errors.cpassword}>
          <FormLabel
            fontSize={{ base: "sm", sm: "lg" }}
            letterSpacing='widest'
            my='2'
            mb={{ base: 0, sm: 2 }}
            htmlFor='cpassword'
          >
            Confirm Password
          </FormLabel>
          <Input
            type='password'
            id='cpassword'
            name='cpassword'
            ref={register({
              required: "Confirm Password is Required",
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          <FormErrorMessage>
            {errors.cpassword && errors.cpassword.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          w='full'
          backgroundColor='black'
          color='white'
          _hover={{ background: "#303133" }}
          mt={4}
          type='submit'
          isLoading={loading}
        >
          JOIN
        </Button>
      </form>
    </>
  );
}
