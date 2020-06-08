import React, { useState, useContext } from "react";
import { BaseContainer, CartItem } from "../components";

import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  Text,
  Flex,
  IconButton,
  Image,
} from "@chakra-ui/core";
import { AuthContext } from "../App";

export default function Profile() {
  // @ts-ignore
  const profileDetails = useContext(AuthContext).profile;

  const [tabIndex, setTabIndex] = useState(0);
  // @ts-ignore

  return (
    <BaseContainer>
      <Tabs
        variantColor='dark'
        variant='enclosed'
        p='6'
        my='10'
        color='black'
        maxW='600px'
        mx='auto'
        isFitted
        index={tabIndex}
      >
        <TabList>
          <Tab
            px={{ base: 1, sm: 4 }}
            fontSize={{ base: "xs", sm: "md", md: "lg" }}
            onClick={() => setTabIndex(0)}
            _focus={{ outline: 0 }}
          >
            Details
          </Tab>
          <Tab
            px={{ base: 1, sm: 4 }}
            fontSize={{ base: "xs", sm: "md", md: "lg" }}
            onClick={() => setTabIndex(1)}
            _focus={{ outline: 0 }}
          >
            Orders
          </Tab>
        </TabList>

        <TabPanels
          d='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          my='4'
        >
          <TabPanel mt='4' w='full'>
            <Heading fontSize='3xl'>
              FirstName: {profileDetails.firstName}
            </Heading>{" "}
            <Heading mt='4' fontSize='3xl'>
              LastName: {profileDetails.lastName}
            </Heading>
            <Heading mt='4' fontSize='3xl'>
              Username: {profileDetails.username}
            </Heading>
            <Heading mt='4' fontSize='3xl'>
              Email: {profileDetails.email}
            </Heading>
          </TabPanel>

          <TabPanel w='full'>
            {profileDetails.orders &&
              profileDetails.orders.map((order: any, index: any) => {
                return (
                  <Box key={index} mt='3'>
                    <Text>Order Number {index + 1}</Text>
                    <Text>FirstName: {order.firstName}</Text>{" "}
                    <Text>LastName: {order.lastName}</Text>
                    <Text>Address: {order.address}</Text>
                    <Text>Address: {order.address2}</Text>
                    <Text>City: {order.city}</Text>
                    <Text>Phone NUmber: {order.number}</Text>
                    <Text>PostCode: {order.postCode}</Text>
                    {order.products.map((product: any, index: any) => {
                      return (
                        <Flex
                          mt='2'
                          p={{ base: 3, lg: 6 }}
                          flexDirection={{ base: "column", sm: "row" }}
                          bg='#f5f5f5'
                          key={index}
                          justify='space-between'
                        >
                          <Image
                            w={{ base: "70px", sm: "100px", lg: "120px" }}
                            src={product.images[0]}
                          />
                          <Box
                            d='flex'
                            flexDir='column'
                            justifyContent='center'
                            flex='1'
                            ml={{ base: 0, sm: 3 }}
                            fontSize={{ base: "sm", lg: "md" }}
                          >
                            <Text fontWeight='bold'>${product.salePrice} </Text>
                            <Text mt='3' mb='1'>
                              {product.name}
                            </Text>
                          </Box>
                        </Flex>
                      );
                    })}
                  </Box>
                );
              })}

            {/* {JSON.stringify(profileDetails)} */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </BaseContainer>
  );
}
