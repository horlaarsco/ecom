import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  Tag,
} from "@chakra-ui/core";
// @ts-ignore
export default function Sizes({ setSizes, sizes, setsizeerror }) {
  const [size, setSize] = useState("");

  const sizeInput = () => {
    if (size === "") {
    } else {
      // @ts-ignore
      setSizes([...sizes, size]);
      // @ts-ignore
      setSize("");
      setsizeerror("");
    }
  };
  return (
    <>
      <Flex mt='3' justify='space-between'>
        <FormControl w='80%'>
          <FormLabel htmlFor='name'>Sizes</FormLabel>
          <InputGroup>
            <InputLeftAddon children='$' />
            <Input
              type='number'
              placeholder='Enter Size'
              value={size}
              // @ts-ignore
              onChange={(e) => setSize(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl w='16%'>
          <FormLabel> </FormLabel>

          <Button
            onClick={sizeInput}
            w='100%'
            variantColor='dark'
            variant='outline'
          >
            Add Size
          </Button>
        </FormControl>
      </Flex>
      <Flex flexWrap='wrap' mb='3'>
        {sizes.map((addedSize: any) => (
          <Tag mt='3' mr='3' color='black' key={addedSize}>
            {addedSize}
          </Tag>
        ))}
      </Flex>
    </>
  );
}
