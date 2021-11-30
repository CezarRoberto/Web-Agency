import { Img } from "@chakra-ui/image";
import {  AspectRatio, Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";

export const WeWork = ({imagePath, title, subtitle}: {imagePath: string, title: string, subtitle: string}) => {
    return (
        <Box w="full">
            <AspectRatio ratio={5/7} >
                <Img src={imagePath} pb="60px"  />
            </AspectRatio>
        <Heading fontSize={18} color="blue.900" pb="20px">{title}</Heading>
        <Text color="blue.700" fontSize="14px">{subtitle}</Text>
        </Box>
    )}