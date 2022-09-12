
import * as React from "react";
import {ChakraProvider} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import {
  Routes,
  Route, 
  Outlet
}  from "react-router-dom";
import './Menu.css';
const Menu = () => (
  <ChakraProvider>
  <div className="menuMain">

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Outlet/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      
      </div>
  </div>
  </ChakraProvider>
);
function Home() {
  return ;
}
function About() {
  return;
}



export default  Menu;
