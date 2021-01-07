import React from 'react';
import { Grid } from '@chakra-ui/core';

function GridCardSection({ children, columns, ...props }) {
  return (
    <Grid templateColumns={columns} gap={10} mt="30px" {...props}>
      {children}
    </Grid>
  );
}

export default GridCardSection;
