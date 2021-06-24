import { useHistory } from "react-router-dom";
import {  Button, Divider, Hidden, makeStyles, Paper, Typography } from '@material-ui/core'
import { useSelector } from "react-redux";
import { Sucess } from "../components/Sucess";


const useStyles = makeStyles(theme=>({
    formContainer:{
        width: '70%',
        margin:'auto',
        position:'relative',
        top:50,
        display:'flex',
        [theme.breakpoints.down("sm")]: { 
            flexDirection:'column',
            width:'90%',
            top: 10,
            alignItems:'center',
            padding: '2rem 1rem'

        },
    },
    img:{
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
            height: '12rem'
        },
    },
    backButton:{
        position:'absolute',
        margin:'auto',
        bottom:0
    }
   
}))



export const PaymentScreen = ({title, children, button}) => {
    const history = useHistory()
    const classes = useStyles()
    const {amount} = useSelector(state => state.url.urlData)
    const {status} = useSelector(state => state.url.urlData)
    const {enrcyptedId} = useSelector(state => state.url.urlData)
    return (
        <>
            {
                status===-1?(
                    <Paper elevation={8} component='form' className={classes.formContainer} square>
                        <div className={classes.img} >
                            <Typography variant='button' style={{fontWeight:'lighter', margin:'0 1rem'}} >A pagar</Typography>
                            <Typography variant='h3' style={{fontWeight:'lighter',}} >{`U$D ${amount}`}</Typography>
                        </div>
                        <div style={{width:'100%'}}>
                            <Hidden smUp>
                                <Divider/>
                            </Hidden>
                            {
                                title && (
                                    <Typography variant='h6' style={{marginTop:'1rem', fontWeight:'lighter'}} align='center'>{title}</Typography>
                                )
                            }
                            {children}
                        </div>
                        {button&&(
                            <Button className={classes.backButton} onClick={()=>history.goBack()}>Regresar</Button>
                        )}
                    </Paper>
                )
                :
                (
                    <Sucess id={enrcyptedId} status={status} />
                )
            }
            
        </>
    )
}
