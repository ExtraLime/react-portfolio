import React from 'react';
import { NavLink } from 'react-router-dom'

import Skills from './Skills'
import Projects from './Projects'
import useHover from '../../components/popup/useHover'
import Experience from './Experience'
import Education from './Education';
import Basics from './Basics'
import Accordion from '../../components/Accordion/Accordion'
import ComboIcons from '../tldr/icons/ComboIcons'

const Tldr = () => {
  const [hoverPhone, isPHHovered] = useHover()
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
      <div className='name-info'>
          <div className='phonemail'>
            <div ref={hoverPhone} >
              <img alt="phoneicon" src='https://upload.wikimedia.org/wikipedia/commons/8/83/Circle-icons-phone.svg' height="35px"></img>{isPHHovered &&
                <div>+1 (619) 246-7888</div>}
            </div>
            <a href='mailto:willdox7@live.com'>
              <div href='mailto:willdox7@live.com'>
                <img alt="emailicon" style={{ borderRadius: '50%' }} src='https://symbols.getvecta.com/stencil_64/9_email.cf5807406d.png' height="35px"></img>
                  
              </div>

            </a>
          </div>
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