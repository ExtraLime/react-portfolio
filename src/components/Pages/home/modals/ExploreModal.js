import React from "react";
import { Root, Overlay, Dialog, StyledLink, StyledText, LinkSet, StyledRow } from './SocialModal.styled'



const ExploreModal = (props) => {
    console.log(props)
    return (
        <Root>
            <Overlay>
                <Dialog>                    
                <StyledText>Click the Menu Button to navigate!</StyledText>
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