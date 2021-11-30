import { Box, Heading, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";


export const Footer = () => {
    return (<Box w="full" bg="gray.900" px="200px" py="180px" textAlign="center" >
        <Heading
            fontSize={42}
            color="whiteAlpha.900"
            letterSpacing={4}
            textAlign="center"
            pb="90px">
            Want your business to grow? <br /> We should talk.
        </Heading>
        <Link color="whiteAlpha.800">
            Get in touch
            <Icon as={FiArrowUpRight} ml="10px" h={5} w={5} />
        </Link>
    </Box>

    )
}