import Swal from 'sweetalert2'
import Web3 from 'web3';

import { customAxios, sendImage } from '../../helpers/fetch';
import { types } from '../types/types'
import {  startGetDataFromId } from './urlActions';
import {  abiDai,  abiUSDT, addressDai, addressUSDT } from '../../helpers/abiaddress';


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


export const transfer = (id, user, amount, type) =>{
    return async (dispatch) =>{
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        const isNetworkAvailable = await checkNetwork(chainId)
        if(isNetworkAvailable){
            const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
            const {abi, address, moneyType} = getAbiAddress(type)
            const contractInstance = new web3.eth.Contract(abi, address);
            const tx = {
                from: user[0],
                to: contractInstance._address,
                data: contractInstance.methods.transfer('0x2f318C334780961FB129D2a6c30D0763d9a5C970', web3.utils.toWei( amount.toString(), moneyType ) ).encodeABI(),
            }
            web3.eth.sendTransaction(tx).then(res => {
                const transactionNumber = res.transactionHash
                customAxios('pay/buySuccess', {id, follow_number_crypto: transactionNumber, chain_id: chainId}, 'put')
                .then((dbRes) => {
                    if(dbRes==='Success!'){
                        dispatch(startGetDataFromId(id))
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
        else{
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, elija una network válida desde su billetera: Binance - Polygon - Ethereum',
              })
        }
    }
}

const checkNetwork = async (chainId) =>{
    
    const networks = {
        binance: '0x38', // 56 in Hexa
        polygon: '0x89', // 137 in Hexa,
        ethereum: '0x1'
    }
    return chainId===networks.binance || chainId===networks.polygon || chainId===networks.ethereum
}

const getAbiAddress = (type) =>{
    if(type==='usdt'){
        return {
            abi: abiUSDT,
            address: addressUSDT,
            moneyType: 'lovelace'
        }
    }
    if(type==='dai'){
        return {
            abi: abiDai,
            address: addressDai,
            moneyType: 'ether'
        }
    }  
}

export const payWithBank = (data, id, setLoading) =>{
    return async (dispatch) =>{
        setLoading(true)
        const res = await sendImage(id, data)
        setLoading(false)
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