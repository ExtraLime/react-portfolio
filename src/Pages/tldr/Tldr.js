import React from 'react';

import Skills from './Skills'
import Projects from './Projects'
import useHover from '../../components/popup/useHover'
import Experience from './Experience'
import Education from './Education';
import Basics from './Basics'
import Accordion from '../../components/Accordion/Accordion'
import ComboIcons from '../tldr/icons/ComboIcons'


const Tldr = () => {

  const [hoverSkills, isSkillsHovered] = useHover()

  return (
    <div className='tldr-page'>
      <div className='resLink'><h6 style={{textAlign:'right',marginTop:'10px'}}>Looking for a resume?<a target='_blank' rel='noopener noreferrer' href='https://docs.google.com/document/d/1Y3DyQ2scrdwkbHY9ufcTcWApyNM7eUMcFi15c1K4GGQ/edit?usp=sharing'>
        <img src='https://symbols.getvecta.com/stencil_3/15_google-docs.b01a446db5.svg' alt='paper-resume-link' height='25px'></img></a></h6></div>
      <div style={{ textAlign: 'center',fontFamily: 'Alegreya SC' }} className='info'>
          <h2>William Morgan</h2>
          <h5>Portland, Oregon</h5>
          <h5>Full Stack Data Scientist</h5>
        </div>    
      <div className='acc'>
      <div id='basics' className='acc-obj'>
        <Accordion
          title="Basics"
          content={<Basics />} 
          section='tldr'/>
      </div>
      <div ref={hoverSkills} id='skills' className='acc-obj'>
        <Accordion 
          title="Skills"
          content={<Skills />} 
          section='tldr'/>{isSkillsHovered &&
            <div><ComboIcons/></div>}
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
    </div>
  );
}

export default Tldr;