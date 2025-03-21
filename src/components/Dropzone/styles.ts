import styled from "styled-components";

export const Photo = styled.div`    
    border: 2px dashed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100%;

    &:hover {
        filter: brightness(75%); 
    }
`;

export const Image = styled.img`
    width: auto;
    height: 100%;
`;