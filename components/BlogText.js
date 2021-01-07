import React from "react";
import { Text } from "@chakra-ui/core";

const BlogText = (props) => {
  return (
    <Text color="white" {...props}>
      This is from an MDX component
    </Text>
  );
};

export default BlogText;
