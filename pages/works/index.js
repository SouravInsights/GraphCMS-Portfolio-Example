import { Flex, Heading, Box, Button, Text, Image } from "@chakra-ui/core";
import React from "react";
import Footer from "components/Footer";
import { GraphQLClient } from "graphql-request";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckd2lanxl00w001wb9zb33zl1/master"
  );

  const { works } = await graphcms.request(
    `
        { 
          works {
            slug
            name
            pitch
            coverImage {
                url
            }
            tags {
                label
            }
          }
        }
      `
  );

  return {
    props: {
      works
    },
    revalidate: 1
  };
}

const WorksCardWrapper = motion.custom(Flex);

const Work = ({ works }) => {
  console.log(works);
  return (
    <>
      <Flex flexDirection="column">
        <Heading
          fontSize={["5xl", "6xl", "7xl", "9xl"]}
          scaleY="scrollYProgress"
          fontWeight="extrabold"
          color="yellow.50"
        >
          Works.
        </Heading>
        <Text
          fontSize={["xl", "2xl", "3xl", "3xl"]}
          color="white"
          fontWeight="normal"
        >
          Some projects to judge me.
        </Text>
        {works.map(work => {
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
              key={work.slug}
            >
              {work.coverImage && (
                <Image
                  borderRadius="10px"
                  my="20px"
                  maxWidth="90%"
                  src={work.coverImage.url}
                />
              )}
              <Heading
                mb="20px"
                w="90%"
                fontWeight="extrabold"
                color="white"
                fontSize={["xl", "xl", "2xl", "2xl"]}
              >
                {work.name}
                &nbsp; - &nbsp;
                <Heading
                  as="span"
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  fontWeight="medium"
                >
                  {work.pitch}
                </Heading>
              </Heading>
              <Flex
                w="90%"
                mb="20px"
                justifyContent="flex-start"
                flexDirection={["row", "row", "row", "row"]}
              >
                {work.tags && (
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
                  >
                    {work.tags.label}
                  </Box>
                )}
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
        })}
        ;
      </Flex>
      <Footer />
    </>
  );
};

export default Work;
