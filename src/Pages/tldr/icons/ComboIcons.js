import React from 'react'
import { StyledSectionHeader } from '../Tldr.styled'

import DoIcons from './DoIcons'
import DsIcons from './DsIcons'
import WdIcons from './webdevicons'


const ComboIcons = () => {
    return (
        <>
        <StyledSectionHeader style={{margin:"15px"}}>Data Science<div style={{margin:"15px"}}><DsIcons /></div></StyledSectionHeader>
        <StyledSectionHeader style={{margin:"15px"}}>Web Development<div style={{margin:"15px"}}><WdIcons /></div></StyledSectionHeader>
        <StyledSectionHeader style={{margin:"15px"}}>DevOps+<div style={{margin:"15px"}}><DoIcons /></div></StyledSectionHeader>
        </>
    );
};

export default ComboIcons