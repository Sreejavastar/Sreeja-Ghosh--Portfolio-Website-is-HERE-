import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"pink", marginBottom:'20px'}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink >Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>    
      <li>
        <Link href="#about">
          <NavLink>My Skills</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Sreejavastar">
          <AiFillGithub size="3rem" style={{ color: 'pink'}} />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/sreeja-ghosh-a9522a1b6/">
          <AiFillLinkedin size="3rem" style={{ color: 'pink'}} />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/bonjour_natur">
          <AiFillTwitterCircle size="3rem" style={{ color: 'pink'}}/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
