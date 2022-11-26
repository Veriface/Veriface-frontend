import Typography from "../../utils/typography";
import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import Navigation from '../navigation'
import SelectionCard from "../selectioncard";


const PageContainer = styled.div<{ img?: any }>`
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
                <SelectionCard />
                <SelectionCard />
            </div>

        </PageContainer>
    )
}

export default SelectionPage