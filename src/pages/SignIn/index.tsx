import React from 'react'
import AnimalsImage from '../../assets/Animals.png'
import { FormContainer, LoginContainer, MessageRegister, RightContainer } from './styles'
import Button from '../../components/Button'
import { FaHeart } from 'react-icons/fa'
import PasswordInput from '../../components/PasswordInput'
import Input from '../../components/Input'
import NotLoggedHeader from '../../components/Header/NotLoggedHeader'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PostUserLogin } from '../../services/queries/User'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'

export const SignInSchema = z.object({
    email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
    password: z.string().min(1, 'Senha é obrigatória'),
})

export type SignInFormData = z.infer<typeof SignInSchema>
SignInSchema
const SignIn = () => {

    const navigate = useNavigate()

    const methods = useForm<SignInFormData>({
        resolver: zodResolver(SignInSchema),
        mode: 'onTouched',
    })

    const { setValue, handleSubmit } = methods

    const { login } = useAuth()

    const loginMutation = useMutation({
        mutationFn: (data: SignInFormData) => PostUserLogin(data),
        onSuccess: ({ user, token }) => {
            login(user, token)
            toast.success('Login realizado com sucesso!')
            navigate('/home')
        },
        onError: (error: any) => {
            const msg = error?.response?.data?.message || 'Erro ao fazer login. Verifique suas credenciais.'
            toast.error(msg)
        },
    })

    const onSubmit = async (data: SignInFormData) => {
        loginMutation.mutate(data)
    }

    return (
        <FormProvider {...methods}>
            <NotLoggedHeader />
            <LoginContainer>
                <RightContainer>
                    <h1>Login</h1>
                    <FormContainer>
                        <div>
                            <Input name='email' label='Email' />
                        </div>
                        <div>
                            <PasswordInput name='password' label='Senha' />
                        </div>
                        <Button style={{ width: '40rem' }} primary rounded icon={<FaHeart />} onClick={handleSubmit(onSubmit)}> Login</Button>
                        <MessageRegister>Ainda não tem conta? <span onClick={() => navigate('/register')}>Cadastre-se</span></MessageRegister>
                    </FormContainer>
                </RightContainer>
                <img style={{ flex: 0 }} src={AnimalsImage} alt="" />
            </LoginContainer>
        </FormProvider>
    )
}

export default SignIn