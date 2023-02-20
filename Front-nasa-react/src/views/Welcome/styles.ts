import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: rgb(255, 255, 255);
  background-color: ${({ theme }) => theme.colors.black};
`


export const WelcomeBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 50%;
  color: red;
  padding: 20px;
  height: 500px;
  width: 500px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const WelcomeMessage = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-style: oblique;
`

export const RedirectMessage = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-style: oblique;
`

export const ButtonBoxes = styled.div`
  display: block;
  margin: 20px;
`

export const WelcomeButton = styled(Link)`
  padding: 10px 20px;
  font-style: oblique;
  background-color: black;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  text-decoration: none;
  margin: 0 10px;
`





