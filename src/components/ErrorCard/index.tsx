import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const Error = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Icon = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;

  svg {
    width: 100%;
    height: 100%;
    fill: #ff4d4f;
  }
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const RetryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #5758F1;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #4344cb;
  }
`;

interface ErrorCardProps {
    message?: string;
    onRetry?: () => void;
}

const ErrorCard = ({ message = 'Algo deu errado ao carregar os dados.', onRetry }: ErrorCardProps) => {
    return (
        <ErrorWrapper>
            <Error>
                <Icon>
                    <svg viewBox="0 0 24 24">
                        <path d="M11.001 10h2v5h-2zm0 6h2v2h-2z" />
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 
              10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 
              8-8 8 3.589 8 8-3.589 8-8 8z" />
                    </svg>
                </Icon>
                <Message>{message}</Message>
                {onRetry && (
                    <RetryButton onClick={onRetry}>
                        Tentar novamente
                    </RetryButton>
                )}
            </Error>
        </ErrorWrapper>
    );
};

export default ErrorCard;
