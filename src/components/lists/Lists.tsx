import React from "react";

import { Box, Button, Heading, VStack, Stack, Flex } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

import {
  Route,
  Link,
  useRouteMatch,
  Switch,
  useHistory,
} from "react-router-dom";

import { List } from "../../fleets/List";
import StorageContext from "../../storage/StorageContext";
import { createList } from "../../storage/actions";

import ListCard from "./ListCard";
import ListPage from "../list/ListRoute";

function Lists({ lists }: { lists: Array<List> }) {
  let storageContext = React.useContext(StorageContext);
  let history = useHistory();
  let match = useRouteMatch<{ listId?: string }>("/lists/:listId");
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      minHeight="calc(100vh - 88px)"
      alignItems="stretch"
      spacing={0}
    >
      <Box
        pt={5}
        flexBasis={{ base: "none", xl: "md" }}
        maxWidth={{ base: "none", md: "md" }}
        flexShrink={0}
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
              onClick={() => {
                let list = createList(storageContext);
                history.push(`/lists/${list.id}/edit`);
              }}
            >
              Create list
            </Button>
          </Box>
        </Stack>
        <VStack
          spacing={0}
          borderTop="1px"
          borderColor="gray.300"
          alignItems="stretch"
        >
          {lists.map((list) => {
            let isActive = list.id === match?.params?.listId;
            return (
              <Link
                to={isActive ? `/lists` : `/lists/${list.id}`}
                key={list.id}
              >
                <ListCard isActive={isActive} list={list} />
              </Link>
            );
          })}
        </VStack>
      </Box>
      <Flex flexGrow={1} alignItems="stretch" justifyContent="stretch">
        <ListPage lists={lists} />
      </Flex>
    </Stack>
  );
}

export default Lists;
