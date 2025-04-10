import React from 'react'
import { AnimalsContainer } from './styles'
import AnimalCard from '../../../../components/AnimalCard'
import { useQuery } from '@tanstack/react-query'
import { GetDonateAnimals } from '../../../../services/queries/donateAnimals'
import SkeletonCardList from '../../../../components/SkeletonCard'

const TabAnimals = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['donated-animals'],
        queryFn: GetDonateAnimals,
    })

    if (isLoading) return <SkeletonCardList />
    if (isError || !data) return <p>Erro ao carregar os animais.</p>

    return (
        <AnimalsContainer>
            {data.map((donation) => (
                <AnimalCard donation={donation} />
            ))}
        </AnimalsContainer>
    )
}

export default TabAnimals