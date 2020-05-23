import React from "react";
import { Link } from "react-router-dom";
import BaseContainer from "./BaseContainer";

import { Heading, Text, Box, Button } from "@chakra-ui/core";

export default function EmptyPage() {
  return (
    <Box bg='#f5f5f5' color='black' p={{ base: 3, lg: 8 }}>
      <BaseContainer>
        <Box mx='auto' maxW='900px'>
          <Box p='6' className='four_zero_four_bg'>
            <Heading fontSize='6xl' textAlign='center'>
              404
            </Heading>
          </Box>
          <Box textAlign='center' bg='white' p='10' className='contant_box_404'>
            <h3 className='h2'>Look like you're lost</h3>
            <Text>the page you are looking for not avaible!</Text>
            <Button
              mt='4'
              px={{ base: "5", sm: "10" }}
              lineHeight='none'
              size='lg'
              height={{ base: "2rem", sm: "3rem" }}
              mx={{ base: "auto", sm: "3" }}
              fontSize={{ base: "md", sm: "lg" }}
              variantColor='green'
            >
              <Link to='/'>Go to Home</Link>{" "}
            </Button>
          </Box>
        </Box>
      </BaseContainer>
    </Box>
  );
}
