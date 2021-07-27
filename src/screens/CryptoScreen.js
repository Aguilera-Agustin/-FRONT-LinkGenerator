import { useState } from 'react';
import { Button, Divider, makeStyles, TextField } from '@material-ui/core'
import { PaymentContainer } from '../components/PaymentContainer'


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
    const [money, setMoney] = useState({currency: '', value: 'U$D 1.33'})
    const handleOnChange = (e) =>{
        const newMoney = {
            currency: e.target.value,
            value: 'U$D 1.33'
        }
        setMoney(newMoney)
    }
    return (
        <PaymentContainer button title='Datos' money={{money, change:handleOnChange}}>
            <div className={classes.dataContainer}>
                <p>Networks : <b>Binance</b> | <b>Polygon</b> | <b>Etherum</b> </p>
                <p>Monedas : <b>USDT</b> | <b>USDC</b> | <b>DAI</b> | <b>ETH</b> </p>
                <p>Dirección : <b>0xE81D717f40d08CD3772a9f8e68Ae485A77aCCe80</b></p>
                <Divider className={classes.divider}/>
                <div className={classes.buttonContainer}>
                    <TextField className={classes.textField} autoComplete='off' id="follow_number" label="Número de transaccion"  variant="outlined"/>
                    <Button size='small' variant='contained' color='primary'>X</Button>
                </div>
                <div className={classes.centeredButton}>
                    <Button className={classes.button} variant='contained' color='primary'>Enviar</Button>
                </div>
            </div>
        </PaymentContainer>
    )
}
