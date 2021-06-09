import { makeStyles } from "@material-ui/core"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

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

    const mercadoPagoOnClick = () =>{
        window.location.replace('https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=220551724-569e5abe-5676-4cbe-b122-1ec170138c79');
    }

    const paymentMethods = [
        {
            name:'mercadopago',
            title:'Mercado Pago',
            icon: <MonetizationOnIcon className={classes.logo}/>,
            action: mercadoPagoOnClick
        },
        {
            name:'criptomoneda',
            title:'Criptomoneda',
            icon: <AccountBalanceWalletIcon className={classes.logo}/>,
            link:'/asdasd/crypto'
        },
        {
            name:'transferencia',
            title:'Transferencia Bancaria',
            icon: <AccountBalanceIcon className={classes.logo}/>,
            action: ()=>{console.log('hi')}
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
