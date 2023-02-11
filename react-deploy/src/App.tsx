import React, { useEffect, useState } from "react";
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
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Post } from "./shared/Post";
import { useCommentsData } from "./hooks/useCommentsData";
import { NotFound } from "./NotFound";



const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
));


function AppComponent(): JSX.Element {
    const [commentValue, setCommentValue] = useState('');
    const [mounted, setMounted] = useState(false);

    const CommentProvider = commentContext.Provider

    useEffect(() => {
        setMounted(true);
    }, [])
   

    return (
        <Provider store={store}>
            {mounted && (
                    <CommentProvider value={{
                        value: commentValue,
                        onChange: setCommentValue,
                    }}>
                        <PostContextProvider>
                            <Layout>
                                <Header/>
                                    <Content>
                                        <BrowserRouter>
                                            <Switch>
                                                <Redirect exact from='/auth' to="/posts"/>
                                                <Redirect exact from='/' to="/posts"/>
                                                <Route exact path='/posts/:id'>
                                                    <Post />
                                                    <CardList />
                                                </Route>
                                                <Route exact path='/posts'>
                                                    <CardList />
                                                </Route>
                                                <Route path="*" component={NotFound} />
                                            </Switch>
                                        </BrowserRouter>
                                    </Content>
                            </Layout>
                        </PostContextProvider>       
                    </CommentProvider>
            )}
        </Provider>
    )
}

export const App = hot(() => <AppComponent/>)


