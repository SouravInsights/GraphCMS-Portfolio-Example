import { PseudoBox } from '@chakra-ui/core/'
import { motion } from "framer-motion";

const MotionButton = motion.custom(PseudoBox);

const ViewButton = () => {
    return (

        <MotionButton
            as="button"
            height="65px"
            borderRadius="22px"
            px="30px"
            outline="none"
            bg="rgba(163, 247, 106, 0.4)"
            fontSize="2xl"
            fontWeight="bold"
            color="green.50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
        >
            View Project
        </MotionButton>
    )
}

export default ViewButton