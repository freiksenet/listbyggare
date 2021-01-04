import React from "react";

import {
  Text,
  Heading,
  Container,
  Divider,
  Button,
  Box,
  HStack,
} from "@chakra-ui/react";

import { Link as RRLink } from "react-router-dom";

function About() {
  return (
    <Container>
      <Box>
        <Heading as="h1">Battlefleet Bauhaus</Heading>
        <Text>
          Battlefleet Bauhaus is fleet builder for Battlefleet Gothic: XR.
        </Text>
        <HStack spacing={2} mt={5}>
          <Button as={RRLink} colorScheme="blue" to="/lists">
            Go to list builder
          </Button>
          <Button as="a" href="https://github.com/freiksenet" target="blank">
            Github
          </Button>
        </HStack>
      </Box>
      <Divider my={5} />
      <Box>
        <Heading as="h2" size="md">
          Copyright disclaimer
        </Heading>
        <Text>
          GW, Games Workshop, Citadel, Black Library, Forge World, Warhammer,
          the Twin-tailed Comet logo, Warhammer 40,000, the ‘Aquila’
          Double-headed Eagle logo, Space Marine, 40K, 40,000, Warhammer Age of
          Sigmar, Battletome, Stormcast Eternals, White Dwarf, Blood Bowl,
          Necromunda, Space Hulk, Battlefleet Gothic, Dreadfleet, Mordheim,
          Inquisitor, Warmaster, Epic, Gorkamorka, and all associated logos,
          illustrations, images, names, creatures, races, vehicles, locations,
          weapons, characters, and the distinctive likenesses thereof, are
          either ® or TM, and/or © Games Workshop Limited, variably registered
          around the world. All Rights Reserved.
        </Text>
      </Box>
    </Container>
  );
}

export default About;
