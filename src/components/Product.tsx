import React from "react";
import { Box, Image, Text } from "@chakra-ui/core";

export default function Product() {
  return (
    <Box>
      <Image
        mx='auto'
        width='full'
        src='https://content.asos-media.com/-/media/homepages/ww/2020/05/11/ww_summerfaceandbody_moment.jpg'
      />
      <Text fontWeight='300' mt='3' fontSize={{ base: "sm" }} color='black'>
        Miss Selfridge espadrille trainers in beige
      </Text>
      <Text fontWeight='bold' mt='3' fontSize={{ base: "sm" }} color='black'>
        $45
      </Text>
    </Box>
  );
}
