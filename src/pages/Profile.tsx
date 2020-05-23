import React, { useState } from "react";
import { BaseContainer, Signup, Login, Loader, EmptyPage } from "../components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Link,
  Heading,
} from "@chakra-ui/core";
import Edit from "../components/Edit";

export const PROFILE = gql`
  query($data: ID!) {
    user(id: $data) {
      firstName
      lastName
      email
      password
      role
      username
      password
      updatedAt
      createdAt
      verified
      id
      token
    }
  }
`;

export default function Profile() {
  const [tabIndex, setTabIndex] = useState(0);
  // @ts-ignore
  const id = JSON.parse(localStorage.getItem("token")).id;

  const { loading, error, data } = useQuery(PROFILE, {
    variables: { data: id },
  });

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <EmptyPage />;
  }

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
            Edit Profile
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
            <Heading fontSize='3xl'>FirstName: {data.user.firstName}</Heading>{" "}
            <Heading mt='4' fontSize='3xl'>
              LastName: {data.user.lastName}
            </Heading>
            <Heading mt='4' fontSize='3xl'>
              Username: {data.user.username}
            </Heading>
            <Heading mt='4' fontSize='3xl'>
              Email: {data.user.email}
            </Heading>
          </TabPanel>

          <TabPanel w='full'>
            <Edit />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </BaseContainer>
  );
}
