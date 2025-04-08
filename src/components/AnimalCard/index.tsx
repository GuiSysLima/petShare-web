import React from 'react'
import { AnimalInformation, Container, Image } from './styles'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { AnimalDonation } from '../../services/queries/donateAnimals/interface';
import { calculateAnimalAge } from '../../utils/date';


const AnimalCard = ({ animal, id }: AnimalDonation) => {

    const navigate = useNavigate();

    return (
        <>
            <Container key={id} onClick={() => navigate(`/animal/${id}`)}>
                <Image src="https://mlnhdk8ure5f.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://escolapingosdeluz.com.br/wp-content/uploads/2020/04/neve-pet-shop-19.jpg" alt="" />
                <h2> {animal.name} </h2>
                <AnimalInformation>
                    <h3>{calculateAnimalAge(animal.bornDate)}</h3>
                    {animal.sex === 'male' ? <AiOutlineMan color='03D2FF' size={16} />
                        : <AiOutlineWoman color='FF3D03' size={16} />}
                </AnimalInformation>
            </Container>
        </>
    )
}

export default AnimalCard