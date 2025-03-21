import React from 'react'
import Button from '../../../components/Button'
import { MdArrowBackIos } from 'react-icons/md'
import { AnimalContainer, AnimalInformation, AnimalInformationContainer, Description, Image, Section, SectionDescription } from './styles'
import { AiOutlineMan } from 'react-icons/ai'
import { BsClipboardHeart, BsFillClipboard2HeartFill, BsFillClipboardHeartFill } from 'react-icons/bs'
import { PiHeartbeatLight } from 'react-icons/pi'

const SelectedAnimal = () => {
    return (
        <>

            <AnimalContainer>
                <Image src='https://mlnhdk8ure5f.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://escolapingosdeluz.com.br/wp-content/uploads/2020/04/neve-pet-shop-19.jpg' />
                <Description>
                    <AnimalInformationContainer>
                        <h1>Austin</h1>
                        <AiOutlineMan color='03D2FF' size={25} />
                    </AnimalInformationContainer>
                    <AnimalInformationContainer>
                        <AnimalInformation>
                            <span>Shih Tzu</span>
                            <h3>Raça</h3>
                        </AnimalInformation>
                        <AnimalInformation>
                            <span>Marrom</span>
                            <h3>Cor</h3>
                        </AnimalInformation>
                        <AnimalInformation>
                            <span>Pequeno</span>
                            <h3>Tamanho</h3>
                        </AnimalInformation>
                        <AnimalInformation>
                            <span>1 ano</span>
                            <h3>Idade</h3>
                        </AnimalInformation>
                    </AnimalInformationContainer>
                    <Section>
                        <AnimalInformationContainer>
                            <BsClipboardHeart size={60} />
                            <h1>Descrição</h1>
                        </AnimalInformationContainer>
                        <SectionDescription>
                            <p>Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa </p>
                        </SectionDescription>
                    </Section>

                    <Section>
                        <AnimalInformationContainer>
                            <PiHeartbeatLight size={60} />
                            <h1>Saúde</h1>
                        </AnimalInformationContainer>
                        <SectionDescription>
                            <p>Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa Vacinação Completa </p>
                        </SectionDescription>
                    </Section>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Button rounded icon={<BsFillClipboardHeartFill size={25} />} style={{ width: '80%', backgroundColor: '#5758F1' }} >Tenho interesse</Button>
                    </div>
                </Description>
            </AnimalContainer>
        </>
    )
}

export default SelectedAnimal