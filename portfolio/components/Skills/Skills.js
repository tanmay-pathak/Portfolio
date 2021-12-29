import React from "react";
import { DiCode, DiDatabase, DiGit, DiReact } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle
} from "./SkillsStyles";
import {
  BackEnd,
  FrontEnd,
  Languages,
  SkillsDescription,
  Tools
} from "../../constants/constants";

const Skills = () => (
  <Section id="skills">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>{SkillsDescription}</SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>{Languages}</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>{FrontEnd}</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>{BackEnd}</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>{Tools}</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
