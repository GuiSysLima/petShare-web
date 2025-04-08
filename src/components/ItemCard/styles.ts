import styled from "styled-components";

export const Container = styled.div`
    width: 185px;
    height: 229px;
    padding: 12px;
    border-radius: 1rem;
    background: white;
    gap: 12px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
`;

export const Image = styled.img`
    width: 161px;
    height: 142px;
    object-fit: cover;
`;

export const ItemInformation = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;