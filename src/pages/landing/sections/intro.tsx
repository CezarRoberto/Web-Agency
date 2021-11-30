import { AspectRatio, Box, Flex, Heading, Icon, Img, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import group16x9 from '../../../assents/group16x9.jpg';

export const Intro = () => {
    return (
        <Box w="full" bg="blue.900" px="200px" py="60px" mb="120px">
            <Flex justifyContent="space-between" alignItems="center" pb="80px">
                <Heading fontSize={54} letterSpacing="3px" color="whiteAlpha.900">
                    People who care <br /> about your growth 
                </Heading>
                <Box maxW="300px">
                    <Text color="whiteAlpha.700" pb="20px"> 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptat.  
                    </Text>
                    <Link color="whiteAlpha.800">
                        Explore more
                        <Icon as={FiArrowUpRight} ml="10px" h={5} w={5} />
                    </Link>
                </Box>
            </Flex>
            <AspectRatio w="full" ratio={16 /9} mb="-200px">
                <Img src={group16x9} mb="60px"/>
            </AspectRatio>
        </Box>
    )
}