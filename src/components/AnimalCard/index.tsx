import React from 'react'
import { AnimalInformation, Container, Image } from './styles'
import { AiOutlineMan } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

interface Animal {
    id?: string;
}

const AnimalCard = ({ id }: Animal) => {

    const navigate = useNavigate();



    return (
        <>
            <Container onClick={() => navigate(`/animal`)}>
                <Image src="https://mlnhdk8ure5f.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://escolapingosdeluz.com.br/wp-content/uploads/2020/04/neve-pet-shop-19.jpg" alt="" />
                <h2> Austin </h2>
                <AnimalInformation>
                    <h3> 2 anos</h3>
                    <AiOutlineMan color='03D2FF' size={16} />
                </AnimalInformation>
            </Container>
        </>
    )
}

export default AnimalCard