import { PaymentContainer } from "../components/PaymentContainer"
import { Method } from "../components/Method"
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    logo:{
        width:'2rem',
        height:'2rem',
        margin: '0 1rem'
    },
    container:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:'1rem 1.5rem'
    },
})
export const TransferSelectionScreen = () => {
    const classes = useStyles()
    const options = [
        {
            name:'ars',
            title:'Pagar con ARS',
            link:`/bank_transfer_ars`,
            icon: <AttachMoneyIcon className={classes.logo}/>,
            disabled: false
        },
        {
            name:'usd',
            title:'Pagar con USD',
            link:`/bank_transfer_usd`,
            icon: <AttachMoneyIcon className={classes.logo}/>,
            disabled: false,
            
        }
    
    ]
    
    return (
        <PaymentContainer button>
            <div className={classes.container}>

            {
                options.map(eachOption=>(
                    <Method data={eachOption} key={eachOption.name}/>
                    ))
                }
            </div>
        </PaymentContainer>
    )
}
