import React from "react";
import {
  Flex,
  Heading,
  Text,
  Divider,
  Button,
  SimpleGrid,
} from "@chakra-ui/core";

import { BaseContainer, Brand } from "../components";

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
          <Button
            px={{ base: "5", sm: "10" }}
            lineHeight='none'
            background='black'
            size='lg'
            height={{ base: "2rem", sm: "3rem" }}
            mx='3'
            fontSize={{ base: "md", sm: "lg" }}
            _hover={{ color: "black", background: "white" }}
          >
            Shop Men
          </Button>
          <Button
            px={{ base: "5", sm: "10" }}
            lineHeight='none'
            background='black'
            size='lg'
            mx='3'
            height={{ base: "2rem", sm: "3rem" }}
            mt={{ base: "3", sm: 0 }}
            fontSize={{ base: "md", sm: "lg" }}
            _hover={{ color: "black", background: "white" }}
          >
            Shop Women
          </Button>
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
        >
          Shop Brands
        </Heading>

        <SimpleGrid
          mt='6'
          w='100%'
          columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
          spacing={5}
        >
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </SimpleGrid>
      </BaseContainer>
      <Divider />
    </div>
  );
}

export default Home;
