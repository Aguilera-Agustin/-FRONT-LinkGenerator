import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SendIcon from '@material-ui/icons/Send';

import { Method } from "./Method"




const useStyles = makeStyles({
    container:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:'1rem 1.5rem'
    },
    item:{
        width:'100%',
        height:'5rem',
        marginTop:'0.5rem',
        
    },
    logo:{
        width:'2rem',
        height:'2rem',
        margin: '0 1rem'
    }
})


export const ChoosePayment = () => {

    const classes = useStyles()
    const {mp_transfer, crypto_transfer, bank_transfer, mpLink} = useSelector(state => state.url.urlData)
    const mercadoPagoOnClick = () =>{
        window.location.assign(mpLink);
    }

    const paymentMethods = [
        {
            name:'mercadopago',
            title:'Mercado Pago',
            icon: <MonetizationOnIcon className={classes.logo}/>,
            action: mercadoPagoOnClick,
            disabled:mp_transfer===-1
        },
        {
            name:'criptomoneda',
            title:'Transferencia Criptomoneda',
            icon: <AccountBalanceWalletIcon className={classes.logo}/>,
            link:`/crypto`,
            disabled:crypto_transfer===-1
        },
        {
            name:'transferencia',
            title:'Transferencia Bancaria',
            icon: <AccountBalanceIcon className={classes.logo}/>,
            link:`/bank_transfer`,
            disabled:bank_transfer===-1
        },
        {
            name:'binance',
            title:'Transferencia Binance P2P',
            icon: <SendIcon className={classes.logo}/>,
            link:`/binance_transfer`,
            disabled:bank_transfer===-1
        },
    
    ] 


    return (
        <div className={classes.container}>
            {paymentMethods.map((eachPayment)=>(
                <Method data={eachPayment} key={eachPayment.name}/>
                ))}
        </div>
    )
}
