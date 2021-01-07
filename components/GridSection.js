import React from 'react';
import { Box } from '@chakra-ui/core';

function GridSection({ bgcolor, children }) {
  return (
    <Box
      as="section"
      px={['30px', '30px', '100px', '160px']}
      py={['20px', '20px', '40px', '60px']}
      mx={['none', 'none', '60px', '120px']}
      rounded={['none', 'none', '16px', '16px']}
      bg={bgcolor}
      align="center"
      justify="center"
    >
      {children}
    </Box>
  );
}

export default GridSection;
