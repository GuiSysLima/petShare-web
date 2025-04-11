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
                <Tab label="Animais interessados">
                    <TabDonorAnimals />
                </Tab>
                <Tab label="Itens interessados">
                    <TabDonorItem />
                </Tab>
                <Tab label="Solicitações de ajuda interessados">
                    <TabDonorItemHelp />
                </Tab>
            </Tabs>
        </>
    )
}

export default MyInterest