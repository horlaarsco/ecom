import React from "react";
import { Flex, Heading, Text, Divider, Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { BaseContainer, Brand } from "../components";
import Carousel from "react-elastic-carousel";
import EmptyPage from "./EmptyPage";

const GET_BRANDS = gql`
  query {
    brands {
      id
      name
      slug
      image
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_BRANDS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <EmptyPage />;
  }

  return (
    <div>
      <BaseContainer
        d='flex'
        justifyContent='center'
        alignItems='center'
        w='100%'
        height='calc(100vh - 115px)'
        background='url("https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2019/asos-summer-generic-hp-desktop-new.jpg") no-repeat'
        bgSize='cover'
        bgPos='center'
        color='white'
        flexDirection='column'
      >
        <Heading
          fontSize={{ base: "xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight='bold'
          as='h1'
        >
          This is ECOM
        </Heading>
        <Text
          textAlign='center'
          fontSize={{ base: "md", sm: "lg" }}
          fontWeight='medium'
          my='3'
        >
          E-COM DESIGN and 850+ brands
        </Text>
        <Flex flexDir={{ base: "column", sm: "row" }}>
          <Button
            px={{ base: "5", sm: "10" }}
            lineHeight='none'
            backgroundColor='white'
            color='black'
            size='lg'
            height={{ base: "2rem", sm: "3rem" }}
            mx={{ base: "auto", sm: "3" }}
            fontSize={{ base: "md", sm: "lg" }}
            _hover={{ color: "white", background: "black" }}
          >
            <Link to='/men'>Shop Men </Link>
          </Button>{" "}
          <Button
            px={{ base: "5", sm: "10" }}
            lineHeight='none'
            backgroundColor='white'
            size='lg'
            color='black'
            mx={{ base: "auto", sm: "3" }}
            height={{ base: "2rem", sm: "3rem" }}
            mt={{ base: "3", sm: 0 }}
            fontSize={{ base: "md", sm: "lg" }}
            _hover={{ color: "white", background: "black" }}
          >
            <Link to='/women'>Shop Women</Link>
          </Button>
        </Flex>
      </BaseContainer>

      <BaseContainer
        color='white'
        bg='#303133'
        width='100%'
        textAlign='center'
        justifySelf='flex-end'
        fontWeight='bold'
      >
        <Text fontSize={{ base: "md", sm: "lg" }}>
          GET 20% OFF EVERYTHING WITH CODE 2020
        </Text>
      </BaseContainer>
      {data.brands.length > 0 && (
        <BaseContainer
          d='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Heading
            fontSize={{ base: "20px", md: "4xl" }}
            fontWeight='bold'
            as='h1'
            color='black'
            my='8'
          >
            Shop Brands
          </Heading>

          <Carousel
            itemPadding={[0, 5]}
            breakPoints={breakPoints}
            disableArrowsOnEnd={false}
          >
            {data.brands.map((brand: any) => (
              <Brand
                key={brand.id}
                image={brand.image}
                name={brand.name}
                slug={brand.slug}
              />
            ))}
          </Carousel>
        </BaseContainer>
      )}
    </div>
  );
}

export default Home;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
  { width: 1400, itemsToShow: 5 },
];
