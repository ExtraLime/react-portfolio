import React, { useState, createContext, useRef } from "react";
import { NavLink } from 'react-router-dom'
import { Root, Overlay, Dialog, StyledLink, StyledText, LinkSet, StyledRow } from './SocialModal.styled'



const ExploreModal = (props) => {
    console.log(props)
    return (
        <Root>
            <Overlay>
                <Dialog>                    
                <StyledText>Connect With Me!</StyledText>
                <p>Check Out My Projects Page</p>
                <LinkSet>
                    <StyledRow><StyledLink onClick={() => props.onClose()}>Close</StyledLink></StyledRow>
                </LinkSet>
                </Dialog>
            </Overlay>
        </Root >
    );
}
export default ExploreModal;