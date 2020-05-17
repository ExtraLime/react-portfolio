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
        <NavLink onClick={() => close()} to="/">Home</NavLink>
        <NavLink onClick={() => close()} to="/about">About</NavLink>
        <NavLink onClick={() => close()} to="/tldr">tl;dr</NavLink>
        <NavLink onClick={() => close()} to="/projects">Projects</NavLink>
        <NavLink onClick={() => close()} to="/work">Experience</NavLink>
        <NavLink onClick={() => close()} to="/edu">Education</NavLink>
        <NavLink onClick={() => close()} to="/contact">Contact</NavLink>
        <SocialButtonGroup label='menu'></SocialButtonGroup> 
      </StyledMenu>
        
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;