import React, { useRef } from "react";
import { useForm } from "react-hook-form";
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
import { SIGN_UP } from "../utils/queries";
import {
  usernameValidator,
  emailValidator,
  firstNameValidator,
  lastNameValidator,
  passwordValidator,
  cPasswordValidator,
} from "../utils/validations";
import Toast from "./Toast";
import FormType from "./FormControl";

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
      Toast(toast, "Account created.", "success", "Welcome to E-COM.");
    } catch (error) {
      let newError = "";
      if (error.message.includes("Duplicate")) {
        newError = "Email or Username already exist";
      } else if (error.message.includes("Required")) {
        newError = "Fill all required fields";
      }
      Toast(toast, "An error occurred.", "error", `${newError}`);
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
        <FormType
          register={register}
          errors={errors}
          name='email'
          validator={emailValidator}
          title='Email address'
        />
        <FormType
          register={register}
          errors={errors}
          name='username'
          validator={usernameValidator}
          title='Username'
        />
        <FormType
          register={register}
          errors={errors}
          name='firstName'
          validator={firstNameValidator}
          title='First Name'
        />
        <FormType
          register={register}
          errors={errors}
          name='lastName'
          validator={lastNameValidator}
          title='Last Name'
        />
        <FormType
          register={register}
          errors={errors}
          name='password'
          validator={passwordValidator}
          title='Password'
        />

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
            ref={cPasswordValidator(password, register)}
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
