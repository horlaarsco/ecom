import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  Input,
  Button,
  Box,
  Link,
} from "@chakra-ui/core";

export default function Login() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      variantColor='white'
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
        <Tab onClick={() => setTabIndex(0)} _focus={{ outline: 0 }}>
          NEW TO E-COM?
        </Tab>
        <Tab onClick={() => setTabIndex(1)} _focus={{ outline: 0 }}>
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
          <Heading fontSize='lg' my='6' textAlign='center'>
            SIGN UP USING YOUR EMAIL ADDRESS
          </Heading>
          <FormControl w='full'>
            <FormLabel letterSpacing='widest' my='2' htmlFor='email'>
              Email address
            </FormLabel>
            <Input
              type='email'
              id='email'
              aria-describedby='email-helper-text'
            />
          </FormControl>
          <FormControl w='full'>
            <FormLabel letterSpacing='widest' my='2' htmlFor='fname'>
              First Name
            </FormLabel>
            <Input id='fname' />
          </FormControl>
          <FormControl w='full'>
            <FormLabel letterSpacing='widest' my='2' htmlFor='lname'>
              Last Name
            </FormLabel>
            <Input id='lname' />
          </FormControl>
          <FormControl w='full' my='4'>
            <FormLabel letterSpacing='widest' my='2' htmlFor='password'>
              Password
            </FormLabel>
            <Input type='password' id='password' />
          </FormControl>
          <FormControl w='full' my='4'>
            <FormLabel letterSpacing='widest' my='2' htmlFor='cpassword'>
              Confirm Password
            </FormLabel>
            <Input type='password' id='cpassword' />
          </FormControl>
          <Button
            w='full'
            backgroundColor='black'
            color='white'
            _hover={{ background: "#303133" }}
            mt={4}
            type='submit'
          >
            JOIN
          </Button>
          <Box my='5' textAlign='center'>
            <Link color='#303133' onClick={() => setTabIndex(1)}>
              Already have and account?
            </Link>
          </Box>
        </TabPanel>
        <TabPanel w='full'>
          <Heading fontSize='lg' my='6' textAlign='center'>
            SIGN IN WITH EMAIL
          </Heading>
          <FormControl w='full'>
            <FormLabel letterSpacing='widest' my='2' htmlFor='email'>
              Email address
            </FormLabel>
            <Input
              type='email'
              id='email'
              aria-describedby='email-helper-text'
            />
          </FormControl>
          <FormControl w='full' my='4'>
            <FormLabel letterSpacing='widest' my='2' htmlFor='password'>
              Password
            </FormLabel>
            <Input
              type='password'
              id='password'
              aria-describedby='email-helper-text'
            />
          </FormControl>
          <Button
            w='full'
            backgroundColor='black'
            color='white'
            _hover={{ background: "#303133" }}
            mt={4}
            type='submit'
          >
            Submit
          </Button>
          <Box my='5' textAlign='center'>
            <Link color='#303133'>Forgot password?</Link>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
