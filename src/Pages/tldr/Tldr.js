import React from 'react';
import useHover from '../../components/popup/useHover'
import {
  StyledSectionHeader,
  StyledProjectTitle,
} from './Tldr.styled'
import Skills from './Skills'
import Projects from './Projects'

import Experience from './Experience'
import Education from './Education';
import Basics from './Basics'
import Accordion from '../../components/Accordion/Accordion'

const Tldr = () => {
  const [hoverDS, isDSHovered] = useHover();
  const [hoverWD, isWDHovered] = useHover()
  const [hoverDO, isDOHovered] = useHover()

  return (
    <div className='tldr-page'>
      <div id='basics' className='acc-obj'>
        <Accordion
          title="Basics"
          content={<Basics />} 
          section='tldr'/>
      </div>
      <div id='skills' className='acc-obj'>
        <Accordion
          title="Skills"
          content={<Skills />} 
          section='tldr'/>
      </div>
      <div id='projects' className='acc-obj'>
        <Accordion
          title="Projects"
          content={<Projects />}
          section='tldr'/>
      </div>
      <div id='exp' className='acc-obj'>
        <Accordion
          title="Professional Experience"
          content={<Experience />} 
          section='tldr'/>
      </div>
      <div id='edu' className='acc-obj'>
        <Accordion
          title="Education"
          content={<Education />} 
          section='tldr'/>
      </div>
    </div>
  );
}

export default Tldr;