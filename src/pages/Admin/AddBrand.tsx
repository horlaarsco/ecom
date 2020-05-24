import React, { useState, useEffect, useContext } from "react";
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
import { ADD_BRAND } from "../../utils/queries";

export default function AddBrand() {
  const toast = useToast();

  const [localFile, setLocalFile] = useState("");
  const [filee, setFile] = useState([]);
  const { handleSubmit, register, errors } = useForm();
  const [imageerror, setimageerror] = useState("");
  const [loading, setLoading] = useState(false);

  const [addBrand, {}] = useMutation(ADD_BRAND);

  const uploadImage = (e: any) => {
    // @ts-ignore
    setFile([...filee, e.target.files[0]]);
    setimageerror("");
    // @ts-ignore
    const file = e.target.files[0];
    setLocalFile(URL.createObjectURL(file));
  };

  const onSubmit = async (values: any) => {
    setLoading(true);
    if (filee.length == 0) {
      setimageerror("Image is required");
      setLoading(false);
      return;
    }
    const data = new FormData();
    data.append("file", filee[0]);
    data.append("upload_preset", "horlars");
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/horlaarsco/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const { secure_url } = await res.json();
    const NewValue = { ...values, image: secure_url };
    try {
      const Newdata = await addBrand({
        variables: { data: { ...NewValue } },
      });
      // @ts-ignore
      window.location = `/brand/${Newdata.data.addBrand.slug}`;
    } catch (error) {
      setLoading(false);

      let newError = "";
      if (error.message.includes("Duplicate")) {
        newError = "Brand already exist";
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

  const removeImage = () => {
    setFile([]);
    setLocalFile("");
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

            <Image my='3' w='200px' mx='auto' src={localFile} />
            <Button onClick={removeImage} size='xs' mt='3' variantColor='red'>
              Remove Image
            </Button>
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
