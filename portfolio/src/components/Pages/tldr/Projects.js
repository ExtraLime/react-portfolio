import React from 'react'

import { ProjectImg } from './Projects.styled'
import pdxcrime from './icons/pdxcrime.png'
import resto from './icons/resto.png'
import math from './icons/math.png'
import ReactTooltip from "react-tooltip";

import { StyledProjectTitle, ProjectDetail, LinkSet } from './Projects.styled'



const Projects = () => {

    return (
        <div className='tldr-projects'>
            <a target='_blank' href='http://pdxcrimemap.net' rel="noopener noreferrer">
                <div clasName='project1'>
                    <ProjectImg style={{ borderRadius: '30%' }} src={pdxcrime}></ProjectImg>
                    <StyledProjectTitle>PDX Crime Maps</StyledProjectTitle>
                    <ProjectDetail>Do you live in PDX? Check out your neighborhood!
                    A webapp that combines capturing and warehousing streaming
                    tweets in a cloud SQL database, hosting that data via custom API,
                    and visualizing that data through a custom dashboard.
                    <LinkSet>                    
                            <a target='_blank' rel="noopener noreferrer" href='http://pdxcrimemap.net' rel="noopener noreferrer" data-tip data-for='pdx-site'>
                                 <img src='https://symbols.getvecta.com/stencil_132/30_home-button.4d0733be4a.svg' height='30px' width='30px'></img></a>
                            <ReactTooltip id='pdx-site' place='bottom' color='dodgerblue' effect='solid'>
                            <span>Go to Site</span>
                            </ReactTooltip>

                            <a target='_blank' rel="noopener noreferrer" data-tip data-for='pdx-code' href='https://github.com/ExtraLime/pdx-crime-maps'>
                                 <img src='https://symbols.getvecta.com/stencil_130/1_code-editor.a52671ab74.svg' height='30px' width='30px'></img></a>
                            <ReactTooltip id='pdx-code' place='bottom' color='dodgerblue' effect='solid'>
                            <span>Go to Code</span>
                            </ReactTooltip>
                        </LinkSet>
                    </ProjectDetail>
                </div>
            </a>
            <a target='_blank' href='http://pdxcrimemap.net' rel="noopener noreferrer">
                <div clasName='project2'>
                    <ProjectImg src={resto} style={{ borderRadius: '30%' }}></ProjectImg>
                    <StyledProjectTitle>Opening a Restaurant</StyledProjectTitle>
                    <ProjectDetail>A data science project that applies statiscal techniques to 
                        'big data' to determine the best cuisine and location to open a new 
                        restaurant. This project combines advanced API calls and data manipulation
                         as well as advanced mapping techniques.
                         <LinkSet>                    
                            <a target='_blank' rel="noopener noreferrer" data-tip data-for='res-site' href='https://slides.com/will-m/opening-a-restaurant-in-portland-or/#/'>
                                 <img src='https://symbols.getvecta.com/stencil_132/30_home-button.4d0733be4a.svg' height='30px' width='30px'></img></a>
                            <ReactTooltip id='res-site' place='bottom' color='dodgerblue' effect='solid'>
                            <span>Go to Presentation</span>
                            </ReactTooltip>
                            
                            <a target='_blank' rel="noopener noreferrer"  data-tip data-for='res-code' href='https://github.com/ExtraLime/Coursea_Capstone'>
                                 <img src='https://symbols.getvecta.com/stencil_130/1_code-editor.a52671ab74.svg' height='30px' width='30px'></img></a>
                            <ReactTooltip id='res-code' place='bottom' color='dodgerblue' effect='solid'>
                            <span>Go to Code</span>
                            </ReactTooltip>
                            <a target='_blank' rel="noopener noreferrer"  data-tip data-for='res-nb' href='https://nbviewer.jupyter.org/github/ExtraLime/Coursea_Capstone/blob/master/pdx_final.ipynb'>
                                 <img src='https://symbols.getvecta.com/stencil_85/56_jupyter-icon.a458834856.svg' height='30px' width='30px'></img></a>
                            <ReactTooltip id='res-nb' place='bottom' color='dodgerblue' effect='solid'>
                            <span>Go to Notebook</span>
                            </ReactTooltip>
                            
                        </LinkSet>
                    </ProjectDetail>
                </div></a>
            <div clasName='project3'>
                <ProjectImg style={{ borderRadius: '30%' }} src={math}></ProjectImg>
                <StyledProjectTitle>Classifying Math Lectures</StyledProjectTitle>
                <ProjectDetail>A scalabe data science project which programatticaly scrapes
                     subtitles from youtube videos and classifies each lecture into a subject category.
                     The project explores multiple approaches to multi-class text classification while
                     emplying multiple methods of dimensionality reduction to visualize the results.
                     <LinkSet>                    
                            <a target='_blank' rel="noopener noreferrer" href='https://slides.com/will-m/deck#/' rel="noopener noreferrer" data-tip data-for='math-site'>
                                 <img src='https://symbols.getvecta.com/stencil_132/30_home-button.4d0733be4a.svg' height='30px' width='30px'></img></a>
                            <ReactTooltip id='math-site' place='bottom' color='dodgerblue' effect='solid'>
                            <span>Go to Presentation</span>
                            </ReactTooltip>

                            <a target='_blank' rel="noopener noreferrer" data-tip data-for='math-code' href='https://github.com/ExtraLime/math_lectures2'>
                                 <img src='https://symbols.getvecta.com/stencil_130/1_code-editor.a52671ab74.svg' height='30px' width='30px'></img></a>
                            <ReactTooltip id='math-code' place='bottom' color='dodgerblue' effect='solid'>
                            <span>Go to Code</span>
                            </ReactTooltip>
                            
                            <a target='_blank' rel="noopener noreferrer"  data-tip data-for='math-med' href='https://medium.com/@morga046/multi-class-text-classification-with-doc2vec-and-t-sne-a-full-tutorial-55eb24fc40d3'>
                                 <img src='https://symbols.getvecta.com/stencil_88/67_medium-tile.012d359ed6.svg' height='30px' width='30px'></img></a>
                            <ReactTooltip id='math-med' place='bottom' color='dodgerblue' effect='solid'>
                            <span>Go to Medium Article</span>
                            </ReactTooltip>
                        </LinkSet>
                    </ProjectDetail>
            </div>
        </div>
    )
}
export default Projects;