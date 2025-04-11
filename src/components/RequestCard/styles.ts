import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 36px;
  right: 12px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TopContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 160px;
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 4px;
`;

export const Info = styled.p`
  font-size: 14px;
  margin: 0 0 4px;
  color: #555;
`;

export const Divider = styled.hr`
  margin: 12px 0;
  border: none;
  border-top: 1px solid #ddd;
`;

export const RequestInfo = styled.div`
  font-size: 13px;
  color: #333;
  margin-bottom: 12px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem
`;

export const ApproveButton = styled.button`
  background-color: #00c26e;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
`;

export const RejectButton = styled.button`
  background-color: #ff2d2d;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
`;