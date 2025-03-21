import React from 'react'
import Logo from '../../../assets/Logo.png'
import { AdjustContainer, AllOptions, LeftOptions, NavigationBar, NavItem, NavItems, RightOptions } from './styles'
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
                                <img src={Logo} alt="" />
                                <SearchInput placeholder='Search' width='336px' />
                                <AdjustContainer>
                                    <HiOutlineAdjustmentsHorizontal size={25} />
                                </AdjustContainer>
                                <NavItem to='#1'>Meus Anuncios</NavItem>
                                <NavItem to='#1'>Chat</NavItem>
                                <NavItem to='#1'>Notificações</NavItem>
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