// components/RadioGroup/index.tsx

import { useFormContext } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import { Group, Option } from './styles';

interface RadioOption {
    label: string;
    value: string;
}

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    options: RadioOption[];
}

const Radio = ({ name, label, options }: RadioProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const error = errors[name]?.message as string | undefined;

    return (
        <Group>
            {label && <strong>{label}</strong>}
            <div style={{ display: 'flex', gap: '2rem' }}>
                {options.map((option) => (
                    <Option key={option.value}>
                        <input type="radio" value={option.value} {...register(name)} />
                        <span className="custom-radio" />
                        <span className="label-text">{option.label}</span>
                    </Option>
                ))}
            </div>
            {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
        </Group>
    );
};

export default Radio;
