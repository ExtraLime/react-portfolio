import React from 'react'


import linkedin from './linkedin.svg'
import kaggle from './kaggle.svg'
import github from "./github.svg"
import codewars from "./codewars.svg"
import reddit from "./reddit.svg"
import medium from "./medium.svg"
import sover from "./sover.svg"
import twitter from "./twitter.svg"


import { StyledIcon, ImgLink, StyledButtons } from './Social.styled'


const SocialButtonGroup = (label) => {

  return (
        <div className={`social-${label.label}`}>
          <div className={`social-buttons-${label.label}`}>
            <StyledButtons >
            <ImgLink target="_blank" href='https://www.linkedin.com/in/william-morgan-745881a9/'>
              <StyledIcon src={linkedin}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://github.com/ExtraLime'>
              <StyledIcon src={github}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://medium.com/@morga046'>
              <StyledIcon src={medium}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://www.kaggle.com/extralime'>
              <StyledIcon src={kaggle}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://www.reddit.com/user/1extraLime/'>
              <StyledIcon src={reddit}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://www.codewars.com/users/ExtraLime'>
              <StyledIcon src={codewars}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://stackoverflow.com/users/13366122/1extralime'>
              <StyledIcon src={sover}></StyledIcon>
            </ImgLink>
            <ImgLink target="_blank" href='https://twitter.com/1extralime'>
              <StyledIcon src={twitter}></StyledIcon>
            </ImgLink>
            </StyledButtons>        
          </div>
        </div>
    )
}

export default SocialButtonGroup;