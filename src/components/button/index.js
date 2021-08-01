import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
import { useLongPress } from 'react-use';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
  }));



function Btn (props){
   
    const classes = useStyles();
    return (
        
        <div className={classes.root}>
      <div 
      key={props.key}
      variant="contained"
      className={props.className}
      onKeyPress={() => props.shiftFunc()}
      onClick={() => props.onChange(props.val)}
      >
        {
          getVal()
        }
      
      </div>
    </div>
     );

     function getVal() {
       console.log(props);
      if(props.shiftFlag){
        switch(props.val){
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
          return props.map.get(props.val)
          default: 
         return  (props.flag || props.shiftFlag) ? props.val.toUpperCase() : props.val.toLowerCase() }
        }
        else{
          return (props.flag || props.shiftFlag) ? props.val.toUpperCase() : props.val.toLowerCase() }
     }
}

export default Btn;