import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import { Input, Button, Text, Box } from "@chakra-ui/react";
import { useParams, useNavigate } from 'react-router-dom';

function About(){
let navigate = useNavigate();
return (
<ChakraProvider > 
<div className="about">
<Box>
<p>About</p>
<Button onclick={navigate('/')}></Button>
</Box>   
</div>
</ChakraProvider>
);
}




export default About;
