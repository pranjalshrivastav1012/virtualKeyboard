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

  var values = [ ['1','2','3','4','5','6','7','8','9','0'],
               ['Q','W','E','R','T','Y','U','I','O','P'],
               ['A','S','D','F','G','H','J','K','L',';'],
               ['Z','X','C','V','B','N','M',',','.','/']
  ]

  
  return (
    <div >

      <div>
    <Jumbotron inputVal={consoleVal} />
    </div>
    <div style={{display:'grid',gridColumnEnd:'span 9',gridAutoFlow:'column'}}>
    {
        values.map((value, i) => {

        return value.map((value, i) => {

            return displayButton(value, i);
          })
    })}
    </div>
    </div>
  );

  function displayButton(value, i) {
    console.log(value[0] + " " + i);
    return (
    <Btn 
      key = {i}
      val={value[0]}
      style={{}}
      onChange={(data) => onScreenButtonPress(data)}/>
    )
  }
}

export default App;
