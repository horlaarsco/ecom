import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Button,
  Tag,
} from "@chakra-ui/core";
// @ts-ignore
export default function Color({ setColors, colors, setcolorerror }) {
  const [color, setColor] = useState("");
  const colorInput = () => {
    if (color == "") {
    } else {
      // @ts-ignore
      setColors([...colors, color]);
      // @ts-ignore
      setColor("");
      setcolorerror("");
    }
  };
  return (
    <>
      <Flex mt='3' justify='space-between'>
        <FormControl w='80%'>
          <FormLabel htmlFor='name'>Colors</FormLabel>
          <InputGroup>
            <Input
              placeholder='Enter Color'
              value={color}
              // @ts-ignore
              onChange={(e) => setColor(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl w='16%'>
          <FormLabel htmlFor='name'> </FormLabel>

          <Button
            onClick={colorInput}
            w='100%'
            variantColor='dark'
            variant='outline'
          >
            Add Color
          </Button>
        </FormControl>
      </Flex>

      <Flex flexWrap='wrap' mb='3'>
        {colors.map((addedColors: any) => (
          <Tag mt='3' mr='3' color='black' key={addedColors}>
            {addedColors}
          </Tag>
        ))}
      </Flex>
    </>
  );
}
