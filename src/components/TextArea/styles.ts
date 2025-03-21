import styled from 'styled-components';

export const Container = styled.div<{ width?: string }>`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: ${({ width }) => width || 'auto'};

    label {
        font-size: 1.5rem;
        font-weight: 700;
        padding-left: 1rem;
    }

    textarea {
        height: 8rem;
        padding: 1rem;
        border-radius: 1rem;
        border: 2px solid light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
        resize: vertical;   
    }
`;