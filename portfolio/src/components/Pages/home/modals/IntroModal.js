import React, { useState, useContext, useRef } from "react";
import { NavLink } from 'react-router-dom'
import { StyledRow, Root, Overlay, Dialog, StyledLink, StyledText, LinkSet, StyledLink1, CloseButton} from './IntroModal.styled'

const IntroModal = (props) => {
    
  return (
        <Root>
            <Overlay>
                <Dialog>
                    <StyledLink1 onClick={() => props.onClose()}><CloseButton>X</CloseButton></StyledLink1>
                    <StyledText>Short On Time?</StyledText>
                    <p>Check Out the TL;DR page!</p>
                    <StyledText>For A Deeper Dive</StyledText>
                    <p>Click Next</p>
                    <LinkSet>
                        <StyledLink><NavLink to="/tldr">Go to TL;DR</NavLink></StyledLink>
                        <StyledLink><StyledRow onClick={() => props.onClickNext()}>Next >></StyledRow></StyledLink>
                    </LinkSet>
                </Dialog>
            </Overlay>
        </Root>
            );
}
export default IntroModal;