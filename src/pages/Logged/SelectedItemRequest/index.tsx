import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
    AnimalContainer,
    AnimalInformation,
    AnimalInformationContainer,
    Description,
    Image,
    Section,
    SectionDescription,
} from './styles'
import Button from '../../../components/Button'
import { AiOutlineMan } from 'react-icons/ai'
import { BsClipboardHeart, BsFillClipboardHeartFill } from 'react-icons/bs'
import { GetRequestItemById } from '../../../services/queries/requestItems'
import DonateQuantityModal from './DonateQuantityModal'
import { PostReceivedItem } from '../../../services/queries/receivedItem'
import { useAuth } from '../../../context/AuthContext'

const SelectedItemRequest = () => {
    const { id } = useParams()
    const { user } = useAuth()

    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['request-item', id],
        queryFn: () => GetRequestItemById(Number(id)),
        enabled: !!id,
    })

    const { mutate: postReceivedItem } = useMutation({
        mutationFn: PostReceivedItem,
        onSuccess: () => {
            navigate('/sucess?type=item');
        },
        onError: () => {
            alert('Erro ao registrar doação.');
        },
    });

    if (isLoading) return <p>Carregando...</p>
    if (isError || !data) return <p>Erro ao carregar o animal.</p>

    const handleConfirmDonation = (quantity: number) => {
        postReceivedItem({
            quantity,
            userId: Number(user?.id),
            requestItemId: data.id,
        });
    };

    const { item } = data

    return (
        <AnimalContainer>
            <Image src="https://mlnhdk8ure5f.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://escolapingosdeluz.com.br/wp-content/uploads/2020/04/neve-pet-shop-19.jpg" />
            <Description>
                <AnimalInformationContainer>
                    <h1>{item.name}</h1>
                    <AiOutlineMan color="03D2FF" size={25} />
                </AnimalInformationContainer>
                <AnimalInformationContainer>
                    <AnimalInformation>
                        <span>{item.brand}</span>
                        <h3>Marca</h3>
                    </AnimalInformation>
                    <AnimalInformation>
                        <span>{item.category}</span>
                        <h3>Categoria</h3>
                    </AnimalInformation>
                </AnimalInformationContainer>

                <Section>
                    <AnimalInformationContainer>
                        <BsClipboardHeart size={60} />
                        <h1>Descrição</h1>
                    </AnimalInformationContainer>
                    <SectionDescription>
                        <p>{item.description}</p>
                    </SectionDescription>
                </Section>

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Button
                        rounded
                        icon={<BsFillClipboardHeartFill size={25} />}
                        style={{ width: '80%', backgroundColor: '#5758F1' }}
                        onClick={() => setModalOpen(true)}
                    >
                        Quero ajudar
                    </Button>
                </div>
                <DonateQuantityModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onConfirm={handleConfirmDonation}
                />
            </Description>
        </AnimalContainer>
    )
}

export default SelectedItemRequest
