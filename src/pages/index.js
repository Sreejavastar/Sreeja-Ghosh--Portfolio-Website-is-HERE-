import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <img src='/images/me.jpg' style={{height: '25rem', width:'auto', borderRadius:'50px', display:'block', marginLeft:'auto', marginRight:'auto',filter:'drop-shadow(pink 1px 1px 6px);'}}/>
      <br/>
      <Timeline />
      <br/><br/> <br/> <br/>
      <Projects />
      <br/><br/> <br/> <br/>
      <Technologies />
      <br/><br/> <br/> <br/>
      <Acomplishments />
    </Layout>
  );
};

export default Home;
