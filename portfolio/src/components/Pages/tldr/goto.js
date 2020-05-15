import React, { useState } from 'react'



    const HoverUrl =(props) => {
        const [hover, setHover] = useState(none)
        const url = props.url

        const showText = () => {setHover({text: props.text})}
        const hideText = () => {setHover(none)}

      return (
        <a href={url} onMouseEnter={showText()} onMouseLeave={hideText()}>{props.text}</a>
      );
    } 

