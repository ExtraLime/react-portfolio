import React from "react";
import { Root, Overlay, StyledLink, StyledText, LinkSet, StyledRow } from './SocialModal.styled'
import { Dialog } from './ExploreModal.styled'


const ExploreModal = (props) => {
    console.log(props)
    return (
        <Root>
            <Overlay>
                <Dialog>                
                <StyledText><img filter='sephia(100%)' height='15px' src='https://symbols.getvecta.com/stencil_196/23_reverse-button.fbfe42e8ea.svg' alt='left'></img> Click the Menu Button to navigate!</StyledText>
                <p>Check Out My Projects Page</p>
                <LinkSet>
                    <StyledRow><StyledLink onClick={() => props.onClose()}>[Got it!]</StyledLink></StyledRow>
                </LinkSet>
                </Dialog>
            </Overlay>
        </Root >
    );
}
export default ExploreModal;