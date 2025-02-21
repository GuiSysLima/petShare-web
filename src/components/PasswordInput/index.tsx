import React, { useState, InputHTMLAttributes } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { InputContainer, ToggleButton } from './styles'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const PasswordInput = ({ type, label, ...rest }: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    return (
        <InputContainer>
            <label>{label}</label>
            <input
                type={showPassword ? 'text' : 'password'}
                {...rest}
            />
            <ToggleButton type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </ToggleButton>
        </InputContainer>
    )
}

export default PasswordInput