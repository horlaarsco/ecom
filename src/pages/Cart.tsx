import React from "react";
import {
  Flex,
  Heading,
  Box,
  Divider,
  Text,
  Image,
  Select,
  Button,
  IconButton,
} from "@chakra-ui/core";
import { BaseContainer, CartItem } from "../components";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <Box bg='#f5f5f5'>
      <BaseContainer
        p={{ base: 3, lg: 10 }}
        alignItems='baseline'
        maxW='1200px'
        d='flex'
        justifyContent='space-between'
        pos='relative'
        flexDirection={["column", "column", "row"]}
      >
        <Flex
          flex='1'
          mr={{ base: 3, lg: 10 }}
          direction='column'
          color='black'
          p={{ base: 3, lg: 6 }}
          background='white'
          w='100%'
        >
          <Heading fontSize='lg' letterSpacing='widest'>
            MY Cart
          </Heading>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <Flex
            mt={{ base: "6", lg: "10" }}
            ml='auto'
            fontSize={{ base: "md", lg: "lg" }}
          >
            <Text mr='10' fontWeight='bold'>
              Sub-Total:{" "}
            </Text>
            <Text>$45 </Text>
          </Flex>
        </Flex>
        <Flex
          pos='sticky'
          top='0'
          right='0'
          w={{ base: "100%", md: "300px", xl: "350px" }}
          direction='column'
          color='black'
          p='6'
          background='white'
          mt='4'
        >
          <Heading fontSize='lg' letterSpacing='widest'>
            TOTAL
          </Heading>
          <Divider borderColor='black' />
          <Flex mt='3' mb='6' fontSize='md' justify='space-between'>
            <Text fontWeight='bold'>Sub-Total: </Text>
            <Text>$45 </Text>
          </Flex>
          <Link to='/checkout'>
            <Button w='full' variantColor='green'>
              Checkout
            </Button>
          </Link>
          <Text mt='5' fontWeight='bold'>
            WE ACCEPT:
          </Text>
          <Image
            w={{ sm: "30%", md: "80%" }}
            mt='3'
            src='https://assets.asosservices.com/asos-finance/images/marketing/single.png'
            alt=''
          />
        </Flex>
      </BaseContainer>
    </Box>
  );
}
