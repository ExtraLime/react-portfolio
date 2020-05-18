import React, { useState, createContext } from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IntroModal from './modals/IntroModal'
import SocialModal from './modals/SocialModal'
import ExploreModal from "./modals/ExploreModal"
import ChainedModals from './modals/ChainedModals'



export const ModalContext = createContext();

const Connect = () => {
    const [idx,setIdx] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onClose = () => setIsModalOpen(false);

    return (
        <div className='connect'>
            <ModalContext.Provider value={isModalOpen}>
                     
                    <FontAwesomeIcon id='connect' icon={faLink} size='10x' onClick={() => [setIsModalOpen(true)]} />
                    {isModalOpen && 
                    <ChainedModals onClose={onClose} isModalOpen={isModalOpen} idx={idx} modalList={[IntroModal,SocialModal,ExploreModal]}/>}
            </ModalContext.Provider>
        </div>
    );
};


export default Connect;
