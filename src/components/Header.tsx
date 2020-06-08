import React, { useState, useContext, useEffect } from "react";
import {
  Flex,
  Heading,
  Box,
  Divider,
  Text,
  Button,
  useToast,
} from "@chakra-ui/core";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import BaseContainer from "./BaseContainer";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../App";
import Toast from "./Toast";
import CartSmallCard from "./CartSmallCard";
import { LOG_OUT } from "../utils/queries";

export default function Header() {
  const toast = useToast();
  let history = useHistory();

  const LoggedInStatus: any = useContext(AuthContext);
  const { setLoadCart, loadCart } = useContext(AuthContext);

  const [cartVisibility, setCartVisibility] = useState("none");
  const [cart, setCart] = useState([]);

  const [logout, { loading }] = useMutation(LOG_OUT);

  const changeCartVisiblity = () => {
    if (cartVisibility === "none") {
      setCartVisibility("block");
    } else {
      setCartVisibility("none");
    }
  };

  const logoutclick = async () => {
    // @ts-ignore
    const token = await JSON.parse(localStorage.getItem("token"));
    if (token) {
      await logout({
        variables: { type: token.id },
      });
      // @ts-ignore
      localStorage.clear();
      Toast(toast, "Logged Out.", "success", "");

      LoggedInStatus.setLoggedIn(false);
      history.push("/");
    }
  };
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
    <Box bg='black'>
      <BaseContainer py='0' px={{ base: 3, lg: 6, xl: 10 }} color='white'>
        <Flex justify='space-between'>
          <Flex align='center'>
            <Link to='/'>
              <Heading py='2' letterSpacing='widest'>
                E-COM
              </Heading>
            </Link>
            <Divider
              d={{ base: "none", md: "inline" }}
              mx='8'
              height='full'
              orientation='vertical'
              borderColor='white'
            />
            <Box d={{ base: "none", md: "inline" }} as='span'>
              <Link to='/male' fontWeight='bold'>
                Male
              </Link>
            </Box>
            <Divider
              d={{ base: "none", md: "inline" }}
              mx='8'
              orientation='vertical'
              borderColor='white'
              height='full'
            />
            <Box d={{ base: "none", md: "inline" }} as='span'>
              <Link to='/female' fontWeight='bold'>
                Female
              </Link>
            </Box>
            <Divider
              d={{ base: "none", md: "inline" }}
              mx='6'
              height='full'
              orientation='vertical'
              borderColor='white'
            />
            <Box d={{ base: "none", md: "inline" }} as='span'>
              <Link to='/unisex' fontWeight='bold'>
                Unisex
              </Link>
            </Box>
            <Divider
              d={{ base: "none", md: "inline" }}
              mx='6'
              height='full'
              orientation='vertical'
              borderColor='white'
            />
            {LoggedInStatus.isAdmin && (
              <>
                <Box d={{ base: "none", md: "inline" }} as='span'>
                  <Link to='/admin/add-brand' fontWeight='bold'>
                    Add Brand
                  </Link>
                </Box>
                <Divider
                  d={{ base: "none", md: "inline" }}
                  mx='6'
                  height='full'
                  orientation='vertical'
                  borderColor='white'
                />{" "}
                <Box d={{ base: "none", md: "inline" }} as='span'>
                  <Link to='/admin/add-product' fontWeight='bold'>
                    Add Products
                  </Link>
                </Box>
                <Divider
                  d={{ base: "none", md: "inline" }}
                  mx='6'
                  height='full'
                  orientation='vertical'
                  borderColor='white'
                />
              </>
            )}
          </Flex>
          <Flex align='center'>
            <Link to='/auth'>
              <Box
                size={{ base: "20px", sm: "30px" }}
                color='white'
                as={BsPerson}
                mx={{ base: 3, sm: "5" }}
              />
            </Link>
            {LoggedInStatus.loggedIn && (
              <Box
                size={{ base: "20px", sm: "30px" }}
                color='white'
                mr={{ base: 3, sm: "5" }}
                as={FiLogOut}
                onClick={logoutclick}
                cursor='pointer'
              />
            )}
            <Flex
              d={{ base: "none", md: "block" }}
              onMouseEnter={changeCartVisiblity}
              onMouseLeave={changeCartVisiblity}
              pos='relative'
              direction='column'
              h='full'
            >
              <Flex h='full' align='center'>
                <Box
                  size={{ base: "20px", sm: "30px" }}
                  color='white'
                  as={FiShoppingCart}
                  cursor='pointer'
                />
              </Flex>
              <Box
                zIndex={1000}
                d={cartVisibility}
                top='10px'
                right='-20px'
                background='white'
                w='20rem'
                color='black'
                mt='50px'
                pos='absolute'
              >
                <Text p='4' d='inline-flex' fontWeight='bold'>
                  Cart,{" "}
                  <Box as='span' ml='1' fontWeight='normal'>
                    {/* 
// @ts-ignore */}
                    {cart === null ? 0 : cart.length} items
                  </Box>
                </Text>
                <Box maxH='280px' overflow='scroll'>
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
                <Flex p='3' fontSize='sm' justify='space-between'>
                  <Text>Sub-Total: </Text>
                  <Text>${totalPrice} </Text>
                </Flex>
                <Flex p='4' bg='#f5f5f5' justify='space-between'>
                  <Link to='/cart'>
                    <Button border='1px solid #eee' variantColor='dark'>
                      View Bag
                    </Button>
                  </Link>
                  <Link to='/checkout'>
                    <Button variantColor='green'>Checkout</Button>
                  </Link>
                </Flex>
              </Box>
            </Flex>
            <Link to='/cart'>
              <Box
                d={{ base: "block", md: "none" }}
                size={{ base: "20px", sm: "30px" }}
                color='white'
                as={FiShoppingCart}
                cursor='pointer'
              />
            </Link>
          </Flex>
        </Flex>
      </BaseContainer>
    </Box>
  );
}
