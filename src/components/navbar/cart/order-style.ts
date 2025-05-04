import styled from "styled-components";

export const FormContainer = styled.div`
  border: 1px solid #ccc;
  padding: 2rem;
  max-width: 700px;
  margin: auto;
  font-family: sans-serif;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const EmailDisplay = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const CountryBox = styled.div`
  border: 2px solid #3478f6;
  padding: 1rem;
  margin-bottom: 1rem;
  label {
    font-size: 0.9rem;
    color: #666;
  }
  div {
    font-weight: bold;
    margin-top: 0.3rem;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border: 1px solid #ccc;
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledCheckbox = styled.input`
  margin-right: 0.5rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const StyledLabel = styled.label`
  font-size: 0.9rem;
`;

export const ButtonPrimary = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: var(--Accent-Color, #5F9999);
  color: white;
  border: none;
  cursor: pointer;
  :hover{
    fill: var(--Accent-Color, #5F9999);
  }
`;

export const ButtonSecondary = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  border: none;
  color: #333;
  cursor: pointer;
`;

