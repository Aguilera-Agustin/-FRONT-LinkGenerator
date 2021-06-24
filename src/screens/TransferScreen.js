import { PaymentScreen } from './PaymentScreen'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { payWithBank } from '../redux/actions/paymentActions'
import { useDispatch, useSelector } from 'react-redux'
import { firstData, secondData } from '../helpers/transferData'
import { NotFound } from './NotFound'

const useStyles = makeStyles((theme)=>({
    eachText:{
        marginTop:'1rem',
        fontWeight:'100'
    },
    button:{
        width:'80%',
        marginTop:'2rem',
        [theme.breakpoints.down("sm")]: { 
            width:'100%',
            marginBottom: '1rem'
        }

    }
}))
export const TransferScreen = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const urlData = useSelector(state=>state.url.urlData)
    const handleOnClick = () =>{
        document.querySelector('#fileSelector').click()
    }
    const handleFileChange = (e) =>{
        dispatch(payWithBank(e.target.files[0], urlData.encryptedId))
    }
    return (
        <>
        {
            urlData?(
                <PaymentScreen button>
                    <Typography variant="h5" align='center' color="initial" style={{marginTop:'1rem'}}>Datos</Typography>
                    <Typography className={classes.eachText} >Tipo : {urlData.bankType===0?(firstData.type):(secondData.type)}</Typography>
                    <Typography className={classes.eachText} >CBU : {urlData.bankType===0?(firstData.cbu):(secondData.cbu)}</Typography>
                    <Typography className={classes.eachText} >Alias : {urlData.bankType===0?(firstData.alias):(secondData.alias)}</Typography>
                    <Typography className={classes.eachText} >Titular : {urlData.bankType===0?(firstData.owner):(secondData.owner)}</Typography>
                    <input type='file' style={{display:'none'}} onChange={handleFileChange} id='fileSelector' name='file'/>
                    <Button onClick={handleOnClick} className={classes.button} variant='contained' color='primary'>Cargar comprobante de pago</Button>
                </PaymentScreen>
            ):
            (
                <NotFound/>
            )
        }
        </>
    )
}
