import styled from "styled-components";
import Typography from "../../utils/typography";
import { MdOutlineCreateNewFolder } from "react-icons/md"
import Link from "next/link";
import Button from "../button";


const CardContainer = styled.div`
  background: #1a1b23;
  border-radius: 2.5rem;
  padding: 5rem 2.5rem;
  display: grid;
  place-items: center;
  gap: 3rem;
  
  .title {
    text-align: center;
  }
  
  .btn {
    background: none;
    border: 1px solid #B982FF;
    color: #B982FF;
  }
  
  `


const SelectionCard = () => {
  return (
    <CardContainer>
      <MdOutlineCreateNewFolder size="8rem" color="#B982FF" />
      <Typography font="bodyText" as="p" className="title">
        Lorem ipsum dolor sit adipisicing elit. Illo minus sequi voluptates tempore laborum eveniet, accusantium.      </Typography>
      <Button className="btn">Create Proposal</Button>
    </CardContainer>
  )
}

export default SelectionCard