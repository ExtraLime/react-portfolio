import React from 'react'
import useHover from '../../components/popup/useHover'

const Basics = () => {
  const [hoverPhone, isPHHovered] = useHover()
  const [hoverMail, isMailHovered] = useHover()
  return (
    <div className='basics-body'>
         <div style={{ textAlign: 'center' }} className='info'>
          <h2>William Morgan</h2>
          <h5>32 years old</h5>
          <h5>Portland, Oregon</h5>
          <h5>Data Scientist </h5>
          <h5>Full Stack Engineer</h5>
        </div>
      <div className='name-info'>
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
      </div>
    </div>
  )
}
export default Basics;