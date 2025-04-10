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
import { Animal, DonateAnimalPayload } from '../../../services/queries/donateAnimals/interface'
import { useMutation } from '@tanstack/react-query'

export const donateAnimalSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    race: z.string().min(1, 'Raça é obrigatória'),
    bornDate: z.string().min(1, 'Data de nascimento é obrigatória'),
    sex: z.enum(['male', 'female'], { required_error: 'Sexo é obrigatório' }),
    size: z.enum(['small', 'medium', 'large']),
    observations: z.string(),
    medicalNotes: z.string(),
    image: z.any().optional(),
})

export type DonateAnimalFormData = z.infer<typeof donateAnimalSchema>

const DonateAnimal = () => {

    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')
    const validCategories = ['dog', 'cat', 'rodent', 'bird', 'reptile', 'other']

    const navigate = useNavigate()

    const methods = useForm<DonateAnimalFormData>({
        resolver: zodResolver(donateAnimalSchema),
    })

    const { setValue, handleSubmit } = methods

    const today = new Date().toISOString().split('T')[0]

    if (!category || !validCategories.includes(category)) {
        return <Navigate to="/DonateType" replace />
    }

    const mutation = useMutation({
        mutationFn: (payload: DonateAnimalPayload) => PostDonateAnimal(payload),
        onSuccess: () => {
            navigate('/success?type=donate')
        },
        onError: () => {
            alert('Erro ao cadastrar doação.')
        },
    })

    const onSubmit = (data: DonateAnimalFormData) => {
        const payload = {
            animal: {
                name: data.name,
                race: data.race,
                bornDate: data.bornDate,
                observations: data.observations,
                medicalNotes: data.medicalNotes,
                sex: data.sex,
                size: data.size,
                category: category as Animal['category'],
                status: 'Em aberto' as Animal['status'],
            },
            userId: 1,
            post: {
                images: data.image.path,
            },
        }

        console.log(payload)
        mutation.mutate(payload)
    }


    return (
        <FormProvider {...methods}>
            <Container>
                <DropzoneContainer>
                    <Dropzone name='image' />
                </DropzoneContainer>
                <FormContainer>
                    <Input name='name' label='Nome' placeholder='Nome do animal' />
                    <Input name='race' label='Raça' placeholder='Raça do animal' />
                    <Input name='bornDate' label='Idade' type='date' max={today} placeholder='Idade do animal' />
                    <Radio
                        name='sex'
                        label='Sexo do animal'
                        options={[
                            { label: 'Macho', value: 'male' },
                            { label: 'Fêmea', value: 'female' },
                        ]}
                    />
                    <Select
                        name='size'
                        label='Porte do animal'
                        options={[
                            { label: 'Pequeno', value: 'small' },
                            { label: 'Médio', value: 'medium' },
                            { label: 'Grande', value: 'large' },
                        ]}
                    />
                    <TextArea name='observations' label='Descrição' placeholder='Descrição do animal' />
                    <TextArea name='medicalNotes' label='Vacinas' placeholder='Vacinas do animal' />
                    <Button rounded primary icon={<BiSolidDonateHeart size={25} />} style={{ width: '100%' }} onClick={handleSubmit(onSubmit)} >
                        Confirmar Doação
                    </Button>
                </FormContainer>
            </Container>
        </FormProvider>
    )
}

export default DonateAnimal