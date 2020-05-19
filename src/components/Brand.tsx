import React from "react";
import { Box, Image, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
export default function Brand() {
  return (
    <Box>
      <Link to='/brand/ss'>
        <Image
          mx='auto'
          width='100%'
          src='https://content.asos-media.com/-/media/homepages/ww/2020/05/11/ww_summerfaceandbody_moment.jpg'
        />
        <Text
          fontWeight='300'
          mt='3'
          fontSize={{ base: "md", sm: "lg" }}
          color='black'
          textAlign='center'
        >
          Nike
        </Text>
      </Link>
    </Box>
  );
}
