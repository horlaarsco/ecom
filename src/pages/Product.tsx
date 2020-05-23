import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { useForm } from "react-hook-form";
import { AuthContext } from "../App";

import {
  Heading,
  Text,
  Box,
  Image,
  Button,
  Flex,
  Select,
  Divider,
  FormControl,
  FormLabel,
  Input,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/core";
import { BaseContainer, ProductCard, Loader, EmptyPage } from "../components";
import Toast from "../components/Toast";

const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      name
      slug
      brand {
        name
      }
      images
      sizes
      price
      quantity
      salePrice
      category
      colors
      description
    }
  }
`;

export default function Product() {
  const toast = useToast();

  // @ts-ignore
  const setLoadCart = useContext(AuthContext).setLoadCart;
  let { slug } = useParams();

  const { register, handleSubmit, errors } = useForm();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug: slug },
  });

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <EmptyPage />;
  }

  // @ts-ignore
  const addToCart = (values) => {
    // @ts-ignore
    const cart = JSON.parse(localStorage.getItem("cart"));
    // @ts-ignore
    const thingsForCart = {
      id: data.product.id,
      name: data.product.name,
      image: data.product.images[0],
      price: data.product.salePrice,
      color: values.colors,
      size: values.sizes,
    };
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([thingsForCart]));
    } else {
      cart.push(thingsForCart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    setLoadCart(false);
    setLoadCart(true);

    Toast(toast, "Added to cart.", "success", "Checkout now.");
  };

  return (
    <Box bg='#f5f5f5' color='black' p={{ base: 3, lg: 8 }}>
      <BaseContainer p={{ base: 3, md: 24 }}>
        <Flex direction={{ base: "column", md: "row" }} justify='space-around'>
          <Box w={{ base: "100%", md: "60%" }}>
            <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
              {data.product.images.map((image: any, index: any) => (
                <Image key={index} h='500px' mr='6' src={image} />
              ))}
            </Carousel>
          </Box>
          <Flex
            w={{ base: "100%", md: "30%" }}
            m={{ base: 0, md: 10 }}
            flexDir='column'
            align='flex-start'
            justify='flex-start'
            color='black'
            my={{ base: 6, md: 0 }}
          >
            <Heading fontSize='2xl'>{data.product.name}</Heading>
            <Text mt='3'>
              Brand: <strong>{data.product.brand.name}</strong>
            </Text>
            <Text my='6' fontWeight='bold'>
              €{data.product.salePrice}
            </Text>
            <form style={{ width: "100%" }} onSubmit={handleSubmit(addToCart)}>
              <FormControl isInvalid={errors.colors}>
                <Select
                  mt='4'
                  placeholder='Select Color'
                  ref={register({ required: "Color is Required" })}
                  name='colors'
                >
                  {data.product.colors.map((color: any) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormErrorMessage>{errors}</FormErrorMessage>
              <FormControl isInvalid={errors.sizes}>
                <Select
                  mt='4'
                  placeholder='Select size'
                  ref={register({ required: "Size is Required" })}
                  name='sizes'
                >
                  {data.product.sizes.map((size: any) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormErrorMessage>
                {errors.sizes && errors.sizes.message}
              </FormErrorMessage>

              <Button mt='6' type='submit' variantColor='green'>
                Add to cart
              </Button>
            </form>
          </Flex>
        </Flex>
      </BaseContainer>
      <BaseContainer w={{ base: "100%", md: "60%" }} mx='auto' bg='white'>
        <Heading>Details</Heading>
        <Divider />

        <Heading my='6' px='6' fontWeight='700' fontSize='xl'>
          {data.product.name}
        </Heading>
        <Text mb='6' px='6'>
          {data.product.description}
        </Text>
      </BaseContainer>
      <Divider borderColor='black' my='10' />
      <BaseContainer>
        <Heading my='6' fontSize='xl'>
          YOU MIGHT ALSO LIKE
        </Heading>
        {/* <Carousel
          itemPadding={[0, 5]}
          breakPoints={breakPointss}
          disableArrowsOnEnd={false}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Carousel> */}
      </BaseContainer>
    </Box>
  );
}

const breakPoints = [{ width: 1, itemsToShow: 1 }];

const breakPointss = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
  { width: 1400, itemsToShow: 5 },
];
