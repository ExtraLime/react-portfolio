import styled from 'styled-components'

export const StyledIntro = styled.p`
    font-weight:nornal;
    letter-spacing:1px;`

export const StyledSectionHeader = styled.h3`
    color:dodgerblue;
    font-size:36px
    font-weight:bold;
    padding:20px;
    `
export const StyledBasics = styled.p`
    text-align:block;
    text-wrap:wrap;
    font-weight:normal;
    letter-spacing:1px`;

export const StyledPic = styled.img`
    align-self:left;
    height:auto;
    width:10%;
    border-radius:30%;
    filter:greyscale(100%)`;

export const StyledSection = styled.h2`
    color:white;
    font-size:16px;
    align-items:right;
    font-weight:bold;
    `
export const IconGroup = styled.div`
    img {border-radius:0%};
    background:black
    align-self:flex-end;
    display:grid;
    align-items:space-evenly;
    grid-template-columns:1fr 1fr 1fr;
    width:10rem;
    z-index:-1;`;

export const DsBit = styled.ul`
    font-size:14x;
    color:white;
    `;