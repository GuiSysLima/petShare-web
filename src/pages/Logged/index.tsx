import React from 'react'
import { Container } from './styles'
import LoggedHeader from '../../components/Header/LoggedHeader'
import PetSharePrivateRoutes from '../../routes/privateRoute'
import Button from '../../components/Button'
import { MdArrowBackIos } from 'react-icons/md'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const PetShare = () => {
    const navigate = useNavigate();

    const { isAuthenticated, isAuthChecked } = useAuth();

    if (!isAuthChecked) return null;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

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