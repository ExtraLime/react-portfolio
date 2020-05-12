import React from "react";

export function Modal() {
  return createPortal(
    <Overlay>
    <Dialog>
    <p>Short On Time?</p>
    <p>Check Out the tl;dr page!</p>
    <a href='/tldr'>Go to TL;DR</a>
    
    <FontAwesomeIcon id='gotit' icon={faThumbsUp} size='2x' onClick={() => [setCount(0),setIsModalOpen(false)]}/>
    </Dialog>
</Overlay>
  );
}