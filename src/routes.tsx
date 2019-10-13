import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { LaunchList } from './routes/Launchlist/LaunchList';
import { ApolloProvider } from '@apollo/react-hooks';
import {client} from './services/ApolloClient'

export default function Routes() {
    return(
        <ApolloProvider client={client}>
            <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LaunchList}/>
            </Switch>
            </BrowserRouter>
        </ApolloProvider>

    )
}