import React from 'react';
import { AiFillAccountBook, AiFillCompass, AiFillFileImage, AiFillFilePdf, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">+91-6289210034</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="ghoshsreeja02@gmail.com">
            contact me @ - ghoshsreeja02gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Download my Resume Here--- </Slogan>
          <SocialContainer>
          <SocialIcons href="https://drive.google.com/file/d/1BXnBqUIHmAvMlH3sXn5nDlVNCCzaSYBC/view?usp=share_link">
            <AiFillFilePdf size="3rem" style={{ color: 'pink'}}/>
          </SocialIcons>
          </SocialContainer>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Sreejavastar">
            <AiFillGithub size="3rem" style={{ color: 'pink'}} />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/sreeja-ghosh-a9522a1b6/">
            <AiFillLinkedin size="3rem" style={{ color: 'pink'}}/>
          </SocialIcons>
          <SocialIcons href="https://twitter.com/bonjour_natur">
            <AiFillTwitterCircle size="3rem" style={{ color: 'pink'}}/>
          </SocialIcons>
          
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  
  );
};

export default Footer;
