import React, { useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Divider,
  Text,
  Image,
  Button,
} from "@chakra-ui/core";
import { BsPerson } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

import BaseContainer from "./BaseContainer";

export default function Header() {
  const [cartVisibility, setCartVisibility] = useState("none");
  const changeCartVisiblity = () => {
    if (cartVisibility === "none") {
      setCartVisibility("block");
    } else {
      setCartVisibility("none");
    }
  };

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
              <Link to='/men' fontWeight='bold'>
                Men
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
              <Link to='/women' fontWeight='bold'>
                WoMen
              </Link>
            </Box>
            <Divider
              d={{ base: "none", md: "inline" }}
              mx='6'
              height='full'
              orientation='vertical'
              borderColor='white'
            />
          </Flex>
          <Flex align='center'>
            <Link to='/auth'>
              <Box
                size={{ base: "20px", sm: "30px" }}
                color='white'
                as={BsPerson}
              />
            </Link>

            <Box
              size={{ base: "20px", sm: "30px" }}
              color='white'
              mx={{ base: 3, sm: "5" }}
              as={MdFavoriteBorder}
            />

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
                    1 items
                  </Box>
                </Text>
                <Flex p='4' bg='#F7F7F7'>
                  <Image
                    w='100px'
                    src='https://images.asos-media.com/products/burton-menswear-smart-shorts-with-grey-check/20210711-1-grey'
                  />
                  <Box ml='3' fontSize='xs'>
                    <Text>$45 </Text>
                    <Text mt='3' mb='1'>
                      Burton Menswear smart shorts with grey check
                    </Text>
                    <Flex justify='space-between'>
                      <Text>Grey </Text>
                      <Text>Qty: 1</Text>
                    </Flex>
                  </Box>
                </Flex>
                <Flex p='3' fontSize='sm' justify='space-between'>
                  <Text>Sub-Total: </Text>
                  <Text>$45 </Text>
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
