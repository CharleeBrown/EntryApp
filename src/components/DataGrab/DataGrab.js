import React from 'react';
import PropTypes from 'prop-types';
import styles from './DataGrab.module.css';
import {useState} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import { Input, Button, Text, Box } from "@chakra-ui/react";


function DataGrab(){
  const [user, setUser] = useState();
  async function handleKey(event){
    
    await sendData();
  
  }
  
  async function sendData(){
      
    //console.log(rnd);
    let url = "https://testing-api-one.herokuapp.com/";
    fetch(url)
    .then(res => res.json())
    .then((result) => {
      const names = result.filter(item => item.name)
      const nameCount = names.length-1;
      let rnd = Math.floor((Math.random() * nameCount) + 0);;
      console.log(rnd);
      setUser(result[rnd]["name"])
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




DataGrab.propTypes = {};

DataGrab.defaultProps = {};

export default DataGrab;
