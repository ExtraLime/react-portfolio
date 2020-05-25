import React, {useState, useRef, useEffect} from 'react'
import DrumPad1 from './DrumPad'

const PadBank1 = (props) => {
    let padBank;
    props.power ?
    padBank = props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
            <DrumPad1 
                          clipId={padBankArr[i].id} 
                          clip={padBankArr[i].url}
                          keyTrigger={padBankArr[i].keyTrigger}
                          keyCode={padBankArr[i].keyCode} 
                          updateDisplay={props.updateDisplay} 
                          power={props.power} />
          )
        }):
        padBank = props.currentPadBank.map((drumObj,i, padBankArr) => {
            return (
                <DrumPad1 
                clipId={padBankArr[i].id} 
                clip="#"
                keyTrigger={padBankArr[i].keyTrigger}
                keyCode={padBankArr[i].keyCode} 
                updateDisplay={props.updateDisplay} 
                power={props.power} />
            )
        });
        return (
            <div className="pad-bank" >
            {padBank}
        </div>
        )};
export default PadBank1;
    

/*
class PadBank extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      let padBank;
      this.props.power ?
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad 
                          clipId={padBankArr[i].id} 
                          clip={padBankArr[i].url}
                          keyTrigger={padBankArr[i].keyTrigger}
                          keyCode={padBankArr[i].keyCode} 
                          updateDisplay={this.props.updateDisplay} 
                          power={this.props.power} />
          )
        }) :
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad 
                          clipId={padBankArr[i].id} 
                          clip="#"
                          keyTrigger={padBankArr[i].keyTrigger}
                          keyCode={padBankArr[i].keyCode} 
                          updateDisplay={this.props.updateDisplay} 
                          power={this.props.power} />
          )
        });
      return (
        <div className="pad-bank" >
                  {padBank}
              </div>
      )
    }
  }
  */