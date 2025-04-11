import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { calculateAnimalAge } from '../../../utils/date'
import {
    AnimalContainer,
    AnimalInformation,
    AnimalInformationContainer,
    Description,
    Image,
    ImageGallery,
    MainImageWrapper,
    Section,
    SectionDescription,
    Thumbnail,
} from './styles'
import Button from '../../../components/Button'
import { AiOutlineMan } from 'react-icons/ai'
import { BsClipboardHeart, BsFillClipboardHeartFill } from 'react-icons/bs'
import { PiHeartbeatLight } from 'react-icons/pi'
import { GetDonateAnimalById } from '../../../services/queries/donateAnimals'
import { GetDonateItemById } from '../../../services/queries/donateItems'
import { PostReceivedItem } from '../../../services/queries/receivedItem'
import { useAuth } from '../../../context/AuthContext'
import { getAnimalImage } from '../../../utils/image'
import { getItemCategoryLabel } from '../../../utils/general'

const SelectedItem = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['donate-item', id],
        queryFn: () => GetDonateItemById(Number(id)),
        enabled: !!id,
    })

    const { mutate: postReceivedItem } = useMutation({
        mutationFn: PostReceivedItem,
        onSuccess: () => {
            navigate('/sucess?type=adopt');
        },
        onError: () => {
            alert('Erro ao registrar interesse no item.');
        },
    });

    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        if (data?.post && data?.post?.images?.length > 0) {
            setSelectedImage(getAnimalImage(data.post.images[0]));
        }
    }, [data]);

    if (isLoading) return <p>Carregando...</p>
    if (isError || !data) return <p>Erro ao carregar o animal.</p>

    const handleInterest = () => {
        postReceivedItem({
            donateItemId: data.id,
            userId: Number(user?.id),
            quantity: data.quantity
        });
    };

    const { item } = data

    const images = data.post?.images || [];

    return (
        <AnimalContainer>
            <MainImageWrapper>
                <Image src={selectedImage} alt="Item" />
                <ImageGallery>
                    {images.map((img, index) => {
                        const image = getAnimalImage(img);
                        return (
                            <Thumbnail
                                key={index}
                                src={image}
                                alt={`Miniatura ${index}`}
                                onClick={() => setSelectedImage(image)}
                                isActive={image === selectedImage}
                            />
                        );
                    })}
                </ImageGallery>
            </MainImageWrapper>
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
                        <span>{getItemCategoryLabel(item.category)}</span>
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
                        onClick={handleInterest}
                    >
                        Tenho interesse
                    </Button>
                </div>
            </Description>
        </AnimalContainer>
    )
}

export default SelectedItem
