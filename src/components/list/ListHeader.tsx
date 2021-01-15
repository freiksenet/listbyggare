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
  StackProps,
  FormControlProps,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

import { List } from "../../fleets/List";
import ListDeleteButton from "./ListDeleteButton";

interface IListUpdates {
  name: string | null;
  pointLimit: number | null;
  fleetId: string | null;
}

function ListHeader({
  list,
  onSave,
  onDelete,
  ...props
}: {
  list: List;
  onDelete: () => void;
  onSave: (listUpdates: IListUpdates) => void;
} & StackProps) {
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
        <ListHeaderFormControl
          id="name"
          label="Name"
          text={list.name || "(Untitled)"}
        />
        <ListHeaderFormControl
          id="points"
          label="Points"
          text={`${list.getPoints()} / ${
            list.pointLimit || "(No point limit)"
          }`}
        />
        <ListHeaderFormControl
          id="fleetId"
          label="Fleet"
          text={list.fleet?.name || "(No fleet selected)"}
        />
        <ListHeaderButtons>
          <Button
            leftIcon={<EditIcon />}
            variant="solid"
            colorScheme="blue"
            onClick={() => {
              setEditing(true);
            }}
          >
            Edit
          </Button>
          <ListDeleteButton
            leftIcon={<DeleteIcon />}
            variant="solid"
            colorScheme="red"
            onDelete={() => {
              onDelete();
            }}
          >
            Delete
          </ListDeleteButton>
        </ListHeaderButtons>
      </>
    );
  }
  return (
    <Stack
      direction={{ base: "column", xl: "row" }}
      alignItems={{ base: "flex-start", xl: "center" }}
      px={5}
      pb={{ base: 5, xl: 1 }}
      pt={{ base: 5, xl: 2 }}
      {...props}
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
      <ListHeaderFormControl
        id="name"
        label="Name"
        control={
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
        }
      />
      <ListHeaderFormControl
        id="points"
        label="Point Limit"
        control={
          <>
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
            {!validNumber && (
              <FormErrorMessage>Must be a number</FormErrorMessage>
            )}
          </>
        }
      />
      <ListHeaderFormControl
        id="fleetId"
        label="Fleet"
        control={
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
        }
      />
      <ListHeaderButtons>
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
      </ListHeaderButtons>
    </>
  );
}

function ListHeaderButtons({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      direction={{ base: "row" }}
      flexWrap="wrap"
      flexBasis={{ base: "auto", xl: 230 }}
      flexGrow={0}
      flexShrink={1}
      alignItems="stretch"
      spacing={1}
      justifyContent="flex-end"
    >
      {children}
    </Stack>
  );
}

function ListHeaderFormControl({
  label,
  control,
  text,
  ...props
}: { control?: React.ReactNode; text?: string } & FormControlProps) {
  let contents;
  if (control) {
    contents = control;
  } else if (text) {
    contents = (
      <Box
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        height="2rem"
      >
        {text}
      </Box>
    );
  }
  return (
    <FormControl flexBasis={0} flexGrow={1} flexShrink={1} {...props}>
      <FormLabel mr={0}>{label}</FormLabel>
      {contents}
    </FormControl>
  );
}
