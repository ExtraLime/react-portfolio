import React from "react";
import { Root, Overlay, Dialog, StyledLink, StyledText, LinkSet, StyledRow } from './SocialModal.styled'
import Socials from '../Socials/Socials'



const SocialModal = (props) => {
    
    return (
        <Root>
            <Overlay>
                <Dialog>
                  
                  <StyledText>Connect With Me!</StyledText>                  
                  <Socials label='socialmodal' />
                  <LinkSet>
                    <StyledRow><StyledLink onClick={() => props.onClickNext()}>Next!</StyledLink></StyledRow>
                 </LinkSet>
               </Dialog>
            </Overlay>
        </Root >
    );
}
export default SocialModal;