import React from 'react'
import SuccessImage from '../../../assets/SuccessDog.svg'
import { Container, ImageContainer, MessageContainer } from './styles'


const Success = () => {
    const searchParams = new URLSearchParams(window.location.search)
    const type = searchParams.get('type') as 'donate' | 'adopt' | 'help'

    const RenderMessageType = (type: string) => {

        if (type === 'donate') {
            return (
                <p>Você fez a diferença na vida de um animal, dando a ele a oportunidade de uma vida feliz e cheia de amor. Obrigado por apoiar a adoção de animais e abrir seu coração e lar para um novo membro da família.</p>
            )
        }
        else if (type === 'adopt') {
            return (
                <>
                    <p>Enviamos sua solicitação para o doador, acompanhe o processo na aba de “Meus Interesses”</p>
                    <p>Obrigado por apoiar a adoção de animais e abrir seu coração e lar para um novo membro da família.</p>
                </>
            )
        }
        else {
            return (
                <p>Seu gesto em buscar ajuda mostra o quanto você valoriza a vida e o bem-estar dos animais. É por pessoas como você que muitos bichinhos têm a chance de encontrar amor, cuidado e um lar seguro. Sua atitude faz a diferença — e é o primeiro passo para uma nova história cheia de esperança.</p>
            )
        }
    }

    return (
        <Container>
            <MessageContainer>
                <h1>Obrigado!</h1>

                {RenderMessageType(type)}
            </MessageContainer>
            <ImageContainer>
                <img src={SuccessImage} alt="" />
            </ImageContainer>
        </Container>
    )
}

export default Success