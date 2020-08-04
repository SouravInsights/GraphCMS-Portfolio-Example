import { Button, Flex, Heading, Box, Text, List, ListItem, ListIcon } from '@chakra-ui/core';
import React from 'react';
import { motion } from "framer-motion";
import {
    FaFacebook,
    FaTwitter,
    FaDribbble,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';

const ContactButton = motion.custom(Button);

const Footer = () => {
    return (

        <Flex bg="#090909" px={["20px", "40px", "60px", "60px"]} flexDirection="column" align="center" justify="center">
            <Heading fontSize={["2xl", "4xl", "5xl", "6xl"]} mt={["20px", null, null, "38px"]} fontWeight="extrabold" textAlign="center" color="white">
                Build products people love.
                </Heading>
            <ContactButton
                mt={["30px", null, null, "42px"]}
                h={["47px", "74px"]}
                w={["180px", "300px"]}
                bg="#0099FF"
                fontSize={["xl", "2xl", "3xl", "3xl"]}
                fontWeight="bold"
                color="white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                outline="none"
            >
                Let's Talk
                </ContactButton>
            <Box display="flex" my="34px" flexDirection="column" alignItems="center">
                <Box w={['300px', '350px', '400px', '500px']} textAlign="center">
                    <List d="flex" justifyContent="space-around">
                        <ListItem d="inline-block" cursor="pointer">
                            <ListIcon>
                                <FaFacebook color="white" size="1.5em" />
                            </ListIcon>
                        </ListItem>
                        <ListItem d="inline-block" cursor="pointer">
                            <ListIcon>
                                <FaTwitter color="white" size="1.5em" />
                            </ListIcon>
                        </ListItem>
                        <ListItem d="inline-block" cursor="pointer">
                            <ListIcon>
                                <FaDribbble color="white" size="1.5em" />
                            </ListIcon>
                        </ListItem>
                        <ListItem d="inline-block" cursor="pointer">
                            <ListIcon>
                                <FaGithub color="white" size="1.5em" />
                            </ListIcon>
                        </ListItem>
                        <ListItem d="inline-block" cursor="pointer">
                            <ListIcon>
                                <FaLinkedin color="white" size="1.5em" />
                            </ListIcon>
                        </ListItem>
                    </List>
                </Box>
                <Text color="white" textAlign="center" fontWeight="bold" fontSize={['sm', 'sm', 'lg', 'lg']}>
                    Copyright @ 2020 | SouravInsights. <br /> Please don't fork me!
                </Text>
            </Box>
        </Flex >

    )
}

export default Footer