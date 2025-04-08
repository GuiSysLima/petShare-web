import React, { useState } from 'react'
import Modal from '../../../../components/Modal'
import { FaCat, FaDog, FaPaw } from 'react-icons/fa'
import { AnimalCategory, Row } from './styles'
import { MdPestControlRodent } from 'react-icons/md'
import { GiAbstract001, GiEgyptianBird, GiReptileTail } from 'react-icons/gi'

interface AnimalCategoryModalProps {
    isOpen: boolean
    onClose: () => void
    onSelect: (category: string) => void
}

const AnimalCategoryModal = ({ isOpen, onClose, onSelect }: AnimalCategoryModalProps) => {

    return (
        <Modal enableClose onRequestClose={onClose} isOpen={isOpen} >
            <h1 style={{ marginBottom: '2rem' }}>Selecione o tipo do animal</h1>

            <Row>
                <AnimalCategory onClick={() => onSelect('dog')}>
                    <FaDog size={50} />
                    <h3>Cachorros</h3>
                </AnimalCategory>
                <AnimalCategory onClick={() => onSelect('cat')}>
                    <FaCat size={50} />
                    <h3>Gatos</h3>
                </AnimalCategory>
            </Row>
            <Row>
                <AnimalCategory onClick={() => onSelect('rodent')}>
                    <MdPestControlRodent size={50} />
                    <h3>Roedor</h3>
                </AnimalCategory>
                <AnimalCategory onClick={() => onSelect('bird')}>
                    <GiEgyptianBird size={50} />
                    <h3>Ave</h3>
                </AnimalCategory>
            </Row>
            <Row>
                <AnimalCategory onClick={() => onSelect('reptile')}>
                    <GiReptileTail size={50} />
                    <h3>Réptil</h3>
                </AnimalCategory>
                <AnimalCategory onClick={() => onSelect('other')}>
                    <FaPaw size={50} />
                    <h3>Outros</h3>
                </AnimalCategory>
            </Row>
        </Modal>
    )
}

export default AnimalCategoryModal