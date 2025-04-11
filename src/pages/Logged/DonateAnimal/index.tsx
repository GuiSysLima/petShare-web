import Button from '../../../components/Button'
import { MdArrowBackIos } from 'react-icons/md'
import { Container, DropzoneContainer, FormContainer } from './styles'
import Dropzone from '../../../components/Dropzone'
import Input from '../../../components/Input'
import TextArea from '../../../components/TextArea'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { FormProvider, useForm } from 'react-hook-form'
import Radio from '../../../components/Radio'
import Select from '../../../components/Select'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { PostDonateAnimal } from '../../../services/queries/donateAnimals'
import { Animal, DonateAnimalPayload, DonationStatus } from '../../../services/queries/donateAnimals/interface'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from '../../../context/AuthContext'
import { toast } from 'react-toastify'

export const animalSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    race: z.string().min(1, 'Raça é obrigatória'),
    bornDate: z.string().min(1, 'Idade é obrigatória').refine((val) => {
        const date = new Date(val)
        const today = new Date()
        return date <= today
    }
        , { message: 'Data inválida' }),
    observations: z.string(),
    medicalNotes: z.string(),
    sex: z.enum(['male', 'female']),
    size: z.enum(['small', 'medium', 'large']),
    category: z.enum(['dog', 'cat', 'rodent', 'bird', 'reptile', 'other']),
    status: z.enum(['DISPONIVEL', 'EM_INTERESSE', 'APROVADO', 'RECUSADO', 'ADOTADO']),
})
export const donateAnimalSchema = z.object({
    animal: animalSchema,
    userId: z.number().min(1),
    image: z
        .any()
        .refine(
            (val) =>
                val === undefined ||
                val instanceof File ||
                (Array.isArray(val) && val.every((f) => f instanceof File)),
            { message: 'Arquivo inválido' }
        )
        .optional(),
})

export type DonateAnimalFormData = z.infer<typeof donateAnimalSchema>

const DonateAnimal = () => {


    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')
    const validCategories = ['dog', 'cat', 'rodent', 'bird', 'reptile', 'other']

    const navigate = useNavigate()

    const { user } = useAuth()

    const methods = useForm<DonateAnimalFormData>({
        resolver: zodResolver(donateAnimalSchema),
        defaultValues: {
            animal: {
                category: category as Animal['category'],
                status: 'DISPONIVEL',
                name: '',
                race: '',
                bornDate: '',
                observations: '',
                medicalNotes: '',
                sex: 'male',
                size: 'small',
            },
            userId: Number(user?.id),
            image: undefined,
        },
        mode: 'onBlur',
    })

    const { getValues, handleSubmit, formState } = methods

    const today = new Date().toISOString().split('T')[0]

    if (!category || !validCategories.includes(category)) {
        return <Navigate to="/DonateType" replace />
    }

    const mutation = useMutation({
        mutationFn: (payload: FormData) => PostDonateAnimal(payload),
        onSuccess: () => {
            navigate('/success?type=donate')
        },
        onError: () => {
            toast.warning('Erro ao cadastrar doação.')
        },
    })

    console.log(formState.errors)

    const onSubmit = (data: DonateAnimalFormData) => {
        const values = getValues()

        const formData = new FormData();

        const payload = {
            animal: {
                name: data.animal.name,
                race: data.animal.race,
                bornDate: data.animal.bornDate,
                observations: data.animal.observations,
                medicalNotes: data.animal.medicalNotes,
                sex: data.animal.sex,
                size: data.animal.size,
                status: 'DISPONIVEL ' as DonationStatus,
                category: values.animal.category as Animal['category'],
            },
            post: {

            },
            userId: Number(user?.id),
        }

        const jsonBlob = new Blob([JSON.stringify(payload)], {
            type: 'application/json',
        })
        formData.append('obj', jsonBlob)

        const images = data.image as File[] | File
        if (Array.isArray(images)) {
            images.forEach((file) => {
                formData.append('images', file)
            })
        } else if (images instanceof File) {
            formData.append('images', images)
        }

        mutation.mutate(formData)
    }


    return (
        <FormProvider {...methods}>
            <Container>
                <DropzoneContainer>
                    <Dropzone name='image' />
                </DropzoneContainer>
                <FormContainer>
                    <Input name='animal.name' label='Nome' placeholder='Nome do animal' />
                    <Input name='animal.race' label='Raça' placeholder='Raça do animal' />
                    <Input name='animal.bornDate' label='Idade' type='date' max={today} placeholder='Idade do animal' />
                    <Radio
                        name='animal.sex'
                        label='Sexo do animal'
                        options={[
                            { label: 'Macho', value: 'male' },
                            { label: 'Fêmea', value: 'female' },
                        ]}
                    />
                    <Select
                        name='animal.size'
                        label='Porte do animal'
                        options={[
                            { label: 'Pequeno', value: 'small' },
                            { label: 'Médio', value: 'medium' },
                            { label: 'Grande', value: 'large' },
                        ]}
                    />
                    <TextArea name='animal.observations' label='Descrição' placeholder='Descrição do animal' />
                    <TextArea name='animal.medicalNotes' label='Vacinas' placeholder='Vacinas do animal' />
                    <Button rounded primary icon={<BiSolidDonateHeart size={25} />} style={{ width: '100%' }} onClick={handleSubmit(onSubmit)} >
                        Confirmar Doação
                    </Button>
                </FormContainer>
            </Container>
        </FormProvider>
    )
}

export default DonateAnimal