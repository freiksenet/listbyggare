import React from "react";

import {
  Flex,
  Heading,
  VisuallyHidden,
  Box,
  Text,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Link as RRLink } from "react-router-dom";

function Header() {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      minHeight={"88px"}
    >
      <Flex align="center" mr={{ base: 1, md: 10 }} height={10}>
        <Heading
          as="h1"
          size="md"
          fontWeight={400}
          letterSpacing={1}
          // fontFamily={'"Staatliches", serif'}
        >
          <Link as={RRLink} to="/" display={{ base: "none", sm: "inline" }}>
            Battlefleet Bauhaus
          </Link>
          <Link as={RRLink} to="/" display={{ base: "inline", sm: "none" }}>
            BFGBauhaus
          </Link>
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <VisuallyHidden>Hamburger Menu</VisuallyHidden>
        <HamburgerIcon w={6} h={6} />
      </Box>

      <Stack
        display={{ base: show ? "flex" : "none", md: "flex" }}
        direction={{ base: "column", md: "row" }}
        width={{ base: "full", md: "auto" }}
        flexGrow={1}
      >
        <MenuItem>
          <Link as={RRLink} to="/lists">
            Lists
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={RRLink} to="/">
            About
          </Link>
        </MenuItem>
      </Stack>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          Sign in
        </Button>
      </Box>
    </Flex>
  );
}

function MenuItem({ children }: { children: React.ReactNode }) {
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  );
}

export default Header;
