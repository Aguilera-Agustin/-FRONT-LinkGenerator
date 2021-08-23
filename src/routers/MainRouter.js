import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
  
import { ChooseMethodScreen } from '../screens/ChooseMethodScreen';
import { CryptoScreen } from '../screens/CryptoScreen';
import { CryptoTransferScreen } from '../screens/CryptoTransferScreen';
import { MpSuccess } from '../screens/MpSuccess';
import { NotFound } from '../screens/NotFound';
import { TransferScreen } from '../screens/TransferScreen';
import { TransferSelectionScreen } from '../screens/TransferSelectionScreen';



export const MainRouter = () => {
       
    return (
        <Router>
            <Switch>
                <Route path="/mp" exact component={ ()=> <MpSuccess /> }/>
                <Route path="/crypto" exact component={ CryptoScreen }/>
                <Route path="/bank_transfer" exact component={ TransferSelectionScreen }/>
                <Route path="/binance_transfer" exact component={ CryptoTransferScreen }/>
                <Route path="/bank_transfer_ars" exact component={ ()=><TransferScreen type='ars'/> }/>
                <Route path="/bank_transfer_usd" exact component={ ()=><TransferScreen type='usd'/> }/>
                <Route path="/:id" exact component={ ChooseMethodScreen }/>
                <Route path='/' exact component={NotFound}/>
            </Switch>
        </Router>
    )
}