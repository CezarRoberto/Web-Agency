import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { WeWork } from "../../../components/WeWork";
import ManOnPhone from "../../../assents/man-on-phone7x5.jpg"
import ManOnLaptop from "../../../assents/man-on-laptop7x5.jpg"
import WomanAtBoard from "../../../assents/woman-at-board7x5.jpg"


export const HowWeWork = () => {
    return (
            <Box w="full" py="60px" px="200px">
                <Heading fontSize={42} letterSpacing="3px" color="blue.900" pb="50px">How do we Work?</Heading>
                <HStack w="full"  alignItems="flex-start" spacing="80px"> 
                    <WeWork imagePath={ManOnPhone} title="User centered design" subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" />
                    <WeWork imagePath={ManOnLaptop} title="Agile Development" subtitle="or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be" />
                    <WeWork imagePath={WomanAtBoard} title="Continous Integration" subtitle=" Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." />
                </HStack>
            </Box>
    )
}