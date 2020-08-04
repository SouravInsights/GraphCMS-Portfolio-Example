import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    Input,
    FormLabel,
    useDisclosure
} from "@chakra-ui/core";

function ContactUs() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Reach out to us!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef} placeholder="First name" />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder="Last name" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button variantColor="blue" mr={3}>
                            Send
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ContactUs