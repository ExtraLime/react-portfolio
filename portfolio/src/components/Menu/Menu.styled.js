import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-tiems:center;
  background: ${({ theme }) => theme.primaryLight};
  text-align:center;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;  
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  color:white;
  z-index:1;
  transition: transform 0.4s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  a {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
    
  }
`;
export const StyledLink = styled.a`
  padding:.5rem;
  color: ${({ theme }) => theme.primaryDark};
  text-color:black;
  background:${({ theme }) => theme.primaryLight};
  text-decoration: none;
  :hover {
    color: limegreen;
  }
`;
export const StyledImg = styled.img`
    border-radius: 50%;
    margin-bottom:30px;
    height:auto;
    width:5rem;
    position:relative;
    align-self:center;
    -webkit-filter: sepia(100%); /* Safari 6.0 - 9.0 */
    filter: sephia(100%);
    `