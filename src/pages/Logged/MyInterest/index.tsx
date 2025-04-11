import React from 'react'
import Tabs, { Tab } from '../../../components/Tabs'
import { Title } from './styles'
import TabDonorAnimals from './TabAnimals'
import TabDonorItem from './TabItem'
import TabDonorItemHelp from './TabHelp'

const MyInterest = () => {
    return (
        <>
            <Title>MEUS INTERESSES</Title>
            <Tabs>
                <Tab label="Animais para adoção">
                    <TabDonorAnimals />
                </Tab>
                <Tab label="Itens para adoção">
                    <TabDonorItem />
                </Tab>
                <Tab label="Solicitações de ajuda">
                    <TabDonorItemHelp />
                </Tab>
            </Tabs>
        </>
    )
}

export default MyInterest