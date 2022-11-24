import styled from "styled-components";
import AboutSection from "../aboutsection";
import FeaturesSection from "../features";
import Footer from "../footer";
import HomeSection from "../homesection";

const HomeContainer = styled.div<{ img?: any }>`
  background: #0b0b0f;
  color: white;
`;

const LandingSection = () => {
  return (
    <HomeContainer>
      <HomeSection />
      <FeaturesSection />
      <AboutSection />
      <Footer/>
    </HomeContainer>
  );
};

export default LandingSection;
