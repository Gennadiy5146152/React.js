import React from "react";
import './main.global.css'
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardList } from "./shared/CardList";
import {useToken} from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext'
import { usePostData } from "./hooks/usePostsData";
import { userContext, UserContextProvider } from './shared/context/userContext';
import { PostContextProvider } from "./shared/context/postContext";

function AppComponent() {
    const [token] = useToken();
    const [post] = usePostData();

    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <PostContextProvider>
                <Layout>
                    <Header/>
                        <Content>
                            <CardList />
                        <   br/>
                        </Content>
                </Layout>
                </PostContextProvider>
            </UserContextProvider>
        </tokenContext.Provider>
    )
}

export const App = hot(() => <AppComponent/>)