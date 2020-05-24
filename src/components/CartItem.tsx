import React from "react";
import { Flex, Box, IconButton, Image, Text, Divider } from "@chakra-ui/core";

// @ts-ignore
export default function CartItem({ name, price, image }) {
  return (
    <>
      <Divider my='6' borderColor='black' />

      <Flex
        p={{ base: 3, lg: 6 }}
        flexDirection={{ base: "column", sm: "row" }}
        bg='#f5f5f5'
      >
        <Image w={{ base: "70px", sm: "100px", lg: "120px" }} src={image} />
        <Box
          d='flex'
          flexDir='column'
          justifyContent='center'
          flex='1'
          ml={{ base: 0, sm: 3 }}
          fontSize={{ base: "sm", lg: "md" }}
        >
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
          />
          <Text fontWeight='bold'>${price} </Text>
          <Text mt='3' mb='1'>
            {name}
          </Text>
        </Box>
      </Flex>
    </>
  );
}
