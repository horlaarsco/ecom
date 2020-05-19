import React from "react";
import { BaseContainer, Product } from "../components";
import { SimpleGrid, Heading, Text, Box, BoxProps } from "@chakra-ui/core";

// @ts-ignore
export default function Gender(props) {
  const { gender } = props;
  return (
    <>
      <Box bg='#f5f5f5' color='black' p='10' textAlign='center'>
        <BaseContainer>
          <Heading mb='6'>{`${gender}'s Fashion`}</Heading>
          <Text lineHeight='taller' fontSize='sm' mx='24'>
            You’ve nailed your outfit, now all that’s left is the footwear –
            which is where our edit of shoes for women comes in. Whether you're
            looking for everyday winners or something for your next night out,
            give your feet the VIP treatment, whatever your style. Refresh your
            summer wardrobe with ASOS DESIGN's selection of sandals, from
            sliders to platforms, and get holiday ready with River Island’s
            strappy wedges. Looking for women's trainers? Classic designs from
            Vans will add a street-style edge to any outfit.
          </Text>
        </BaseContainer>
      </Box>
      <BaseContainer mt='6'>
        <SimpleGrid columns={5} spacing={5}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </SimpleGrid>
      </BaseContainer>
    </>
  );
}
