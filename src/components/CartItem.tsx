import React from "react";
import {
  Flex,
  Box,
  IconButton,
  Select,
  Image,
  Text,
  Divider,
} from "@chakra-ui/core";

export default function CartItem() {
  return (
    <>
      <Divider my='6' borderColor='black' />

      <Flex
        p={{ base: 3, lg: 6 }}
        flexDirection={{ base: "column", sm: "row" }}
        bg='#f5f5f5'
      >
        <Image
          w={{ base: "70px", sm: "100px", lg: "120px" }}
          src='https://images.asos-media.com/products/burton-menswear-smart-shorts-with-grey-check/20210711-1-grey'
        />
        <Box
          d='flex'
          flexDir='column'
          justifyContent='center'
          flex='1'
          ml={{ base: 0, sm: 3 }}
          fontSize={{ base: "sm", lg: "md" }}
        >
          <IconButton
            variantColor='red'
            variant='outline'
            size='sm'
            aria-label='Search database'
            icon='close'
            px={{ base: "0", lg: "2" }}
            h={{ base: "1rem", lg: "2rem" }}
            lineHeight='1'
            fontSize='xs'
            minW='1rem'
            alignSelf='flex-end'
            justifySelf='flex-start'
          />
          <Text fontWeight='bold'>$45 </Text>
          <Text mt='3' mb='1'>
            Burton Menswear smart shorts with grey check
          </Text>
          <Flex mt='3'>
            <Select mr='2' size='sm' w='100px' px='2' placeholder='Color:'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Select size='sm' w='100px' px='2' placeholder='Qty:'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
