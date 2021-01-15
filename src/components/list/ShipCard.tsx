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
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Flex,
  IconButton,
  Spacer,
  AccordionItemProps,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { Selection } from "../../fleets/List";

function ShipCard({
  selection,
  onDelete,
  ...props
}: { selection: Selection; onDelete: () => void } & AccordionItemProps) {
  return (
    <AccordionItem {...props} position="relative">
      <AccordionButton>
        <HStack>
          <AccordionIcon />
          <Heading as="h6" size="sm">
            {selection.getName()}
          </Heading>
          <Box>{selection.getPoints()}pts</Box>
          <Spacer />
        </HStack>
      </AccordionButton>
      <Flex
        position="absolute"
        right={0}
        top={0}
        py={1}
        pr={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          aria-label="Delete"
          icon={<DeleteIcon />}
          size="sm"
          onClick={() => {
            onDelete();
          }}
        ></IconButton>
      </Flex>
      <AccordionPanel>
        <List>
          <ListItem>Bonus Shields +10pt</ListItem>
          <ListItem>Prow Bombardment Cannon +15pt</ListItem>
        </List>
        <Wrap>
          {selection.getTags().map((tag) => (
            <WrapItem>
              <Tag>{tag}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default ShipCard;
