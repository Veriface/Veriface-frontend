import Navigation from "../navigation";
import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import Typography from "../../utils/typography";
import { BsSearch } from "react-icons/bs";
import { mediaQueries } from "../../utils/themes/mediaQueries";
import connectContract from "../../connectContract";
import { useState } from "react";

const PageContainer = styled.div`
  background: #0b0b0f;
  color: white;
  height: 100vh;
  overflow-y: scroll;
`;

const PageContent = styled.div`
  padding: 3rem 20%;

  ${mediaQueries.tabport} {
    padding: 3rem 10%;
  }

  .title {
    color: #b982ff;
  }

  .col-1 {
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .col-1 > * {
    text-align: center;
  }

  .searchFieldWrapper {
    position: relative;
    max-width: 80rem;
    width: 100%;
  }

  .searchInput {
    background: none;
    border: 1px solid #b982ff;
    border-radius: 5px;
    width: 100%;
    padding: 1.6rem;
    padding-right: 5.8rem;
    height: 100%;
    color: white;
    font-size: 1.5rem;
  }

  .searchInput::placeholder {
    color: grey;
  }

  .searchIcon {
    position: absolute;
    right: 1.8rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .blacklist-card {
    background: #b982ff;
    border-radius: 5px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
    max-width: 80rem;
    margin-top: 3rem;

    ${mediaQueries.phone} {
      padding: 5rem 0;
    }
  }

  .innerText {
    color: red;
  }
`;

const CheckBlackListPage = () => {
  const [address, setAddress] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const blacklistContract = connectContract();

  const handleCheck = async (e: any) => {
    e.preventDefault();
    setAddress("");

    if (blacklistContract) {
      const result = await blacklistContract.retrieveAddressStatus(address);
      console.log(result)
    }
  };

  console.log(address)
  return (
    <PageContainer>
      <Navigation />
      <PageContent>
        <Flex className="col-1">
          <Typography font="h2" as="h3" className="title">
            BLACKLIST CHECKER
          </Typography>
          <Typography font="bodyText" as="h3">
            Check IMEI/SN find out All Info about your Device, including
            Blacklist, SimLock, Model, Warranty for FREE. All Devices supported,
            including Apple, iPhone, Huawei and Samsung.
          </Typography>
        </Flex>
        <div className="searchFieldWrapper">
          <input
            type="text"
            value={address}
            onChange={handleChange}
            className="searchInput"
            placeholder="Search Contract Address"
          />
          <BsSearch size="2rem" color="#b982ff" className="searchIcon" onClick={handleCheck} />
        </div>

        <div className="blacklist-card">
          <Typography font="bodyText" as="h3">
            Address: 0921897835zbndjqhd
          </Typography>
          <Typography font="bodyText" as="h3">
            Status: <span className="innerText">BLACKLISTED!</span>
          </Typography>
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default CheckBlackListPage;
