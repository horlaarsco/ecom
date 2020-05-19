import React from "react";
import Carousel from "react-elastic-carousel";
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

export default function Product() {
  return (
    <Box bg='#f5f5f5' color='black' p={{ base: 3, lg: 8 }}>
      <BaseContainer p={{ base: 3, md: 24 }}>
        <Flex direction={{ base: "column", md: "row" }} justify='space-around'>
          <Box w={{ base: "100%", md: "60%" }}>
            <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
              <Image
                h='500px'
                mr='6'
                src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA'
              />{" "}
              <Image
                h='500px'
                mr='6'
                src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA'
              />{" "}
              <Image
                h='500px'
                mr='6'
                src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA'
              />{" "}
              <Image
                h='500px'
                mr='6'
                src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA'
              />
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
            <Heading fontSize='2xl'>
              Miss Selfridge espadrille trainers in beige
            </Heading>
            <Text mt='3'>
              Brand: <strong>Nike</strong>
            </Text>
            <Text my='6' fontWeight='bold'>
              €40.99
            </Text>
            <Text fontWeight='bold'>COLOUR: White</Text>
            <Select mt='4' placeholder='Select size'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
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
          Nike Benassi Solarsoft 2 Slide - Blue / Royal
        </Heading>
        <Text mb='6' px='6'>
          The Nike Benassi Solarsoft 2 Men's Slide improves upon its predecessor
          with more padding on the strap and a textured footbed for added
          comfort and support. A soft, pliable foam midsole offers plush
          cushioning, and flex grooves allow your foot to mover more naturally.
        </Text>
      </BaseContainer>
      <Divider borderColor='black' my='10' />
      <BaseContainer>
        <Heading my='6' fontSize='xl'>
          YOU MIGHT ALSO LIKE
        </Heading>
        <Carousel
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
        </Carousel>
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
