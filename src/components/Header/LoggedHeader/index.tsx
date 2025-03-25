import React from 'react'
import Logo from '../../../assets/Logo.png'
import { AdjustContainer, AllOptions, LeftOptions, NavigationBar, NavItem, NavItems, NavLogo, RightOptions } from './styles'
import Button from '../../Button'
import { FaHeart } from 'react-icons/fa'
import SearchInput from '../../SearchInput'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

const LoggedHeader = () => {

    const navigate = useNavigate();

    return (
        <>
            <header>
                <NavigationBar>
                    <AllOptions>
                        <LeftOptions>
                            <NavItems>
                                <NavLogo onClick={() => navigate('/home')} src={Logo} alt="Logo" />
                                <SearchInput placeholder='Search' width='336px' />
                                <AdjustContainer>
                                    <HiOutlineAdjustmentsHorizontal size={25} />
                                </AdjustContainer>
                                <NavItem to='#1'>Meus Anuncios</NavItem>
                                <NavItem to='#2'>Meus Interesses</NavItem>
                            </NavItems>
                        </LeftOptions>
                        <RightOptions>
                            <Button primary rounded icon={<FaHeart />} onClick={() => navigate('/donatetype')} >Doar</Button>
                        </RightOptions>
                    </AllOptions>
                </NavigationBar>
            </header>
        </>
    )
}

export default LoggedHeader