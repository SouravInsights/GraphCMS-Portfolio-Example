import React from 'react';
import { Text, Heading, Box, Image } from '@chakra-ui/core';

function GridCard({
  cardheading,
  carddescription,
  src,
  alt,
  iconheight,
  size,
  color,
  children
}) {
  return (
    <Box my="10px">
      <Image h={iconheight} src={src} alt={alt} />
      <Heading fontSize={size} mt="10px" color={color} fontWeight="extrabold">
        {cardheading}
      </Heading>
      <Text my="6px" fontSize="18px" color="offwhite.50" fontWeight="medium">
        {carddescription}
      </Text>
      {children}
    </Box>
  );
}

export default GridCard;
