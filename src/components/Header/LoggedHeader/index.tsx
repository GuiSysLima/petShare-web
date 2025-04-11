import React from 'react'
import Logo from '../../../assets/Logo.png'
import { AdjustContainer, AllOptions, LeftOptions, NavigationBar, NavItem, NavItems, NavLogo, RightOptions, UserCard, UserContainer } from './styles'
import Button from '../../Button'
import { FaHeart, FaUserCircle } from 'react-icons/fa'
import SearchInput from '../../SearchInput'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { useLocation, useNavigate } from 'react-router-dom'
import { BiSolidDonateBlood } from 'react-icons/bi'
import ItemCategoryModal from '../../../pages/Logged/DonateType/ItemCategoryModal'
import { useAuth } from '../../../context/AuthContext'

const LoggedHeader = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isOpenItem, setIsOpenItem] = React.useState(false)
    const [showUserMenu, setShowUserMenu] = React.useState(false)

    const { user, logout } = useAuth()

    const handleSelectItemCategory = (category: string) => {
        setIsOpenItem(false)
        navigate(`/requestitem?category=${category}`)
    }




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
                            <UserContainer onClick={() => setShowUserMenu(prev => !prev)}>
                                <FaUserCircle size={40} />
                                {showUserMenu && (
                                    <UserCard>
                                        <p style={{ margin: 0, fontWeight: 'bold' }}>{user?.name ?? 'Usuário'}</p>
                                        <p style={{ margin: 0 }}>{user?.email ?? 'Email'}</p>
                                        <Button
                                            style={{ marginTop: '0.5rem', backgroundColor: 'black' }}
                                            onClick={logout}
                                            rounded
                                            primary
                                        >
                                            Sair
                                        </Button>
                                    </UserCard>
                                )}
                            </UserContainer>
                        </RightOptions>
                    </AllOptions>
                </NavigationBar>
            </header>
            <ItemCategoryModal isOpen={isOpenItem} onClose={() => setIsOpenItem(false)} onSelect={handleSelectItemCategory} />
        </>
    )
}

export default LoggedHeader