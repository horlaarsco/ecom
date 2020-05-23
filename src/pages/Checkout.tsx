import React, { useContext, useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Box,
  Divider,
  Text,
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../App";
import Toast from "../components/Toast";
import CartSmallCard from "../components/CartSmallCard";

import { BaseContainer } from "../components";

export default function Checkout() {
  let history = useHistory();

  const { setLoadCart, loadCart, loggedIn } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // @ts-ignore
  let totalcart = 0;

  useEffect(() => {
    // @ts-ignore
    setCart(JSON.parse(localStorage.getItem("cart")));
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
          <Heading fontSize={{ base: "sm", sm: "lg" }} mb='6'>
            DELIVERY ADDRESS
          </Heading>
          <Box w={{ base: "full", md: "70%" }}>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='fname'
              >
                First Name:
              </FormLabel>
              <Input id='fname' />
            </FormControl>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='lname'
              >
                Last Name:
              </FormLabel>
              <Input id='lname' />
            </FormControl>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='mobile'
              >
                Mobile Number:
              </FormLabel>
              <Input type='number' id='number' />
            </FormControl>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='address'
              >
                Address:
              </FormLabel>
              <Input id='address' />
              <Input mt='3' id='address2' placeholder='Optional' />
            </FormControl>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='city'
              >
                City:
              </FormLabel>
              <Input id='city' />
            </FormControl>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='post-code'
              >
                Post-Code:
              </FormLabel>
              <Input type='number' id='post-code' />
            </FormControl>
          </Box>
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
          <Heading
            d='inline-flex'
            justifyContent='space-between'
            fontSize='lg'
            letterSpacing='widest'
          >
            {/* 
// @ts-ignore */}
            {cart === null ? 0 : cart.length} ITEMS
            <Text fontSize='md'> Edit</Text>
          </Heading>
          <Divider borderColor='black' />
          <Box maxH='500px' overflow='scroll'>
            {cart &&
              cart.map((item: any, index) => (
                <CartSmallCard
                  key={index}
                  image={item.image}
                  name={item.name}
                  color={item.color}
                  size={item.size}
                  price={item.price}
                />
              ))}
          </Box>

          {loggedIn ? (
            <Button mt='4' variantColor='green'>
              Checkout
            </Button>
          ) : (
            <Button
              mt='4'
              variantColor='dark'
              onClick={() => history.push("/auth")}
            >
              Login
            </Button>
          )}
          <Flex
            mt={{ base: "6", lg: "10" }}
            fontSize={{ base: "sm", lg: "md" }}
            justify='space-between'
          >
            <Text mr='10' fontWeight='bold'>
              Sub-Total:{" "}
            </Text>
            <Text>${totalPrice} </Text>
          </Flex>
        </Flex>
      </BaseContainer>
    </Box>
  );
}
