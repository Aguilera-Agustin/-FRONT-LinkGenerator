import { makeStyles } from "@material-ui/core"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import { Method } from "./Method"
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'




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
    const {mp_transfer, crypto_transfer, bank_transfer, mpLink, enrcyptedId} = useSelector(state => state.url.urlData)
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
            title:'Criptomoneda',
            icon: <AccountBalanceWalletIcon className={classes.logo}/>,
            link:`/${enrcyptedId}/crypto`,
            disabled:crypto_transfer===-1
        },
        {
            name:'transferencia',
            title:'Transferencia Bancaria',
            icon: <AccountBalanceIcon className={classes.logo}/>,
            link:`/${enrcyptedId}/bank_transfer`,
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
