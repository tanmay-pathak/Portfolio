import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { HomeDescription, HomeHeader } from "../../constants/constants";

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        {HomeHeader}
      </SectionTitle>
      <SectionText>{HomeDescription}</SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
