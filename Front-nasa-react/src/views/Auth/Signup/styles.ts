import styled, { css } from "styled-components";
import { Form as DefaultForm } from 'formik'


export const Container = styled.div`
width: 100vw;
font-style: oblique;
height: 100vh;
align-items: center;
font-style: oblique;
display: flex;
justify-content: center;
color: red;
background-color: ${({ theme }) => theme.colors.black};
`;

export const Form = styled(DefaultForm)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.colors.white100};
border-radius: 50%; 
height: 25rem;
width: 25rem;
margin: 6.25rem auto 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  height: 5rem; 
  background-color:rgb(129, 12, 12);
  color:black;
  width: 15rem; 
  margin-top: 16px;
`;


export const Input = styled.input<{ $hasError?: boolean }>`
  padding:10px;
  color:black;
  font-style: oblique;
  margin:10px;
  border-radius: 5px;
  ${({ $hasError, theme }) =>
    $hasError ? theme.colors.danger : theme.colors.grey900};
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      color: ${theme.colors.danger};
    `}
`;
export const Label = styled.label`
  color: black;
  font-size: 14px; 
  font-style: oblique;
  font-weight: bold;
  font: small-caps 100%/200% serif;
  margin: 16px;
`;

export const FormButton = styled.button`
  border-radius: 5px;
  cursor:pointer;
  margin-top: 40px; 
  padding:5px;
`;

export const FormMessage = styled.p`
    align-items: center;
display: flex;
font-style: oblique;
justify-content: center;
`

export const Error = styled.span`
  display: block;
  color: red;
  font-size: 12px;
  font-style: oblique;
  font-weight: 500;
  margin-top: 8px;
`;


