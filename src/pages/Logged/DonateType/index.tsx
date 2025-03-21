import React from 'react'
import Button from '../../../components/Button'
import { MdArrowBackIos, MdPets } from 'react-icons/md'
import { Type, TypesContainer } from './styles'
import { FaBoxOpen } from 'react-icons/fa'
import { BsFillBox2HeartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const DonateType = () => {

    const navigate = useNavigate();

    return (
        <>
            <TypesContainer>
                <Type onClick={() => navigate('/donateitem')}>
                    <BsFillBox2HeartFill size={120} />
                    <h1>Acessórios</h1>
                </Type>
                <Type onClick={() => navigate('/donateanimal')}>
                    <MdPets size={120} />
                    <h1>Animais</h1>
                </Type>
            </TypesContainer>
        </>
    )
}

export default DonateType