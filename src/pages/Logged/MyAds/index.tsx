import React from 'react'
import Tabs, { Tab } from '../../../components/Tabs'
import { Title } from './styles'
import TabDonorAnimals from './TabAnimals'

const MyAds = () => {
    return (
        <>
            <Title>MEUS ANUNCIOS</Title>
            <Tabs>
                <Tab label="Animais para adoção">
                    <TabDonorAnimals />
                </Tab>
                <Tab label="Itens para adoção">
                    <div></div>
                </Tab>
                <Tab label="Solicitações de ajuda">
                    <div></div>
                </Tab>
            </Tabs>
        </>
    )
}

export default MyAds