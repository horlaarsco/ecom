import React from "react";
import { BaseContainer, ProductCard, Loader, EmptyPage } from "../components";
import { SimpleGrid, Heading, Text, Box, Button, Flex } from "@chakra-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { GET_PRODUCTS } from "../utils/queries";

export default function Gender(props: any) {
  const { gender } = props;
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <EmptyPage />;
  }

  // @ts-ignore
  const result = data.products.filter((product) => {
    return product.category.toLowerCase() === gender.toLowerCase();
  });

  if (result.length < 1) {
    return <EmptyPage />;
  }

  return (
    <>
      <Box
        bg='#f5f5f5'
        color='black'
        p={{ base: 3, lg: 10 }}
        textAlign='center'
      >
        <BaseContainer>
          <Heading mb='6'>{`${gender}'s Fashion`}</Heading>
          <Text lineHeight='taller' fontSize='sm' mx={{ base: 0, xl: 24 }}>
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
        <SimpleGrid columns={[2, 3, 4]} spacing={8}>
          {result
            .map((product: any, index: number) => (
              <ProductCard
                key={index}
                name={product.name}
                brand={product.brand.slug}
                price={product.price}
                slug={product.slug}
                image={product.images[0]}
                salePrice={product.salePrice}
                brandName={product.brand.name}
              />
            ))
            .reverse()}
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
