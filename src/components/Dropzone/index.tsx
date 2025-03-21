import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { Image, Photo } from './styles';
import { MdPhotoCamera } from 'react-icons/md';

const Dropzone = () => {

    const [image, setImage] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => setImage(reader.result as string);
        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': ['.jpeg', '.png']
        },
        multiple: false,
    });

    return (
        <>
            <Photo {...getRootProps()} >
                <input {...getInputProps()} />
                {image ? (
                    <Image src={image} alt="Upload" />
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <MdPhotoCamera size={120} />
                        <h2>Clique ou arraste uma imagem aqui</h2>
                    </div>
                )}
            </Photo>
        </>
    )
}

export default Dropzone