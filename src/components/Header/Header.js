import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { FaSpotify } from "react-icons/fa";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <AiOutlineUser size="3rem" /> <Span>Simon Lorimer</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li style={{ paddingLeft: "20px", paddingRight: "10px" }}>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li style={{ paddingLeft: "10px", paddingRight: "20px" }}>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/simonlorimer/" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/simonlorimer/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/lorimersimon/" target="_blank">
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/simonlorimer/" target="_blank">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://open.spotify.com/user/12178407794?si=820e466226f2474e" target="_blank">
        <FaSpotify size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
