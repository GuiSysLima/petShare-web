// DonateQuantityModal.tsx
import React, { useState } from 'react';
import Modal from '../../../../components/Modal';

interface DonateQuantityModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (quantity: number) => void;
}

const DonateQuantityModal = ({ isOpen, onClose, onConfirm }: DonateQuantityModalProps) => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleSubmit = () => {
        if (quantity > 0) {
            onConfirm(quantity);
            onClose();
        } else {
            alert('Informe uma quantidade válida.');
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} enableClose>
            <h2 style={{ marginBottom: '1rem' }}>Quantas unidades deseja doar?</h2>
            <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                }}
            />
            <button
                onClick={handleSubmit}
                style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: '#5758F1',
                    color: '#fff',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                }}
            >
                Confirmar doação
            </button>
        </Modal>
    );
};

export default DonateQuantityModal;
