import { types } from '../types/types';

const initialState = {
    userAddress:'',
    loading: false,
    money: null
}

const paymentReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.cryptoLogin:
           return{
               ...state,
               userAddress:action.payload.userAddress
           }
        case types.cryptoGetCurrency:
           return{
               ...state,
               money: action.payload
           }
        case types.cryptoStartLoading:
            return {
                ...state,
                loading: true
            }
        case types.cryptoEndLoading:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default paymentReducer