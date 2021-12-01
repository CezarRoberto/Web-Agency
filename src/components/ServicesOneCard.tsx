import { StarIcon } from "@chakra-ui/icons";
import { AspectRatio, Badge, Box, Img } from "@chakra-ui/react";
import React from "react";


export const ServicesOneCard = ({ image, title, price, reviewCount, rating }: { image: string, title: string, price: string, reviewCount: number, rating: number }) => {
    return (<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
         <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
           <AspectRatio ratio={5/5}>
      <Img src={image}/>
            </AspectRatio>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {title}
        </Box>

        <Box>
          {price}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
    </Box>
    )}