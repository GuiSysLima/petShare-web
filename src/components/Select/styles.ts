import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-size: 1.5rem;
        font-weight: 700;
        padding-left: 1rem;
    }

`;

export const SelectContainer = styled.select`
    width: 100%;
    height: 4rem;
    padding-right: 3rem;
    padding-left: 1rem;
    border-radius: 1rem;
    border-style: solid;
`;