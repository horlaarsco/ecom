import React from "react";
import { Box, Image, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

// @ts-ignore
export default function ProductCard({
  // @ts-ignore
  name,
  // @ts-ignore
  brand,
  // @ts-ignore
  price,
  // @ts-ignore
  slug,
  // @ts-ignore
  image,
  // @ts-ignore
  salePrice,
  // @ts-ignore
  brandName,
}) {
  return (
    <Box
      border='1px solid #e5e5e5'
      boxShadow='0 5px 20px 0 rgba(195, 195, 195, 0.6)'
      w='280px'
      _hover={{ backgroundColor: "blue.900" }}
    >
      <Link to={`/product/${slug}`}>
        <Image mx='auto' w='full' h='200px' src={image} />
      </Link>

      <Box p='3' borderTopColor='#e5e5e5' borderTopWidth='1px'>
        <Link to={`/product/${slug}`}>
          <Text fontWeight='medium' fontSize='md' color='black'>
            {name}
          </Text>{" "}
        </Link>
        <Link to={`/brand/${brand}`}>
          <Text mt='2' fontSize='xs' textTransform='uppercase'>
            {brandName}
          </Text>
        </Link>
        <Text mt='2' fontSize='sm'>
          <Box
            mr='1'
            color='rgb(172, 167, 167)'
            textDecoration='line-through'
            as={"span"}
            fontSize='xs'
          >
            ${price}
          </Box>
          ${salePrice}
        </Text>
      </Box>
    </Box>
  );
}
