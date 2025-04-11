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

    const getNestedValue = (obj: any, path: string): any => {
        return path.split('.').reduce((acc, part) => acc?.[part], obj);
    };

    const error = getNestedValue(errors, name)?.message as string | undefined;

    return (
        <InputContainer>
            {label && <label htmlFor={name}>{label}</label>}
            <input id={name} type={type} {...register(name)} {...rest} />
            {error && <span style={{ color: 'red', fontSize: '1rem', fontWeight: 600 }}>{error}</span>}
        </InputContainer>
    )
}

export default Input
