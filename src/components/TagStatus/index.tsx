import React from 'react';
import styled from 'styled-components';
import { getStatusColor } from '../../utils/colors';
import { DonationStatus } from '../../services/queries/donateAnimals/interface';


interface TagProps {
    status: DonationStatus;
}


const Tag = styled.span<{ status: DonationStatus }>`
  display: inline-block;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 12px;
  background-color: ${({ status }) => getStatusColor(status)};
  color: white;
  font-weight: bold;
`;

const TagStatus: React.FC<TagProps> = ({ status }) => {
    return <Tag status={status}>{status}</Tag>;
};

export default TagStatus;
