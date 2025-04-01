import styled from "styled-components";

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    strong {
        font-size: 1.5rem;
        font-weight: 700;
        padding-left: 1rem;
    }
`;


export const Option = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    position: relative;
    font-size: 1.5rem;
    font-weight: 700;

    input[type='radio'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    }

    .custom-radio {
    position: absolute;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: 2px solid #ff69b4;
    background-color: white;
    }

    input:checked ~ .custom-radio {
    background-color: #ff69b4;
    }

    .custom-radio::after {
    content: '';
    position: absolute;
    display: none;
    }

    input:checked ~ .custom-radio::after {
    display: block;
    }

    .label-text {
        margin-left: 3rem;
    }   

`;