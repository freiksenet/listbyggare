import React from "react";

import {
  Button,
  ButtonProps,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

function ListDeleteButton({
  onDelete,
  ...props
}: { onDelete: () => void } & ButtonProps) {
  let [isOpen, setIsOpen] = React.useState(false);
  let onClose = () => setIsOpen(false);
  let cancelRef = React.useRef(null);

  return (
    <>
      <Button {...props} onClick={() => setIsOpen(true)}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete List
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this list? You can't undo this
              action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onDelete();
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default ListDeleteButton;
