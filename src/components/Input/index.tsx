import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
}

const Input = ({ name, label, type = 'text', ...rest }: InputProps) => {
    const {
        register,
        formState: { errors }
    } = useFormContext()

    const error = errors[name]?.message as string | undefined

    return (
        <InputContainer>
            {label && <label htmlFor={name}>{label}</label>}
            <input id={name} type={type} {...register(name)} {...rest} />
            {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
        </InputContainer>
    )
}

export default Input
