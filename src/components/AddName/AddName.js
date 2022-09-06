import React from 'react';
import styles from './AddName.module.css';
import {ChakraProvider, Input, Box, Button} from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import {useState, useEffect} from 'react';


function AddName(){ 
  
    let url = "https://mainsendapi.herokuapp.com/";
    let [names, setName] = useState();
    useEffect(() =>{
      document.getElementById("nameInput").innerHTML = "";
    });
    const  sendName = event => {
      
      fetch(url,
        { method:'POST',
          mode: 'cors',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({name:names})
        });
        setName('');
    }
  return (
    <ChakraProvider>
  <Box className={styles.AddName}>
    <FormControl>
      <FormLabel>Enter a Name</FormLabel>
      <Input id="nameInput" placeholder="Enter a name"  onChange={e=> setName(e.target.value)}></Input>
      <Button colorScheme="blue" onClick={() => sendName}>Add New Name</Button>
    </FormControl>
  </Box>
  </ChakraProvider>
);
}


AddName.propTypes = {};

AddName.defaultProps = {};

export default AddName;
