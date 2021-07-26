import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Jumbotron from '../jumbotron'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function Btn (props){
    console.log(props.val + " In Btn");
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <Button 
      variant="contained"
      onClick={() => props.onChange(props.val)}
      >{props.val}
      </Button>
     
    </div>
    );
}

export default Btn;