import styled from "styled-components";
import Typography from "../../utils/typography";
import Button from "../button";
import Flex from "../../utils/flex/flex";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const NavContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 13rem;

  ${mediaQueries.phone} {
    padding: 2.5rem 6rem;
  }

  ${mediaQueries.smallerphone} {
    padding: 3rem;
  }

  .logo {
    font-family: "Anurati";
    font-size: 3rem;

    ${mediaQueries.smallerphone} {
      font-size: 2.5rem;
    }
  }
`;

const Navigation = () => {
    return (
      <NavContainer>
        <Typography font="h3" as="h3" className="logo">
         VERIFACE
        </Typography>
        <Button>Launch App</Button>
      </NavContainer>
    );
};

export default Navigation;
