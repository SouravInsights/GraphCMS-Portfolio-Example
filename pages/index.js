import Head from 'next/head';
import { keyframes } from '@emotion/core'
import {
  Button, Flex, Image, Heading, Box, Text, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader,
  DrawerBody, Input, Stack, FormLabel, Textarea, useDisclosure
} from '@chakra-ui/core';
import React, { useEffect } from 'react';
import Footer from 'components/Footer'
import { motion } from "framer-motion";
import styles from "../styles/styles.module.css"
import { FaLongArrowAltRight } from "react-icons/fa";

const HomeBox = motion.custom(Box);
const MotionHeading = motion.custom(Heading);

const Home = () => {

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
  `
  const firstField = React.useRef();
  const btnRef = React.useRef();

  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

  useEffect(() => {
    function handleC(event) {
      if (event.key.toLowerCase() === 'c') {
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
      }
    }
    window.addEventListener('keydown', handleC);
    return () => {
      window.removeEventListener('keydown', handleC);
    }
  }, [onOpen, isOpen, onClose]);

  return (
    <HomeBox as="main"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      flexDirection={["column", "column", "row", "row"]}
      align="center"
      justify="center"
    >
      <Head>
        <title>SouravInsights - Digital Garden</title>
      </Head>
      <Flex direction={["column", "column", "row", "row"]}>
        <Box width="90%" >
          <Image src="/bg.png" />
        </Box>
        <Box mt="4" width="90%">
          <MotionHeading fontSize={["3xl", "4xl", "5xl", "6xl"]} fontWeight="extrabold" color="white">
            Hey, I'm
          </MotionHeading>
          <Stack isInline>
            <Heading fontSize={["5xl", "6xl", "7xl", "8xl"]} fontWeight="extrabold" color="yellow.50">
              Sourav.
             <Image d="inline" src="https://res.cloudinary.com/emishalabs/image/upload/v1594632326/SouravInsights%20-%20Digital%20Garden/hey_c9pmfo.svg" />
            </Heading>
          </Stack>
          <Text my="4" width={["90%", null, "80%", "80%"]} fontSize={["md", "lg", "xl", "2xl"]} color="white" fontWeight="normal" lineHeight="shorter" letterSpacing="wide">
            I'm a product developer. I build experiences that matters to your untapped users fast through design thinking.
          </Text>
          <Text
            as="button" variant="ghost" onClick={onOpen}
            fontSize={["md", "md", "xl", "xl"]} fontWeight="bold" outline="none"
            className={styles.shiny}
          >
            Press
            <Text as="span" mx="8px"
              fontWeight="extrabold"
            >C</Text>
            anywhere to contact me!
          </Text>
        </Box>
      </Flex>

      <Flex flexDirection="column" my="5" mx="auto" align="center">
        <Heading fontSize={["3xl", "4xl", "5xl", "6xl"]} scaleY="scrollYProgress" fontWeight="extrabold" color="yellow.50">
          Making.
        </Heading>
        <Text fontSize={["lg", "xl", "2xl", "3xl"]} color="white" fontWeight="normal" >
          Ideas I'm currently pursuing.
        </Text>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        initialFocusRef={firstField}
        finalFocusRef={btnRef}
        onClose={onClose}
        preserveScrollBarGap
      >
        <DrawerOverlay />
        <DrawerContent bg="yellow.50" roundedTop={[20]}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading textAlign="center" mt="20px">
              Let's build together!
          </Heading>
          </DrawerHeader>
          <DrawerBody px={["25px", "25px", "220px", "280px"]}>
            <Stack spacing={["20px", "20px", "20px", "20px"]}>
              <Box>
                <FormLabel htmlFor="fullname">Full name</FormLabel>
                <Input
                  border="none"
                  ref={firstField}
                  id="fullname"
                  placeholder="Your full name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="url">Email address</FormLabel>
                <Input
                  border="none"
                  ref={firstField}
                  placeholder="Your email address"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="url">Company</FormLabel>
                <Input
                  border="none"
                  ref={firstField}
                  placeholder="Company name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="desc">What's your moonshot idea?</FormLabel>
                <Textarea border="none" id="desc" placeholder="let me know what you would like to discuss" />
              </Box>
            </Stack>
            <Button my={["20px", "20px", "30px", "30px"]} bg="black" color="white">
              Let's build together &#160; <FaLongArrowAltRight />
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Footer />
    </HomeBox >
  );
}

export default Home;
