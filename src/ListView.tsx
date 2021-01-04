import React from "react";

import {
  Stack,
  Heading,
  HStack,
  Button,
  Box,
  Wrap,
  WrapItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import ShipCard from "./ShipCard";

function ListView() {
  return (
    <Stack flexGrow={1} spacing={0} direction="column">
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        borderBottom="1px"
        borderColor="gray.100"
        bg="gray.50"
        p={5}
      >
        <Heading as="h4" size="md" flexGrow={1}>
          My Magical List
        </Heading>
        <HStack>
          <Button leftIcon={<EditIcon />} variant="solid" colorScheme="blue">
            Edit
          </Button>

          <Button leftIcon={<DeleteIcon />} variant="solid" colorScheme="red">
            Delete
          </Button>
        </HStack>
      </Stack>
      <Accordion allowMultiple allowToggle defaultIndex={[0, 1, 2, 3]}>
        <AccordionItem>
          <AccordionButton>
            <Heading as="h5" size="sm" flex="1" textAlign="left">
              Fleet Commanders
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Wrap flexGrow={1} p={1}>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading as="h5" size="sm" flex="1" textAlign="left">
              Fleet Capital Ships
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Wrap flexGrow={1} p={1}>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading as="h5" size="sm" flex="1" textAlign="left">
              Fleet Escorts
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Wrap flexGrow={1} p={1}>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading as="h5" size="sm" flex="1" textAlign="left">
              Reserves
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Wrap flexGrow={1} p={1}>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
              <WrapItem>
                <ShipCard />
              </WrapItem>
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {/* <Box flexGrow={1}>Validation</Box> */}
    </Stack>
  );
}

export default ListView;
