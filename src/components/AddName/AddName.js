import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddName.module.css';
import {ChakraProvider, Input, Text, Box, Button} from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import {useState} from 'react';
function AddName(){ 
    let url = "https://mainsendapi.herokuapp.com/";
    let [names, setName] = useState();
    const  sendName = event => {
      
      fetch(url,
        { method:'POST',
          mode: 'cors',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({name:names})
        });
        setName(null);
    }
  return (
    <ChakraProvider>
  <Box className={styles.AddName}>
    <FormControl>
      <FormLabel>Enter a Name</FormLabel>
      <Input id="nameInput" placeholder="Enter a name"  onChange={e=> setName(e.target.value)}></Input>
      <Button colorScheme="blue" onClick={sendName}>Add New Name</Button>
    </FormControl>
  </Box>
  </ChakraProvider>
);
}

function clearit(){
let clearDoc = document.getElementById('nameInput');
clearDoc.innerHTML = "";
clearDoc.innerText = "";

}
AddName.propTypes = {};

AddName.defaultProps = {};

export default AddName;
