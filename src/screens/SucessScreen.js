import Typography from '@material-ui/core/Typography'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';

import { getPdf } from '../helpers/fetch';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(theme=>({
    container:{
        width: '70%',
        margin:'auto',
        position:'relative',
        top:120,
        padding:'3rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        [theme.breakpoints.down("sm")]: { 
            width:'90%',
            top: 100,
            alignItems:'center',
            padding: '2rem 1rem'

        },
    },
    button:{
        width:'30%',
        marginTop:'3rem',
        [theme.breakpoints.down("sm")]: { 
            width:'90%',

        },
    }
}))


export const SucessScreen = ({id, status}) => {
    const [loading, setLoading] = useState(false)
    const handleOnClick = async () =>{
         getPdf(id, setLoading)
    }
    const classes = useStyles()
    return (
        <Paper className={classes.container}>
            {
                status===2?(
                    <Typography variant="h4" color="initial" align='center' style={{marginTop:'1rem'}}>
                        Pago Realizado <b style={{color:'lime'}}>Correctamente</b>!
                    </Typography>
                )
                :
                (
                    <Typography variant="h4" color="initial" align='center' style={{marginTop:'1rem'}}>
                        Pago en <b style={{color:'orange'}}>Revisión</b>!
                    </Typography>
                )
            }
            <Button disabled={loading} className={classes.button} variant="contained" color="primary" onClick={handleOnClick}>
                Descargar comprobante
            </Button>  
        </Paper>
    )
}
