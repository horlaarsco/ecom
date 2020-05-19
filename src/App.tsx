import React from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  BoxProps,
  Link,
  Divider,
  Image,
  Button,
  SimpleGrid,
  List,
  ListItem,
} from "@chakra-ui/core";
import { BsPerson } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import Brand from "./components/Brand";

function BaseContainer(props: BoxProps) {
  return <Box maxW='1440px' mx='auto' p='6' {...props}></Box>;
}
function App() {
  return (
    <>
      <Box bg='black'>
        <BaseContainer py='0' px='10' color='white'>
          <Flex justify='space-between'>
            <Flex align='center'>
              <Heading py='2' letterSpacing='widest'>
                E-COM
              </Heading>
              <Divider
                d={{ base: "none", md: "inline" }}
                mx='8'
                height='full'
                orientation='vertical'
                borderColor='white'
              />
              <Link d={{ base: "none", md: "inline" }} fontWeight='bold'>
                Men
              </Link>
              <Divider
                d={{ base: "none", md: "inline" }}
                mx='8'
                orientation='vertical'
                borderColor='white'
                height='full'
              />
              <Link d={{ base: "none", md: "inline" }} fontWeight='bold'>
                WoMen
              </Link>
              <Divider
                d={{ base: "none", md: "inline" }}
                mx='6'
                height='full'
                orientation='vertical'
                borderColor='white'
              />
            </Flex>
            <Flex align='center'>
              <Box size='30px' color='white' as={BsPerson} />
              <Box size='27px' color='white' mx='5' as={MdFavoriteBorder} />
              <Box size='27px' color='white' as={FiShoppingCart} />
            </Flex>
          </Flex>
        </BaseContainer>
      </Box>
      <BaseContainer
        d='flex'
        justifyContent='center'
        alignItems='center'
        w='100%'
        height='calc(100vh - 115px)'
        background='url("https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2019/asos-summer-generic-hp-desktop-new.jpg") no-repeat'
        bgSize='100% 100%'
        color='white'
        flexDirection='column'
      >
        <Heading
          fontSize={{ base: "20px", md: "6xl" }}
          fontWeight='bold'
          as='h1'
        >
          This is ECOM
        </Heading>
        <Text fontSize='lg' fontWeight='medium' my='3'>
          ASOS DESIGN and 850+ brands
        </Text>
        <Flex>
          <Button
            px='10'
            lineHeight='none'
            background='black'
            size='lg'
            mx='3'
            _hover={{ color: "black", background: "white" }}
          >
            Shop Men
          </Button>
          <Button
            px='10'
            lineHeight='none'
            background='black'
            size='lg'
            mx='3'
            _hover={{ color: "black", background: "white" }}
          >
            Shop Women
          </Button>
        </Flex>
      </BaseContainer>

      <BaseContainer
        color='white'
        p='3'
        bg='#303133'
        width='100%'
        textAlign='center'
        justifySelf='flex-end'
        fontWeight='bold'
      >
        <Text fontSize='lg'>GET 20% OFF EVERYTHING WITH CODE 2020</Text>
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
          Top Brands
        </Heading>
        <SimpleGrid mt='6' w='100%' columns={5} spacing={10}>
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </SimpleGrid>
      </BaseContainer>
      <BaseContainer>
        <SimpleGrid mt='6' w='100%' columns={5} spacing={10}>
          <List color='black'>
            <ListItem fontWeight='bold'>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </List>
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </SimpleGrid>
      </BaseContainer>
    </>
  );
}

export default App;
