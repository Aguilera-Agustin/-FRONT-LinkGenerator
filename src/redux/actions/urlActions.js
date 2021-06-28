import { customAxios } from "../../helpers/fetch"
import { types } from "../types/types"

export const startGetDataFromId = (id)=>{
    return async (dispatch)=>{
        dispatch(startLoading())
        if(!id){
            return null
        }
        const customId = id.split(' ').join('+')
        const myData = await customAxios('url/desencrypt', {id: customId}, 'post')
        if(!myData){
            dispatch(endLoading())
            dispatch(collectData(null))
            return null
        }
        const ars = await customAxios('pay/dollarToArs', {amount: myData.amount},'post')
        const dataWithId = {...myData, ars, enrcyptedId:customId}
        if(myData.mp_transfer===0){
            const mpLink = await customAxios('pay/mercadopago', {amount: dataWithId.amount, id:dataWithId.id}, 'post')
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

