import React, { ButtonHTMLAttributes } from 'react'
import { IconWrapper, StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: JSX.Element;
    primary?: boolean;
    rounded?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const Button = ({ children, icon, onClick, primary, rounded, style, ...rest }: ButtonProps) => {
    return (
        <StyledButton {...rest} primary={primary} rounded={rounded} onClick={onClick} style={style}>
            {icon && (
                <IconWrapper>
                    {icon}
                </IconWrapper>
            )}
            {children}
        </StyledButton>
    )
}

export default Button