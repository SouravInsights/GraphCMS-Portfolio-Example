import React from "react";
import { Box } from "@chakra-ui/core";

function Tag({ tag, index }) {
  return (
    <Box
      px={["6px", "6px", "8px", "8px"]}
      borderRadius="20px"
      bg="gray.150"
      color="white"
      m="5px"
      textAlign="center"
      fontSize={["xs", "sm", "sm", "sm"]}
      fontWeight="medium"
      key={index}
    >
      {tag}
    </Box>
  );
}

export default Tag;
