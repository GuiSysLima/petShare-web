import { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { Container } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label?: string;
    width?: string;
}

const TextArea = ({ name, label, width, ...rest }: TextAreaProps) => {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    const error = errors[name]?.message as string | undefined;

    return (
        <Container width={width}>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea id={name} {...register(name)} {...rest} />
            {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
        </Container>
    );
};

export default TextArea;
