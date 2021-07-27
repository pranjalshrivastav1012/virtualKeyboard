import React, {useState} from 'react';
import Keyboard from './components/keyboard/index'
import Jumbotron from './components/jumbotron'
import Btn from './components/button'
import { makeStyles } from '@material-ui/core';
import   './index.css';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(0.1),
     
    
      
    },
  },
}));


function App() {
  const classes = useStyles();
  const [consoleVal, setconsoleVal] = useState("");
  const [buttonPresses, setButtonPresses] = useState(0)
  const [flagg, setflagg] = useState(true) 
  const [shiftFlag, setshiftFlag] = useState(false)
  const onScreenButtonPress = (data) => {
    let val = "";
    val = data;
    flagg ? setconsoleVal(val.toUpperCase()) : setconsoleVal(val.toLowerCase());
    let presses = buttonPresses + 1;
    setButtonPresses(presses);
    //shuffleBoard();
  }

  const [values, setvalues] = useState([ 
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'],
    ['1','2','3','4','5','6','7','8','9','0'],
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L',';'],
  ['Z','X','C','V','B','N','M',',','.','/']]);

  const onCapsPress = () => {
    let flag = flagg;
    setflagg(!flag);
  }

  const onShiftPress = () => {
    let flag = shiftFlag;
    setshiftFlag(!flag);
  }

  const onSpacePress = (data) => {
    let val = "";
    val = data;
    setconsoleVal(val);
    let presses = buttonPresses + 1;
    setButtonPresses(presses);
  }

  const onBackspacePress = () => {
    setconsoleVal("backspace");
    let presses = buttonPresses + 1;
    setButtonPresses(presses);
    
  }
  

  var buttonsArray = [];

  function shuffleBoard() {
    let value_temp = [];
    for (var i = 0; i < values.length; i++) {
      value_temp.push([]);
      for (var j = 0; j < values[i].length; j++) {
        value_temp[i].push([]);
      }
    }
    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < values[i].length; j++) {
            var i1 = Math.floor(Math.random() * (values.length));
            var j1 = Math.floor(Math.random() * (values.length));

            var temp = values[i][j];
            value_temp[i][j] = values[i1][j1];
            value_temp[i1][j1] = temp;
        }

    }
    setvalues(value_temp);
  }

  return (
    <div>

      <div className="jumbotron-container">
    <Jumbotron inputVal={consoleVal} buttonPresses={buttonPresses} flag={flagg}/>
    </div>
   
    <div className='items'>
    {
        values.map((value, i) => {
          buttonsArray.push([]);
        return value.map((value, j) => {
            return displayButton(value, j, i);
          })
    })
    }
    
  <div className={'button-row'}>   
    {
    shiftFlag ? buttonsArray[0] : buttonsArray[1]  
    }
  </div>
  <div className={'button-row'}>   
    {buttonsArray[2]}
  </div>
  <div className={'button-row'}>   
    {buttonsArray[3]}
  </div>
  <div className={'button-row'}>   
    {buttonsArray[4]}
  </div>
  
    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
    <Btn 
     className="capslock"
      variant="contained"
      val="Caps Lock"
      flag={flagg}
      onChange={() => onCapsPress()}
      >
      </Btn>
      <Btn 
      className="shift"
      onChange={() => onShiftPress()}
      val="shift"
      variant="contained"
      >
      </Btn>
      <Btn 
      val="space"
      className="space"
      variant="contained"
      onChange={() => onSpacePress(" ")}
      >
      </Btn>
      <Btn 
     val="backspace"
     className="backspace"
      variant="contained"
      onChange={() => onBackspacePress()}

      />
    
    </div>
    </div>
  );


  function displayButton(value, i, j) {
    //console.log(value[0] + " " + i);

      buttonsArray[j].push(
      <Btn 
      flag = {flagg}
        className='button'
        key = {i}
        val={value[0]}
        style={{}}
        onChange={(data) => onScreenButtonPress(data)}/>
      )
  }
}

export default App;
