import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import {
  Heading,
  Box,
  Text,
  Image,
  useToast,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Input,
} from "@chakra-ui/core";
import { useForm } from "react-hook-form";

import { BaseContainer } from "../../components";

const ADD_BRAND = gql`
  mutation($data: BrandInput) {
    addBrand(input: $data) {
      id
      slug
      description
      name
    }
  }
`;

export default function AddBrand() {
  const toast = useToast();

  const { handleSubmit, register, errors } = useForm();
  const [image, setImage] = useState("");
  const [imageerror, setimageerror] = useState("");

  const [addBrand, { loading }] = useMutation(ADD_BRAND);

  const uploadImage = async (e: any) => {
    setimageerror("");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "horlars");
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/horlaarsco/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const newfile = await res.json();
    // @ts-ignore
    setImage(newfile.secure_url);
  };

  const onSubmit = async (values: any) => {
    const valuesToSubmit = {
      ...values,
      image,
    };
    console.log(valuesToSubmit);
    try {
      const Newdata = await addBrand({
        variables: { data: { ...valuesToSubmit } },
      });
      toast({
        position: "bottom-right",
        title: "Brand Added.",
        description: "Added.",
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

  return (
    <Box bg='#f5f5f5'>
      <BaseContainer maxW='600px' mx='auto' color='black'>
        <Heading my='6'>Add Brand</Heading>
        <Box mb='6' bg='white' p='6'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl my='3' isInvalid={errors.name}>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input
                id='name'
                name='name'
                placeholder='Enter name'
                ref={register({
                  required: "Name is Required",
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              mt='5'
              d='flex'
              flexDirection='column'
              flex='1'
              isInvalid={errors.description}
            >
              <FormLabel>Description</FormLabel>
              <Textarea
                name='description'
                flex='1'
                h='full'
                placeholder='Enter Description'
                ref={register({ required: "Description is Required" })}
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt='3' mb='5'>
              <FormLabel>Upload Images</FormLabel>
              <Input
                h='auto'
                p='4'
                type='file'
                id='image'
                onChange={uploadImage}
              />
              <Text color='#FF0000' fontSize='sm'>
                {imageerror}
              </Text>
            </FormControl>

            <Image my='3' w='200px' mx='auto' src={image} />
            <Button
              size='lg'
              w='100%'
              mt='6'
              type='submit'
              border='1px solid #eee'
              variantColor='dark'
              isLoading={loading}
            >
              Add Brand
            </Button>
          </form>
        </Box>
      </BaseContainer>
    </Box>
  );
}
