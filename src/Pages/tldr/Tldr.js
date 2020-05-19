import React from 'react';
import { NavLink } from 'react-router-dom'

import Skills from './Skills'
import Projects from './Projects'

import Experience from './Experience'
import Education from './Education';
import Basics from './Basics'
import Accordion from '../../components/Accordion/Accordion'

const Tldr = () => {

  return (
    <div className='tldr-page'>
      <div className='resLink'><h6 style={{textAlign:'right',marginTop:'10px'}}>Looking for a resume?<a target='_blank' rel='noopener noreferrer' href='https://docs.google.com/document/d/1Y3DyQ2scrdwkbHY9ufcTcWApyNM7eUMcFi15c1K4GGQ/edit?usp=sharing'>
        <img src='https://symbols.getvecta.com/stencil_3/15_google-docs.b01a446db5.svg' alt='paper-resume-link' height='25px'></img></a></h6></div>
      <h1 className='title-tldr'>TD;LR</h1>
      <p style={{letterSpacing:'0px'}}> A multilingual international entrepeneur, 
        economist, and programmer with a natural talent 
        for efficiently developing stable solutions to problems that 
        arise in highly complex systems. Ability to be a team
        player or a team leader in order to produce deliverables.
        Highly analytical with a proven track record of analyzing 
        large amounts data to guide business decisions. Data driven, 
        deadline oriented, and always curious.</p>
      <h6>Click on a Section to find out more</h6>
      
      <div className='acc'>
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
    </div>
  );
}

export default Tldr;