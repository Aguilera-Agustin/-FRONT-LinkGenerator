import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    input:{
        width: '80%',
        marginTop:'1rem'
    }
})
export const MoneySelector = ({change, value}) => {
    const classes = useStyles()
    return (
        <FormControl className={classes.input}>
        <InputLabel id="demo-simple-select-label">Seleccione moneda</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={change}
     
        >
          <MenuItem value={`usdt`}>USDT</MenuItem>
          <MenuItem value={`dai`}>DAI</MenuItem>
          <MenuItem value={`eth`}>ETH</MenuItem>
         
        </Select>
      </FormControl>
    )
}
