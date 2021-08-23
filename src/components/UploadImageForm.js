import { makeStyles } from "@material-ui/core"
import { useState } from "react"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"
import { payWithBank } from '../redux/actions/paymentActions'
import { CircularProgress } from "@material-ui/core"
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    spinner:{
        width: '100%',
        display:'flex',
        justifyContent:'center',
        margin: '1rem 0'
    },
    buttonContainer:{
        display:'flex',
        marginTop:'2rem',
        [theme.breakpoints.down("sm")]: { 
            flexDirection:'column'
        }
    },
    button:{
        display:'block',
        marginBottom:'2rem',
        marginRight:'0.5rem',
        [theme.breakpoints.down("sm")]: { 
            width:'100%',
            marginBottom: '1rem'
        }
        
    },
    btnDelete:{
        height:'1.3rem',
        marginBottom:'1rem'
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
}))

export const UploadImageForm = ({urlData}) => {
    const classes = useStyles()
    const [images, setImages] = useState([])
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handleOnClick = () =>{
        document.querySelector('#fileSelector').click()
    }
    const handleFileChange = (e) =>{
        if(e.target.files.length === 0 ){
            return null
        }
        const newFiles = Array.from(e.target.files)
        let newArray = []
        newFiles.forEach(element => {
            newArray.push(URL.createObjectURL(element))
        })
        setFiles([...files, ...newFiles])
        setImages([...images,...newArray])
    }
    
    
    const handleOnDelete = (img,index) => {
        const newArray = images.filter(eachImg=>(eachImg!==img))
        const myFiles = Array.from(files)
        myFiles.splice(index,1)
        setImages(newArray)
        setFiles(myFiles)
        document.getElementById("fileSelector").value=null; 
    }
    
    const handleOnSend = () => {
        Swal.fire({
            title: '¿Estas seguro de enviar estas imagenes? Este proceso no podrá ser revertido',
            showCancelButton: true,
            confirmButtonText: `Si`,
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(payWithBank(files, urlData.encryptedId, setLoading))
            } 
          })
    }
    
    
    return (
        <>
        <input type='file' multiple style={{display:'none'}} onChange={handleFileChange} id='fileSelector' name='file'/>
            {loading&&(
                <div className={classes.spinner} >
                    <CircularProgress />
                </div>
            )}
            <div className={classes.buttonContainer}>
                <Button onClick={handleOnClick} className={classes.button} disabled={loading} variant='contained' color='primary'>Cargar comprobante de pago</Button>
                <Button disabled={images.length===0 || loading} className={classes.button} variant='contained' onClick={handleOnSend} color='primary'>Enviar</Button>
            </div>
            {
                images&&(
                    <div className={classes.imgContainer}>
                        {
                            images.map((eachImage, index)=>(
                                <div key={eachImage+index} className={classes.eachImgContainer}>
                                    <img src={eachImage} alt={index} className={classes.eachImg}/>
                                    <Button onClick={()=>handleOnDelete(eachImage, index)} className={classes.btnDelete} color='primary' variant='contained' size='small'>BORRAR</Button>
                                </div>
                            ))
                        }
                        
                        
                    </div>
                        )
        }
    </>
    )
}
