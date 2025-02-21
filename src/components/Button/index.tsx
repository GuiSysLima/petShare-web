import React from 'react'
import { IconWrapper, StyledButton } from './styles';

interface ButtonProps {
    children: React.ReactNode;
    icon?: JSX.Element;
    primary?: boolean;
    rounded?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const Button = ({ children, icon, onClick, primary, rounded, style }: ButtonProps) => {
    return (
        <div>
            <StyledButton primary={primary} rounded={rounded} onClick={onClick} style={style}>
                {icon && (
                    <IconWrapper>
                        {icon}
                    </IconWrapper>
                )}
                {children}
            </StyledButton>
        </div>
    )
}

export default Button