import React from "react";
import {
  Flex,
  Heading,
  Box,
  Divider,
  Text,
  Image,
  Select,
  Button,
  IconButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/core";

import { BaseContainer, CartItem } from "../components";

export default function Checkout() {
  return (
    <Box bg='#f5f5f5'>
      <BaseContainer
        p={{ base: 3, lg: 10 }}
        alignItems='baseline'
        maxW='1200px'
        d='flex'
        justifyContent='space-between'
        pos='relative'
        flexDirection={["column", "column", "row"]}
      >
        <Flex
          flex='1'
          mr={{ base: 3, lg: 10 }}
          direction='column'
          color='black'
          p={{ base: 3, lg: 6 }}
          background='white'
          w='100%'
        >
          <Heading fontSize={{ base: "sm", sm: "lg" }} mb='6'>
            DELIVERY ADDRESS
          </Heading>
          <Box w={{ base: "full", md: "70%" }}>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='fname'
              >
                First Name:
              </FormLabel>
              <Input id='fname' />
            </FormControl>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='lname'
              >
                Last Name:
              </FormLabel>
              <Input id='lname' />
            </FormControl>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='mobile'
              >
                Mobile Number:
              </FormLabel>
              <Input type='number' id='number' />
            </FormControl>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='address'
              >
                Address:
              </FormLabel>
              <Input id='address' />
              <Input mt='3' id='address2' placeholder='Optional' />
            </FormControl>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='city'
              >
                City:
              </FormLabel>
              <Input id='city' />
            </FormControl>
            <FormControl w='full'>
              <FormLabel
                fontSize={{ base: "sm", sm: "lg" }}
                letterSpacing='widest'
                my='4'
                mb={{ base: 0, sm: 2 }}
                htmlFor='post-code'
              >
                Post-Code:
              </FormLabel>
              <Input type='number' id='post-code' />
            </FormControl>
          </Box>
        </Flex>
        <Flex
          pos='sticky'
          top='0'
          right='0'
          w={{ base: "100%", md: "300px", xl: "350px" }}
          direction='column'
          color='black'
          p='6'
          background='white'
          mt='4'
        >
          <Heading
            d='inline-flex'
            justifyContent='space-between'
            fontSize='lg'
            letterSpacing='widest'
          >
            2 ITEMS <Text fontSize='md'> Edit</Text>
          </Heading>
          <Divider borderColor='black' />
          <Flex mt='4' p='4' bg='#F7F7F7'>
            <Image
              w='100px'
              src='https://images.asos-media.com/products/burton-menswear-smart-shorts-with-grey-check/20210711-1-grey'
            />
            <Box ml='3' fontSize='xs'>
              <Text>$45 </Text>
              <Text mt='3' mb='1'>
                Burton Menswear smart shorts with grey check
              </Text>
              <Flex justify='space-between'>
                <Text>Grey </Text>
                <Text>Qty: 1</Text>
              </Flex>
            </Box>
          </Flex>
          <Flex mt='4' p='4' bg='#F7F7F7'>
            <Image
              w='100px'
              src='https://images.asos-media.com/products/burton-menswear-smart-shorts-with-grey-check/20210711-1-grey'
            />
            <Box ml='3' fontSize='xs'>
              <Text>$45 </Text>
              <Text mt='3' mb='1'>
                Burton Menswear smart shorts with grey check
              </Text>
              <Flex justify='space-between'>
                <Text>Grey </Text>
                <Text>Qty: 1</Text>
              </Flex>
            </Box>
          </Flex>
          <Button mt='4' variantColor='green'>
            Checkout
          </Button>
          <Flex
            mt={{ base: "6", lg: "10" }}
            fontSize={{ base: "sm", lg: "md" }}
            justify='space-between'
          >
            <Text mr='10' fontWeight='bold'>
              Sub-Total:{" "}
            </Text>
            <Text>$45 </Text>
          </Flex>
        </Flex>
      </BaseContainer>
    </Box>
  );
}
