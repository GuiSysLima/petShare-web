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

const DonateAnimal = () => {

    const methods = useForm()

    const onSubmit = (data: any) => {

        console.log(data)
    }

    const today = new Date().toISOString().split('T')[0]

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
                    <Button rounded primary icon={<BiSolidDonateHeart size={25} />} style={{ width: '100%' }} onClick={methods.handleSubmit(onSubmit)} >
                        Confirmar Doação
                    </Button>
                </FormContainer>
            </Container>
        </FormProvider>
    )
}

export default DonateAnimal