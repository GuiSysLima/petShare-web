// DonateQuantityModal.tsx
import React, { useState } from 'react';
import Modal from '../../../../components/Modal';

interface DonateQuantityModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (quantity: number) => void;
    maxQuantity?: number;
}

const DonateQuantityModal = ({ isOpen, maxQuantity, onClose, onConfirm }: DonateQuantityModalProps) => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleSubmit = () => {
        if (quantity > 0 && (!maxQuantity || quantity <= maxQuantity)) {
            onConfirm(quantity);
            onClose();
        } else {
            alert('Informe uma quantidade válida.');
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} enableClose>
            <h2 style={{ marginBottom: '1rem' }}>Quantas unidades deseja doar?</h2>
            <p style={{ marginBottom: '0.5rem' }}>
                {maxQuantity ? `Disponível: até ${maxQuantity} unidades` : ''}
            </p>
            <input
                type="number"
                min={1}
                max={maxQuantity}
                value={quantity}
                onChange={(e) => {
                    const value = Number(e.target.value)
                    if (value <= (maxQuantity ?? Infinity)) {
                        setQuantity(value)
                    }
                }}
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
