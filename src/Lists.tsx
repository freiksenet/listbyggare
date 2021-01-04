import React from "react";

import { Box, Button, Heading, VStack, Stack, Flex } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

import ListCard from "./ListCard";
import ListView from "./ListView";

function Lists() {
  const [activeList, setActiveList] = React.useState<number | null>(null);
  const lists = [1, 2, 3, 4, 5];
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      minHeight="calc(100vh - 88px)"
      alignItems="stretch"
      spacing={0}
    >
      <Box
        pt={5}
        flexBasis={{ base: "none", md: "md" }}
        bg="gray.200"
        borderRight="1px"
        borderColor="gray.300"
      >
        <Stack
          px={{ base: 0, md: 5 }}
          mb={5}
          direction={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Heading as="h3" size="md" flexGrow={1}>
            Your lists
          </Heading>
          <Box>
            <Button
              leftIcon={<PlusSquareIcon />}
              variant="solid"
              colorScheme="green"
            >
              Create list
            </Button>
          </Box>
        </Stack>
        <VStack spacing={0} borderTop="1px" borderColor="gray.300">
          {lists.map((list) => (
            <ListCard
              isActive={activeList === list}
              onClick={() => {
                if (activeList === list) {
                  setActiveList(null);
                } else {
                  setActiveList(list);
                }
              }}
            />
          ))}
        </VStack>
      </Box>
      <Flex flexGrow={1} alignItems="stretch" justifyContent="stretch">
        {activeList && <ListView />}
      </Flex>
    </Stack>
  );
}

export default Lists;
