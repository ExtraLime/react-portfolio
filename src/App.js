import React, {  useState, useRef } from 'react';
import { useOnClickOutside } from './components/popup/hooks';
import { Menu } from './components';


import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
 
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Error from './Pages/Error';

import Skills from './Pages/skills/Skills'
 
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
             <Route path="/about" component={About}/>
             <Route path="/skills" component={Skills}/>
            <Route component={Error}/>
           </Switch>
      </BrowserRouter>
      </>
      </ThemeProvider>
    );
  }

 

