import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {ChakraProvider} from '@chakra-ui/react';
import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md"

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <p>
          Enter Option
        </p>
        <Text />
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
