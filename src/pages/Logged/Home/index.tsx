import Tabs, { Tab } from '../../../components/Tabs'
import TabAnimals from './TabAnimals'

const Home = () => {
    return (
        <Tabs>
            <Tab label="Animais para adoção">
                <TabAnimals />
            </Tab>
            <Tab label="Itens para adoção">
                <div>Itens para adoção</div>
            </Tab>
            <Tab label="Solicitações de ajuda">
                <div>Solicitações de ajuda</div>
            </Tab>
        </Tabs>
    )
}

export default Home