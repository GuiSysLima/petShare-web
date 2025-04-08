import ReactModal from 'react-modal';
import { ReactNode } from 'react';
import { MdClose } from 'react-icons/md';
import { CloseModal, ModalStyled } from './styles';

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    enableClose: boolean;
    onRequestClose(
        event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
    ): void;
    parentId?: string;
}

const Modal = ({
    isOpen,
    onRequestClose,
    enableClose,
    children,
    parentId: parent,
}: ModalProps) => {
    ReactModal.defaultStyles = {
        ...ReactModal.defaultStyles,
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(122, 122, 122, 0.685)',
        },
    };

    return (
        <ModalStyled
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={enableClose}
            ariaHideApp={false}
            parentSelector={() => document.body}

        >
            {enableClose && (
                <CloseModal onClick={onRequestClose} data-testid='close-modal'>
                    <MdClose size={20} />
                </CloseModal>
            )}
            {children}
        </ModalStyled>
    );
};

export default Modal;