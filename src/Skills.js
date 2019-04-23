import React, { Component } from 'react';
import SectionHeader from './SectionHeader.js';

import './css/skills.css';

class Skill extends Component {
  render() {
    let stars = [];
    
    if(typeof this.props.data.rate !== 'number') {
      if(typeof this.props.data.rate === 'string') {
        stars.push(
          <span key={i} className='skills-item__rate skills-item__rate-text'>{this.props.data.rate}</span>
        );
      } else {
        return;
      }
    } else {
      for(var i = 1; i <= 5; i++) {
        let className = 'skills-item__rate';
        
        if(this.props.data.rate >= i) {
          className += ' skills-item__rate-matched';
        }
        
        stars.push(
          <span key={i} className={className}>&#10026;</span>
        );
      }
    }
    
    return (
      <div className='skills-item'>
        <div>{this.props.data.name}</div>
        <div>{stars}</div>
      </div>
    )
  }
}

class Skills extends Component {
  render() {
    return (
      <div className="cv-section">
        <SectionHeader title={this.props.title} />
        
        {this.props.data.map((item, index) => {
          return <Skill data={item} key={index} />
        })}
      </div>
    );
  }
}

export default Skills;