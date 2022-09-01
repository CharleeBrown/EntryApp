//import logo from './logo.svg';
import './App.css';
import * as React from "react";
import menu from './components/Menu';
import {ChakraProvider} from '@chakra-ui/react';
import { Input, Button, Text, Box } from "@chakra-ui/react";
import {useState} from "react";

function App() {
  const [user, setUser] = useState();
  function handleKey(event){
    
      sendData();
    
  }
  function sendData(){
    
    //console.log(rnd);
    let url = "https://testing-api-one.herokuapp.com/";
    fetch(url)
    .then(res => res.json())
    .then((result) => {
      let rnd = (Math.random(0,result.count)*10).toPrecision(1);
      setUser(result[rnd]["name"])
    })
  }
  
  return (
    <ChakraProvider onKeyDown={handleKey}> 
    <div className="App">
      <header className="App-header">
        <Box>
        <Button  colorScheme='blue'
        onClick={handleKey}>Click for Random Name</Button>
        {/* <Text >Press Enter for a Random Name</Text> */}
        {/* <Input placeholder="Enter Info" onKeyDown={handleKey}/> */}
        <p>{user}</p>

        </Box>
        <Menu></Menu>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
