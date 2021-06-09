import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import paymentReducer from '../reducers/paymentReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    payment: paymentReducer,
    
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)