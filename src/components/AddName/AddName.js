import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddName.module.css';
import {ChakraProvider, Input, Text, Box, Button} from '@chakra-ui/react';
import {useState} from 'react';
function AddName(name){ 
    let url = "https://mainsendapi.herokuapp.com/";
    const [names, setName] = useState();

    const sendName = event => {

      fetch(url,{ method:'POST', mode:'cors', body:JSON.stringify({names})})
      console.log(JSON.stringify(names))
    }
  return (
    <ChakraProvider>
  <Box className={styles.AddName}>
    <Text>Enter a name</Text>
    <Input placeholder="Enter a name"  onChange={e=> setName(e.target.value)}></Input>
    <Button colorScheme="blue" onClick={sendName}>Add New Name</Button>
  </Box>
  </ChakraProvider>
);
}
AddName.propTypes = {};

AddName.defaultProps = {};

export default AddName;
