import { Flex, Heading, Box, Button, Text, Image } from "@chakra-ui/core";
import React from "react";
import { motion } from "framer-motion";

const WorksCardWrapper = motion.custom(Flex);

export const WorkCard = ({ name, slug, pitch, tags, coverImage }) => {
  console.log(works);
  return (
    <WorksCardWrapper
      zIndex="0"
      mx="auto"
      borderRadius="12px"
      flexDirection="column"
      align="center"
      maxWidth="526px"
      bg="#2C2929"
      boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
      whileHover={{ scale: 1.1 }}
      key={slug}
    >
      <Image borderRadius="10px" my="20px" maxWidth="90%" src={coverImage} />
      <Heading
        mb="20px"
        w="90%"
        fontWeight="extrabold"
        color="white"
        fontSize={["xl", "xl", "2xl", "2xl"]}
      >
        {name}
        &nbsp; - &nbsp;
        <Heading
          as="span"
          fontSize={["xl", "xl", "2xl", "2xl"]}
          fontWeight="medium"
        >
          {pitch}
        </Heading>
      </Heading>
      <Flex
        w="90%"
        mb="20px"
        justifyContent="flex-start"
        flexDirection={["row", "row", "row", "row"]}
      >
        <Box
          w="auto"
          px="8px"
          borderRadius="20px"
          mr="6px"
          bg="#5A5454"
          color="white"
          textAlign="center"
          fontSize={["sm", "sm", "sm", "sm"]}
          fontWeight="medium"
          key={index}
        >
          {tags}
        </Box>
      </Flex>
      <Box
        w="90%"
        mb="20px"
        d="flex"
        flexDirection="row"
        justify="center"
        align="center"
      >
        <Button
          bg="black"
          borderRadius="14px"
          w="auto"
          h="40px"
          color="white"
          fontSize="xl"
          fontWeight="bold"
        >
          See live
        </Button>
      </Box>
    </WorksCardWrapper>
  );
};
