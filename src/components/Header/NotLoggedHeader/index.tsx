import React from 'react'
import Logo from '../../../assets/Logo.png'
import { FaHeart } from 'react-icons/fa';
import Button from '../../Button';
import { AllOptions, Hr, HrContainer, LeftOptions, NavigationBar, NavItem, NavItems, RightOptions } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const NotLoggedHeader = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const isOnRegisterPage = location.pathname === '/register'

    return (
        <>
            <header>
                <NavigationBar>
                    <AllOptions>
                        <LeftOptions>
                            <NavItems>
                                <img src={Logo} alt="" />
                                <NavItem to='#1'>
                                    PetShare
                                </NavItem>
                                <NavItem onClick={() => navigate(isOnRegisterPage ? '/login' : '/register')} to='#1'>Quero doar</NavItem>
                                <NavItem onClick={() => navigate(isOnRegisterPage ? '/login' : '/register')} to='#1'>Quero adotar</NavItem>
                                <NavItem onClick={() => navigate(isOnRegisterPage ? '/login' : '/register')} to='#1'>Sobre nós</NavItem>
                            </NavItems>
                        </LeftOptions>
                        <RightOptions>
                            <Button onClick={() => navigate(isOnRegisterPage ? '/login' : '/register')} primary rounded icon={<FaHeart />}>{isOnRegisterPage ? 'Login' : 'Cadastre-se'}</Button>
                        </RightOptions>
                    </AllOptions>
                </NavigationBar>
            </header>
            <HrContainer>
                <Hr />
            </HrContainer>
        </>
    );
}

export default NotLoggedHeader;