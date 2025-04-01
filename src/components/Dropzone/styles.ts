import styled from "styled-components";

export const DropzoneContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const Photo = styled.div`    
    border: 2px dashed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 60rem;
    overflow: hidden;

    &:hover {
        filter: brightness(75%); 
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 6px;
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;
`;

export const ThumbnailWrapper = styled.div`
    flex: 1;
    position: relative;
`;

export const ImageSlot = styled.div`
    width: 100%;
    height: 120px;
    border-radius: 6px;
    position: relative;
`;

export const EmptySlot = styled.div`
    width: 10rem;
    height: 10rem;
    background-color: #f2f2f2;
    border: 2px dashed #ccc;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
    font-weight: 500;
    font-size: 1rem;
`;

export const Thumbnail = styled.img`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 6px;
`;

export const RemoveButton = styled.button`
    position: absolute;
    top: -6px;
    right: -6px;
    background: #ff69b4;
    border: none;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #e0559e;
    }
`;
