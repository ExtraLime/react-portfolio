import styled from "styled-components";
import { ReactBurgerMenu, bubble } from "react-burger-menu";

export const CloseButton = styled.button`
  text-weight:bold;
  justify-text:right;
  border-radius:60%;
  background: rgb(131, 193, 255);`;

export const Root = styled.div`
  font-family: sans-serif;
  text-align: center;
  position: relative;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const Dialog = styled.div`
  background: dodgerblue;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.4s ease-in-out;
  z-index: 1;
  color:black;
  a {
      font-weight:bold;
      color:black;
  }
  button {
      top:0;
      right:0;
  }
`;
export const StyledLink = styled.a`
color:black;
z-index:1;
padding:20px;`;

export const StyledText = styled.p`
color:white;
font-weight:bold;
z-index:1`;

export const LinkSet = styled.div`
display:flex;
justify-content:center;`;
