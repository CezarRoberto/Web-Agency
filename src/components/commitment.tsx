import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {BiCheckDouble} from "react-icons/bi"


export const Commitment = ({text}: {text: string}) => {
    return (
        <Flex alignItems="center">
             <Icon w={7} h={7} as={BiCheckDouble} mr="10px" />
             <Text>{text}</Text>
        </Flex>
    )
}