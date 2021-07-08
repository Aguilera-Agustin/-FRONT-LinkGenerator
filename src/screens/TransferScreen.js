import {  useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'


import { PaymentContainer }from '../components/PaymentContainer'
import {getTransferData } from '../helpers/transferData'
import { NotFound } from './NotFound'
import { useState } from 'react'
import { isDateAvailable } from '../helpers/getDateDiff'
import { TransferSelector } from '../components/TransferSelector'

import {UploadImageForm} from '../components/UploadImageForm'


const useStyles = makeStyles((theme)=>({
    eachText:{
        marginTop:'1rem',
        fontWeight:'100'
    },
   
    
    imgContainer:{
        display:'flex',
        flexWrap:'wrap'
    },
   
    
    
}))
export const TransferScreen = ({type}) => {
    const classes = useStyles()
    const urlData = useSelector(state=>state.url.urlData)
    const [bank, setBank] = useState('')
    const {acc, alias, num, transferData, type:transferType, bank:usdBank} = getTransferData(urlData.business_type, type, bank)
    
    const changeBank = (e) =>{
        setBank(e.target.value.toLowerCase())
    }

    return (
        <>
        {
            urlData?(
                <PaymentContainer button available={isDateAvailable(urlData.createdAt, urlData.duration)}>
                    <Typography variant="h5" align='center' color="initial" style={{marginTop:'1rem'}}>Datos</Typography>
                    <TransferSelector type={type} changeBank={changeBank} bank={bank}/>
                    <Typography className={classes.eachText} >Banco : {type==='usd'?(usdBank) : (bank.toUpperCase() || 'MACRO')}  </Typography>
                    <Typography className={classes.eachText} >Tipo : {acc}  </Typography>
                    <Typography className={classes.eachText} >{transferType} : {transferData}</Typography>
                    <Typography className={classes.eachText} >Alias : {alias}</Typography>
                    {
                        num&&(
                            <Typography className={classes.eachText} >Número de cuenta : {num}</Typography>
                        )
                    }
                    <UploadImageForm urlData={urlData}/>
                </PaymentContainer>
            ):
            (
                <NotFound/>
            )
        }
        </>
    )
}
