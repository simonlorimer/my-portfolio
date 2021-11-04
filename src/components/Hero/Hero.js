import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, World! <br />
        Welcome to my space.
      </SectionTitle>
      <SectionText>
      I am a Software Developer at 2degrees and recent graduate from the University of Canterbury. 
      I studied a Bachelor of Science, majoring in Computer Science and minoring in Information Systems. 
      My interests include programming, technology, music and video games. I am constantly looking for new 
      challenges relating to my interests.
      </SectionText>
      <a href="/../../documents/CV_SimonLorimer.pdf" download="Simon Lorimer - CV.pdf" >
        <Button>Download CV</Button>
      </a>

    </LeftSection>
  </Section>
);

export default Hero;