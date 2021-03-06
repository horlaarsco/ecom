import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BaseContainer, ProductCard, Loader, EmptyPage } from "../components";
import { useQuery } from "@apollo/react-hooks";

import {
  SimpleGrid,
  Heading,
  Text,
  Box,
  Image,
  Button,
  Flex,
} from "@chakra-ui/core";
import { GET_BRAND } from "../utils/queries";

export default function Brand() {
  let { slug } = useParams();

  const { loading, error, data } = useQuery(GET_BRAND, {
    variables: { slug: slug },
  });

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <EmptyPage />;
  }

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
              src={data.brand.image}
            />
            <Box>
              <Heading fontSize='lg'>{`${data.brand.name}'s Fashion`}</Heading>
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
        {data.brand.products.length > 0 ? (
          <>
            <SimpleGrid columns={[2, 3, 4]} spacing={8}>
              {data.brand.products
                .map((product: any) => (
                  <ProductCard
                    key={product.slug}
                    name={product.name}
                    brandName={data.brand.name}
                    brand={slug}
                    price={product.price}
                    slug={product.slug}
                    image={product.images[0]}
                    salePrice={product.salePrice}
                  />
                ))
                .reverse()}
            </SimpleGrid>
            <Flex justify='center'>
              <Button
                my='4'
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
          </>
        ) : (
          <Link to='/admin/add-product'>
            <Flex direction='column' align='center' w='full' justify='center'>
              <Heading fontSize='xl' color='black'>
                No products yet
              </Heading>
              <Button
                my='4'
                lineHeight='none'
                backgroundColor='black'
                color='white'
                size='md'
                height={{ base: "2rem", sm: "3rem" }}
                fontSize={{ base: "md", sm: "lg" }}
                _hover={{ color: "white", background: "black" }}
                _active={{ color: "white", background: "black" }}
              >
                Add Product
              </Button>
            </Flex>
          </Link>
        )}
      </BaseContainer>
    </>
  );
}
