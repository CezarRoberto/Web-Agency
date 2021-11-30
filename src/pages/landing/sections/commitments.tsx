import { Flex, Img, Box, Heading, VStack, AspectRatio  } from "@chakra-ui/react";
import React from "react";
import Pair10x8 from "../../../assents/pair-programming10x8.jpg"
import { Commitment } from "../../../components/commitment";

export const Commitments = () => {
    return (
        <Flex pl="200px"  background="blue.900" justifyContent="space-between" alignItems="center" >
            <Box py="80px" pr="140px">
                <Heading fontSize={40} letterSpacing="3px" color="whiteAlpha.900" pb="60px">Commited to your <br/> sucess</Heading>
                <VStack alignItems="flex-start" justifyContent="center" maxW="800" color="whiteAlpha.700" spacing="29px">
                    <Commitment text=" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." />
                    <Commitment text=" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything" />
                    <Commitment text=" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." />
                </VStack>
            </Box>
            <AspectRatio ratio={8 / 10} width="520px" >
            <Img src={Pair10x8}  />
            </AspectRatio>
        </Flex>
    )
}