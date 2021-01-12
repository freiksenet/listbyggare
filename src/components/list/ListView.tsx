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
import { deleteList, updateList } from "../../storage/actions";
import ShipCard from "../ShipCard";
import ListHeader from "./ListHeader";

function ListView({ list }: { list: List }) {
  let storageContext = React.useContext(StorageContext);
  let history = useHistory();

  return (
    <Stack flexGrow={1} spacing={0} direction="column">
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
      />
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
