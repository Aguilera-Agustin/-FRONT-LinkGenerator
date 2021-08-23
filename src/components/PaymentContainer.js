import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import {  Button, Divider, Hidden, makeStyles, Paper, Typography } from '@material-ui/core'

import { SucessScreen } from "../screens/SucessScreen";
import { LinkExpired } from "../screens/LinkExpired";
import { ChangeThemeButton } from "./ChangeThemeButton";
import { MoneySelector } from "./MoneySelector";

const useStyles = makeStyles(theme=>({
    formContainer:{
        width: '70%',
        margin:'auto',
        position:'relative',
        top:50,
        display:'flex',
        paddingBottom: '1rem',
        [theme.breakpoints.down("sm")]: { 
            flexDirection:'column',
            width:'90%',
            top: 10,
            alignItems:'center',
            padding: '2rem 1rem'

        },
    },
    amount:{
        height:'26rem',
        width:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding: '1rem',
        flexDirection:'column',
        [theme.breakpoints.down("sm")]: { 
            alignItems:'center',
            justifyContent:'center',
            height: '12rem',
            width:'100%',

        },
    },
    backButton:{
        position:'absolute',
        margin:'auto',
        bottom:0
    },
    expiredInfo:{
        position:'absolute',
        margin:'auto',
        bottom:4,
        right: 0,
        left: 0,
        fontSize: '0.8rem'
    },
   
}))



export const PaymentContainer = ({title, children, button, expiredInfo, available=true, money}) => {
    const history = useHistory()
    const classes = useStyles()
    const {amount} = useSelector(state => state.url.urlData)
    const {ars} = useSelector(state => state.url.urlData)
    const {status} = useSelector(state => state.url.urlData)
    const {encryptedId} = useSelector(state => state.url.urlData)
    return (
        <>
            {
                status===-1?(
                    <>
                            {available?(
                                <Paper elevation={8} className={classes.formContainer} square>
                                <div className={classes.amount} >
                                    <Typography align='center' variant='button' style={{fontWeight:'lighter', margin:'0 1rem'}} >A pagar</Typography>
                                    {money?(
                                        <>
                                        <Typography align='center' variant='h3' style={{fontWeight:'lighter',}} >{money.money.value}</Typography>
                                        <MoneySelector change={money.money.action} value={money.money.currency}/>
                                        </>
                                    ):
                                    (
                                        <>
                                            <Typography variant='h3' style={{fontWeight:'lighter',}} >{`U$D ${amount}`}</Typography>
                                            <Typography variant='h6' color='textSecondary' style={{fontWeight:'lighter',}} >{`$ARS ${ars}`}</Typography>
                                            <Typography variant='body2' color='textSecondary' style={{fontWeight:'lighter', marginTop:'0.3rem'}} >Pagos con CriptoMonedas - 20-40% OFF</Typography>
                                        </>
                                    )}
                                </div>
                                <div style={{width:'100%'}}>
                                    <Hidden smUp>
                                        <Divider/>
                                    </Hidden>
                                    <ChangeThemeButton/>
                                    {
                                        title && (
                                            <Typography variant='h6' style={{marginTop:'1rem', fontWeight:'lighter'}} align='center'>{title}</Typography>
                                        )
                                    }
                                    {children}
                                </div>
                                {button?(
                                    <Button className={classes.backButton} onClick={()=>history.goBack()}>Regresar</Button>
                                ):
                                (
        
                                <Typography align='center' color='textSecondary' className={classes.expiredInfo}>
                                    {`Link expira el : ${expiredInfo}`} 
                                </Typography>
                                )
                                }
                            </Paper>
                            ):
                            (
                                <LinkExpired/>
                            )}
                        </>
                    
                )
                :
                (
                    <SucessScreen id={encryptedId} status={status} />
                )
            }
            
        </>
    )
}
