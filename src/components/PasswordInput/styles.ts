import styled from 'styled-components'

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.75rem;

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

export const ToggleButton = styled.button`
    position: absolute;
    right: 1.5rem;
    bottom: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
`