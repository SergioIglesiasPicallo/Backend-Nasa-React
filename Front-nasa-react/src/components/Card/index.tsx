import { FC } from 'react'
import { Container, Description, Image } from './styles'
import {Props} from './types'

const Card:FC<Props> = ({
    nasaId,
    sol,
    image
    
}) => {

  

    return(
        <Container>
            <Description>Id: {nasaId}</Description>
            <Description>Sol: {sol}</Description>
            <Image src={image}/>
        </Container>
    )
}

export default Card