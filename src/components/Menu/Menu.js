import React, { useState, useRef } from "react";

import Hamburger from "../Burger/Burger";
import { StyledMenu, StyledImg } from "./Menu.styled";
import { useOnClickOutside } from "../popup/hooks";
import { NavLink } from "react-router-dom";
import willabjsmall from "./will-abj-small.jpg";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledImg
          id="menu-pic"
          src={willabjsmall}
          alt="profile-pic"
        ></StyledImg>
        <NavLink onClick={() => close()} to="/">
          Home
        </NavLink>
        <NavLink onClick={() => close()} to="/about">
          About
        </NavLink>
        <NavLink onClick={() => close()} to="/skills">
          Skills
        </NavLink>
      </StyledMenu>

      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
