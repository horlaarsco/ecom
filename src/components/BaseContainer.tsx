import React from "react";
import { Box, BoxProps } from "@chakra-ui/core";

const BaseContainer = (props: BoxProps) => {
  return <Box maxW='1440px' mx='auto' p='3' {...props}></Box>;
};

export default BaseContainer;
