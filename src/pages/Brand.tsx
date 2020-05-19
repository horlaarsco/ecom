import React from "react";
import { useParams } from "react-router-dom";
import { BaseContainer, ProductCard } from "../components";
import {
  SimpleGrid,
  Heading,
  Text,
  Box,
  Image,
  Button,
  Flex,
} from "@chakra-ui/core";

// @ts-ignore
export default function Brand() {
  let { brand } = useParams();

  return (
    <>
      <Box bg='#f5f5f5' color='black' p={{ base: 3, lg: 8 }}>
        <BaseContainer>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "flex-end" }}
          >
            <Image
              h='100px'
              mr='6'
              mb={{ base: 6, md: 0 }}
              src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA'
            />
            <Box>
              <Heading fontSize='lg'>{`${brand}'s Fashion`}</Heading>
              <Text lineHeight='taller' fontSize='sm'>
                You’ve nailed your outfit, now all that’s left is the footwear –
                which is where our edit of shoes for women comes in. Whether
                you're lo Vans will add a street-style edge to any outfit.
              </Text>
            </Box>
          </Flex>
        </BaseContainer>
      </Box>
      <BaseContainer mt='6'>
        <SimpleGrid columns={[2, 3, 4, 5]} spacing={5}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
        <Flex justify='center'>
          <Button
            mt='4'
            lineHeight='none'
            backgroundColor='black'
            color='white'
            size='md'
            height={{ base: "2rem", sm: "3rem" }}
            fontSize={{ base: "md", sm: "lg" }}
            _hover={{ color: "white", background: "black" }}
            _active={{ color: "white", background: "black" }}
          >
            Load More
          </Button>{" "}
        </Flex>
      </BaseContainer>
    </>
  );
}
