import styled from "styled-components";

export const TabsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const TabButton = styled.div<{ active: boolean }>`
    padding: 10px 20px;
    cursor: pointer;
    border-bottom: 4px solid ${props => (props.active ? 'var(--primary-pink)' : '#ccc')};
    font-weight: 600;
    font-size: 12px;
`;