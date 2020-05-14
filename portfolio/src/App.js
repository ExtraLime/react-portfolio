import React, {  useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import { Menu } from './components';


import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
 
import Home from './components/Pages/home/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Error from './components/Pages/Error';
import Tldr from './components/Pages/tldr/Tldr';
 
export default function App()  {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "home";

  useOnClickOutside(node, () => setOpen(false));


    return ( 
      <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />        
        <BrowserRouter>
          <Menu open={open} setOpen={setOpen} id={menuId} />       
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path='/tldr' component={Tldr}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
      </BrowserRouter>
      </>
      </ThemeProvider>
    );
  }

 

