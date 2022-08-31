import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {ChakraProvider} from '@chakra-ui/react';
import { Input, Text, Box } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <Box>
        <Text>Enter Option</Text>
        <Input placeholder="Enter Info" />
        </Box>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
