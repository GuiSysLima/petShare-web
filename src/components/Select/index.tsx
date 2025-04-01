// components/Select/index.tsx

import { SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { SelectContainer, Wrapper } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label?: string;
    options: { label: string; value: string }[];
}

const Select = ({ name, label, options, ...rest }: SelectProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const error = errors[name]?.message as string | undefined;

    return (
        <Wrapper>
            {label && <label htmlFor={name}>{label}</label>}
            <SelectContainer id={name} {...register(name)} {...rest}>
                <option value="">Selecione...</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </SelectContainer>
            {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
        </Wrapper>
    );
};

export default Select;
