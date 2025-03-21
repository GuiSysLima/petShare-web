import styled from 'styled-components';

interface StyledButtonProps {
    primary?: boolean;
    rounded?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${props => props.primary ? 'var(--primary-pink)' : 'white'};
    color: white;
    border: none;
    padding: 1.5rem 4rem;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: ${props => props.rounded ? '50px' : '4px'};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${props => props.primary ? '#ff007a' : 'black'};
    }
`;

export const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    margin-right: 8px;
`;