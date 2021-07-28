import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import './index.css';

const useStyles = makeStyles({
  
    root: {
      minWidth: 1450,
      padding:10,
      backgroundColor:'black',
      
    },
    
    title: {
      fontSize: 74,
    },
    pos: {
      marginBottom: 12,
    },
    
  });
function Jumbotron (props) {

  const [value, setValue] = useState("");
  const [v,setv] = useState("");
  
  const classes = useStyles();
  
  useEffect(() => {
    console.log("buttonPressTriggered");
    var val = value;
    if(props.inputVal === "backspace"){
      console.log("Backspace pressed")
      setValue(val.substring(0, val.length - 1 ))
    } else {
      if(props.shiftFlag){
        switch(props.inputVal){
          case "0": 
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':

          setValue(val + props.map.get(props.inputVal));
          break;
         default: setValue(val + props.inputVal)
    }}
    else{
      setValue(val + props.inputVal);
    }
  }
   
    
  }, [props.buttonPresses])

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent >
      <div className="jumbtron-container">  
      <input
           type="text"
           name="console"
           value={value}
           onChange={(data) => onInputChange(data)}
           className="jumbotron"
      />
      </div>
      <Button>
      </Button>
      </CardContent>
     
    </Card>
  );

  function handleOnChange(data) {
   
    setv(data.value);
  }
  function onInputChange(event){
    setValue(event.target.value);
  } 
}

export default Jumbotron;