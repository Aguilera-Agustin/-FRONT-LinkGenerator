import { types } from '../types/types'
import detectEthereumProvider from '@metamask/detect-provider';


export const loginCheck =  () =>{
    return async (dispatch)=>{
        const { ethereum } = window
        if(ethereum){
            try {
                const newAccount = await ethereum.request({
                    method: 'eth_requestAccounts',
                })
                dispatch(login(newAccount))
            } catch (error) {
                console.error(error)
            }
        }
        else{
            alert('You need MetaMask for this action')
        }
    }
}


const login = (account) =>({
    type: types.cryptoLogin,
    payload: {
        userAddress: account
    }
})


export const transfer = (user) =>{
    return async (dispatch) =>{
        const provider = await detectEthereumProvider();
        
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        console.log(chainId)
        

    }
}
