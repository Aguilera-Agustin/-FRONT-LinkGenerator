import { makeStyles } from "@material-ui/core"
import { Method } from "../components/Method"
import { PaymentScreen } from "./PaymentScreen"
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch, useSelector } from "react-redux";
import { loginCheck, transfer } from "../redux/actions/paymentActions";
import { NotFound } from "./NotFound";

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
    },
})


export const CryptoScreen = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.payment.userAddress)
    const urlData = useSelector(state=>state.url.urlData)
    
    const handleOnLogin = () =>{
        dispatch(loginCheck())
    }

    const handleOnPay = () =>{
        dispatch(transfer(urlData.enrcyptedId,user, urlData.amount ))
    }
   

    const classes = useStyles()
    const paymentMethods = [
        {
            name:'loginmetamask',
            title:'Iniciar Sesión Metamask',
            action: handleOnLogin,
            icon: <VpnKeyIcon className={classes.logo}/>,
            disabled: user
        },
        {
            name:'transferir',
            title:'Transferir',
            action: handleOnPay,
            icon: <SendIcon className={classes.logo}/>,
            disabled: !user
        },
       
    
    ]


    return (
        <>
            {
                urlData?(
                    <PaymentScreen button>
                    {
                        urlData.crypto_transfer!==1&&(
    
                            <div className={classes.container}>
                                {paymentMethods.map((eachPayment)=>(
                                    <Method data={eachPayment} key={eachPayment.name}/>
                                    ))}
                            </div>
                        )
                    }
                    </PaymentScreen>
                )
                :
                (
                    <NotFound/>
                )
            }
           
        </>
    )
}
