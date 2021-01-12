import React from "react";

import { Box, Heading, Badge, VStack, Text, HStack } from "@chakra-ui/react";

import { List } from "../../fleets/List";

function ListCard({
  list,
  isActive = false,
}: {
  list: List;
  isActive?: boolean;
}) {
  return (
    <Box
      width="100%"
      borderBottom="1px"
      borderColor="gray.300"
      overflow="hidden"
      p={3}
      bg={isActive ? "white" : "none"}
      cursor="pointer"
    >
      <VStack spacing={1} alignItems="flex-start">
        <Heading as="h4" size="sm">
          {list.name || "(Untitled)"}
        </Heading>
        <Text>{list.fleet ? list.fleet.name : "(No fleet)"}</Text>
        <HStack spacing={1}>
          <Badge>
            {list.pointLimit ? `${list.pointLimit}pts` : "No limit"}
          </Badge>
          <Badge colorScheme="green">Valid</Badge>
        </HStack>
      </VStack>
    </Box>
  );
}

export default ListCard;
