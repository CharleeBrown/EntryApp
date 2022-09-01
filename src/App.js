//import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {ChakraProvider} from '@chakra-ui/react';
import DataGrab from './components/DataGrab/DataGrab'
import { Link } from "react-router-dom";

function App() {

  
  return (
    <ChakraProvider>
    <div className="App">
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <header className="App-header">
        <DataGrab></DataGrab>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
