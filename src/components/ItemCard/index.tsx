import React from 'react'
import { ItemInformation, Container, Image } from './styles'
import { useNavigate } from 'react-router-dom';
import { Item, ItemDonation } from '../../services/queries/donateItems/interface';

interface ItemCardProps {
    item: Item
}

const ItemCard = ({ item }: ItemCardProps) => {

    const navigate = useNavigate();

    return (
        <>
            <Container key={item.id} onClick={() => navigate(`/item/${item.id}`)}>
                <Image src="https://mlnhdk8ure5f.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://escolapingosdeluz.com.br/wp-content/uploads/2020/04/neve-pet-shop-19.jpg" alt="" />
                <h2> {item.name} </h2>
                <ItemInformation>
                    <h3>{item.category}</h3>
                    <h2>{item.brand}</h2>
                </ItemInformation>
            </Container>
        </>
    )
}

export default ItemCard