import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { Testimonial } from "../../../components/Testimonial";


export const Testimonials = () => {
    return (
        <Box px="200px" py="70px" bg="yellow.50">
            <Heading fontSize={30} letterSpacing="3px" color="blue.900" mb="50px">The people who have spoken</Heading>
            <Grid templateColumns='repeat(3, 1fr)' gap="60px">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </Grid>
        </Box>
    )
}