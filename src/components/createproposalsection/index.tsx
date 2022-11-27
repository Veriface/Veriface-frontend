import Navigation from "../navigation";
import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import Typography from "../../utils/typography";
import { mediaQueries } from "../../utils/themes/mediaQueries";
import Button from "../button";

const PageContainer = styled.div`
  background: #0b0b0f;
  color: white;
  height: 100vh;
  overflow-y: scroll;
`;

const PageContent = styled.div`

.proposal-form{
display: flex;
flex-direction: column;
max-width: 75%;
margin: 5rem auto;
}`;

const ProposalSection = () => {
  return (
    <PageContainer>
      <Navigation />
      <PageContent>
        <form className="proposal-form">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required value="" />
          <label htmlFor="txnId1">Transaction Id</label>
          <input type="text" name="txnId1" required value="" />
          <label htmlFor="txnId2">Transaction Id</label>
          <input type="text" name="txnId2" value="" />
          <label htmlFor="txnId2">Transaction Id</label>
          <input type="text" name="txnId2" value="" />
          <label htmlFor="reason">Reason(s) for blacklist</label>
          <input type="text" name="reason" required value="" />

          <Button>SUMBIT PROPOSAL</Button>
        </form>
      </PageContent>
    </PageContainer>
  );
};

export default ProposalSection;
