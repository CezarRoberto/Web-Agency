
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";


export const Commet = ({text}: {text: string}) => {
    return (
        <Flex alignItems="center">
             <Text fontSize={20} p="30px">{text}</Text>
        </Flex>
    )}