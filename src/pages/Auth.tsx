import React, { useState, useContext } from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Link,
} from "@chakra-ui/core";
import { Signup, Login } from "../components";
import { AuthContext } from "../App";

export default function Auth() {
  const LoggedInStatus = useContext(AuthContext);

  const [tabIndex, setTabIndex] = useState(0);

  return (
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
          NEW TO E-COM?
        </Tab>
        <Tab
          px={{ base: 1, sm: 4 }}
          fontSize={{ base: "xs", sm: "md", md: "lg" }}
          onClick={() => setTabIndex(1)}
          _focus={{ outline: 0 }}
        >
          ALREADY REGISTERED?
        </Tab>
      </TabList>

      <TabPanels
        d='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        my='4'
      >
        <TabPanel w='full'>
          <Signup />
          <Box my='5' textAlign='center'>
            <Link color='#303133' onClick={() => setTabIndex(1)}>
              Already have an account?
            </Link>
          </Box>
        </TabPanel>

        <TabPanel w='full'>
          <Login />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
