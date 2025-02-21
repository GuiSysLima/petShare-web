import React from 'react'
import { AllOptions, Hr, HrContainer, LeftOptions, NavigationBar, NavItem, NavItems, RightOptions } from './styles'
import Logo from '../../assets/Logo.png'
import Button from '../Button';
import { FaHeart } from 'react-icons/fa';

const Header = () => {
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

export default Header