import React, { useState, createContext, useEffect } from "react"

export const ModalContext = createContext();


const ChainedModals = (props) => {
    //props should be onClose, isModalOpen, idx, modalList
    const [ idx, setIdx ] = useState(props.idx)
    const [isModalOpen, setIsModalOpen] = useState(props.isModalOpen)
    const [modalList, setModalList] = useState(props.modalList)
    let ModalComponent = modalList[idx];

    const onClickNext = () => {
        if (idx < props.modalList.length) { 
            setIdx(idx+1) 
        }
    };
    
    useEffect(() => {
        ModalComponent = modalList[idx]},[idx]);   
 
return(
    <ModalContext.Provider value={isModalOpen}>
            {isModalOpen && <div className='modal'></div>}
            <ModalComponent 
            onClickNext={onClickNext}
            open={isModalOpen}
            idx={idx}
            onClose={props.onClose}
            />
    </ModalContext.Provider>       
        
    )
}
export default ChainedModals