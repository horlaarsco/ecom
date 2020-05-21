import React from "react";
import { Box, Image, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

// @ts-ignore
export default function Brand({ name, slug, image }) {
  return (
    <Box>
      <Link to={`/brand/${slug}`}>
        <Image mx='auto' width='100%' src={image} />
        <Text
          fontWeight='300'
          mt='3'
          fontSize={{ base: "md", sm: "lg" }}
          color='black'
          textAlign='center'
        >
          {name}
        </Text>
      </Link>
    </Box>
  );
}
