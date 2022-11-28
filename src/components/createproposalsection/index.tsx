import { useState } from "react"; 
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
    margin: 1.5rem auto;
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
    margin-top: 1rem;
  }
`;

const defaultFormFields = {
  name: "",
  txnId1: "",
  txnId2: "",
  reason: "",
};

const ProposalSection = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, txnId1, txnId2, reason } = formFields;
  
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = event.target;

     setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
    <PageContainer>
      <Navigation />
      <PageContent>
        <form className="proposal-form" onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            htmlFor="name"
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <FormInput
            label="Transaction Id"
            htmlFor="name"
            type="text"
            name="txnId1"
            value={txnId1}
            onChange={handleChange}
          />
          <FormInput
            label="Transaction Id"
            htmlFor="name"
            type="text"
            name="txnId2"
            value={txnId2}
            onChange={handleChange}
          />
          <FormInput
            label="Reason"
            htmlFor="reason"
            type="text"
            name="reason"
            value={reason}
            onChange={handleChange}
          />
          <Button type="submit" className="btn">
            Submit Proposal
          </Button>
        </form>
      </PageContent>
    </PageContainer>
  );
};

export default ProposalSection;
