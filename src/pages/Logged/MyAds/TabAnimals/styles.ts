import styled from "styled-components";

export const AnimalsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 5rem;
    border-radius: 2rem;
`;

export const Animal = styled.div`
    height: 15rem;
    width: 100%;
    padding: 2rem;
    display: flex;
    gap: 4rem;
    color: black;
    background-color: white;
`;

export const RightContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
`;

export const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    & > h1 {
        font-size: 2rem;
    }
    & > p {
        font-size: 1.5rem;
    }
`;

export const Image = styled.img`
    width: 10%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
`;