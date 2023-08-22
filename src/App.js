import React, { useState } from "react";

import Header from "./Components/Header/Header";
import Keypad from "./Components/Keypad/Keypad";


import moonIcon from './assets/moon.png';
import sunIcon from './assets/sun.png';

import './App.css';

const usedKeyCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["-", "+", "*", "/"];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handlekeyPress = (keyCode, key) => {
    
    if(!keyCode)return;

    if(!usedKeyCodes.includes(keyCode)) return;
    if(numbers.includes(key)){
      if(key === "0"){
        if(expression.length === 0) return;
      }
      setExpression(expression + key)
    }
    else if(operators.includes(key)){
      if(!expression) return;

      const lastChar = expression.slice(-1);
      if(operators.includes(lastChar))return;
      if(lastChar === ".") return;

      setExpression(expression + key);
    }
    else if(keyCode === 8){
      if(!expression) return;
      setExpression(expression.slice(0, -1));
    }
    else if(keyCode === 13){
      console.log("enter");
    }
  }

  return (
    <div className="app" 
    tabIndex="0"
    onKeyDown={(e) => {
      handlekeyPress(e.key, e.keyCode)
    }}
    data-theme={isDarkMode ? "dark" : ""}>
      <div className="app_calculator" >
        <div className="app_calculator_navbar">
          <div className="app_calculator_navbar_toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}>
            <div className={`app_calculator_navbar_toggle_circle 
            ${isDarkMode ? "app_calculator_navbar_toggle_circle_active" : ""}
            `}>

            </div>
          </div>
          <img src={isDarkMode ? moonIcon : sunIcon} alt="mode"/>
        </div>
        <Header expression = {expression} />
        <Keypad 
          handlekeyPress = {handlekeyPress}
        />
      </div>
    </div>
  );
}

export default App;

