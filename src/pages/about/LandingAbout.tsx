import { Box, Flex, Heading, Img,  Divider, VStack } from "@chakra-ui/react";
import React from "react";
import { Commet } from "../../components/Comment";
import Undraw from "../../assents/undraw_Fans_re_cri3.png"
import { Arrow } from "../../components/Arrow";

export const LandingAbout = () => {
    return(
        <>
        <Box w="full" h="100vh" p="40px" textAlign="center">
            <Heading fontSize={32} letterSpacing={2} color="blue.900" pb="30px">Getting in touch of how we are <br /> and see your culture</Heading>
            <Divider pt="30px" pb="30px" />
            <Flex  backgroundColor="whiteAlpha.900" justifyContent="space-between" alignItems="center" p="40px">
                <VStack alignItems="center" p="20px" >
                <Commet text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsuook a gallspecimen book. It has survived not only five centuries," />
                <Arrow />
                <Commet text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," />
                <Arrow />
                <Commet text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.ince the 150 book. It has survived not only five centuries," />
                </VStack>
                <Img w={1000} h={500} src={Undraw}  />
            </Flex>
        </Box>
        </>
    )
}


