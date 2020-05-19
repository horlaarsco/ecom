import React from "react";
import { Flex, Heading, Text, Divider, Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";

import { BaseContainer, Brand } from "../components";
import Carousel from "react-elastic-carousel";

function Home() {
  return (
    <div>
      <BaseContainer
        d='flex'
        justifyContent='center'
        alignItems='center'
        w='100%'
        height='calc(100vh - 115px)'
        background='url("https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2019/asos-summer-generic-hp-desktop-new.jpg") no-repeat'
        bgSize='cover'
        bgPos='center'
        color='white'
        flexDirection='column'
      >
        <Heading
          fontSize={{ base: "xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight='bold'
          as='h1'
        >
          This is ECOM
        </Heading>
        <Text
          textAlign='center'
          fontSize={{ base: "md", sm: "lg" }}
          fontWeight='medium'
          my='3'
        >
          E-COM DESIGN and 850+ brands
        </Text>
        <Flex flexDir={{ base: "column", sm: "row" }}>
          <Link to='/men'>
            <Button
              px={{ base: "5", sm: "10" }}
              lineHeight='none'
              backgroundColor='white'
              color='black'
              size='lg'
              height={{ base: "2rem", sm: "3rem" }}
              mx='3'
              fontSize={{ base: "md", sm: "lg" }}
              _hover={{ color: "white", background: "black" }}
            >
              Shop Men
            </Button>{" "}
          </Link>
          <Link to='/women'>
            <Button
              px={{ base: "5", sm: "10" }}
              lineHeight='none'
              backgroundColor='white'
              size='lg'
              color='black'
              mx='3'
              height={{ base: "2rem", sm: "3rem" }}
              mt={{ base: "3", sm: 0 }}
              fontSize={{ base: "md", sm: "lg" }}
              _hover={{ color: "white", background: "black" }}
            >
              Shop Women
            </Button>
          </Link>
        </Flex>
      </BaseContainer>

      <BaseContainer
        color='white'
        bg='#303133'
        width='100%'
        textAlign='center'
        justifySelf='flex-end'
        fontWeight='bold'
      >
        <Text fontSize={{ base: "md", sm: "lg" }}>
          GET 20% OFF EVERYTHING WITH CODE 2020
        </Text>
      </BaseContainer>
      <BaseContainer
        d='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Heading
          fontSize={{ base: "20px", md: "4xl" }}
          fontWeight='bold'
          as='h1'
          color='black'
          my='8'
        >
          Shop Brands
        </Heading>

        <Carousel
          itemPadding={[0, 5]}
          breakPoints={breakPoints}
          disableArrowsOnEnd={false}
        >
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </Carousel>
      </BaseContainer>
      <Divider />
    </div>
  );
}

export default Home;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
  { width: 1400, itemsToShow: 5 },
];
