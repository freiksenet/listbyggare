import React, { ReactEventHandler } from "react";

import {
  Box,
  Stack,
  Spacer,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

import { List } from "../../fleets/List";

interface IListUpdates {
  name: string | null;
  pointLimit: number | null;
  fleetId: string | null;
}

function ListHeader({
  list,
  onSave,
  onDelete,
}: {
  list: List;
  onDelete: () => void;
  onSave: (listUpdates: IListUpdates) => void;
}) {
  let [editing, setEditing] = React.useState(false);

  let content;
  if (editing) {
    content = (
      <ListHeaderForm
        list={list}
        onConfirm={(listUpdates: IListUpdates) => {
          onSave(listUpdates);
          setEditing(false);
        }}
        onCancel={() => setEditing(false)}
      />
    );
  } else {
    content = (
      <>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Box height="2rem">{list.name || "(Untitled)"}</Box>
        </FormControl>
        <FormControl id="points">
          <FormLabel>Point Limit</FormLabel>
          <Box height="2rem">{list.pointLimit || "(No point limit)"}</Box>
        </FormControl>
        <FormControl>
          <FormLabel>Fleet</FormLabel>
          <Box height="2rem">{list.fleet?.name || "(No fleet selected)"}</Box>
        </FormControl>
        <Spacer />
        <VStack
          flexBasis={150}
          flexGrow={0}
          flexShrink={0}
          alignItems="stretch"
        >
          <Button
            leftIcon={<EditIcon />}
            variant="solid"
            onClick={() => {
              setEditing(true);
            }}
          >
            Edit
          </Button>
          <Button
            leftIcon={<DeleteIcon />}
            variant="solid"
            colorScheme="red"
            onClick={() => {
              onDelete();
            }}
          >
            Delete
          </Button>
        </VStack>
      </>
    );
  }
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      borderBottom="1px"
      borderColor="gray.100"
      bg="gray.50"
      p={5}
    >
      {content}
    </Stack>
  );
}

export default ListHeader;

function ListHeaderForm({
  list,
  onConfirm,
  onCancel,
}: {
  list: List;
  onConfirm: (listUpdates: IListUpdates) => void;
  onCancel: () => void;
}) {
  let [formState, setFormState] = React.useState({
    name: list.name,
    pointLimit: list.pointLimit,
    fleetId: list.fleet?.id || null,
  });
  let validNumber =
    formState.pointLimit == null || !Number.isNaN(formState.pointLimit);
  return (
    <>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          size="sm"
          type="text"
          value={formState.name || ""}
          onChange={(e) => {
            setFormState({
              ...formState,
              name: e.target.value,
            });
          }}
        />
      </FormControl>
      <FormControl id="points">
        <FormLabel>Point Limit</FormLabel>
        <NumberInput
          value={formState.pointLimit || 0}
          size="sm"
          step={100}
          min={0}
          onChange={(valueAsString: string, valueAsNumber: number) => {
            setFormState({
              ...formState,
              pointLimit: valueAsNumber,
            });
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {!validNumber && <FormErrorMessage>Must be a number</FormErrorMessage>}
      </FormControl>
      <FormControl>
        <FormLabel>Fleet</FormLabel>
        <Select
          size="sm"
          value={formState.fleetId || undefined}
          onChange={(e) => {
            setFormState({
              ...formState,
              fleetId: e.currentTarget.value,
            });
          }}
        >
          {!list.fleet && <option>(Not selected)</option>}
          {(list.dataSet?.getSelectableByType("FLEET") || []).map((fleet) => (
            <option value={fleet.id}>{fleet.name}</option>
          ))}
        </Select>
      </FormControl>
      <Spacer />
      <VStack flexBasis={150} flexGrow={0} flexShrink={0} alignItems="stretch">
        <Button
          leftIcon={<CheckIcon />}
          variant="solid"
          colorScheme="green"
          onClick={() => {
            onConfirm(formState);
          }}
        >
          Confirm
        </Button>
        <Button
          leftIcon={<CloseIcon />}
          variant="solid"
          colorScheme="red"
          onClick={() => {
            onCancel();
          }}
        >
          Cancel
        </Button>
      </VStack>
    </>
  );
}
