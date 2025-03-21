import styled from "styled-components";

export const Container = styled.div<{ width?: string }>`
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.75rem;
    width: ${({ width }) => width || 'auto'};

    input {
        width: 100%;
        height: 4rem;
        padding-right: 3rem;
        padding-left: 1rem;
        border-radius: 1rem;
    }

    label {
        font-size: 1.5rem;
        font-weight: 700;
        padding-left: 1rem;
    }
`

export const SearchButton = styled.button`
    background: var(--primary-pink);
    position: absolute;
    top: 50%;
    right: 1px;
    transform: translateY(-50%);
    height: 90%;
    width: 50px;
    border-radius: 0rem 1rem 1rem 0rem;
    cursor: pointer;
`