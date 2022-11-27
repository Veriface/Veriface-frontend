import styled from "styled-components";
import Typography from "../../utils/typography";
import { FormInputType } from "../../types/types";

const FormFieldWrapper = styled.div`
  label {
    color: #b982ff;

    &::after {
      content: " *";
      color: red;
    }
  }

  input {
    background: none;
    width: 100%;
    margin-top: 1rem;
    border: 1px solid #b982ff;
    border-radius: 5px;
    color: white;
    padding: 1rem;

    &:focus {
      outline: none;
    }
  }
`;
const FormInput = ({ label, htmlFor, type }: FormInputType) => {
  return (
    <FormFieldWrapper>
      <Typography font="bodyText" as="p" className="">
        <label htmlFor={htmlFor}>{label}</label>
      </Typography>
      <Typography font="bodyText" as="p" className="">
        <input type={type} name={label} required value="" />
      </Typography>
    </FormFieldWrapper>
  );
};

export default FormInput;
