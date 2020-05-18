import React from "react";
import { NavLink } from 'react-router-dom'
import { Root, Overlay, Dialog, StyledLink, StyledText, StyledText1, LinkSet, CloseButton,StyledRow, St2 } from './IntroModal.styled'

const IntroModal = (props) => {
 
    console.log(props)
    
  return ( 
        <Root>
            <Overlay>
                <Dialog>
                    <CloseButton onClick={() => props.onClose()}>X</CloseButton>
                    <StyledText1>Short On Time?</StyledText1>
                    <St2>Check Out the TL;DR page!</St2>
                    <StyledText>Otherwise</StyledText>
                    <p>Click Continue!</p>
                    <LinkSet>
                        <StyledLink><NavLink to="/tldr">Go to TL;DR</NavLink></StyledLink>
                        <StyledRow><StyledLink onClick={() => props.onClickNext()}>Continue</StyledLink></StyledRow>
                    </LinkSet>
                </Dialog>
            </Overlay>
        </Root>
            );
}
export default IntroModal;