import React from 'react'
import { NavLink } from 'react-router-dom'

const Basics = () => {

  return (
        <div className='basics-body'>
          <p style={{letterSpacing:'0px',fontFamily:'Basic'}}> A multilingual international entrepeneur, 
        economist, and programmer with a natural talent 
        for efficiently developing stable solutions to problems that 
        arise in highly complex systems. Ability to be a team
        player or a team leader in order to produce deliverables.
        Highly analytical with a proven track record of analyzing 
        large amounts data to guide business decisions. Data driven, 
        deadline oriented, and always curious. Make a selection below or <NavLink to ='/about'>read more...</NavLink></p>

    </div>
  )
}
export default Basics;