import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/core";

export default function CartSmallCard({
  // @ts-ignore
  image,
  // @ts-ignore
  name,
  // @ts-ignore
  price,
  // @ts-ignore
  size,
  // @ts-ignore
  color,
  // @ts-ignore
}) {
  return (
    <Flex mt='2' bg='#F7F7F7'>
      <Image w='100px' src={image} />
      <Box p='5' fontSize='xs'>
        <Text>${price} </Text>
        <Text mt='3' mb='1'>
          {name}
        </Text>
        <Flex flexWrap='wrap' justify='space-between'>
          <Text>Color: {color} </Text>
          <Text>Size: {size}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
