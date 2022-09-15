//import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {ChakraProvider, Box} from '@chakra-ui/react';
import DataGrab from './components/DataGrab/DataGrab'

import AddName from './components/AddName/AddName';

import Menu from './components/Menu/Menu';
function App() {

  
  return (
    <ChakraProvider>
    <div className="App">
      
      <header className="App-header">  
   
        <Box p='10' border="solid 1px white" borderRadius="10px">
          <DataGrab></DataGrab>
          </Box>
        <Box p='10'>
        <AddName></AddName>
        </Box>
      </header>
    </div>
    </ChakraProvider>
  );

}

export default App;
