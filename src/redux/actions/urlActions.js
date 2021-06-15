import { customAxios } from "../../helpers/fetch"
import { types } from "../types/types"

export const startGetDataFromId = (id)=>{
    return async (dispatch)=>{
        const customId = id.split(' ').join('+')
        const myData = await customAxios('url/desencrypt', {id: customId}, 'post')
        const dataWithId = {...myData, enrcyptedId:customId}
        if(myData.mp_transfer===0){
            const mpLink = await customAxios('pay/mercadopago', {amount: dataWithId.amount}, 'post')
            const finalData = {...dataWithId, mpLink}
            dispatch(collectData(finalData))
        }
        else{
            dispatch(collectData(dataWithId))
        }
    }
}

const collectData = (data) =>({
    type: types.dbRetrieveData,
    payload: data
})