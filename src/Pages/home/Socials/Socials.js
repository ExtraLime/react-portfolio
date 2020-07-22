import React from 'react'

import codewars from "./codewars.svg"
import medium from "./medium.svg"
import linkedin from '../../tldr/icons/linkedin-icon.svg'
import github from '../../tldr/icons/github.svg'
import kaggle from '../../tldr/icons/kaggle-icon.svg'
import reddit from '../../tldr/icons/reddit.svg'
import soundcloud from '../../tldr/icons/soundcloud-icon.svg'
import twitter from '../../tldr/icons/twitter.svg'





import ReactTooltip from "react-tooltip";


const SocialButtonGroup = (label) => {

  return (
        <div className={`social-${label.label}`}>
          <div className={`social-buttons-${label.label}`}>
          <a target='_blank' rel="noopener noreferrer" data-tip data-for='linkedin' href='https://www.linkedin.com/in/william-morgan-745881a9/'>
                                 <img alt='button-link' src={linkedin} height='25px' width='25px'></img></a>
          <ReactTooltip id='linkedin' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Linkedin</div></span>
          </ReactTooltip>
          
          <a target='_blank' rel="noopener noreferrer" data-tip data-for='github' href='https://github.com/ExtraLime'>
                <img alt='button-link' src={github} height='25px' width='25px'></img></a>
          <ReactTooltip id='github' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Github</div></span>
          </ReactTooltip>
          
          <a target='_blank' rel="noopener noreferrer" data-tip data-for='medium' href='https://medium.com/@morga046'>
                <img alt='button-link' src={medium} height='25px' width='25px'></img></a>
          <ReactTooltip id='medium' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Medium</div></span>
          </ReactTooltip>

          <a target='_blank' rel="noopener noreferrer" data-tip data-for='kaggle' href='https://www.kaggle.com/extralime'>
                <img alt='button-link' src={kaggle} height='25px' width='25px'></img></a>
          <ReactTooltip id='kaggle' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Kaggle</div></span>
          </ReactTooltip>

          <a target='_blank' rel="noopener noreferrer" data-tip data-for='reddit' href='https://www.reddit.com/user/1extraLime/'>
                <img alt='button-link' src={reddit} height='25px' width='25px'></img></a>
          <ReactTooltip id='reddit' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Reddit</div></span>
          </ReactTooltip>

          <a target='_blank' rel="noopener noreferrer" data-tip data-for='codewars' href='https://www.codewars.com/users/ExtraLime'>
                <img alt='button-link' src={codewars} height='25px' width='25px'></img></a>
          <ReactTooltip id='codewars' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Codewars</div></span>
          </ReactTooltip>

          <a target='_blank' rel="noopener noreferrer" data-tip data-for='sc' href='https://soundcloud.com/willdox7'>
                <img alt='button-link' src={soundcloud} height='25px' width='25px'></img></a>
          <ReactTooltip id='sc' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Listen on SoundCloud</div></span>
          </ReactTooltip>

          <a target='_blank' rel="noopener noreferrer" data-tip data-for='twitter' href='https://twitter.com/1extralime'>
                <img alt='button-link' src={twitter} height='25px' width='25px'></img></a>
          <ReactTooltip id='twitter' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Twitter</div></span>
          </ReactTooltip>
                  
          </div>
        </div>
    )
}

export default SocialButtonGroup;