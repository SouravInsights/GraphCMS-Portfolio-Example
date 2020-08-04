import Head from 'next/head';
import { Button, Flex, Image, Heading, Box, Text } from '@chakra-ui/core';
import Footer from 'components/Footer'

const about = () => {
    return (
        <>
            <Box>
                <Head>
                    <title>About - SouravInsights</title>
                </Head>

                <Heading fontSize={["3xl", "3xl", "4xl", "5xl"]} fontWeight="extrabold" color="white">Opps! I'm building this.
                
                <svg xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 97 103" fill="#ffffff">
                    <title>hand</title>
                    <g id="hand_lines" data-name="hand lines" >
                        <path
                            class="left-big"
                            d="M38.9,2.9,38.1,0A46.36,46.36,0,0,0,9.7,21.9l2.6,1.5A43.54,43.54,0,0,1,38.9,2.9Z"
                            transform="translate(-1)"
                        ></path>
                        <path
                            class="left-small"
                            d="M17.4,26.3,20,27.8A34.73,34.73,0,0,1,41.2,11.5l-.8-2.9A37.28,37.28,0,0,0,17.4,26.3Z"
                            transform="translate(-1)"
                        ></path>
                        <path
                            class="right-small"
                            d="M87,35.3l-2.9.8a35.35,35.35,0,0,1-3.4,26.6l2.6,1.5A38.41,38.41,0,0,0,87,35.3Z"
                            transform="translate(-1)"
                        ></path>
                        <path
                            class="right-big"
                            d="M95.5,33l-2.9.8a43.59,43.59,0,0,1-4.3,33.3l2.6,1.5A47.16,47.16,0,0,0,95.5,33Z"
                            transform="translate(-1)"
                        ></path>
                    </g>
                    <path
                        id="hand"
                        d="M70.6,47.1a8.67,8.67,0,0,0-3.1-1l.6-1a8.38,8.38,0,0,0,.8-6.2A8.12,8.12,0,0,0,65.1,34a8.85,8.85,0,0,0-3-1l.5-.9a8.38,8.38,0,0,0,.8-6.2A8.12,8.12,0,0,0,59.6,21a8.38,8.38,0,0,0-6.2-.8A8.12,8.12,0,0,0,48.5,24l-.7,1a12.06,12.06,0,0,0-2.4-2.1A8.18,8.18,0,0,0,34.3,26L18.4,54.2c0,.1-.1.2-.4.2s-.3-.2-.3-.3V42.5a8.16,8.16,0,0,0-2.5-5.9,8.24,8.24,0,0,0-5.9-2.4H9.2A8.37,8.37,0,0,0,.9,42.6V73.4A29.79,29.79,0,0,0,56.6,88.3L73.3,58.7C75.8,54.4,74.5,49.3,70.6,47.1Zm-1.5,9L52.3,85.7a24.86,24.86,0,0,1-33.8,9.4A24.58,24.58,0,0,1,6,73.4V42.5a3.42,3.42,0,0,1,3.3-3.4,3.1,3.1,0,0,1,2.4,1,3.49,3.49,0,0,1,1,2.4V54.2a5.44,5.44,0,0,0,4.1,5,5.3,5.3,0,0,0,5.9-2.6L38.6,28.4a3.17,3.17,0,0,1,1.9-1.5,3.32,3.32,0,0,1,2.4.3,3.58,3.58,0,0,1,1.5,1.9,3.39,3.39,0,0,1-.3,2.4l-13,23.2,4.4,2.5L52.7,26.7a3.17,3.17,0,0,1,1.9-1.5,3.32,3.32,0,0,1,2.4.3,3.17,3.17,0,0,1,1.5,1.9,3.32,3.32,0,0,1-.3,2.4L40.9,60.2l4.4,2.5L58.4,39.6a3.17,3.17,0,0,1,1.9-1.5,3.32,3.32,0,0,1,2.4.3,3.17,3.17,0,0,1,1.5,1.9,3.32,3.32,0,0,1-.3,2.4l-4.5,7.9h0L48.9,69l4.4,2.5L63.6,53a3.89,3.89,0,0,1,2.2-1.8,2.87,2.87,0,0,1,2.4.2A3.61,3.61,0,0,1,69.1,56.1Z"
                        transform="translate(-1)"
                    ></path>
                </svg>
                
                </Heading>


                <Text my="8" width={["90%", null, null, "80%"]} fontSize={["md", "lg", "xl", "2xl"]} color="white" fontWeight="normal" lineHeight="shorter" letterSpacing="wide">
                  Text coming soon!
                </Text>
            </Box>
            <Footer />
        </>
    )
}

export default about 