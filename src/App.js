//import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {ChakraProvider, Box} from '@chakra-ui/react';
import DataGrab from './components/DataGrab/DataGrab'
import { Link } from "react-router-dom";
import AddName from './components/AddName/AddName'
function App() {

  
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <Box p='10'>
          <DataGrab></DataGrab>
          </Box>
        <AddName></AddName>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
