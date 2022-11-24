import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import FeatureCard from "../featurecard";
import { FaWallet } from "react-icons/fa";
import { mediaQueries } from "../../utils/themes/mediaQueries";


const Features = [
  {
    id: 1,
    Icon: FaWallet,
    title: "Connect Wallet",
    content:
      "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform.",
  },
  {
    id: 2,
    Icon: FaWallet,
    title: "Verify Address",
    content:
      "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform.",
  },
  {
    id: 3,
    Icon: FaWallet,
    title: "Propose a Blacklist",
    content:
      "Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform.",
  },
];

const SectionContainer = styled(Flex)`
  padding: 15rem 10rem;
  gap: 3rem;

  ${mediaQueries.tabport} {
    padding: 15rem 3rem;
  }

  ${mediaQueries.phone} {
    flex-direction: column;
    padding: 10rem;
    gap: 5rem;
  }

  ${mediaQueries.smallerphone} {
    padding: 8rem 3rem;
  }
`;

const FeaturesSection = () => {
  return (
    <SectionContainer>
      {Features.map((item) => (
        <FeatureCard key={item.id} {...item} />
      ))}
    </SectionContainer>
  );
};

export default FeaturesSection;
