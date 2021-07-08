import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    container:{
        width:'40%',
        [theme.breakpoints.down("sm")]: { 
            width: '100%',
            margin: '0.5rem 0'
        }
    }
}))

export const TransferSelector = ({type, changeBank,bank}) => {
    const classes = useStyles()
    if(type==='usd'){return null}
    return (
        <FormControl className={classes.container}>
        <InputLabel id="demo-simple-select-label">Seleccione el Banco</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={changeBank}
          value={bank}
        >
          <MenuItem value={`itau`}>Itau</MenuItem>
          <MenuItem value={`macro`}>Macro</MenuItem>
          {
              type==='ars'&&(
                  <MenuItem value={`mercadopago`}>MercadoPago</MenuItem>
              )
          }
        </Select>
      </FormControl>
    )
}
