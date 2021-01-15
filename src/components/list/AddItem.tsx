import React from "react";

import {
  Badge,
  Heading,
  HStack,
  IconButton,
  StackProps,
} from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

import { Selectable } from "../../fleets/Data";
import { Selection } from "../../fleets/List";

function AddItem({
  selectable,
  onAdd,
  ...props
}: {
  selectable: Selectable;
  onAdd: (selectable: Selectable) => Selection | null;
} & StackProps) {
  return (
    <HStack position="relative" {...props}>
      <IconButton
        aria-label="Add to list"
        icon={<SmallAddIcon />}
        size="sm"
        onClick={() => onAdd(selectable)}
      ></IconButton>

      <Heading as="h6" size="sm" lineHeight="1.5">
        {selectable.name}
      </Heading>
      {(selectable.type === "SHIP" ||
        selectable.type === "FLEET COMMANDER") && (
        <Badge>{selectable.points}pts</Badge>
      )}
    </HStack>
  );
}

export default AddItem;
