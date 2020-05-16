import React from 'react';
import useHover from '../../popup/useHover'
import { StyledIntro,
         StyledSection, 
         StyledBasics, 
         StyledPic, 
         StyledSectionHeader, 
         StyledProjectTitle, 
         DsBit } from './Tldr.styled'
import profile from './profile.jpeg'
import DsIcons from './icons/DsIcons'
import WdIcons from './icons/webdevicons'
import DoIcons from './icons/DoIcons'
import Projects from './Projects'
import DataScience from './DataScience'
import WebDev from './WebDev'
import DevOps from './DevOps'
import Experience from './Experience'
import Education from './Education';

const Tldr = () => {
    const [hoverDS, isDSHovered] = useHover();
    const [hoverWD, isWDHovered] = useHover()
    const [hoverDO, isDOHovered] = useHover()
    const [hoverPhone, isPHHovered] = useHover()
    const [hoverMail, isMailHovered] = useHover()
    
    return (
        <div className='tldr-page'>
            <h1>TL;DR</h1>
            <nav className='tldr-nav'>
                <ul className='tldr-list'>
                    <a href='#basics'><li>Basics</li></a>
                    <a href='#skills'><li>Skills</li></a>
                    <a href='#projects'><li>Projects</li></a>
                    <a href='#exp'><li>Experience</li></a>
                    <a href='#edu'><li>Education</li></a>
                </ul>
            </nav>
            <div id ='basics' className='basics'>
            <StyledSectionHeader>Basics</StyledSectionHeader>
            <div className='basics-body'>
        <div className='name-info'>
          <div className='phonemail'>
            <div ref={hoverPhone} >
              <img alt="phoneicon" src='https://upload.wikimedia.org/wikipedia/commons/8/83/Circle-icons-phone.svg' height="35px"></img>{isPHHovered && 
            <div>+1 (619) 246-7888</div>}
            </div>
        
            <a href='mailto:willdox7@live.com'>
              <div ref={hoverMail} href='mailto:willdox7@live.com'>
                <img alt="emailicon" style={{borderRadius:'50%'}} src='https://symbols.getvecta.com/stencil_64/9_email.cf5807406d.png' height="35px"></img>{isMailHovered && 
              <div>Email Me!</div>}
              </div>
            </a>
            </div>
                       
        <div className='avatar'><StyledPic src={profile} /></div>
        <div className='info'>                
          <h4>William Morgan</h4>
          <h4>32 years old</h4>
          <h4>Portland, Oregon</h4>
          <h4>Data Scientist </h4>
          <h4>Full Stack Engineer</h4>
          </div>
        
       </div>                
       </div>

              </div>
            <StyledSectionHeader id='skills'>Skills</StyledSectionHeader>              
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
            <StyledSectionHeader id='projects'>Projects</StyledSectionHeader>
                    <StyledProjectTitle><Projects /></StyledProjectTitle>
                    
            <StyledSectionHeader id='exp'>Professional Experience</StyledSectionHeader>
            <Experience />  
                  
            <StyledSectionHeader id="edu">Education</StyledSectionHeader>
            <Education /> 

        </div>
    );
}

export default Tldr;