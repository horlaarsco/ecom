import React, { useContext, useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Box,
  Divider,
  Text,
  Image,
  Button,
  IconButton,
} from "@chakra-ui/core";
import { AuthContext } from "../App";

import { BaseContainer, CartItem } from "../components";
import { Link } from "react-router-dom";

export default function Cart() {
  const { setLoadCart, loadCart } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // @ts-ignore
  let totalcart = 0;

  useEffect(() => {
    // @ts-ignore
    setCart(JSON.parse(localStorage.getItem("cart")));
    // @ts-ignore
  }, [loadCart]);

  useEffect(() => {
    if (cart) {
      cart.map((item) => {
        // @ts-ignore
        totalcart += item.price;
        // @ts-ignore
      });
    }
    // @ts-ignore
    setTotalPrice(totalcart);
  }, [cart]);

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
          <Flex justify='space-between'>
            <Heading fontSize='lg' letterSpacing='widest'>
              MY Cart
            </Heading>
            <IconButton
              variantColor='red'
              variant='outline'
              size='sm'
              aria-label='Search database'
              icon='close'
              px={{ base: "0", lg: "2" }}
              h={{ base: "1rem", lg: "2rem" }}
              lineHeight='1'
              fontSize='xs'
              minW='1rem'
              alignSelf='flex-end'
              justifySelf='flex-start'
              onClick={clearcart}
            />
          </Flex>
          {cart &&
            cart.map((item: any, index) => (
              <CartItem
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}

          <Flex
            mt={{ base: "6", lg: "10" }}
            ml='auto'
            fontSize={{ base: "md", lg: "lg" }}
          >
            <Text mr='10' fontWeight='bold'>
              Sub-Total:{" "}
            </Text>
            <Text>${totalPrice} </Text>
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
            <Text>${totalPrice} </Text>
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

const clearcart = () => {
  console.log("clear");
  localStorage.removeItem("cart");
  window.location.reload();
};
