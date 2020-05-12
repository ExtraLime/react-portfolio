import React from "react";
import { NavLink } from 'react-router-dom'
import { Root, Overlay, Dialog, StyledLink, StyledText, LinkSet } from './IntroModal.styled'


const IntroModal = () => {
  return (
        <Root>
            <Overlay>
                <Dialog>
                    <StyledText>Short On Time?</StyledText>
                    <p>Check Out the TL;DR page!</p>
                    <StyledText>Otherwise</StyledText>
                    <p>Click Continue!</p>
                    <LinkSet>
                        <StyledLink><NavLink to="/tldr">Go to TL;DR</NavLink></StyledLink>
                        <StyledLink><NavLink to="/tldr">Continue =></NavLink></StyledLink>
                    </LinkSet>
                </Dialog>
            </Overlay>
        </Root>
    );
}
export default IntroModal;