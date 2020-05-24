import React, { useContext, useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Box,
  Divider,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/core";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthContext } from "../App";
import Toast from "../components/Toast";
import CartSmallCard from "../components/CartSmallCard";

import { BaseContainer } from "../components";
import { useMutation } from "@apollo/react-hooks";
import { ADD_ORDER } from "../utils/queries";

export default function Checkout() {
  let history = useHistory();
  const toast = useToast();

  const [cartItems, setCartItems] = useState([]);

  // @ts-ignore
  const profileId = useContext(AuthContext).profile.id;

  const [addOrder, { loading }] = useMutation(ADD_ORDER);
  // @ts-ignore
  const onSubmit = async (values) => {
    values.postCode = parseInt(values.postCode);
    // @ts-ignore
    const cartData = await JSON.parse(localStorage.getItem("cart"));
    let productId: any = [];
    // @ts-ignore
    await cartData.map((product) => {
      return productId.push(product.id);
    });

    const data = { ...values, owner: profileId, products: productId };
    try {
      const Newdata = await addOrder({ variables: { data: { ...data } } });
      Toast(toast, "Order created.", "success", "");
      localStorage.removeItem("cart");
      setLoadCart(!loadCart);
      // @ts-ignore
      window.location = `/profile`;
    } catch (error) {
      let newError = "";
      if (error.message.includes("Duplicate")) {
        newError = "Email or Username already exist";
      } else if (error.message.includes("Required")) {
        newError = "Fill all required fields";
      }
      Toast(toast, "An error occurred.", "error", `${newError}`);
    }
  };

  const { register, handleSubmit, errors } = useForm();

  const { setLoadCart, loadCart, loggedIn, profile } = useContext(AuthContext);

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
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
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
            <FormControl w='full' isInvalid={errors.firstName}>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='fname'
              >
                First Name:
              </FormLabel>
              <Input
                defaultValue={profile.firstName}
                name='firstName'
                ref={register({
                  required: "First Name is Required",
                })}
                id='fname'
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl w='full' isInvalid={errors.lastName}>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='lname'
              >
                Last Name:
              </FormLabel>
              <Input
                id='lname'
                name='lastName'
                defaultValue={profile.lastName}
                ref={register({
                  required: "Last Name is Required",
                })}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl w='full' isInvalid={errors.number}>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='mobile'
              >
                Mobile Number:
              </FormLabel>
              <Input
                type='number'
                id='number'
                name='number'
                ref={register({
                  required: "Number is Required",
                  minLength: {
                    value: 6,
                    message: "Number must have at least 8 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Number must have at most 12 characters",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.number && errors.number.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl w='full' isInvalid={errors.address}>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='address'
              >
                Address:
              </FormLabel>
              <Input
                id='address'
                name='address'
                ref={register({
                  required: "Address is Required",
                })}
              />
              <Input
                mt='3'
                id='address2'
                name='address2'
                ref={register}
                placeholder='Optional'
              />
              <FormErrorMessage>
                {errors.address && errors.address.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl w='full' isInvalid={errors.city}>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='city'
              >
                City:
              </FormLabel>
              <Input
                name='city'
                ref={register({
                  required: "City is Required",
                })}
                id='city'
              />
              <FormErrorMessage>
                {errors.city && errors.city.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl w='full' isInvalid={errors.postCode}>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='post-code'
              >
                Post-Code:
              </FormLabel>
              <Input
                type='number'
                name='postCode'
                ref={register({
                  required: "Post Code is Required",
                })}
                id='post-code'
              />
              <FormErrorMessage>
                {errors.postCode && errors.postCode.message}
              </FormErrorMessage>
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
            <Button type='submit' mt='4' variantColor='green'>
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
