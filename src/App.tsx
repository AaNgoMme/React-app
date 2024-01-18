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
import { EColor, Text } from './shared/Text'
import { useToken } from './hooks/useToken'
import { tokenContext } from './shared/context/tokenContext'
import { UserContextProvider, userContext } from './shared/context/userContext'
import { commentContext } from './shared/context/commentContext'


const LIST = [
    { text: 'Что то там' },
    { text: 'Ещё что то там' },
    { text: 'Там что то ещё' },
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
    const [commentValue, setCommentValue] = useState('')

    const CommentProvider = commentContext.Provider
    const TokenProvider = tokenContext.Provider

    return (

            <TokenProvider value={token}>
                <UserContextProvider>
                    <CommentProvider value={{ value: commentValue, onChange: setCommentValue }}>
                        <Layout>
                            <Header />
                            <Content>
                                <CardsList />
                                <GenericList list={list.map((item) => ({ ...item, onClick: handleItemClick }))} />
                                <div style={{ padding: 20 }}>
                                    <br />
                                    <Dropdown
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
                                <Text As={'h1'} size={28} color={EColor.orange}>
                                    Это это
                                </Text>
                                <Text size={28} color={EColor.green}>
                                    Это то
                                </Text>
                            </Content>
                        </Layout>
                    </CommentProvider>
                </UserContextProvider>
            </TokenProvider>

    )
}

export const App = hot(() => <AppComponent />)