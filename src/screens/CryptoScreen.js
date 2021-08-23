import { useEffect, useState } from 'react';
import { Button, Divider, makeStyles, TextField } from '@material-ui/core'
import { PaymentContainer } from '../components/PaymentContainer'
import { useDispatch, useSelector } from "react-redux"
import { binanceTransfer, startGetCurrency } from '../redux/actions/paymentActions';

const useStyles = makeStyles({
    dataContainer: {
        overflowWrap: 'break-word'
    },
    divider:{
        marginRight:'1rem'
    },
    buttonContainer:{
        display:'flex',
        justifyContent:'center',
        marginTop:'1rem'
    },
    textField:{
        width:'80%'
    },
    centeredButton:{
        marginTop:'1rem',
        display:'flex',
        width:'100%',
        justifyContent:'center'
    }
})

export const CryptoScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [money, setMoney] = useState('usdt')
    const [transactionNumber, setTransactionNumber] = useState('')
    const moneyValue = useSelector(state => state.payment.money)
    const urlData = useSelector(state => state.url.urlData)
    useEffect(() => {
        dispatch(startGetCurrency())
    }, [dispatch])
    const handleOnChange = (e) =>{
        setMoney(e.target.value)
    }


    const handleOnPay = () =>{
        console.log(urlData)
        dispatch(binanceTransfer(urlData.encryptedId, transactionNumber))
    }

    const moneyToSend={
        currency: money,
        action: handleOnChange,
        value: moneyValue?(`${money.toUpperCase()} ${moneyValue[money]}`):'Cargando...'
    }
    return (
        <PaymentContainer button title='Datos' money={{money: moneyToSend}}>
            <div className={classes.dataContainer}>
                <p>Networks : <b>Binance</b> | <b>Polygon</b> | <b>Etherum</b> </p>
                <p>Monedas : <b>USDT</b> | <b>USDC</b> | <b>DAI</b> | <b>ETH</b> </p>
                <p>Dirección : <b>0xE81D717f40d08CD3772a9f8e68Ae485A77aCCe80</b></p>
                <Divider className={classes.divider}/>
                <div className={classes.buttonContainer}>
                    <TextField className={classes.textField} autoComplete='off'  id="follow_number" label="Número de transaccion" value={transactionNumber} onChange={e=>setTransactionNumber(e.target.value)} variant="outlined"/>
                </div>
                <div className={classes.centeredButton}>
                    <Button className={classes.button} onClick={handleOnPay} variant='contained' color='primary'>Enviar</Button>
                </div>
            </div>
        </PaymentContainer>
    )
}
