import React, { useState, useRef } from "react";

import Hamburger from "../Burger/Burger";
import { StyledMenu, StyledLink, StyledImg } from "./Menu.styled";
import { useOnClickOutside } from "../../hooks";
import { NavLink } from 'react-router-dom';
import willabjsmall from './will-abj-small.jpg';
import SocialButtonGroup from './MenuSocials/MenuSocials'

const Menu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>    
      <StyledMenu open={open}>
        <StyledImg id='menu-pic' src={willabjsmall} alt='profile-pic'></StyledImg>
        <StyledLink onClick={() => close()}><NavLink to="/">Home</NavLink></StyledLink>
        <StyledLink onClick={() => close()}><NavLink to="/about">About</NavLink></StyledLink>
        <StyledLink onClick={() => close()}><NavLink to="/tldr">tl;dr</NavLink></StyledLink>
        <StyledLink onClick={() => close()}><NavLink to="/projects">Projects</NavLink></StyledLink>
        <StyledLink onClick={() => close()}><NavLink to="/work">Experience</NavLink></StyledLink>
        <StyledLink onClick={() => close()}><NavLink to="/edu">Education</NavLink></StyledLink>
        <StyledLink onClick={() => close()}><NavLink to="/contact">Contact</NavLink></StyledLink>
        <SocialButtonGroup label='menu'></SocialButtonGroup> 
      </StyledMenu>
        
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;