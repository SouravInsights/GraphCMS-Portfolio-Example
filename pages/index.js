import Head from "next/head";
import { keyframes } from "@emotion/core";
import {
  Button,
  Flex,
  Image,
  Heading,
  Box,
  Text,
  Grid,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/core";
import React, { useEffect } from "react";
import Footer from "components/Footer";
import ContactDrawer from "components/ContactDrawer";
import { motion } from "framer-motion";
import styles from "../styles/styles.module.css";
import { GraphQLClient } from "graphql-request";
import { FaLongArrowAltRight } from "react-icons/fa";
import Tag from "components/Tag";
import WorksCard from "components/WorksCard";
import GridCardSection from "components/GridCardSection";

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckd2lanxl00w001wb9zb33zl1/master"
  );

  const { stories, works, communities } = await graphcms.request(
    `
    {
      stories(where: {
        featured: true
      } ) {
        slug
        title
        excerpt
        coverImage {
          url
        }
        tags {
          label
        }
      }
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
      communities {
        slug
        title
        writeup
        coverImage {
          url
        }
      }
    }
      `
  );

  return {
    props: {
      stories,
      works,
      communities,
    },
    revalidate: 1,
  };
}

const HomeBox = motion.custom(Box);
const MotionHeading = motion.custom(Heading);
const BlogCard = motion.custom(Flex);

const Home = ({ stories, works, communities }) => {
  const shine = keyframes`
    0% {
    background-position: 0
    }
    60% {
      background-position: 180px
    }
    100% {
      background-position: 180px
    }
  `;
  const firstField = React.useRef();
  const btnRef = React.useRef();

  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

  useEffect(() => {
    function handleC(event) {
      if (event.key.toLowerCase() === "c") {
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
      }
    }
    window.addEventListener("keydown", handleC);
    return () => {
      window.removeEventListener("keydown", handleC);
    };
  }, [onOpen, isOpen, onClose]);

  return (
    <HomeBox
      as="main"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      flexDirection={["column", "column", "row", "row"]}
      align="center"
      justify="center"
    >
      <Head>
        <title>SouravInsights - Digital Garden</title>
      </Head>
      <Flex
        mx={["30px", "30px", "none", "none"]}
        direction={["column", "column", "row", "row"]}
      >
        <Box width="90%">
          <Image src="/bg.png" />
        </Box>
        <Box mt="4" width="90%">
          <MotionHeading
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            fontWeight="extrabold"
            color="white"
          >
            Hey, I'm
          </MotionHeading>
          <Stack isInline>
            <Heading
              fontSize={["5xl", "6xl", "7xl", "8xl"]}
              fontWeight="extrabold"
              color="yellow.50"
            >
              Sourav.
              <Image
                d="inline"
                src="https://res.cloudinary.com/emishalabs/image/upload/v1594632326/SouravInsights%20-%20Digital%20Garden/hey_c9pmfo.svg"
              />
            </Heading>
          </Stack>
          <Text
            my="4"
            width={["90%", null, "80%", "80%"]}
            fontSize={["md", "lg", "xl", "2xl"]}
            color="white"
            fontWeight="normal"
            lineHeight="shorter"
            letterSpacing="wide"
          >
            I'm a product developer. I build experiences that matters to your
            untapped users fast through design thinking.
          </Text>
          <Text
            as="button"
            variant="ghost"
            onClick={onOpen}
            fontSize={["md", "md", "xl", "xl"]}
            fontWeight="bold"
            outline="none"
            className={styles.shiny}
          >
            Press
            <Text as="span" mx="8px" fontWeight="extrabold">
              C
            </Text>
            anywhere to contact me!
          </Text>
        </Box>
      </Flex>

      <Box as="section">
        <Flex
          flexDirection="column"
          my="5"
          px={["30px", "30px", "80px", "140px"]}
          mt="20"
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

        <GridCardSection
          columns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          px={["30px", "30px", "80px", "140px"]}
        >
          {works.map((work) => (
            <WorksCard
              title={work.name}
              desc={work.pitch}
              coverImage={
                work.coverImage && (
                  <Image
                    borderRadius="10px"
                    my="20px"
                    maxWidth="90%"
                    src={work.coverImage.url}
                    alt={work.slug}
                  />
                )
              }
              tag={
                work.tags.length &&
                work.tags.map((tag, index) => (
                  <Tag key={index} tag={tag.label} />
                ))
              }
            />
          ))}
        </GridCardSection>
        <Flex mt={6} justify="center" align="center">
          <Link
            textAlign="center"
            fontSize="xl"
            fontWeight="extrabold"
            color="white"
          >
            See them all
          </Link>
          <Box ml="8px">
            <FaLongArrowAltRight color="white" />
          </Box>
        </Flex>
      </Box>

      <Box as="section">
        <Flex
          flexDirection="column"
          my={[10, 10, 20, 20]}
          px={["30px", "30px", "80px", "140px"]}
        >
          <Box>
            <Heading
              fontSize={["3xl", "4xl", "5xl", "6xl"]}
              scaleY="scrollYProgress"
              fontWeight="extrabold"
              color="white"
            >
              Thoughts & Insights
            </Heading>

            <Text
              fontSize={["lg", "xl", "2xl", "3xl"]}
              color="white"
              fontWeight="normal"
            >
              Writing for myself and everyone else...
            </Text>
          </Box>
        </Flex>
        {stories.map((story) => (
          <BlogCard
            my={8}
            mx={["30px", "30px", "80px", "140px"]}
            p={[4, 4, 6, 6]}
            maxWidth="85%"
            mx="auto"
            bg="#2C2929"
            boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
            borderRadius="12px"
            whileHover={{ scale: 1.1 }}
            display={{ md: "flex" }}
          >
            <Box flexShrink="0">
              {story.coverImage && (
                <Image
                  rounded="lg"
                  width={{ md: 40 }}
                  src={story.coverImage.url}
                  alt={story.slug}
                />
              )}
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Link
                mt={1}
                display="block"
                fontSize={["xl", "xl", "2xl", "2xl"]}
                color="white"
                lineHeight="normal"
                fontWeight="extrabold"
                href="#"
              >
                {story.title}
              </Link>
              <Text
                mt={1}
                fontSize={["lg", "lg", "xl", "xl"]}
                fontWeight="medium"
                color="gray.200"
              >
                {story.excerpt}
              </Text>
              <Flex mt={3} w="90%" wrap="wrap">
                {story.tags.length &&
                  story.tags.map((tag, index) => (
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
            </Box>
          </BlogCard>
        ))}
        <Flex mb={6} justify="center" align="center">
          <Link
            textAlign="center"
            fontSize="xl"
            fontWeight="extrabold"
            color="white"
          >
            Read them all
          </Link>
          <Box ml="8px">
            <FaLongArrowAltRight color="white" />
          </Box>
        </Flex>
      </Box>

      <Box as="section">
        <Flex
          flexDirection="column"
          my={[10, 10, 20, 20]}
          px={["30px", "30px", "80px", "140px"]}
        >
          <Box>
            <Heading
              fontSize={["3xl", "4xl", "5xl", "6xl"]}
              scaleY="scrollYProgress"
              fontWeight="extrabold"
              color="white"
            >
              Love for Community
            </Heading>

            <Text
              fontSize={["lg", "xl", "2xl", "3xl"]}
              color="white"
              fontWeight="normal"
            >
              Writing for myself and everyone else...
            </Text>
          </Box>
        </Flex>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={10}
          my={[10, 10, 20, 20]}
          px={["30px", "30px", "80px", "140px"]}
        >
          {communities.map((community) => (
            <Flex
              zIndex="0"
              mx="auto"
              borderRadius="12px"
              flexDirection="column"
              maxWidth="526px"
              bg="#2C2929"
              boxShadow="0px 15px 30px rgba(0, 0, 0, 0.25)"
              whileHover={{ scale: 1.1 }}
              key={community.slug}
            >
              {community.coverImage && (
                <Image
                  borderRadius="10px"
                  maxWidth="100%"
                  src={community.coverImage.url}
                />
              )}
              <Box p={4}>
                <Heading
                  fontWeight="extrabold"
                  color="white"
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                >
                  {community.title}
                </Heading>
                <Text
                  color="white"
                  fontSize={["lg", "lg", "xl", "xl"]}
                  fontWeight="normal"
                >
                  {community.writeup}
                </Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Box>

      <ContactDrawer />
      <Footer />
    </HomeBox>
  );
};

export default Home;
