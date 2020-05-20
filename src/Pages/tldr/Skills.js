import React from 'react'
import DsIcons from './icons/DsIcons'
import WdIcons from './icons/webdevicons'
import DoIcons from './icons/DoIcons'
import DataScience from './DataScience'
import WebDev from './WebDev'
import DevOps from './DevOps'
import Accordion from '../../components/Accordion/Accordion'

import {
    StyledSectionHeader,
} from './Tldr.styled'

import useHover from '../../components/popup/useHover'

const Skills = () => {
    const [hoverDS, isDSHovered] = useHover();
    const [hoverWD, isWDHovered] = useHover();
    const [hoverDO, isDOHovered] = useHover();


    return (
        <>
        <div id='ds' className='acc-obj'>
          <StyledSectionHeader ref={hoverDS}>Data Science {isDSHovered &&
            <div className='ds-icons'><DsIcons /></div>}</StyledSectionHeader>
          <DataScience />
        </div>
        <div id='wd' className='acc-obj'>
          <StyledSectionHeader ref={hoverWD}>Web Development {isWDHovered &&
            <div className='wd-icons'><WdIcons /></div>}</StyledSectionHeader>
          <WebDev />
        </div>
        <div id='do' className='acc-obj'>
          <StyledSectionHeader ref={hoverDO}>DevOps & Other{isDOHovered &&
            <div className='do-icons'><DoIcons /></div>}</StyledSectionHeader>
          <DevOps />
        </div>
    </>
    )
}
export default Skills;