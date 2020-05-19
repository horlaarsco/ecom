import React from "react";
import { Flex, Heading, Box, Link, Divider } from "@chakra-ui/core";
import { BsPerson } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

import BaseContainer from "./BaseContainer";

export default function Header() {
  return (
    <Box bg='black'>
      <BaseContainer py='0' px={{ base: 3, lg: 6, xl: 10 }} color='white'>
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
  );
}
