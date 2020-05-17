import React, { useState } from 'react'




    const HoverUrl =(props) => {
        console.log(props)
        const [hover, setHover] = useState()
        const url = props.url


        const showText = () => {setHover({text: props.text})}
        const hideText = () => {setHover({text: ''})}

      return (
        <a href={url} onMouseEnter={showText()} onMouseLeave={hideText()}>{props.text}</a>
      );
    } 
export default HoverUrl
