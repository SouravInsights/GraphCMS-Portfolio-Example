import {
  Button,
  Flex,
  Heading,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/styles.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaDribbble,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactButton = motion.custom(Button);

const Footer = () => {
  return (
    <Flex
      bg="white"
      px={["30px", "30px", "80px", "140px"]}
      py={["20px", "20px", "20px", "20px"]}
      justifyContent={["none", "none", "space-between", "space-between"]}
      flexDirection={["column", "column", "row", "row"]}
      className={styles.footer}
    >
      <Box zIndex="1">
        <Text
          fontSize="18px"
          fontWeight="medium"
          letterSpacing="0.1em"
          color="gray.50"
        >
          THANKS FOR STOPPING BY
        </Text>
        <Heading fontSize="2xl" color="gray.50" fontWeight="extrabold">
          Hope you're doing great!
        </Heading>
      </Box>
      <Box zIndex="1">
        <Box w={["300px", "350px", "400px", "400px"]} textAlign="center">
          <List d="flex" justifyContent="space-around">
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaFacebook color="#181818" size="1.5em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaTwitter color="#181818" size="1.5em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaDribbble color="#181818" size="1.5em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaGithub color="#181818" size="1.5em" />
              </ListIcon>
            </ListItem>
            <ListItem d="inline-block" cursor="pointer">
              <ListIcon>
                <FaLinkedin color="#181818" size="1.5em" />
              </ListIcon>
            </ListItem>
          </List>
        </Box>
        <Text
          textAlign="center"
          fontWeight="bold"
          fontSize={["sm", "sm", "sm", "sm"]}
          color="gray.50"
        >
          Copyright @ 2020 | SouravInsights. Please don't fork me!
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
