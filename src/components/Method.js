import { Link } from "react-router-dom"

import { makeStyles, Paper, Typography } from "@material-ui/core"
import { CircularProgress } from "@material-ui/core"

const useStyles = makeStyles({

    container:{
        width:'100%',
        height:'5rem',
        marginTop:'1rem',
        cursor: 'pointer',
        transition: 'all 0.3s linear',
        '&:hover':{
            transform: 'scale(1.04)'
        },
        display:'flex',
        alignItems:'center',
        color: 'inherit',
        textDecoration: 'inherit',
    },
    disabledContainer:{             //TODO - Unique class with props
        width:'100%',
        height:'5rem',
        marginTop:'1rem',
        display:'flex',
        alignItems:'center',
        opacity:0.3,
        color: 'inherit',
        textDecoration: 'inherit',
    }



})


export const Method = ({data}) => {
    const {title, icon, link, action, disabled, loading} = data
    const classes = useStyles()
    
    return (
        <>
        {(link && !disabled)?(
            <Paper elevation={3} square  className={disabled?(classes.disabledContainer):(classes.container)} component={Link} to={link}>
                {icon}
                <Typography  variant='h6' color='textSecondary' style={{textDecoration:'none'}}>{title}</Typography>
            </Paper>
        )    
            :
            (
                <Paper elevation={3} square className={disabled?(classes.disabledContainer):(classes.container)} onClick={disabled?(null):(action)}>
                    {(disabled&&loading) ? (<CircularProgress style={{margin:'0 1rem'}}/>) : (icon) }
                    <Typography  variant='h6' color='textSecondary'>{title}</Typography>
                </Paper>

            )
        }
        </>
    )
}