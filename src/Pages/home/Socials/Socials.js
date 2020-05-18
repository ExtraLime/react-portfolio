import React from 'react'

import codewars from "./codewars.svg"
import medium from "./medium.svg"
import ReactTooltip from "react-tooltip";


const SocialButtonGroup = (label) => {

  return (
        <div className={`social-${label.label}`}>
          <div className={`social-buttons-${label.label}`}>
          <a target='_blank' rel="noopener noreferrer" data-tip data-for='linkedin' href='https://www.linkedin.com/in/william-morgan-745881a9/'>
                                 <img alt='button-link' src='https://symbols.getvecta.com/stencil_65/13_linkedin.d836e61773.svg' height='25px' width='25px'></img></a>
          <ReactTooltip id='linkedin' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Linkedin</div></span>
          </ReactTooltip>
          
          <a target='_blank' rel="noopener noreferrer" data-tip data-for='github' href='https://github.com/ExtraLime'>
                <img alt='button-link' src='https://symbols.getvecta.com/stencil_27/120_visual-studio-team-services-github.7294b8678a.svg' height='25px' width='25px'></img></a>
          <ReactTooltip id='github' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Github</div></span>
          </ReactTooltip>
          
          <a target='_blank' rel="noopener noreferrer" data-tip data-for='medium' href='https://medium.com/@morga046'>
                <img alt='button-link' src={medium} height='25px' width='25px'></img></a>
          <ReactTooltip id='medium' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Medium</div></span>
          </ReactTooltip>

          <a target='_blank' rel="noopener noreferrer" data-tip data-for='kaggle' href='https://www.kaggle.com/extralime'>
                <img alt='button-link' src='https://symbols.getvecta.com/stencil_86/7_kaggle-icon.0a5579b35c.svg' height='25px' width='25px'></img></a>
          <ReactTooltip id='kaggle' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Kaggle</div></span>
          </ReactTooltip>

          <a target='_blank' rel="noopener noreferrer" data-tip data-for='reddit' href='https://www.reddit.com/user/1extraLime/'>
                <img alt='button-link' src='https://symbols.getvecta.com/stencil_65/26_reddit.bd713287eb.svg' height='25px' width='25px'></img></a>
          <ReactTooltip id='reddit' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Reddit</div></span>
          </ReactTooltip>

          <a target='_blank' rel="noopener noreferrer" data-tip data-for='codewars' href='https://www.codewars.com/users/ExtraLime'>
                <img alt='button-link' src={codewars} height='25px' width='25px'></img></a>
          <ReactTooltip id='codewars' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Codewars</div></span>
          </ReactTooltip>

          <a target='_blank' rel="noopener noreferrer" data-tip data-for='stack' href='https://stackoverflow.com/users/13366122/1extralime'>
                <img alt='button-link' src='https://symbols.getvecta.com/stencil_96/78_stack-overflow-icon.ab8e9cb041.svg' height='25px' width='25px'></img></a>
          <ReactTooltip id='stack' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>StackOverflow</div></span>
          </ReactTooltip>

          <a target='_blank' rel="noopener noreferrer" data-tip data-for='twitter' href='https://twitter.com/1extralime'>
                <img alt='button-link' src='https://symbols.getvecta.com/stencil_98/78_twitter-official.42f8cf507e.svg' height='25px' width='25px'></img></a>
          <ReactTooltip id='twitter' place='bottom' color='dodgerblue' effect='solid'>
          <span><div>Twitter</div></span>
          </ReactTooltip>
                  
          </div>
        </div>
    )
}

export default SocialButtonGroup;