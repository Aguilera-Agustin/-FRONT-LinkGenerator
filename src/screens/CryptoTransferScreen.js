import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { PaymentContainer } from "../components/PaymentContainer"
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    container:{
        width:'100%',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    img:{
        width:'20%',
        height:'30%',
        filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15))',
        background: 'white',
        margin: '0 auto',
        marginTop:'2rem',
        marginBottom:'0.5rem'
    },
    form:{
        display:'flex',
        flexDirection:'column',

    },
    textField:{
        marginTop:'2rem',
        width: '90%'
    },
    button:{
        width:'30%',
        marginTop:'1rem'
    }
})

export const CryptoTransferScreen = () => {
    const classes = useStyles()
    return (
        <PaymentContainer button>
            <div className={classes.container}>
                <img className={classes.img} src='/qr.png'/>
                <Typography variant='body2'>agustin.aguilera424@gmail.com</Typography>
            </div>
            <form className={classes.form}>
                <TextField  className={classes.textField} id="follow_number" label="Número de seguimiento" variant="outlined" />
                <Button className={classes.button} variant='contained' color='primary'>Enviar</Button>
            </form>
        </PaymentContainer>
    )
}
