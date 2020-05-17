import React from 'react';
import useHover from '../../popup/useHover'
import {
  StyledSectionHeader,
  StyledProjectTitle,
} from './Tldr.styled'

import DsIcons from './icons/DsIcons'
import WdIcons from './icons/webdevicons'
import DoIcons from './icons/DoIcons'
import Projects from './Projects'
import DataScience from './DataScience'
import WebDev from './WebDev'
import DevOps from './DevOps'
import Experience from './Experience'
import Education from './Education';
import Basics from './Basics'

const Tldr = () => {
  const [hoverDS, isDSHovered] = useHover();
  const [hoverWD, isWDHovered] = useHover()
  const [hoverDO, isDOHovered] = useHover()

  return (
    <div className='tldr-page'>
      <h1 className='tldr-header' id='title'>TL;DR</h1>
      <nav className='tldr-nav'>
        <ul className='tldr-list'>
          <a href='#basics'><li>Basics</li></a>
          <a href='#skills'><li>Skills</li></a>
          <a href='#projects'><li>Projects</li></a>
          <a href='#exp'><li>Experience</li></a>
          <a href='#edu'><li>Education</li></a>
        </ul>
      </nav>
      <div id='basics' className='basics'>
      <h1 className='tldr-header' id='Basics'>Basics</h1>
        <Basics />
      </div>
      <h1 className='tldr-header' id='skills'>Skills</h1>
      <StyledSectionHeader ref={hoverDS}>Data Science {isDSHovered &&
        <div className='ds-icons'><DsIcons /></div>}
      </StyledSectionHeader>
      <DataScience />
      <StyledSectionHeader ref={hoverWD}>Web Development {isWDHovered &&
        <div className='wd-icons'><WdIcons /></div>}
      </StyledSectionHeader>
      <WebDev />
      <StyledSectionHeader ref={hoverDO}>DevOps + Others {isDOHovered &&
        <div className='do-icons'><DoIcons /></div>}
      </StyledSectionHeader>
      <DevOps />
      <h1 className='tldr-header' id='projects'>Projects</h1>
      <StyledProjectTitle>
        <Projects />
      </StyledProjectTitle>
      <h1 className='tldr-header' id='exp'>Professional Experience</h1>
      <Experience />
      <h1 className='tldr-header' id="edu">Education</h1>
      <Education />

    </div>
  );
}

export default Tldr;