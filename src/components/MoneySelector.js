import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { IconButton, makeStyles } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles({
    input:{
        width: '80%',
        marginTop:'1rem'
    },
    copyContainer:{
      display:'flex',
      justifyContent:'center',
      paddingTop:'0.3rem'
    }
})
export const MoneySelector = ({change, value, amount}) => {
    const classes = useStyles()
    const handleOnCopy = () =>{
      navigator.clipboard.writeText(amount)
  }
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
          <MenuItem value={`btc`}>BTC</MenuItem>
         
        </Select>
        <div className={classes.copyContainer}>
            <IconButton  color="primary" aria-label="upload picture" component="span" onClick={()=>handleOnCopy()}>
                <AssignmentIcon />
            </IconButton> 
        </div>
      </FormControl>
    )
}
