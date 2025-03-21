import { TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    width?: string;
}

const TextArea = ({ label, width, ...rest }: TextAreaProps) => {
    return (
        <Container width={width}>
            {label && <label>{label}</label>}
            <textarea {...rest} />
        </Container>
    );
}

export default TextArea;