import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { MdPhotoCamera } from 'react-icons/md'
import {
    Photo,
    PreviewContainer,
    ThumbnailWrapper,
    Thumbnail,
    RemoveButton,
    ImageSlot,
    EmptySlot,
    Image,
    DropzoneContainer
} from './styles'

interface DropzoneProps {
    name: string
}

const Dropzone = ({ name }: DropzoneProps) => {
    const { setValue, watch } = useFormContext()
    const images: File[] = watch(name) || []

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const current = watch(name) || []
            const updated = [...current, ...acceptedFiles].slice(0, 3)
            setValue(name, updated)
        },
        [setValue, watch, name]
    )

    const removeImage = (index: number) => {
        const updated = images.filter((_, i) => i !== index)
        setValue(name, updated)
    }

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
        },
        multiple: true,
    })

    const lastImage = images[2]
    const lastImagePreview = lastImage ? URL.createObjectURL(lastImage) : null

    return (
        <DropzoneContainer>
            <Photo {...getRootProps()}>
                <input {...getInputProps()} />
                {lastImagePreview ? (
                    <Image src={lastImagePreview} alt="Última imagem" />
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <MdPhotoCamera size={120} />
                        <h2>Clique ou arraste até 3 imagens</h2>
                    </div>
                )}
            </Photo>

            <PreviewContainer>
                {[0, 1, 2].map((slotIndex) => {
                    const file = images[slotIndex]
                    const preview = file ? URL.createObjectURL(file) : null

                    return (
                        <ThumbnailWrapper key={slotIndex}>
                            {preview ? (
                                <ImageSlot>
                                    <Thumbnail src={preview} alt={`Imagem ${slotIndex + 1}`} />
                                    <RemoveButton type="button" onClick={() => removeImage(slotIndex)}>
                                        ×
                                    </RemoveButton>
                                </ImageSlot>
                            ) : (
                                <EmptySlot>Vazio</EmptySlot>
                            )}
                        </ThumbnailWrapper>
                    )
                })}
            </PreviewContainer>
        </DropzoneContainer>
    )
}

export default Dropzone
