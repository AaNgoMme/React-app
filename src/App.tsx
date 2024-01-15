/* import React, { useEffect, useState } from 'react'
import './main.global.css'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout'
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { GenericList } from './shared/GenericList'
import { generateID, generateRandomString } from './utils/react/genereteRandomIndex'
import { Dropdown } from './shared/Dropdown'
import { Text, EColor } from './shared/Text'
import { useToken } from './hooks/useToken'

const LIST = [
    {text: 'Что то там'},
    {text: 'Ещё что то там'},
    {text: 'Там что то ещё'},
].map(generateID)


function AppComponent() {
    const [list, setList] = useState(LIST)

    const handleItemClick = (id: string) => {
        console.log(id)
        setList(list.filter((item) => item.id !== id))
    }
    const handleAdd = () => {
        setList(list.concat(generateID({ text: generateRandomString() })))
    }

    const [token] = useToken()

    return (
        <Layout>
            <Header token={token} />
            <Content>
                <CardsList />
                <button onClick={handleAdd}>Add Element</button>
                <GenericList list={list.map((item) => ({...item, onClick:  handleItemClick}))} />
                <div style={{padding: 20}}>
                    <br />
                    <Dropdown 
                    onClose={() => console.log('closed')}
                    onOpen={() => console.log('opened')} 
                    isOpen={false} 
                    button={<button>Open list</button>}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </Dropdown>
                </div>
                <Text size={20} mobileSize={28} color={EColor.green}>Label 1</Text>
                <Text As={'h1'} size={20} mobileSize={12}>Label 2</Text>
                <Text size={20}>Label 3</Text>
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent />)
 */

import React, { useEffect, useState } from 'react'
import './main.global.css'
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout'
import { Header } from './shared/Header'
import { Content } from './shared/Content'
import { CardsList } from './shared/CardsList'
import { GenericList } from './shared/GenericList'
import { generateID, generateRandomString } from './utils/react/genereteRandomIndex'
import { Dropdown } from './shared/Dropdown'


const LIST = [
    {text: 'Что то там'},
    {text: 'Ещё что то там'},
    {text: 'Там что то ещё'},
].map(generateID)

function AppComponent() {
    const [list, setList] = useState(LIST)

    const handleItemClick = (id: string) => {
        console.log(id)
        setList(list.filter((item) => item.id !== id))
    }
    const handleAdd = () => {
        setList(list.concat(generateID({ text: generateRandomString() })))
    }

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <GenericList list={list.map((item) => ({...item, onClick:  handleItemClick}))} />
                <div style={{padding: 20}}>
                    <br />
                    <Dropdown 
                    onClose={() => console.log('closed')}
                    onOpen={() => console.log('opened')} 
                    isOpen={false} 
                    button={<button>Open list</button>}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </Dropdown>
                    </div>
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent />)