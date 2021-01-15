import React from "react";
import { pickBy } from "lodash";

import {
  Stack,
  Heading,
  Wrap,
  WrapItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import StorageContext from "../../storage/StorageContext";
import { List } from "../../fleets/List";
import {
  deleteList,
  updateList,
  addSelectionToList,
  deleteSelectionFromList,
} from "../../storage/actions";
import ShipCard from "./ShipCard";
import ListHeader from "./ListHeader";
import AddMoreItems from "./AddMoreItems";

function ListView({ list }: { list: List }) {
  let storageContext = React.useContext(StorageContext);
  let history = useHistory();

  let selections = list.getAllSelections();

  return (
    <Stack flexGrow={1} spacing={0} direction="row">
      <Stack direction="column" spacing={0} flexGrow={3} flexBasis={0}>
        <ListHeader
          list={list}
          onDelete={() => {
            deleteList(storageContext, { id: list.id });
            history.push("/lists");
          }}
          onSave={(listChanges) => {
            let payload = {
              ...pickBy(listChanges, (value) => value != null),
              id: list.id,
            } as {
              id: string;
              name?: string;
              fleetId?: string;
              pointLimit?: number;
            };
            updateList(storageContext, payload);
          }}
          borderBottom="1px"
          borderColor="gray.300"
          bg="gray.50"
        />
        <Accordion allowMultiple allowToggle flexGrow={1}>
          {selections.map((selection, i) => (
            <ShipCard
              selection={selection}
              borderTopWidth={0}
              borderBottomWidth={i === selections.length - 1 ? 0 : 1}
              onDelete={() => {
                deleteSelectionFromList(storageContext, {
                  id: list.id,
                  selectionId: selection.id,
                });
              }}
            />
          ))}
        </Accordion>
      </Stack>
      {list.dataSet && (
        <AddMoreItems
          flexBasis={0}
          flexGrow={2}
          minWidth={400}
          borderLeft="1px"
          borderColor="gray.300"
          dataSet={list.dataSet}
          onAdd={(selectable) => {
            if (
              selectable.type === "SHIP" ||
              selectable.type === "FLEET COMMANDER"
            ) {
              return addSelectionToList(storageContext, {
                id: list.id,
                selectable,
              });
            } else {
              return null;
            }
          }}
        />
      )}
    </Stack>
  );
}

export default ListView;
