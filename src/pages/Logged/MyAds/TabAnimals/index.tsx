import React from 'react'
import { Animal, AnimalsContainer, CardInformation, Image, RightContainer } from './styles'
import AnimalCard from '../../../../components/AnimalCard'
import { useQuery } from '@tanstack/react-query'
import { GetDonateAnimalByDonorId, GetDonateAnimals } from '../../../../services/queries/donateAnimals'
import Button from '../../../../components/Button'
import { calculateAnimalAge } from '../../../../utils/date'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'

const TabDonorAnimals = () => {

    const userId = 1

    const { data, isLoading, isError } = useQuery({
        queryKey: ['donate-animal-donor', userId],
        queryFn: () => GetDonateAnimalByDonorId(Number(userId)),
        enabled: !!userId,
    })

    if (isLoading) return <p>Carregando animais...</p>
    if (isError || !data) return <p>Erro ao carregar os animais.</p>

    return (
        <AnimalsContainer>
            {data.map((donation) => (
                <Animal>
                    <RightContainer>
                        <Image src="https://mlnhdk8ure5f.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://escolapingosdeluz.com.br/wp-content/uploads/2020/04/neve-pet-shop-19.jpg" />
                        <CardInformation>
                            <h1>{donation.animal.name}</h1>
                            <p>{donation.animal.category}</p>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <p>{calculateAnimalAge(donation.animal.bornDate)}</p>
                                {donation.animal.sex === 'male' ? <AiOutlineMan color='03D2FF' size={16} />
                                    : <AiOutlineWoman color='FF3D03' size={16} />}
                            </div>
                            <p>Publicado em: {donation.date}</p>
                        </CardInformation>
                    </RightContainer>
                    <div>
                        <Button primary>EDITAR</Button>
                    </div>
                </Animal>
            ))}
        </AnimalsContainer>

    )
}

export default TabDonorAnimals