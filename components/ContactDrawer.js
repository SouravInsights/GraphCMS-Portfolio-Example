import React, { useEffect } from "react";
import {
  Button,
  Heading,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  Stack,
  FormLabel,
  Textarea,
  useDisclosure,
} from "@chakra-ui/core";
import { FaLongArrowAltRight } from "react-icons/fa";

function ContactDrawer() {
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
              <Textarea
                border="none"
                id="desc"
                placeholder="let me know what you would like to discuss"
              />
            </Box>
          </Stack>
          <Button
            my={["20px", "20px", "30px", "30px"]}
            bg="black"
            color="white"
          >
            Let's build together &#160; <FaLongArrowAltRight />
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default ContactDrawer;
