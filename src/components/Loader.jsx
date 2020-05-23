import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import ReactLoading from "react-loading";

export default function Loader() {
  return (
    <Flex h='60vh' align='center' p='24' w='full' justify='center'>
      <Box height='auto' width={["40%", "35%", "25%", "15%", "10%"]} mx='0'>
        <ReactLoading type='spokes' color='black' height='100%' width='100%' />
      </Box>
    </Flex>
  );
}
