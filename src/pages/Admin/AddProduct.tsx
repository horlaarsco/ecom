import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

import {
  Flex,
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
  Select,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/core";
import Carousel, { consts } from "react-elastic-carousel";
import { BaseContainer, Color } from "../../components";
import Sizes from "../../components/Sizes";

const ADD_PRODUCT = gql`
  mutation($data: ProductInput) {
    addProduct(input: $data) {
      id
      name
      description
      slug
      price
      quantity
      createdAt
      updatedAt
      salePrice
      category
      sizes
      images
      owner {
        id
        username
      }
      brand {
        id
        name
      }
    }
  }
`;

const GET_BRANDS = gql`
  {
    brands {
      id
      name
    }
  }
`;

export default function AddProduct() {
  const toast = useToast();
  let history = useHistory();

  const { loading, error, data } = useQuery(GET_BRANDS);

  const { handleSubmit, register, errors } = useForm();
  // @ts-ignore
  const [addProduct, { Addloading }] = useMutation(ADD_PRODUCT);

  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizeerror, setsizeerror] = useState("");
  const [colorerror, setcolorerror] = useState("");
  const [imageerror, setimageerror] = useState("");
  const [image, setImage] = useState([]);
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

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
    const imageDetails = { url: newfile.secure_url, key: newfile.created_at };
    // @ts-ignore
    setImage([...image, imageDetails]);
  };

  const onSubmit = async (values: any) => {
    if (sizes === undefined || sizes.length === 0) {
      setsizeerror("Size is required");
      return;
    }
    if (colors === undefined || colors.length === 0) {
      setcolorerror("Color is required");
      return;
    }
    if (image === undefined || image.length === 0) {
      setimageerror("At least one image is required");
      return;
    }

    const images = image.map((item: any) => item.url);
    const valuesToSubmit = {
      ...values,
      price: parseInt(values.price),
      salePrice: parseInt(values.salePrice),
      quantity: parseInt(values.quantity),
      sizes,
      brand,
      category,
      colors,
      owner: "5ec69a8b3cba5900044f22ca",
      images: images,
      description,
    };
    try {
      const Newdata = await addProduct({
        variables: { data: { ...valuesToSubmit } },
      });
      // @ts-ignore
      console.log(Newdata.data.addProduct.slug);

      history.push(`/product/${Newdata.data.addProduct.slug}`);

      toast({
        position: "bottom-right",
        title: "Product Added.",
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
      } else {
        newError = error;
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

  const handleBrand = (e: any) => {
    setBrand(e.target.value);
  };

  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const handleDescription = (e: any) => {
    setDescription(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  return (
    <Box bg='#f5f5f5'>
      <BaseContainer color='black'>
        <Heading mt='6'>Add Product</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex bg='white' w='100%' m='4'>
            <Flex flexDir='column' w='30%' p='6'>
              <FormControl my='3'>
                <FormLabel>Brand</FormLabel>
                <Select
                  name='brand'
                  placeholder='Select Brand'
                  onChange={handleBrand}
                >
                  {data.brands.map((brand: any, index: number) => (
                    <option key={index} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl my='3'>
                <FormLabel>Category</FormLabel>
                <Select placeholder='Select Category' onChange={handleCategory}>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Unisex'>Unisex</option>
                </Select>
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
              <Carousel
                breakPoints={breakPoints}
                disableArrowsOnEnd={false}
                renderArrow={myArrow}
              >
                {image.map((photo: any) => (
                  <Image key={photo.key} src={photo.url} />
                ))}
              </Carousel>
            </Flex>
            <Flex flexDir='column' flex='1' p='6'>
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
              <Flex my='3' justify='space-between'>
                <FormControl w='48%' isInvalid={errors.price}>
                  <FormLabel htmlFor='price'>Price</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children='$' />
                    <Input
                      name='price'
                      type='number'
                      placeholder='Price'
                      ref={register({
                        required: "Price is Required",
                      })}
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.price && errors.price.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl w='48%' isInvalid={errors.salePrice}>
                  <FormLabel htmlFor='salePrice'>Sale Price</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children='$' />
                    <Input
                      name='salePrice'
                      type='number'
                      placeholder='Sale Price'
                      ref={register({
                        required: "Sale Price is Required",
                      })}
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.salePrice && errors.salePrice.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <Sizes
                setsizeerror={setsizeerror}
                sizes={sizes}
                setSizes={setSizes}
              />
              <Text color='#FF0000' fontSize='sm'>
                {sizeerror}
              </Text>
              <Color
                setcolorerror={setcolorerror}
                colors={colors}
                setColors={setColors}
              />
              <Text color='#FF0000' fontSize='sm'>
                {colorerror}
              </Text>
              <FormControl my='3' isInvalid={errors.quantity}>
                <FormLabel htmlFor='quantity'>Quantity</FormLabel>
                <Input
                  type='number'
                  id='quantity'
                  name='quantity'
                  placeholder='Enter Quantity'
                  ref={register({
                    required: "Quantity is Required",
                  })}
                />
                <FormErrorMessage>
                  {errors.quantity && errors.quantity.message}
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
                  onChange={handleDescription}
                />
                <FormErrorMessage>
                  {errors.description && errors.description.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                size='lg'
                w='100%'
                mt='6'
                type='submit'
                border='1px solid #eee'
                variantColor='dark'
                isLoading={Addloading}
              >
                Add Product
              </Button>
            </Flex>
          </Flex>
        </form>
      </BaseContainer>
    </Box>
  );
}

const breakPoints = [{ width: 1, itemsToShow: 1 }];

// @ts-ignore
function myArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? "<" : ">";
  return (
    // @ts-ignore
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  );
}
