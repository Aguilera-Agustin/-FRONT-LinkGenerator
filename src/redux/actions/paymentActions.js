import { types } from '../types/types'
//import detectEthereumProvider from '@metamask/detect-provider';
import Swal from 'sweetalert2'
import { customAxios, sendImage } from '../../helpers/fetch';
import Web3 from 'web3';
import { collectData, startGetDataFromId } from './urlActions';


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


export const transfer = (user, amount) =>{
    return async (dispatch) =>{
        //const provider = await detectEthereumProvider();
        const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
        const moneyValue = await customAxios(`pay/priceByAmount/${amount}`)
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        const networks = {
            binance: '0x38', // 56 in Hexa
            polygon: '0x89', // 137 in Hexa,
            ethereum: '0x1'
        }
        if(chainId===networks.binance){
            web3.eth.sendTransaction({
              from: user[0],
              to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
              value: web3.utils.toWei(moneyValue.toString(), 'ether'),
        
            }, (result) => {
              console.log(result)
            })
        }
        else if(chainId===networks.polygon){
            web3.eth.sendTransaction({
              from: user[0],
              to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
              value: web3.utils.toWei(moneyValue.toString(), 'ether'),
        
            }, (result) => {
              console.log(result)
            })
            return console.log("Polygon")
            
        }
        else if(chainId===networks.ethereum){
            web3.eth.sendTransaction({
              from: user[0],
              to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
              value: web3.utils.toWei(moneyValue.toString(), 'ether'),
        
            }, (result) => {
              console.log(result)
            })
            return console.log("Ethereum")
            
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, elija una network válida desde su billetera: Binance - Polygon - Ethereum',
              })
        }
    }
}


export const payWithBank = (data, id) =>{
    return async (dispatch) =>{
        const res = await sendImage(id, data)
                if(res.status===200){
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    dispatch(startGetDataFromId(id))
                }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Internal Server Error',
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
        
    }
}