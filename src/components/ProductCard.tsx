import React from "react";
import { Box, Image, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

// @ts-ignore
export default function ProductCard({ name, brand, price, slug, image }) {
  return (
    <Box>
      <Link to={`/product/${slug}`}>
        {" "}
        <Image mx='auto' width='full' src={image} />
        <Text fontWeight='bold' mt='3' fontSize={{ base: "sm" }} color='black'>
          {name}
        </Text>
      </Link>
      <Link to={`/brand/${brand}`}>
        <Text fontSize='xs'>{brand}</Text>
      </Link>

      <Text fontWeight='bold' mt='2' fontSize={{ base: "sm" }} color='black'>
        {price}
      </Text>
    </Box>
  );
}
