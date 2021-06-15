import { types } from '../types/types'
import detectEthereumProvider from '@metamask/detect-provider';
import Swal from 'sweetalert2'


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
        const networks = {
            binance: '0x38', // 56 in Hexa
            polygon: '0x89', // 137 in Hexa,
            ethereum: '0x1'
        }
        if(chainId===networks.binance){
            const transactionParameters = {
                to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
                from: user[0], // must match user's active address.
                value: '0x00', // Only required to send ether to the recipient from the initiating external account.
                chainId
              };
              const confirmation = await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
              });
        }
        if(chainId===networks.polygon){
            return console.log("Polygon")
            
        }
        if(chainId===networks.ethereum){
            return console.log("Ethereum")

        }
        else{
            const transactionParameters = {
                to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
                from: user[0], // must match user's active address.
                value: '0x00', // Only required to send ether to the recipient from the initiating external account.
                chainId
              };
              const confirmation = await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
              });
              console.log(confirmation)
        }
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, elija una network válida desde su billetera: Binance - Polygon - Ethereum',
          })
    }
}
