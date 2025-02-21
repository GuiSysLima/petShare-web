import React, { useState, InputHTMLAttributes } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { InputContainer, ToggleButton } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const Input = ({ type, label, ...rest }: InputProps) => {

    return (
        <InputContainer>
            <label>{label}</label>
            <input
                type={'text'}
                {...rest}
            />
        </InputContainer>
    )
}

export default Input