import React from "react";
import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
} from "../Accomplishments/AccomplishmentsStyles";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { AboutDescription, TimeLineData } from "../../constants/constants";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>{AboutDescription}</SectionText>
      <Boxes>
        {TimeLineData.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.year}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

export default Timeline;
