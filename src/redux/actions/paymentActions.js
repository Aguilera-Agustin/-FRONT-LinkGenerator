import { types } from '../types/types'
//import detectEthereumProvider from '@metamask/detect-provider';
import Swal from 'sweetalert2'
import { customAxios, sendImage } from '../../helpers/fetch';
import Web3 from 'web3';
import { collectData, startGetDataFromId } from './urlActions';
import { abiUSDT, addressUSDT } from './abiaddress';


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


export const transfer = (id, user, amount) =>{
    return async (dispatch) =>{
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const contractInstance = new web3.eth.Contract(abiUSDT, addressUSDT);
        const tx = {
            from: user[0],
            to: contractInstance._address,
            data: contractInstance.methods.transfer('0x2f318C334780961FB129D2a6c30D0763d9a5C970', web3.utils.toWei( amount.toString(), 'lovelace' ) ).encodeABI(),
        }
        web3.eth.sendTransaction(tx).then(res => {
            const transactionNumber = res.transactionHash
            customAxios('pay/buySuccess', {id, follow_number_crypto: transactionNumber}, 'put')
                .then((dbRes) => {
                    if(dbRes==='Success!'){
                        console.log('Compra exitosa')
                    }
                    else{
                        console.log('Compra rechazada')
                    }
                })
                .catch(dbErr => console.log(dbErr))
        }).catch(err => {
            console.log("err",err)
        });

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