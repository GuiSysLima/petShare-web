import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { calculateAnimalAge } from '../../../utils/date'
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
import { PiHeartbeatLight } from 'react-icons/pi'
import { GetDonateAnimalById } from '../../../services/queries/donateAnimals'
import { PostAdoptionAnimal } from '../../../services/queries/adoptionAnimals'

const SelectedAnimal = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['donate-animal', id],
        queryFn: () => GetDonateAnimalById(Number(id)),
        enabled: !!id,
    })

    const { mutate: postAdoptionAnimal } = useMutation({
        mutationFn: PostAdoptionAnimal,
        onSuccess: () => {
            navigate('/success?type=adopt')
        },
        onError: () => {
            alert("Erro ao registrar interesse.");
        },
    });


    if (isLoading) return <p>Carregando...</p>
    if (isError || !data) return <p>Erro ao carregar o animal.</p>

    const handleInterest = () => {
        postAdoptionAnimal({
            donateAnimalId: data.id,
            userId: 1
        });
    };

    const { animal } = data

    return (
        <AnimalContainer>
            <Image src="https://mlnhdk8ure5f.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://escolapingosdeluz.com.br/wp-content/uploads/2020/04/neve-pet-shop-19.jpg" />
            <Description>
                <AnimalInformationContainer>
                    <h1>{animal.name}</h1>
                    <AiOutlineMan color="03D2FF" size={25} />
                </AnimalInformationContainer>
                <AnimalInformationContainer>
                    <AnimalInformation>
                        <span>{animal.race}</span>
                        <h3>Raça</h3>
                    </AnimalInformation>
                    <AnimalInformation>
                        <span>{animal.category}</span>
                        <h3>Categoria</h3>
                    </AnimalInformation>
                    <AnimalInformation>
                        <span>{animal.size}</span>
                        <h3>Tamanho</h3>
                    </AnimalInformation>
                    <AnimalInformation>
                        <span>{calculateAnimalAge(animal.bornDate)}</span>
                        <h3>Idade</h3>
                    </AnimalInformation>
                </AnimalInformationContainer>

                <Section>
                    <AnimalInformationContainer>
                        <BsClipboardHeart size={60} />
                        <h1>Descrição</h1>
                    </AnimalInformationContainer>
                    <SectionDescription>
                        <p>{animal.observations}</p>
                    </SectionDescription>
                </Section>

                <Section>
                    <AnimalInformationContainer>
                        <PiHeartbeatLight size={60} />
                        <h1>Saúde</h1>
                    </AnimalInformationContainer>
                    <SectionDescription>
                        <p>{animal.medicalNotes}</p>
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

export default SelectedAnimal
