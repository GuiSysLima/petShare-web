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

export const DropzoneContainer = styled.div`
    width: 100%;
    height: 60rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.form`
    max-width: 80rem;
    gap: 2rem;  
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60rem;
    padding: 3rem 2rem;
    background-color: white;
    border-radius: 1rem;

    & input, textarea {
        width: 70rem; !important;
    }
`;

