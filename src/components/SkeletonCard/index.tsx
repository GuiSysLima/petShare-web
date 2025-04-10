import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  flex-wrap: wrap;
`;

const SkeletonCard = styled.div`
  width: 250px;
  height: auto;
  padding: 1rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkeletonElement = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 800px 104px;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 6px;
`;

const SkeletonImage = styled(SkeletonElement)`
  width: 100%;
  height: 130px;
  border-radius: 10px;
`;

const SkeletonLine = styled(SkeletonElement) <{ width?: string }>`
  height: 14px;
  width: ${({ width }) => width || '100%'};
`;

const SkeletonTag = styled(SkeletonElement)`
  width: 80px;
  height: 20px;
  border-radius: 999px;
`;

const SkeletonFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SkeletonCardList = () => {
    return (
        <SkeletonContainer>
            {Array.from({ length: 5 }).map((_, idx) => (
                <SkeletonCard key={idx}>
                    <SkeletonImage />
                    <SkeletonLine width="60%" />
                    <SkeletonLine width="40%" />
                    <SkeletonTag />
                    <SkeletonFooter>
                        <SkeletonLine width="80%" />
                        <SkeletonLine width="60%" />
                    </SkeletonFooter>
                </SkeletonCard>
            ))}
        </SkeletonContainer>
    );
};

export default SkeletonCardList;
