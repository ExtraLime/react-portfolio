import styled from "styled-components";


export const CloseButton = styled.button`
  
  background:lightgrey;
  float:right;
  border-radius:60%
  `;

export const StyledLink1 = styled.p`
  text-align:right;
  color:white;`;


export const Root = styled.div`
  font-family: sans-serif;
  text-align: center;
  position: relative;
  z-index:2;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .8);
  z-index:2;
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
  a:hover {
    color:white;
  }
  tr:hover {
    color:white
  }
`;
export const StyledRow = styled.tr`
  color:black;
  padding:20px`;

export const StyledLink = styled.a`
color:black;
padding:20px;
hover:white;
font-size:24px`;

export const StyledText = styled.p`
color:white;
font-weight:bold;
`;

export const LinkSet = styled.div`
display:flex;
justify-content:center;
a:hover {
  color:white
};`;
