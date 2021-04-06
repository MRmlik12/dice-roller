import React from 'react';
import './Content.css';
import './utils';
import getRandomDiceNumber from './utils';

interface ContentProps {
  
}

interface ContentState {
  diceImage: string,
  isRoll: boolean
}

let timer: NodeJS.Timeout;

export default class Content extends React.Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {
      diceImage: getRandomDiceNumber(),
      isRoll: false
    }
  }

  render() {
    return (
      <div className="Content">
        <img className="dice" src={this.state.diceImage} alt="One" onClick={this.rollDice} />
      </div>
    );
  }

  rollDice = () => {
    if (this.state.isRoll) {
      this.setRoll(false);
      clearTimeout(timer);
      return;
    }

    this.setRoll(true);
    console.log("XDDD");
    timer = setInterval(this.setImage, 100);
    return;
  }

  setRoll = (operator: boolean) => {
    this.setState({
      isRoll: operator
    })
  }
  
  setImage = () => {
    this.setState({
      diceImage: getRandomDiceNumber()
    });
  }
}
