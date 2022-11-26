import styled from "styled-components";
import Typography from "../../utils/typography";

import Link from "next/link";
import Button from "../button";
import { SelectCardType } from "../../types/types";


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


const SelectionCard = ({ Icon, btnText, content }: SelectCardType) => {
  return (
    <CardContainer>
      <Icon size="8rem" color="#B982FF" />
      <Typography font="bodyText" as="p" className="title">
        {content}</Typography>
      <Button className="btn">{btnText}</Button>
    </CardContainer>
  )
}

export default SelectionCard