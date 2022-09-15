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
      <footer>  <noscript>You need to enable JavaScript to run this app.</noscript>
<a title="Google Analytics Alternative" href="https://clicky.com/101380580"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a>
<script async src="//static.getclicky.com/101380580.js"></script>
<noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101380580ns.gif" /></p></noscript></footer>
    </div>
    
    </ChakraProvider>
    
  );

}

export default App;
