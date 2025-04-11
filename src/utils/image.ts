export const getAnimalImagesUrl = (image: string[] | undefined): string => {
    if (image && image.length > 0) {
        return `https://pet-share.s3.sa-east-1.amazonaws.com/${image[0]}`;
    }

    return 'https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-1024.png';
};

export const getAnimalImage = (image: string | undefined): string => {
    if (image) {
        return `https://pet-share.s3.sa-east-1.amazonaws.com/${image}`;
    }
    return 'https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-1024.png';
};
