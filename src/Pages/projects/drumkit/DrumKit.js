import React, {useState, useEffect } from 'react'
import PadBank1 from './PadBank'
import { bankOne, bankTwo } from './SoundBanks'
import './DrumKit.css'

const DrumKit = (props) => {
    const [power, setPower] = useState(true);
    const [display, setDisplay] = useState(String.fromCharCode(160));
    const [currentPadBank, setCurrentPadBank] = useState(bankOne);
    const [currentPadBankId, setCurrentPadBankId] = useState('Heater Kit');
    const [sliderVal, setSliderVal] = useState(0.3);

    const powerControl = () => {
          setPower(!power)
          setDisplay(String.fromCharCode(160))
        };

    const displayClipName = (name) => {
        if (power) {setDisplay(name)}
    };
    const selectBank = () => {
        if (power) {
            if (currentPadBankId === 'Heater Kit') {
            setCurrentPadBank(bankTwo);
            setDisplay('Smooth Piano Kit');
            setCurrentPadBankId('Smooth Piano Kit');}
        }else{
            setCurrentPadBank(bankTwo);
            setDisplay('Heater Kit');
            setCurrentPadBankId('Heater Kit');}
        }      
    
    const adjustVolume = (e) => {
        setSliderVal(e.target.value)
        setDisplay("Volume: " + Math.round(e.target.value * 100))
        setTimeout(() => clearDisplay(), 1000);
    }
    const clearDisplay = () => {
        setDisplay(String.fromCharCode(160)
    )}
    const powerSlider = power ? {float: 'right'} : {float: 'left'};
    const bankSlider = currentPadBank === bankOne ? {float: 'left'}:
     {float: 'right'};
      
        const clips = [].slice.call(document.getElementsByClassName('clip'));
        clips.forEach(sound => {
          sound.volume = sliderVal
        });

    return (
        <div id="drum-machine" className="inner-container">
                  <PadBank1  	
                      power={power}
                      updateDisplay={displayClipName}
                      clipVolume={sliderVal}
                      currentPadBank={currentPadBank} />
          
          <div className="logo">
              <div className="inner-logo ">{'FCC' + String.fromCharCode(160)}</div>
              <i className="inner-logo fa fa-free-code-camp" />
            </div>
  
                  <div className="controls-container">
          
                      <div className="control">
                          <p>Power</p>
                          <div onClick={powerControl} className="select">
                              <div style={powerSlider} className="inner" />
                          </div>
                      </div>
                      <p id="display">
                          {display}
                      </p>
                      <div className="volume-slider">
                          <input type="range" min="0" max="1" step="0.01" value={sliderVal} onChange={adjustVolume} />
                      </div>
                      <div className="control">
                          <p>Bank</p>
                          <div onClick={selectBank} className="select">
                              <div style={bankSlider} className="inner" />
                          </div>
                      </div>
                  </div>
  
              </div>
      )
    }
  
  
  export default DrumKit;


/*class DrumKit extends React.Component {
  constructor(props) {
    super(props);
    state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3
    }
    displayClipName = displayClipName.bind(this);
    selectBank = selectBank.bind(this);
    adjustVolume = adjustVolume.bind(this);
    powerControl = powerControl.bind(this);
    clearDisplay = clearDisplay.bind(this);
  }
  powerControl() {
    setState({
      power: !power,
      display: String.fromCharCode(160)
    });
  }
  selectBank() {
    if (power) {
      currentPadBankId === 'Heater Kit' ?
        setState({
          currentPadBank: bankTwo,
          display: 'Smooth Piano Kit',
          currentPadBankId: 'Smooth Piano Kit',
        }) :
        setState({
          currentPadBank: bankOne,
          display: 'Heater Kit',
          currentPadBankId: 'Heater Kit',
        });
    }
  }
  displayClipName(name) {
    if (power) {
      setState({
        display: name
      });
    }
  }
  adjustVolume(e) {
    if (power) {
      setState({
        sliderVal: e.target.value,
        display: "Volume: " + Math.round(e.target.value * 100)
      });
      setTimeout(() => clearDisplay(), 1000);
    }
  }
  clearDisplay() {
    setState({
      display: String.fromCharCode(160)
    });
  }
  render() {
    const powerSlider = power ? {
      float: 'right'
    } : {
      float: 'left'
    };
    const bankSlider = currentPadBank === bankOne ? {
      float: 'left'
    } : {
      float: 'right'
    }; {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = sliderVal
      });
    }
    return (
      <div id="drum-machine" className="inner-container">
				<PadBank  	
					power={power}
					updateDisplay={displayClipName}
					clipVolume={sliderVal}
					currentPadBank={currentPadBank} />
        
        <div className="logo">
            <div className="inner-logo ">{'FCC' + String.fromCharCode(160)}</div>
            <i className="inner-logo fa fa-free-code-camp" />
          </div>

				<div className="controls-container">
        
					<div className="control">
						<p>Power</p>
						<div onClick={powerControl} className="select">
							<div style={powerSlider} className="inner" />
						</div>
					</div>
					<p id="display">
						{display}
					</p>
					<div className="volume-slider">
						<input type="range" min="0" max="1" step="0.01" value={sliderVal} onChange={adjustVolume} />
					</div>
					<div className="control">
						<p>Bank</p>
						<div onClick={selectBank} className="select">
							<div style={bankSlider} className="inner" />
						</div>
					</div>
				</div>

			</div>
    )
  }
}

export default DrumKit;*/