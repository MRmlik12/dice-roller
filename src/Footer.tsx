import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  githubUrl = "";
  
  render() {
    return (
      <div className="Footer">
        Dice Roller Created by <a href={this.githubUrl}>MRmlik12</a>
      </div>
    );
  }
}