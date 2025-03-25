import React from 'react'
import { Container } from './styles'
import LoggedHeader from '../../components/Header/LoggedHeader'
import PetSharePrivateRoutes from '../../routes/privateRoute'
import Button from '../../components/Button'
import { MdArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const PetShare = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <LoggedHeader />
                {window.location.pathname != '/home' &&
                    <Button
                        rounded
                        icon={<MdArrowBackIos color='white' />}
                        style={{ backgroundColor: '#37383F', width: '12rem' }}
                        onClick={() => navigate(-1)}
                    >Voltar</Button>}
                <PetSharePrivateRoutes />
            </Container>
        </>
    )
}

export default PetShare