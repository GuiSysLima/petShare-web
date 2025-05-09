import styled from "styled-components";

export const LoginContainer = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 4rem;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0.80;

    h1 {
        font-size: 4rem;
        margin-bottom: 4rem;
    }
`;

export const FormContainer = styled.form`
    display:flex;
    flex-direction: column;
    gap: 2rem;
`;

export const MessageRegister = styled.p`
    font-size: 1.2rem;
    font-weight: 600;

    & > span {
        color: var(--primary-pink);
        font-weight: 700;
        cursor: pointer;
        text-decoration: underline;
    }
`