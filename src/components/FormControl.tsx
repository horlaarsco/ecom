import React from "react";
import { useForm } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/core";

//   @ts-ignore
export default function FormType({ register, errors, name, validator, title }) {
  return (
    <FormControl w='full' isInvalid={errors[name]}>
      <FormLabel
        fontSize={{ base: "sm", sm: "lg" }}
        letterSpacing='widest'
        my='2'
        mb={{ base: 0, sm: 2 }}
        htmlFor={name}
      >
        {title}
      </FormLabel>
      <Input type={name} id={name} name={name} ref={validator(register)} />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
