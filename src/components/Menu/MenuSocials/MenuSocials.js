import React from 'react'


import linkedin from './linkedin.svg'
import kaggle from './kaggle.svg'
import github from './github.svg'
import codewars from "./codewars.svg"
import medium from "./medium.svg"
import sover from "./sover.svg"
import twitter from "./twitter.svg"


import { StyledIcon, ImgLink } from './MenuSocials.styled'

const SocialButtonGroup = (label) => {
  return (  
        <div className={`social-${label.label}`}>
          <div className='social-buttons'>
            <ImgLink target="_blank" href='http://pdxcrimemap.net'>
            <StyledIcon  src={linkedin}></StyledIcon >
            </ImgLink>
            <ImgLink target="_blank" href='https://www.google.com'>
              <StyledIcon src={github}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://www.google.com'>
              <StyledIcon src={medium}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://www.google.com'>
              <StyledIcon src={kaggle}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://www.google.com'>
              <StyledIcon src='https://symbols.getvecta.com/stencil_65/26_reddit.bd713287eb.svg'></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://www.google.com'>
              <StyledIcon src={codewars}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://www.google.com'>
              <StyledIcon src={sover}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://www.google.com'>
              <StyledIcon src={twitter}></StyledIcon>
            </ImgLink>        
          </div>
        </div>
    )
}

export default SocialButtonGroup;