import styled from "styled-components";

export const AnimalContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 4rem;
    padding-top: 2rem;
    height: auto;
    align-items: flex-start;

    & > div {
        flex: 1;
    }
`;

export const Image = styled.img`
    border-radius: 1rem;
    height: 65rem;
    max-width: 65rem;
    object-fit: cover;
`;

export const Description = styled.div`
    max-width: 80rem;
    gap: 4rem;  
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 3rem 2rem;
    background-color: white;
    border-radius: 1rem;
`;

export const AnimalInformation = styled.div`
    background-color: var(--primary-pink);
    color: white;
    border-radius: 1rem;
    padding: 2rem;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    min-width: 7rem;
`;

export const AnimalInformationContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const SectionDescription = styled.div`
    background-color: var(--primary-pink);
    color: white;
    border-radius: 1rem;
    padding: 2rem;
    font-size: 14px;
`;