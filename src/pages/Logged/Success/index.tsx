import React from 'react'
import SuccessImage from '../../../assets/SuccessDog.svg'
import { Container, ImageContainer, MessageContainer } from './styles'


const Success = () => {
    const searchParams = new URLSearchParams(window.location.search)
    const type = searchParams.get('type') as 'donate' | 'adopt'

    return (
        <Container>
            <MessageContainer>
                <h1>Obrigado!</h1>
                {type === 'donate' ? <p>Você fez a diferença na vida de um animal, dando a ele a oportunidade de uma vida feliz e cheia de amor. Obrigado por apoiar a adoção de animais e abrir seu coração e lar para um novo membro da família.</p>
                    : (
                        <>
                            <p>Enviamos sua solicitação para o doador, acompanhe o processo na aba de “Meus Interesses”</p>
                            <p>Obrigado por apoiar a adoção de animais e abrir seu coração e lar para um novo membro da família.</p>
                        </>
                    )}
            </MessageContainer>
            <ImageContainer>
                <img src={SuccessImage} alt="" />
            </ImageContainer>
        </Container>
    )
}

export default Success