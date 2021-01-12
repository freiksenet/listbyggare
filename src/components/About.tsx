import React from "react";

import {
  Text,
  Heading,
  Container,
  Divider,
  Button,
  Flex,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { Link as RRLink } from "react-router-dom";

function About() {
  return (
    <Flex py={4} justifyContent="left" direction="column">
      <Container mx={0}>
        <Text>
          Battlefleet Bauhaus is a fleet builder for Battlefleet Gothic: XR.
        </Text>
        <HStack spacing={2} mt={4}>
          <Button as={RRLink} colorScheme="blue" to="/lists">
            Go to list builder
          </Button>
          <Button
            as="a"
            href="https://github.com/freiksenet/listbyggare"
            target="blank"
          >
            Github
          </Button>
        </HStack>
      </Container>
      <Divider my={5} />
      <Container mx={0}>
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
      </Container>
    </Flex>
  );
}

export default About;
