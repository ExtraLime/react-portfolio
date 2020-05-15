import React from 'react'

import { ProjectImg } from './Projects.styled'
import pdxcrime from './icons/pdxcrime.png'
import resto from './icons/resto.png'
import math from './icons/math.png'
import useHover from '../../popup/useHover'

import { StyledProjectTitle, ProjectDetail, LinkSet } from './Projects.styled'



const Projects = () => {
    const [hoverPDXsite, isPDXsiteHovered] = useHover()
    const [hoverPDXcode, isPDXcodeHovered] = useHover()
    const [hoverResSite, isResSiteHovered] = useHover()
    const [hoverResCode, isResCodeHovered] = useHover()
    const [hoverMathSite, isMathSiteHovered] = useHover()
    const [hoverMathCode, isMathCodeHovered] = useHover()
    const [hoverMathMed, isMathMedHovered] = useHover()

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
                            <a ref={hoverPDXsite} href='http://pdxcrimemap.net' rel="noopener noreferrer">
                            {isPDXsiteHovered && <div>Go to Site</div>}
                                <img src='https://symbols.getvecta.com/stencil_132/30_home-button.4d0733be4a.svg' width='35px'></img>
                            </a>
                            <a ref={hoverPDXcode} className='pdx-code' href='https://github.com/ExtraLime/pdx-crime-maps' rel="noopener noreferrer">
                            {isPDXcodeHovered && <div>Go to Code</div>}    
                                <img src='https://symbols.getvecta.com/stencil_130/1_code-editor.a52671ab74.svg' width='35px'></img>
                            </a>
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
                            <a ref={hoverResSite} href='http://pdxcrimemap.net' rel="noopener noreferrer">
                            {isResSiteHovered && <div>Go to Site</div>}
                                <img src='https://symbols.getvecta.com/stencil_132/30_home-button.4d0733be4a.svg' width='35px'></img>
                            </a>
                            <a ref={hoverResCode} className='pdx-code' href='http://pdxcrimemap.net' rel="noopener noreferrer">
                            {isResCodeHovered && <div>Go to Code</div>}    
                                <img src='https://symbols.getvecta.com/stencil_130/1_code-editor.a52671ab74.svg' width='35px'></img>
                            </a>
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
                            <a ref={hoverMathSite} href='http://pdxcrimemap.net' rel="noopener noreferrer">
                            {isMathSiteHovered && <div>Go to Site</div>}
                                <img src='https://symbols.getvecta.com/stencil_132/30_home-button.4d0733be4a.svg' width='35px'></img>
                            </a>
                            <a ref={hoverMathCode} className='pdx-code' href='http://pdxcrimemap.net' rel="noopener noreferrer">
                            {isMathCodeHovered && <div>Go to Code</div>}    
                                <img src='https://symbols.getvecta.com/stencil_130/1_code-editor.a52671ab74.svg' width='35px'></img>
                            </a>
                            <a ref={hoverMathMed} className='pdx-code' href='http://pdxcrimemap.net' rel="noopener noreferrer">
                            {isMathMedHovered && <div>Go to Medium Article</div>}    
                                <img src='https://symbols.getvecta.com/stencil_88/67_medium-tile.012d359ed6.svg' width='35px'></img>
                            </a>
                        </LinkSet> 
                    </ProjectDetail>
            </div>
        </div>
    )
}
export default Projects;