import React from 'react';
import PropTypes from 'prop-types';
import styles from './DataGrab.module.css';
import {useState} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import { Input, Button, Text, Box } from "@chakra-ui/react";


function ClearBtn(){
  const [user, setUser] = useState();
  async function handleKey(event){
    
    await reqData();
  
  }
  
  async function reqData(){
      
    //console.log(rnd);
    let url = "https://testing-api-one.herokuapp.com/";
    fetch(url)
    .then(res => res.json())
    .then((result) => {

      setUser(newName);
    })
  }
  return (
  <ChakraProvider onKeyDown={handleKey}> 

<Box>
  
        <Button  colorScheme='blue'
        onClick={handleKey}>Click for Random Name</Button>
        {/* <Text >Press Enter for a Random Name</Text> */}
        {/* <Input placeholder="Enter Info" onKeyDown={handleKey}/> */}
        <p>{user}</p>

        </Box>   
      
  </ChakraProvider>
);
  }




ClearBtn.propTypes = {};

ClearBtn.defaultProps = {};

export default ClearBtn;
