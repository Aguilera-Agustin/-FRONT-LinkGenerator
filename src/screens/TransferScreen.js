import React from 'react'
import { PaymentScreen } from './PaymentScreen'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { payWithBank } from '../redux/actions/paymentActions'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles({
    eachText:{
        marginTop:'1rem',
        fontWeight:'100'
    },
    button:{
        width:'80%',
        marginTop:'2rem'
    }
})
export const TransferScreen = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const encryptedId = useSelector(state=>state.url.urlData.enrcyptedId)
    const handleOnClick = () =>{
        document.querySelector('#fileSelector').click()
    }
    const handleFileChange = (e) =>{
        console.log(e.target.files)
        dispatch(payWithBank(e.target.files[0], encryptedId))
    }
    return (
        <PaymentScreen button>
            <Typography variant="h5" align='center' color="initial" style={{marginTop:'1rem'}}>Datos</Typography>
            <Typography className={classes.eachText} >Tipo : Caja de ahorro USD</Typography>
            <Typography className={classes.eachText} >CBU : 2590070721318147020113</Typography>
            <Typography className={classes.eachText} >Alias : SSWEB-CA-D</Typography>
            <Typography className={classes.eachText} >Titular : Nunez,Luis Fernando</Typography>
            <input type='file' style={{display:'none'}} onChange={handleFileChange} id='fileSelector' name='file'/>
            <Button onClick={handleOnClick} className={classes.button} variant='contained' color='primary'>Cargar comprobante de pago</Button>
        </PaymentScreen>
    )
}
