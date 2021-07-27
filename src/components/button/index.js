import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Jumbotron from '../jumbotron';
import './index.css';
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
      onClick={() => props.onChange(props.val)}
      >{
      props.flag ? props.val.toUpperCase() : props.val.toLowerCase() }
      </div>
    </div>
    );
}

export default Btn;