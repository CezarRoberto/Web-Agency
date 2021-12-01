import { Box, Grid, Heading, StackDivider, VStack } from "@chakra-ui/layout";
import React from "react";
import { ServicesOneCard } from "../../components/ServicesOneCard";
import AviRichards from "../../assents/avi-richards-unsplash.jpg"
import Brooke from "../../assents/brooke-unsplash.jpg"
import MarioGog from "../../assents/mario-gog-unsplash.jpg"
import RyanAncill from "../../assents/ryan-ancill-unsplash.jpg"



export const LandingService = () => {
    return (
        <>
        <Box w="full" py="60px" px="200px" textAlign="center">
        <Heading fontSize={42} letterSpacing="3px" color="blue.900" pb="70px">Our Services</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
            <ServicesOneCard image={AviRichards} title="Improve your lead context with our courses" price="$200" reviewCount={50} rating={4} />
            <ServicesOneCard image={Brooke} title="Increase your create and your social skills" price="$100" reviewCount={30} rating={5} />
            <ServicesOneCard image={MarioGog} title="How to plan your next project and 20 ideas" price="$600" reviewCount={40} rating={3} />
            <ServicesOneCard image={RyanAncill} title="Know how to sort your project and manage your team" price="$300" reviewCount={24} rating={4} />
        </Grid>
        </Box>
        </>
    )
}

