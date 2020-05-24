import React, { useState, useEffect } from "react";
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
  IconButton,
} from "@chakra-ui/core";
import Carousel, { consts } from "react-elastic-carousel";
import { BaseContainer, Color } from "../../components";
import Sizes from "../../components/Sizes";

// @ts-ignore
// type EventHandlerProps = {
//   onClick: (e: React.MouseEvent) => void;
// };

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
        slug
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
  const [newLoading, setLoading] = useState(false);

  const { loading, error, data } = useQuery(GET_BRANDS);
  // @ts-ignore

  const { handleSubmit, register, errors } = useForm();
  // @ts-ignore
  const [addProduct, { Addloading }] = useMutation(ADD_PRODUCT);

  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizeerror, setsizeerror] = useState("");
  const [colorerror, setcolorerror] = useState("");
  const [imageerror, setimageerror] = useState("");
  const [image, setImage] = useState([]);
  const [imageURL, setImageURL] = useState([]);
  const [localFile, setLocalFile] = useState([]);

  const images: Array<string> = [];
  const uploadImage = (e: any) => {
    // @ts-ignore
    setImage([...image, ...e.target.files]);
    // @ts-ignore
    Object.values(e.target.files).map((file) => {
      images.push(URL.createObjectURL(file));
    });
    // @ts-ignore
    setLocalFile(localFile.concat(images));
  };

  const onSubmit = async (values: any) => {
    setLoading(true);

    if (image === undefined || image.length === 0) {
      setimageerror("At least one image is required");
      return;
    }
    let urlimages = await Promise.all(
      image.map(async (photo) => {
        const data = new FormData();
        data.append("file", photo);
        data.append("upload_preset", "ecom_api");
        const res = await fetch(
          "	https://api.cloudinary.com/v1_1/horlaarsco/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const { secure_url } = await res.json();
        // @ts-ignore
        return secure_url;
      })
    );

    if (sizes === undefined || sizes.length === 0) {
      setsizeerror("Size is required");
      return;
    }
    if (colors === undefined || colors.length === 0) {
      setcolorerror("Color is required");
      return;
    }

    const valuesToSubmit = await {
      ...values,
      price: parseInt(values.price),
      salePrice: parseInt(values.salePrice),
      quantity: parseInt(values.quantity),
      colors,
      // @ts-ignore
      owner: JSON.parse(localStorage.getItem("token")).id,
      images: urlimages,
    };
    try {
      const Newdata = await addProduct({
        variables: { data: { ...valuesToSubmit } },
      });
      // @ts-ignore
      window.location = `/product/${Newdata.data.addProduct.slug}`;
    } catch (error) {
      setLoading(false);
      let newError = "";
      if (error.message.includes("Duplicate")) {
        newError = "Product already exist";
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
  // @ts-ignore
  const handleClick = (event) => {
    // @ts-ignore
    document.getElementById("image").click();
  };

  function handleRemove(index: number) {
    // @ts-ignore
    let newArray: Array<string> = localFile;
    let newUploadArray: Array<string> = image;

    newUploadArray.splice(index, 1);
    // @ts-ignore
    setImage([...newUploadArray]);
    newArray.splice(index, 1);
    // @ts-ignore
    setLocalFile([...newArray]);
  }

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
              <FormControl my='3' isInvalid={errors.brand}>
                <FormLabel>Brand</FormLabel>

                <Select
                  name='brand'
                  placeholder='Select Brand'
                  ref={register({
                    required: "Brand is Required",
                  })}
                >
                  {data.brands.map((brand: any, index: number) => (
                    <option key={index} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.brand && errors.brand.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl my='3' isInvalid={errors.category}>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder='Select Category'
                  name='category'
                  ref={register({
                    required: "Category is Required",
                  })}
                >
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Unisex'>Unisex</option>
                </Select>
                <FormErrorMessage>
                  {errors.category && errors.category.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl mt='3' mb='5'>
                <FormLabel>Upload Images</FormLabel>
                <>
                  <Button mt='3' onClick={handleClick}>
                    Choose Image{" "}
                  </Button>

                  <Input
                    accept='image/x-png,image/gif,image/jpeg'
                    style={{ display: "none" }}
                    h='auto'
                    p='4'
                    type='file'
                    id='image'
                    onChange={uploadImage}
                    multiple
                  />
                </>

                <Text color='#FF0000' fontSize='sm'>
                  {imageerror}
                </Text>
              </FormControl>
              {localFile.length > 0 ? (
                <Carousel
                  breakPoints={breakPoints}
                  disableArrowsOnEnd={false}
                  renderArrow={myArrow}
                >
                  {localFile.map((photo, index) => (
                    <Box key={index} pos='relative'>
                      <Image src={photo} />
                      <IconButton
                        // @ts-ignore
                        onClick={() => handleRemove(index)}
                        size='sm'
                        pos='absolute'
                        right='0'
                        top='0'
                        variantColor='red'
                        aria-label=''
                        icon='small-close'
                      />
                    </Box>
                  ))}
                </Carousel>
              ) : (
                <Box></Box>
              )}
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
                  ref={register({
                    required: "Description is Required",
                  })}
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
                isLoading={newLoading}
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
  const pointer =
    type === consts.PREV ? (
      <img src='https://img.icons8.com/metro/26/000000/previous.png' />
    ) : (
      <img src='https://img.icons8.com/metro/26/000000/next.png' />
    );
  return (
    // @ts-ignore
    <button
      type='button'
      className='button'
      onClick={onClick}
      disabled={isEdge}
    >
      {pointer}
    </button>
  );
}

// index: number
