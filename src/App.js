//import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {ChakraProvider} from '@chakra-ui/react';
import { Input, Text, Box } from "@chakra-ui/react";
import {useState} from "react";

function App() {
  function handleKey(event){
    if(event.keyCode ===13){
      alert("test");
    }
  }
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <Box>
        <Text></Text>
        <Input placeholder="Enter Info" onKeyDown={handleKey}/>
        </Box>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
