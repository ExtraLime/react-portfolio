import styled from "styled-components";


export const CloseButton = styled.p`
  text-weight:bold;
  color:white;
  justify-self:flex-end`;

export const Root = styled.div`
  font-family: sans-serif;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
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
  z-index: 3;
  color:black;
  a {
      font-weight:bold;
      color:black;
  }
  a:hover {
      color:white
  }
  button {
      justify-self:flex-end;
  }
  button:hover {
      color:white
  }
  tr:hover {
      color:white;
  }
`;

export const StyledRow = styled.tr`
  color:black;`;
export const StyledLink = styled.a`
color:black;
padding:20px;`;

export const StyledText = styled.p`
color:black;
font-weight:bold;`;

export const LinkSet = styled.div`
display:flex;
justify-content:center;`;
