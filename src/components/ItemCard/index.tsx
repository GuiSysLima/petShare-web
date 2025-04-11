import React from 'react'
import { ItemInformation, Container, Image } from './styles'
import { useNavigate } from 'react-router-dom';
import { Item, ItemDonation } from '../../services/queries/donateItems/interface';

interface ItemCardProps {
    donation: ItemDonation
    type: 'item' | 'request'
}

const ItemCard = ({ type, donation }: ItemCardProps) => {

    const navigate = useNavigate();

    console.log('DONATION', donation)

    return (
        <>
            <Container key={donation.id} onClick={() => navigate(`/${type}/${donation.id}`)}>
                <Image src="https://mlnhdk8ure5f.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://escolapingosdeluz.com.br/wp-content/uploads/2020/04/neve-pet-shop-19.jpg" alt="" />
                <h2> {donation.item.name} </h2>
                <ItemInformation>
                    <h3>{donation.item.category}</h3>
                    <h2>{donation.item.brand}</h2>
                </ItemInformation>
            </Container>
        </>
    )
}

export default ItemCard