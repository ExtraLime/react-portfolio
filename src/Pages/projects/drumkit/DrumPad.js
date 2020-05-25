import React, { useState, useRef,useEffect} from 'react'
import {inactiveStyle, activeStyle} from './Styles'

const DrumPad1 = (props) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle)
  
  const handleKeyPress = (e) => { 
    if (e.keyCode === props.keyCode) {
      playSound()
    }
  }
  const activatePad = () => {
    if (props.power) {
      padStyle.backgroundColor ==='orange'? 
      setPadStyle(inactiveStyle):
      setPadStyle(activeStyle);
    }else{
      padStyle.marginTop === 13 ?
      setPadStyle(inactiveStyle):
      setPadStyle({
        height: 77,
        marginTop: 13,
        backgroundColor: 'grey',
        boxShadow: "0 3px grey"
      });
      }
    }
  const playSound = (e) => {
    const sound = document.getElementById(props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    activatePad();
  }
  setTimeout(() => activatePad(), 100);
  props.updateDisplay(props.clipId.replace(/-/g, ' '));

  useEffect(() => {document.addEventListener('keydown', handleKeyPress);})
return (<div id={props.clipId} 
  onClick={playSound} 
  className="drum-pad" 
  style={padStyle} >
    <audio className='clip' id={props.keyTrigger} src={props.clip}></audio>
    {props.keyTrigger}
</div>
)
}

export default DrumPad1;



/*class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        padStyle: inactiveStyle
      }
      this.playSound = this.playSound.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.activatePad = this.activatePad.bind(this);
    }
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress(e) {
      if (e.keyCode === this.props.keyCode) {
        this.playSound();
      }
    }
    activatePad() {
      if (this.props.power) {
        this.state.padStyle.backgroundColor === 'orange' ?
          this.setState({
            padStyle: inactiveStyle
          }) :
          this.setState({
            padStyle: activeStyle
          });
      } else {
        this.state.padStyle.marginTop === 13 ?
          this.setState({
            padStyle: inactiveStyle
          }) :
          this.setState({
            padStyle: {
              height: 77,
              marginTop: 13,
              backgroundColor: 'grey',
              boxShadow: "0 3px grey"
            }
          });
      }
    }
    playSound(e) {
      const sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.play();
      this.activatePad();
      setTimeout(() => this.activatePad(), 100);
      this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    }
    render() {
      return (
        <div id={this.props.clipId} 
          onClick={this.playSound} 
          className="drum-pad" 
          style={this.state.padStyle} >
            <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio>
            {this.props.keyTrigger}
        </div>
      )
    }
  }

export default DrumPad;*/