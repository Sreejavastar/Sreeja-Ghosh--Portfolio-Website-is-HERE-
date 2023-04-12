import React from 'react';
import { DiFirebase, DiReact, DiZend,DiCoda} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design. I have also deployed several AI and Machine Learning models
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" style={{color:'pink'}} />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            ৹ React.js<br/>
            ৹ HTML<br/>
            ৹ CSS<br/>
            ৹ JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" style={{color:'pink'}}/>
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            ৹ Node<br/> 
            Databases:-<br/>
            ৹ MySQL<br/>
            ৹ MongoDB

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" style={{color:'pink'}}/>
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like:-<br/>
            ৹ Figma<br/>
            ৹ Adobe Express

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCoda size="3rem" style={{color:'pink'}}/>
        </picture>
        <ListContainer>
          <ListTitle>Artificial Intelligence</ListTitle>
          <ListParagraph>
            Deployed <br />
            several libraries and used platforms like:-<br/>
            ৹ Google Colab<br/>
            ৹ Kaggle
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
  </div>
);

export default Technologies;
