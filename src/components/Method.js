import { makeStyles, Paper, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import React from 'react';

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
    const {title, icon, link, action, disabled} = data
    const classes = useStyles()
    
    return (
        <>
        {link?(
            <Paper elevation={3} square  className={disabled===0?(classes.disabledContainer):(classes.container)} component={Link} to={link}>
                {icon}
                <Typography  variant='h6' color='textSecondary' style={{textDecoration:'none'}}>{title}</Typography>
            </Paper>
        )    
            :
            (
                <Paper elevation={3} square className={disabled===0?(classes.disabledContainer):(classes.container)} onClick={disabled===0?(null):(action)}>
                    {icon}
                    <Typography  variant='h6' color='textSecondary'>{title}</Typography>
                </Paper>

            )
        }
        </>
    )
}