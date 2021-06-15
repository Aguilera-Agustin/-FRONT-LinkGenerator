import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
import { ChooseMethodScreen } from '../screens/ChooseMethodScreen';
import { CryptoScreen } from '../screens/CryptoScreen';
import { NotFound } from '../screens/NotFound';
import { TransferScreen } from '../screens/TransferScreen';




export const MainRouter = () => {

    
    return (
        <Router>
            <Switch>
                <Route path="/:id" exact component={ ChooseMethodScreen }/>
                <Route path="/:id/crypto" exact component={ CryptoScreen }/>
                <Route path="/:id/bank_transfer" exact component={ TransferScreen }/>
                <Route path='/' exact component={NotFound}/>
            </Switch>
        </Router>
    )
}