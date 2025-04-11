import React from 'react'
import { AnimalInformation, Container, Image } from './styles'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { AnimalDonation } from '../../services/queries/donateAnimals/interface';
import { calculateAnimalAge } from '../../utils/date';
import { getAnimalImagesUrl } from '../../utils/image';

interface AnimalCardProps {
    donation: AnimalDonation
}


const AnimalCard = ({ donation }: AnimalCardProps) => {

    const navigate = useNavigate();

    return (
        <>
            <Container key={donation.id} onClick={() => navigate(`/animal/${donation.id}`)}>
                <Image src={getAnimalImagesUrl(donation.post?.images)} alt="" />
                <h2> {donation.animal.name} </h2>
                <AnimalInformation>
                    <h3>{calculateAnimalAge(donation.animal.bornDate)}</h3>
                    {donation.animal.sex === 'male' ? <AiOutlineMan color='03D2FF' size={16} />
                        : <AiOutlineWoman color='FF3D03' size={16} />}
                </AnimalInformation>
            </Container>
        </>
    )
}

export default AnimalCard