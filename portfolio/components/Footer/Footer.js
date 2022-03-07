import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import { EmailID, GitHubLink, LinkedinLink } from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer></CompanyContainer>
        <SocialContainer>
          <SocialIcons href={GitHubLink}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={LinkedinLink}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href={EmailID}>
            <AiFillMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
