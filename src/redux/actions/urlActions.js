import { customAxios } from "../../helpers/fetch"
import { types } from "../types/types"

export const startGetDataFromId = (id)=>{
    return async (dispatch)=>{
        dispatch(startLoading())
        if(!id){
            return null
        }
        const customId = id.split(' ').join('+')
        const myData = (await customAxios('url/desencrypt', {id: customId}, 'post')).data
        if(!myData){
            dispatch(endLoading())
            dispatch(collectData(null))
            return null
        }
        const arsAux = (await customAxios('pay/dollarToArs', {amount: myData.amount},'post')).data
        const ars = arsAux.toFixed(2)
        const dataWithId = {...myData, ars, enrcyptedId:customId}
        if(myData.mp_transfer===0) {
            const mpLink = (await customAxios('pay/mercadopago', {amount: dataWithId.amount, id:dataWithId.enrcyptedId, business_type: dataWithId.business_type}, 'post')).data
            const finalData = {...dataWithId, mpLink}
            dispatch(collectData(finalData))
            dispatch(endLoading())
        }
        else{
            dispatch(collectData(dataWithId))
            dispatch(endLoading())
        }
    }
}

export const selectById = (id) => {
    return async ( dispatch )=>{
        const myData = (await customAxios(`url/${id}`)).data
        dispatch(startGetDataFromId(myData.url.split('id=')[1]))
    }
}


const collectData = (data) =>({
    type: types.dbRetrieveData,
    payload: data
})

export const transferSuccess = () =>({
    type: types.dbTransferSuccess
})

const startLoading = () =>({
    type: types.dbStartLoading
})

const endLoading = () =>({
    type: types.dbEndLoading
})

