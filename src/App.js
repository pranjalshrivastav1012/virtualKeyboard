import React, {useState} from 'react';
import Keyboard from './components/keyboard/index'
import Jumbotron from './components/jumbotron'
import Btn from './components/button'

function App() {
  const [consoleVal, setconsoleVal] = useState("");

  const onScreenButtonPress = (data) => {
    console.log(data + " In App");
    console.log(data);
    let val = "";
    val = consoleVal + data;
    setconsoleVal(val);
  }
  return (
    <div>
    <Jumbotron inputVal={consoleVal}/>
    <Btn val="q" onChange={(data) => onScreenButtonPress(data)}/>
    </div>
  );
}

export default App;
