import React, { useState } from "react";
import './main.global.css'
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardList } from "./shared/CardList";
import { PostContextProvider } from "./shared/context/postContext";
import { commentContext } from "./shared/context/commentContext";
import { applyMiddleware, createStore, Middleware } from "redux";
import { Provider } from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { rootReducer } from "./store";
import thunk from 'redux-thunk';


const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
));


function AppComponent(): JSX.Element {
    const [commentValue, setCommentValue] = useState('');

    const CommentProvider = commentContext.Provider
   

    return (
        <Provider store={store}>
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
         
                    <PostContextProvider>
                        <Layout>
                            <Header/>
                                <Content>
                                    <CardList />
                                    <   br/>
                                </Content>
                        </Layout>
                    </PostContextProvider>
               
        </CommentProvider>
        </Provider>
    )
}

export const App = hot(() => <AppComponent/>)


