import React from 'react'
import AnimalsImage from '../../assets/Animals.png'
import { FormContainer, LoginContainer, RightContainer } from './styles'
import Button from '../../components/Button'
import { FaHeart } from 'react-icons/fa'
import PasswordInput from '../../components/PasswordInput'
import Input from '../../components/Input'
import NotLoggedHeader from '../../components/Header/NotLoggedHeader'

const SignIn = () => {

    return (
        <>
            <NotLoggedHeader />
            <LoginContainer>
                <RightContainer>
                    <h1>Login</h1>
                    <FormContainer>
                        <div>
                            <Input name='email' label='Email' />
                        </div>
                        <div>
                            <PasswordInput label='Senha' />
                        </div>
                        <Button style={{ width: '40rem' }} primary rounded icon={<FaHeart />}> Login</Button>
                    </FormContainer>
                </RightContainer>
                <img style={{ flex: 0 }} src={AnimalsImage} alt="" />
            </LoginContainer>
        </>
    )
}

export default SignIn