import React, { FC, useCallback } from 'react'
import {
  ButtonBoxes,
  RedirectMessage,
  WelcomeBox, 
  WelcomeButton,
  Container,
  WelcomeMessage,
} from './styles'

const Welcome: FC = () => {
  return (
    <Container>
      <WelcomeBox> {/* Agregamos el componente WelcomeBox */}
        <WelcomeMessage>Welcome to Nasa Web-App</WelcomeMessage>
        <RedirectMessage>
          To continue, please Signup. If you already have an account. Please use
          the Login to continue.
        </RedirectMessage>
        <ButtonBoxes>
          <WelcomeButton to="/login">Login</WelcomeButton>
          <WelcomeButton to="/signup">Signup</WelcomeButton>
        </ButtonBoxes>
      </WelcomeBox>
    </Container>
  )
}

export default Welcome