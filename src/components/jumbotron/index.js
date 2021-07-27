import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  
    root: {
      minWidth: 1000,
      padding:50
    },
    
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  });
function Jumbotron (props) {

  const [value, setValue] = useState("");
  
  
  const classes = useStyles();
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <input
           type="text"
           name="console"
           value={props.inputVal}
           onChange={(data) => onInputChange(data)}
      />
      </CardContent>
     
    </Card>
  );
  function onInputChange(data){
    setValue(data);
  } 
}

export default Jumbotron;