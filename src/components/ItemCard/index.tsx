import React from 'react'
import { ItemInformation, Container, Image } from './styles'
import { useNavigate } from 'react-router-dom';
import { Item, ItemDonation } from '../../services/queries/donateItems/interface';
import { getAnimalImagesUrl } from '../../utils/image';
import { getItemCategoryLabel } from '../../utils/general';

interface ItemCardProps {
    donation: ItemDonation
    type: 'item' | 'request'
}

const ItemCard = ({ type, donation }: ItemCardProps) => {

    const navigate = useNavigate();

    return (
        <>
            <Container key={donation.id} onClick={() => navigate(`/${type}/${donation.id}`)}>
                <Image src={getAnimalImagesUrl(donation.post?.images)} alt="" />
                <h2> {donation.item.name} </h2>
                <ItemInformation>
                    <h3>{getItemCategoryLabel(donation.item.category)}</h3>
                    <h2>{donation.item.brand}</h2>
                </ItemInformation>
            </Container>
        </>
    )
}

export default ItemCard