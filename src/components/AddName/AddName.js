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
    let testrl = "//localhost:3000/"
    const [names, setName] = useState();

    const  sendName = event => {
      
      fetch(testrl,
        { method:'POST',
          mode: 'cors',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({name:names})
        })
    }
  return (
    <ChakraProvider>
  <Box className={styles.AddName}>
    <FormControl>
      <FormLabel>Enter a Name</FormLabel>
      <Input placeholder="Enter a name"  onChange={e=> setName(e.target.value)}></Input>
      <Button colorScheme="blue" onClick={sendName}>Add New Name</Button>
    </FormControl>
  </Box>
  </ChakraProvider>
);
}
AddName.propTypes = {};

AddName.defaultProps = {};

export default AddName;
