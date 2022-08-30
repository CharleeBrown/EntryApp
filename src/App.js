import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {ChakraProvider} from '@chakra-ui/react';
import { Input, Text } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <Text>Enter Option</Text>
        <Input placeholder="Enter Info" />
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
