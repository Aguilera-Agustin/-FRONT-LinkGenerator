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
import { IconButton } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme)=>({
    eachText:{
        marginTop:'1rem',
        fontWeight:'100'
    },
   
    
    imgContainer:{
        display:'flex',
        flexWrap:'wrap'
    },
    copyContainer:{
        display:'flex',
        alignitems:'flex-end'
    }
    
    
}))
export const TransferScreen = ({type}) => {
    const classes = useStyles()
    const urlData = useSelector(state=>state.url.urlData)
    const [bank, setBank] = useState('')
    const {acc, alias, num, transferData, type:transferType, bank:usdBank} = getTransferData(urlData.business_type, type, bank)
    
    const changeBank = (e) =>{
        setBank(e.target.value.toLowerCase())
    }

    const handleOnCopy = (state) =>{
        navigator.clipboard.writeText(state)
    }

    return (
        <>
        {
            urlData?(
                <PaymentContainer button available={isDateAvailable(urlData.createdAt, urlData.duration)}>
                    <Typography variant="h5" align='center' color="initial" style={{marginTop:'1rem'}}>Datos</Typography>
                    <TransferSelector type={type} changeBank={changeBank} bank={bank}/>
                    <Typography className={classes.eachText} >Titular : {urlData.business_type===0?('Luis Fernando de Jesus Nuñez'):('Supersistemasweb SRL')}  </Typography>
                    <Typography className={classes.eachText} >Banco : {type==='usd'?(usdBank) : (bank.toUpperCase() || 'MACRO')}  </Typography>
                    <Typography className={classes.eachText} >Tipo : {acc}  </Typography>
                    <div className={classes.copyContainer}>
                        <Typography className={classes.eachText} >{transferType} : {transferData}</Typography>
                        <IconButton  color="primary" aria-label="upload picture" component="span" onClick={()=>handleOnCopy(transferData)}>
                            <AssignmentIcon />
                        </IconButton> 
                    </div>
                    <div className={classes.copyContainer}>
                        <Typography className={classes.eachText} >Alias : {alias}</Typography>
                        <IconButton  color="primary" aria-label="upload picture" component="span" onClick={()=>handleOnCopy(alias)}>
                            <AssignmentIcon />
                        </IconButton> 
                    </div>
                    <Typography className={classes.eachText} >Cuit : {urlData.business_type===0?('20-26110188-3'):('33-71469665-9')}</Typography>
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
