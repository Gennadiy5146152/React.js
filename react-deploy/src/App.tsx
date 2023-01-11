import React from "react";
import './main.global.css'
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardList } from "./shared/CardList";
import { Ecolor, Text } from './shared/Text';

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
                <br/>
                <Text size={20} mobileSize={28} color={Ecolor.green} bold>Label1</Text>
                <Text size={20}>Label2</Text>
                <Text size={20} mobileSize={16}>Label3</Text>
            </Content>
        </Layout>
    )
}

export const App = hot(AppComponent)