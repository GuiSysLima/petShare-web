import styled from "styled-components";

export const TypesContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 4rem;
    padding-top: 6rem;
    height: 60rem;
`;

export const Type = styled.div`
    flex: 1;
    display: flex;
    gap: 5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        background-color: var(--primary-pink);
        color: white;
    }
`;

