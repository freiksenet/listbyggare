import React from "react";

import { Box, Heading, Badge, VStack, Text, HStack } from "@chakra-ui/react";

function ListCard({
  isActive = false,
  onClick,
}: {
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <Box
      width="100%"
      borderBottom="1px"
      borderColor="gray.300"
      overflow="hidden"
      p={3}
      bg={isActive ? "white" : "none"}
      onClick={onClick}
      cursor="pointer"
    >
      <VStack spacing={1} alignItems="flex-start">
        <Heading as="h4" size="sm">
          My magical list
        </Heading>
        <Text>Space Marines Domination</Text>
        <HStack spacing={1}>
          <Badge>1500pt</Badge>
          <Badge colorScheme="green">Valid</Badge>
          <Badge colorScheme="red">Invalid</Badge>
        </HStack>
      </VStack>
    </Box>
  );
}

export default ListCard;
