import React from "react";
import { Root, Overlay, Dialog, StyledLink, StyledText, LinkSet, StyledRow } from './SocialModal.styled'



const SocialModal = (props) => {
    
    return (
        <Root>
            <Overlay>
                <Dialog>
                <p>^</p>                      
                  <StyledText>Let's network, collaborate, and code!</StyledText>                  
                  <LinkSet>
                    <StyledRow><StyledLink onClick={() => props.onClickNext()}>Next!</StyledLink></StyledRow>
                 </LinkSet>
               </Dialog>
            </Overlay>
        </Root >
    );
}
export default SocialModal;