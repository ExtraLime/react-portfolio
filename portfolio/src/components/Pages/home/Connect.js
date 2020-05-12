import React, { useState, createContext, useRef } from "react";
import { faLink, faRedo, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Root, Overlay, Dialog, StyledLink, StyledText, LinkSet } from './Connect.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import IntroModal from './modals/IntroModal'


export const ModalContext = createContext();

const Connect = (defaultview) => {
    const [count, setCount] = useState(0);
    const [view,setView] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const close = () => setIsModalOpen(false);

    // const [step, setStep] = useState({step:step1})
    return (
        <div>
            <ModalContext.Provider value={setIsModalOpen}>
            <Root> 
                <FontAwesomeIcon id='connect' icon={faLink} size='10x' onClick={() => [setCount(count + 1),setIsModalOpen(true)]} />
                {isModalOpen && (<IntroModal />)}
            </Root>
            </ModalContext.Provider>
                <h3>Connect {count}</h3>
                            
            </div>
            );
        };

 
export default Connect;
