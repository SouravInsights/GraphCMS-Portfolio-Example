import React from "react";
import { motion } from "framer-motion";
import { Button, PseudoBox } from "@chakra-ui/core";
import NextLink from "next/link";

const MotionButton = motion.custom(PseudoBox);
const CTAButton = motion.custom(Button);

export function PrimaryButton({ text, height }) {
  return (
    <MotionButton
      as="button"
      h={height}
      maxWidth="300px"
      borderRadius="22px"
      px="30px"
      outline="none"
      bg="cyan.50"
      fontSize={["lg", "lg", "xl", "xl"]}
      fontWeight="bold"
      color="gray.50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
    >
      {text}
    </MotionButton>
  );
}

export function TextButton({ children, text, key, href }) {
  return (
    <Button
      fontSize={["xl", "xl", "2xl", "2xl"]}
      fontWeight="bold"
      color="cyan.50"
      variant="link"
    >
      <NextLink key={key} href={href}>
        {text}
      </NextLink>
    </Button>
  );
}

export default function ContactButton({ text }) {
  return (
    <CTAButton
      mt={["30px", null, null, "42px"]}
      h={["47px", "74px"]}
      w={["180px", "300px"]}
      bg="white"
      fontSize={["xl", "2xl", "3xl", "3xl"]}
      fontWeight="bold"
      color="gray.50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      outline="none"
      zIndex="1"
    >
      {text}
    </CTAButton>
  );
}
