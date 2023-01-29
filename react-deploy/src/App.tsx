import React, { useState } from "react";
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
import { commentContext } from "./shared/context/commentContext";
import { useCommentsData } from "./hooks/useCommentsData";

function AppComponent() {
    const [token] = useToken();
    const [commentValue, setCommentValue] = useState('');

    const CommentProvider = commentContext.Provider
    //const [comments] = useCommentsData();
   

    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
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
        </CommentProvider>
    )
}

export const App = hot(() => <AppComponent/>)