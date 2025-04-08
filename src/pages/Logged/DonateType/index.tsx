import React from 'react'
import Button from '../../../components/Button'
import { MdArrowBackIos, MdPets } from 'react-icons/md'
import { Type, TypesContainer } from './styles'
import { FaBoxOpen } from 'react-icons/fa'
import { BsFillBox2HeartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import AnimalCategoryModal from './AnimalCategoryModal'
import ItemCategoryModal from './ItemCategoryModal'

const DonateType = () => {

    const navigate = useNavigate();

    const [isOpenAnimal, setIsOpenAnimal] = React.useState(false)
    const [isOpenItem, setIsOpenItem] = React.useState(false)

    const handleSelectAnimalCategory = (category: string) => {
        setIsOpenAnimal(false)
        navigate(`/donateanimal?category=${category}`)
    }

    const handleSelectItemCategory = (category: string) => {
        setIsOpenItem(false)
        navigate(`/donateitem?category=${category}`)
    }

    return (
        <>
            <TypesContainer>
                <Type onClick={() => setIsOpenItem(true)}>
                    <BsFillBox2HeartFill size={120} />
                    <h1>Itens</h1>
                </Type>
                <Type onClick={() => setIsOpenAnimal(true)}>
                    <MdPets size={120} />
                    <h1>Animais</h1>
                </Type>
            </TypesContainer>
            <AnimalCategoryModal isOpen={isOpenAnimal} onClose={() => setIsOpenAnimal(false)} onSelect={handleSelectAnimalCategory} />
            <ItemCategoryModal isOpen={isOpenItem} onClose={() => setIsOpenItem(false)} onSelect={handleSelectItemCategory} />
        </>
    )
}

export default DonateType