import React from 'react'
import { Container } from './styles'
import LoggedHeader from '../../components/Header/LoggedHeader'
import PetSharePrivateRoutes from '../../routes/privateRoute'
import Button from '../../components/Button'
import { MdArrowBackIos } from 'react-icons/md'

const PetShare = () => {

    console.log(window.location.pathname)

    return (
        <>
            <Container>
                <LoggedHeader />
                {window.location.pathname != '/home' &&
                    <Button
                        rounded
                        icon={<MdArrowBackIos color='white' />}
                        style={{ backgroundColor: '#37383F', width: '12rem' }}
                        onClick={() => window.history.back()}
                    >Voltar</Button>}
                <PetSharePrivateRoutes />
            </Container>
        </>
    )
}

export default PetShare