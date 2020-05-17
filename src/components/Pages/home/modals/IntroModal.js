import React from "react";
import { NavLink } from 'react-router-dom'
import { Root, Overlay, Dialog, StyledLink, StyledText, LinkSet, CloseButton,StyledRow } from './IntroModal.styled'

const IntroModal = (props) => {
 
    console.log(props)
    
  return (
        <Root>
            <Overlay>
                <Dialog>
                    <CloseButton onClick={() => props.onClose()}>X</CloseButton>
                    <StyledText>Short On Time?</StyledText>
                    <p>Check Out the TL;DR page!</p>
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