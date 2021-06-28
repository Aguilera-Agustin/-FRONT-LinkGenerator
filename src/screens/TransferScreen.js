import { useDispatch, useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { PaymentContainer }from '../components/PaymentContainer'
import { payWithBank } from '../redux/actions/paymentActions'
import { firstData, secondData } from '../helpers/transferData'
import { NotFound } from './NotFound'
import { useState } from 'react'

const useStyles = makeStyles((theme)=>({
    eachText:{
        marginTop:'1rem',
        fontWeight:'100'
    },
    button:{
        width:'80%',
        marginTop:'2rem',
        display:'block',
        marginBottom:'2rem',
        [theme.breakpoints.down("sm")]: { 
            width:'100%',
            marginBottom: '1rem'
        }

    },
    eachImg:{
        width:'5rem',
        height:'5rem',
        marginBottom:'0.3rem'
    },
    eachImgContainer:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        marginRight:'1rem'
    },
    imgContainer:{
        display:'flex',
        flexWrap:'wrap'
    },
    btnDelete:{
        height:'1.3rem',
        marginBottom:'1rem'

    }
}))
export const TransferScreen = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [images, setImages] = useState([])
    const urlData = useSelector(state=>state.url.urlData)
    const handleOnClick = () =>{
        document.querySelector('#fileSelector').click()
    }
    const handleFileChange = (e) =>{
        
        if(e.target.files.length === 0 ){
            return null
        }
        const files = Array.from(e.target.files)
        let newArray = []
        files.map(element => {
            newArray.push(URL.createObjectURL(element))
        })
        setImages([...images,...newArray])
        //dispatch(payWithBank(e.target.files[0], urlData.enrcyptedId))
    }
    return (
        <>
        {
            urlData?(
                <PaymentContainer button>
                    <Typography variant="h5" align='center' color="initial" style={{marginTop:'1rem'}}>Datos</Typography>
                    <Typography className={classes.eachText} >Tipo : {urlData.bankType===0?(firstData.type):(secondData.type)}</Typography>
                    <Typography className={classes.eachText} >CBU : {urlData.bankType===0?(firstData.cbu):(secondData.cbu)}</Typography>
                    <Typography className={classes.eachText} >Alias : {urlData.bankType===0?(firstData.alias):(secondData.alias)}</Typography>
                    <Typography className={classes.eachText} >Titular : {urlData.bankType===0?(firstData.owner):(secondData.owner)}</Typography>
                    <input type='file' multiple style={{display:'none'}} onChange={handleFileChange} id='fileSelector' name='file'/>
                    <Button onClick={handleOnClick} className={classes.button} variant='contained' color='primary'>Cargar comprobante de pago</Button>
                    {
                        images&&(
                            <div className={classes.imgContainer}>
                                {
                                    
                                    images.map((eachImage)=>(
                                        <div key={eachImage} className={classes.eachImgContainer}>
                                            <img src={eachImage} className={classes.eachImg}/>
                                            <Button className={classes.btnDelete} color='primary' variant='contained' size='small'>BORRAR</Button>
                                        </div>
                                    ))
                                }
                                
                                
                            </div>
                        )
                    }
                </PaymentContainer>
            ):
            (
                <NotFound/>
            )
        }
        </>
    )
}
