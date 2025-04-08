import React, { useState } from 'react'
import Modal from '../../../../components/Modal'
import { FaPaw, FaPumpSoap } from 'react-icons/fa'
import { ItemCategory, Row } from './styles'
import { GiCargoCrate, GiDogHouse, GiSittingDog } from 'react-icons/gi'
import { IoIosBowtie } from 'react-icons/io'
import { TbDogBowl } from 'react-icons/tb'
import { PiBone } from 'react-icons/pi'

interface ItemCategoryModalProps {
    isOpen: boolean
    onClose: () => void
    onSelect: (category: string) => void
}

const ItemCategoryModal = ({ isOpen, onClose, onSelect }: ItemCategoryModalProps) => {

    return (
        <Modal enableClose onRequestClose={onClose} isOpen={isOpen} >
            <h1 style={{ marginBottom: '2rem' }}>Selecione o tipo de Item</h1>

            <Row>
                <ItemCategory onClick={() => onSelect('food')}>
                    <TbDogBowl size={50} />
                    <h3>Ração</h3>
                </ItemCategory>
                <ItemCategory onClick={() => onSelect('toy')}>
                    <PiBone size={50} />
                    <h3>Brinquedos</h3>
                </ItemCategory>
            </Row>
            <Row>
                <ItemCategory onClick={() => onSelect('bed')}>
                    <GiDogHouse size={50} />
                    <h3>Camas</h3>
                </ItemCategory>
                <ItemCategory onClick={() => onSelect('clothing')}>
                    <IoIosBowtie size={50} />
                    <h3>Roupas</h3>
                </ItemCategory>
            </Row>
            <Row>
                <ItemCategory onClick={() => onSelect('hygiene')}>
                    <FaPumpSoap size={50} />
                    <h3>Higiene</h3>
                </ItemCategory>
                <ItemCategory onClick={() => onSelect('carrier')}>
                    <GiCargoCrate size={50} />
                    <h3>Transporte</h3>
                </ItemCategory>
            </Row>
            <Row>
                <ItemCategory onClick={() => onSelect('accessories')}>
                    <GiSittingDog size={50} />
                    <h3>Acessórios</h3>
                </ItemCategory>
                <ItemCategory onClick={() => onSelect('other')}>
                    <FaPaw size={50} />
                    <h3>Outros</h3>
                </ItemCategory>
            </Row>
        </Modal>
    )
}

export default ItemCategoryModal