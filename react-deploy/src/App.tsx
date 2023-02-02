import React, { Reducer, useEffect, useState } from "react";
import './main.global.css'
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardList } from "./shared/CardList";
import {useToken} from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext'
import { userContext, UserContextProvider } from './shared/context/userContext';
import { PostContextProvider } from "./shared/context/postContext";
import { commentContext } from "./shared/context/commentContext";
import { ActionCreator, AnyAction, createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { rootReducer, RootState, updateToken } from "./store";


const store = createStore(rootReducer,composeWithDevTools());


function AppComponent(): JSX.Element {
    const [commentValue, setCommentValue] = useState('');

    const CommentProvider = commentContext.Provider
   

    return (
        <Provider store={store}>
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
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
        </CommentProvider>
        </Provider>
    )
}

export const App = hot(() => <AppComponent/>)


