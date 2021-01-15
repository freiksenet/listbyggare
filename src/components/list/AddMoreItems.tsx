import React from "react";

import { Heading, ListItem, Stack, StackProps, List } from "@chakra-ui/react";

import { DataSet, Selectable } from "../../fleets/Data";
import { Selection } from "../../fleets/List";
import AddItem from "./AddItem";

function AddMoreItems({
  dataSet,
  onAdd,
  ...props
}: {
  dataSet: DataSet;
  onAdd: (selectable: Selectable) => Selection | null;
} & StackProps) {
  return (
    <Stack {...props} flexGrow={1} spacing={0}>
      <Heading
        height="77px"
        padding={5}
        size="md"
        borderBottom="1px"
        borderColor="gray.300"
      >
        Add more ships
      </Heading>
      <List>
        {dataSet
          .getSelectableByTypes(["SHIP", "FLEET COMMANDER", "DETACHMENT"])
          .map((selectable) => (
            <ListItem pl={2} pr={4} py={1} borderBottomWidth={1}>
              <AddItem selectable={selectable} onAdd={onAdd} />
            </ListItem>
          ))}
      </List>
    </Stack>
  );
}

export default AddMoreItems;
