import { Flex, Heading, Box, Grid, Button, Text, Image } from "@chakra-ui/core";
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
      works,
    },
    revalidate: 1,
  };
}

const WorksCardWrapper = motion.custom(Flex);

const Work = ({ works }) => {
  console.log(works);
  return (
    <>
      <Flex
        flexDirection="column"
        my="5"
        px={["30px", "30px", "80px", "140px"]}
      >
        <Box>
          <Heading
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            scaleY="scrollYProgress"
            fontWeight="extrabold"
            color="white"
          >
            Making.
          </Heading>

          <Text
            fontSize={["lg", "xl", "2xl", "3xl"]}
            color="white"
            fontWeight="normal"
          >
            Ideas I'm currently pursuing.
          </Text>
        </Box>
      </Flex>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={10}
        px={["30px", "30px", "80px", "140px"]}
      >
        {works.map((work) => (
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
              {work.tags.length &&
                work.tags.map((tag, index) => (
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
                    {tag.label}
                  </Box>
                ))}
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
        ))}
        ;
      </Grid>
      <Footer />
    </>
  );
};

export default Work;
