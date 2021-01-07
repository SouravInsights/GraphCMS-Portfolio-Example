import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/core';

function GridHeader({ title, heading, description }) {
  return (
    <Box py={['10px', '10px', '10px', '10px']} textAlign="center">
      <Heading
        fontSize="xl"
        color="cyan.50"
        fontWeight="extrabold"
        letterSpacing="widest"
        color="offwhite.50"
      >
        {title}
      </Heading>
      <Heading
        fontSize="42px"
        color="cyan.50"
        fontWeight="extrabold"
        letterSpacing="widest"
        my="20px"
      >
        {heading}
      </Heading>
      <Text
        fontSize={['xl', 'xl', '2xl', '2xl']}
        color="offwhite.50"
        fontWeight="normal"
        pb={['40px']}
      >
        {description}
      </Text>
    </Box>
  );
}

export default GridHeader;
