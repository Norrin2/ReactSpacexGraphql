import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { LaunchList } from './routes/Launchlist/LaunchList';

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LaunchList}/>
        </Switch>
        </BrowserRouter>
    )
}