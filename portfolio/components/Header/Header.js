import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import {
  EmailID,
  GitHubLink,
  HomeTitle,
  LinkedinLink
} from "../../constants/constants";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "15px"
          }}
        >
          <HiUser size="3rem" />
          <Span>{HomeTitle}</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technology" passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href={GitHubLink}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={LinkedinLink}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href={EmailID}>
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
