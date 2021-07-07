import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { PaymentContainer } from "../components/PaymentContainer"
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { FormControl } from '@material-ui/core';
import { NotFound } from "./NotFound";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { binanceTransfer } from "../redux/actions/paymentActions";
import { isDateAvailable } from "../helpers/getDateDiff";

const useStyles = makeStyles((theme)=>({
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
        marginBottom:'0.5rem',
        [theme.breakpoints.down("sm")]: { 
            width: '80%'
        }
    },
    form:{
        display:'flex',
        flexDirection:'column',

    },
    textField:{
        marginTop:'2rem',
        width: '90%',
        [theme.breakpoints.down("sm")]: { 
            width: '100%'
        }
    },
    button:{
        width:'30%',
        marginTop:'1rem'
    }
}))

export const CryptoTransferScreen = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const {urlData} = useSelector(state => state.url)
    const [followNumber, setFollowNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)
        dispatch(binanceTransfer(urlData.enrcyptedId, followNumber ))
        setLoading(false)
        
    }
    return (
        <>
        {
            urlData?(
                <PaymentContainer button available={isDateAvailable(urlData.createdAt, urlData.duration)}>
                    <div className={classes.container}>
                        <img className={classes.img} src='/qr.png' alt='qr_code'/> 
                        <Typography variant='subtitle2'>SuperCripto</Typography>
                        <Typography variant='body2'>info@supersistemasweb.com</Typography>
                    </div>

                        <FormControl className={classes.form} onSubmit={handleOnSubmit} component='form'>
                            <TextField  autoComplete='off' className={classes.textField} id="follow_number" label="Número de seguimiento" onChange={(e)=>setFollowNumber(e.target.value)} disabled={loading} variant="outlined"/>
                            <Button className={classes.button} variant='contained' color='primary' type='submit' disabled={followNumber.length<4 || loading}>Enviar</Button>
                        </FormControl>
                </PaymentContainer>
            )
            :
            (
                <NotFound/>
            )
        }
        </>
    )
}
