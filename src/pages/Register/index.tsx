import React, { useState } from 'react'
import AnimalsImage from '../../assets/Animals.png'
import { ButtonGroup, FormContainer, LoginContainer, MessageRegister, RightContainer } from './styles'
import Button from '../../components/Button'
import { FaHeart } from 'react-icons/fa'
import PasswordInput from '../../components/PasswordInput'
import Input from '../../components/Input'
import NotLoggedHeader from '../../components/Header/NotLoggedHeader'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PostUser, PostUserLogin } from '../../services/queries/User'
import { useNavigate } from 'react-router-dom'
import { BsHeartArrow } from 'react-icons/bs'
import { useAuth } from '../../context/AuthContext'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const RegisterSchema = z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    phone: z.string().min(1, 'Telefone é obrigatório'),
    cpf: z.string().min(1, 'CPF é obrigatório'),
    bornDate: z.string().min(1, 'Data de nascimento é obrigatória'),
    address: z.object({
        number: z.string().min(1, 'Número é obrigatório'),
        street: z.string().min(1, 'Rua é obrigatória'),
        neighborhood: z.string().min(1, 'Bairro é obrigatório'),
        cep: z.string().min(1, 'CEP é obrigatório'),
        city: z.string().min(1, 'Cidade é obrigatória'),
        state: z.string().min(1, 'Estado é obrigatório'),
    }),
    image: z
        .instanceof(File)
        .optional()
        .or(z.literal('')),
});


export type RegisterFormData = z.infer<typeof RegisterSchema>
const Register = () => {

    const navigate = useNavigate()
    const { login } = useAuth()

    const methods = useForm<RegisterFormData>({
        resolver: zodResolver(RegisterSchema),
        mode: 'onTouched',
    })

    const { trigger, handleSubmit, getValues } = methods
    const [step, setStep] = useState(1)

    const { mutate: registerUser, error } = useMutation({
        mutationFn: (formData: FormData) => PostUser(formData),
        onSuccess: async () => {
            toast.success('Cadastro realizado com sucesso!');

            const loginPayload = {
                email: getValues('email'),
                password: getValues('password'),
            };

            const { user, token } = await PostUserLogin(loginPayload);
            login(user, token);
            navigate('/home');
        },
        onError: (error: any) => {
            // Se for erro de API com estrutura conhecida
            if (error?.response?.data?.errors) {
                const { errors, message } = error.response.data;
                toast.error(message || 'Erro ao cadastrar');
                errors.forEach((err: { fieldName: string; message: string }) => {
                    toast.warning(`${err.fieldName}: ${err.message}`);
                });
            } else {
                toast.error('Erro inesperado ao cadastrar.');
                console.error(error);
            }
        },
    });

    console.error('Error:', error)

    const onSubmit = async (data: RegisterFormData) => {
        try {
            const formData = new FormData();

            const imageFile = data.image as File | undefined;

            const payload = {
                name: data.name,
                email: data.email,
                password: data.password,
                phone: data.phone,
                cpf: data.cpf,
                bornDate: data.bornDate,
                status: 'Ativo',
                address: {
                    number: data.address.number,
                    street: data.address.street,
                    neighborhood: data.address.neighborhood,
                    cep: data.address.cep,
                    city: data.address.city,
                    state: data.address.state,
                },
            };

            formData.append('obj', new Blob([JSON.stringify(payload)], {
                type: 'application/json',
            }));

            registerUser(formData);
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    return (
        <FormProvider {...methods}>
            <NotLoggedHeader />
            <LoginContainer>
                <RightContainer>
                    <h1>Registre-se</h1>
                    <FormContainer>
                        {step == 1 &&
                            <>
                                <h2>Dados pessoais</h2>
                                <Input name='name' label='Nome' />
                                <Input name='email' label='Email' />
                                <PasswordInput name='password' label='Senha' />
                                <div>
                                    <Button
                                        type='button'
                                        style={{ width: '40rem' }} primary rounded icon={<BsHeartArrow size={30} />}
                                        onClick={async () => {
                                            const isStepValid = await trigger(['name', 'email', 'password'])
                                            if (isStepValid) setStep(2)
                                        }}
                                    >
                                        Próximo
                                    </Button>
                                    <MessageRegister onClick={() => navigate('/login')}>Já tenho uma conta</MessageRegister>
                                </div>
                            </>
                        }
                        {step == 2 &&
                            <>
                                <h2>Dados pessoais</h2>
                                <Input name='phone' label='Telefone' />
                                <Input name='cpf' label='CPF' />
                                <Input name='bornDate' label='Data de Nascimento' type='date' />
                                <ButtonGroup>
                                    <Button
                                        type='button'
                                        style={{ width: '40rem' }} primary rounded icon={<BsHeartArrow size={30} />}
                                        onClick={async () => {
                                            const isStepValid = await trigger(['phone', 'cpf', 'bornDate'])
                                            if (isStepValid) setStep(3)
                                        }}
                                    >
                                        Próximo
                                    </Button>
                                    <Button
                                        type='button'
                                        style={{ width: '40rem', backgroundColor: 'var(--black)' }} rounded icon={<BsHeartArrow size={30} style={{ transform: 'scaleX(-1)' }} />}
                                        onClick={() => setStep(step => step - 1)}
                                    >
                                        Voltar
                                    </Button>
                                </ButtonGroup>
                            </>
                        }
                        {step == 3 &&
                            <>
                                <h2>Endereço</h2>
                                <Input name='address.street' label='Rua' />
                                <Input name='address.number' label='Número' />
                                <Input name='address.neighborhood' label='Bairro' />
                                <Input name='address.cep' label='CEP' />
                                <Input name='address.city' label='Cidade' />
                                <Input name='address.state' label='Estado' />
                                <ButtonGroup>
                                    <Button
                                        type='button'
                                        style={{ width: '40rem' }} primary rounded icon={<FaHeart size={30} />}
                                        onClick={handleSubmit(onSubmit)}
                                    >
                                        Cadastrar
                                    </Button>
                                    <Button
                                        type='button'
                                        style={{ width: '40rem', backgroundColor: 'var(--black)' }} rounded icon={<BsHeartArrow size={30} style={{ transform: 'scaleX(-1)' }} />}
                                        onClick={() => setStep(step => step - 1)}
                                    >
                                        Voltar
                                    </Button>
                                </ButtonGroup>
                            </>
                        }

                    </FormContainer>
                </RightContainer>
                <img style={{ flex: 0 }} src={AnimalsImage} alt="" />
            </LoginContainer>
        </FormProvider>
    )
}

export default Register