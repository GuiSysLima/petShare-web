import React from 'react'
import Logo from '../../../assets/Logo.png'
import { AdjustContainer, AllOptions, LeftOptions, NavigationBar, NavItem, NavItems, NavLogo, RightOptions } from './styles'
import Button from '../../Button'
import { FaHeart } from 'react-icons/fa'
import SearchInput from '../../SearchInput'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { useLocation, useNavigate } from 'react-router-dom'
import { BiSolidDonateBlood } from 'react-icons/bi'
import ItemCategoryModal from '../../../pages/Logged/DonateType/ItemCategoryModal'

const LoggedHeader = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isOpenItem, setIsOpenItem] = React.useState(false)


    const handleSelectItemCategory = (category: string) => {
        setIsOpenItem(false)
        navigate(`/requestitem?category=${category}`)
    }

    console.log(location.pathname)

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
                                <NavItem to='/ads' active={location.pathname === '/ads'}>Meus Anuncios</NavItem>
                                <NavItem to='#2'>Meus Interesses</NavItem>
                            </NavItems>
                        </LeftOptions>
                        <RightOptions>
                            <Button primary rounded icon={<BiSolidDonateBlood />} style={{ backgroundColor: '#F5BC0B' }} onClick={() => setIsOpenItem(true)} >Solicitar</Button>
                            <Button primary rounded icon={<FaHeart />} onClick={() => navigate('/donatetype')} >Doar</Button>
                        </RightOptions>
                    </AllOptions>
                </NavigationBar>
            </header>
            <ItemCategoryModal isOpen={isOpenItem} onClose={() => setIsOpenItem(false)} onSelect={handleSelectItemCategory} />
        </>
    )
}

export default LoggedHeader