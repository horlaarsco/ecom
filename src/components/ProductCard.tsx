import React from "react";
import { Box, Image, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <Box>
      <Link to='/product'>
        <Image
          mx='auto'
          width='full'
          src='https://content.asos-media.com/-/media/homepages/ww/2020/05/11/ww_summerfaceandbody_moment.jpg'
        />

        <Text fontWeight='bold' mt='3' fontSize={{ base: "sm" }} color='black'>
          NIKE Air Max 210
        </Text>
      </Link>
      <Link to='/brand/ss'>
        <Text fontSize='xs'>Nike</Text>
      </Link>

      <Text fontWeight='bold' mt='2' fontSize={{ base: "sm" }} color='black'>
        $45
      </Text>
    </Box>
  );
}
