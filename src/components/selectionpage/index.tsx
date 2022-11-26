import styled from "styled-components";
import Navigation from "../navigation";
import SelectionCard from "../selectioncard";
import { MdOutlineCreateNewFolder, MdPersonSearch } from "react-icons/md";

const PageContainer = styled.div`
  background: #0b0b0f;
  color: white;
  height: 100vh;

  .cards {
    display: flex;
    gap: 10rem;
    padding: 8rem 20rem;
  }
`;
const SelectionPage = () => {
  return (
    <PageContainer>
      <Navigation />
      <div className="cards">
        <SelectionCard
          Icon={MdOutlineCreateNewFolder}
          btnText="Create Proposal"
          content="Lorem ipsum dolor sit adipisicing elit. Illo minus sequi voluptates tempore laborum eveniet, accusantium."
          href="/check"
        />
        <SelectionCard
          Icon={MdPersonSearch}
          btnText="Search Address"
          content="Lorem ipsum dolor sit adipisicing elit. Illo minus sequi voluptates tempore laborum eveniet, accusantium."
          href="/check"
        />
      </div>
    </PageContainer>
  );
};

export default SelectionPage;
