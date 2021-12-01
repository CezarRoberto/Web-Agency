import { Flex, HStack, Img } from "@chakra-ui/react";

import ArrowSvg from "../assents/Arrow.svg";

export const Arrow = () => {
  return (
    <HStack spacing="80px">
      <Flex
        flex={1}
        justify="center"
        position="relative"
        height="60px"
        w="12px"
      >
        <Img src={ArrowSvg} layout="fill" objectFit="cover" />
      </Flex>
      <Flex flex={1} display={["none", "flex"]}></Flex>
    </HStack>
  );
}