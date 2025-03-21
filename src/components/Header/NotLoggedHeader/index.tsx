import React from 'react'
import Logo from '../../../assets/Logo.png'
import { FaHeart } from 'react-icons/fa';
import Button from '../../Button';
import { AllOptions, Hr, HrContainer, LeftOptions, NavigationBar, NavItem, NavItems, RightOptions } from './styles';

const NotLoggedHeader = () => {
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
                                <NavItem to='#1'>Quero doar</NavItem>
                                <NavItem to='#1'>Quero adotar</NavItem>
                                <NavItem to='#1'>Sobre nós</NavItem>
                            </NavItems>
                        </LeftOptions>
                        <RightOptions>
                            <Button primary rounded icon={<FaHeart />}>Cadastre-se</Button>
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