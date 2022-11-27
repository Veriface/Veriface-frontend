import Navigation from "../navigation";
import styled from "styled-components";
import { mediaQueries } from "../../utils/themes/mediaQueries";
import Button from "../button";
import FormInput from "../forminput";

const PageContainer = styled.div`
  background: #0b0b0f;
  color: white;
  height: 100vh;
  overflow-y: scroll;
`;

const PageContent = styled.div`
  .proposal-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 70%;
    margin: 2rem auto;
    background: #1a1b23;
    border-radius: 1rem;
    padding: 4rem 5rem;

    ${mediaQueries.phone} {
      max-width: 85%;
      gap: 4rem;
      margin: 8rem auto;
    }
  }

  .btn {
    align-self: center;
  }
`;

const ProposalSection = () => {
  return (
    <PageContainer>
      <Navigation />
      <PageContent>
        <form className="proposal-form">
          <FormInput label="Name" htmlFor="name" type="text" value="" />
          <FormInput
            label="Transaction Id"
            htmlFor="name"
            type="text"
            value=""
          />
          <FormInput
            label="Transaction Id"
            htmlFor="name"
            type="text"
            value=""
          />
          <FormInput
            label="Reason"
            htmlFor="reason"
            type="text"
            value=""
          />
          <Button className="btn">Submit Proposal</Button>
        </form>
      </PageContent>
    </PageContainer>
  );
};

export default ProposalSection;
