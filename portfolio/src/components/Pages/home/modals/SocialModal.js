import React, { useState, createContext, useRef } from "react";
import { NavLink } from 'react-router-dom'
import { Root, Overlay, Dialog, StyledLink, StyledText, LinkSet, CloseButton, StyledRow } from './SocialModal.styled'
import Socials from '../Socials/Socials'



const SocialModal = (props) => {
    
    return (
        <Root>
            <Overlay>
                <Dialog>
                  <CloseButton onClick={() => props.onClose()}>X</CloseButton>
                  <StyledText>Connect With Me!</StyledText>                  
                  <Socials label='socialmodal' />
                  <LinkSet>
                    <StyledRow><StyledLink onClick={() => props.onClickNext()}>OK! >></StyledLink></StyledRow>
                 </LinkSet>
               </Dialog>
            </Overlay>
        </Root >
    );
}
export default SocialModal;