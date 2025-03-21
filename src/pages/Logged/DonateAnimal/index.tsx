import Button from '../../../components/Button'
import { MdArrowBackIos } from 'react-icons/md'
import { Container, DropzoneContainer, FormContainer } from './styles'
import Dropzone from '../../../components/Dropzone'
import Input from '../../../components/Input'
import TextArea from '../../../components/TextArea'
import { BiSolidDonateHeart } from 'react-icons/bi'

const DonateAnimal = () => {
    return (
        <>
            <Container>
                <DropzoneContainer>
                    <Dropzone />
                </DropzoneContainer>
                <FormContainer>
                    <Input label='Nome' placeholder='Nome do animal' />
                    <Input label='Raça' placeholder='Raça do animal' />
                    <Input label='Idade' type='date' placeholder='Idade do animal' />
                    <Input label='Sexo' placeholder='Sexo do animal' />
                    <Input label='Porte' placeholder='Porte do animal' />
                    <TextArea label='Descrição' placeholder='Descrição do animal' />
                    <TextArea label='Vacinas' placeholder='Vacinas do animal' />
                    <Button rounded primary icon={<BiSolidDonateHeart size={25} />} style={{ width: '100%' }} >Confirmar Doação</Button>
                </FormContainer>
            </Container>
        </>
    )
}

export default DonateAnimal