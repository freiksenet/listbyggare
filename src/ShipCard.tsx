import React from "react";

import {
  Box,
  Heading,
  Tag,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  List,
  ListItem,
} from "@chakra-ui/react";

function ShipCard() {
  return (
    <VStack
      borderWidth="1px"
      borderColor="gray.300"
      p={3}
      spacing={0}
      width="xs"
      alignItems="stretch"
    >
      <HStack spacing={0} justifyContent="space-between">
        <Heading as="h6" size="md">
          Strike Cruiser
        </Heading>
        <Box>300pt</Box>
      </HStack>
      <List>
        <ListItem>Bonus Shields +10pt</ListItem>
        <ListItem>Prow Bombardment Cannon +15pt</ListItem>
      </List>
      <Wrap>
        <WrapItem>
          <Tag>Space Marine</Tag>
        </WrapItem>
        <WrapItem>
          <Tag>Capital</Tag>
        </WrapItem>
        <WrapItem>
          <Tag>Cruiser</Tag>
        </WrapItem>
      </Wrap>
    </VStack>
  );
}

export default ShipCard;
