import React from "react";

import { Text, Box, SimpleGrid, List, ListItem } from "@chakra-ui/core";

import BaseContainer from "./BaseContainer";

export default function Footer() {
  return (
    <Box as='footer' background='#eee'>
      <BaseContainer>
        <SimpleGrid
          color='#666'
          mt='6'
          w='100%'
          columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
          spacing={[5, 10]}
          fontSize={{ base: "sm", sm: "md" }}
        >
          <List spacing={2}>
            <ListItem mb='5' color='black' fontWeight='bold'>
              HELP & INFORMATION
            </ListItem>
            <ListItem>Help</ListItem>
            <ListItem>Track Order</ListItem>
            <ListItem>Delivery</ListItem>
          </List>
          <List spacing={2}>
            <ListItem mb='5' color='black' fontWeight='bold'>
              HELP & INFORMATION
            </ListItem>
            <ListItem>Help</ListItem>
            <ListItem>Track Order</ListItem>
            <ListItem>Delivery</ListItem>
          </List>{" "}
          <List spacing={2}>
            <ListItem mb='5' color='black' fontWeight='bold'>
              HELP & INFORMATION
            </ListItem>
            <ListItem>Help</ListItem>
            <ListItem>Track Order</ListItem>
            <ListItem>Delivery</ListItem>
          </List>{" "}
          <List spacing={2}>
            <ListItem mb='5' color='black' fontWeight='bold'>
              HELP & INFORMATION
            </ListItem>
            <ListItem>Help</ListItem>
            <ListItem>Track Order</ListItem>
            <ListItem>Delivery</ListItem>
          </List>
        </SimpleGrid>
      </BaseContainer>
      <Box bg='#ddd' color='black'>
        <BaseContainer
          p='3'
          d='flex'
          fontSize={{ base: "sm", sm: "md" }}
          justifyContent='space-between'
        >
          <Text>© 2020 ECOM</Text>
          <Text>© 2020 ECOM</Text>
        </BaseContainer>
      </Box>
    </Box>
  );
}
