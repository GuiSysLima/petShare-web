import React, { useState, InputHTMLAttributes } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { InputContainer, ToggleButton } from './styles'
import { useFormContext } from 'react-hook-form'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
}

const PasswordInput = ({ type, name, label, ...rest }: PasswordInputProps) => {

    const { register, formState: { errors } } = useFormContext()

    const [showPassword, setShowPassword] = useState(false)

    const error = errors[name]?.message as string | undefined

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    return (
        <InputContainer>
            <label>{label}</label>
            <input
                type={showPassword ? 'text' : 'password'}
                {...register(name)}
                {...rest}
            />
            <ToggleButton type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </ToggleButton>
            {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
        </InputContainer>
    )
}

export default PasswordInput