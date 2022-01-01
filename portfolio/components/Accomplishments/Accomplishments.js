import React from "react";

import { Section } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

import { AccomplishmentsData } from "../../constants/constants";

const Accomplishments = () => (
  <Section>
    <Boxes>
      <Box>
        <BoxNum>90%</BoxNum>
        <BoxText>Overall average at the University.</BoxText>
      </Box>
      {AccomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
