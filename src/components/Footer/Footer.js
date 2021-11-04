import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';
import { FaSpotify } from "react-icons/fa";

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { quotes } from '../../constants/constants';

const { quote, author } = quotes[Math.floor(Math.random()*quotes.length)];

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:022-8888-182">022-8888-182</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:simonlorimerdev@gmail.com">
          simonlorimerdev@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"{quote}" - {author}</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
          <SocialIcons href="https://open.spotify.com/user/12178407794?si=829f01da13454b18" target="_blank">
            <FaSpotify size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
