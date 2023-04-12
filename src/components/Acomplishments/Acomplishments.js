import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: ' ◈  Google Women Techmakers Ambassador'},
  { number: 2, text: ' ◈  Harvard WeAmplify Scholar 2022', },
  { number: 3, text: ' ◈  The Harvard College Project for Asian and International Relations Scholar', },
  { number: 4, text: ' ◈  2 X Topped in NPTEL with AIR top 5 percentile in the domains: Operating Systems and Python', },
  { number: 5, text: ' ◈  Top 0.2% streak holder at Leetcode - world ranking', },
  { number: 6, text: ' ◈  Atendee at Stanford King Centre', },
  { number: 7, text: ' ◈  E-Yantra IIT Bombay Round 3 Qualifier.', },
  { number: 8, text: ' ◈  My Coding Journey:-   3⭐@Leetcode| 3⭐Codechef | 5⭐HackerRank| 800+ problems', },
  { number: 9, text: ' ◈  Qualified for Codechef SnackDown Round 2. -: (April, 2021)', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {/* <BoxNum>{`${card.number}+`}</BoxNum> */}
          <BoxText style={{color:'pink'}}>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
