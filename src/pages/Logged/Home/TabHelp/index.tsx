import React from 'react'
import { ItemsContainer } from './styles'
import AnimalCard from '../../../../components/AnimalCard'
import { useQuery } from '@tanstack/react-query'
import { GetDonateItems } from '../../../../services/queries/donateItems'
import ItemCard from '../../../../components/ItemCard'
import { GetRequestItems } from '../../../../services/queries/requestItems'

const TabHelp = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['request-item'],
        queryFn: GetRequestItems,
    })

    if (isLoading) return <p>Carregando itens...</p>
    if (isError || !data) return <p>Erro ao carregar os itens.</p>

    return (
        <ItemsContainer>
            {data.map((donation) => (
                <ItemCard item={donation.item} />
            ))}
        </ItemsContainer>
    )
}

export default TabHelp