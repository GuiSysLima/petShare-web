import React from 'react'
import Button from '../../../components/Button'
import { Container, DropzoneContainer, FormContainer } from './style'
import Dropzone from '../../../components/Dropzone'
import { MdArrowBackIos } from 'react-icons/md'
import Input from '../../../components/Input'
import TextArea from '../../../components/TextArea'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { FormProvider, useForm } from 'react-hook-form'
import { Navigate, useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const donateItemSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    category: z.enum([
        'food',
        'toy',
        'bed',
        'clothing',
        'hygiene',
        'carrier',
        'accessories',
        'other',
    ]),
    brand: z.string().optional(),
    quantity: z.string().min(1, 'Quantidade é obrigatória'),
    description: z.string().optional(),
    image: z.any().optional(),
})

export type DonateItemFormData = z.infer<typeof donateItemSchema>

const DonateItem = () => {

    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')
    const validCategories = [
        'food',
        'toy',
        'bed',
        'clothing',
        'hygiene',
        'carrier',
        'accessories',
        'other',
    ]

    const methods = useForm<DonateItemFormData>({
        resolver: zodResolver(donateItemSchema)
    })


    const { setValue, handleSubmit } = methods

    const onSubmit = (data: DonateItemFormData) => {
        const payload = {
            name: data.name,
            category: category,
            brand: data.brand,
            quantity: data.quantity,
            description: data.description,
            image: data.image ? [data.image] : [],
            userId: 1,
        }

        console.log(payload)
    }

    if (!category || !validCategories.includes(category)) {
        return <Navigate to="/DonateType" replace />
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
                    <Button rounded primary icon={<BiSolidDonateHeart size={25} />} style={{ width: '100%' }} onClick={handleSubmit(onSubmit)}>Confirmar Doação</Button>
                </FormContainer>
            </Container>
        </FormProvider>
    )
}

export default DonateItem