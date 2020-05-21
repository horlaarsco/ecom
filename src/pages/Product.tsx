import React from "react";
import Carousel from "react-elastic-carousel";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";

import {
  Heading,
  Text,
  Box,
  Image,
  Button,
  Flex,
  Select,
  Divider,
} from "@chakra-ui/core";
import { BaseContainer, ProductCard } from "../components";
import EmptyPage from "./EmptyPage";

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
  let { slug } = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug: slug },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <EmptyPage />;
  }

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
            <Select mt='4' placeholder='Select Color'>
              {data.product.colors.map((color: any) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </Select>
            <Select mt='4' placeholder='Select size'>
              {data.product.sizes.map((size: any) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>

            <Button mt='6' variantColor='green'>
              Add to cart
            </Button>
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
