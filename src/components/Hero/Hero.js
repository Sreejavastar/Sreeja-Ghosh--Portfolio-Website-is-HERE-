import React from 'react';
// import cv from '../../styles/GlobalComponents/cv.pdf'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
   <Section row nopadding>
      <LeftSection>
        <SectionTitle main center style={{fontWeight:'100', fontFamily: 'inherit'}}>
          Welcome To <br />
          <div style={{color:'pink', fontWeight: '300'}}>Sreeja's</div> Portfolio
        </SectionTitle>
        <SectionText style={{fontSize: '1.5rem'}}>
        I am a Web Developer and an AI enthusiast. A self learner who strives to make technology to make this world, not only a better place but also a more colorful one.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>

  </div>
);

export default Hero;