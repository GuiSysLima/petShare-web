import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 4rem;
    padding-top: 2rem;
    height: auto;
    align-items: flex-start;

    & > div, form {
        flex: 1;
    }
`;

export const MessageContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;

    & > h1 {
        font-size: 6rem;
    }

    & > p {
        font-size: 2rem;
        width: 46rem;
        text-align: justify;
        line-height: 160%;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`