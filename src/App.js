//import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {ChakraProvider} from '@chakra-ui/react';
import { Input, Text, Box } from "@chakra-ui/react";
import {useState} from "react";

function App() {
  const [user, setUser] = useState();
  function handleKey(event){
    if(event.keyCode ===13){
      sendData();
    }
  }
  function sendData(){
    let rnd = (Math.random(0,10)*10).toPrecision(1);
    //console.log(rnd);
    let url = "https://testing-api-one.herokuapp.com/";
    fetch(url)
    .then(res => res.json())
    .then((result) => setUser(result[rnd]["name"]))
  }
  
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <Box>
        <Text></Text>
        <Input placeholder="Enter Info" onKeyDown={handleKey}/>
        <p>{user}</p>

        </Box>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
