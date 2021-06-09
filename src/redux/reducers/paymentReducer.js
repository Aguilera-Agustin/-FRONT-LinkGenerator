import { types } from '../types/types';

const initialState = {
    userAddress:'',
    loading: 'false'
}

const paymentReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.cryptoLogin:
           return{
               ...state,
               userAddress:action.payload.userAddress
           }
        default:
            return state;
    }
}

export default paymentReducer