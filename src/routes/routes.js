import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () =>  <Home /> }/>
            <PrivateRoute path="/app" component={ () => <h1> Você está logado</h1>}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;