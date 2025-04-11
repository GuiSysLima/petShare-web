import Tabs, { Tab } from '../../../components/Tabs'
import TabAnimals from './TabAnimals'
import TabHelp from './TabHelp'
import TabItems from './TabItems'

const Home = () => {
    return (
        <Tabs>
            <Tab label="Animais para doação">
                <TabAnimals />
            </Tab>
            <Tab label="Itens para doação">
                <TabItems />
            </Tab>
            <Tab label="Solicitações de ajuda">
                <TabHelp />
            </Tab>
        </Tabs>
    )
}

export default Home