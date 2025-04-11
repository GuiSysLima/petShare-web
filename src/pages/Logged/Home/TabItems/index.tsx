import React from 'react'
import { ItemsContainer } from './styles'
import AnimalCard from '../../../../components/AnimalCard'
import { useQuery } from '@tanstack/react-query'
import { GetDonateItems } from '../../../../services/queries/donateItems'
import ItemCard from '../../../../components/ItemCard'
import SkeletonCardList from '../../../../components/SkeletonCard'

const TabItems = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['donated-items'],
        queryFn: GetDonateItems,
    })

    if (isLoading) return <SkeletonCardList />
    if (isError || !data) return <p>Erro ao carregar os itens.</p>

    return (
        <ItemsContainer>
            {data.map((donation) => (
                <ItemCard type='item' donation={donation} />
            ))}
        </ItemsContainer>
    )
}

export default TabItems