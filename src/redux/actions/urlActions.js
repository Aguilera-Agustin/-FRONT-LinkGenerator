import { customAxios, customFetch } from "../../helpers/fetch"
import { types } from "../types/types"

export const startGetDataFromId = (id)=>{
    return async (dispatch)=>{
        const customId = id.split(' ').join('+')
        const myData = await customAxios('url/desencrypt', {id: customId}, 'post')
        if(myData.mp_transfer===1){
            const mpLink = await customAxios('pay/mercadopago', {amount: myData.amount}, 'post')
            const finalData = {...myData, mpLink}
            dispatch(collectData(finalData))
        }
        else{
            dispatch(collectData(myData))
        }
    }
}

const collectData = (data) =>({
    type: types.dbRetrieveData,
    payload: data
})