import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import ManPortrait from "../assents/man-portrait1x1.jpg"

export const Testimonial = () => {
    return (
        <Box w="full" px="40px" py="20px" bg="white">
            <Flex alignItems="center" pb="30px"  >
                <Avatar src={ManPortrait} mr="20px" ></Avatar>
                <Box>
                <Heading fontSize="15px" color="blue.900" mb="3px">Zac Walker</Heading>
                <Text fontSize="12px"> CEO Founder</Text>
                </Box>
            </Flex>
            <Text color="blue.700" fontSize={15}>
                "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
            </Text>
        </Box>
    )
}

