import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Screen } from "./Screen";

export const ModalContext = createContext();

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={setIsModalOpen}>
      <Root>
        <h1>Custom modal component</h1>
        <h2>Example three</h2>

        <Screen />

        <button onClick={() => setIsModalOpen(true)}>
          OPEN MODAL FROM ROOT
        </button>

        {isModalOpen && (
          <Overlay>
            <Dialog>
              <p>
                It's a modal{" "}
                <span role="img" aria-label="tada">
                  🎉
                </span>
              </p>
              <button onClick={() => setIsModalOpen(false)}>CLOSE MODAL</button>
            </Dialog>
          </Overlay>
        )}
      </Root>
    </ModalContext.Provider>
  );
}

const Root = styled.div`
  font-family: sans-serif;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
