import React from 'react'
import Button from '../../../components/Button'
import { Container, DropzoneContainer, FormContainer } from './style'
import Dropzone from '../../../components/Dropzone'
import { MdArrowBackIos } from 'react-icons/md'
import Input from '../../../components/Input'
import TextArea from '../../../components/TextArea'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { FormProvider, useForm } from 'react-hook-form'

const DonateItem = () => {

    const methods = useForm()

    const onSubmit = (data: any) => {

        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <Container>
                <DropzoneContainer>
                    <Dropzone name='image' />
                </DropzoneContainer>
                <FormContainer>
                    <Input name='name' label='Nome' placeholder='Nome do Item' />
                    <Input name='category' label='Categoria' placeholder='Categoria do item' />
                    <Input name='brand' label='Marca' placeholder='Idade do Item' />
                    <Input name='quatity' label='Quantidade' placeholder='Quantidade do Item' />
                    <TextArea name='description' label='Descrição' placeholder='Descrição do Item' />
                    <Button rounded primary icon={<BiSolidDonateHeart size={25} />} style={{ width: '100%' }} onClick={methods.handleSubmit(onSubmit)}>Confirmar Doação</Button>
                </FormContainer>
            </Container>
        </FormProvider>
    )
}

export default DonateItem