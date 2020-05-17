import React from 'react'
import useHover from '../../popup/useHover'
import profile from './profile.jpeg'

const Basics = () => {
    const [hoverPhone, isPHHovered] = useHover()
    const [hoverMail, isMailHovered] = useHover()
    return (
        <div className='basics-body'>
        <div className='name-info'>
          <div style={{justifyContent:'center'}} className='avatar'><img style={{borderRadius:'30%',margin:'0px'}} width='200px'src={profile}></img></div>
          <div className='phonemail'>
            <div ref={hoverPhone} >
              <img alt="phoneicon" src='https://upload.wikimedia.org/wikipedia/commons/8/83/Circle-icons-phone.svg' height="35px"></img>{isPHHovered &&
                <div>+1 (619) 246-7888</div>}
            </div>
            <a href='mailto:willdox7@live.com'>
              <div ref={hoverMail} href='mailto:willdox7@live.com'>
                <img alt="emailicon" style={{ borderRadius: '50%' }} src='https://symbols.getvecta.com/stencil_64/9_email.cf5807406d.png' height="35px"></img>{isMailHovered &&
                  <div>Email Me!</div>}
              </div>
            </a>
          </div>
          <div style={{textAlign:'left'}} className='info'>
            <h4>William Morgan</h4>
            <h4>32 years old</h4>
            <h4>Portland, Oregon</h4>
            <h4>Data Scientist </h4>
            <h4>Full Stack Engineer</h4>
          </div>

        </div>
      </div>
    )
}
export default Basics;