import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";

import {
  Heading,
  Button,
  Box,
  Link,
  useToast,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

import { passwordValidator } from "../utils/validations";

import FormType from "./FormControl";
import Toast from "./Toast";
import { LOG_IN } from "../utils/queries";
import { AuthContext } from "../App";

export default function Login() {
  let history = useHistory();

  const toast = useToast();
  const [loginUser, { loading }] = useMutation(LOG_IN);
  const LoggedInStatus: any = useContext(AuthContext);

  const { handleSubmit, register, errors, watch } = useForm();

  // @ts-ignore

  const onSubmit = async (values) => {
    values.user = values.user.toLowerCase();

    try {
      const Newdata = await loginUser({ variables: { data: { ...values } } });
      if (Newdata.data.loginUser.role === "seller") {
        LoggedInStatus.setAdmin(true);
      }
      const toSave = {
        id: Newdata.data.loginUser.id,
        token: Newdata.data.loginUser.token,
      };
      localStorage.setItem("token", JSON.stringify(toSave));
      LoggedInStatus.setLogged(true);

      history.push("/");

      Toast(toast, "Login Sucessfull", "success", "Welcome to E-COM.");
    } catch (error) {
      let newError = "";
      if (error.message.includes("Email")) {
        newError = "Incorrect Email or Username";
      } else if (error.message.includes("Password")) {
        newError = "Incorrect Password";
      } else {
        newError = "Fill all required fields";
      }
      Toast(toast, "An error occurred.", "error", `${newError}`);
    }
  };

  return (
    <>
      <Heading fontSize={{ base: "sm", sm: "lg" }} my='6' textAlign='center'>
        SIGN IN WITH EMAIL
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl w='full' isInvalid={errors.user}>
          <FormLabel
            fontSize={{ base: "sm", sm: "lg" }}
            letterSpacing='widest'
            my='2'
            mb={{ base: 0, sm: 2 }}
            htmlFor='user'
          >
            Email / Username
          </FormLabel>
          <Input
            id='user'
            name='user'
            ref={register({
              required: "Email or Username is Required",
            })}
          />
          <FormErrorMessage>
            {errors.user && errors.user.message}
          </FormErrorMessage>
        </FormControl>
        <FormType
          register={register}
          errors={errors}
          name='password'
          validator={passwordValidator}
          title='Password'
        />
        <Button
          w='full'
          backgroundColor='black'
          color='white'
          _hover={{ background: "#303133" }}
          mt={4}
          type='submit'
          isLoading={loading}
        >
          Submit
        </Button>
      </form>
      <Box my='5' textAlign='center'>
        <Link color='#303133'>Forgot password?</Link>
      </Box>
    </>
  );
}
