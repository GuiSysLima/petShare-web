import React from 'react'
import Button from '../../../components/Button'
import { Container, DropzoneContainer, FormContainer } from './style'
import Dropzone from '../../../components/Dropzone'
import { MdArrowBackIos } from 'react-icons/md'
import Input from '../../../components/Input'
import TextArea from '../../../components/TextArea'
import { BiSolidDonateHeart } from 'react-icons/bi'

const DonateItem = () => {
    return (
        <>
            <Container>
                <DropzoneContainer>
                    <Dropzone />
                </DropzoneContainer>
                <FormContainer>
                    <Input label='Nome' placeholder='Nome do Item' />
                    <Input label='Categoria' placeholder='Categoria do item' />
                    <Input label='Marca' placeholder='Idade do Item' />
                    <Input label='Quantidade' placeholder='Quantidade do Item' />
                    <TextArea label='Descrição' placeholder='Descrição do Item' />
                    <Button rounded primary icon={<BiSolidDonateHeart size={25} />} style={{ width: '100%' }} >Confirmar Doação</Button>
                </FormContainer>
            </Container>
        </>
    )
}

export default DonateItem