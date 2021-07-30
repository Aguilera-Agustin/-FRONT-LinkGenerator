import { types } from '../types/types'
import Swal from 'sweetalert2'
import { customAxios, sendImage } from '../../helpers/fetch';
import {  startGetDataFromId } from './urlActions';

export const binanceTransfer = (id, followNumber) =>{
    return async (dispatch) => {
        const res = await customAxios('pay/buyInProgress/crypto', {id, followNumber}, 'put')
        if(res.status<300){
            Swal.fire({
                icon: 'success',
                title: 'Estado',
                text: 'Pago informado correctamente!',
              })
            dispatch(startGetDataFromId(id))
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

export const startGetCurrency = () =>{
    return async (dispatch, getState) =>{
        dispatch(startLoading())
        const amount = getState().url.urlData.amount
        const usdt = await customAxios(`pay/getValueForMetamask?asset=usdt&amount=${amount}`)
        const dai = await customAxios(`pay/getValueForMetamask?asset=dai&amount=${amount}`)
        const eth = await customAxios(`pay/getValueForMetamask?asset=eth&amount=${amount}`)
        const finalValues = ({usdt: usdt.data.metamask, dai: dai.data.metamask, eth: eth.data.metamask})
        dispatch(getCurrency(finalValues))
        dispatch(endLoading())


    }
}

const getCurrency = (data)=>({
    type: types.cryptoGetCurrency,
    payload: data
})

const startLoading = () =>({
    type: types.cryptoStartLoading
})


const endLoading = () => ({
    type: types.cryptoEndLoading
})